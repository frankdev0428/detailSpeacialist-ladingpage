const pairs = [
  { label: "Kitchen", emoji: "🍳" },
  { label: "Bathroom", emoji: "🚿" },
  { label: "Living Room", emoji: "🛋️" },
  { label: "Oven", emoji: "🔥" },
];

function ImagePlaceholder({ label, type }: { label: string; type: "before" | "after" }) {
  const isBefore = type === "before";
  return (
    <div
      className={`aspect-video rounded-xl flex flex-col items-center justify-center gap-2 ${
        isBefore
          ? "bg-gray-200 border-2 border-dashed border-gray-300"
          : "bg-emerald-50 border-2 border-dashed border-emerald-300"
      }`}
    >
      <span className="text-3xl">{isBefore ? "😬" : "✨"}</span>
      <span
        className={`text-xs font-bold uppercase tracking-widest ${
          isBefore ? "text-gray-400" : "text-emerald-600"
        }`}
      >
        {type === "before" ? "Before" : "After"}
      </span>
      <span className="text-xs text-gray-400">Add {label} photo</span>
    </div>
  );
}

export default function BeforeAfter() {
  return (
    <section id="results" className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-12">
          <span className="inline-block bg-emerald-100 text-emerald-700 text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
            Real Results
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-3">
            See the Difference
          </h2>
          <p className="text-gray-500 text-lg max-w-xl mx-auto">
            Replace the placeholders below with your real before &amp; after photos to
            build instant trust with potential customers.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {pairs.map((p) => (
            <div key={p.label} className="space-y-2">
              <div className="flex items-center gap-2 mb-3">
                <span className="text-2xl">{p.emoji}</span>
                <span className="font-bold text-gray-800">{p.label}</span>
              </div>
              <div className="grid grid-cols-2 gap-3">
                <ImagePlaceholder label={p.label} type="before" />
                <ImagePlaceholder label={p.label} type="after" />
              </div>
            </div>
          ))}
        </div>

        {/* Tip banner */}
        <div className="mt-10 bg-blue-50 border border-blue-200 rounded-xl p-5 text-center">
          <p className="text-blue-700 text-sm font-medium">
            💡 <strong>Pro tip:</strong> Add 4–6 real before/after photos to this
            section. Authentic photos increase conversions by up to 30%.
          </p>
        </div>
      </div>
    </section>
  );
}
