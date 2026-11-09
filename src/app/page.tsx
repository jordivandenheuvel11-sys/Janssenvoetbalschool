import React from "react";
import Hero from "@/components/Hero";
import AboutUsSection from "@/components/AboutUsSection";
import StickyFeatures from "@/components/StickyFeatures";
import AboutSection from "@/components/AboutSection";

const homeJsonLd = {
  "@context": "https://schema.org",
  "@type": "SportsActivityLocation",
  name: "Janssen Voetbalschool",
  description:
    "Professionele individuele voetbaltraining voor jeugdspelers in Velden, gemeente Venlo.",
  url: "https://www.janssenvoetbalschool.nl",
  telephone: "+31611250476",
  email: "jelte.janssen@ziggo.nl",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Sportpark Theo Lommen",
    addressLocality: "Velden",
    addressRegion: "Limburg",
    addressCountry: "NL",
  },
  areaServed: [
    { "@type": "City", name: "Velden" },
    { "@type": "City", name: "Venlo" },
    { "@type": "AdministrativeArea", name: "Gemeente Venlo" },
  ],
  sameAs: [
    "https://www.instagram.com/janssenvoetbal/",
    "https://www.tiktok.com/@janssenvoetbalsch",
  ],
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(homeJsonLd) }}
      />
      <main>
        <Hero />
        <AboutUsSection />
        <StickyFeatures />
        <AboutSection />
      </main>
    </>
  );
}

