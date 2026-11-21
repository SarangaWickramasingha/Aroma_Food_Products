import img1 from "../assets/testimg1.jpg";
import storyCoffeeHarvest from "../assets/story-coffee-harvest.jpg";
import storyCoffeeRoasting from "../assets/story-coffee-roasting.jpg";
import storyCoffeePackaging from "../assets/story-coffee-packaging.jpg";
import storyChipsSourcing from "../assets/story-chips-sourcing.jpg";
import storyChipsSlicing from "../assets/story-chips-slicing.jpg";
import storyChipsFrying from "../assets/story-chips-frying.jpg";
import storyChipsSpicing from "../assets/story-chips-spicing.jpg";

export const StoryData = {
  coffee: [
    {
      id: "c-step1",
      title: "Hand-Picked at Dawn",
      subtitle: "Highland Harvest",
      tag: "Harvesting",
      img: storyCoffeeHarvest,
      description: "Our story begins in mist-covered mountain plantations. Skilled growers hand-pluck only the ripest ruby-red coffee cherries, ensuring maximum natural sugars and rich flavor development in every bean.",
      stat: "1,400m+ Elevation"
    },
    {
      id: "c-step2",
      title: "Pulping & Sun-Drying",
      subtitle: "The Natural Curing",
      tag: "Curing",
      img: img1,
      description: "Harvested cherries are pulped using clean mountain spring water, fermented naturally, and laid out on raised wooden drying beds under tropical sun until optimum moisture equilibrium is achieved.",
      stat: "14 Days Sun-Dried"
    },
    {
      id: "c-step3",
      title: "Artisan Drum Roasting",
      subtitle: "Mastering the Heat",
      tag: "Roasting",
      img: storyCoffeeRoasting,
      description: "Small batches are roasted in cast-iron drum roasters by master roasters who listen for the distinct 'first crack'. Precise airflow and temperature bring out luscious notes of cacao, caramel, and floral aroma.",
      stat: "Small Batches (15kg)"
    },
    {
      id: "c-step4",
      title: "Degassing & Fresh Packing",
      subtitle: "Sealing the Aroma",
      tag: "Packaging",
      img: storyCoffeePackaging,
      description: "Immediately after resting, our coffee is nitrogen-flushed and sealed in multi-layer valve pouches to lock in volatile aromatic oils, guaranteeing freshly roasted peak flavor upon opening.",
      stat: "100% Aroma Lock"
    }
  ],
  chips: [
    {
      id: "s-step1",
      title: "Farm-Fresh Selection",
      subtitle: "Pure Island Produce",
      tag: "Sourcing",
      img: storyChipsSourcing,
      description: "We partner directly with sustainable local farmers to harvest prime golden cassava roots and potatoes at peak maturity, free from synthetic pesticides or harsh chemicals.",
      stat: "Direct Fair Trade"
    },
    {
      id: "s-step2",
      title: "Ultra-Thin Precision Slice",
      subtitle: "Crisp Preparation",
      tag: "Preparation",
      img: storyChipsSlicing,
      description: "Roots are washed in pure mountain water and sliced into razor-thin ribbons that allow rapid heat circulation, ensuring an extraordinarily airy and crisp texture without excess oil absorption.",
      stat: "0.8mm Precision Slice"
    },
    {
      id: "s-step3",
      title: "Kettle Batch Frying",
      subtitle: "Golden Crunch",
      tag: "Cooking",
      img: storyChipsFrying,
      description: "Slow-cooked in continuous stirred kettle pots using fresh, high-smoke plant oil. Every batch achieves an even, glowing golden amber shade with an acoustic crunch in every bite.",
      stat: "100% Trans-Fat Free"
    },
    {
      id: "s-step4",
      title: "Artisan Spice Tossing",
      subtitle: "Ceylon Herb Symphony",
      tag: "Seasoning",
      img: storyChipsSpicing,
      description: "While still warm, the crisps are tumbled with our signature spice mixture of sun-cured Ceylon chili, roasted curry leaves, and mineral-rich rock salt for an irresistible savory finish.",
      stat: "Secret Heritage Spice"
    }
  ]
};

export const Storydetails = StoryData.coffee;

export const StorySection = {
  eyebrow: "Our Craft & Heritage",
  heading: "From Highland Bean to Aromatic Sip",
  intro:
    "Step behind the scenes and witness the artisan discipline, time-honored curing, and drum roasting poured into every batch of pure Ceylon coffee.",
  statLabel: "Benchmark",
  defaultTag: "Craft Phase",
};