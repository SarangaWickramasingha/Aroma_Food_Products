const SideInfo = ({ product }) => {
  const {
    sideText = "",
    circleColor = "#e8d5b0",
    stampTextColor = "#2c1a0e",
    cardBg = "#fffdf7",
    titleColor = "#1a1008",
    sideNote = "",
    stats = [],
    features = [],
    flavorNotes = []
  } = product;

  return (
    <div
      className="flex w-full max-w-[440px] flex-col gap-6 rounded-3xl border border-black/10 p-6 shadow-xl transition-all duration-500 hover:shadow-2xl sm:p-8 backdrop-blur-sm"
      style={{ backgroundColor: cardBg }}
    >
      {/* Top Header: Stamp + Short Tag */}
      <div className="flex items-center justify-between gap-4 border-b border-black/5 pb-4">
        <CircleStamp
          text={sideText}
          circleColor={circleColor}
          stampTextColor={stampTextColor}
        />
        <div className="text-right">
          <span className="inline-block rounded-full bg-black/5 px-3 py-1 text-xs font-bold uppercase tracking-wider text-[#2C1A0E]">
            Artisan Grade
          </span>
          <p className="mt-1 text-xs font-medium text-[#2C1A0E]/60">
            Handcrafted with Pride
          </p>
        </div>
      </div>

      {/* Side Note / Description */}
      <p
        className="font-serif text-[16px] leading-relaxed sm:text-[17px] italic"
        style={{ color: titleColor, opacity: 0.85 }}
      >
        "{sideNote}"
      </p>

      {/* Flavor Notes Tags */}
      {flavorNotes.length > 0 && (
        <div className="flex flex-col gap-2">
          <p className="text-xs font-bold uppercase tracking-wider text-[#2C1A0E]/70">
            Key Tasting Notes:
          </p>
          <div className="flex flex-wrap gap-2">
            {flavorNotes.map((note) => (
              <span
                key={note}
                className="rounded-lg bg-black/5 px-3 py-1 text-xs font-semibold text-[#2C1A0E] transition-colors hover:bg-[#C44A3A] hover:text-white"
              >
                ✦ {note}
              </span>
            ))}
          </div>
        </div>
      )}

      {/* Product Highlights / Features Grid */}
      {features.length > 0 && (
        <div className="grid grid-cols-1 gap-2.5 rounded-2xl bg-black/[0.03] p-3.5 sm:grid-cols-2">
          {features.map((f) => (
            <div key={f.label} className="flex flex-col">
              <span className="text-[11px] font-bold uppercase tracking-wider text-[#2C1A0E]/55">
                {f.label}
              </span>
              <span className="text-xs font-semibold text-[#2C1A0E]">
                {f.value}
              </span>
            </div>
          ))}
        </div>
      )}

      {/* Stats Grid */}
      <div className="mt-1 grid grid-cols-2 gap-3 sm:gap-4 border-t border-black/5 pt-4">
        {stats.map((s) => (
          <div
            key={s.label}
            className="rounded-2xl bg-white/70 p-3 shadow-sm border border-black/5 transition-transform duration-300 hover:scale-[1.02]"
            style={{ color: titleColor }}
          >
            <p className="font-serif text-[24px] font-extrabold leading-none text-[#C44A3A]">
              {s.value}
            </p>
            <p className="mt-1 text-[12px] font-medium leading-tight opacity-70">
              {s.label}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

const CircleStamp = ({ text, circleColor, stampTextColor }) => {
  const fullText = `${text} ${text}`;

  return (
    <div className="group relative h-20 w-20 shrink-0 cursor-pointer">
      <svg
        viewBox="0 0 88 88"
        width="80"
        height="80"
        className="transition-transform duration-700 group-hover:rotate-180"
        xmlns="http://www.w3.org/2000/svg"
        aria-label="Product stamp"
      >
        {/* Circle background */}
        <circle cx="44" cy="44" r="40" fill={circleColor} />

        {/* Curved text path */}
        <defs>
          <path
            id="stamp-circle"
            d="M 44,44 m -30,0 a 30,30 0 1,1 60,0 a 30,30 0 1,1 -60,0"
          />
        </defs>

        <text
          style={{
            fontSize: "8.5px",
            fontFamily: "'Playfair Display', Georgia, serif",
            fill: stampTextColor,
            fontWeight: "bold",
            letterSpacing: "2.2px",
          }}
        >
          <textPath href="#stamp-circle" startOffset="0%">
            {fullText}
          </textPath>
        </text>

        {/* Center Symbol */}
        <text
          x="44"
          y="49"
          textAnchor="middle"
          style={{
            fontSize: "20px",
            fill: stampTextColor,
            fontFamily: "serif",
          }}
        >
          ✦
        </text>
      </svg>
    </div>
  );
};

export default SideInfo;