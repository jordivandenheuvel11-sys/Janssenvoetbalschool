import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import InschrijvingForm from "@/components/InschrijvingForm";

export const metadata: Metadata = {
  title: "Inschrijven",
  description:
    "Schrijf je in voor een trainingspakket bij Janssen Voetbalschool in Velden.",
  alternates: { canonical: "/inschrijven" },
};

type InschrijvenPageProps = {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
};

export default async function InschrijvenPage({ searchParams }: InschrijvenPageProps) {
  const params = await searchParams;
  const pakket = typeof params.pakket === "string" ? params.pakket : undefined;

  return (
    <main style={{ backgroundColor: "#0f0f0f", color: "#ffffff", minHeight: "100vh" }}>
      <div style={{ maxWidth: "720px", margin: "0 auto", padding: "140px 24px 100px" }}>
        <span
          style={{
            fontSize: "14px",
            fontWeight: 900,
            color: "#D90429",
            letterSpacing: "0.2em",
            textTransform: "uppercase",
            display: "block",
            marginBottom: "20px",
          }}
        >
          Inschrijven
        </span>
        <h1
          style={{
            fontSize: "clamp(2.25rem, 5vw, 3.5rem)",
            fontWeight: 900,
            letterSpacing: "-0.04em",
            lineHeight: 1.1,
            margin: "0 0 16px 0",
          }}
        >
          Aanmelden voor training
        </h1>
        <p style={{ fontSize: "18px", lineHeight: 1.7, color: "#a0a0a0", margin: "0 0 40px 0" }}>
          Vul je gegevens in. Je inschrijving komt direct binnen in het overzicht van Janssen
          Voetbalschool.
        </p>

        {pakket && (
          <div
            style={{
              backgroundColor: "rgba(217, 4, 41, 0.1)",
              border: "1px solid rgba(217, 4, 41, 0.2)",
              borderRadius: "16px",
              padding: "16px 20px",
              marginBottom: "32px",
            }}
          >
            <span
              style={{
                display: "block",
                fontSize: "12px",
                fontWeight: 800,
                color: "#D90429",
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                marginBottom: "6px",
              }}
            >
              Geselecteerd pakket
            </span>
            <strong style={{ fontSize: "16px", color: "#ffffff" }}>{pakket}</strong>
          </div>
        )}

        <InschrijvingForm initialPakket={pakket} />

        <p style={{ marginTop: "32px", color: "#666", fontSize: "14px" }}>
          Liever eerst oriënteren?{" "}
          <Link href="/pakketten" style={{ color: "#ffffff", textDecoration: "underline" }}>
            Bekijk alle pakketten
          </Link>
        </p>
      </div>
    </main>
  );
}
