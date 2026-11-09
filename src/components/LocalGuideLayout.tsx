import React from "react";
import Link from "next/link";
import ContactLink from "@/components/contact/ContactLink";
import { BUSINESS, getFullAddressLine, getMapsUrl } from "@/lib/business";

export type LocalGuideRelated = { href: string; label: string };

type LocalGuideLayoutProps = {
  eyebrow: string;
  title: string;
  lead: string;
  children: React.ReactNode;
  related?: LocalGuideRelated[];
};

/**
 * Shared shell for local SEO support pages — one composition, brand-first H1,
 * NAP + CTA footer. Content stays server-rendered.
 */
export default function LocalGuideLayout({
  eyebrow,
  title,
  lead,
  children,
  related = [],
}: LocalGuideLayoutProps) {
  return (
    <main style={{ backgroundColor: "#ffffff", color: "#0f0f0f", minHeight: "100vh" }}>
      <header
        style={{
          padding: "140px 24px 64px",
          background:
            "linear-gradient(165deg, #0a0a0a 0%, #1a1214 55%, #2a0a10 100%)",
          color: "#ffffff",
        }}
      >
        <div style={{ maxWidth: "720px", margin: "0 auto" }}>
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
            {eyebrow}
          </span>
          <h1
            style={{
              fontSize: "clamp(2.2rem, 5vw, 3.4rem)",
              fontWeight: 700,
              letterSpacing: "0.02em",
              lineHeight: 1.08,
              margin: "0 0 20px",
            }}
          >
            {title}
          </h1>
          <p
            style={{
              fontSize: "18px",
              lineHeight: 1.7,
              color: "rgba(255,255,255,0.82)",
              fontWeight: 500,
              margin: 0,
              maxWidth: "40rem",
            }}
          >
            {lead}
          </p>
        </div>
      </header>

      <article
        style={{
          maxWidth: "720px",
          margin: "0 auto",
          padding: "64px 24px 40px",
          fontSize: "17px",
          lineHeight: 1.75,
          color: "#3a3a3a",
          fontWeight: 500,
        }}
      >
        {children}

        <aside
          style={{
            marginTop: "56px",
            paddingTop: "32px",
            borderTop: "1px solid #e8e8e8",
          }}
        >
          <h2
            style={{
              fontSize: "1.25rem",
              fontWeight: 700,
              letterSpacing: "0.01em",
              margin: "0 0 12px",
              color: "#0f0f0f",
            }}
          >
            Locatie &amp; contact
          </h2>
          <p style={{ margin: "0 0 8px" }}>
            <a href={getMapsUrl()} target="_blank" rel="noopener noreferrer" style={{ color: "#D90429", fontWeight: 700 }}>
              {getFullAddressLine()}
            </a>
          </p>
          <p style={{ margin: "0 0 8px" }}>
            Tel.{" "}
            <a href={`tel:${BUSINESS.telephone}`} style={{ color: "inherit" }}>
              {BUSINESS.telephoneDisplay}
            </a>
            {" · "}
            <a href={`mailto:${BUSINESS.email}`} style={{ color: "inherit" }}>
              {BUSINESS.email}
            </a>
          </p>
          <p style={{ margin: 0, color: "#6b6b6b", fontSize: "15px" }}>
            KvK {BUSINESS.kvk} · Trainer {BUSINESS.trainerName}
          </p>

          <div style={{ marginTop: "28px", display: "flex", flexWrap: "wrap", gap: "12px" }}>
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
            <Link
              href="/pakketten"
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
              Pakketten
            </Link>
          </div>
        </aside>

        {related.length > 0 && (
          <nav aria-label="Gerelateerd" style={{ marginTop: "48px" }}>
            <h2
              style={{
                fontSize: "1.1rem",
                fontWeight: 800,
                margin: "0 0 14px",
                color: "#0f0f0f",
              }}
            >
              Meer over training in de regio
            </h2>
            <ul style={{ margin: 0, paddingLeft: "1.2em", display: "flex", flexDirection: "column", gap: "8px" }}>
              {related.map((r) => (
                <li key={r.href}>
                  <Link href={r.href} style={{ color: "#D90429", fontWeight: 700 }}>
                    {r.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        )}
      </article>
    </main>
  );
}
