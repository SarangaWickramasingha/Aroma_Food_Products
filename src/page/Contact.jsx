import { forwardRef, useState } from "react";
import contactBg from "../assets/Contactus.png";

const subjects = [
  { label: "Retail Inquiry", icon: "☕" },
  { label: "Wholesale & Cafe Supply", icon: "📦" },
  { label: "Private Label / Roasting", icon: "🏷️" },
  { label: "General Feedback", icon: "💬" }
];

const faqs = [
  {
    q: "Where is Aroma Food Products located?",
    a: "Our roastery and processing facilities are based in Kambadola, Dela, Ratnapura, nestled near Sri Lanka's pristine highland tea and coffee estates."
  },
  {
    q: "Do you offer islandwide delivery in Sri Lanka?",
    a: "Yes! We partner with premier courier networks to deliver fresh roasted coffee and sealed artisan snack packs across Sri Lanka within 2-3 business days."
  },
  {
    q: "Can cafes and hotels order bulk custom roasts?",
    a: "Absolutely. We supply specialty cafes, boutique hotels, and restaurants with whole bean or ground coffee in customized roast profiles and bulk packaging."
  }
];

const Contact = forwardRef((props, ref) => {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    subject: "Wholesale & Cafe Supply",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [openFaq, setOpenFaq] = useState(null);

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const copyEmail = () => {
    navigator.clipboard?.writeText("aromafoodproduct@gmail.com");
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 3000);
  };

  return (
    <section
      id="contact"
      ref={ref}
      className="relative flex min-h-screen flex-col items-center bg-cover bg-center px-6 py-24 sm:px-10 lg:px-16"
      style={{ backgroundImage: `url(${contactBg})` }}
    >
      {/* Background Dark & Tint Overlay for contrast */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/85 via-black/75 to-black/90 backdrop-blur-xs" />

      <div className="relative z-10 mx-auto w-full max-w-6xl">
        {/* Section Header */}
        <div className="mb-14 text-center">
          <p className="mb-2 text-xs font-bold uppercase tracking-[0.32em] text-[#E8D5B0]">
            Get In Touch With Our Roastery
          </p>
          <h2 className="font-serif text-3xl font-extrabold text-white sm:text-4xl md:text-5xl">
            Let’s Connect & Brew Together
          </h2>
          <p className="mt-3 text-sm text-white/70 max-w-lg mx-auto">
            Whether you want to place a custom order, inquire about wholesale supply, or simply chat coffee, our team is here for you.
          </p>
          <div className="mx-auto mt-4 h-1 w-16 rounded-full bg-[#C44A3A]" />
        </div>

        {/* Glassmorphic Contact Card */}
        <div className="grid w-full grid-cols-1 gap-12 rounded-[36px] border border-white/20 bg-gradient-to-br from-white/[0.12] to-white/[0.04] p-8 shadow-[0_8px_32px_rgba(0,0,0,0.37)] backdrop-blur-xl sm:p-12 lg:grid-cols-[1fr_1.4fr]">
          {/* Left Column: Contact Information & Quick Actions */}
          <div className="flex flex-col justify-between text-white border-b border-white/10 pb-8 lg:border-b-0 lg:border-r lg:border-white/10 lg:pr-10 lg:pb-0">
            <div>
              <h3 className="font-serif text-2xl font-bold md:text-3xl text-white">
                Contact Information
              </h3>
              <p className="mt-2 text-sm text-white/70">
                Direct inquiries for wholesale, distribution & general feedback.
              </p>

              {/* Direct Info List */}
              <div className="mt-8 flex flex-col gap-6">
                {/* Email with copy button */}
                <div className="flex items-center justify-between rounded-2xl bg-white/5 p-3.5 border border-white/10">
                  <div className="flex items-center gap-3">
                    <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#C44A3A] text-white">
                      ✉
                    </span>
                    <div>
                      <p className="text-[11px] font-bold uppercase tracking-wider text-white/60">
                        Email Us
                      </p>
                      <p className="text-xs sm:text-sm font-semibold">
                        aromafoodproduct@gmail.com
                      </p>
                    </div>
                  </div>
                  <button
                    type="button"
                    onClick={copyEmail}
                    className="cursor-pointer rounded-lg bg-white/10 px-3 py-1.5 text-xs font-semibold hover:bg-white/20 transition"
                  >
                    {copiedEmail ? "✓ Copied" : "Copy"}
                  </button>
                </div>

                {/* Location */}
                <div className="flex items-start gap-3 rounded-2xl bg-white/5 p-3.5 border border-white/10">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#C44A3A] text-white">
                    📍
                  </span>
                  <div>
                    <p className="text-[11px] font-bold uppercase tracking-wider text-white/60">
                      Roastery & Estate
                    </p>
                    <p className="text-xs sm:text-sm font-semibold leading-relaxed">
                      Kambadola, Dela, Rathnapura, Sri Lanka
                    </p>
                  </div>
                </div>

                {/* WhatsApp Chat Button */}
                <a
                  href="https://wa.me/94771234567?text=Hello%20Aroma%20Food%20Products!%20I%20have%20an%20inquiry."
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-center gap-2 rounded-2xl bg-[#25D366] p-3.5 text-sm font-bold text-white shadow-lg transition hover:bg-[#1EBE5D]"
                >
                  <span>💬</span>
                  <span>Instant Chat on WhatsApp</span>
                </a>
              </div>
            </div>

            {/* Operating Hours */}
            <div className="mt-8 rounded-2xl bg-black/20 p-4 border border-white/5">
              <p className="text-xs font-bold uppercase tracking-wider text-[#E8D5B0]">
                Roastery Operating Hours
              </p>
              <p className="mt-1 text-xs text-white/80">
                Monday – Saturday: 8:00 AM – 6:00 PM (IST)
              </p>
            </div>
          </div>

          {/* Right Column: Interactive Form */}
          <form onSubmit={handleSubmit} className="text-white">
            <h3 className="font-serif text-2xl font-bold md:text-3xl mb-6">
              Send a Message
            </h3>

            <div className="grid grid-cols-1 gap-x-6 gap-y-5 md:grid-cols-2">
              <Field
                label="First Name"
                name="firstName"
                value={form.firstName}
                onChange={handleChange}
                placeholder="Kasun"
                required
              />
              <Field
                label="Last Name"
                name="lastName"
                value={form.lastName}
                onChange={handleChange}
                placeholder="Fernando"
                required
              />
              <Field
                label="Email Address"
                name="email"
                type="email"
                value={form.email}
                onChange={handleChange}
                placeholder="kasun@example.com"
                required
              />
              <Field
                label="Phone / WhatsApp"
                name="phone"
                placeholder="+94 77 123 4567"
                value={form.phone}
                onChange={handleChange}
              />
            </div>

            {/* Subject Selector Pills */}
            <div className="mt-7">
              <label className="mb-2 block text-xs font-bold uppercase tracking-wider text-white/80">
                Inquiry Topic
              </label>
              <div className="flex flex-wrap gap-2.5">
                {subjects.map((s) => (
                  <button
                    key={s.label}
                    type="button"
                    onClick={() => setForm({ ...form, subject: s.label })}
                    className={`cursor-pointer rounded-xl px-3.5 py-2 text-xs font-semibold transition-all ${
                      form.subject === s.label
                        ? "bg-[#C44A3A] text-white shadow-md ring-1 ring-white/50"
                        : "bg-white/10 text-white/80 hover:bg-white/20"
                    }`}
                  >
                    <span>{s.icon} </span>
                    <span>{s.label}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Message Area */}
            <div className="mt-7">
              <label
                className="mb-1 block text-xs font-bold uppercase tracking-wider text-white/80"
                htmlFor="contact-message"
              >
                Your Message / Inquiry Details
              </label>
              <textarea
                id="contact-message"
                name="message"
                placeholder="Tell us about your requirements, orders, or any questions..."
                value={form.message}
                onChange={handleChange}
                required
                rows={3}
                className="w-full rounded-xl border border-white/20 bg-white/5 p-3.5 text-sm text-white placeholder-white/40 outline-none transition focus:border-[#C44A3A] focus:ring-1 focus:ring-[#C44A3A]"
              />
            </div>

            {/* Submit Confirmation & Button */}
            <div className="mt-8 flex flex-col items-end gap-3">
              {submitted ? (
                <div className="w-full rounded-2xl bg-emerald-500/20 border border-emerald-500/30 p-4 text-center">
                  <p className="text-sm font-bold text-emerald-300">
                    ✓ Message received! Our master roaster team will contact you shortly.
                  </p>
                  <button
                    type="button"
                    onClick={() => {
                      setSubmitted(false);
                      setForm({
                        firstName: "",
                        lastName: "",
                        email: "",
                        phone: "",
                        subject: "Wholesale & Cafe Supply",
                        message: "",
                      });
                    }}
                    className="mt-2 text-xs underline text-white/70 hover:text-white"
                  >
                    Send another inquiry
                  </button>
                </div>
              ) : (
                <button
                  type="submit"
                  className="inline-flex cursor-pointer items-center gap-3 rounded-full bg-[#C44A3A] px-9 py-3.5 text-sm font-bold uppercase tracking-wider text-white shadow-lg transition-all duration-300 hover:bg-[#A7382B] hover:shadow-xl hover:scale-105"
                >
                  <span>Submit Inquiry</span>
                  <svg
                    className="h-4 w-4 -rotate-12"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M2 21l21-9L2 3v7l15 2-15 2v7z" />
                  </svg>
                </button>
              )}
            </div>
          </form>
        </div>

        {/* Interactive FAQ Accordion */}
        <div className="mt-16 rounded-3xl border border-white/10 bg-black/40 p-6 sm:p-10 backdrop-blur-md text-white">
          <h3 className="font-serif text-xl font-bold sm:text-2xl text-center mb-6">
            Frequently Asked Questions
          </h3>
          <div className="flex flex-col gap-3 max-w-3xl mx-auto">
            {faqs.map((faq, idx) => (
              <div
                key={faq.q}
                className="rounded-2xl border border-white/10 bg-white/5 overflow-hidden transition"
              >
                <button
                  type="button"
                  onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                  className="flex w-full cursor-pointer items-center justify-between p-4 text-left font-semibold text-sm sm:text-base hover:text-[#E8D5B0]"
                >
                  <span>{faq.q}</span>
                  <span className="text-xl transition-transform duration-300">
                    {openFaq === idx ? "−" : "+"}
                  </span>
                </button>
                {openFaq === idx && (
                  <div className="px-4 pb-4 pt-1 text-sm text-white/75 leading-relaxed border-t border-white/5">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
});

/* Reusable Form Field */
const Field = ({
  label,
  name,
  value,
  onChange,
  type = "text",
  placeholder = "",
  required = false
}) => (
  <div>
    <label
      className="mb-1 block text-xs font-bold uppercase tracking-wider text-white/80"
      htmlFor={`contact-${name}`}
    >
      {label} {required && <span className="text-[#C44A3A]">*</span>}
    </label>
    <input
      id={`contact-${name}`}
      type={type}
      name={name}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      required={required}
      className="w-full rounded-xl border border-white/20 bg-white/5 px-3.5 py-2.5 text-sm text-white placeholder-white/40 outline-none transition focus:border-[#C44A3A] focus:ring-1 focus:ring-[#C44A3A]"
    />
  </div>
);

export default Contact;