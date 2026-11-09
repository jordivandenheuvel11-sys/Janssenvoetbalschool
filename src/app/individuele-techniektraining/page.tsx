import type { CSSProperties } from "react";
import type { Metadata } from "next";
import Link from "next/link";
import ContactLink from "@/components/contact/ContactLink";
import LocalGuideLayout from "@/components/LocalGuideLayout";
import { relatedExcept } from "@/lib/local-guides";
import { BUSINESS, getFullAddressLine } from "@/lib/business";

export const metadata: Metadata = {
  title: "Individuele techniektraining voetbal | Velden & Venlo",
  description:
    "Individuele techniektraining en privé 1-op-1 voetbaltraining in Velden (gemeente Venlo, Limburg). Focus op jouw aanname, dribbelen, passen en schieten.",
  alternates: { canonical: "/individuele-techniektraining" },
  openGraph: {
    title: "Individuele techniektraining | Janssen Voetbalschool",
    description:
      "Persoonlijke voetbaltechniek in Limburg: aannemen, dribbelen, passen, schieten en 1-tegen-1.",
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
        Voetbalschool — dezelfde aanpak als{" "}
        <Link href="/prive-voetbaltraining" style={link}>
          privé voetbaltraining
        </Link>
        : jij en je{" "}
        <Link href="/individuele-voetbaltrainer-venlo" style={link}>
          individuele voetbaltrainer
        </Link>
        , afgestemd op wat jij nodig hebt.
      </p>
      <h2 style={h2}>Opbouw van een sessie</h2>
      <ol>
        <li>Korte warming-up en balcontact</li>
        <li>Techniekblok met herhaling en correctie</li>
        <li>Toepassing onder druk (tempo / duelvorm)</li>
        <li>Korte evaluatie: wat neem je mee naar de wedstrijd?</li>
      </ol>
      <h2 style={h2}>Locatie in Limburg</h2>
      <p>
        Trainingen op {getFullAddressLine()} — ideaal vanuit Venlo, Velden en
        omgeving. Meer over{" "}
        <Link href="/voetbaltraining-venlo" style={link}>
          training in Venlo
        </Link>{" "}
        en de{" "}
        <Link href="/locatie-sportpark-theo-lommen" style={link}>
          locatie
        </Link>
        .
      </p>
      <h2 style={h2}>Blokken &amp; tarieven</h2>
      <p>
        Je kunt starten met een proefles en daarna kiezen voor een trainingsblok
        of jaarpakket. Details op{" "}
        <Link href="/pakketten" style={link}>
          pakketten
        </Link>{" "}
        en{" "}
        <ContactLink href="/proefles-aanvragen" type="proefles" style={link}>
          proefles aanvragen
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
