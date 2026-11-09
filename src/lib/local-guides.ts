/** Shared related links for local support pages (internal linking cluster). */

export const LOCAL_GUIDE_LINKS = [
  { href: "/voetbaltraining-velden", label: "Voetbaltraining in Velden" },
  { href: "/voetbaltraining-venlo", label: "Voetbaltraining in Venlo" },
  { href: "/jeugd-voetbaltraining", label: "Jeugd voetbaltraining" },
  { href: "/individuele-techniektraining", label: "Individuele techniektraining" },
  { href: "/prive-voetbaltraining", label: "Privé voetbaltraining" },
  {
    href: "/individuele-voetbaltrainer-venlo",
    label: "Individuele voetbaltrainer Venlo",
  },
  { href: "/locatie-sportpark-theo-lommen", label: "Locatie Sportpark Theo Lommen" },
] as const;

export function relatedExcept(path: string) {
  return LOCAL_GUIDE_LINKS.filter((l) => l.href !== path).map((l) => ({ ...l }));
}
