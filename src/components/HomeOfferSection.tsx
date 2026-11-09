import React from "react";
import Link from "next/link";
import Image from "next/image";
import { BUSINESS, getFullAddressLine } from "@/lib/business";

const linkStyle: React.CSSProperties = { color: "#D90429", fontWeight: 700 };

const audiences = [
  {
    title: "Jeugdspelers naast de club",
    image: "/gallery/g2.jpg",
    imageAlt: "Jeugdspeler tijdens individuele voetbaltraining in Velden",
    aspectRatio: "5 / 4",
    body: (
      <>
        Voor spelers uit {BUSINESS.addressLocality} en gemeente Venlo die naast
        clubtraining extra willen werken aan balvaardigheid, sneller handelen en
        meer zelfvertrouwen in de wedstrijd. Persoonlijke aandacht van{" "}
        {BUSINESS.trainerName} — geen grote groep.
      </>
    ),
  },
  {
    title: "Techniek, 1-tegen-1 en spelinzicht",
    image: "/gallery/g5.jpg",
    imageAlt: "Techniektraining: dribbelen en aannemen op Sportpark Theo Lommen",
    aspectRatio: "1 / 1",
    body: (
      <>
        Sessies van 60 minuten met focus op aannemen, dribbelen, passen,
        schieten en keuzes onder druk. In vaste trainingsblokken op{" "}
        {getFullAddressLine()}. Zie de{" "}
        <Link href="/trainingen" style={linkStyle}>
          trainingsplanning
        </Link>{" "}
        voor actuele momenten (o.a. 15:30–16:30, 16:45–17:45, 18:00–19:00).
      </>
    ),
  },
  {
    title: "Mini Voetbalschool (3 t/m 5 jaar)",
    image: "/gallery/g4.jpg",
    imageAlt: "Jonge kinderen met de bal bij Mini Voetbalschool Janssen",
    aspectRatio: "4 / 5",
    body: (
      <>
        Voor de allerjongsten is er de{" "}
        <Link href="/mini-voetbalschool" style={linkStyle}>
          Mini Voetbalschool
        </Link>
        : ouder &amp; kind, spelenderwijs wennen aan de bal in een veilige
        sfeer.
      </>
    ),
  },
];

/**
 * “Voor wie”-sectie: crawlable copy + visuals (geen lap tekst).
 */
