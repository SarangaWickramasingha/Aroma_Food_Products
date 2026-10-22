import { useState } from "react";
import { Sparkles, Award, Coffee } from "lucide-react";
import { StorySection } from "../data/Storydetails";

function StoryCard({
  image,
  title,
  subtitle,
  description,
  tag = StorySection.defaultTag,
  stat = "",
  rotation = 0,
  step = "01"
}) {
  const [imageError, setImageError] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <div
      style={{ "--rot": `${rotation}deg` }}
      className="group relative flex w-full max-w-[390px] flex-col rounded-[2.2rem] p-3.5 sm:p-4.5
        bg-gradient-to-b from-cream-100 via-[#FAF6EE] to-cream-200
        border border-espresso-950/[0.08] ring-1 ring-white/80
        shadow-[0_12px_36px_-10px_rgba(44,26,14,0.12),0_2px_8px_rgba(44,26,14,0.04)]
        transition-all duration-500 ease-out
        [transform:none]
        hover:shadow-[0_26px_50px_-12px_rgba(44,26,14,0.2),0_8px_20px_rgba(196,74,58,0.08)]
        hover:border-brand-amber/35
        hover:[transform:translateY(-6px)_scale(1.01)]
        md:[transform:rotate(var(--rot))]
        md:hover:[transform:rotate(0deg)_translateY(-6px)_scale(1.025)]
        sm:max-w-[410px]"
    >
      {/* Image Container with Title & Badges Overlay */}
      <div className="relative w-full aspect-[16/11] sm:h-60 overflow-hidden rounded-[1.7rem] bg-espresso-950 shadow-inner ring-1 ring-black/10">
        {!imageError ? (
          <img
            src={image}
            alt={title}
            onLoad={() => setImageLoaded(true)}
            onError={() => setImageError(true)}
            className={`h-full w-full object-cover transition-all duration-700 ease-out group-hover:scale-108 ${
              imageLoaded ? "opacity-100" : "opacity-0"
            }`}
            loading="lazy"
          />
        ) : (
          <div className="flex h-full w-full flex-col items-center justify-center bg-gradient-to-br from-espresso-900 via-espresso-800 to-espresso-950 text-gold-soft p-4 text-center">
            <Coffee className="w-10 h-10 mb-2 opacity-50 text-brand-gold animate-pulse-subtle" />
            <span className="text-xs uppercase tracking-widest font-semibold text-gold-soft/70">
              Aroma Artisan Craft
            </span>
          </div>
        )}

        {/* Ambient Loading Placeholder */}
        {!imageLoaded && !imageError && (
          <div className="absolute inset-0 bg-gradient-to-br from-espresso-900 via-espresso-800 to-espresso-950 animate-pulse" />
        )}

        {/* Top Vignette for Badges */}
        <div className="pointer-events-none absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-black/60 via-black/20 to-transparent" />

        {/* Bottom Rich Vignette for Title Readability */}
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-36 bg-gradient-to-t from-espresso-950 via-espresso-950/70 via-espresso-950/25 to-transparent" />

        {/* Diagonal Light Sheen Effect on Hover */}
        <div className="pointer-events-none absolute -inset-full h-[200%] w-[60%] -rotate-45 bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 transition-all duration-1000 ease-out group-hover:translate-x-[360%] group-hover:opacity-100" />

        {/* Top Badges */}
        <div className="absolute top-3.5 left-3.5 right-3.5 flex items-center justify-between gap-2">
          {/* Craft Tag */}
          <span className="inline-flex items-center gap-1.5 rounded-full bg-white/90 backdrop-blur-md px-3 py-1 text-espresso-900 shadow-md border border-white/60">
            <Sparkles className="h-3 w-3 text-brand-red flex-shrink-0" />
            <span className="text-[10.5px] font-bold uppercase tracking-wider">{tag}</span>
          </span>

          {/* Step Pill */}
          <span className="inline-flex items-center gap-1.5 rounded-full bg-espresso-950/80 backdrop-blur-md px-3 py-1 text-white shadow-md border border-white/20">
            <span className="h-1.5 w-1.5 rounded-full bg-brand-gold ring-2 ring-brand-gold/40 animate-pulse" />
            <span className="text-[10px] font-extrabold uppercase tracking-widest text-gold-soft">STEP</span>
            <span className="text-[12px] font-black text-white">{step}</span>
          </span>
        </div>

        {/* Title Text Overlaid directly on image */}
        <div className="absolute bottom-4 left-0 right-0 px-4 text-left text-white">
          {subtitle && (
            <div className="flex items-center gap-2 mb-1">
              <span className="h-0.5 w-3.5 rounded-full bg-brand-gold/90" />
              <p className="eyebrow text-gold-soft tracking-wider drop-shadow-sm">
                {subtitle}
              </p>
            </div>
          )}
          <h3 className="heading-serif text-xl sm:text-[22px] font-bold leading-tight drop-shadow-md transition-colors duration-300 group-hover:text-gold-soft">
            {title}
          </h3>
        </div>
      </div>

      {/* Description Area */}
      <div className="mt-4 flex flex-1 flex-col justify-between px-1.5 sm:px-2">
        <p className="text-[13.5px] sm:text-[14px] leading-relaxed text-espresso-800/80 font-normal">
          {description}
        </p>

        {/* Benchmark Highlight Card */}
        {stat && (
          <div className="mt-4 flex items-center justify-between rounded-xl bg-gradient-to-r from-espresso-900/[0.03] via-brand-amber/[0.04] to-brand-red/[0.03] px-3.5 py-2.5 border border-espresso-900/[0.07] shadow-[inset_0_1px_2px_rgba(255,255,255,0.7)] group-hover:border-brand-amber/30 transition-colors duration-300">
            <div className="flex items-center gap-2">
              <div className="flex h-6 w-6 items-center justify-center rounded-lg bg-brand-red/10 text-brand-red">
                <Award className="h-3.5 w-3.5" />
              </div>
              <span className="eyebrow text-[10px] text-espresso-800/70">
                {StorySection.statLabel || "Benchmark"}
              </span>
            </div>
            <span className="inline-flex items-center rounded-lg bg-white/90 px-2.5 py-1 text-xs font-extrabold text-brand-red border border-brand-red/20 shadow-sm">
              {stat}
            </span>
          </div>
        )}

        {/* Subtle Micro-Accent Line */}
        <div className="mt-3 flex justify-center">
          <div className="h-0.5 w-8 rounded-full bg-gradient-to-r from-brand-red/30 via-brand-amber/50 to-brand-gold/30 transition-all duration-500 group-hover:w-20 group-hover:from-brand-red group-hover:to-brand-gold" />
        </div>
      </div>
    </div>
  );
}

export default StoryCard;