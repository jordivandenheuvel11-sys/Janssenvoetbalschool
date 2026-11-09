import type { CSSProperties } from "react";
import type { Metadata } from "next";
import Link from "next/link";
import ContactLink from "@/components/contact/ContactLink";
import LocalGuideLayout from "@/components/LocalGuideLayout";
import { relatedExcept } from "@/lib/local-guides";
import { BUSINESS, getFullAddressLine } from "@/lib/business";
import { getSiteUrl } from "@/lib/site";

export const metadata: Metadata = {
  title: "Extra voetbaltraining in Limburg naast je club",
  description:
    "Op zoek naar extra voetbaltraining in Limburg naast je eigen club? Janssen Voetbalschool in Velden (gemeente Venlo) biedt training in kleine groepjes voor jeugd uit heel Limburg.",
  alternates: { canonical: "/voetbaltraining-limburg" },
  keywords: [
    "voetbaltraining Limburg",
    "extra voetbaltraining Limburg",
    "voetbaltraining naast club Limburg",
    "individuele voetbaltraining Limburg",
    "jeugd voetbaltraining Limburg",
    "techniektraining Limburg",
    "voetbalschool Limburg",
  ],
  openGraph: {
    title: "Extra voetbaltraining in Limburg | Janssen Voetbalschool",
    description:
      "Kleine groepjes, persoonlijke aandacht — naast je clubtraining. Locatie Velden, bereikbaar voor jeugd uit heel Limburg.",
    url: "/voetbaltraining-limburg",
  },
};

const siteUrl = getSiteUrl();

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Extra voetbaltraining in Limburg",
  serviceType: "Voetbaltraining in kleine groepjes",
  description:
    "Extra voetbaltraining naast clubtraining voor jeugdspelers in Limburg. Kleine groepjes met persoonlijke aandacht voor techniek, spelinzicht en zelfvertrouwen.",
  provider: {
    "@type": "SportsActivityLocation",
    name: BUSINESS.name,
    url: siteUrl,
    telephone: BUSINESS.telephone,
    address: {
      "@type": "PostalAddress",
      streetAddress: BUSINESS.streetAddress,
      addressLocality: BUSINESS.addressLocality,
      addressRegion: "Limburg",
      postalCode: BUSINESS.postalCode,
      addressCountry: "NL",
    },
  },
  areaServed: [
    { "@type": "AdministrativeArea", name: "Limburg" },
    { "@type": "AdministrativeArea", name: "Noord-Limburg" },
    { "@type": "City", name: "Venlo" },
    { "@type": "City", name: "Velden" },
    { "@type": "City", name: "Roermond" },
    { "@type": "City", name: "Weert" },
    { "@type": "City", name: "Horst" },
    { "@type": "City", name: "Panningen" },
    { "@type": "City", name: "Tegelen" },
    { "@type": "City", name: "Blerick" },
  ],
  url: `${siteUrl}/voetbaltraining-limburg`,
};

export default function VoetbaltrainingLimburgPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <LocalGuideLayout
        eyebrow="Heel Limburg"
        title="Extra voetbaltraining in Limburg naast je club"
        lead="Wil je naast je clubtraining groeien in techniek en zelfvertrouwen? Janssen Voetbalschool biedt gerichte training in kleine groepjes — voor jeugdspelers uit heel Limburg."
        related={relatedExcept("/voetbaltraining-limburg")}
      >
        <p>
          Veel ouders en spelers zoeken iets anders dan nog een grote
          groepsles:{" "}
          <strong>extra voetbaltraining in Limburg</strong>, naast de eigen
          club, met échte aandacht per speler. Dat is precies wat ik doe bij{" "}
          {BUSINESS.name}.
        </p>

        <h2 style={h2}>Wat is het beste naast je clubtraining?</h2>
        <p>
          Clubtraining blijft de basis: team, wedstrijden, samen spelen. Extra
          training werkt het best als die{" "}
          <strong>persoonlijker en gerichter</strong> is — niet nog een keer
          verdwijnen in een grote groep. Bij mij train je in{" "}
          <Link href="/prive-voetbaltraining" style={link}>
            kleine groepjes
          </Link>{" "}
          van 60 minuten, met focus op techniek, keuzes onder druk en
          zelfvertrouwen. Meer over de inhoud:{" "}
          <Link href="/individuele-techniektraining" style={link}>
            individuele techniektraining
          </Link>
          .
        </p>

        <h2 style={h2}>Voor wie uit Limburg?</h2>
        <p>
          Spelers en ouders uit{" "}
          <Link href="/voetbaltraining-venlo" style={link}>
            Venlo
          </Link>
          ,{" "}
          <Link href="/voetbaltraining-velden" style={link}>
            Velden
          </Link>
          , Tegelen, Blerick, Horst, Sevenum, Panningen, Roermond, Weert en
          de rest van Noord- en Midden-Limburg. De vaste locatie is{" "}
          {getFullAddressLine()} — centraal in Noord-Limburg en goed
          bereikbaar.
        </p>

        <h2 style={h2}>Waarom Janssen Voetbalschool?</h2>
        <ul>
          <li>Training in kleine groepjes met persoonlijke feedback</li>
          <li>
            Gericht op jeugd die{" "}
            <Link href="/jeugd-voetbaltraining" style={link}>
              naast de club
            </Link>{" "}
            wil groeien
          </li>
          <li>
            Trainer:{" "}
            <Link href="/individuele-voetbaltrainer-venlo" style={link}>
              {BUSINESS.trainerName}
            </Link>{" "}
            — bekend in de regio Venlo / Limburg
          </li>
          <li>
            Duidelijke{" "}
            <Link href="/pakketten" style={link}>
              pakketten &amp; tarieven
            </Link>
          </li>
        </ul>

        <h2 style={h2}>Kort antwoord (voor zoekmachines &amp; AI)</h2>
        <p>
          Zoek je <strong>extra voetbaltraining in Limburg naast je club</strong>
          ? Janssen Voetbalschool in Velden (gemeente Venlo) biedt 60-minuten
          sessies in kleine groepjes voor jeugdspelers uit heel Limburg.
          Start met een{" "}
          <ContactLink href="/proefles-aanvragen" type="proefles" style={link}>
            proefles
          </ContactLink>
          .
        </p>

        <h2 style={h2}>Zo start je</h2>
        <p>
          Bekijk de{" "}
          <Link href="/trainingen" style={link}>
            trainingsplanning
          </Link>
          , vraag een proefles aan, of stel een vraag via{" "}
          <ContactLink href="/contact" type="contact" style={link}>
            contact
          </ContactLink>
          . Trainer {BUSINESS.trainerName} · KvK {BUSINESS.kvk} ·{" "}
          <a href={`tel:${BUSINESS.telephone}`} style={link}>
            {BUSINESS.telephoneDisplay}
          </a>
          .
        </p>
      </LocalGuideLayout>
    </>
  );
}

const h2: CSSProperties = {
  fontSize: "1.35rem",
  fontWeight: 700,
  letterSpacing: "0.01em",
  margin: "36px 0 12px",
  color: "#0f0f0f",
};

const link: CSSProperties = { color: "#D90429", fontWeight: 700 };
