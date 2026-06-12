import { ImageResponse } from "next/og";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "#0c2340",
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: "6px",
        }}
      >
        <svg
          width="26"
          height="26"
          viewBox="0 0 36 36"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Roof */}
          <path
            d="M4 20 L18 5 L32 20"
            stroke="#4dc8d0"
            strokeWidth="3.5"
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
          {/* Wave 2 */}
          <path
            d="M6 31 Q12 26 18 31 Q24 36 31 31"
            stroke="#4dc8d0"
            strokeWidth="2"
            fill="none"
            strokeLinecap="round"
            opacity="0.45"
          />
          {/* Sparkle */}
          <path
            d="M16.5 15 L17.5 12 L18.5 15 L21.5 16 L18.5 17 L17.5 20 L16.5 17 L13.5 16 Z"
            fill="#f0a500"
          />
        </svg>
      </div>
    ),
    size
  );
}
