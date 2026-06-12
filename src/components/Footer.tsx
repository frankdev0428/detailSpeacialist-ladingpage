import Logo from "./Logo";

const PHONE = "(510) 999-1514";
const PHONE_RAW = "+15109991514";

const areas = [
  "Hayward",
  "Castro Valley",
  "San Leandro",
  "San Lorenzo",
  "Union City",
  "Fremont",
];

export default function Footer() {
  return (
    <footer className="bg-[#0c2340] text-gray-300 py-12 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-10">
        {/* Brand */}
        <div>
          <div className="mb-4">
            <Logo variant="dark" size="md" />
          </div>
          <p className="text-sm leading-relaxed text-gray-400">
            Family-owned cleaning service specializing in move-out and deep cleaning
            across the East Bay.
          </p>
          <a
            href={`tel:${PHONE_RAW}`}
            className="inline-block mt-4 text-emerald-400 font-bold text-lg hover:text-emerald-300 transition-colors"
          >
            📞 {PHONE}
          </a>
        </div>

        {/* Services */}
        <div>
          <h3 className="text-white font-bold text-sm uppercase tracking-widest mb-4">
            Services
          </h3>
          <ul className="space-y-2 text-sm">
            <li>Move-Out Cleaning</li>
            <li>Deep Cleaning</li>
            <li>Kitchen &amp; Bathroom Cleaning</li>
            <li>Floor Cleaning</li>
          </ul>
        </div>

        {/* Service Areas */}
        <div>
          <h3 className="text-white font-bold text-sm uppercase tracking-widest mb-4">
            Service Areas
          </h3>
          <ul className="space-y-2 text-sm">
            {areas.map((a) => (
              <li key={a}>{a}, CA</li>
            ))}
          </ul>
        </div>
      </div>

      <div className="max-w-6xl mx-auto mt-10 pt-8 border-t border-gray-700 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-500">
        <p>© {new Date().getFullYear()} Bay Shine Cleaning. All rights reserved.</p>
        <p>Serving the East Bay, California</p>
      </div>
    </footer>
  );
}