export default function HomeOfferSection() {
  return (
    <section
      id="aanbod"
      aria-labelledby="aanbod-heading"
      style={{
        backgroundColor: "#ffffff",
        padding: "100px 24px",
        position: "relative",
        zIndex: 20,
      }}
    >
      <div style={{ maxWidth: "1000px", margin: "0 auto 56px" }}>
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
            fontSize: "clamp(2.2rem, 4.5vw, 3.4rem)",
            fontWeight: 900,
            letterSpacing: "-0.04em",
            lineHeight: 1.08,
            margin: "0 0 20px",
            color: "#0f0f0f",
            maxWidth: "18ch",
          }}
        >
          Voor wie is Janssen Voetbalschool?
        </h2>
        <p
          style={{
            fontSize: "18px",
            lineHeight: 1.7,
            color: "#4a4a4a",
            fontWeight: 500,
            margin: 0,
            maxWidth: "40rem",
          }}
        >
          Individuele techniektraining in Velden voor jeugdspelers die groeien
          willen — en voor de allerjongsten via Mini.
        </p>
      </div>

      <div
        style={{
          maxWidth: "1000px",
          margin: "0 auto",
          display: "flex",
          flexDirection: "column",
          gap: "64px",
        }}
      >
        {audiences.map((item, index) => {
          const imageLeft = index % 2 === 0;
          return (
            <div
              key={item.title}
              style={{
                display: "flex",
                flexWrap: "wrap",
                alignItems: "center",
                gap: "40px",
                flexDirection: imageLeft ? "row" : "row-reverse",
              }}
            >
              <div
                style={{
                  flex: "1 1 280px",
                  minWidth: "240px",
                  maxWidth:
                    item.aspectRatio === "1 / 1"
                      ? "400px"
                      : item.aspectRatio === "4 / 5"
                        ? "380px"
                        : "520px",
                  width: "100%",
                  position: "relative",
                  aspectRatio: item.aspectRatio,
                  overflow: "hidden",
                }}
              >
                <Image
                  src={item.image}
                  alt={item.imageAlt}
                  fill
                  sizes="(max-width: 768px) 100vw, 480px"
                  quality={90}
                  style={{ objectFit: "cover" }}
                />
              </div>
              <div style={{ flex: "1 1 320px", minWidth: "280px" }}>
                <h3
                  style={{
                    fontSize: "clamp(1.5rem, 3vw, 2rem)",
                    fontWeight: 900,
                    letterSpacing: "-0.03em",
                    lineHeight: 1.15,
                    margin: "0 0 16px",
                    color: "#0f0f0f",
                  }}
                >
                  {item.title}
                </h3>
                <p
                  style={{
                    fontSize: "17px",
                    lineHeight: 1.75,
                    color: "#3a3a3a",
                    fontWeight: 500,
                    margin: 0,
                  }}
                >
                  {item.body}
                </p>
              </div>
            </div>
          );
        })}
      </div>

      {/* Start + links — compact, geen tekstmuur */}
      <div
        style={{
          maxWidth: "1000px",
          margin: "72px auto 0",
          display: "flex",
          flexWrap: "wrap",
          gap: "40px",
          alignItems: "stretch",
        }}
      >
        <div
          style={{
            flex: "1 1 320px",
            minWidth: "280px",
            position: "relative",
            aspectRatio: "16 / 10",
            overflow: "hidden",
          }}
        >
          <Image
            src="/gallery/g1.jpg"
            alt="Proefles voetbaltraining bij Janssen Voetbalschool"
            fill
            sizes="(max-width: 768px) 100vw, 480px"
            quality={90}
            style={{ objectFit: "cover" }}
          />
        </div>
        <div
          style={{
            flex: "1 1 320px",
            minWidth: "280px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <h3
            style={{
              fontSize: "clamp(1.5rem, 3vw, 2rem)",
              fontWeight: 900,
              letterSpacing: "-0.03em",
              lineHeight: 1.15,
              margin: "0 0 16px",
              color: "#0f0f0f",
            }}
          >
            Start met een proefles
          </h3>
          <p
            style={{
              fontSize: "17px",
              lineHeight: 1.75,
              color: "#3a3a3a",
              fontWeight: 500,
              margin: "0 0 24px",
            }}
          >
            Via{" "}
            <Link href="/proefles-aanvragen" style={linkStyle}>
              proefles aanvragen
            </Link>{" "}
            plan je een moment. Tarieven staan bij{" "}
            <Link href="/pakketten" style={linkStyle}>
              pakketten
            </Link>
            .
          </p>
          <p
            style={{
              fontSize: "15px",
              lineHeight: 1.7,
              color: "#4a4a4a",
              fontWeight: 500,
              margin: "0 0 16px",
            }}
          >
            <Link href="/voetbaltraining-velden" style={linkStyle}>
              Velden
            </Link>
            {" · "}
            <Link href="/voetbaltraining-venlo" style={linkStyle}>
              Venlo
            </Link>
            {" · "}
            <Link href="/jeugd-voetbaltraining" style={linkStyle}>
              Jeugd
            </Link>
            {" · "}
            <Link href="/locatie-sportpark-theo-lommen" style={linkStyle}>
              Locatie
            </Link>
          </p>
          <p
            style={{
              fontSize: "14px",
              lineHeight: 1.6,
              color: "#6b6b6b",
              fontWeight: 500,
              margin: 0,
            }}
          >
            {getFullAddressLine()} ·{" "}
            <a href={`tel:${BUSINESS.telephone}`} style={{ color: "inherit" }}>
              {BUSINESS.telephoneDisplay}
            </a>{" "}
            · KvK {BUSINESS.kvk}
          </p>
        </div>
      </div>
    </section>
  );
}
