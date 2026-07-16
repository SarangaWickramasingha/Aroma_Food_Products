import { forwardRef } from "react";
import StoryCard from "../components/StoryCard";
import { Storydetails, ChipsStorydetails } from "../data/Storydetails";

const Story = forwardRef(({ activeIndex }, ref) => {
  // Determine text and array depending on active index state (0 = Coffee, 1 = Chips)
  const isCoffee = activeIndex === 0;
  
  const currentStoryData = isCoffee ? Storydetails : ChipsStorydetails;
  const pageTitle = isCoffee ? "From Beans to Sip" : "The Crisp Timeline";

  return (
    <section 
      ref={ref} 
      className="min-h-screen py-16 px-6 overflow-x-hidden flex flex-col items-center transition-colors duration-500"
      style={{ backgroundColor: isCoffee ? "#fffdf7" : "#fef1f0" }} // Optional: shifts background ambient tones too!
    >
      {/* Page Title Dynamic Change */}
      <div className="text-center mb-16">
        <h1 
          className="text-4xl font-serif font-bold tracking-wide relative inline-block pb-2 border-b-2 transition-colors duration-500"
          style={{ 
            textColor: isCoffee ? "#2c1a0e" : "#b01a10", 
            borderColor: isCoffee ? "#2c1a0e" : "#b01a10" 
          }}
        >
          {pageTitle}
        </h1>
      </div>

      {/* Dynamic Cards Layout Container */}
      <div className="flex flex-col gap-12 max-w-4xl w-full items-center">
        {currentStoryData.map((card, index) => {
          const rotationAngle = index % 2 === 0 ? -6 : 4;

          return (
            <div 
              key={card.id} 
              className={`w-full flex ${index % 2 === 0 ? "justify-start md:pl-16" : "justify-end md:pr-16"}`}
            >
              <StoryCard 
                image={card.img}
                title={card.title}
                subtitle={card.subtitle}
                description={card.description}
                rotation={rotationAngle} 
              />
            </div>
          );
        })}
      </div>
    </section>
  );
});

export default Story;