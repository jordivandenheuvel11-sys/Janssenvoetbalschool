import type { Metadata } from "next";
import Link from "next/link";
import ContactLink from "@/components/contact/ContactLink";
import BlogPostLayout, { h2, link } from "@/components/BlogPostLayout";
import { getBlogPost } from "@/lib/blog";

const post = getBlogPost("extra-voetbaltraining-venlo-naast-club")!;

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

export default function ExtraVoetbaltrainingVenloPage() {
  return (
    <BlogPostLayout post={post}>
      <p>
        Clubtraining in Venlo blijft essentieel: team, wedstrijden, samen spelen.
        Extra voetbaltraining in Venlo naast je club voegt iets toe wanneer die
        sessie kleiner, gerichter en persoonlijker is — precies wat veel
        jeugdspelers missen in een volle clubgroep.
      </p>

      <h2 style={h2}>Waarom extra trainen naast de club in Venlo?</h2>
      <p>
        In de club is er vaak weinig tijd per speler voor correctie. Extra
        training helpt bij: eerste aanname, dribbelen onder druk, schieten,
        1-tegen-1 en zelfvertrouwen in de wedstrijd. Dat geldt voor spelers uit
        Venlo-stad, Blerick, Tegelen en Velden — en voor ouders die merken dat
        hun kind “vastloopt” in de grote groep.
      </p>

      <h2 style={h2}>Wat werkt het best? (kort antwoord)</h2>
      <p>
        Het beste naast de club is meestal{" "}
        <strong>training in kleine groepjes</strong> (niet nog een grote
        massales), 60 minuten, met een vaste trainer en duidelijke doelen per
        blok. Zo blijft de club de basis, en wordt de extra sessie een versneller
        voor techniek. Bij Janssen Voetbalschool train je precies zo — op
        Sportpark Theo Lommen in Velden, gemeente Venlo. Meer info:{" "}
        <Link href="/voetbaltraining-venlo" style={link}>
          voetbaltraining in Venlo
        </Link>{" "}
        en{" "}
        <Link href="/prive-voetbaltraining" style={link}>
          training in kleine groepjes
        </Link>
        .
      </p>

      <h2 style={h2}>Waar let je op bij het kiezen?</h2>
      <ul>
        <li>Groepsgrootte: genoeg herhaling en feedback per speler</li>
        <li>Aansluiting op club: geen tegengestelde “systemen”, wel aanvulling</li>
        <li>Locatie in/bij Venlo: vaste plek, bereikbaar doordeweeks</li>
        <li>Proefles: eerst ervaren voordat je een pakket kiest</li>
      </ul>

      <h2 style={h2}>Hoe start je in Venlo?</h2>
      <p>
        Bekijk de{" "}
        <Link href="/trainingen" style={link}>
          trainingsplanning
        </Link>
        , de{" "}
        <Link href="/pakketten" style={link}>
          pakketten
        </Link>
        , of vraag direct een{" "}
        <ContactLink href="/proefles-aanvragen" type="proefles" style={link}>
          proefles
        </ContactLink>{" "}
        aan. Trainer Jelte Janssen legt op de{" "}
        <Link href="/over-ons" style={link}>
          Over ons
        </Link>
        -pagina uit wie er achter Janssen Voetbalschool zit.
      </p>
    </BlogPostLayout>
  );
}
