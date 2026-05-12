import CallButton from "./CallButton";

const PHONE = "(510) 999-1514"; // Replace with real number
const PHONE_RAW = "+15109991514";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-[92vh] flex items-center justify-center overflow-hidden"
      style={{
        background: "linear-gradient(135deg, #0f4c81 0%, #1a73e8 60%, #0d9488 100%)",
      }}
    >
      {/* Subtle grid overlay */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
        }}
      />

      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm text-white text-sm font-semibold px-4 py-2 rounded-full mb-6">
          <span className="w-2 h-2 bg-emerald-400 rounded-full inline-block"></span>
          Available Today · Hayward · Castro Valley · San Leandro
        </div>

        {/* Headline */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white leading-tight mb-4">
          Move-Out Cleaning in Hayward –{" "}
          <span className="text-emerald-300">Get Your Deposit Back Fast</span>
        </h1>

        {/* Subheadline */}
        <p className="text-lg sm:text-xl text-blue-100 max-w-2xl mx-auto mb-8">
          Same-day service available. Thorough, affordable, and trusted by
          homeowners, renters &amp; landlords across the East Bay.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <CallButton
            phone={PHONE}
            phoneRaw={PHONE_RAW}
            size="lg"
            label="📞 Call Now – Free Quote"
          />
          <a
            href="#contact"
            className="w-full sm:w-auto text-center border-2 border-white text-white font-bold py-4 px-8 rounded-xl text-lg hover:bg-white hover:text-blue-700 transition-colors duration-200"
          >
            Request a Quote Online
          </a>
        </div>

        {/* Social proof strip */}
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-6 text-blue-100 text-sm">
          <div className="flex items-center gap-2">
            <span className="text-yellow-400 text-xl">★★★★★</span>
            <span>5-Star Rated</span>
          </div>
          <div className="hidden sm:block w-px h-4 bg-blue-300" />
          <div className="flex items-center gap-2">
            <span>✅</span>
            <span>100% Satisfaction Guarantee</span>
          </div>
          <div className="hidden sm:block w-px h-4 bg-blue-300" />
          <div className="flex items-center gap-2">
            <span>🏠</span>
            <span>Family-Owned Business</span>
          </div>
        </div>
      </div>

      {/* Bottom wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M0 80L60 68C120 56 240 32 360 26.7C480 21.3 600 34.7 720 40C840 45.3 960 42.7 1080 37.3C1200 32 1320 24 1380 20L1440 16V80H0Z"
            fill="#ffffff"
          />
        </svg>
      </div>
    </section>
  );
}
