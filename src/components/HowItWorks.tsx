import CallButton from "./CallButton";

const PHONE = "(510) 999-1514";
const PHONE_RAW = "+15109991514";

const steps = [
  {
    number: "01",
    icon: "📞",
    title: "Call or Request a Quote",
    desc: "Give us a quick call or fill out the form. We'll ask a few questions about your space and get you a fair price — usually in under 5 minutes.",
    color: "bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 border-blue-100 dark:border-blue-800",
    numColor: "text-blue-200 dark:text-blue-800",
  },
  {
    number: "02",
    icon: "📅",
    title: "We Show Up — On Time",
    desc: "Pick a day that works for you. We offer same-day and next-day availability. Our team arrives on schedule, fully equipped, and ready to work.",
    color: "bg-emerald-50 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-300 border-emerald-100 dark:border-emerald-800",
    numColor: "text-emerald-200 dark:text-emerald-800",
  },
  {
    number: "03",
    icon: "✨",
    title: "Enjoy a Spotless Space",
    desc: "We clean every corner — top to bottom. Move-out or deep clean, we don't leave until it's right. You inspect, we address anything you want, and you pay only when satisfied.",
    color: "bg-purple-50 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 border-purple-100 dark:border-purple-800",
    numColor: "text-purple-200 dark:text-purple-800",
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-16 bg-white dark:bg-gray-900">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-12">
          <span className="inline-block bg-blue-100 dark:bg-blue-900/40 text-blue-700 dark:text-blue-300 text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
            Simple Process
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 dark:text-white mb-3">
            How It Works
          </h2>
          <p className="text-gray-500 dark:text-gray-400 text-lg max-w-xl mx-auto">
            Getting your home cleaned is easy. Three steps — that&apos;s it.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {steps.map((s) => (
            <div
              key={s.number}
              className={`relative rounded-2xl p-8 border ${s.color}`}
            >
              {/* Big background number */}
              <div
                className={`absolute top-4 right-5 text-7xl font-extrabold leading-none select-none ${s.numColor}`}
              >
                {s.number}
              </div>
              <div className="relative z-10">
                <div className="text-4xl mb-4">{s.icon}</div>
                <h3 className="text-xl font-extrabold mb-2">{s.title}</h3>
                <p className="text-sm leading-relaxed opacity-80">{s.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <CallButton phone={PHONE} phoneRaw={PHONE_RAW} label="📞 Start with a Free Quote" size="lg" />
          <p className="text-gray-400 dark:text-gray-500 text-sm mt-3">
            No contracts · No hidden fees · 100% satisfaction guaranteed
          </p>
        </div>
      </div>
    </section>
  );
}
