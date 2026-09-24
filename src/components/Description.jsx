function Description({
  header,
  des,
  btn,
  btnText = "Explore Our Craft",
  secondaryBtn,
  secondaryBtnText = "Quick Order",
  theam = "white",
  label,
  price,
  packSizes = []
}) {
  const isWhite = theam === "white";

  return (
    <div className={`flex flex-col gap-5 ${isWhite ? "text-white" : "text-[#1A1008]"}`}>
      {/* Top Badges & Meta */}
      <div className="flex flex-wrap items-center gap-3">
        {label && (
          <span
            className={`w-fit rounded-full px-4 py-1.5 text-[12px] font-bold uppercase tracking-[0.2em] transition-all shadow-sm ${
              isWhite
                ? "bg-white/15 text-white border border-white/30 backdrop-blur-md"
                : "bg-[#C44A3A]/10 text-[#C44A3A] border border-[#C44A3A]/20"
            }`}
          >
            {label}
          </span>
        )}

        {price && (
          <span
            className={`rounded-full px-3.5 py-1 text-xs font-bold tracking-wide ${
              isWhite
                ? "bg-amber-400/20 text-amber-300 border border-amber-400/30"
                : "bg-[#2C1A0E] text-[#E8D5B0]"
            }`}
          >
            {price}
          </span>
        )}

        <div className="flex items-center gap-1 text-amber-400 text-sm">
          {"★".repeat(5)}
          <span className={`text-xs ml-1 ${isWhite ? "text-white/70" : "text-[#2C1A0E]/70"}`}>
            (4.9)
          </span>
        </div>
      </div>

      {/* Main Headline */}
      <h1
        className={`font-serif font-bold leading-[1.15] max-w-xl text-[34px] sm:text-[44px] lg:text-[54px] ${
          isWhite
            ? "text-white drop-shadow-[0_2px_14px_rgba(0,0,0,0.55)]"
            : "text-[#1A1008]"
        }`}
      >
        {header}
      </h1>

      {/* Description Paragraph */}
      <p
        className={`max-w-xl text-[15px] sm:text-[17px] leading-relaxed ${
          isWhite
            ? "text-white/90 drop-shadow-[0_1px_8px_rgba(0,0,0,0.5)]"
            : "text-[#2C1A0E]/80"
        }`}
      >
        {des}
      </p>

      {/* Available Pack Sizes Chips (Optional) */}
      {packSizes.length > 0 && (
        <div className="flex flex-col gap-1.5 pt-1">
          <span className="text-xs font-bold uppercase tracking-wider opacity-70">
            Available Sizes:
          </span>
          <div className="flex flex-wrap gap-2">
            {packSizes.map((size) => (
              <span
                key={size}
                className={`rounded-lg px-3 py-1 text-xs font-semibold border ${
                  isWhite
                    ? "bg-white/10 border-white/20 text-white"
                    : "bg-white border-black/10 text-[#2C1A0E] shadow-xs"
                }`}
              >
                {size}
              </span>
            ))}
          </div>
        </div>
      )}

      {/* Action Buttons */}
      <div className="mt-4 flex flex-wrap items-center gap-4">
        {btn && (
          <button
            onClick={btn}
            className={`group inline-flex h-13 cursor-pointer items-center justify-center gap-3 rounded-full px-8 text-[15px] font-bold shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl focus:outline-none ${
              isWhite
                ? "bg-[#C44A3A] text-white hover:bg-[#A7382B]"
                : "bg-[#2C1A0E] text-white hover:bg-[#C44A3A]"
            }`}
          >
            <span>{btnText}</span>
            <span className="text-lg transition-transform duration-300 group-hover:translate-x-1.5">
              →
            </span>
          </button>
        )}

        {secondaryBtn && (
          <button
            onClick={secondaryBtn}
            className={`inline-flex h-13 cursor-pointer items-center justify-center gap-2 rounded-full px-7 text-[15px] font-semibold border-2 transition-all duration-300 hover:scale-105 focus:outline-none ${
              isWhite
                ? "border-white/80 text-white bg-white/10 backdrop-blur-sm hover:bg-white hover:text-[#1A1008]"
                : "border-[#2C1A0E] text-[#2C1A0E] bg-transparent hover:bg-[#2C1A0E] hover:text-white"
            }`}
          >
            <span>💬</span>
            <span>{secondaryBtnText}</span>
          </button>
        )}
      </div>
    </div>
  );
}

export default Description;