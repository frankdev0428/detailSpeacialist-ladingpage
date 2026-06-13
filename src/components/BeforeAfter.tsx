import Image from "next/image";

const photos = [
  {
    label: "Bedroom",
    emoji: "🛏️",
    before: "/images/bedroom-before.jpg",
    after: "/images/bedroom-after.jpg",
  },
  {
    label: "Kitchen",
    emoji: "🍳",
    before: "/images/kitchen-before.jpg",
    after: "/images/kitchen-after.jpg",
  },
  {
    label: "Bathroom",
    emoji: "🚿",
    before: "/images/bathroom-before.jpg",
    after: "/images/bathroom-after.jpg",
  },
  {
    label: "Floor / Grout",
    emoji: "🧹",
    before: "/images/floor-before.jpg",
    after: "/images/floor-after.jpg",
  },
  {
    label: "Sink",
    emoji: "🚰",
    before: "/images/sink-before.jpg",
    after: "/images/sink-after.jpg",
  },
  {
    label: "Living Room",
    emoji: "🛋️",
    before: "/images/livingroom-before.jpg",
    after: "/images/livingroom-after.jpg",
  },
];

function PhotoCard({
  src,
  alt,
  type,
}: {
  src: string;
  alt: string;
  type: "before" | "after";
}) {
  const isBefore = type === "before";
  return (
    <div className="relative rounded-xl overflow-hidden aspect-[4/3] bg-gray-100">
      <Image
        src={src}
        alt={alt}
        fill
        className="object-cover"
        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
      />
      <div
        className={`absolute bottom-0 left-0 right-0 py-1.5 text-center text-xs font-extrabold uppercase tracking-widest ${
          isBefore
            ? "bg-black/60 text-white"
            : "bg-emerald-500/90 text-white"
        }`}
      >
        {isBefore ? "Before" : "After ✓"}
      </div>
    </div>
  );
}

export default function BeforeAfter() {
  return (
    <section id="results" className="py-16 bg-white dark:bg-gray-900">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-12">
          <span className="inline-block bg-emerald-100 dark:bg-emerald-900/40 text-emerald-700 dark:text-emerald-300 text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
            Real Results
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 dark:text-white mb-3">
            See the Difference
          </h2>
          <p className="text-gray-500 dark:text-gray-400 text-lg max-w-xl mx-auto">
            Real photos from real jobs across Hayward, Castro Valley &amp; San Leandro — no filters, no staging.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {photos.map((p) => (
            <div key={p.label}>
              <div className="flex items-center gap-2 mb-3">
                <span className="text-xl">{p.emoji}</span>
                <span className="font-bold text-gray-800 dark:text-gray-100">{p.label}</span>
              </div>
              <div className="grid grid-cols-2 gap-2">
                <PhotoCard
                  src={p.before}
                  alt={`${p.label} before cleaning`}
                  type="before"
                />
                <PhotoCard
                  src={p.after}
                  alt={`${p.label} after cleaning`}
                  type="after"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
