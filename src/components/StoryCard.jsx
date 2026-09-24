function StoryCard({
  image,
  title,
  subtitle,
  description,
  tag = "Craft Phase",
  stat = "",
  rotation = 0,
  step = "01"
}) {
  return (
    <div
      style={{ "--rot": `${rotation}deg` }}
      className="group flex w-full max-w-[380px] flex-col overflow-hidden rounded-[2.2rem] border border-black/10 bg-[#FFFDF8] p-4 shadow-lg transition-all duration-500 [transform:rotate(var(--rot))] hover:shadow-2xl hover:[transform:rotate(0deg)_scale(1.03)] sm:max-w-[400px]"
    >
      {/* Image Container with Title & Badges Overlay */}
      <div className="relative w-full overflow-hidden rounded-[1.8rem] bg-black/5">
        <img
          src={image}
          alt={title}
          className="h-56 w-full object-cover transition-transform duration-700 group-hover:scale-105"
          loading="lazy"
        />

        {/* Gradient Overlay for Readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />

        {/* Top Badges */}
        <div className="absolute top-3.5 left-3.5 right-3.5 flex items-center justify-between">
          <span className="rounded-full bg-black/50 px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-white backdrop-blur-md border border-white/20">
            {tag}
          </span>
          <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#C44A3A] text-[13px] font-extrabold text-white shadow-md">
            {step}
          </span>
        </div>

        {/* Title Text Overlaid directly on image */}
        <div className="absolute bottom-4 left-0 right-0 px-4 text-left text-white">
          {subtitle && (
            <p className="text-[11px] font-bold uppercase tracking-widest text-[#E8D5B0] mb-0.5">
              {subtitle}
            </p>
          )}
          <h3 className="font-serif text-xl font-bold leading-tight drop-shadow-md">
            {title}
          </h3>
        </div>
      </div>

      {/* Description Area */}
      <div className="mt-4 px-2 text-[#2C1A0E]">
        <p className="text-sm leading-relaxed text-[#2C1A0E]/80">
          {description}
        </p>

        {/* Highlight Stat Pill */}
        {stat && (
          <div className="mt-3 flex items-center justify-between rounded-xl bg-black/[0.03] px-3 py-2 border border-black/5">
            <span className="text-[11px] font-bold uppercase tracking-wider text-[#2C1A0E]/60">
              Benchmark
            </span>
            <span className="text-xs font-extrabold text-[#C44A3A]">
              {stat}
            </span>
          </div>
        )}
      </div>
    </div>
  );
}

export default StoryCard;