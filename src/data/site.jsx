/**
 * Site-wide, single-source-of-truth configuration.
 *
 * Anything that appears in more than one place — or that describes the business
 * rather than a specific page — lives here so it is edited in exactly one spot.
 * Previously the business email, WhatsApp number, and navigation labels were
 * duplicated across Navbar, Footer, Contact, and OrderModal.
 */

import { Sprout, Sparkles, Trophy } from 'lucide-react';

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
    whatsappNumber: "94771234567",
    whatsappGreeting:
      "Hello%20Aroma%20Food%20Products!%20I%20have%20an%20inquiry.",
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
  calloutKicker: "Pure Ceylon Roastery",
  calloutHeading: "Experience the Aroma of Highland Ceylon Coffee",
  calloutBody:
    "Direct estate-to-cup coffee crafted with artisan passion in Ratnapura, Sri Lanka.",
  calloutPrimary: "Get in Touch",
  calloutSecondary: "Explore Our Story",
  exploreHeading: "Explore",
  roastsHeading: "Coffee Roasts",
  backToTop: "Back to Top",
  copyright:
    "Aroma Food Products. All rights reserved. Kambadola, Dela, Rathnapura, Sri Lanka.",
};

/** Builds the wa.me deep link used by the contact and order WhatsApp buttons. */
export const whatsappLink = (text = site.contact.whatsappGreeting) =>
  `https://wa.me/${site.contact.whatsappNumber}?text=${text}`;
