import type { MetadataRoute } from "next";
import { getSiteUrl } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = new URL(getSiteUrl());
  const now = new Date();

  const paths = [
    "/",
    "/trainingen",
    "/pakketten",
    "/proefles-aanvragen",
    "/contact",
    "/mini-voetbalschool",
    "/inschrijven",
  ];

  return paths.map((path) => ({
    url: new URL(path, baseUrl).toString(),
    lastModified: now,
    changeFrequency: path === "/" ? "weekly" : "monthly",
    priority: path === "/" ? 1 : path === "/proefles-aanvragen" ? 0.9 : 0.7,
  }));
}
