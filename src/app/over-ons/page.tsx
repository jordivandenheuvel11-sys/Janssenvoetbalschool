import type { CSSProperties } from "react";
import type { Metadata } from "next";
import Link from "next/link";
import FirstTrainingCta from "@/components/FirstTrainingCta";
import TrainersSection from "@/components/TrainersSection";
import { BUSINESS, getFullAddressLine, getMapsUrl } from "@/lib/business";
import { getSiteUrl } from "@/lib/site";

const siteUrl = getSiteUrl();
const omroepUrl =
  "https://omroepvenlo.nl/nieuws/artikel/jelte-janssen-19-heeft-zijn-eigen-voetbalschool";

export const metadata: Metadata = {
  title: "Over ons — Janssen Voetbalschool",
  description:
    "Over ons: Jelte Janssen, Rik en Wout van Janssen Voetbalschool. Individuele voetbaltraining in kleine groepjes in Velden & gemeente Venlo.",
  alternates: { canonical: "/over-ons" },
  openGraph: {
    title: "Over ons — Janssen Voetbalschool",
    description:
      "Het team van Janssen Voetbalschool: Jelte Janssen (eigenaar), Rik en Wout. Training in Velden, gemeente Venlo.",
    url: "/over-ons",
  },
};

const orgJsonLd = {
  "@context": "https://schema.org",
  "@type": "SportsActivityLocation",
  "@id": `${siteUrl}/#business`,
  name: BUSINESS.name,
  url: siteUrl,
  telephone: BUSINESS.telephone,
  email: BUSINESS.email,
  address: {
    "@type": "PostalAddress",
    streetAddress: BUSINESS.streetAddress,
    addressLocality: BUSINESS.addressLocality,
    addressRegion: BUSINESS.addressRegion,
    postalCode: BUSINESS.postalCode,
    addressCountry: BUSINESS.addressCountry,
  },
  employee: [
    {
      "@type": "Person",
      name: "Jelte Janssen",
      jobTitle: "Eigenaar & trainer",
      image: `${siteUrl}/trainers/jelte.webp`,
    },
    {
      "@type": "Person",
      name: "Rik",
      jobTitle: "Trainer",
      image: `${siteUrl}/trainers/rik.webp`,
    },
    {
      "@type": "Person",
      name: "Wout",
      jobTitle: "Trainer",
      image: `${siteUrl}/trainers/wout.webp`,
    },
  ],
};

const h2: CSSProperties = {
  fontSize: "clamp(1.6rem, 3vw, 2.1rem)",
  fontWeight: 700,
  letterSpacing: "0.015em",
  lineHeight: 1.15,
  margin: "0 0 16px",
  color: "#0f0f0f",
};

const p: CSSProperties = {
  fontSize: "17px",
  lineHeight: 1.75,
  color: "#3a3a3a",
  fontWeight: 500,
  margin: "0 0 16px",
};

const link: CSSProperties = { color: "#D90429", fontWeight: 700 };

export default function OverOnsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(orgJsonLd) }}
      />
      <main style={{ backgroundColor: "#ffffff", color: "#0f0f0f" }}>
        <TrainersSection
          eyebrow="Over ons"
          heading="Aangenaam."
          intro="Jelte, Rik en Wout — het team achter de trainingen op Sportpark Theo Lommen."
          background="#ffffff"
          topPadding
          asPageTitle
        />

        <section style={{ backgroundColor: "#f7f7f7", padding: "72px 24px" }}>
          <div style={{ maxWidth: "720px", margin: "0 auto" }}>
            <h2 style={h2}>Hoe het begon</h2>
            <p style={p}>
              Ik ben Jelte Janssen. Na jaren jeugdtraining bij IVO Velden wilde
              ik iets wat in de grote clubgroep vaak mist: échte aandacht per
              speler. Extra training naast de club, in kleine groepjes, waarin
              je merkt dat je vooruitgaat — techniek, keuzes onder druk,
              zelfvertrouwen. Daarom startte ik Janssen Voetbalschool (KvK{" "}
              {BUSINESS.kvk}) op{" "}
              <a
                href={getMapsUrl()}
                target="_blank"
                rel="noopener noreferrer"
                style={link}
              >
                {getFullAddressLine()}
              </a>
              .{" "}
              <a
                href={omroepUrl}
                target="_blank"
                rel="noopener noreferrer"
                style={link}
              >
                Omroep Venlo
              </a>{" "}
              schreef daar al vroeg over.
            </p>
            <p style={p}>
              Wat klein begon, groeide mee. Meer ouders en spelers wilden mee —
              en ik wilde de kwaliteit hoog houden. Daarom trainen Rik en Wout
              nu mee. Samen geven we sessies van 60 minuten, gericht op jouw
              doelen: sneller handelen, sterker in 1-tegen-1, of meer zekerheid
              in de wedstrijd. Naast de school werk ik zelf als hoofdtrainer van
              FCV JO15-1 en assistent bij VVV-Venlo jeugd — die ervaring nemen
              we mee naar elke training.
            </p>
            <p style={{ ...p, marginBottom: 0 }}>
              Voor de allerjongsten is er de{" "}
              <Link href="/mini-voetbalschool" style={link}>
                Mini Voetbalschool
              </Link>{" "}
              (3 t/m 5 jaar). Bekijk de{" "}
              <Link href="/pakketten" style={link}>
                pakketten &amp; tarieven
              </Link>{" "}
              of de{" "}
              <Link href="/trainingen" style={link}>
                trainingsplanning
              </Link>
              . Vragen? Mail{" "}
              <a href={`mailto:${BUSINESS.email}`} style={link}>
                {BUSINESS.email}
              </a>{" "}
              of bel{" "}
              <a href={`tel:${BUSINESS.telephone}`} style={link}>
                {BUSINESS.telephoneDisplay}
              </a>
              .
            </p>
          </div>
        </section>

        <FirstTrainingCta
          description="Vraag een proefles aan — we plannen samen een moment op Sportpark Theo Lommen in Velden."
          href="/proefles-aanvragen"
          ctaLabel="Proefles aanvragen"
        />
      </main>
    </>
  );
}
