import type { Metadata } from "next";
import FaqSection from "@/components/FaqSection";
import { FAQ_ITEMS, faqAnswerText } from "@/lib/faq";
import { getSiteUrl } from "@/lib/site";

const siteUrl = getSiteUrl();

export const metadata: Metadata = {
  title: "Veelgestelde vragen (FAQ)",
  description:
    "Antwoorden over leeftijden, locatie Sportpark Theo Lommen, proefles, pakketten en Mini Voetbalschool bij Janssen Voetbalschool in Velden.",
  alternates: { canonical: `${siteUrl}/faq` },
  openGraph: {
    title: "FAQ | Janssen Voetbalschool",
    description:
      "Veelgestelde vragen over individuele voetbaltraining in Velden, gemeente Venlo.",
    url: `${siteUrl}/faq`,
  },
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQ_ITEMS.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faqAnswerText(item),
    },
  })),
};

export default function FaqPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <main style={{ paddingTop: "100px", backgroundColor: "#ffffff" }}>
        <FaqSection showFooterLink={false} />
      </main>
    </>
  );
}
