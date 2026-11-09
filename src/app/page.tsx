import React from "react";
import Hero from "@/components/Hero";
import PressMentionSection from "@/components/PressMentionSection";
import HomeOfferSection from "@/components/HomeOfferSection";
import AboutUsSection from "@/components/AboutUsSection";
import StickyFeatures from "@/components/StickyFeatures";
import AboutSection from "@/components/AboutSection";
import { BUSINESS, getMapsUrl } from "@/lib/business";
import { getSiteUrl } from "@/lib/site";

const siteUrl = getSiteUrl();

const homeJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "SportsActivityLocation",
      "@id": `${siteUrl}/#business`,
      name: BUSINESS.name,
      legalName: BUSINESS.legalName,
      description:
        "Professionele individuele voetbaltraining voor jeugdspelers in Velden, gemeente Venlo. Techniektraining op Sportpark Theo Lommen.",
      url: siteUrl,
      image: [`${siteUrl}/trainer-new.jpg`, `${siteUrl}/opengraph-image`],
      logo: `${siteUrl}/logo.png`,
      telephone: BUSINESS.telephone,
      email: BUSINESS.email,
      identifier: {
        "@type": "PropertyValue",
        name: "KvK",
        value: BUSINESS.kvk,
      },
      address: {
        "@type": "PostalAddress",
        streetAddress: BUSINESS.streetAddress,
        addressLocality: BUSINESS.addressLocality,
        addressRegion: BUSINESS.addressRegion,
        postalCode: BUSINESS.postalCode,
        addressCountry: BUSINESS.addressCountry,
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: BUSINESS.latitude,
        longitude: BUSINESS.longitude,
      },
      hasMap: getMapsUrl(),
      openingHoursSpecification: BUSINESS.openingHours.map((slot) => ({
        "@type": "OpeningHoursSpecification",
        dayOfWeek: slot.dayOfWeek,
        opens: slot.opens,
        closes: slot.closes,
      })),
      areaServed: [
        { "@type": "City", name: "Velden" },
        { "@type": "City", name: "Venlo" },
        { "@type": "AdministrativeArea", name: "Gemeente Venlo" },
      ],
      sameAs: [...BUSINESS.sameAs],
      employee: { "@id": `${siteUrl}/#trainer` },
      founder: { "@id": `${siteUrl}/#trainer` },
    },
    {
      "@type": "Person",
      "@id": `${siteUrl}/#trainer`,
      name: BUSINESS.trainerName,
      jobTitle: "Voetbaltrainer",
      worksFor: { "@id": `${siteUrl}/#business` },
      image: `${siteUrl}/trainer-new.jpg`,
      url: `${siteUrl}/#over-mij`,
      sameAs: [
        "https://www.instagram.com/janssenvoetbal/",
        "https://omroepvenlo.nl/nieuws/artikel/jelte-janssen-19-heeft-zijn-eigen-voetbalschool",
      ],
    },
    {
      "@type": "WebSite",
      "@id": `${siteUrl}/#website`,
      url: siteUrl,
      name: BUSINESS.name,
      inLanguage: "nl-NL",
      publisher: { "@id": `${siteUrl}/#business` },
    },
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
        <PressMentionSection />
        <HomeOfferSection />
        <AboutUsSection />
        <StickyFeatures />
        <AboutSection />
      </main>
    </>
  );
}
