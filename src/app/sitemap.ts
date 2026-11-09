import type { MetadataRoute } from "next";
import { getSiteUrl } from "@/lib/site";
import { LOCAL_GUIDE_LINKS } from "@/lib/local-guides";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = new URL(getSiteUrl());
  const now = new Date();

  const paths = [
    "/",
    "/trainingen",
    "/pakketten",
    "/proefles-aanvragen",
    "/faq",
    "/contact",
    "/mini-voetbalschool",
    "/inschrijven",
    ...LOCAL_GUIDE_LINKS.map((l) => l.href),
  ];

  return paths.map((path) => ({
    url: new URL(path, baseUrl).toString(),
    lastModified: now,
    changeFrequency: path === "/" ? "weekly" : "monthly",
    priority:
      path === "/"
        ? 1
        : path === "/proefles-aanvragen"
          ? 0.9
          : path.startsWith("/voetbal") ||
              path.startsWith("/jeugd") ||
              path.startsWith("/individuele") ||
              path.startsWith("/locatie")
            ? 0.8
            : 0.7,
  }));
}
