import React from "react";
import Link from "next/link";
import Image from "next/image";
import ContactLink from "@/components/contact/ContactLink";
import { BUSINESS, getFullAddressLine } from "@/lib/business";

const linkStyle: React.CSSProperties = { color: "#D90429", fontWeight: 700 };

const audiences = [
  {
    title: "Jeugdspelers naast de club",
    image: "/gallery/g1.jpg",
    imageAlt:
      "Trainer met jeugdspelers in een huddle tijdens training in Velden",
    body: (
      <>
        Ik train spelers uit {BUSINESS.addressLocality} en gemeente Venlo die
        naast clubtraining extra willen werken aan balvaardigheid, sneller
        handelen en meer zelfvertrouwen in de wedstrijd. Persoonlijke aandacht —
        geen grote groep. Lees meer over{" "}
        <Link href="/jeugd-voetbaltraining" style={linkStyle}>
          jeugdtraining
        </Link>
        .
      </>
    ),
  },
  {
    title: "Techniek, 1-tegen-1 en spelinzicht",
    image: "/gallery/g3.jpg",
    imageAlt:
      "Jeugdspeler met de bal tijdens individuele techniektraining op Sportpark Theo Lommen",
    body: (
      <>
        Mijn sessies duren 60 minuten, met focus op aannemen, dribbelen, passen,
        schieten en keuzes onder druk. Op {getFullAddressLine()}. Bekijk mijn{" "}
        <Link href="/trainingen" style={linkStyle}>
          trainingsplanning
        </Link>{" "}
        en{" "}
        <Link href="/individuele-techniektraining" style={linkStyle}>
          individuele techniektraining
        </Link>
        .
      </>
    ),
  },
  {
    title: "Mini Voetbalschool (3 t/m 5 jaar)",
    image: "/gallery/g4.jpg",
    imageAlt: "Jonge kinderen met de bal bij Mini Voetbalschool Janssen",
    body: (
      <>
        Voor de allerjongsten bied ik de{" "}
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
 * “Voor wie”-sectie: foto’s links (zelfde formaat), tekst rechts.
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
          Mijn training
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
          Ik geef privé / individuele voetbaltraining in Velden (Venlo, Limburg)
          aan jeugdspelers die willen groeien — en via Mini ook aan de
          allerjongsten.
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
        {audiences.map((item) => (
          <div
            key={item.title}
            style={{
              display: "flex",
              flexWrap: "wrap",
              alignItems: "center",
              gap: "40px",
              flexDirection: "row",
            }}
          >
            <div
              style={{
                flex: "1 1 280px",
                minWidth: "240px",
                maxWidth: "480px",
                width: "100%",
                position: "relative",
                aspectRatio: "4 / 3",
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
            <div
              style={{
                flex: "1 1 260px",
                minWidth: "240px",
                maxWidth: "380px",
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
        ))}
      </div>

      <div
        style={{
          maxWidth: "560px",
          margin: "72px auto 0",
          textAlign: "center",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
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
            margin: "0 0 28px",
          }}
        >
          Vraag een{" "}
          <ContactLink href="/proefles-aanvragen" type="proefles" style={linkStyle}>
            proefles
          </ContactLink>{" "}
          aan — dan plan ik samen met jou een moment. Mijn tarieven staan bij{" "}
          <Link href="/pakketten" style={linkStyle}>
            pakketten
          </Link>
          .
        </p>
        <ContactLink
          href="/proefles-aanvragen"
          type="proefles"
          className="btn btn-secondary"
          style={{
            display: "inline-flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "12px 32px",
            fontSize: "15px",
            borderRadius: "9999px",
            backgroundColor: "#D90429",
            color: "#ffffff",
            fontWeight: 700,
            border: "none",
            textDecoration: "none",
            marginBottom: "28px",
          }}
        >
          Proefles aanvragen
        </ContactLink>
        <p
          style={{
            fontSize: "15px",
            lineHeight: 1.7,
            color: "#4a4a4a",
            fontWeight: 500,
            margin: 0,
          }}
        >
          <Link href="/prive-voetbaltraining" style={linkStyle}>
            Privé training
          </Link>
          {" · "}
          <Link href="/individuele-voetbaltrainer-venlo" style={linkStyle}>
            Trainer Venlo
          </Link>
          {" · "}
          <Link href="/voetbaltraining-velden" style={linkStyle}>
            Velden
          </Link>
          {" · "}
          <Link href="/voetbaltraining-venlo" style={linkStyle}>
            Venlo
          </Link>
        </p>
      </div>
    </section>
  );
}
