import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { Programs } from "@/components/sections/Programs";
import { CambridgeSpotlight } from "@/components/sections/CambridgeSpotlight";
import { WhyUs } from "@/components/sections/WhyUs";
import { Schedule } from "@/components/sections/Schedule";
import { CtaForm } from "@/components/sections/CtaForm";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": ["EducationalOrganization", "LocalBusiness"],
  name: "Jedu Bimbel",
  description:
    "Bimbel eksklusif untuk SD & SMP dengan standar kurikulum Cambridge International di Klaten Selatan, Kabupaten Klaten.",
  url: "https://jedu-bimbel.vercel.app",
  logo: "https://jedu-bimbel.vercel.app/logo.png",
  image: "https://jedu-bimbel.vercel.app/logo.png",
  telephone: "+6281321018850",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Gg. I No.38, Gayamprit",
    addressLocality: "Klaten Selatan",
    addressRegion: "Jawa Tengah",
    postalCode: "57423",
    addressCountry: "ID",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: -7.7072523,
    longitude: 110.5939911,
  },
  hasMap:
    "https://www.google.com/maps/dir//JEDU+BIMBEL,+sebrang+happy+elektronik,+Gg.+I+No.38,+Gayamprit,+Kec.+Klaten+Sel.,+Kabupaten+Klaten,+Jawa+Tengah+57423",
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "13:00",
      closes: "20:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Saturday"],
      opens: "08:00",
      closes: "14:00",
    },
  ],
  educationalCredentialAwarded: "Cambridge International Curriculum",
  teaches: ["Calistung", "Bahasa Indonesia", "IPA", "Matematika"],
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
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
