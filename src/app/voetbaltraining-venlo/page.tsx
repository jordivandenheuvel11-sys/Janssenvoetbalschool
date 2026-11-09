import type { CSSProperties } from "react";
import type { Metadata } from "next";
import Link from "next/link";
import ContactLink from "@/components/contact/ContactLink";
import LocalGuideLayout from "@/components/LocalGuideLayout";
import { relatedExcept } from "@/lib/local-guides";
import { BUSINESS, getFullAddressLine } from "@/lib/business";

export const metadata: Metadata = {
  title: "Voetbaltraining in Venlo",
  description:
    "Individuele voetbaltraining voor jeugdspelers uit Venlo bij Janssen Voetbalschool. Techniektraining op Sportpark Theo Lommen in Velden, gemeente Venlo.",
  alternates: { canonical: "/voetbaltraining-venlo" },
  openGraph: {
    title: "Voetbaltraining in Venlo | Janssen Voetbalschool",
    description:
      "Persoonlijke techniektraining voor jeugd uit gemeente Venlo — locatie Velden.",
    url: "/voetbaltraining-venlo",
  },
};

export default function VoetbaltrainingVenloPage() {
  return (
    <LocalGuideLayout
      eyebrow="Gemeente Venlo"
      title="Voetbaltraining in Venlo"
      lead="Jeugdspelers uit Venlo en omgeving trainen bij Janssen Voetbalschool met individuele aandacht voor techniek en spelinzicht."
      related={relatedExcept("/voetbaltraining-venlo")}
    >
      <p>
        Voor <strong>voetbaltraining in Venlo</strong> en de hele gemeente biedt
        Janssen Voetbalschool persoonlijke sessies onder leiding van{" "}
        {BUSINESS.trainerName}. De vaste locatie is {getFullAddressLine()} —
        goed bereikbaar vanuit Venlo-stad, Blerick, Tegelen en Velden.
      </p>
      <h2 style={h2}>Waarom naast de club?</h2>
      <p>
        Clubtraining is groepsgewijs. Extra training in kleine groepjes helpt om
        zwakke punten gericht aan te pakken: eerste aanname, dribbelen onder
        druk, schieten en betere keuzes in de wedstrijd. Overzicht van blokken
        en tarieven:{" "}
        <Link href="/pakketten" style={link}>
          pakketten
        </Link>
        .
      </p>
      <h2 style={h2}>Aanmelden vanuit Venlo</h2>
      <p>
        Plan via{" "}
        <ContactLink href="/proefles-aanvragen" type="proefles" style={link}>
          proefles aanvragen
        </ContactLink>{" "}
        of bekijk wanneer er plek is op de{" "}
        <Link href="/trainingen" style={link}>
          trainingsdagen
        </Link>
        . Omroep Venlo schreef eerder over de oprichting van de voetbalschool —
        diezelfde focus op jeugd in de regio staat nog centraal.
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
