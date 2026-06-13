"use client";

import { useState } from "react";

const faqs = [
  {
    q: "What's included in a move-out cleaning?",
    a: "Our move-out clean covers every room top to bottom: all floors swept and mopped, baseboards wiped, inside all cabinets and drawers, appliances cleaned inside and out (oven, fridge, microwave), bathrooms scrubbed including grout and fixtures, light switches, door handles, and window sills. Basically everything your landlord's checklist asks for.",
  },
  {
    q: "How far in advance should I book?",
    a: "We offer same-day and next-day availability in most cases. That said, we recommend booking 2–3 days ahead if you have a specific move-out date, especially on weekends and end-of-month when demand is highest. Call us and we'll do our best to accommodate your schedule.",
  },
  {
    q: "Do I need to be home during the cleaning?",
    a: "No — many of our customers leave us a key or door code and go about their day. We're a trusted, family-owned team and we take that seriously. You'll get a text when we arrive and when we're done. We're fully insured so you're covered.",
  },
  {
    q: "Do you guarantee my landlord will return my deposit?",
    a: "We can't legally guarantee what your landlord decides, but we clean to a professional move-out standard that satisfies the vast majority of landlord inspections. If your landlord finds a cleaning issue from our visit, contact us within 24 hours and we'll return to fix it at no charge.",
  },
  {
    q: "How much does a move-out or deep clean cost?",
    a: "Most jobs range from $150 to $300 depending on the size of the home and its current condition. Studios and 1-bedrooms typically run $150–$200, while 2–3 bedrooms are usually $200–$280. Large homes or heavily soiled spaces may be quoted higher. We always give you a clear price before we start — no surprises.",
  },
  {
    q: "What cities do you serve?",
    a: "We serve Hayward, Castro Valley, San Leandro, San Lorenzo, Union City, and Fremont. If you're in a nearby city not listed, give us a call — we may still be able to help depending on availability.",
  },
  {
    q: "Do you bring your own supplies and equipment?",
    a: "Yes. Our team arrives fully equipped with professional-grade cleaning products, vacuums, mops, and all necessary supplies. You don't need to provide anything. If you have specific product preferences due to allergies or sensitivities, let us know when you book.",
  },
  {
    q: "How long does a typical cleaning take?",
    a: "A 1-bedroom typically takes 2–3 hours, a 2–3 bedroom takes 3–5 hours, and larger homes may take 5–7 hours or more. The actual time depends on the property's condition. We don't rush — we stay until the job is done right.",
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

function AccordionItem({
  faq,
  isOpen,
  onToggle,
}: {
  faq: (typeof faqs)[0];
  isOpen: boolean;
  onToggle: () => void;
}) {
  return (
    <div className="border border-gray-100 dark:border-gray-700 rounded-2xl overflow-hidden">
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left bg-white dark:bg-gray-900 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
        aria-expanded={isOpen}
      >
        <span className="font-bold text-gray-900 dark:text-white text-sm sm:text-base">
          {faq.q}
        </span>
        <span
          className={`shrink-0 w-6 h-6 rounded-full flex items-center justify-center transition-transform duration-200 ${
            isOpen
              ? "bg-blue-700 text-white rotate-45"
              : "bg-gray-100 dark:bg-gray-700 text-gray-500 dark:text-gray-300"
          }`}
        >
          <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
          </svg>
        </span>
      </button>

      {isOpen && (
        <div className="px-6 pb-5 bg-white dark:bg-gray-900 border-t border-gray-50 dark:border-gray-800">
          <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed pt-4">
            {faq.a}
          </p>
        </div>
      )}
    </div>
  );
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-16 bg-gray-50 dark:bg-gray-800">
      {/* FAQPage JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema).replace(/</g, "\\u003c"),
        }}
      />

      <div className="max-w-3xl mx-auto px-6">
        <div className="text-center mb-12">
          <span className="inline-block bg-blue-100 dark:bg-blue-900/40 text-blue-700 dark:text-blue-300 text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
            FAQ
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 dark:text-white mb-3">
            Frequently Asked Questions
          </h2>
          <p className="text-gray-500 dark:text-gray-400 text-lg">
            Everything you need to know before booking.
          </p>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <AccordionItem
              key={i}
              faq={faq}
              isOpen={openIndex === i}
              onToggle={() => setOpenIndex(openIndex === i ? null : i)}
            />
          ))}
        </div>

        <p className="text-center text-gray-400 dark:text-gray-500 text-sm mt-8">
          Still have questions?{" "}
          <a
            href="tel:+15109991514"
            className="text-blue-700 dark:text-blue-400 font-semibold hover:underline"
          >
            Call us — (510) 999-1514
          </a>
        </p>
      </div>
    </section>
  );
}
