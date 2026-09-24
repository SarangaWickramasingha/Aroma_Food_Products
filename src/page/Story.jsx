import { forwardRef } from "react";
import StoryCard from "../components/StoryCard";
import { StoryData } from "../data/Storydetails";

const Story = forwardRef((props, ref) => {
  // Only display Coffee Craft story on the site
  const coffeeStoryData = StoryData.coffee || [];

  return (
    <section
      id="story"
      ref={ref}
      className="relative flex min-h-screen flex-col items-center overflow-x-hidden px-6 py-24 transition-colors duration-700 sm:px-10 lg:px-16 bg-[#F5F0E8]"
    >
      {/* Decorative ambient background accents */}
      <div className="pointer-events-none absolute top-20 -left-20 h-72 w-72 rounded-full bg-[#C44A3A]/5 blur-3xl" />
      <div className="pointer-events-none absolute bottom-20 -right-20 h-80 w-80 rounded-full bg-[#E28834]/5 blur-3xl" />

      {/* Page Title Header */}
      <div className="mb-16 text-center max-w-2xl">
        <p className="mb-2 text-xs font-bold uppercase tracking-[0.32em] text-[#C44A3A]">
          Our Craft & Heritage
        </p>
        <h2 className="font-serif text-3xl font-extrabold tracking-wide text-[#1A1008] sm:text-4xl md:text-5xl">
          From Highland Bean to Aromatic Sip
        </h2>
        <p className="mt-3 text-sm sm:text-base text-[#2C1A0E]/70">
          Step behind the scenes and witness the artisan discipline, time-honored curing, and drum roasting poured into every batch of pure Ceylon coffee.
        </p>
        <div className="mx-auto mt-4 h-1 w-16 rounded-full bg-[#C44A3A]" />
      </div>

      {/* Cards Layout Container */}
      <div className="relative flex w-full max-w-5xl flex-col items-center gap-12 sm:gap-16">
        {/* Subtle center timeline line for desktop */}
        <div className="pointer-events-none absolute top-10 bottom-10 left-1/2 -ml-[1px] hidden w-[2px] bg-gradient-to-b from-transparent via-black/15 to-transparent md:block" />

        {coffeeStoryData.map((card, index) => {
          const rotationAngle = index % 2 === 0 ? -3 : 3;
          const alignLeft = index % 2 === 0;

          return (
            <div
              key={card.id}
              className={`fade-slide-in relative flex w-full ${
                alignLeft
                  ? "justify-center md:justify-start md:pl-10 lg:pl-16"
                  : "justify-center md:justify-end md:pr-10 lg:pr-16"
              }`}
            >
              {/* Milestone Node in timeline center */}
              <div className="absolute top-10 left-1/2 hidden -translate-x-1/2 items-center justify-center md:flex">
                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#2C1A0E] text-[11px] font-bold text-white ring-4 ring-white shadow-md">
                  {index + 1}
                </span>
              </div>

              <StoryCard
                image={card.img}
                title={card.title}
                subtitle={card.subtitle}
                tag={card.tag}
                stat={card.stat}
                description={card.description}
                rotation={rotationAngle}
                step={String(index + 1).padStart(2, "0")}
              />
            </div>
          );
        })}
      </div>
    </section>
  );
});

export default Story;