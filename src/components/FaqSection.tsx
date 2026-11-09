"use client";

import Link from "next/link";
import ContactLink from "@/components/contact/ContactLink";
import { FAQ_ITEMS, isFaqLink } from "@/lib/faq";

type FaqSectionProps = {
  showFooterLink?: boolean;
  heading?: string;
  limit?: number;
};

function isFormHref(href: string) {
  return (
    href.startsWith("/contact") ||
    href.startsWith("/proefles-aanvragen")
  );
}

/**
 * Crawlable FAQ (native details/summary) met links naar actuele pagina’s.
 */
export default function FaqSection({
  showFooterLink = true,
  heading = "Veelgestelde vragen",
  limit,
}: FaqSectionProps) {
  const items = typeof limit === "number" ? FAQ_ITEMS.slice(0, limit) : FAQ_ITEMS;
  const linkStyle = { color: "#D90429", fontWeight: 700 as const };

  return (
    <section
      id="faq"
      aria-labelledby="faq-heading"
      style={{
        backgroundColor: "#ffffff",
        padding: "100px 24px",
        position: "relative",
        zIndex: 20,
      }}
    >
      <div style={{ maxWidth: "800px", margin: "0 auto" }}>
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
          FAQ
        </span>
        <h2
          id="faq-heading"
          style={{
            fontSize: "clamp(2.2rem, 4.5vw, 3.4rem)",
            fontWeight: 700,
            letterSpacing: "0.02em",
            lineHeight: 1.08,
            margin: "0 0 40px",
            color: "#0f0f0f",
          }}
        >
          {heading}
        </h2>

        <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
          {items.map((item) => (
            <details
              key={item.question}
              style={{
                borderBottom: "1px solid #e8e8e8",
                padding: "4px 0 16px",
              }}
            >
              <summary
                style={{
                  cursor: "pointer",
                  listStyle: "none",
                  fontSize: "18px",
                  fontWeight: 700,
                  letterSpacing: "0.01em",
                  lineHeight: 1.35,
                  color: "#0f0f0f",
                  padding: "12px 0",
                }}
              >
                {item.question}
              </summary>
              <p
                style={{
                  margin: "0 0 8px",
                  fontSize: "16px",
                  lineHeight: 1.7,
                  color: "#3a3a3a",
                  fontWeight: 500,
                }}
              >
                {item.parts.map((part, i) =>
                  isFaqLink(part) ? (
                    isFormHref(part.href) ? (
                      <ContactLink
                        key={`${item.question}-${i}`}
                        href={part.href}
                        style={linkStyle}
                      >
                        {part.label}
                      </ContactLink>
                    ) : (
                      <Link
                        key={`${item.question}-${i}`}
                        href={part.href}
                        style={linkStyle}
                      >
                        {part.label}
                      </Link>
                    )
                  ) : (
                    <span key={`${item.question}-${i}`}>{part}</span>
                  ),
                )}
              </p>
            </details>
          ))}
        </div>

        {showFooterLink && (
          <p
            style={{
              margin: "36px 0 0",
              fontSize: "15px",
              color: "#4a4a4a",
              fontWeight: 500,
            }}
          >
            Meer vragen? Bekijk de{" "}
            <Link href="/faq" style={linkStyle}>
              volledige FAQ
            </Link>{" "}
            of{" "}
            <ContactLink href="/contact" type="contact" style={linkStyle}>
              neem contact op
            </ContactLink>
            .
          </p>
        )}
      </div>
    </section>
  );
}
