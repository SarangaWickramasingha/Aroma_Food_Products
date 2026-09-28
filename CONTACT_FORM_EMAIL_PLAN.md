# Contact Form Email Delivery — Implementation Plan

**Goal:** When a visitor submits the inquiry form in `src/page/Contact.jsx`, an email
containing their details is delivered to `aromafoodproduct@gmail.com`.

**Stack constraint:** React 19 + Vite 8 SPA, deployed on Vercel. No backend exists today.

---

## 1. Current State

`Contact.jsx:54` is a stub:

```js
const handleSubmit = (e) => {
  e.preventDefault();
  setSubmitted(true);
};
```

It never leaves the browser. The success banner at `Contact.jsx:255` is shown
unconditionally. Nothing is validated, sent, or stored. (The Footer newsletter was
removed for the same reason — it was decorative only.)

---

## 2. Technology Decision

Three pieces are needed: a place to run code on the server, a way to deliver email, and a
client that talks to the server.

### 2.1 Where the server code lives

| Option | Verdict |
| --- | --- |
| **`/api/*.js` in the Vercel project root** | **Recommended.** Zero new build tooling, no new dependencies, no framework migration. Vercel compiles each file in `/api` into a Node.js serverless function. |
| Add Nitro to Vite | Vercel's own Vite docs point here, but it means adding a server layer, a new build output, and a new dependency for a single endpoint. Not justified for one form. |
| Migrate to Next.js | Out of scope. Would rewrite the routing, deployment, and the entire component tree. |

**Honest caveat:** Vercel's Vite documentation steers you toward Nitro and does not
explicitly document the `/api` directory for Vite projects. The `/api` directory is a
platform-level feature that works regardless of framework, but because the docs don't
promise it for Vite, **step 8 below includes an explicit verification step**, and the
Nitro path is the documented fallback if `/api` turns out not to be picked up.

### 2.2 How the email is delivered

| Option | Verdict |
| --- | --- |
| **Resend (HTTP API)** | **Recommended.** |
| Nodemailer + Gmail SMTP (App Password) | Fallback only. |
| EmailJS | Rejected. Runs in the browser, so the API key is readable by anyone who views source. |
| Formspree / Web3Forms / Basin | Rejected for now. Works with no backend, but the form data transits a third party you don't control, free tiers are tightly rate-limited, and you can't add validation, logging, or custom delivery. |

**Why Resend:**

- **HTTP, not SMTP.** Vercel's guidance is explicit that a provider's HTTP API is the
  reliable path on Functions, because the send is a single awaited `fetch` call. SMTP
  needs a live TCP socket for the whole handshake, and Vercel pauses a function's
  work the moment it responds — the classic symptom being a `200 OK` with a clean log
  and no email ever delivered.
- **Node.js runtime.** No config needed. (The Edge runtime would also work for an HTTP
  provider, but Node is the default and needs no declaration.)
- **One-click install from the Vercel Marketplace** writes `RESEND_API_KEY` into the
  project for you.
- **Free tier:** 3,000 emails/month, capped at 100/day, up to 3 verified domains.
  Comfortably above a contact form's volume.
- Full production access from signup — no sandbox, no approval wait.

**Why Gmail SMTP is only a fallback:** it does work on Vercel (ports 465 and 587 are
open; only port 25 is blocked), and it sends from the real address. But it requires 2FA
plus an App Password, Google aggressively throttles and flags mail originating from
datacenter IP ranges, and Vercel explicitly advises against it. It's a reasonable
"get something working tonight" option, not something to build on.

---

## 3. ⚠️ Blocker to Resolve First: The Sending Domain

Resend will not send from an arbitrary address. The `from` field must be a domain you've
verified by adding DNS records. This is the one thing that needs a decision before any
code gets written.

- **`*.vercel.app` cannot be used.** Vercel doesn't let you add MX/TXT records for
  those subdomains, so you can never verify it in Resend.
- **A free sending address is not a workaround.** Resend's `onboarding@resend.dev` can
  only send **to the address on the Resend account** — which for this project would be
  `aromafoodproduct@gmail.com`. Convenient, because that's the destination, but it's
  explicitly test-only and is not a production configuration.

**So the real question is whether a custom domain exists.** Recommended path:

1. Register a domain (e.g. `aromafoodproducts.lk`), point it at Vercel.
2. Add the same domain in Resend → Domains, and add the DNS records it gives you.
3. Send as `Aroma Food Products <website@aromafoodproducts.lk>`.

That yields the best deliverability and the cleanest branding, and it means replies from
customers land in a branded inbox.

