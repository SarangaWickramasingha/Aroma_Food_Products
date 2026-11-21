import blogFrenchPress from "../assets/blog-french-press.jpg";
import avatarAuthor1 from "../assets/avatar-author-1.jpg";
import blogHighAltitude from "../assets/blog-high-altitude.jpg";
import avatarAuthor2 from "../assets/avatar-author-2.jpg";
import blogPairing from "../assets/blog-pairing.jpg";
import avatarAuthor3 from "../assets/avatar-author-3.jpg";
import blogSustainability from "../assets/blog-sustainability.jpg";

const Blogdetails = [
  {
    id: 1,
    category: "Brewing Guide",
    image: blogFrenchPress,
    date: "14 Oct 2024",
    readTime: "4 min read",
    author: "Naveen Perera",
    authorRole: "Head of Roasting",
    authorAvatar: avatarAuthor1,
    title: "Mastering the French Press with Ceylon Highland Roast",
    excerpt:
      "Unlock deep caramel undertones and rich crema with our barista-tested French press brewing techniques.",
    fullContent: `
### The Art of the Perfect Immersion Brew

Brewing coffee with a French Press is one of the most rewarding ways to experience the full aromatic spectrum of Ceylon coffee. Because the stainless steel mesh filter doesn't strip away natural coffee oils, every cup retains full body and velvety mouthfeel.

#### Step-by-step Barista Technique:
1. **The Ratio**: Use a 1:15 coffee-to-water ratio. For a 500ml press, measure 33g of freshly coarse ground Aroma coffee.
2. **Water Temperature**: Bring filtered spring water to 93°C (roughly 45 seconds after boiling).
3. **The Bloom**: Pour 100ml of hot water over the grounds, gently stir with a bamboo spoon, and let bloom for 30 seconds to release aromatic CO₂.
4. **The Pour & Steep**: Gently pour the remaining 400ml water in circular motions. Place the plunger lid on top without pressing down.
5. **The Magic Timer**: Let it steep untouched for 4 minutes.
6. **The Gentle Press**: Press down slowly with steady pressure. Pour immediately into pre-warmed ceramic mugs and savor!
    `
  },
  {
    id: 2,
    category: "Behind the Craft",
    image: blogHighAltitude,
    date: "28 Oct 2024",
    readTime: "5 min read",
    author: "Kumari Silva",
    authorRole: "Agronomy Specialist",
    authorAvatar: avatarAuthor2,
    title: "Why High Altitude Matters: The Science of Ceylon Coffee",
    excerpt:
      "Explore how cloud-kissed mountain peaks and mineral volcanic soil create the world's most sought-after coffee beans.",
    fullContent: `
### Elevated Terroir: The Highland Advantage

Altitude is the quiet architect of remarkable flavor in specialty coffee. At elevations exceeding 1,400 meters in the misty central hills of Sri Lanka, cooler ambient temperatures slow down the maturation cycle of the coffee cherry.

#### Why Slower Growth Creates Superior Flavor:
- **Dense Bean Structure**: Slow maturation allows coffee seeds to accumulate higher concentrations of complex starches and organic acids.
- **Natural Acidity Balance**: High altitude imparts bright, sparkling fruit notes balanced with deep chocolatey sweetness.
- **Pure Cloud Water Irrigation**: Mountain slopes receive natural rainforest precipitation, ensuring purity in every tree.

At Aroma Food Products, our farmer partnerships prioritize sustainable shade-grown cultivation, preserving native biodiversity while harvesting cherries of unmatched quality.
    `
  },
  {
    id: 3,
    category: "Recipes & Pairing",
    image: blogPairing,
    date: "12 Nov 2024",
    readTime: "3 min read",
    author: "Chef Dilshan",
    authorRole: "Culinary Consultant",
    authorAvatar: avatarAuthor3,
    title: "Sweet & Savory: Pairing Spiced Snacks with Dark Roasts",
    excerpt:
      "Surprise your palate with the unexpected harmony of spicy kettle-cooked cassava crisps and velvety iced coffee.",
    fullContent: `
### Contrast & Harmony: The Gourmet Experience

While classic coffee pairings typically lean sweet (pastries, chocolate), pairing rich dark roast coffee with lightly spiced, savory crisps creates an invigorating sensory contrast.

#### The Magic Flavor Pairing:
- **Smoked Chili Cassava Crisps + Iced Pour-Over Coffee**: The crisp heat of sun-cured chili awakens the taste buds, while the cool, citrusy notes of the pour-over soothe the palate.
- **Curry Leaf Chips + Espresso Macchiato**: The herbal warmth of toasted curry leaves complements the roasted nuttiness and rich crema of an espresso shot.

Try this combination at your next afternoon gathering and treat your guests to an authentic Ceylon artisan experience!
    `
  },
  {
    id: 4,
    category: "Sustainability",
    image: blogSustainability,
    date: "05 Dec 2024",
    readTime: "4 min read",
    author: "Naveen Perera",
    authorRole: "Head of Roasting",
    authorAvatar: avatarAuthor1,
    title: "Zero Waste in Food Craft: Our Commitment to the Land",
    excerpt:
      "From repurposing coffee husks as organic fertilizer to biodegradable pouch sealing, learn our eco-initiatives.",
    fullContent: `
### Crafting with Respect for Nature

True artisan craft honors both the consumer and the Earth. At Aroma Food Products, we operate on a closed-loop sustainability ethos.

#### Our Green Milestones:
1. **Coffee Cascara & Husk Re-use**: Coffee pulping by-products are cured and returned directly to grower soil as nutrient-dense organic compost.
2. **Solar-Assisted Roastery**: We harness solar energy to power clean cooling and grading machinery at our processing facility in Ratnapura.
3. **Local Fair Trade Direct Sourcing**: Eliminating intermediaries means 100% fair compensation directly to smallholder farming families.
    `
  }
];

export default Blogdetails;

export const BlogSection = {
  eyebrow: "Brewing Insights & Stories",
  heading: "Aroma Journal & Recipes",
  intro:
    "Discover brewing guides, origin stories, pairing inspirations, and sustainable culinary insights from our master roasters.",
  categories: [
    "All",
    "Brewing Guide",
    "Behind the Craft",
    "Recipes & Pairing",
    "Sustainability",
  ],
  readCta: "Read Article",
  tapHint: "Tap to open",
  backCta: "Back to Journal",
  sharePrompt:
    "Enjoyed this read? Share with fellow food & coffee enthusiasts.",
  fallbacks: {
    cardCategory: "Journal",
    modalCategory: "Story",
    readTime: "3 min read",
    authorRole: "Aroma Team",
  },
};
