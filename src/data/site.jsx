/**
 * Site-wide, single-source-of-truth configuration.
 *
 * Anything that appears in more than one place — or that describes the business
 * rather than a specific page — lives here so it is edited in exactly one spot.
 * Previously the business email, WhatsApp number, and navigation labels were
 * duplicated across Navbar, Footer, Contact, and OrderModal.
 */

import { MessageCircle, Sprout, Sparkles, Trophy } from 'lucide-react';

export const site = {
  brand: {
    wordmark: "AROMA",
    tagline: "~Majestic Taste~",
    logoAlt: "Aroma Food Products",
    logoHomeAriaLabel: "Aroma Food Products — go to top",
    blurb:
      "Aroma Food Products is dedicated to crafting premium Ceylon single-origin coffee, blending time-honored highland agriculture with master batch roasting.",
  },

  contact: {
    email: "aromafoodproduct@gmail.com",
    /**
     * The single source of truth for the business phone. wa.me requires the
     * number in international form with no symbols, so store it that way and
     * format at render time rather than keeping two copies in sync.
     */
    whatsappNumber: "94788242522",
    whatsappGreeting:
      "Hello%20Aroma%20Food%20Products!%20I%20have%20an%20inquiry.",
    facebookUrl: "https://www.facebook.com/share/1GpGmarc6f/",
    address: "Kambadola, Dela, Rathnapura, Sri Lanka",
    hours: "Monday – Saturday: 8:00 AM – 6:00 PM (IST)",
  },
};

/** Accent claims shown in the footer and on the hero. */
export const qualityBadges = [
  { id: "pure-ceylon", icon: Sprout, text: "100% Pure Ceylon" },
  { id: "fair-trade", icon: Sparkles, text: "Direct Fair Trade" },
  { id: "drum-roasted", icon: Trophy, text: "Artisan Drum Roasted" },
];

/**
 * The product the marketing pages showcase.
 *
 * Slides, Pdetails, and StoryData each carry a `coffee` and a `chips` entry,
 * but the site currently presents coffee only. Previously that decision was
 * re-hardcoded as a `"coffee"` literal in Home, Product, and Story, so the
 * three could silently drift apart. Change it here and all three follow.
 */
export const activeProductId = "coffee";

/**
 * Resolves a product by id from either an array (Slides, Pdetails) or a keyed
 * map (StoryData). Falls back to the first array entry, or an empty list for a
 * map, so callers always receive something renderable.
 */
export const selectById = (collection, id) => {
  if (Array.isArray(collection)) {
    return collection.find((item) => item.id === id) ?? collection[0];
  }
  return collection?.[id] ?? [];
};

/**
 * The section anchors each nav item scrolls to. `title` powers the desktop bar,
 * `mobileTitle` the drawer, and `footerTitle` the footer link list — the three
 * surfaces use intentionally different wording, so all three are kept.
 */
export const navItems = [
  {
    section: "home",
    title: "Home",
    mobileTitle: "Home",
    footerTitle: "Home",
  },
  {
    section: "product",
    title: "Coffee",
    mobileTitle: "Coffee Collection",
    footerTitle: "Coffee Collection",
  },
  {
    section: "story",
    title: "Our Craft",
    mobileTitle: "Our Craft",
    footerTitle: "Our Craft Journey",
  },
  {
    section: "blog",
    title: "Journal",
    mobileTitle: "Journal",
    footerTitle: "Journal & Recipes",
  },
  {
    section: "contact",
    title: "Contact",
    mobileTitle: "Contact Us",
    footerTitle: "Contact Roastery",
  },
];

export const footerRoasts = [
  { id: "roast-1", title: "Highland Medium-Dark Roast" },
  { id: "roast-2", title: "Single-Origin Whole Bean" },
  { id: "roast-3", title: "Fine Ground Filter Roast" },
  { id: "roast-4", title: "Estate Reserve Selection" },
];

/** The single contact control in the nav bar, shown at every breakpoint. */
export const navCta = {
  label: "Contact Us",
  drawerAriaLabel: "Toggle navigation menu",
};

export const footerCopy = {
  exploreHeading: "Explore",
  roastsHeading: "Coffee Roasts",
  backToTop: "Back to Top",
  copyright:
    "Aroma Food Products. All rights reserved. Kambadola, Dela, Rathnapura, Sri Lanka.",
};

/** Builds the wa.me deep link used by the contact and order WhatsApp buttons. */
export const whatsappLink = (text = site.contact.whatsappGreeting) =>
  `https://wa.me/${site.contact.whatsappNumber}?text=${text}`;

/**
 * Lucide dropped brand marks, so Facebook's glyph is inlined here. It mirrors
 * the lucide icon contract: `size` is translated into width/height, because a
 * bare <svg> with only a viewBox falls back to the 300x150 replaced-element
 * default and would blow up the button.
 */
const FacebookIcon = ({ size = 24, ...props }) => (
  <svg
    viewBox="0 0 24 24"
    width={size}
    height={size}
    fill="currentColor"
    aria-hidden="true"
    {...props}
  >
    <path d="M22 12.06C22 6.5 17.52 2 12 2S2 6.5 2 12.06c0 5.02 3.66 9.18 8.44 9.94v-7.03H7.9v-2.91h2.54V9.85c0-2.52 1.49-3.91 3.77-3.91 1.09 0 2.24.2 2.24.2v2.46h-1.26c-1.24 0-1.63.78-1.63 1.57v1.88h2.78l-.45 2.91h-2.33V22c4.78-.76 8.44-4.92 8.44-9.94Z" />
  </svg>
);

/**
 * Every messaging CTA on the site is one of these entries, so adding a channel
 * (or restyling one) is a single edit. `href` takes an optional pre-filled
 * message — the order modal passes the built order text, the contact page
 * passes nothing and gets the default greeting. `theme` drives the button's
 * glow through CSS custom properties (see `.btn-glow` in index.css), which
 * keeps the brand colors out of JSX class strings.
 */
export const socialChannels = [
  {
    id: "whatsapp",
    label: "Chat On WhatsApp",
    Icon: MessageCircle,
    href: (text) => whatsappLink(text),
    theme: {
      base: "#1EBE5D",
      hover: "#25D366",
      border: "#25D366",
      glow: "rgba(37,211,102,0.78)",
    },
  },
  {
    id: "facebook",
    label: "Chat On Facebook",
    Icon: FacebookIcon,
    href: () => site.contact.facebookUrl,
    theme: {
      base: "#1877F2",
      hover: "#3b8bf5",
      border: "#1877F2",
      glow: "rgba(24,119,242,0.78)",
    },
  },
];

/** Looks up a channel by id; falls back to WhatsApp so callers always get one. */
export const getChannel = (id) =>
  socialChannels.find((channel) => channel.id === id) ?? socialChannels[0];
