import { Coffee, Package, Tag, MessageCircle } from "lucide-react";

export const subjects = [
  { id: "retail", label: "Retail Inquiry", icon: Coffee },
  { id: "wholesale", label: "Wholesale & Cafe Supply", icon: Package },
  { id: "private-label", label: "Private Label / Roasting", icon: Tag },
  { id: "feedback", label: "General Feedback", icon: MessageCircle },
];

/** Pre-selected inquiry topic when the form mounts. */
export const defaultSubjectId = "wholesale";

export const contactSection = {
  eyebrow: "Get In Touch With Our Roastery",
  heading: "Let's Connect & Brew Together",
  intro:
    "Whether you want to place a custom order, inquire about wholesale supply, or simply chat coffee, our team is here for you.",
  infoHeading: "Contact Information",
  infoIntro: "Direct inquiries for wholesale, distribution & general feedback.",
  formHeading: "Send a Message",
  hoursLabel: "Roastery Operating Hours",
  emailLabel: "Email Us",
  copyLabel: "Copy",
  copiedLabel: "Copied",
  copyResetMs: 3000,
  locationLabel: "Roastery & Estate",
  whatsappCta: "Chat On WhatsApp",
  successMessage:
    "Message received! Our master roaster team will contact you shortly.",
  resendCta: "Send another inquiry",
  fieldLabels: {
    firstName: "First Name",
    lastName: "Last Name",
    email: "Email Address",
    phone: "Phone / WhatsApp",
    subject: "Inquiry Topic",
    message: "Your Message / Inquiry Details",
  },
  placeholders: {
    firstName: "Kasun",
    lastName: "Fernando",
    email: "kasun@example.com",
    phone: "+94 78 824 2522",
    message:
      "Tell us about your requirements, orders, or any questions...",
  },
};

export const emptyForm = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  subject: subjects.find((s) => s.id === defaultSubjectId).label,
  message: "",
};
