"use client";

import ContactLink from "@/components/contact/ContactLink";
import type { ContactAanvraagType } from "@/components/contact/ContactModalContext";

type FirstTrainingCtaProps = {
  description: string;
  href: string;
  ctaLabel: string;
  /** Optional background image (defaults to gallery/g1.jpg like mini) */
  imageSrc?: string;
  type?: ContactAanvraagType;
  subject?: string;
};

/**
 * Full-bleed “Klaar voor de eerste training?” strip — zelfde opbouw als mini-voetbalschool.
 */
export default function FirstTrainingCta({
  description,
  href,
  ctaLabel,
  imageSrc = "/gallery/g1.jpg",
  type = "proefles",
  subject,
}: FirstTrainingCtaProps) {
  return (
    <section
      aria-labelledby="eerste-training-heading"
      style={{
        position: "relative",
        overflow: "hidden",
        padding: "100px 24px",
        textAlign: "center",
        zIndex: 20,
        color: "#ffffff",
      }}
    >
      <img
        src={imageSrc}
        alt=""
        aria-hidden="true"
        width={1600}
        height={1067}
        loading="lazy"
        decoding="async"
        style={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
          zIndex: 0,
        }}
      />
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundColor: "rgba(15, 15, 15, 0.78)",
          zIndex: 1,
        }}
      />
      <div
        style={{
          position: "relative",
          zIndex: 2,
          maxWidth: "640px",
          margin: "0 auto",
        }}
      >
        <h2
          id="eerste-training-heading"
          style={{
            fontSize: "clamp(1.85rem, 4vw, 2.75rem)",
            fontWeight: 900,
            letterSpacing: "-0.03em",
            lineHeight: 1.15,
            margin: "0 0 16px 0",
            color: "#ffffff",
          }}
        >
          Klaar voor de eerste training?
        </h2>
        <p
          style={{
            margin: "0 0 32px 0",
            fontSize: "17px",
            lineHeight: 1.65,
            color: "rgba(255,255,255,0.85)",
          }}
        >
          {description}
        </p>
        <ContactLink
          href={href}
          type={type}
          subject={subject}
          style={{
            display: "inline-block",
            padding: "16px 34px",
            borderRadius: "9999px",
            backgroundColor: "#ffffff",
            color: "#0f0f0f",
            fontWeight: 900,
            letterSpacing: "0.06em",
            textTransform: "uppercase",
            fontSize: "14px",
            textDecoration: "none",
          }}
        >
          {ctaLabel}
        </ContactLink>
      </div>
    </section>
  );
}
