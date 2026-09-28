import { Leaf, Flame, Sparkles } from "lucide-react";

/** Copy for the hero trust bar beneath the Home headline. */
export const homeTrustBar = {
  items: [
    { id: "origin", text: "Pure Ceylon Highland Roast" },
    { id: "location", text: "Ratnapura, Sri Lanka" },
  ],
  separator: "•",
};

export const homeTrustBadges = [
  { id: "pure", icon: Leaf, text: "100% Pure Ceylon Arabica/Robusta" },
  { id: "roasted", icon: Flame, text: "Artisan Drum Roasted" },
  { id: "estate", icon: Sparkles, text: "Direct Estate Sourcing" },
];

export const homeCta = {
  primaryText: "Explore Coffee Collection",
  secondaryText: "Our Craft Story",
};
