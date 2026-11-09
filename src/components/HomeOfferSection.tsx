import React from "react";
import Link from "next/link";
import { BUSINESS, getFullAddressLine } from "@/lib/business";

const linkStyle: React.CSSProperties = { color: "#D90429", fontWeight: 700 };

/** Abstract pitch / 1-op-1 visual */
function VisualClub() {
  return (
    <div
      aria-hidden="true"
      style={{
        position: "relative",
        width: "100%",
        aspectRatio: "1 / 1",
        maxWidth: "420px",
        background:
          "linear-gradient(145deg, #0f0f0f 0%, #1a1a1b 55%, #2a1216 100%)",
        overflow: "hidden",
      }}
    >
      {/* pitch lines */}
      <div
        style={{
          position: "absolute",
          inset: "12%",
          border: "2px solid rgba(255,255,255,0.18)",
        }}
      />
      <div
        style={{
          position: "absolute",
          left: "12%",
          right: "12%",
          top: "50%",
          height: 2,
          background: "rgba(255,255,255,0.18)",
          transform: "translateY(-50%)",
        }}
      />
      <div
        style={{
          position: "absolute",
          left: "50%",
          top: "50%",
          width: "28%",
          aspectRatio: "1",
          border: "2px solid rgba(255,255,255,0.18)",
          borderRadius: "50%",
          transform: "translate(-50%, -50%)",
        }}
      />
      {/* big 1 */}
      <span
        style={{
          position: "absolute",
          left: "10%",
          bottom: "6%",
          fontSize: "clamp(5rem, 18vw, 8rem)",
          fontWeight: 900,
          letterSpacing: "-0.08em",
          lineHeight: 0.85,
          color: "#D90429",
          animation: "aanbodPulse 4s ease-in-out infinite",
        }}
      >
        1
      </span>
      <span
        style={{
          position: "absolute",
          right: "12%",
          top: "14%",
          fontSize: "13px",
          fontWeight: 800,
          letterSpacing: "0.18em",
          textTransform: "uppercase",
          color: "rgba(255,255,255,0.7)",
        }}
      >
        Jij + ik
      </span>
    </div>
  );
}

/** 60' technique rings */
function VisualTechnique() {
  return (
    <div
      aria-hidden="true"
      style={{
        position: "relative",
        width: "100%",
        aspectRatio: "1 / 1",
        maxWidth: "420px",
        background: "#f3f1ee",
        overflow: "hidden",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div
        style={{
          position: "absolute",
          width: "78%",
          aspectRatio: "1",
          border: "2px solid rgba(217,4,41,0.25)",
          borderRadius: "50%",
          animation: "aanbodSpin 28s linear infinite",
        }}
      />
      <div
        style={{
          position: "absolute",
          width: "54%",
          aspectRatio: "1",
          border: "2px dashed rgba(15,15,15,0.2)",
          borderRadius: "50%",
          animation: "aanbodSpin 18s linear infinite reverse",
        }}
      />
      <div
        style={{
          position: "absolute",
          width: "28%",
          aspectRatio: "1",
          backgroundColor: "#D90429",
          borderRadius: "50%",
          boxShadow: "0 12px 40px rgba(217,4,41,0.35)",
        }}
      />
      <span
        style={{
          position: "relative",
          zIndex: 1,
          fontSize: "clamp(2.4rem, 8vw, 3.4rem)",
          fontWeight: 900,
          letterSpacing: "-0.04em",
          color: "#ffffff",
        }}
      >
        60′
      </span>
      <span
        style={{
          position: "absolute",
          bottom: "14%",
          fontSize: "12px",
          fontWeight: 800,
          letterSpacing: "0.2em",
          textTransform: "uppercase",
          color: "#0f0f0f",
        }}
      >
        Per sessie
      </span>
    </div>
  );
}

/** Mini age stack */
function VisualMini() {
  return (
    <div
      aria-hidden="true"
      style={{
        position: "relative",
        width: "100%",
        aspectRatio: "1 / 1",
        maxWidth: "420px",
        background:
          "radial-gradient(circle at 30% 30%, #ffe8ec 0%, #ffffff 45%, #f0f0ee 100%)",
        overflow: "hidden",
      }}
    >
      {[0, 1, 2].map((i) => (
        <div
          key={i}
          style={{
            position: "absolute",
            left: `${18 + i * 12}%`,
            bottom: `${16 + i * 10}%`,
            width: `${42 - i * 6}%`,
            height: `${42 - i * 6}%`,
            border: "3px solid #D90429",
            backgroundColor: i === 2 ? "#D90429" : "transparent",
            opacity: 1 - i * 0.15,
            animation: `aanbodFloat ${3.2 + i * 0.4}s ease-in-out infinite`,
            animationDelay: `${i * 0.2}s`,
          }}
        />
      ))}
      <span
        style={{
          position: "absolute",
          right: "10%",
          top: "12%",
          fontSize: "clamp(2.8rem, 10vw, 4rem)",
          fontWeight: 900,
          letterSpacing: "-0.06em",
          color: "#0f0f0f",
          lineHeight: 1,
        }}
      >
        3–5
      </span>
      <span
        style={{
          position: "absolute",
          right: "10%",
          top: "calc(12% + 3.2rem)",
          fontSize: "12px",
          fontWeight: 800,
          letterSpacing: "0.16em",
          textTransform: "uppercase",
          color: "#D90429",
        }}
      >
        Mini
      </span>
    </div>
  );
}

const audiences = [
  {
    title: "Jeugdspelers naast de club",
    Visual: VisualClub,
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
    Visual: VisualTechnique,
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
    Visual: VisualMini,
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
 * “Voor wie”-sectie: creatieve visuals links, tekst rechts (geen foto’s).
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
      <style>{`
        @keyframes aanbodPulse {
          0%, 100% { transform: scale(1); opacity: 1; }
          50% { transform: scale(1.04); opacity: 0.92; }
        }
        @keyframes aanbodSpin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes aanbodFloat {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
      `}</style>

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
        {audiences.map((item) => {
          const Visual = item.Visual;
          return (
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
                  maxWidth: "420px",
                  width: "100%",
                }}
              >
                <Visual />
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
            margin: "0 0 24px",
          }}
        >
          Vraag een{" "}
          <Link href="/proefles-aanvragen" style={linkStyle}>
            proefles
          </Link>{" "}
          aan — dan plan ik samen met jou een moment. Mijn tarieven staan bij{" "}
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
