import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Trust from "@/components/Trust";
import Services from "@/components/Services";
import BeforeAfter from "@/components/BeforeAfter";
import Pricing from "@/components/Pricing";
import CTA from "@/components/CTA";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";
import StickyCall from "@/components/StickyCall";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Trust />
        <Services />
        <BeforeAfter />
        <Pricing />
        <CTA />
        <ContactForm />
      </main>
      <Footer />
      {/* Sticky call bar — visible on mobile only */}
      <StickyCall />
      {/* Spacer so sticky bar doesn't cover content on mobile */}
      <div className="h-20 sm:hidden" />
    </>
  );
}
