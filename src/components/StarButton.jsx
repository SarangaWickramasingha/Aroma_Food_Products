import { ArrowRight } from "lucide-react";

function StarButton({ children, onClick, tone = "dark", className = "" }) {
  const isLight = tone === "light";

  const fill = isLight
    ? "bg-[linear-gradient(45deg,#3E2718,#5C3D28)] hover:bg-[linear-gradient(45deg,#5C3D28,#6B6259)]"
    : "bg-[linear-gradient(45deg,#120A05,#1A1008)] hover:bg-[linear-gradient(45deg,#1A1008,#2C1A0E)]";

  const frame = isLight
    ? "shadow-[0_6px_18px_rgba(18,10,5,0.28)] transition-shadow duration-[400ms] ease-[cubic-bezier(0.4,0,0.2,1)] hover:shadow-[0_10px_24px_rgba(18,10,5,0.35)]"
    : "p-[2px] shadow-[0_0_20px_rgba(0,0,0,0.3)] backdrop-blur-[5px] transition-all duration-[400ms] ease-[cubic-bezier(0.4,0,0.2,1)] animate-gradient-border hover:brightness-110 hover:shadow-[0_0_25px_rgba(0,0,0,0.4),0_0_10px_rgba(196,74,58,0.2)] hover:backdrop-blur-[8px] hover:[animation-duration:10s]";

  const sizing = "px-10 py-[15px] text-[16px] font-medium tracking-[2px]";

  const label = isLight
    ? "brightness-[1.15] contrast-[1.2] [text-shadow:0_0_10px_rgba(255,253,248,0.25),0_0_20px_rgba(255,253,248,0.08)] group-hover:brightness-[1.3] group-hover:contrast-[1.35]"
    : "brightness-[1.5] contrast-[1.8] [text-shadow:0_0_10px_rgba(255,253,248,0.3),0_0_20px_rgba(255,253,248,0.1)] group-hover:brightness-[1.8] group-hover:contrast-[2] group-hover:[text-shadow:0_0_20px_rgba(255,253,248,0.8),0_0_40px_rgba(255,253,248,0.4),0_0_60px_rgba(255,253,248,0.2)]";

  return (
    <span
      className={`relative inline-block rounded-full ${frame} ${className}`}
    >
      {!isLight && (
        <span
          aria-hidden="true"
          className="absolute inset-0 rounded-full bg-[length:400%_400%] bg-[position:0%_50%] bg-[linear-gradient(90deg,#C44A3A,#E28834,#D4AF37,#C44A3A)]"
        />
      )}

      <button
        type="button"
        onClick={onClick}
        className={`group relative z-[1] block cursor-pointer overflow-hidden rounded-full ${fill} ${sizing} uppercase text-cream-100 transition-all duration-[400ms] ease-[cubic-bezier(0.4,0,0.2,1)] hover:-translate-y-px before:absolute before:inset-0 before:z-[2] before:pointer-events-none before:opacity-45 before:animate-particles-1 before:transition-opacity before:duration-[400ms] before:content-[''] hover:before:opacity-65 before:bg-[radial-gradient(2px_2px_at_10%_15%,rgba(255,253,248,0.95),rgba(0,0,0,0)),radial-gradient(3px_3px_at_85%_25%,rgba(255,253,248,0.95),rgba(0,0,0,0)),radial-gradient(2px_2px_at_75%_85%,rgba(255,253,248,0.95),rgba(0,0,0,0)),radial-gradient(3px_3px_at_15%_75%,rgba(255,253,248,0.95),rgba(0,0,0,0)),radial-gradient(2px_2px_at_50%_25%,rgba(255,253,248,0.95),rgba(0,0,0,0)),radial-gradient(3px_3px_at_25%_50%,rgba(255,253,248,0.95),rgba(0,0,0,0)),radial-gradient(2px_2px_at_85%_65%,rgba(255,253,248,0.95),rgba(0,0,0,0))] after:absolute after:inset-0 after:z-[3] after:pointer-events-none after:rotate-[25deg] after:bg-inherit after:opacity-55 after:animate-particles-2 after:transition-opacity after:duration-[400ms] after:content-[''] hover:after:opacity-75`}
      >
        {/* Bright particle layer */}
        <span
          aria-hidden="true"
          className="absolute inset-0 z-[4] pointer-events-none opacity-85 mix-blend-screen blur-[0.3px] animate-particles-4 transition-all duration-[400ms] group-hover:opacity-100 group-hover:blur-0 bg-[radial-gradient(3.5px_3.5px_at_15%_25%,rgba(255,253,248,1),rgba(0,0,0,0)),radial-gradient(3px_3px_at_85%_15%,rgba(255,253,248,0.98),rgba(0,0,0,0)),radial-gradient(3.5px_3.5px_at_75%_75%,rgba(255,253,248,1),rgba(0,0,0,0)),radial-gradient(2.8px_2.8px_at_25%_85%,rgba(255,253,248,0.95),rgba(0,0,0,0)),radial-gradient(4px_4px_at_65%_35%,rgba(255,253,248,1),rgba(0,0,0,0))]"
        />

        <span className={`relative z-[5] flex items-center gap-3 transition-all duration-[400ms] ${label}`}>
          <span>{children}</span>
          <ArrowRight size={18} />
        </span>
      </button>
    </span>
  );
}

export default StarButton;
