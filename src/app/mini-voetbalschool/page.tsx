import React from "react";
import Link from "next/link";
import type { Metadata } from "next";
import ContactSection from "@/components/ContactSection";

export const metadata: Metadata = {
  title: "Mini Voetbalschool Janssen",
  description:
    "Mini Voetbalschool Janssen voor kinderen van 3 t/m 5 jaar. Speels ouder-kind voetbalprogramma in de sportzaal, vanaf 6 september.",
  alternates: { canonical: "/mini-voetbalschool" },
};

const highlights = [
  {
    label: "Leeftijd",
    value: "3 t/m 5 jaar",
    detail: "Een veilige eerste kennismaking met bal en beweging.",
  },
  {
    label: "Start",
    value: "6 september",
    detail: "Nieuw dit seizoen — meld je op tijd aan.",
  },
  {
    label: "Vorm",
    value: "Ouder & kind",
    detail: "Samen spelen, ontdekken en genieten in de sportzaal.",
  },
  {
    label: "Focus",
    value: "Plezier eerst",
    detail: "Speels bewegen, balgevoel en zelfvertrouwen opbouwen.",
  },
];

const gallery = [
  {
    src: "/gallery/g1.jpg",
    alt: "Trainer met jonge spelers tijdens een training van Janssen Voetbalschool",
  },
  {
    src: "/gallery/g4.jpg",
    alt: "Jonge voetballers in actie op het veld",
  },
  {
    src: "/gallery/g2.jpg",
    alt: "Jonge speler met bal op het trainingsveld",
  },
  {
    src: "/gallery/g5.jpg",
    alt: "Concentratie en balgevoel tijdens de training",
  },
  {
    src: "/gallery/g6.jpg",
    alt: "Trainingsballen klaar voor de volgende sessie",
  },
];

