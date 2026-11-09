import { ImageResponse } from "next/og";

export const runtime = "edge";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
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
          borderRadius: 40,
        }}
      >
        <div
          style={{
            width: 128,
            height: 128,
            borderRadius: 64,
            border: "12px solid #D90429",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "#ffffff",
            fontSize: 72,
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
