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
      className="card group flex w-full max-w-[380px] flex-col rounded-[2.2rem] p-4 shadow-lg transition-all duration-500 [transform:rotate(var(--rot))] hover:shadow-2xl hover:[transform:rotate(0deg)_scale(1.03)] sm:max-w-[400px]"
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
          <span className="pill pill-dark">{tag}</span>
          <span className="badge-circle">{step}</span>
        </div>

        {/* Title Text Overlaid directly on image */}
        <div className="absolute bottom-4 left-0 right-0 px-4 text-left text-white">
          {subtitle && (
            <p className="eyebrow text-gold-soft mb-0.5">
              {subtitle}
            </p>
          )}
          <h3 className="heading-serif text-xl leading-tight drop-shadow-md">
            {title}
          </h3>
        </div>
      </div>

      {/* Description Area */}
      <div className="mt-4 px-2 text-espresso-800">
        <p className="text-sm leading-relaxed text-espresso-800/80">
          {description}
        </p>

        {/* Highlight Stat Pill */}
        {stat && (
          <div className="mt-3 flex items-center justify-between rounded-xl bg-black/[0.03] px-3 py-2 border border-black/5">
            <span className="eyebrow text-espresso-800/60">
              Benchmark
            </span>
            <span className="text-xs font-extrabold text-brand-red">
              {stat}
            </span>
          </div>
        )}
      </div>
    </div>
  );
}

export default StoryCard;