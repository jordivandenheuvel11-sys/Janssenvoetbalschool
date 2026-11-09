import React from "react";
import type { Metadata } from "next";
import ContactLink from "@/components/contact/ContactLink";
import OpenContactOnMount from "@/components/contact/OpenContactOnMount";
import { BUSINESS, getFullAddressLine, getMapsUrl } from "@/lib/business";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Neem contact op met Janssen Voetbalschool in Velden (gemeente Venlo). Sportpark Theo Lommen, Schandeloseweg 1a, 5941 CP Velden. Vragen over trainingen of de Mini Voetbalschool? Ik help je graag.",
  alternates: { canonical: "/contact" },
  openGraph: {
    title: "Contact | Janssen Voetbalschool",
    description:
      "Contact Janssen Voetbalschool — Sportpark Theo Lommen, Schandeloseweg 1a, 5941 CP Velden.",
    url: "/contact",
  },
};

type ContactPageProps = {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
};

export default async function ContactPage({ searchParams }: ContactPageProps) {
  const params = await searchParams;
  const onderwerp =
    typeof params.onderwerp === "string" ? params.onderwerp : undefined;
  const type = onderwerp?.toLowerCase().includes("mini")
    ? "mini-voetbalschool"
    : "contact";

  return (
    <main
      style={{
        backgroundColor: "#0f0f0f",
        color: "#ffffff",
        minHeight: "100vh",
      }}
    >
      <OpenContactOnMount type={type} subject={onderwerp} />
      <div
        style={{
          padding: "140px 24px 100px",
          maxWidth: "720px",
          margin: "0 auto",
        }}
      >
        <span
          style={{
            fontSize: "13px",
            fontWeight: 700,
            color: "#D90429",
            letterSpacing: "0.2em",
            textTransform: "uppercase",
            display: "block",
            marginBottom: "16px",
          }}
        >
          Direct contact
        </span>
        <h1
          style={{
            fontSize: "clamp(2.4rem, 5vw, 3.6rem)",
            fontWeight: 700,
            letterSpacing: "0.02em",
            lineHeight: 1.08,
            margin: "0 0 20px",
          }}
        >
          Contact
        </h1>
        <p
          style={{
            fontSize: "18px",
            lineHeight: 1.7,
            color: "rgba(255,255,255,0.72)",
            margin: "0 0 32px",
            maxWidth: "36rem",
          }}
        >
          Stel je vraag of plan een gesprek via het formulier. Ik reageer zo
          snel mogelijk.
        </p>
        <ContactLink
          href="/contact"
          type={type}
          subject={onderwerp}
          style={{
            display: "inline-block",
            padding: "14px 28px",
            borderRadius: 'var(--radius)',
            backgroundColor: "#ffffff",
            color: "#0a0a0a",
            fontWeight: 800,
            textDecoration: "none",
            marginBottom: "48px",
          }}
        >
          Formulier openen
        </ContactLink>
        <div
          style={{
            borderTop: "1px solid rgba(255,255,255,0.12)",
            paddingTop: "28px",
            fontSize: "15px",
            lineHeight: 1.7,
            color: "rgba(255,255,255,0.7)",
          }}
        >
          <p style={{ margin: "0 0 8px", fontWeight: 700, color: "#ffffff" }}>
            Locatie
          </p>
          <p style={{ margin: "0 0 8px" }}>
            <a
              href={getMapsUrl()}
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "#D90429", fontWeight: 700 }}
            >
              {getFullAddressLine()}
            </a>
          </p>
          <p style={{ margin: "0 0 8px" }}>
            Tel.{" "}
            <a
              href={`tel:${BUSINESS.telephone}`}
              style={{ color: "inherit" }}
            >
              {BUSINESS.telephoneDisplay}
            </a>
            {" · "}
            <a href={`mailto:${BUSINESS.email}`} style={{ color: "inherit" }}>
              {BUSINESS.email}
            </a>
          </p>
          <p style={{ margin: 0, color: "rgba(255,255,255,0.45)" }}>
            KvK {BUSINESS.kvk} · Trainer {BUSINESS.trainerName}
          </p>
        </div>
      </div>
    </main>
  );
}
