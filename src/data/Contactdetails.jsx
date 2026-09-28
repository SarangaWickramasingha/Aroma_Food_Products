import { Coffee, Package, Tag, MessageCircle } from "lucide-react";

export const subjects = [
  { id: "retail", label: "Retail Inquiry", icon: Coffee },
  { id: "wholesale", label: "Wholesale & Cafe Supply", icon: Package },
  { id: "private-label", label: "Private Label / Roasting", icon: Tag },
  { id: "feedback", label: "General Feedback", icon: MessageCircle },
];

/** Pre-selected inquiry topic when the form mounts. */
export const defaultSubjectId = "wholesale";

export const faqs = [
  {
    id: "faq-location",
    q: "Where is Aroma Food Products located?",
    a: "Our roastery and processing facilities are based in Kambadola, Dela, Ratnapura, nestled near Sri Lanka's pristine highland tea and coffee estates.",
  },
  {
    id: "faq-delivery",
    q: "Do you offer islandwide delivery in Sri Lanka?",
    a: "Yes! We partner with premier courier networks to deliver fresh roasted coffee and sealed artisan snack packs across Sri Lanka within 2-3 business days.",
  },
  {
    id: "faq-bulk",
    q: "Can cafes and hotels order bulk custom roasts?",
    a: "Absolutely. We supply specialty cafes, boutique hotels, and restaurants with whole bean or ground coffee in customized roast profiles and bulk packaging.",
  },
];

export const contactSection = {
  eyebrow: "Get In Touch With Our Roastery",
  heading: "Let's Connect & Brew Together",
  intro:
    "Whether you want to place a custom order, inquire about wholesale supply, or simply chat coffee, our team is here for you.",
  infoHeading: "Contact Information",
  infoIntro: "Direct inquiries for wholesale, distribution & general feedback.",
  formHeading: "Send a Message",
  faqHeading: "Frequently Asked Questions",
  hoursLabel: "Roastery Operating Hours",
  emailLabel: "Email Us",
  copyLabel: "Copy",
  copiedLabel: "Copied",
  copyResetMs: 3000,
  locationLabel: "Roastery & Estate",
  whatsappCta: "Instant Chat on WhatsApp",
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
    phone: "+94 77 123 4567",
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
