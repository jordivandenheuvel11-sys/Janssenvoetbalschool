import type { MetadataRoute } from "next";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL;

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = siteUrl ? new URL(siteUrl) : null;
  const now = new Date();

  const paths = ["/", "/trainingen", "/pakketten", "/contact", "/mini-voetbalschool", "/inschrijven"];

  return paths.map((path) => ({
    url: baseUrl ? new URL(path, baseUrl).toString() : path,
    lastModified: now,
    changeFrequency: path === "/" ? "weekly" : "monthly",
    priority: path === "/" ? 1 : 0.7,
  }));
}

