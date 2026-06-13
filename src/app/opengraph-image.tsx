import { ImageResponse } from "next/og";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(135deg, #0f4c81 0%, #1a73e8 60%, #0d9488 100%)",
          fontFamily: "system-ui, sans-serif",
          position: "relative",
        }}
      >
        {/* Subtle dot grid */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            opacity: 0.08,
            backgroundImage:
              "radial-gradient(circle, #ffffff 1px, transparent 1px)",
            backgroundSize: "32px 32px",
          }}
        />

        {/* Logo icon */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: 96,
            height: 96,
            borderRadius: 20,
            background: "#0c2340",
            marginBottom: 28,
          }}
        >
          <svg
            width="64"
            height="64"
            viewBox="0 0 36 36"
            fill="none"
          >
            <path
              d="M4 20 L18 5 L32 20"
              stroke="#4dc8d0"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M5 25 Q11.5 20 18 25 Q24.5 30 31 25"
              stroke="#4dc8d0"
              strokeWidth="2.5"
              strokeLinecap="round"
            />
            <path
              d="M6 31 Q12 26 18 31 Q24 36 31 31"
              stroke="#4dc8d0"
              strokeWidth="1.8"
              strokeLinecap="round"
              opacity="0.45"
            />
            <path
              d="M16.5 15 L17.5 12 L18.5 15 L21.5 16 L18.5 17 L17.5 20 L16.5 17 L13.5 16 Z"
              fill="#f0a500"
            />
          </svg>
        </div>

        {/* Business name */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            marginBottom: 32,
          }}
        >
          <div
            style={{
              fontSize: 64,
              fontWeight: 900,
              color: "#ffffff",
              letterSpacing: "-1px",
              lineHeight: 1.1,
            }}
          >
            Bay Shine Cleaning
          </div>
          <div
            style={{
              fontSize: 20,
              fontWeight: 600,
              color: "#f0a500",
              letterSpacing: "6px",
              textTransform: "uppercase",
              marginTop: 6,
            }}
          >
            Hayward · Castro Valley · San Leandro
          </div>
        </div>

        {/* Tagline pill */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 12,
            background: "rgba(255,255,255,0.15)",
            borderRadius: 100,
            padding: "14px 32px",
            marginBottom: 24,
          }}
        >
          <div style={{ color: "#6ee7b7", fontSize: 22 }}>5-Star Rated</div>
          <div style={{ color: "#ffffff", fontSize: 20, fontWeight: 700 }}>
            Move-Out &amp; Deep Cleaning · Same-Day Available
          </div>
        </div>

        {/* Phone */}
        <div style={{ color: "#a5f3fc", fontSize: 22, fontWeight: 600 }}>
          📞 (510) 999-1514
        </div>
      </div>
    ),
    size
  );
}
