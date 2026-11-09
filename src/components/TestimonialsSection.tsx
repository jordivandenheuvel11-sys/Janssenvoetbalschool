import React from "react";
import { TESTIMONIALS } from "@/lib/testimonials";
import { BUSINESS } from "@/lib/business";
import { getSiteUrl } from "@/lib/site";

/**
 * Social proof with clear attribution — one job: parent feedback.
 * Server-rendered for crawlability; Review JSON-LD without fake star ratings.
 */
export default function TestimonialsSection() {
  const siteUrl = getSiteUrl();

  const reviewJsonLd = {
    "@context": "https://schema.org",
    "@graph": TESTIMONIALS.map((t) => ({
      "@type": "Review",
      author: { "@type": "Person", name: t.authorName },
      reviewBody: t.quote,
      itemReviewed: {
        "@type": "SportsActivityLocation",
        name: BUSINESS.name,
        "@id": `${siteUrl}/#business`,
      },
    })),
  };

  return (
    <section
      id="ervaringen"
      aria-labelledby="ervaringen-heading"
      style={{
        backgroundColor: "#0a0a0a",
        color: "#ffffff",
        padding: "100px 24px",
        position: "relative",
        zIndex: 20,
      }}
    >
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(reviewJsonLd) }}
      />
      <div style={{ maxWidth: "800px", margin: "0 auto" }}>
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
          Ervaringen
        </span>
        <h2
          id="ervaringen-heading"
          style={{
            fontSize: "clamp(2rem, 4vw, 3rem)",
            fontWeight: 900,
            letterSpacing: "-0.04em",
            lineHeight: 1.1,
            marginBottom: "40px",
          }}
        >
          Wat ouders zeggen
        </h2>

        <div style={{ display: "flex", flexDirection: "column", gap: "40px" }}>
          {TESTIMONIALS.map((t) => (
            <blockquote
              key={t.id}
              style={{
                margin: 0,
                padding: 0,
                borderLeft: "3px solid #D90429",
                paddingLeft: "24px",
              }}
            >
              <p
                style={{
                  fontSize: "clamp(1.15rem, 2.5vw, 1.35rem)",
                  lineHeight: 1.65,
                  fontWeight: 500,
                  color: "rgba(255,255,255,0.92)",
                  margin: "0 0 16px",
                }}
              >
                “{t.quote}”
              </p>
              <footer style={{ fontSize: "15px", color: "#a0a0a0", fontWeight: 600 }}>
                <cite style={{ fontStyle: "normal", color: "#ffffff" }}>
                  {t.authorName}
                </cite>
                {" · "}
                {t.attribution}
              </footer>
            </blockquote>
          ))}
        </div>

        <p
          style={{
            marginTop: "48px",
            fontSize: "15px",
            lineHeight: 1.65,
            color: "#888",
            fontWeight: 500,
          }}
        >
          Ook genoemd door{" "}
          <a
            href="https://omroepvenlo.nl/nieuws/artikel/jelte-janssen-19-heeft-zijn-eigen-voetbalschool"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "#ffffff", fontWeight: 700 }}
          >
            Omroep Venlo
          </a>
          . Trainingen op Sportpark Theo Lommen in {BUSINESS.addressLocality}.
        </p>
      </div>
    </section>
  );
}