**Interim option if no domain is available yet:** use the Gmail SMTP fallback in section
2.2. It works today with no domain and no DNS, at the cost of the reliability concerns
above. The plan is written so this swap is contained to one file.

---

## 4. Architecture

```
Contact.jsx  ──POST JSON──▶  /api/contact.js  ──HTTP──▶  Resend API  ──▶  Gmail inbox
  (browser)                  (Vercel Function)              (HTTPS)      aromafoodproduct@gmail.com
                                  │
                                  └── reads RESEND_API_KEY from server-only env vars
```

The API key lives **only** in the serverless function. It is never referenced in
anything under `src/`, so it cannot leak into the client bundle. Vercel keeps `/api`
out of the Vite build output, so the key is not in `dist/` either.

Request/response contract:

| | |
| --- | --- |
| `POST /api/contact` | body: `{ firstName, lastName, email, phone, subject, message, company }` |
| `200` | `{ ok: true }` — show the success banner |
| `400` | `{ ok: false, error: "..." }` — validation failed, show inline message |
| `429` | `{ ok: false, error: "..." }` — rate limited |
| `500` | `{ ok: false, error: "..." }` — send failed, offer retry |

`company` is a **honeypot** field — see section 7.

---

## 5. Files to Create

### `api/contact.js` — the serverless function

Responsibilities, in order:

1. Reject any method other than `POST` (405).
2. Parse and size-check the body; reject oversized payloads (413).
3. **Honeypot check** — if `company` is non-empty, return `200 { ok: true }` silently
   without sending. Never reveal the trap.
4. **Timing check** — if the form was submitted in under ~3 seconds, treat as a bot.
5. **Validate server-side.** Never trust the client:
   - `firstName`, `lastName`, `message` required
   - `email` must match a real pattern, not just be present
   - length caps on every field (e.g. `message` ≤ 5000 chars)
   - `subject` must be one of the four values from the `subjects` array
6. **HTML-escape every field** before interpolating into the email body. Without this,
   a message containing `<script>` or a broken tag corrupts the HTML email, and a
   crafted `from`-adjacent field is a header-injection vector.
