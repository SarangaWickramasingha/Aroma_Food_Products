import { Heart } from "lucide-react";

const SlideInfo = ({ product }) => {
  const {
    sideText = "",
    circleColor = "#e8d5b0",
    stampTextColor = "#2c1a0e",
    cardBg = "#fffdf7",
    titleColor = "#1a1008",
    sideNote = "",
  } = product;

  return (
    <div
      className="flex w-full max-w-[420px] flex-col gap-6 rounded-3xl border border-black/5 p-6 shadow-md sm:p-8"
      style={{ backgroundColor: cardBg }}
    >
      {/* ── Circular Stamp with Heart ── */}
      <CircleStamp
        text={sideText}
        circleColor={circleColor}
        stampTextColor={stampTextColor}
      />

      {/* ── Side Note ── */}
      <p
        className="font-serif text-[17px] leading-relaxed sm:text-[18px]"
        style={{ color: titleColor, opacity: 0.82 }}
      >
        {sideNote}
      </p>
    </div>
  );
};

const CircleStamp = ({ text, circleColor, stampTextColor }) => {

  const fullText = `${text} ${text}`;

  return (
    <div className="relative h-[88px] w-[88px] shrink-0">
      <svg
        viewBox="0 0 88 88"
        width="88"
        height="88"
        className="block"
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
            letterSpacing: "2.2px",
          }}
        >
          <textPath href="#stamp-circle" startOffset="0%">
            {fullText}
          </textPath>
        </text>
      </svg>

      {/* Heart icon in center */}
      <Heart
        size={26}
        color={stampTextColor}
        fill={stampTextColor}
        strokeWidth={2}
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
      />
    </div>
  );
};

export default SlideInfo;