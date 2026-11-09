import React from "react";
import Link from "next/link";
import { BUSINESS, getFullAddressLine } from "@/lib/business";

/**
 * Fact-rich homepage section for SEO/E-E-A-T (single purpose: what the school offers).
 * Server component so text is fully crawlable without JS.
 */
export default function HomeOfferSection() {
  return (
    <section
      id="aanbod"
      aria-labelledby="aanbod-heading"
      style={{
        backgroundColor: "#f7f7f5",
        padding: "100px 24px",
        position: "relative",
        zIndex: 20,
      }}
    >
      <div style={{ maxWidth: "800px", margin: "0 auto" }}>
        <span
          style={{
            fontSize: "13px",
            fontWeight: 900,
            color: "#D90429",
            letterSpacing: "0.2em",
            textTransform: "uppercase",
            display: "block",
            marginBottom: "16px",
          }}
        >
          Individuele voetbaltraining
        </span>
        <h2
          id="aanbod-heading"
          style={{
            fontSize: "clamp(2rem, 4vw, 3rem)",
            fontWeight: 900,
            letterSpacing: "-0.04em",
            lineHeight: 1.1,
            marginBottom: "28px",
            color: "#0f0f0f",
          }}
        >
          Voor wie is Janssen Voetbalschool?
        </h2>
        <p
          style={{
            fontSize: "18px",
            lineHeight: 1.75,
            color: "#4a4a4a",
            fontWeight: 500,
            marginBottom: "28px",
          }}
        >
          Janssen Voetbalschool van {BUSINESS.trainerName} biedt individuele
          techniektraining voor jeugdspelers in {BUSINESS.addressLocality},
          gemeente Venlo. Trainingen vinden plaats op {getFullAddressLine()}.
          Het programma past bij spelers die naast clubtraining extra willen
          werken aan balvaardigheid, sneller handelen en meer zelfvertrouwen in
          de wedstrijd.
        </p>

        <h3
          style={{
            fontSize: "1.35rem",
            fontWeight: 800,
            letterSpacing: "-0.02em",
            margin: "0 0 14px",
            color: "#0f0f0f",
          }}
        >
          Wat gebeurt er in een training?
        </h3>
        <ul
          style={{
            margin: "0 0 28px",
            paddingLeft: "1.2em",
            color: "#4a4a4a",
            fontSize: "17px",
            lineHeight: 1.7,
            fontWeight: 500,
          }}
        >
          <li>Persoonlijke aandacht: focus op jouw sterke en zwakke punten</li>
          <li>Techniek: aannemen, dribbelen, passen, schieten en 1-tegen-1</li>
          <li>Spelinzicht: keuzes maken onder druk, tempo en positionering</li>
          <li>Sessies van 60 minuten in vaste trainingsblokken</li>
        </ul>

        <h3
          style={{
            fontSize: "1.35rem",
            fontWeight: 800,
            letterSpacing: "-0.02em",
            margin: "0 0 14px",
            color: "#0f0f0f",
          }}
        >
          Trainingsmomenten in Velden
        </h3>
        <p
          style={{
            fontSize: "17px",
            lineHeight: 1.7,
            color: "#4a4a4a",
            fontWeight: 500,
            marginBottom: "12px",
          }}
        >
          Techniektrainingen worden gepland op doordeweekse middagen/avonden op
          Sportpark Theo Lommen, met groepen rond 15:30–16:30, 16:45–17:45 en
          18:00–19:00. Actuele data staan op de{" "}
          <Link href="/trainingen" style={{ color: "#D90429", fontWeight: 700 }}>
            trainingsplanning
          </Link>
          . Voor de allerjongsten is er ook de{" "}
          <Link
            href="/mini-voetbalschool"
            style={{ color: "#D90429", fontWeight: 700 }}
          >
            Mini Voetbalschool
          </Link>{" "}
          (3 t/m 5 jaar, ouder &amp; kind).
        </p>

        <h3
          style={{
            fontSize: "1.35rem",
            fontWeight: 800,
            letterSpacing: "-0.02em",
            margin: "28px 0 14px",
            color: "#0f0f0f",
          }}
        >
          Hoe start je met een proefles?
        </h3>
        <p
          style={{
            fontSize: "17px",
            lineHeight: 1.7,
            color: "#4a4a4a",
            fontWeight: 500,
            marginBottom: "28px",
          }}
        >
          Via{" "}
          <Link
            href="/proefles-aanvragen"
            style={{ color: "#D90429", fontWeight: 700 }}
          >
            proefles aanvragen
          </Link>{" "}
          laat je naam, contactgegevens en wensen achter. Daarna plannen we
          samen een moment. Overzicht van blokken en tarieven vind je bij{" "}
          <Link href="/pakketten" style={{ color: "#D90429", fontWeight: 700 }}>
            pakketten
          </Link>
          .
        </p>

        <p
          style={{
            fontSize: "15px",
            lineHeight: 1.65,
            color: "#6b6b6b",
            fontWeight: 500,
            margin: 0,
          }}
        >
          Locatie: {getFullAddressLine()} · Tel.{" "}
          <a href={`tel:${BUSINESS.telephone}`} style={{ color: "inherit" }}>
            {BUSINESS.telephoneDisplay}
          </a>{" "}
          · KvK {BUSINESS.kvk}
        </p>
      </div>
    </section>
  );
}
