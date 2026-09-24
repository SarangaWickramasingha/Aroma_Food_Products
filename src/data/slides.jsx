import bgcoffee from '../assets/bg-img-coffee.png';
import cfepacket from '../assets/coffee-packet.png';
import bgchips from '../assets/bg-img-chips.png';
import chipsbox from '../assets/chipsbox.png';

export const Slides = [
  {
    id: "coffee",
    productIndex: 0,
    bg: bgcoffee,
    tagline: "Pure Ceylon Artisan Coffee",
    headline: "Awaken Your Senses with Pure Ceylon Roast",
    subtext: "Crafted from hand-selected highland coffee beans, slow-roasted to rich aromatic perfection for a truly memorable cup.",
    productImage: cfepacket,
    defaultProduct: "Coffee Collection",
    badge: "100% Hand-Harvested",
    highlight: "Highland Estate Beans"
  },
  {
    id: "chips",
    productIndex: 1,
    bg: bgchips,
    tagline: "Gourmet Artisan Snacks",
    headline: "Golden Crispness with Authentic Ceylon Spices",
    subtext: "Kettle-cooked to exquisite crunch and dusted with hand-blended tropical spices. Real flavor, zero artificial preservatives.",
    productImage: chipsbox,
    defaultProduct: "Artisan Snacks",
    badge: "Crispy & All-Natural",
    highlight: "Kettle-Cooked Perfection"
  }
];