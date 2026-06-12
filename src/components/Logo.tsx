interface LogoProps {
  variant?: "light" | "dark";
  size?: "sm" | "md" | "lg";
}

export default function Logo({ variant = "light", size = "md" }: LogoProps) {
  const iconSize = { sm: 36, md: 44, lg: 56 }[size];
  const titleSize = { sm: "text-base", md: "text-lg", lg: "text-2xl" }[size];
  const subtitleSize = { sm: "text-[9px]", md: "text-[10px]", lg: "text-xs" }[size];
  const textColor = variant === "dark" ? "text-white" : "text-[#0c2340]";

  return (
    <div className="flex items-center gap-2.5">
      {/* Icon */}
      <div
        className="rounded-xl flex items-center justify-center shrink-0"
        style={{ width: iconSize, height: iconSize, background: "#0c2340" }}
      >
        <svg
          width={iconSize * 0.75}
          height={iconSize * 0.75}
          viewBox="0 0 36 36"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Roof / house chevron */}
          <path
            d="M4 20 L18 5 L32 20"
            stroke="#4dc8d0"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          {/* Wave 1 */}
          <path
            d="M5 25 Q11.5 20 18 25 Q24.5 30 31 25"
            stroke="#4dc8d0"
            strokeWidth="2.5"
            fill="none"
            strokeLinecap="round"
          />
          {/* Wave 2 – subtle */}
          <path
            d="M6 31 Q12 26 18 31 Q24 36 31 31"
            stroke="#4dc8d0"
            strokeWidth="1.8"
            fill="none"
            strokeLinecap="round"
            opacity="0.45"
          />
          {/* Sparkle — large */}
          <path
            d="M16.5 15 L17.5 12 L18.5 15 L21.5 16 L18.5 17 L17.5 20 L16.5 17 L13.5 16 Z"
            fill="#f0a500"
          />
          {/* Sparkle — small */}
          <path
            d="M23 10 L23.5 8.5 L24 10 L25.5 10.5 L24 11 L23.5 12.5 L23 11 L21.5 10.5 Z"
            fill="#f0a500"
            opacity="0.85"
          />
          {/* Dot */}
          <circle cx="12" cy="13" r="1.2" fill="#f0a500" opacity="0.7" />
        </svg>
      </div>

      {/* Text */}
      <div className="flex flex-col leading-none">
        <span
          className={`font-extrabold tracking-tight ${titleSize} ${textColor}`}
        >
          Bay Shine
        </span>
        <span
          className={`font-semibold uppercase tracking-[0.22em] mt-0.5 ${subtitleSize}`}
          style={{ color: "#c9922a" }}
        >
          Cleaning
        </span>
      </div>
    </div>
  );
}
