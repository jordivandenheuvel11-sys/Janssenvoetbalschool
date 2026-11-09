/** Preferred public origin (www). Apex redirects to www in production. */
export const PREFERRED_SITE_URL = "https://www.janssenvoetbalschool.nl";

/**
 * Resolve the site origin for metadata, sitemap and robots.
 * Always prefers www for janssenvoetbalschool.nl even if env is apex.
 */
export function getSiteUrl(): string {
  const raw = process.env.NEXT_PUBLIC_SITE_URL?.trim();
  if (!raw) return PREFERRED_SITE_URL;

  try {
    const url = new URL(raw);
    if (
      url.hostname === "janssenvoetbalschool.nl" ||
      url.hostname === "www.janssenvoetbalschool.nl"
    ) {
      url.protocol = "https:";
      url.hostname = "www.janssenvoetbalschool.nl";
      url.pathname = "/";
      url.search = "";
      url.hash = "";
      return url.origin;
    }
    return url.origin;
  } catch {
    return PREFERRED_SITE_URL;
  }
}
