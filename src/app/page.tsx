import React from "react";
import dynamic from "next/dynamic";
import Hero from "@/components/Hero";
import HomeOfferSection from "@/components/HomeOfferSection";
import StickyFeatures from "@/components/StickyFeatures";
import { BUSINESS, getMapsUrl } from "@/lib/business";
import { getSiteUrl } from "@/lib/site";

/** Below-fold sections: split JS so hero LCP stays light */
const PressMentionSection = dynamic(
  () => import("@/components/PressMentionSection"),
);
const AboutUsSection = dynamic(() => import("@/components/AboutUsSection"));
const AboutSection = dynamic(() => import("@/components/AboutSection"));
const TrainersSection = dynamic(() => import("@/components/TrainersSection"));
const FaqSection = dynamic(() => import("@/components/FaqSection"));
const FirstTrainingCta = dynamic(() => import("@/components/FirstTrainingCta"));

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
        "Extra voetbaltraining in Limburg naast de club: kleine groepjes voor jeugdspelers in Velden, gemeente Venlo. Individuele voetbaltrainer Jelte Janssen op Sportpark Theo Lommen — bereikbaar voor heel Limburg.",
      url: siteUrl,
      image: [`${siteUrl}/trainer-new.webp`, `${siteUrl}/opengraph-image`],
      logo: `${siteUrl}/logo.webp`,
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
        { "@type": "City", name: "Tegelen" },
        { "@type": "City", name: "Blerick" },
        { "@type": "City", name: "Horst" },
        { "@type": "City", name: "Roermond" },
        { "@type": "City", name: "Weert" },
        { "@type": "City", name: "Panningen" },
        { "@type": "AdministrativeArea", name: "Gemeente Venlo" },
        { "@type": "AdministrativeArea", name: "Noord-Limburg" },
        { "@type": "AdministrativeArea", name: "Limburg" },
      ],
      knowsAbout: [
        "voetbaltraining Limburg",
        "extra voetbaltraining naast club",
        "voetbaltraining kleine groepjes",
        "individuele voetbaltraining",
        "jeugd voetbaltraining Limburg",
        "individuele voetbaltrainer Venlo",
        "individuele voetbaltrainer Limburg",
        "jeugd voetbaltechniek",
      ],
      sameAs: [...BUSINESS.sameAs],
      employee: [
        { "@id": `${siteUrl}/#trainer` },
        { "@id": `${siteUrl}/#trainer-rik` },
        { "@id": `${siteUrl}/#trainer-wout` },
      ],
      founder: { "@id": `${siteUrl}/#trainer` },
    },
    {
      "@type": "Person",
      "@id": `${siteUrl}/#trainer`,
      name: BUSINESS.trainerName,
      jobTitle: "Eigenaar & individuele voetbaltrainer",
      description:
        "Individuele voetbaltrainer in Venlo en Limburg. Extra voetbaltraining in kleine groepjes voor jeugdspelers uit heel Limburg.",
      worksFor: { "@id": `${siteUrl}/#business` },
      image: `${siteUrl}/trainers/jelte.webp`,
      url: `${siteUrl}/over-mij`,
      areaServed: [
        "Velden",
        "Venlo",
        "Limburg",
        "Noord-Limburg",
        "Roermond",
        "Weert",
        "Horst",
      ],
      sameAs: [
        "https://www.instagram.com/janssenvoetbal/",
        "https://omroepvenlo.nl/nieuws/artikel/jelte-janssen-19-heeft-zijn-eigen-voetbalschool",
      ],
    },
    {
      "@type": "Person",
      "@id": `${siteUrl}/#trainer-rik`,
      name: "Rik",
      jobTitle: "Voetbaltrainer",
      worksFor: { "@id": `${siteUrl}/#business` },
      image: `${siteUrl}/trainers/rik.webp`,
    },
    {
      "@type": "Person",
      "@id": `${siteUrl}/#trainer-wout`,
      name: "Wout",
      jobTitle: "Voetbaltrainer",
      worksFor: { "@id": `${siteUrl}/#business` },
      image: `${siteUrl}/trainers/wout.webp`,
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
        <TrainersSection />
        <FaqSection limit={5} />
        <FirstTrainingCta
          description="Vraag een proefles aan — ik plan samen met jou een moment op Sportpark Theo Lommen in Velden."
          href="/proefles-aanvragen"
          ctaLabel="Proefles aanvragen"
        />
      </main>
    </>
  );
}
