import cfepacket from '../assets/coffee-packet.png';
import chipsbox from '../assets/chipsbox.png';

const Pdetails = [
  {
    id: "coffee",
    label: "Artisan Coffee",
    category: "Signature Coffee",
    tagline: "Travel the world through every rich sip",
    description:
      "Crafted from carefully selected high-altitude Ceylon beans, our signature roast delivers a silky smooth, full-bodied flavor with a balanced, lingering aroma. Whether starting your morning or taking a mindful pause, each cup brings warmth, clarity, and pure delight.",
    stats: [
      { value: "25K+", label: "Happy Coffee Lovers" },
      { value: "12K+", label: "Cups Enjoyed Daily" },
      { value: "180+", label: "Retail & Cafe Partners" },
      { value: "4.9★", label: "Customer Rating" },
    ],
    features: [
      { label: "Roast Level", value: "Medium-Dark Roast" },
      { label: "Origin", value: "Ceylon Highlands (1,400m+)" },
      { label: "Process", value: "Sun-Dried & Small-Batch Roasted" },
      { label: "Grind", value: "Fine Ground & Whole Bean" }
    ],
    flavorNotes: ["Velvety Dark Cocoa", "Caramelized Hazelnut", "Warm Cinnamon Spice"],
    packSizes: ["100g Pouch", "250g Tin", "500g Fresh Pack", "1kg Whole Bean"],
    price: "From Rs. 850",
    sideText: "Pure Ceylon · Master Roasted ·",
    sideNote:
      "Experience the true essence of premium Ceylon coffee made for cherished everyday moments. Roasted in artisanal batches, capturing deep chocolatey undertones with a velvety crema finish.",
    bg: "#F5F0E8",
    cardBg: "#FFFDF9",
    accent: "#2C1A0E",
    badge: "#2C1A0E",
    badgeText: "#FFFFFF",
    titleColor: "#1A1008",
    productImage: cfepacket,
    imageAlt: "Aroma Pure Ceylon Coffee Packet",
    btnBg: "#2C1A0E",
    btnText: "#FFFFFF",
    circleColor: "#E8D5B0",
    stampTextColor: "#2C1A0E",
  },
  {
    id: "chips",
    label: "Artisan Snacks",
    category: "Gourmet Crisps",
    tagline: "Irresistibly crispy, crafted with authentic spice",
    description:
      "Thinly sliced natural cassava and farm-fresh potatoes, kettle-cooked to golden crispness and tossed in our secret blend of aromatic Ceylon spices. Light, crunchy, and delightfully savory with 100% natural ingredients and no artificial flavors.",
    stats: [
      { value: "45K+", label: "Packs Savored" },
      { value: "100%", label: "Natural Ingredients" },
      { value: "0%", label: "Artificial Colors/MSG" },
      { value: "4.8★", label: "Crunch Score" },
    ],
    features: [
      { label: "Crunch Level", value: "Kettle-Crisped Extra Crunch" },
      { label: "Ingredients", value: "Farm Cassava, Cold-Pressed Oil, Spices" },
      { label: "Spice Grade", value: "Mild Sweet & Spicy Kick" },
      { label: "Shelf Life", value: "6 Months Fresh Foil-Sealed" }
    ],
    flavorNotes: ["Smoked Ceylon Chili", "Toasted Curry Leaf", "Himalayan Pink Salt"],
    packSizes: ["60g Snack Pack", "150g Family Pack", "Party Box (12pk)"],
    price: "From Rs. 350",
    sideText: "Crisp & Savory · Island Spice ·",
    sideNote:
      "Crafted with farm-fresh harvest from local grower communities. Golden fried to crisp perfection and seasoned with timeless island spices for an unbeatable gourmet crunch.",
    bg: "#FAF1E6",
    cardBg: "#FFFDF9",
    accent: "#C44A3A",
    badge: "#C44A3A",
    badgeText: "#FFFFFF",
    titleColor: "#2C1A0E",
    productImage: chipsbox,
    imageAlt: "Aroma Gourmet Artisan Spiced Chips Box",
    btnBg: "#C44A3A",
    btnText: "#FFFFFF",
    circleColor: "#F3D6B5",
    stampTextColor: "#C44A3A",
  }
];

export default Pdetails;