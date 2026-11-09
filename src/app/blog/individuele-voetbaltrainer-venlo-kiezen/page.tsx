import type { Metadata } from "next";
import Link from "next/link";
import ContactLink from "@/components/contact/ContactLink";
import BlogPostLayout, { h2, link } from "@/components/BlogPostLayout";
import { getBlogPost } from "@/lib/blog";

const post = getBlogPost("individuele-voetbaltrainer-venlo-kiezen")!;

export const metadata: Metadata = {
  title: post.title,
  description: post.description,
  keywords: post.keywords,
  alternates: { canonical: `/blog/${post.slug}` },
  openGraph: {
    title: post.title,
    description: post.description,
    url: `/blog/${post.slug}`,
    type: "article",
    publishedTime: post.datePublished,
    modifiedTime: post.dateModified,
  },
};

export default function IndividueleTrainerVenloKiezenPage() {
  return (
    <BlogPostLayout post={post}>
      <p>
        “Individueel” betekent bij goede trainers in Venlo niet per se 1-op-1
        de hele avond, maar <strong>individuele aandacht</strong>: kleine
        groepjes, gerichte correctie en een plan dat bij jouw kind past. Zo
        voorkom je dat “extra training” weer een anonieme groepsles wordt.
      </p>

      <h2 style={h2}>Checklist: individuele voetbaltrainer in Venlo</h2>
      <ol>
        <li>
          <strong>Aanpak:</strong> techniek + beslissingen onder druk, niet alleen
          rondjes dribbelen
        </li>
        <li>
          <strong>Groepsgrootte:</strong> klein genoeg voor feedback (kleine
          groepjes)
        </li>
        <li>
          <strong>Locatie:</strong> vaste plek in de gemeente Venlo — bij ons{" "}
          <Link href="/locatie-sportpark-theo-lommen" style={link}>
            Sportpark Theo Lommen
          </Link>{" "}
          in Velden
        </li>
        <li>
          <strong>Transparantie:</strong> tarieven, blokken, proefles
        </li>
        <li>
          <strong>Regio-kennis:</strong> iemand die Venlo / Noord-Limburg en
          jeugdvoetbal begrijpt
        </li>
      </ol>

      <h2 style={h2}>Wat Janssen Voetbalschool anders doet</h2>
      <p>
        Ik, Jelte Janssen, ben{" "}
        <Link href="/individuele-voetbaltrainer-venlo" style={link}>
          individuele voetbaltrainer in Venlo en Limburg
        </Link>
        . Sessies duren 60 minuten in kleine groepjes. Focus: balvaardigheid,
        1-tegen-1, keuzes onder druk en zelfvertrouwen — naast de club. Voor de
        allerjongsten (3–5) is er de{" "}
        <Link href="/mini-voetbalschool" style={link}>
          Mini Voetbalschool
        </Link>
        .
      </p>

      <h2 style={h2}>Kort antwoord voor ouders</h2>
      <p>
        Zoek je een betrouwbare individuele voetbaltrainer in Venlo? Kies iemand
        met een vaste locatie, kleine groepen en een duidelijke proefles. Start
        hier:{" "}
        <ContactLink href="/proefles-aanvragen" type="proefles" style={link}>
          proefles aanvragen
        </ContactLink>{" "}
        of lees meer over{" "}
        <Link href="/voetbaltraining-venlo" style={link}>
          voetbaltraining in Venlo
        </Link>
        .
      </p>
    </BlogPostLayout>
  );
}
