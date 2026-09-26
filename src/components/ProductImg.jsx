function ProductImg({ image, alt = "", badge = "100% Pure Ceylon" }) {
  return (
    <div className="relative flex items-center justify-center py-6">
      {/* Ambient background glow aura */}
      <div className="absolute inset-0 -z-10 rounded-full bg-gradient-to-tr from-brand-red/25 via-brand-amber/20 to-transparent blur-3xl transform scale-90 animate-pulse-subtle" />

      {/* Floating quality badge */}
      {badge && (
        <div className="absolute -top-1 -right-2 sm:top-2 sm:right-2 z-10 rounded-full border border-white/40 bg-white/80 px-3.5 py-1.5 shadow-lg backdrop-blur-md transition-transform duration-300 hover:scale-105">
          <span className="flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-wider text-espresso-800">
            <span className="h-2 w-2 rounded-full bg-emerald-500 animate-ping" />
            {badge}
          </span>
        </div>
      )}

      {/* Main product image container */}
      <div className="animate-float relative transition-transform duration-500 hover:scale-105">
        <img
          src={image}
          alt={alt}
          className="h-64 w-64 object-contain sm:h-80 sm:w-80 md:h-96 md:w-96 lg:h-[28rem] lg:w-[28rem] drop-shadow-[0_25px_35px_rgba(0,0,0,0.35)] transition-all duration-500"
          loading="lazy"
        />
        {/* Ground shadow */}
        <div className="mx-auto h-4 w-3/4 rounded-full bg-black/25 blur-md mt-2" />
      </div>
    </div>
  );
}

export default ProductImg;