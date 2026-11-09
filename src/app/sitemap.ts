import type { MetadataRoute } from "next";
import { getSiteUrl } from "@/lib/site";
import { LOCAL_GUIDE_LINKS } from "@/lib/local-guides";
import { BLOG_POSTS } from "@/lib/blog";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = new URL(getSiteUrl());
  const now = new Date();

  const paths = [
    "/",
    "/trainingen",
    "/pakketten",
    "/proefles-aanvragen",
    "/faq",
    "/over-mij",
    "/contact",
    "/mini-voetbalschool",
    "/inschrijven",
    "/blog",
    ...LOCAL_GUIDE_LINKS.map((l) => l.href),
    ...BLOG_POSTS.map((p) => `/blog/${p.slug}`),
  ];

  return paths.map((path) => ({
    url: new URL(path, baseUrl).toString(),
    lastModified: now,
    changeFrequency:
      path === "/" || path.startsWith("/blog") ? "weekly" : "monthly",
    priority:
      path === "/"
        ? 1
        : path === "/proefles-aanvragen" || path === "/voetbaltraining-limburg"
          ? 0.9
          : path === "/blog" || path.startsWith("/blog/")
            ? 0.85
            : path.startsWith("/voetbal") ||
                path.startsWith("/jeugd") ||
                path.startsWith("/individuele") ||
                path.startsWith("/prive") ||
                path.startsWith("/locatie")
              ? 0.8
              : 0.7,
  }));
}
