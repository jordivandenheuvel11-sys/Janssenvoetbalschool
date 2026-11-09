import type { CSSProperties } from "react";
import type { Metadata } from "next";
import ContactLink from "@/components/contact/ContactLink";
import TrainersSection from "@/components/TrainersSection";
import { BUSINESS, getFullAddressLine, getMapsUrl } from "@/lib/business";
import { getSiteUrl } from "@/lib/site";

const siteUrl = getSiteUrl();

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
            <h2 style={h2}>Wat we doen</h2>
            <p style={p}>
              Bij Janssen Voetbalschool (KvK {BUSINESS.kvk}) trainen we
              jeugdspelers in kleine groepjes in Velden, gemeente Venlo. Sessies
              van 60 minuten, gericht op techniek, zelfvertrouwen en jouw
              doelen — naast de clubtraining.
            </p>
            <p style={{ ...p, marginBottom: 0 }}>
              We trainen op{" "}
              <a
                href={getMapsUrl()}
                target="_blank"
                rel="noopener noreferrer"
                style={link}
              >
                {getFullAddressLine()}
              </a>
              . Klaar om te starten? Vraag een proefles aan.
            </p>
            <ContactLink
              href="/proefles-aanvragen"
              type="proefles"
              style={{
                display: "inline-block",
                marginTop: "28px",
                backgroundColor: "#D90429",
                color: "#ffffff",
                padding: "14px 28px",
                borderRadius: "var(--radius)",
                fontWeight: 800,
                textDecoration: "none",
                fontSize: "14px",
                letterSpacing: "0.04em",
                textTransform: "uppercase",
              }}
            >
              Proefles aanvragen
            </ContactLink>
          </div>
        </section>
      </main>
    </>
  );
}
