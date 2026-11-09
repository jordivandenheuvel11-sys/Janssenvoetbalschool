import React from "react";
import Link from "next/link";
import ContactLink from "@/components/contact/ContactLink";
import type { BlogPost } from "@/lib/blog";
import { BLOG_POSTS } from "@/lib/blog";
import { BUSINESS, getFullAddressLine, getMapsUrl } from "@/lib/business";
import { getSiteUrl } from "@/lib/site";

type BlogPostLayoutProps = {
  post: BlogPost;
  children: React.ReactNode;
};

export default function BlogPostLayout({ post, children }: BlogPostLayoutProps) {
  const siteUrl = getSiteUrl();
  const url = `${siteUrl}/blog/${post.slug}`;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.description,
    datePublished: post.datePublished,
    dateModified: post.dateModified,
    inLanguage: "nl-NL",
    mainEntityOfPage: url,
    author: {
      "@type": "Person",
      name: BUSINESS.trainerName,
      url: `${siteUrl}/over-ons`,
    },
    publisher: {
      "@type": "Organization",
      name: BUSINESS.name,
      url: siteUrl,
      logo: `${siteUrl}/logo.webp`,
    },
    about: post.keywords.map((name) => ({ "@type": "Thing", name })),
    keywords: post.keywords.join(", "),
  };

  const related = BLOG_POSTS.filter((p) => p.slug !== post.slug).slice(0, 3);

  return (
    <main style={{ backgroundColor: "#ffffff", color: "#0f0f0f", minHeight: "100vh" }}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <header
        style={{
          padding: "140px 24px 64px",
          background:
            "linear-gradient(165deg, #0a0a0a 0%, #1a1214 55%, #2a0a10 100%)",
          color: "#ffffff",
        }}
      >
        <div style={{ maxWidth: "720px", margin: "0 auto" }}>
          <p style={{ margin: "0 0 16px", fontSize: "14px" }}>
            <Link href="/blog" style={{ color: "rgba(255,255,255,0.7)", textDecoration: "none" }}>
              Blog
            </Link>
            <span style={{ color: "rgba(255,255,255,0.4)" }}> / </span>
            <span style={{ color: "#D90429", fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", fontSize: "12px" }}>
              Tips &amp; gidsen
            </span>
          </p>
          <h1
            style={{
              fontSize: "clamp(2rem, 5vw, 3.2rem)",
              fontWeight: 700,
              letterSpacing: "0.02em",
              lineHeight: 1.12,
              margin: "0 0 20px",
            }}
          >
            {post.title}
          </h1>
          <p
            style={{
              fontSize: "18px",
              lineHeight: 1.7,
              color: "rgba(255,255,255,0.85)",
              fontWeight: 500,
              margin: "0 0 20px",
              maxWidth: "42rem",
            }}
          >
            {post.lead}
          </p>
          <p style={{ margin: 0, fontSize: "13px", color: "rgba(255,255,255,0.55)" }}>
            Door {BUSINESS.trainerName} · Bijgewerkt{" "}
            {new Date(post.dateModified).toLocaleDateString("nl-NL", {
              day: "numeric",
              month: "long",
              year: "numeric",
            })}
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
            padding: "28px 24px",
            backgroundColor: "#f7f7f7",
            borderRadius: "var(--radius)",
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
            Klaar om te starten in Venlo / Velden?
          </h2>
          <p style={{ margin: "0 0 8px" }}>
            Locatie:{" "}
            <a href={getMapsUrl()} target="_blank" rel="noopener noreferrer" style={link}>
              {getFullAddressLine()}
            </a>
          </p>
          <p style={{ margin: "0 0 20px", fontSize: "15px", color: "#595959" }}>
            Trainer {BUSINESS.trainerName} · Janssen Voetbalschool · KvK {BUSINESS.kvk}
          </p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "12px" }}>
            <ContactLink href="/proefles-aanvragen" type="proefles" style={ctaPrimary}>
              Proefles aanvragen
            </ContactLink>
            <Link href="/pakketten" style={ctaSecondary}>
              Pakketten
            </Link>
          </div>
        </aside>

        <nav aria-label="Meer blogartikelen" style={{ marginTop: "48px" }}>
          <h2
            style={{
              fontSize: "1.1rem",
              fontWeight: 700,
              margin: "0 0 14px",
              color: "#0f0f0f",
            }}
          >
            Meer artikelen
          </h2>
          <ul style={{ margin: 0, paddingLeft: "1.2em", display: "flex", flexDirection: "column", gap: "8px" }}>
            {related.map((r) => (
              <li key={r.slug}>
                <Link href={`/blog/${r.slug}`} style={link}>
                  {r.title}
                </Link>
              </li>
            ))}
            <li>
              <Link href="/blog" style={link}>
                Alle blogposts
              </Link>
            </li>
          </ul>
        </nav>
      </article>
    </main>
  );
}

export const h2: React.CSSProperties = {
  fontSize: "1.35rem",
  fontWeight: 700,
  letterSpacing: "0.01em",
  margin: "36px 0 12px",
  color: "#0f0f0f",
};

export const link: React.CSSProperties = { color: "#D90429", fontWeight: 700 };

const ctaPrimary: React.CSSProperties = {
  display: "inline-block",
  backgroundColor: "#D90429",
  color: "#ffffff",
  padding: "14px 22px",
  borderRadius: "var(--radius)",
  fontWeight: 700,
  textDecoration: "none",
  fontSize: "14px",
  letterSpacing: "0.04em",
  textTransform: "uppercase",
};

const ctaSecondary: React.CSSProperties = {
  ...ctaPrimary,
  backgroundColor: "#0f0f0f",
};
