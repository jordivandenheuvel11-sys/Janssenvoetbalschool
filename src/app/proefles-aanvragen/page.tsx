import React from "react";
import type { Metadata } from "next";
import ContactLink from "@/components/contact/ContactLink";
import OpenContactOnMount from "@/components/contact/OpenContactOnMount";
import { BUSINESS, getFullAddressLine } from "@/lib/business";

export const metadata: Metadata = {
  title: "Proefles aanvragen",
  description:
    "Vraag een gratis proefles aan bij Janssen Voetbalschool in Velden, gemeente Venlo. Individuele voetbaltraining voor jeugdspelers — ik plan samen met jou een moment in.",
  alternates: { canonical: "/proefles-aanvragen" },
  openGraph: {
    title: "Proefles aanvragen | Janssen Voetbalschool",
    description:
      "Vraag een proefles aan voor individuele voetbaltraining in Velden (gemeente Venlo).",
    url: "/proefles-aanvragen",
  },
};

export default function ProeflesAanvragenPage() {
  return (
    <main
      style={{
        backgroundColor: "#0f0f0f",
        color: "#ffffff",
        minHeight: "100vh",
      }}
    >
      <OpenContactOnMount type="proefles" subject="Proefles aanvraag" />
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
            fontWeight: 900,
            color: "#D90429",
            letterSpacing: "0.2em",
            textTransform: "uppercase",
            display: "block",
            marginBottom: "16px",
          }}
        >
          Proefles
        </span>
        <h1
          style={{
            fontSize: "clamp(2.4rem, 5vw, 3.6rem)",
            fontWeight: 900,
            letterSpacing: "-0.04em",
            lineHeight: 1.08,
            margin: "0 0 20px",
          }}
        >
          Proefles aanvragen
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
          Laat je gegevens achter via het formulier — ik neem contact met je op
          om de proefles in te plannen op {getFullAddressLine()}.
        </p>
        <ContactLink
          href="/proefles-aanvragen"
          type="proefles"
          subject="Proefles aanvraag"
          style={{
            display: "inline-block",
            padding: "14px 28px",
            borderRadius: "9999px",
            backgroundColor: "#D90429",
            color: "#ffffff",
            fontWeight: 800,
            textDecoration: "none",
            marginBottom: "48px",
          }}
        >
          Formulier openen
        </ContactLink>
        <p
          style={{
            margin: 0,
            fontSize: "15px",
            color: "rgba(255,255,255,0.5)",
            lineHeight: 1.6,
          }}
        >
          Trainer {BUSINESS.trainerName} · {BUSINESS.telephoneDisplay}
        </p>
      </div>
    </main>
  );
}
