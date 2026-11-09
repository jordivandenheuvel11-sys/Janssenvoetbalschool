import type { CSSProperties } from "react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import ContactLink from "@/components/contact/ContactLink";
import { BUSINESS, getFullAddressLine, getMapsUrl } from "@/lib/business";
import { getSiteUrl } from "@/lib/site";

const siteUrl = getSiteUrl();
const linkedInUrl = "https://www.linkedin.com/in/jelte-janssen-168236321/";
const omroepUrl =
  "https://omroepvenlo.nl/nieuws/artikel/jelte-janssen-19-heeft-zijn-eigen-voetbalschool";

export const metadata: Metadata = {
  title: "Over mij — Jelte Janssen",
  description:
    "Jelte Janssen: eigenaar Janssen Voetbalschool, hoofdtrainer FCV JO15-1, VC2/UEFA B Jeugd (KNVB). Individuele voetbaltraining in Velden & gemeente Venlo.",
  alternates: { canonical: "/over-mij" },
  openGraph: {
    title: "Over mij — Jelte Janssen | Janssen Voetbalschool",
    description:
      "Eigenaar Janssen Voetbalschool | Hoofdtrainer FCV JO15-1 | UEFA B / KNVB VC2 | CIOS Sport & Bewegen – Buurtsportcoach.",
    url: "/over-mij",
  },
};

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: BUSINESS.trainerName,
  jobTitle:
    "Eigenaar Janssen Voetbalschool | Hoofdtrainer FCV JO15-1 | UEFA B / KNVB VC2",
  worksFor: {
    "@type": "SportsActivityLocation",
    name: BUSINESS.name,
    url: siteUrl,
  },
  url: `${siteUrl}/over-mij`,
  image: `${siteUrl}/trainer-new.webp`,
  email: BUSINESS.email,
  telephone: BUSINESS.telephone,
  address: {
    "@type": "PostalAddress",
    streetAddress: BUSINESS.streetAddress,
    addressLocality: BUSINESS.addressLocality,
    addressRegion: BUSINESS.addressRegion,
    postalCode: BUSINESS.postalCode,
    addressCountry: BUSINESS.addressCountry,
  },
  alumniOf: [
    { "@type": "EducationalOrganization", name: "Het VISTA college" },
    { "@type": "EducationalOrganization", name: "KNVB" },
  ],
  hasCredential: "VC2 - UEFA B (Veld) — KNVB",
  sameAs: [...BUSINESS.sameAs, linkedInUrl],
};

