import type { CSSProperties } from "react";
import type { Metadata } from "next";
import Link from "next/link";
import ContactLink from "@/components/contact/ContactLink";
import LocalGuideLayout from "@/components/LocalGuideLayout";
import { relatedExcept } from "@/lib/local-guides";
import { BUSINESS, getFullAddressLine, getMapsUrl } from "@/lib/business";

export const metadata: Metadata = {
  title: "Locatie Sportpark Theo Lommen",
  description:
    "Trainingslocatie Janssen Voetbalschool: Sportpark Theo Lommen, Schandeloseweg 1a, 5941 CP Velden. Route, NAP en contact.",
  alternates: { canonical: "/locatie-sportpark-theo-lommen" },
  openGraph: {
    title: "Locatie Sportpark Theo Lommen | Janssen Voetbalschool",
    description:
      "Schandeloseweg 1a, 5941 CP Velden — trainingslocatie in gemeente Venlo.",
    url: "/locatie-sportpark-theo-lommen",
  },
};

export default function LocatiePage() {
  return (
    <LocalGuideLayout
      eyebrow="Locatie"
      title="Sportpark Theo Lommen, Velden"
      lead="Hier traint Janssen Voetbalschool: kunstgras, bereikbaar vanuit heel gemeente Venlo. Zelfde adres overal — handig voor route én lokale vermeldingen."
      related={relatedExcept("/locatie-sportpark-theo-lommen")}
    >
      <p>
        Alle techniektrainingen van Janssen Voetbalschool vinden plaats op{" "}
        <strong>{getFullAddressLine()}</strong>. Dit is ons vaste NAP-adres
        (naam, adres, telefoon) voor website, Google Maps en andere lokale
        vermeldingen.
      </p>
      <h2 style={h2}>Adresgegevens (NAP)</h2>
      <ul>
        <li>
          <strong>Naam:</strong> {BUSINESS.name}
        </li>
        <li>
          <strong>Adres:</strong> {BUSINESS.streetAddress}, {BUSINESS.postalCode}{" "}
          {BUSINESS.addressLocality}
        </li>
        <li>
          <strong>Telefoon:</strong>{" "}
          <a href={`tel:${BUSINESS.telephone}`} style={link}>
            {BUSINESS.telephoneDisplay}
          </a>
        </li>
        <li>
          <strong>E-mail:</strong>{" "}
          <a href={`mailto:${BUSINESS.email}`} style={link}>
            {BUSINESS.email}
          </a>
        </li>
        <li>
          <strong>KvK:</strong> {BUSINESS.kvk}
        </li>
      </ul>
      <p>
        <a href={getMapsUrl()} target="_blank" rel="noopener noreferrer" style={link}>
          Open in Google Maps
        </a>
      </p>
      <h2 style={h2}>Trainingsmomenten</h2>
      <p>
        Doordeweekse blokken rond 15:30–16:30, 16:45–17:45 en 18:00–19:00. Zie{" "}
        <Link href="/trainingen" style={link}>
          wanneer trainen
        </Link>{" "}
        voor actuele data. Twijfel je of de locatie past? Plan een{" "}
        <ContactLink href="/proefles-aanvragen" type="proefles" style={link}>
          proefles
        </ContactLink>
        .
      </p>
      <h2 style={h2}>Citations / vermeldingen</h2>
      <p>
        Gebruik overal exact dit adres en telefoonnummer (Apple Business Connect,
        Bing Places, Facebook, lokale gidsen). Zo blijft Janssen Voetbalschool
        herkenbaar als één lokale entiteit in Velden, gemeente Venlo.
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
