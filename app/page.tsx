import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { Programs } from "@/components/sections/Programs";
import { CambridgeSpotlight } from "@/components/sections/CambridgeSpotlight";
import { WhyUs } from "@/components/sections/WhyUs";
import { Schedule } from "@/components/sections/Schedule";
import { CtaForm } from "@/components/sections/CtaForm";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex-grow flex flex-col">
        <Hero />
        <Programs />
        <CambridgeSpotlight />
        <WhyUs />
        <Schedule />
        <CtaForm />
      </main>
      <Footer />
    </>
  );
}
