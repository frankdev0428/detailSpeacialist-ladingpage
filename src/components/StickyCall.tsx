"use client";

const PHONE = "(510) 555-0100";
const PHONE_RAW = "+15105550100";

export default function StickyCall() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 sm:hidden bg-white border-t border-gray-200 shadow-2xl px-4 py-3">
      <a
        href={`tel:${PHONE_RAW}`}
        className="flex items-center justify-center gap-3 bg-emerald-500 hover:bg-emerald-600 active:bg-emerald-700 text-white font-extrabold py-4 rounded-xl text-lg w-full shadow-lg shadow-emerald-500/30 transition-colors"
      >
        <span className="text-2xl">📞</span>
        <span>Call Now – {PHONE}</span>
      </a>
    </div>
  );
}
