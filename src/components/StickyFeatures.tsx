import type { CSSProperties } from "react";
import Link from "next/link";
import Image from "next/image";
import { BUSINESS, getFullAddressLine } from "@/lib/business";

type StickyFeaturesProps = {
  sectionHeading?: string;
};

const link: CSSProperties = { color: "#D90429", fontWeight: 700 };

const reasons = [
  {
    title: "Individuele aandacht",
    image: "/gallery/g2.jpg",
    imageAlt:
      "Individuele voetbaltraining bij Janssen Voetbalschool in Velden",
    aspectRatio: "5 / 4",
    body: (
      <>
        Bij Janssen Voetbalschool train je niet weg in een grote groep.{" "}
        {BUSINESS.trainerName} kijkt mee naar jouw aanname, dribbelen, passen en
        schieten — en stuurt gericht bij. Zo groeit techniek sneller dan bij
        alleen clubtraining, of je nu uit Velden, Venlo of elders in de gemeente
        komt.
      </>
    ),
  },
  {
    title: "Meetbaar resultaat",
    image: "/gallery/g5.jpg",
    imageAlt:
      "Jeugdspeler werkt aan techniek tijdens training op Sportpark Theo Lommen",
    aspectRatio: "1 / 1",
    body: (
      <>
        Elke sessie van 60 minuten heeft een duidelijk doel: beter handelen onder
        druk, sterker in 1-tegen-1, meer zelfvertrouwen in de wedstrijd. We
        bouwen door in vaste blokken — zie{" "}
        <Link href="/pakketten" style={link}>
          pakketten &amp; tarieven
        </Link>{" "}
        en de{" "}
        <Link href="/trainingen" style={link}>
          trainingsplanning
        </Link>
        .
      </>
    ),
  },
  {
    title: "Plezier én focus",
    image: "/gallery/g4.jpg",
    imageAlt:
      "Jonge voetballers met plezier aan de bal bij Janssen Voetbalschool",
    aspectRatio: "4 / 5",
    body: (
      <>
        Goede voetballers blijven trainen omdat het leuk is. De aanpak is
        serieus maar toegankelijk: duidelijke feedback, veel balcontact en een
        veilige sfeer op {getFullAddressLine()}. Voor de allerjongsten is er ook
        de{" "}
        <Link href="/mini-voetbalschool" style={link}>
          Mini Voetbalschool
        </Link>{" "}
        (3 t/m 5 jaar).
      </>
    ),
  },
];

/**
 * SEO-focused “Waarom”-sectie: crawlable copy + photos, geen kaarten/video-stack.
 */
export default function StickyFeatures({ sectionHeading }: StickyFeaturesProps) {
  const heading = sectionHeading ?? "Waarom Janssen Voetbalschool?";

  return (
    <section
      id="aanpak"
      aria-labelledby="waarom-heading"
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
          Mijn aanpak
        </span>
        <h2
          id="waarom-heading"
          style={{
            fontSize: "clamp(2.2rem, 4.5vw, 3.4rem)",
            fontWeight: 900,
            color: "#0f0f0f",
            letterSpacing: "-0.04em",
            lineHeight: 1.08,
            margin: "0 0 20px",
            maxWidth: "18ch",
          }}
        >
          {heading}
        </h2>
        <p
          style={{
            fontSize: "18px",
            lineHeight: 1.7,
            color: "#4a4a4a",
            fontWeight: 500,
            margin: 0,
            maxWidth: "42rem",
          }}
        >
          Individuele voetbaltraining in Velden (gemeente Venlo) voor
          jeugdspelers die techniek, spelinzicht en zelfvertrouwen willen
          versterken — naast hun club.
        </p>
      </div>

      <div
        style={{
          maxWidth: "1000px",
          margin: "0 auto",
          display: "flex",
          flexDirection: "column",
          gap: "72px",
        }}
      >
        {reasons.map((reason, index) => {
          const imageLeft = index % 2 === 0;
          return (
            <div
              key={reason.title}
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
                    reason.aspectRatio === "1 / 1"
                      ? "400px"
                      : reason.aspectRatio === "4 / 5"
                        ? "380px"
                        : "520px",
                  width: "100%",
                  position: "relative",
                  aspectRatio: reason.aspectRatio,
                  overflow: "hidden",
                }}
              >
                <Image
                  src={reason.image}
                  alt={reason.imageAlt}
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
                  {reason.title}
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
                  {reason.body}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
