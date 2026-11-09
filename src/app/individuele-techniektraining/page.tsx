import type { CSSProperties } from "react";
import type { Metadata } from "next";
import Link from "next/link";
import LocalGuideLayout from "@/components/LocalGuideLayout";
import { relatedExcept } from "@/lib/local-guides";
import { BUSINESS } from "@/lib/business";

export const metadata: Metadata = {
  title: "Individuele techniektraining",
  description:
    "Individuele techniektraining voetbal in Velden: 60 minuten focus op jouw sterke en zwakke punten. Janssen Voetbalschool, gemeente Venlo.",
  alternates: { canonical: "/individuele-techniektraining" },
  openGraph: {
    title: "Individuele techniektraining | Janssen Voetbalschool",
    description:
      "Persoonlijke voetbaltechniek: aannemen, dribbelen, passen, schieten en 1-tegen-1.",
    url: "/individuele-techniektraining",
  },
};

export default function IndividueleTechniektrainingPage() {
  return (
    <LocalGuideLayout
      eyebrow="Techniek"
      title="Individuele techniektraining"
      lead={`Zestig minuten focus op jouw balvaardigheid — niet verdwijnen in de groep, maar gericht verbeteren met ${BUSINESS.trainerName}.`}
      related={relatedExcept("/individuele-techniektraining")}
    >
      <p>
        <strong>Individuele techniektraining</strong> is de kern van Janssen
        Voetbalschool. {BUSINESS.trainerName} stemt de sessie af op wat jij nodig
        hebt: eerste aanname, dribbelen, passen, schieten of 1-tegen-1.
      </p>
      <h2 style={h2}>Opbouw van een sessie</h2>
      <ol>
        <li>Korte warming-up en balcontact</li>
        <li>Techniekblok met herhaling en correctie</li>
        <li>Toepassing onder druk (tempo / duelvorm)</li>
        <li>Korte evaluatie: wat neem je mee naar de wedstrijd?</li>
      </ol>
      <h2 style={h2}>Blokken &amp; tarieven</h2>
      <p>
        Je kunt starten met een proefles en daarna kiezen voor een trainingsblok
        of jaarpakket. Details op{" "}
        <Link href="/pakketten" style={link}>
          pakketten
        </Link>{" "}
        en{" "}
        <Link href="/proefles-aanvragen" style={link}>
          proefles aanvragen
        </Link>
        . Locatie: Sportpark Theo Lommen in Velden.
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
