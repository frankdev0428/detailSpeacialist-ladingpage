const badges = [
  {
    icon: "🏡",
    title: "Family-Owned Business",
    desc: "We treat your home like our own. No corporate crews — just dedicated local cleaners.",
  },
  {
    icon: "⏰",
    title: "Reliable & On-Time",
    desc: "We show up when we say we will. Your time matters, and we never miss an appointment.",
  },
  {
    icon: "📍",
    title: "Local East Bay Service",
    desc: "Proudly serving Hayward, Castro Valley, and San Leandro for years.",
  },
  {
    icon: "💯",
    title: "Satisfaction Guaranteed",
    desc: "Not happy with the clean? We'll come back and make it right — no questions asked.",
  },
];

export default function Trust() {
  return (
    <section id="trust" className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-3">
            Why Homeowners Trust Us
          </h2>
          <p className="text-gray-500 text-lg max-w-xl mx-auto">
            We built this business on word of mouth — and we plan to keep it that way.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {badges.map((b) => (
            <div
              key={b.title}
              className="flex flex-col items-center text-center p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="text-5xl mb-4">{b.icon}</div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">{b.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{b.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
