import Link from "next/link";
import { FAQ_ITEMS } from "@/lib/faq";

type FaqSectionProps = {
  /** Show intro + link to full /faq page */
  showFooterLink?: boolean;
  heading?: string;
  /** Limit items on homepage; omit for full list */
  limit?: number;
};

/**
 * Crawlable FAQ (native details/summary — no client JS required).
 */
export default function FaqSection({
  showFooterLink = true,
  heading = "Veelgestelde vragen",
  limit,
}: FaqSectionProps) {
  const items = typeof limit === "number" ? FAQ_ITEMS.slice(0, limit) : FAQ_ITEMS;

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
            fontWeight: 900,
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
            fontWeight: 900,
            letterSpacing: "-0.04em",
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
                  fontWeight: 800,
                  letterSpacing: "-0.02em",
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
                {item.answer}
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
            <Link href="/faq" style={{ color: "#D90429", fontWeight: 700 }}>
              volledige FAQ
            </Link>{" "}
            of{" "}
            <Link href="/contact" style={{ color: "#D90429", fontWeight: 700 }}>
              neem contact op
            </Link>
            .
          </p>
        )}
      </div>
    </section>
  );
}
