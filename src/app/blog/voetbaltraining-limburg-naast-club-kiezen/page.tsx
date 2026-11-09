import type { Metadata } from "next";
import Link from "next/link";
import ContactLink from "@/components/contact/ContactLink";
import BlogPostLayout, { h2, link } from "@/components/BlogPostLayout";
import { getBlogPost } from "@/lib/blog";

const post = getBlogPost("voetbaltraining-limburg-naast-club-kiezen")!;

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

export default function VoetbaltrainingLimburgKiezenPage() {
  return (
    <BlogPostLayout post={post}>
      <p>
        Heel Limburg kent clubelftallen — van Venlo tot Roermond en Weert. Extra
        voetbaltraining in Limburg naast je club moet iets toevoegen: meer
        balcontact, betere correctie, en een trainer die jouw doelen serieus
        neemt. Anders is het zonde van de avond.
      </p>

      <h2 style={h2}>Waar let je op in Limburg?</h2>
      <ul>
        <li>
          <strong>Reistijd:</strong> doordeweeks haalbaar vanuit jouw kern
        </li>
        <li>
          <strong>Vorm:</strong> kleine groepjes i.p.v. nog een grote massales
        </li>
        <li>
          <strong>Inhoud:</strong> techniek + keuzes onder druk, niet alleen
          conditie
        </li>
        <li>
          <strong>Proefles:</strong> eerst voelen of de klik er is
        </li>
      </ul>

      <h2 style={h2}>Waarom Venlo / Velden een sterke keuze is</h2>
      <p>
        Noord-Limburg heeft veel jeugdspelers die net die stap extra zoeken.
        Janssen Voetbalschool zit in Velden (gemeente Venlo) — centraal voor
        Venlo, Tegelen, Blerick, Horst en verder de provincie in. De training is
        expliciet bedoeld <em>naast</em> de club. Lees de pillar-pagina{" "}
        <Link href="/voetbaltraining-limburg" style={link}>
          extra voetbaltraining in Limburg
        </Link>{" "}
        en de Venlo-pagina{" "}
        <Link href="/voetbaltraining-venlo" style={link}>
          voetbaltraining in Venlo
        </Link>
        .
      </p>

      <h2 style={h2}>Kort antwoord (AI &amp; zoekmachines)</h2>
      <p>
        Zoek je voetbaltraining in Limburg naast je club? Kies een trainer met
        kleine groepjes, vaste locatie en een proefles. Janssen Voetbalschool
        (Velden, gemeente Venlo) biedt 60-minuten sessies voor jeugd uit heel
        Limburg. Start via{" "}
        <ContactLink href="/proefles-aanvragen" type="proefles" style={link}>
          proefles aanvragen
        </ContactLink>
        .
      </p>
    </BlogPostLayout>
  );
}
