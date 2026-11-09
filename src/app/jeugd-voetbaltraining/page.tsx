import type { CSSProperties } from "react";
import type { Metadata } from "next";
import Link from "next/link";
import ContactLink from "@/components/contact/ContactLink";
import LocalGuideLayout from "@/components/LocalGuideLayout";
import { relatedExcept } from "@/lib/local-guides";
import { BUSINESS } from "@/lib/business";

export const metadata: Metadata = {
  title: "Jeugd voetbaltraining",
  description:
    "Jeugd voetbaltraining bij Janssen Voetbalschool: individuele techniek, zelfvertrouwen en plezier. Voor jeugdspelers in Velden en gemeente Venlo.",
  alternates: { canonical: "/jeugd-voetbaltraining" },
  openGraph: {
    title: "Jeugd voetbaltraining | Janssen Voetbalschool",
    description:
      "Persoonlijke jeugdtraining gericht op techniek, keuzes en zelfvertrouwen.",
    url: "/jeugd-voetbaltraining",
  },
};

export default function JeugdVoetbaltrainingPage() {
  return (
    <LocalGuideLayout
      eyebrow="Jeugd"
      title="Jeugd voetbaltraining met persoonlijke aandacht"
      lead="Techniek, karakter en plezier — zo bouwt Janssen Voetbalschool aan jeugdspelers die met overtuiging het veld op gaan."
      related={relatedExcept("/jeugd-voetbaltraining")}
    >
      <p>
        <strong>Jeugd voetbaltraining</strong> bij Janssen Voetbalschool is geen
        grote groepstraining, maar gerichte sessies waarin {BUSINESS.trainerName}{" "}
        meekijkt naar jouw ontwikkeling. Dat is waardevol in de leeftijden waarin
        balgevoel en zelfvertrouwen het hardst groeien.
      </p>
      <h2 style={h2}>Leeftijden &amp; programma’s</h2>
      <ul>
        <li>
          <strong>Techniektraining</strong> — voor jeugdspelers die al bij een club
          spelen en extra willen bijleren (
          <Link href="/pakketten" style={link}>
            pakketten
          </Link>
          )
        </li>
        <li>
          <strong>Mini Voetbalschool</strong> — 3 t/m 5 jaar, ouder &amp; kind (
          <Link href="/mini-voetbalschool" style={link}>
            meer info
          </Link>
          )
        </li>
      </ul>
      <h2 style={h2}>Wat ouders vaak zoeken</h2>
      <p>
        Meer speelvreugde, betere basisvaardigheden en duidelijke feedback.
        Trainingen in Velden (gemeente Venlo) combineren intensiteit met een
        veilige, vertrouwde sfeer. Start met een{" "}
        <ContactLink href="/proefles-aanvragen" type="proefles" style={link}>
          proefles
        </ContactLink>
        .
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
