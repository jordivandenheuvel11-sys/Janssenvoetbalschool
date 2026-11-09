import type { Metadata } from "next";
import Link from "next/link";
import ContactLink from "@/components/contact/ContactLink";
import BlogPostLayout, { h2, link } from "@/components/BlogPostLayout";
import { getBlogPost } from "@/lib/blog";

const post = getBlogPost("techniektraining-jeugd-venlo")!;

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

export default function TechniektrainingJeugdVenloPage() {
  return (
    <BlogPostLayout post={post}>
      <p>
        Goede techniektraining voor jeugd in Venlo is geen “ballenpompen zonder
        plan”. Je wilt herhaling mét correctie: wat ging mis, wat moet anders, en
        hoe pas je het toe onder tempo. Dat lukt het best in een klein groepje,
        naast de wekelijkse clubtraining.
      </p>

      <h2 style={h2}>Wat train je in een goede technieksessie?</h2>
      <ul>
        <li>Eerste aanname (onder druk en in beweging)</li>
        <li>Dribbelen en richting veranderen</li>
        <li>Passen en indraaien</li>
        <li>Schieten / afronden</li>
        <li>1-tegen-1 (duelvormen, niet alleen “omheen lopen”)</li>
      </ul>
      <p>
        Bij Janssen Voetbalschool staat dit centraal in de{" "}
        <Link href="/individuele-techniektraining" style={link}>
          individuele techniektraining
        </Link>
        : 60 minuten, kleine groepjes, locatie Velden (gemeente Venlo).
      </p>

      <h2 style={h2}>Waarom kleine groepjes beter werken voor techniek</h2>
      <p>
        Techniek verbetert door kwaliteit van herhalingen, niet alleen door
        volume. In een klein groepje zie ik sneller foutpatronen, geef ik
        direct feedback en bouw ik op naar wedstrijdachtige druk. Clubtraining
        blijft nodig voor teamspel; techniektraining in Venlo vult de gaten
        die in de grote groep blijven liggen.
      </p>

      <h2 style={h2}>Voor wie uit Venlo is dit geschikt?</h2>
      <p>
        Jeugdspelers die willen groeien in balvaardigheid en zelfvertrouwen —
        van speelsters/spelers die net vastlopen tot talenten die extra
        herhaling zoeken. Ook relevant voor ouders uit Blerick, Tegelen en
        Velden. Overzicht van momenten:{" "}
        <Link href="/trainingen" style={link}>
          wanneer trainen
        </Link>
        . Tarieven:{" "}
        <Link href="/pakketten" style={link}>
          pakketten
        </Link>
        .
      </p>

      <h2 style={h2}>Kort antwoord</h2>
      <p>
        Techniektraining voor jeugd in Venlo = gerichte balvaardigheid in kleine
        groepjes, naast de club. Plan een{" "}
        <ContactLink href="/proefles-aanvragen" type="proefles" style={link}>
          proefles
        </ContactLink>{" "}
        of lees{" "}
        <Link href="/voetbaltraining-venlo" style={link}>
          voetbaltraining in Venlo
        </Link>
        .
      </p>
    </BlogPostLayout>
  );
}
