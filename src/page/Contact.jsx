import { forwardRef, useState } from "react";
import {
  Mail,
  MapPin,
  CheckCircle2,
  Send,
  MessageCircle,
} from "lucide-react";
import contactBg from "../assets/Contactus.png";
import {
  subjects,
  contactSection,
  emptyForm,
} from "../data/Contactdetails";
import { faqs, faqHeading } from "../data/Faqdetails";
import { site, whatsappLink } from "../data/site";
import FaqItem from "../components/FaqItem";

const Contact = forwardRef((props, ref) => {
  const [form, setForm] = useState(emptyForm);
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
    navigator.clipboard?.writeText(site.contact.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), contactSection.copyResetMs);
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
          <p className="eyebrow text-gold-soft">
            {contactSection.eyebrow}
          </p>
          <h2 className="heading-serif font-extrabold text-3xl text-white sm:text-4xl md:text-5xl">
            {contactSection.heading}
          </h2>
          <p className="mt-3 text-sm text-white/70 max-w-lg mx-auto">
            {contactSection.intro}
          </p>
          <div className="divider-bar mx-auto mt-4 rounded-full" />
        </div>

        {/* Glassmorphic Contact Card */}
        <div className="grid w-full grid-cols-1 gap-12 rounded-[36px] border border-white/20 bg-gradient-to-br from-white/[0.12] to-white/[0.04] p-8 shadow-[0_8px_32px_rgba(0,0,0,0.37)] backdrop-blur-xl sm:p-12 lg:grid-cols-[1fr_1.4fr]">
          {/* Left Column: Contact Information & Quick Actions */}
          <div className="flex flex-col justify-between text-white border-b border-white/10 pb-8 lg:border-b-0 lg:border-r lg:border-white/10 lg:pr-10 lg:pb-0">
            <div>
              <h3 className="heading-serif text-2xl md:text-3xl text-white">
                {contactSection.infoHeading}
              </h3>
              <p className="mt-2 text-sm text-white/70">
                {contactSection.infoIntro}
              </p>

              {/* Direct Info List */}
              <div className="mt-8 flex flex-col gap-6">
                {/* Email with copy button */}
                <div className="flex items-center justify-between rounded-2xl bg-white/5 p-3.5 border border-white/10">
                  <div className="flex items-center gap-3">
                    <span className="icon-badge">
                      <Mail size={18} />
                    </span>
                    <div>
                      <p className="eyebrow text-white/60">
                        {contactSection.emailLabel}
                      </p>
                      <p className="text-xs sm:text-sm font-semibold">
                        {site.contact.email}
                      </p>
                    </div>
                  </div>
                  <button
                    type="button"
                    onClick={copyEmail}
                    className="cursor-pointer rounded-lg bg-white/10 px-3 py-1.5 text-xs font-semibold hover:bg-white/20 transition inline-flex items-center gap-1"
                  >
                    {copiedEmail ? <CheckCircle2 size={13} /> : null}
                    {copiedEmail
                      ? contactSection.copiedLabel
                      : contactSection.copyLabel}
                  </button>
                </div>

                {/* Location */}
                <div className="flex items-start gap-3 rounded-2xl bg-white/5 p-3.5 border border-white/10">
                  <span className="icon-badge">
                    <MapPin size={18} />
                  </span>
                  <div>
                    <p className="eyebrow text-white/60">
                      {contactSection.locationLabel}
                    </p>
                    <p className="text-xs sm:text-sm font-semibold leading-relaxed">
                      {site.contact.address}
                    </p>
                  </div>
                </div>

                {/* WhatsApp Chat Button */}
                <a
                  href={whatsappLink()}
                  target="_blank"
                  rel="noreferrer"
                  className="relative inline-flex w-full items-center justify-center gap-2 rounded-[1em] border-4 border-[#25D366] bg-[#1EBE5D] px-12 py-4 text-[15px] font-bold text-white text-shadow-[0_0_0.5em_#25D366] shadow-[0_0_1em_0.25em_#25D366,0_0_4em_1em_rgba(37,211,102,0.781),inset_0_0_0.75em_0.25em_#25D366] transition-all duration-300 after:pointer-events-none after:absolute after:top-[120%] after:left-0 after:h-full after:w-full after:content-[''] after:bg-[rgba(37,211,102,0.781)] after:blur-[2em] after:opacity-70 after:[transform:perspective(1.5em)_rotateX(35deg)_scale(1,0.6)] hover:bg-[#25D366] hover:text-white hover:shadow-[0_0_1em_0.25em_#25D366,0_0_4em_2em_rgba(37,211,102,0.781),inset_0_0_0.75em_0.25em_#25D366] active:shadow-[0_0_0.6em_0.25em_#25D366,0_0_2.5em_2em_rgba(37,211,102,0.781),inset_0_0_0.5em_0.25em_#25D366]"
                >
                  <MessageCircle size={18} />
                  <span>{contactSection.whatsappCta}</span>
                </a>
              </div>
            </div>

            {/* Operating Hours */}
            <div className="mt-8 rounded-2xl bg-black/20 p-4 border border-white/5">
              <p className="eyebrow text-gold-soft">
                {contactSection.hoursLabel}
              </p>
              <p className="mt-1 text-xs text-white/80">
                {site.contact.hours}
              </p>
            </div>
          </div>

          {/* Right Column: Interactive Form */}
          <form onSubmit={handleSubmit} className="text-white">
            <h3 className="heading-serif text-2xl md:text-3xl mb-6">
              {contactSection.formHeading}
            </h3>

            <div className="grid grid-cols-1 gap-x-6 gap-y-5 md:grid-cols-2">
              <Field
                label={contactSection.fieldLabels.firstName}
                name="firstName"
                value={form.firstName}
                onChange={handleChange}
                placeholder={contactSection.placeholders.firstName}
                required
              />
              <Field
                label={contactSection.fieldLabels.lastName}
                name="lastName"
                value={form.lastName}
                onChange={handleChange}
                placeholder={contactSection.placeholders.lastName}
                required
              />
              <Field
                label={contactSection.fieldLabels.email}
                name="email"
                type="email"
                value={form.email}
                onChange={handleChange}
                placeholder={contactSection.placeholders.email}
                required
              />
              <Field
                label={contactSection.fieldLabels.phone}
                name="phone"
                placeholder={contactSection.placeholders.phone}
                value={form.phone}
                onChange={handleChange}
              />
            </div>

            {/* Subject Selector Pills */}
            <div className="mt-7">
              <label className="label mb-2 text-white/80">
                {contactSection.fieldLabels.subject}
              </label>
              <div className="flex flex-wrap gap-2.5">
                {subjects.map(({ id, label, icon: Icon }) => (
                  <button
                    key={id}
                    type="button"
                    onClick={() => setForm({ ...form, subject: label })}
                    className={`cursor-pointer rounded-xl px-3.5 py-2 text-xs font-semibold transition-all inline-flex items-center gap-1.5 ${
                      form.subject === label
                        ? "bg-brand-red text-white shadow-md ring-1 ring-white/50"
                        : "bg-white/10 text-white/80 hover:bg-white/20"
                    }`}
                  >
                    <Icon size={13} />
                    <span>{label}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Message Area */}
            <div className="mt-7">
              <label
                className="label mb-1 text-white/80"
                htmlFor="contact-message"
              >
                {contactSection.fieldLabels.message}
              </label>
              <textarea
                id="contact-message"
                name="message"
                placeholder={contactSection.placeholders.message}
                value={form.message}
                onChange={handleChange}
                required
                rows={3}
                className="field field-light resize-none px-3.5 py-3"
              />
            </div>

            {/* Submit Confirmation & Button */}
            <div className="mt-8 flex flex-col items-end gap-3">
              {submitted ? (
                <div className="w-full rounded-2xl bg-emerald-500/20 border border-emerald-500/30 p-4 text-center">
                  <p className="text-sm font-bold text-emerald-300 inline-flex items-center justify-center gap-2">
                    <CheckCircle2 size={15} />
                    {contactSection.successMessage}
                  </p>
                  <button
                    type="button"
                    onClick={() => {
                      setSubmitted(false);
                      setForm(emptyForm);
                    }}
                    className="mt-2 text-xs underline text-white/70 hover:text-white"
                  >
                    {contactSection.resendCta}
                  </button>
                </div>
              ) : (
                <button
                  type="submit"
                  className="btn btn-primary px-9"
                >
                  Submit Inquiry
                  <Send size={16} className="-rotate-12" />
                </button>
              )}
            </div>
          </form>
        </div>

        {/* Interactive FAQ Accordion */}
        <div className="mt-16 rounded-3xl border border-white/10 bg-black/40 p-6 sm:p-10 backdrop-blur-md text-white">
          <h3 className="heading-serif text-xl sm:text-2xl text-center mb-6">
            {faqHeading}
          </h3>
          <div className="flex flex-col gap-3 max-w-3xl mx-auto">
            {faqs.map((faq, idx) => (
              <FaqItem
                key={faq.id}
                question={faq.q}
                answer={faq.a}
                isOpen={openFaq === idx}
                onToggle={() => setOpenFaq(openFaq === idx ? null : idx)}
              />
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
      className="label text-white/80"
      htmlFor={`contact-${name}`}
    >
      {label} {required && <span className="text-brand-red">*</span>}
    </label>
    <input
      id={`contact-${name}`}
      type={type}
      name={name}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      required={required}
      className="field field-light px-3.5 py-2.5"
    />
  </div>
);

export default Contact;