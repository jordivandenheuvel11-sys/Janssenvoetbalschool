import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Janssen Voetbalschool";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "linear-gradient(145deg, #0a0a0a 0%, #1a1a1a 55%, #3a0a12 100%)",
          padding: "64px 72px",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 16,
            color: "#D90429",
            fontSize: 28,
            fontWeight: 700,
            letterSpacing: "0.18em",
            textTransform: "uppercase",
          }}
        >
          Janssen Voetbalschool
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
          <div
            style={{
              color: "#ffffff",
              fontSize: 64,
              fontWeight: 700,
              letterSpacing: "0.02em",
              lineHeight: 1.05,
              maxWidth: 900,
            }}
          >
            Individuele voetbaltraining in Velden
          </div>
          <div
            style={{
              color: "rgba(255,255,255,0.78)",
              fontSize: 30,
              fontWeight: 500,
              lineHeight: 1.35,
              maxWidth: 820,
            }}
          >
            Techniek, zelfvertrouwen en plezier — voor jeugdspelers in gemeente Venlo
          </div>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            color: "rgba(255,255,255,0.55)",
            fontSize: 22,
            fontWeight: 600,
          }}
        >
          <span>Sportpark Theo Lommen · Velden</span>
          <span>janssenvoetbalschool.nl</span>
        </div>
      </div>
    ),
    { ...size },
  );
}
