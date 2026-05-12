import CallButton from "./CallButton";

const PHONE = "(510) 555-0100";
const PHONE_RAW = "+15105550100";

export default function CTA() {
  return (
    <section
      id="cta"
      className="py-20 px-6"
      style={{
        background: "linear-gradient(135deg, #0f4c81 0%, #1a73e8 60%, #0d9488 100%)",
      }}
    >
      <div className="max-w-3xl mx-auto text-center">
        <div className="text-5xl mb-6">📅</div>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4">
          Need It Done Today?
        </h2>
        <p className="text-blue-100 text-lg mb-8 max-w-xl mx-auto">
          We offer same-day and next-day availability for move-out cleans across
          Hayward, Castro Valley, and San Leandro. Don&apos;t wait — spots fill fast.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <CallButton
            phone={PHONE}
            phoneRaw={PHONE_RAW}
            size="lg"
            label="📞 Call for Same-Day Service"
          />
          <a
            href="#contact"
            className="text-white border-2 border-white font-bold py-5 px-10 rounded-xl text-xl hover:bg-white hover:text-blue-700 transition-colors duration-200 w-full sm:w-auto text-center"
          >
            Request a Callback
          </a>
        </div>
        <p className="text-blue-200 text-sm mt-6">
          ✓ Free quote &nbsp;·&nbsp; ✓ No obligation &nbsp;·&nbsp; ✓ Friendly local team
        </p>
      </div>
    </section>
  );
}
