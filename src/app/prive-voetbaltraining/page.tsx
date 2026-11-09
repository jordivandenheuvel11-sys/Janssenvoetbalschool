import type { CSSProperties } from "react";
import type { Metadata } from "next";
import Link from "next/link";
import ContactLink from "@/components/contact/ContactLink";
import LocalGuideLayout from "@/components/LocalGuideLayout";
import { relatedExcept } from "@/lib/local-guides";
import { BUSINESS, getFullAddressLine } from "@/lib/business";

export const metadata: Metadata = {
  title: "Privé voetbaltraining in Velden & Venlo | Limburg",
  description:
    "Privé voetbaltraining in kleine groepjes in Velden (gemeente Venlo, Limburg). Individuele voetbaltrainer Jelte Janssen — 60 minuten met persoonlijke aandacht.",
  alternates: { canonical: "/prive-voetbaltraining" },
  keywords: [
    "privé voetbaltraining",
    "prive voetbaltraining",
    "voetbaltraining kleine groepjes",
    "persoonlijke voetbaltraining",
    "individuele voetbaltraining Limburg",
    "voetbaltrainer Venlo",
  ],
  openGraph: {
    title: "Privé voetbaltraining | Janssen Voetbalschool",
    description:
      "Voetbaltraining in kleine groepjes in Velden & Venlo (Limburg). Persoonlijke techniek, spelinzicht en zelfvertrouwen.",
    url: "/prive-voetbaltraining",
  },
};

export default function PriveVoetbaltrainingPage() {
  return (
    <LocalGuideLayout
      eyebrow="Kleine groepjes"
      title="Privé voetbaltraining in Velden & Venlo"
      lead="Zoek je privé voetbaltraining in Limburg? Ik train jeugdspelers in kleine groepjes — gericht, met persoonlijke aandacht, zonder grote clubgroep."
      related={relatedExcept("/prive-voetbaltraining")}
    >
      <p>
        <strong>Privé voetbaltraining</strong> bij Janssen Voetbalschool betekent:
        training in kleine groepjes, met duidelijke doelen per sessie. Geen
        verdwijnen in de massa — wel gerichte feedback op aanname, dribbelen,
        passen, schieten en 1-tegen-1.
      </p>

      <h2 style={h2}>Voor wie is privé voetbaltraining?</h2>
      <p>
        Voor jeugdspelers uit{" "}
        <Link href="/voetbaltraining-velden" style={link}>
          Velden
        </Link>
        ,{" "}
        <Link href="/voetbaltraining-venlo" style={link}>
          Venlo
        </Link>{" "}
        en de rest van Limburg die naast clubtraining extra willen groeien.
        Ook ouders die een{" "}
        <Link href="/individuele-voetbaltrainer-venlo" style={link}>
          individuele voetbaltrainer in Venlo
        </Link>{" "}
        zoeken, komen hier aan het juiste adres.
      </p>

      <h2 style={h2}>Wat is het verschil met clubtraining?</h2>
      <ul>
        <li>Club: grote groep, wedstrijdgericht, minder tijd per speler</li>
        <li>
          Bij mij: kleine groepjes, 60 minuten met persoonlijke aandacht voor
          jouw zwakke en sterke punten
        </li>
        <li>
          Locatie: {getFullAddressLine()} — zie{" "}
          <Link href="/locatie-sportpark-theo-lommen" style={link}>
            locatie
          </Link>
        </li>
      </ul>

      <h2 style={h2}>Hoe start je?</h2>
      <p>
        Vraag een{" "}
        <ContactLink href="/proefles-aanvragen" type="proefles" style={link}>
          proefles
        </ContactLink>{" "}
        aan. Daarna kies je een blok of jaarpakket via{" "}
        <Link href="/pakketten" style={link}>
          pakketten
        </Link>
        . Meer over de inhoud:{" "}
        <Link href="/individuele-techniektraining" style={link}>
          individuele techniektraining
        </Link>
        .
      </p>

      <p>
        Trainer: {BUSINESS.trainerName} · Janssen Voetbalschool · KvK{" "}
        {BUSINESS.kvk} · Tel.{" "}
        <a href={`tel:${BUSINESS.telephone}`} style={link}>
          {BUSINESS.telephoneDisplay}
        </a>
      </p>
    </LocalGuideLayout>
  );
}

const h2: CSSProperties = {
  fontSize: "1.35rem",
  fontWeight: 800,
  letterSpacing: "-0.02em",
  margin: "36px 0 12px",
  color: "#0f0f0f",
};

const link: CSSProperties = { color: "#D90429", fontWeight: 700 };
