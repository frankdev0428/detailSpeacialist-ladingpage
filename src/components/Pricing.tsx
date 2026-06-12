import CallButton from "./CallButton";

const PHONE = "(510) 999-1514";
const PHONE_RAW = "+15109991514";

const tiers = [
  {
    size: "Studio / 1 Bed",
    range: "$150 – $200",
    note: "Approx. 1–2 hrs",
    highlight: false,
  },
  {
    size: "2–3 Bedroom",
    range: "$200 – $280",
    note: "Most common job",
    highlight: true,
  },
  {
    size: "4+ Bedroom / Large",
    range: "$280 – $400+",
    note: "Custom quote",
    highlight: false,
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="py-16 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-5xl mx-auto px-6">
        <div className="text-center mb-12">
          <span className="inline-block bg-yellow-100 dark:bg-yellow-900/40 text-yellow-700 dark:text-yellow-300 text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
            Transparent Pricing
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 dark:text-white mb-3">
            Simple, Honest Pricing
          </h2>
          <p className="text-gray-500 dark:text-gray-400 text-lg max-w-xl mx-auto">
            Most jobs range from <strong>$150 – $300</strong> depending on size and
            condition. No hidden fees. Call for a free quote in 60 seconds.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-10">
          {tiers.map((t) => (
            <div
              key={t.size}
              className={`rounded-2xl p-8 text-center border-2 transition-shadow ${
                t.highlight
                  ? "bg-blue-700 border-blue-700 text-white shadow-xl shadow-blue-200"
                  : "bg-white dark:bg-gray-900 border-gray-100 dark:border-gray-700 text-gray-900 dark:text-white shadow-sm"
              }`}
            >
              {t.highlight && (
                <div className="text-xs font-bold uppercase tracking-widest text-blue-200 mb-3">
                  Most Popular
                </div>
              )}
              <div className="text-lg font-bold mb-1">{t.size}</div>
              <div
                className={`text-4xl font-extrabold mb-2 ${
                  t.highlight ? "text-white" : "text-blue-700 dark:text-blue-400"
                }`}
              >
                {t.range}
              </div>
              <div
                className={`text-sm ${t.highlight ? "text-blue-200" : "text-gray-400"}`}
              >
                {t.note}
              </div>
            </div>
          ))}
        </div>

        <div className="text-center space-y-4">
          <p className="text-gray-500 dark:text-gray-400 text-sm">
            Prices may vary based on property condition. We'll give you an honest quote
            before we start — always.
          </p>
          <CallButton phone={PHONE} phoneRaw={PHONE_RAW} label="📞 Get a Free Quote Now" />
        </div>
      </div>
    </section>
  );
}