const h2: CSSProperties = {
  fontSize: "clamp(1.6rem, 3vw, 2.1rem)",
  fontWeight: 900,
  letterSpacing: "-0.03em",
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

const experience = [
  {
    role: "Eigenaar",
    org: "Janssen Voetbalschool",
    period: "aug. 2025 – heden",
    place: "Velden",
    detail:
      "Individuele en privé voetbaltraining voor jeugd: techniek, tactiek en persoonlijke ontwikkeling op Sportpark Theo Lommen.",
  },
  {
    role: "Hoofdtrainer JO15-1",
    org: "FCV Venlo",
    period: "okt. 2026 – heden",
    place: "Venlo",
    detail: "Hoofdtrainer van FCV JO15-1 in de Hoofdklasse.",
  },
  {
    role: "Assistent-trainer JO12",
    org: "VVV-Venlo Jeugdopleiding",
    period: "aug. 2025 – heden",
    place: "Venlo",
    detail:
      "Assistent-trainer bij VVV-Venlo JO12 — ervaring in een BVO-jeugdopleiding naast mijn eigen voetbalschool.",
  },
  {
    role: "Stage — Venlo Fit",
    org: "Gemeente Venlo",
    period: "aug. 2026 – heden",
    place: "Venlo",
    detail:
      "Stage in het kader van CIOS Sport & Bewegen / Buurtsportcoach.",
  },
  {
    role: "Jeugdtrainer",
    org: "IVO Velden",
    period: "2020 – heden",
    place: "Velden",
    detail:
      "Ruim drie jaar jeugdtraining: JO8 (2020–2023) en JO13 (vanaf 2024). Trainingen geven, begeleiden en jonge voetballers ontwikkelen.",
  },
];

const education = [
  {
    title: "CIOS Sport en Bewegen niveau 4 — Buurtsportcoach",
    org: "Het VISTA college",
    period: "aug. 2025 – jun. 2028",
    detail:
      "Opleiding gericht op sport, coaching, leidinggeven en het organiseren van sport- en beweegactiviteiten voor verschillende doelgroepen.",
  },
  {
    title: "Voetbalcoach 2 Jeugd (VC2) — UEFA B (Veld)",
    org: "KNVB",
    period: "sep. 2025 – sep. 2026 · toegekend jul. 2026",
    detail:
      "Diploma VC2 / UEFA B Jeugd: coachen tijdens wedstrijden, analyseren, trainingen geven en begeleiden van spelers en staf.",
  },
];

export default function OverMijPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
      />
      <main style={{ backgroundColor: "#ffffff", color: "#0f0f0f" }}>
        <section
          style={{
            padding: "140px 24px 72px",
            maxWidth: "1000px",
            margin: "0 auto",
            display: "flex",
            flexWrap: "wrap",
            alignItems: "center",
            gap: "48px",
          }}
        >
          <div style={{ flex: "1 1 320px", minWidth: "280px" }}>
            <span
              style={{
                fontSize: "13px",
                fontWeight: 900,
                color: "#D90429",
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                display: "block",
                marginBottom: "16px",
              }}
            >
              Over mij
            </span>
            <h1
              style={{
                fontSize: "clamp(2.4rem, 5vw, 3.6rem)",
                fontWeight: 900,
                letterSpacing: "-0.04em",
                lineHeight: 1.08,
                margin: "0 0 16px",
              }}
            >
              Jelte Janssen
            </h1>
            <p
              style={{
                margin: "0 0 20px",
                fontSize: "16px",
                lineHeight: 1.55,
                color: "#5a5a5a",
                fontWeight: 600,
                maxWidth: "34rem",
              }}
            >
              Eigenaar Janssen Voetbalschool · Hoofdtrainer FCV JO15-1 · UEFA B /
              KNVB VC2 · CIOS Sport &amp; Bewegen – Buurtsportcoach
            </p>
            <p style={{ ...p, fontSize: "18px", maxWidth: "36rem" }}>
              Ik ben een enthousiaste en gedreven voetbaltrainer met ruim drie
              jaar ervaring in het jeugdvoetbal. Op{" "}
              <a
                href={getMapsUrl()}
                target="_blank"
                rel="noopener noreferrer"
                style={link}
              >
                {getFullAddressLine()}
              </a>{" "}
              help ik jonge voetballers bij hun technische, tactische en
              persoonlijke ontwikkeling.
            </p>
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: "12px",
                marginTop: "8px",
              }}
            >
              <ContactLink
                href="/proefles-aanvragen"
                type="proefles"
                style={{
                  display: "inline-block",
                  backgroundColor: "#D90429",
                  color: "#ffffff",
                  padding: "14px 22px",
                  borderRadius: 'var(--radius)',
                  fontWeight: 800,
                  textDecoration: "none",
                  fontSize: "14px",
                  letterSpacing: "0.04em",
                  textTransform: "uppercase",
                }}
              >
                Proefles aanvragen
              </ContactLink>
              <a
                href={linkedInUrl}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "inline-block",
                  backgroundColor: "#0f0f0f",
                  color: "#ffffff",
                  padding: "14px 22px",
                  borderRadius: 'var(--radius)',
                  fontWeight: 800,
                  textDecoration: "none",
                  fontSize: "14px",
                  letterSpacing: "0.04em",
                  textTransform: "uppercase",
                }}
              >
                LinkedIn
              </a>
            </div>
          </div>

          <div
            style={{
              flex: "1 1 280px",
              minWidth: "240px",
              position: "relative",
              aspectRatio: "3 / 4",
              maxWidth: "420px",
              width: "100%",
              margin: "0 auto",
              overflow: "hidden",
              borderRadius: "var(--radius)",
            }}
          >
            <Image
              src="/trainer-new.webp"
              alt="Jelte Janssen, trainer van Janssen Voetbalschool"
              fill
              priority
              sizes="(max-width: 768px) 100vw, 420px"
              quality={90}
              style={{ objectFit: "cover" }}
            />
          </div>
        </section>

        <section style={{ backgroundColor: "#f7f7f7", padding: "72px 24px" }}>
          <div style={{ maxWidth: "720px", margin: "0 auto" }}>
            <h2 style={h2}>Wie ik ben</h2>
            <p style={p}>
              Bij IVO Velden deed ik drie jaar ervaring op als jeugdtrainer: ik
              gaf trainingen en begeleidde jonge voetballers in hun ontwikkeling
              (JO8 en later JO13). Daarnaast deed ik ervaring op bij VVV-Venlo
              en ben ik momenteel hoofdtrainer van FCV JO15-1, dat uitkomt in de
              Hoofdklasse.
            </p>
            <p style={p}>
              Als eigenaar van Janssen Voetbalschool combineer ik mijn passie
              voor voetbal met talentontwikkeling — iets waar{" "}
              <a
                href={omroepUrl}
                target="_blank"
                rel="noopener noreferrer"
                style={link}
              >
                Omroep Venlo
              </a>{" "}
              eerder over schreef. Het oprichten van mijn eigen voetbalschool
              zie ik als een van mijn grootste prestaties.
            </p>
            <p style={{ ...p, marginBottom: 0 }}>
              Mijn belangrijkste vaardigheden: leidinggeven, communiceren,
              organiseren, samenwerken en het motiveren en begeleiden van
              kinderen.
            </p>
          </div>
        </section>

        <section style={{ padding: "72px 24px" }}>
          <div style={{ maxWidth: "720px", margin: "0 auto" }}>
            <h2 style={h2}>Ervaring</h2>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "28px",
              }}
            >
              {experience.map((item) => (
                <article
                  key={`${item.org}-${item.role}`}
                  style={{
                    borderTop: "1px solid #e8e8e8",
                    paddingTop: "24px",
                  }}
                >
                  <h3
                    style={{
                      margin: "0 0 6px",
                      fontSize: "1.2rem",
                      fontWeight: 900,
                      letterSpacing: "-0.02em",
                      color: "#0f0f0f",
                    }}
                  >
                    {item.role}
                  </h3>
                  <p
                    style={{
                      margin: "0 0 8px",
                      fontSize: "15px",
                      fontWeight: 700,
                      color: "#D90429",
                    }}
                  >
                    {item.org}
                    <span
                      style={{
                        color: "#6b6b6b",
                        fontWeight: 500,
                      }}
                    >
                      {" "}
                      · {item.period} · {item.place}
                    </span>
                  </p>
                  <p style={{ ...p, marginBottom: 0 }}>{item.detail}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section style={{ backgroundColor: "#0f0f0f", padding: "72px 24px" }}>
          <div style={{ maxWidth: "720px", margin: "0 auto" }}>
            <h2 style={{ ...h2, color: "#ffffff" }}>Opleiding &amp; diploma’s</h2>
            {education.map((item) => (
              <article key={item.title} style={{ marginBottom: "28px" }}>
                <h3
                  style={{
                    margin: "0 0 6px",
                    fontSize: "1.15rem",
                    fontWeight: 900,
                    letterSpacing: "-0.02em",
                    color: "#ffffff",
                  }}
                >
                  {item.title}
                </h3>
                <p
                  style={{
                    margin: "0 0 8px",
                    fontSize: "14px",
                    fontWeight: 600,
                    color: "rgba(255,255,255,0.55)",
                  }}
                >
                  {item.org} · {item.period}
                </p>
                <p
                  style={{
                    ...p,
                    color: "rgba(255,255,255,0.78)",
                    marginBottom: 0,
                  }}
                >
                  {item.detail}
                </p>
              </article>
            ))}
            <p
              style={{
                ...p,
                color: "rgba(255,255,255,0.78)",
                marginBottom: 0,
              }}
            >
              Tijdens CIOS leer ik trainingen en lessen zelfstandig voor te
              bereiden, uit te voeren en te evalueren — met focus op didactiek,
              communicatie en het motiveren van deelnemers. Die kennis pas ik
              direct toe als hoofdtrainer en als eigenaar van mijn
              voetbalschool.
            </p>
          </div>
        </section>

        <section style={{ padding: "72px 24px 100px" }}>
          <div style={{ maxWidth: "720px", margin: "0 auto" }}>
            <h2 style={h2}>Janssen Voetbalschool</h2>
            <p style={p}>
              Bij Janssen Voetbalschool (KvK {BUSINESS.kvk}) geef ik privé /
              individuele voetbaltraining in Velden, gemeente Venlo. Sessies van
              60 minuten, gericht op jouw doelen — van balvaardigheid tot
              1-tegen-1 en keuzes onder druk. Voor de allerjongsten is er de{" "}
              <Link href="/mini-voetbalschool" style={link}>
                Mini Voetbalschool
              </Link>{" "}
              (3 t/m 5 jaar).
            </p>
            <p style={p}>
              Bekijk mijn{" "}
              <Link href="/pakketten" style={link}>
                pakketten &amp; tarieven
              </Link>
              , de{" "}
              <Link href="/trainingen" style={link}>
                trainingsplanning
              </Link>{" "}
              of mijn{" "}
              <a
                href={linkedInUrl}
                target="_blank"
                rel="noopener noreferrer"
                style={link}
              >
                LinkedIn-profiel
              </a>
              .
            </p>
            <ContactLink
              href="/proefles-aanvragen"
              type="proefles"
              style={{
                display: "inline-block",
                marginTop: "8px",
                backgroundColor: "#D90429",
                color: "#ffffff",
                padding: "14px 28px",
                borderRadius: 'var(--radius)',
                fontWeight: 800,
                textDecoration: "none",
                fontSize: "14px",
                letterSpacing: "0.04em",
                textTransform: "uppercase",
              }}
            >
              Start met een proefles
            </ContactLink>
          </div>
        </section>
      </main>
    </>
  );
}
