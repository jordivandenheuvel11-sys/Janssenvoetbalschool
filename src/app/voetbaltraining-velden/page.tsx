import type { CSSProperties } from "react";
import type { Metadata } from "next";
import Link from "next/link";
import ContactLink from "@/components/contact/ContactLink";
import LocalGuideLayout from "@/components/LocalGuideLayout";
import { relatedExcept } from "@/lib/local-guides";
import { BUSINESS, getFullAddressLine } from "@/lib/business";

export const metadata: Metadata = {
  title: "Voetbaltraining in Velden",
  description:
    "Individuele voetbaltraining in Velden bij Janssen Voetbalschool. Techniektraining voor jeugdspelers op Sportpark Theo Lommen, Schandeloseweg 1a.",
  alternates: { canonical: "/voetbaltraining-velden" },
  openGraph: {
    title: "Voetbaltraining in Velden | Janssen Voetbalschool",
    description:
      "Persoonlijke techniektraining voor jeugdspelers in Velden, gemeente Venlo.",
    url: "/voetbaltraining-velden",
  },
};

export default function VoetbaltrainingVeldenPage() {
  return (
    <LocalGuideLayout
      eyebrow="Velden · Limburg"
      title="Voetbaltraining in Velden"
      lead="Individuele techniektraining voor jeugdspelers op Sportpark Theo Lommen — dichtbij, persoonlijk en gericht op resultaat."
      related={relatedExcept("/voetbaltraining-velden")}
    >
      <p>
        Zoek je <strong>voetbaltraining in Velden</strong> naast de clubtraining?
        Janssen Voetbalschool van {BUSINESS.trainerName} werkt met jeugdspelers die
        hun balvaardigheid, sneller handelen en zelfvertrouwen willen versterken.
        Trainingen vinden plaats op {getFullAddressLine()}. Kom je van verder
        in de provincie? Bekijk ook{" "}
        <Link href="/voetbaltraining-limburg" style={link}>
          extra voetbaltraining in Limburg
        </Link>
        .
      </p>
      <h2 style={h2}>Voor wie in Velden?</h2>
      <p>
        Het programma past bij spelers uit Velden en omliggende kernen die extra
        herhaling willen op techniek en 1-tegen-1. Sessies duren 60 minuten in
        vaste blokken op doordeweekse middagen/avonden. Actuele data staan op de{" "}
        <Link href="/trainingen" style={link}>
          trainingsplanning
        </Link>
        .
      </p>
      <h2 style={h2}>Wat je traint</h2>
      <ul>
        <li>Aannemen, dribbelen, passen en schieten</li>
        <li>Keuzes maken onder druk</li>
        <li>Persoonlijke feedback per speler</li>
      </ul>
      <p>
        Voor de allerjongsten (3 t/m 5 jaar) is er de{" "}
        <Link href="/mini-voetbalschool" style={link}>
          Mini Voetbalschool
        </Link>
        . Wil je eerst kennismaken? Vraag een{" "}
        <ContactLink href="/proefles-aanvragen" type="proefles" style={link}>
          proefles
        </ContactLink>{" "}
        aan.
      </p>
    </LocalGuideLayout>
  );
}

const h2: CSSProperties = {
  fontSize: "1.35rem",
  fontWeight: 700,
  letterSpacing: "0.01em",
  margin: "36px 0 12px",
  color: "#0f0f0f",
};

const link: CSSProperties = { color: "#D90429", fontWeight: 700 };
