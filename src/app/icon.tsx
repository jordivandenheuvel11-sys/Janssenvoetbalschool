import { ImageResponse } from "next/og";

export const runtime = "edge";

/** Google prefers ≥48×48 for search result favicons */
export const size = { width: 48, height: 48 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#0f0f0f",
          borderRadius: 11,
        }}
      >
        <div
          style={{
            width: 34,
            height: 34,
            borderRadius: 17,
            border: "4px solid #D90429",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "#ffffff",
            fontSize: 20,
            fontWeight: 800,
            fontFamily:
              "ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, sans-serif",
          }}
        >
          J
        </div>
      </div>
    ),
    { ...size },
  );
}