export default function MiniVoetbalschoolPage() {
  return (
    <main style={{ backgroundColor: "#0f0f0f", color: "#ffffff", minHeight: "100vh" }}>
      {/* Hero */}
      <section
        className="hero"
        style={{
          position: "relative",
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          overflow: "hidden",
          textAlign: "center",
          padding: "120px 24px 80px",
        }}
      >
        <img
          src="/gallery/g4.jpg"
          alt=""
          aria-hidden="true"
          width={1600}
          height={1067}
          fetchPriority="high"
          decoding="async"
          style={{
            position: "absolute",
            inset: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
            zIndex: 0,
          }}
        />
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundColor: "rgba(0, 0, 0, 0.45)",
            backgroundImage:
              "linear-gradient(to bottom, rgba(0,0,0,0.75) 0%, rgba(0,0,0,0.35) 45%, rgba(0,0,0,0.8) 100%)",
            zIndex: 1,
          }}
        />

        <div className="container" style={{ position: "relative", zIndex: 2, maxWidth: "820px" }}>
          <p
            style={{
              fontSize: "clamp(1.15rem, 2.5vw, 1.5rem)",
              fontWeight: 800,
              letterSpacing: "-0.02em",
              marginBottom: "20px",
              color: "#ffffff",
            }}
          >
            Janssen Voetbalschool
          </p>
          <h1
            style={{
              fontSize: "clamp(2.4rem, 7vw, 4.5rem)",
              fontWeight: 900,
              letterSpacing: "-0.04em",
              lineHeight: 1.05,
              margin: "0 0 24px 0",
              color: "#ffffff",
            }}
          >
            Mini Voetbalschool
          </h1>
          <p
            style={{
              margin: "0 auto 36px",
              maxWidth: "560px",
              fontSize: "clamp(1rem, 2.4vw, 1.2rem)",
              lineHeight: 1.65,
              color: "rgba(255,255,255,0.9)",
              fontWeight: 500,
            }}
          >
            Speels ouder-kind voetbal voor kinderen van 3 t/m 5 jaar. Vanaf 6 september in de sportzaal.
          </p>
          <div className="hero-buttons" style={{ justifyContent: "center" }}>
            <Link
              href="#aanmelden"
              className="btn btn-secondary"
              style={{
                padding: "14px 32px",
                fontSize: "15px",
                borderRadius: "9999px",
                backgroundColor: "#ffffff",
                color: "#0f0f0f",
                fontWeight: 800,
                letterSpacing: "0.04em",
                textTransform: "uppercase",
              }}
            >
              Aanmelden
            </Link>
          </div>
        </div>
      </section>

      {/* Intro + foto */}
      <section
        style={{
          backgroundColor: "#ffffff",
          color: "#0f0f0f",
          display: "flex",
          flexWrap: "wrap",
          position: "relative",
          zIndex: 20,
        }}
      >
        <div
          style={{
            flex: "1 1 480px",
            minHeight: "52vh",
            position: "relative",
            overflow: "hidden",
            padding: "24px",
          }}
        >
          <img
            src="/about-us-new.webp"
            alt="Trainingssfeer bij Janssen Voetbalschool"
            width={1200}
            height={800}
            loading="lazy"
            decoding="async"
            style={{
              width: "100%",
              height: "100%",
              minHeight: "420px",
              objectFit: "cover",
              borderRadius: "32px",
            }}
          />
        </div>

        <div
          style={{
            flex: "1 1 480px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "64px 24px",
            minHeight: "52vh",
          }}
        >
          <div style={{ maxWidth: "500px" }}>
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
              Nieuw dit seizoen
            </span>
            <h2
              style={{
                fontSize: "clamp(2rem, 4vw, 3rem)",
                fontWeight: 900,
                letterSpacing: "-0.04em",
                lineHeight: 1.1,
                marginBottom: "24px",
                color: "#0f0f0f",
              }}
            >
              De allereerste stappen met de bal.
            </h2>
            <p
              style={{
                fontSize: "18px",
                lineHeight: 1.75,
                color: "#4a4a4a",
                fontWeight: 500,
                margin: 0,
              }}
            >
              Mini Voetbalschool Janssen is een speels ouder-kind programma in de sportzaal. Samen
              ontdekken jullie balgevoel, bewegen en het plezier van voetbal — in een veilige,
              kleinschalige setting onder begeleiding van Janssen Voetbalschool.
            </p>
          </div>
        </div>
      </section>

      {/* Highlights */}
      <section style={{ backgroundColor: "#0f0f0f", padding: "100px 24px", position: "relative", zIndex: 20 }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "64px" }}>
            <span
              style={{
                fontSize: "14px",
                fontWeight: 900,
                color: "#D90429",
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                display: "block",
                marginBottom: "16px",
              }}
            >
              Het programma
            </span>
            <h2
              style={{
                fontSize: "clamp(2rem, 4.5vw, 3.25rem)",
                fontWeight: 900,
                letterSpacing: "-0.04em",
                lineHeight: 1.1,
                margin: 0,
              }}
            >
              Wat kun je verwachten?
            </h2>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
              gap: "40px 32px",
            }}
          >
            {highlights.map((item) => (
              <div
                key={item.label}
                style={{
                  borderTop: "2px solid #D90429",
                  paddingTop: "24px",
                }}
              >
                <span
                  style={{
                    display: "block",
                    fontSize: "13px",
                    fontWeight: 800,
                    color: "#D90429",
                    letterSpacing: "0.12em",
                    textTransform: "uppercase",
                    marginBottom: "10px",
                  }}
                >
                  {item.label}
                </span>
                <h3
                  style={{
                    fontSize: "1.5rem",
                    fontWeight: 900,
                    letterSpacing: "-0.02em",
                    margin: "0 0 12px 0",
                  }}
                >
                  {item.value}
                </h3>
                <p style={{ margin: 0, color: "#b0b0b0", fontSize: "15px", lineHeight: 1.6 }}>
                  {item.detail}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section style={{ backgroundColor: "#ffffff", padding: "100px 24px 80px", position: "relative", zIndex: 20 }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "56px" }}>
            <span
              style={{
                fontSize: "14px",
                fontWeight: 900,
                color: "#D90429",
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                display: "block",
                marginBottom: "16px",
              }}
            >
              Sfeerimpressie
            </span>
            <h2
              style={{
                fontSize: "clamp(2rem, 4.5vw, 3.25rem)",
                fontWeight: 900,
                letterSpacing: "-0.04em",
                lineHeight: 1.1,
                margin: "0 0 16px 0",
                color: "#0f0f0f",
              }}
            >
              Training bij Janssen
            </h2>
            <p
              style={{
                margin: "0 auto",
                maxWidth: "520px",
                fontSize: "17px",
                color: "#5b5c5e",
                lineHeight: 1.65,
              }}
            >
              Een kijkje bij onze trainingen: aandacht, energie en het plezier van het spel.
            </p>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(12, 1fr)",
              gap: "16px",
            }}
          >
            {gallery.map((photo, index) => {
              const spans =
                index === 0
                  ? { gridColumn: "span 7", minHeight: "380px" }
                  : index === 1
                    ? { gridColumn: "span 5", minHeight: "380px" }
                    : { gridColumn: "span 4", minHeight: "260px" };

              return (
                <div
                  key={photo.src}
                  className="mini-gallery-item"
                  style={{
                    ...spans,
                    borderRadius: "24px",
                    overflow: "hidden",
                    position: "relative",
                  }}
                >
                  <img
                    src={photo.src}
                    alt={photo.alt}
                    width={800}
                    height={600}
                    loading="lazy"
                    decoding="async"
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      display: "block",
                      transition: "transform 0.6s cubic-bezier(0.16, 1, 0.3, 1)",
                    }}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA strip */}
      <section
        style={{
          position: "relative",
          overflow: "hidden",
          padding: "100px 24px",
          textAlign: "center",
          zIndex: 20,
        }}
      >
        <img
          src="/gallery/g1.jpg"
          alt=""
          aria-hidden="true"
          width={1600}
          height={1067}
          loading="lazy"
          decoding="async"
          style={{
            position: "absolute",
            inset: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
            zIndex: 0,
          }}
        />
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundColor: "rgba(15, 15, 15, 0.78)",
            zIndex: 1,
          }}
        />
        <div style={{ position: "relative", zIndex: 2, maxWidth: "640px", margin: "0 auto" }}>
          <h2
            style={{
              fontSize: "clamp(1.85rem, 4vw, 2.75rem)",
              fontWeight: 900,
              letterSpacing: "-0.03em",
              lineHeight: 1.15,
              margin: "0 0 16px 0",
            }}
          >
            Klaar voor de eerste training?
          </h2>
          <p
            style={{
              margin: "0 0 32px 0",
              fontSize: "17px",
              lineHeight: 1.65,
              color: "rgba(255,255,255,0.85)",
            }}
          >
            Meld je kind aan voor Mini Voetbalschool Janssen. Start vanaf 6 september.
          </p>
          <Link
            href="#aanmelden"
            style={{
              display: "inline-block",
              padding: "16px 34px",
              borderRadius: "9999px",
              backgroundColor: "#ffffff",
              color: "#0f0f0f",
              fontWeight: 900,
              letterSpacing: "0.06em",
              textTransform: "uppercase",
              fontSize: "14px",
            }}
          >
            Direct aanmelden
          </Link>
        </div>
      </section>

      <div id="aanmelden">
        <ContactSection
          aanvraagType="mini-voetbalschool"
          heading="Aanmelden Mini Voetbalschool"
          description="Laat je gegevens achter. Ik neem zo snel mogelijk contact met je op over de start vanaf 6 september."
          submitLabel="Aanmelding versturen"
          initialSubject="Aanmelding Mini Voetbalschool"
          initialMessage="Ik wil mijn kind graag aanmelden voor de Mini Voetbalschool (3 t/m 5 jaar)."
        />
      </div>

      <style>{`
        @media (max-width: 768px) {
          .mini-gallery-item {
            grid-column: span 12 !important;
            min-height: 240px !important;
          }
        }
        .mini-gallery-item:hover img {
          transform: scale(1.04);
        }
      `}</style>
    </main>
  );
}