7. Call `resend.emails.send()` with:
   - `to: "aromafoodproduct@gmail.com"`
   - `replyTo: <submitter's email>` so hitting Reply goes straight to the customer
   - `from`: the verified domain address
   - a `subject` that leads with the inquiry topic and the person's name
   - a **table-based HTML body** (email clients don't handle flexbox or grid), plus a
     `text` fallback for plain-text clients
8. **Check both `data` and `error`.** The Resend SDK returns `{ data, error }` rather
   than throwing, so an unhandled `error` looks like success. Absence of `data.id` is
   the real signal that the call never reached the provider.
9. Log the provider's `error` field server-side; return a **generic** message to the
   client so provider internals aren't exposed.

### `.env.example` — committed, no secrets

```bash
RESEND_API_KEY=re_xxxxxxxxx
CONTACT_TO_EMAIL=aromafoodproduct@gmail.com
CONTACT_FROM_EMAIL=Aroma Food Products <website@yourdomain.com>
```

### `.env.local` — real values, gitignored

`note:` `.gitignore` currently has `*.local`, which does cover `.env.local`, but **does
not cover a bare `.env`**. Add an explicit `.env` entry so an accidentally created
`.env` can never be committed.

---

## 6. Files to Modify

### `src/page/Contact.jsx`

- Replace the boolean `submitted` with a status enum:
  `idle | sending | success | error`, plus an `errorMessage` string.
- `handleSubmit` becomes `async`. It `await`s `fetch('/api/contact', …)`, then branches
  on `response.ok` and the JSON body.
- **Disable the submit button and show a spinner while `sending`** — without this,
  double-clicking fires two emails.
- On success, clear the form (move the existing reset logic out of the inline
  `onClick` and into the handler).
- On failure, **keep the form contents** and show the error. Wiping a customer's
  carefully written message because the network blipped is the worst outcome here.
- Add the honeypot input, hidden from view and from screen readers:
  `className="hidden"`, `tabIndex={-1}`, `autoComplete="off"`, `aria-hidden="true"`.
- Add a timestamp ref set on mount, for the timing check.
- Add `aria-live="polite"` to the status region so the result is announced to screen
  reader users.

### `eslint.config.js`

The current config applies `globals.browser` to every `**/*.js` file, and
`js.configs.recommended` includes `no-undef`. `api/contact.js` uses `process.env` and
Node globals, so it **will fail lint** until an override is added:

```js
{
  files: ['api/**/*.js'],
  languageOptions: { globals: { ...globals.node } },
}
```

`react-refresh/only-export-components` may also object to named exports in a `.js`
file; scope that rule to `src/**` if it complains.

### `vercel.json` — only if step 8 finds a routing conflict

The Vite preset adds a catch-all rewrite to `index.html` for the SPA. Functions are
normally matched before that fallback, but if `/api/contact` returns `index.html` in
practice, the fix is to keep the function path ahead of the SPA rewrite.

---

## 7. Spam & Abuse Protection

This endpoint is unauthenticated and sends email on request. Left unprotected it becomes
a mail cannon pointed at the business's own inbox — usable for spam, for
harassment, and to burn the Resend quota. All of the following are required, not
optional:

| Control | Implementation |
| --- | --- |
| **Honeypot** | A `company` field real users never see. Non-empty ⇒ silently drop. Catches the majority of naive bots. |
| **Time trap** | Reject submissions under ~3s. Bots fill forms instantly. |
| **Rate limit** | Vercel Firewall rate-limit rule on the path. First 1,000,000 requests/month included on every plan, and it's enforced at the edge before the function is even invoked. |
| **Length caps** | Caps on all fields, especially `message`. |
| **No header injection** | Escaping plus validation, and never place raw user input into `from`. `replyTo` is the only user-controlled header, and Resend validates it. |
| **Server-side validation** | The client already uses `required`, but that's trivially bypassed. The function re-validates everything. |

A CAPTCHA (hCaptcha or Cloudflare Turnstile) is deliberately **not** in the initial
scope — the honeypot plus rate limiting cover a low-traffic brochure site, and adding
one degrades the form for real customers. Revisit only if spam actually arrives.

---

## 8. Implementation Order

1. **Register and configure the domain** (section 3). Verify the domain in Resend and
   create an API key. *Nothing else can be validated until this is done.*
2. Install the SDK: `npm install resend`
3. Add `.env` to `.gitignore`; create `.env.example` and `.env.local`.
4. Add the ESLint override for `api/**`; run `npm run lint` to confirm it passes before
   writing the function body.
5. Write `api/contact.js` with validation, escaping, and the honeypot.
6. Rewrite `handleSubmit` in `Contact.jsx` with the status enum, loading state, and
   error handling.
7. `npm run lint` and `npm run build`.
8. **Verify `/api` is deployed on Vercel.** Push a branch, open the preview URL, and hit
   `https://<preview-url>/api/contact` with a GET. Expect `405`, **not** the SPA's
   `index.html`. A `200` with HTML means the Vite rewrite is shadowing the function —
   fix via `vercel.json` (section 6) or fall back to adding Nitro.
9. Add the Vercel Firewall rate-limit rule.
10. Add `RESEND_API_KEY` in the Vercel dashboard — **for Production and Preview both**,
    as a Secret. A key set on Preview only fails the moment you promote to production.
11. End-to-end test on the preview URL: submit the form, confirm the mail arrives, check
    Reply goes to the customer, then confirm the failure path (a bad email address
    should return a clear message and preserve the form contents).

---

## 9. Security Notes

- The API key is server-only. It must never appear in `src/`, in `Contact.jsx`, or in any
  client-fetched config.
- Vercel env vars are per-environment. Verify the key exists for **Production** before
  calling this done.
- Env var changes apply to **new** deployments — redeploy after adding the key.
- Return generic errors to the client; log detail only to Vercel's function logs.
- Validate and escape on the server even though the client validates. The client
  validation is a UX affordance, not a control.
- Don't log full message bodies to Vercel logs; they contain customer PII.

---

## 10. Post-Launch Verification

- A successful send returns `data.id` — log it. If it's missing, the call never reached
  Resend.
- Resend's dashboard is the source of truth for actual delivery: watch for bounces and
  spam complaints.
- Confirm the SPF and DKIM records Resend generated are still present in DNS.
- Gmail's spam folder is the thing to actually watch. If inquiries start landing there,
  it's a domain-reputation problem, not a code problem.

---

## 11. Open Questions

1. **Is there a custom domain, or should one be registered?** This blocks section 3 and
   is the single biggest open item.
2. **Resend vs. the Gmail SMTP fallback?** If a domain isn't available soon, the fallback
   ships first and swaps to Resend later. Contained to one file.
3. **Should a copy be sent to the customer** as an auto-acknowledgement? Nice touch, and
   it doubles as a spam filter — users who didn't submit the form report it. Low cost,
   recommend yes.
4. **Any expected volume?** Above ~100 submissions/day, the Resend free tier's daily cap
   becomes a real constraint and the Pro plan needs considering.
