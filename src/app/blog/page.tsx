import type { Metadata } from "next";
import Link from "next/link";
import { BLOG_POSTS } from "@/lib/blog";
import { getSiteUrl } from "@/lib/site";
import { BUSINESS } from "@/lib/business";

const blogDescription =
  "Artikelen over extra voetbaltraining in Venlo en Limburg: naast de club, techniek, individuele trainers en hoe je de juiste training kiest.";

export const metadata: Metadata = {
  title: "Blog: voetbaltraining Venlo & Limburg",
  description: blogDescription,
  alternates: { canonical: "/blog" },
  openGraph: {
    title: "Blog | Janssen Voetbalschool Venlo",
    description:
      "SEO- en AI-vriendelijke gidsen over voetbaltraining in Venlo en Limburg.",
    url: "/blog",
  },
};

export default function BlogIndexPage() {
  const siteUrl = getSiteUrl();
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Blog",
    name: "Janssen Voetbalschool Blog",
    description: blogDescription,
    url: `${siteUrl}/blog`,
    publisher: {
      "@type": "Organization",
      name: BUSINESS.name,
      url: siteUrl,
    },
    blogPost: BLOG_POSTS.map((p) => ({
      "@type": "BlogPosting",
      headline: p.title,
      url: `${siteUrl}/blog/${p.slug}`,
      datePublished: p.datePublished,
      description: p.description,
    })),
  };

  return (
    <main style={{ backgroundColor: "#ffffff", minHeight: "100vh" }}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <header
        style={{
          padding: "140px 24px 56px",
          background:
            "linear-gradient(165deg, #0a0a0a 0%, #1a1214 55%, #2a0a10 100%)",
          color: "#ffffff",
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
            Blog
          </span>
          <h1
            style={{
              fontSize: "clamp(2.2rem, 5vw, 3.4rem)",
              fontWeight: 700,
              letterSpacing: "0.02em",
              lineHeight: 1.1,
              margin: "0 0 16px",
            }}
          >
            Voetbaltraining in Venlo &amp; Limburg: gidsen en antwoorden
          </h1>
          <p
            style={{
              margin: 0,
              fontSize: "18px",
              lineHeight: 1.7,
              color: "rgba(255,255,255,0.82)",
              maxWidth: "40rem",
            }}
          >
            Praktische artikelen voor ouders en jeugdspelers die naast de club
            willen trainen — met focus op Venlo, en context voor heel Limburg.
          </p>
        </div>
      </header>

      <div style={{ maxWidth: "800px", margin: "0 auto", padding: "56px 24px 100px" }}>
        <ul style={{ listStyle: "none", margin: 0, padding: 0, display: "flex", flexDirection: "column", gap: "28px" }}>
          {BLOG_POSTS.map((post) => (
            <li
              key={post.slug}
              style={{
                paddingBottom: "28px",
                borderBottom: "1px solid #ececec",
              }}
            >
              <p
                style={{
                  margin: "0 0 8px",
                  fontSize: "13px",
                  color: "#595959",
                  fontWeight: 600,
                }}
              >
                {new Date(post.datePublished).toLocaleDateString("nl-NL", {
                  day: "numeric",
                  month: "long",
                  year: "numeric",
                })}
              </p>
              <h2 style={{ margin: "0 0 10px", fontSize: "clamp(1.35rem, 3vw, 1.75rem)", fontWeight: 700, letterSpacing: "0.01em", lineHeight: 1.25 }}>
                <Link href={`/blog/${post.slug}`} style={{ color: "#0f0f0f", textDecoration: "none" }}>
                  {post.title}
                </Link>
              </h2>
              <p style={{ margin: "0 0 14px", color: "#4a4a4a", lineHeight: 1.7, fontSize: "16px" }}>
                {post.lead}
              </p>
              <Link
                href={`/blog/${post.slug}`}
                style={{ color: "#D90429", fontWeight: 700, fontSize: "15px" }}
              >
                Lees artikel →
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
}
