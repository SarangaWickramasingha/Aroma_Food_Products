const SlideInfo = ({ product }) => {
  const {
    stampText = "",
    stampBg = "#e8d5b0",
    stampTextColor = "#2c1a0e",
    cardBg = "#fffdf7",
    titleColor = "#1a1008",
    sideNote = "",
    stats = [],
  } = product;

  return (
    <div
      className="rounded-2xl p-6 flex flex-col gap-5 w-106.25 h-168 shadow-sm border
      "
      style={{ backgroundColor: cardBg }}
    >
      {/* ── Circular Stamp with Heart ── */}
      <CircleStamp
        text={stampText}
        stampBg={stampBg}
        stampTextColor={stampTextColor}
      />

      {/* ── Side Note ── */}
      <p
        className="text-sm leading-relaxed font-serif text-[22px]"
        style={{ color: titleColor, opacity: 0.82 }}
      >
        {sideNote}
      </p>

      {/* ── Stats Grid ── */}
      <div className="grid grid-cols-2 gap-x-6 gap-y-4 mt-1">
        {stats.map((s) => (
          <div key={s.label} style={{ color: titleColor }}>
            <p className="font-serif font-bold text-[32px] leading-none">{s.value}</p>
            <p className="text-[22px] mt-1 leading-snug opacity-60">{s.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

const CircleStamp = ({ text, stampBg, stampTextColor }) => {

  const fullText = `${text} ${text}`;

  return (
    <div className="relative w-22 h-22 shrink-0">
      <svg
        viewBox="0 0 88 88"
        width="88"
        height="88"
        xmlns="http://www.w3.org/2000/svg"
        aria-label="Product stamp"
      >
        {/* Circle background */}
        <circle cx="44" cy="44" r="40" fill={stampBg} />

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
            letterSpacing: "2.2px",
          }}
        >
          <textPath href="#stamp-circle" startOffset="0%">
            {fullText}
          </textPath>
        </text>

        {/* Heart icon in center */}
        <text
          x="44"
          y="50"
          textAnchor="middle"
          style={{
            fontSize: "22px",
            fill: stampTextColor,
            fontFamily: "serif",
          }}
        >
          ♥
        </text>
      </svg>
    </div>
  );
};

export default SlideInfo;


