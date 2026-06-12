const services = [
  {
    icon: "🚪",
    title: "Move-Out Cleaning",
    desc: "Full top-to-bottom clean designed to satisfy your landlord and maximize your security deposit return.",
    bullets: [
      "All rooms, closets & hallways",
      "Inside cabinets & drawers",
      "Appliances inside & out",
      "Baseboards, doors & light switches",
    ],
  },
  {
    icon: "✨",
    title: "Deep Cleaning",
    desc: "A thorough, detailed clean for homes that need more than a standard maintenance clean.",
    bullets: [
      "Scrub grout, tile & tubs",
      "Inside oven & refrigerator",
      "Window sills & blinds",
      "Under furniture & appliances",
    ],
  },
  {
    icon: "🍳",
    title: "Kitchen & Bathrooms",
    desc: "We pay extra attention to the rooms that matter most to landlords and new tenants.",
    bullets: [
      "Degreased stovetop & hood",
      "Sanitized sinks & countertops",
      "Scrubbed toilets, showers & tubs",
      "Mopped floors",
    ],
  },
];

export default function Services() {
  return (
    <section id="services" className="py-16 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-12">
          <span className="inline-block bg-blue-100 dark:bg-blue-900/40 text-blue-700 dark:text-blue-300 text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
            What We Clean
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 dark:text-white mb-3">
            Our Cleaning Services
          </h2>
          <p className="text-gray-500 dark:text-gray-400 text-lg max-w-xl mx-auto">
            Specialized for move-outs and deep cleans across the East Bay.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((s) => (
            <div
              key={s.title}
              className="bg-white dark:bg-gray-900 rounded-2xl p-8 shadow-sm border border-gray-100 dark:border-gray-700"
            >
              <div className="text-5xl mb-4">{s.icon}</div>
              <h3 className="text-xl font-extrabold text-gray-900 dark:text-white mb-2">{s.title}</h3>
              <p className="text-gray-500 dark:text-gray-400 text-sm mb-5 leading-relaxed">{s.desc}</p>
              <ul className="space-y-2">
                {s.bullets.map((b) => (
                  <li key={b} className="flex items-start gap-2 text-sm text-gray-700 dark:text-gray-300">
                    <span className="text-emerald-500 font-bold mt-0.5">✓</span>
                    {b}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
