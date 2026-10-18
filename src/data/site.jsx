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
    instagramUrl: "https://www.instagram.com/aromaoffi/",
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

/** Instagram's glyph, inlined for the same reason as FacebookIcon above. */
const InstagramIcon = ({ size = 24, ...props }) => (
  <svg
    viewBox="0 0 24 24"
    width={size}
    height={size}
    fill="currentColor"
    aria-hidden="true"
    {...props}
  >
    <path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405a1.441 1.441 0 0 1-2.88 0 1.44 1.44 0 0 1 2.88 0z" />
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
    label: "Follow on Facebook",
    Icon: FacebookIcon,
    href: () => site.contact.facebookUrl,
    theme: {
      base: "#1877F2",
      hover: "#3b8bf5",
      border: "#1877F2",
      glow: "rgba(24,119,242,0.78)",
    },
  },
  {
    id: "instagram",
    label: "Follow on Instagram",
    Icon: InstagramIcon,
    href: () => site.contact.instagramUrl,
    theme: {
      base:
        "linear-gradient(45deg, #ffdf9e 0%, #ffc273 25%, #e56969 50%, #c1558b 75%, #8a49a1 100%)",
      hover:
        "linear-gradient(45deg, #ffc273 0%, #e56969 25%, #c1558b 50%, #8a49a1 75%, #ffdf9e 100%)",
      border: "#c1558b",
      glow: "rgba(193,85,139,0.78)",
    },
  },
];

/** Looks up a channel by id; falls back to WhatsApp so callers always get one. */
export const getChannel = (id) =>
  socialChannels.find((channel) => channel.id === id) ?? socialChannels[0];
