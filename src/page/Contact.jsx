import { forwardRef, useState } from "react";
import contactBg from "../assets/Contactus.png";

const subjects = ["General Inquiry", "Brand Identity", "UI/UX", "Packaging Design"];

const Contact = forwardRef((props, ref) => {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    subject: "General Inquiry",
    message: "",
  });

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = () => {
    console.log(form); // later: send to email service / backend
  };

  return (
    <section
      ref={ref}
      className="min-h-screen bg-cover bg-center py-16 px-6 flex flex-col items-center"
      style={{ backgroundImage: `url(${contactBg})` }}
    >
      <h2 className="text-white text-4xl md:text-5xl font-bold mb-10">
        Contact Us
      </h2>

      {/* Glass card */}
      <div
        className="w-full max-w-[1196px] rounded-[40px] border-2 border-white/60
                   bg-gradient-to-br from-white/[0.14] to-white/[0.06]
                   backdrop-blur-[20px] shadow-[0_4px_24px_rgba(0,0,0,0.20)]
                   p-10 md:p-14 grid grid-cols-1 lg:grid-cols-[1fr_1.5fr] gap-12"
      >
        {/* Left: contact info */}
        <div className="text-white">
          <h3 className="text-2xl md:text-3xl font-bold mb-16">
            Contact Information
          </h3>

          <div className="flex items-center gap-3 mb-10">
            <svg className="w-5 h-5 shrink-0" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20 4H4a2 2 0 00-2 2v12a2 2 0 002 2h16a2 2 0 002-2V6a2 2 0 00-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
            </svg>
            <span className="font-semibold">aromafoodproduct@gmail.com</span>
          </div>

          <div className="flex items-start gap-3">
            <svg className="w-5 h-5 shrink-0 mt-1" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5a2.5 2.5 0 110-5 2.5 2.5 0 010 5z" />
            </svg>
            <span className="font-semibold text-sm leading-relaxed">
              345 3A Raja weediya,<br />
              Angammana sumana,<br />
              Angammana, Rathnapura.
            </span>
          </div>
        </div>

        {/* Right: form */}
        <div className="text-white">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-8">
            <Field label="First Name" name="firstName" value={form.firstName} onChange={handleChange} />
            <Field label="Last Name" name="lastName" value={form.lastName} onChange={handleChange} />
            <Field label="Email" name="email" type="email" value={form.email} onChange={handleChange} />
            <Field label="Phone Number" name="phone" placeholder="+91" value={form.phone} onChange={handleChange} />
          </div>

          {/* Subject */}
          <p className="text-sm font-semibold mt-10 mb-4">Select Subject?</p>
          <div className="flex flex-wrap gap-x-8 gap-y-3">
            {subjects.map((s) => (
              <label key={s} className="flex items-center gap-2 text-xs cursor-pointer">
                <input
                  type="radio"
                  name="subject"
                  value={s}
                  checked={form.subject === s}
                  onChange={handleChange}
                  className="accent-white"
                />
                {s}
              </label>
            ))}
          </div>

          {/* Message */}
          <div className="mt-10">
            <label className="text-sm font-semibold block mb-1">Message</label>
            <input
              type="text"
              name="message"
              placeholder="Write your message.."
              value={form.message}
              onChange={handleChange}
              className="w-full bg-transparent border-b border-white/70 pb-2 text-sm
                         placeholder-white/50 outline-none focus:border-white transition"
            />
          </div>

          {/* Send button */}
          <div className="flex justify-end mt-12">
            <button
              onClick={handleSubmit}
              className="text-white font-semibold flex items-center gap-2
                         hover:opacity-80 transition"
            >
              Send Message
              <svg className="w-6 h-6 -rotate-12" fill="currentColor" viewBox="0 0 24 24">
                <path d="M2 21l21-9L2 3v7l15 2-15 2v7z" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
});

/* Reusable underlined input */
const Field = ({ label, name, value, onChange, type = "text", placeholder = "" }) => (
  <div>
    <label className="text-sm font-semibold block mb-1">{label}</label>
    <input
      type={type}
      name={name}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className="w-full bg-transparent border-b border-white/70 pb-2 text-sm
                 placeholder-white/50 outline-none focus:border-white transition"
    />
  </div>
);

export default Contact;