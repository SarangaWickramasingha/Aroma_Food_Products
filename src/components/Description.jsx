import { ArrowRight, MessageCircle } from "lucide-react";

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
    <div className={`flex flex-col gap-5 ${isWhite ? "text-white" : "text-espresso-900"}`}>
      {/* Top Badges & Meta */}
      <div className="flex flex-wrap items-center gap-3">
        {label && (
          <span className={`pill ${isWhite ? "pill-light" : "pill-outline-red"}`}>
            {label}
          </span>
        )}

        {price && (
          <span className={`pill ${isWhite ? "pill-amber" : "pill-gold"}`}>
            {price}
          </span>
        )}
      </div>

      {/* Main Headline */}
      <h1
        className={`heading-serif leading-[1.15] max-w-xl text-[34px] sm:text-[44px] lg:text-[54px] ${
          isWhite
            ? "text-white drop-shadow-[0_2px_14px_rgba(0,0,0,0.55)]"
            : "text-espresso-900"
        }`}
      >
        {header}
      </h1>

      {/* Description Paragraph */}
      <p
        className={`max-w-xl text-[15px] sm:text-[17px] leading-relaxed ${
          isWhite
            ? "text-white/90 drop-shadow-[0_1px_8px_rgba(0,0,0,0.5)]"
            : "text-espresso-800/80"
        }`}
      >
        {des}
      </p>

      {/* Available Pack Sizes Chips (Optional) */}
      {packSizes.length > 0 && (
        <div className="flex flex-col gap-1.5 pt-1">
          <span className="eyebrow opacity-70">
            Available Sizes:
          </span>
          <div className="flex flex-wrap gap-2">
            {packSizes.map((size) => (
              <span
                key={size}
                className={`rounded-lg px-3 py-1 text-xs font-semibold border ${
                  isWhite
                    ? "bg-white/10 border-white/20 text-white"
                    : "bg-white border-black/10 text-espresso-800 shadow-xs"
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
            className={`btn px-8 ${isWhite ? "btn-primary" : "btn-dark"}`}
          >
            <span>{btnText}</span>
            <ArrowRight className="btn-arrow" size={18} />
          </button>
        )}

        {secondaryBtn && (
          <button
            onClick={secondaryBtn}
            className={`btn px-7 ${isWhite ? "btn-ghost-light" : "btn-ghost-dark"}`}
          >
            <MessageCircle size={18} />
            <span>{secondaryBtnText}</span>
          </button>
        )}
      </div>
    </div>
  );
}

export default Description;