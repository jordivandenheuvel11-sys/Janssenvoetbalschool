import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Janssen Voetbalschool",
    short_name: "Janssen",
    description:
      "Professionele voetbaltraining en techniektraining in Velden voor jeugdspelers.",
    start_url: "/",
    display: "standalone",
    background_color: "#0f0f0f",
    theme_color: "#D90429",
    icons: [
      {
        src: "/icon",
        sizes: "48x48",
        type: "image/png",
        purpose: "any",
      },
    ],
  };
}

