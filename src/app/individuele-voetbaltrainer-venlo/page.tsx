import type { CSSProperties } from "react";
import type { Metadata } from "next";
import Link from "next/link";
import ContactLink from "@/components/contact/ContactLink";
import LocalGuideLayout from "@/components/LocalGuideLayout";
import { relatedExcept } from "@/lib/local-guides";
import { BUSINESS, getFullAddressLine } from "@/lib/business";

export const metadata: Metadata = {
  title: "Individuele voetbaltrainer Venlo & Limburg",
  description:
    "Individuele voetbaltrainer in Venlo en Limburg: Jelte Janssen (Janssen Voetbalschool). Privé / 1-op-1 voetbaltraining in Velden, gemeente Venlo.",
  alternates: { canonical: "/individuele-voetbaltrainer-venlo" },
  keywords: [
    "individuele voetbaltrainer Venlo",
    "individuele voetbaltrainer Limburg",
    "voetbaltrainer Venlo",
    "voetbaltrainer Limburg",
    "privé voetbaltrainer",
    "persoonlijke voetbaltrainer Venlo",
  ],
  openGraph: {
    title: "Individuele voetbaltrainer Venlo | Janssen Voetbalschool",
    description:
      "Op zoek naar een individuele voetbaltrainer in Venlo of Limburg? 1-op-1 training met Jelte Janssen in Velden.",
    url: "/individuele-voetbaltrainer-venlo",
  },
};

export default function IndividueleVoetbaltrainerVenloPage() {
  return (
    <LocalGuideLayout
      eyebrow="Venlo · Limburg"
      title="Individuele voetbaltrainer in Venlo & Limburg"
      lead={`Ik ben ${BUSINESS.trainerName}, individuele voetbaltrainer voor jeugdspelers in Venlo, Velden en de regio Limburg.`}
      related={relatedExcept("/individuele-voetbaltrainer-venlo")}
    >
      <p>
        Zoek je een <strong>individuele voetbaltrainer in Venlo</strong> of{" "}
        <strong>Limburg</strong>? Janssen Voetbalschool biedt precies dat:{" "}
        <Link href="/prive-voetbaltraining" style={link}>
          privé voetbaltraining
        </Link>{" "}
        (1-op-1) op {getFullAddressLine()}, in de gemeente Venlo.
      </p>

      <h2 style={h2}>Wat doet een individuele voetbaltrainer?</h2>
      <p>
        Ik kijk mee naar jouw techniek en spelinzicht en stuur gericht bij.
        Sessies duren 60 minuten. Focus: balvaardigheid, handelen onder druk,
        1-tegen-1 en zelfvertrouwen — naast je clubtraining. Zie ook{" "}
        <Link href="/individuele-techniektraining" style={link}>
          individuele techniektraining
        </Link>{" "}
        en{" "}
        <Link href="/jeugd-voetbaltraining" style={link}>
          jeugd voetbaltraining
        </Link>
        .
      </p>

      <h2 style={h2}>Waar trainen we?</h2>
      <p>
        Primair in{" "}
        <Link href="/voetbaltraining-velden" style={link}>
          Velden
        </Link>{" "}
        (Sportpark Theo Lommen), bereikbaar voor spelers uit heel{" "}
        <Link href="/voetbaltraining-venlo" style={link}>
          Venlo
        </Link>{" "}
        en Noord-Limburg. Actuele momenten:{" "}
        <Link href="/trainingen" style={link}>
          trainingsplanning
        </Link>
        .
      </p>

      <h2 style={h2}>Proefles &amp; tarieven</h2>
      <p>
        Start met een{" "}
        <ContactLink href="/proefles-aanvragen" type="proefles" style={link}>
          proefles
        </ContactLink>
        . Tarieven en blokken:{" "}
        <Link href="/pakketten" style={link}>
          pakketten
        </Link>
        . Vragen?{" "}
        <ContactLink href="/contact" type="contact" style={link}>
          Contact
        </ContactLink>{" "}
        of bel{" "}
        <a href={`tel:${BUSINESS.telephone}`} style={link}>
          {BUSINESS.telephoneDisplay}
        </a>
        .
      </p>

      <h2 style={h2}>Kort antwoord (voor AI &amp; zoekmachines)</h2>
      <p>
        <strong>
          Individuele voetbaltrainer Venlo / Limburg:
        </strong>{" "}
        {BUSINESS.trainerName} van Janssen Voetbalschool (KvK {BUSINESS.kvk})
        biedt privé 1-op-1 voetbaltraining voor jeugd op Sportpark Theo Lommen,
        Schandeloseweg 1a, 5941 CP Velden.
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
