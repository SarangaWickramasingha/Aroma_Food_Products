const BREVO_ENDPOINT = "https://api.brevo.com/v3/smtp/email";

const clean = (value) => String(value ?? "").trim();
const isEmail = (value) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);

const result = (status, body) => ({ status, body });

export async function sendContactEmail(payload = {}, env = process.env) {
  const firstName = clean(payload.firstName);
  const lastName = clean(payload.lastName);
  const email = clean(payload.email).toLowerCase();
  const phone = clean(payload.phone);
  const subject = clean(payload.subject) || "General inquiry";
  const message = clean(payload.message);

  const errors = [];

  if (!firstName || firstName.length > 80) {
    errors.push("Enter a valid first name.");
  }
  if (!lastName || lastName.length > 80) {
    errors.push("Enter a valid last name.");
  }
  if (!isEmail(email) || email.length > 254) {
    errors.push("Enter a valid email address.");
  }
  if (phone.length > 50) {
    errors.push("Phone number is too long.");
  }
  if (subject.length > 120) {
    errors.push("Inquiry topic is too long.");
  }
  if (message.length < 10 || message.length > 5000) {
    errors.push("Message must be between 10 and 5000 characters.");
  }

  if (errors.length) {
    return result(400, { ok: false, errors });
  }

  const apiKey = clean(env.BREVO_API_KEY);
  const toEmail = clean(env.CONTACT_TO_EMAIL);
  const fromEmail = clean(env.CONTACT_FROM_EMAIL);
  const fromName = clean(env.CONTACT_FROM_NAME) || "No reply";

  if (
    !apiKey ||
    !isEmail(toEmail) ||
    !isEmail(fromEmail)
  ) {
    return result(500, {
      ok: false,
      error: "Email service is not configured.",
    });
  }

  const fullName = `${firstName} ${lastName}`.trim();
  const textContent = [
    `New inquiry from ${fullName}`,
    `Name: ${fullName}`,
    `Email: ${email}`,
    `Phone: ${phone || "Not provided"}`,
    `Topic: ${subject}`,
    "",
    "Message:",
    message,
  ].join("\n");

  let response;

  try {
    response = await fetch(BREVO_ENDPOINT, {
      method: "POST",
      headers: {
        accept: "application/json",
        "api-key": apiKey,
        "content-type": "application/json",
      },
      body: JSON.stringify({
        sender: { name: fromName.slice(0, 70), email: fromEmail },
        to: [{ email: toEmail }],
        replyTo: { email, name: fullName.slice(0, 70) },
        subject: `Website inquiry: ${subject}`,
        textContent,
        tags: ["website-contact"],
      }),
    });
  } catch (error) {
    console.error("Brevo request failed", error?.message ?? error);
    return result(502, {
      ok: false,
      error: "Email could not be sent right now.",
    });
  }

  if (!response.ok) {
    console.error("Brevo rejected request", response.status);
    return result(502, {
      ok: false,
      error: "Email could not be sent right now.",
    });
  }

  return result(200, { ok: true });
}
