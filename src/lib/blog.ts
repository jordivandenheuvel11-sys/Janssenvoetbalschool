/** Blog posts for SEO / GEO / AEO — Venlo-first, Limburg as secondary. */

export type BlogPost = {
  slug: string;
  title: string;
  description: string;
  /** First sentence / lead — must contain the primary keyword phrase */
  lead: string;
  datePublished: string;
  dateModified: string;
  keywords: string[];
  /** Primary intent label for editors */
  intent: "informational" | "commercial" | "comparison";
};

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: "extra-voetbaltraining-venlo-naast-club",
    title: "Extra voetbaltraining in Venlo naast je club: wat werkt het best?",
    description:
      "Wil je extra voetbaltraining in Venlo naast je club? Lees wat werkt: kleine groepjes, techniekfocus en hoe je start bij Janssen Voetbalschool in Velden.",
    lead: "Extra voetbaltraining in Venlo naast je club werkt het best als die gerichter is dan de clubgroep: kleine groepjes, duidelijke doelen en persoonlijke feedback.",
    datePublished: "2026-11-09",
    dateModified: "2026-11-09",
    keywords: [
      "extra voetbaltraining Venlo",
      "voetbaltraining naast club Venlo",
      "jeugd voetbaltraining Venlo",
    ],
    intent: "commercial",
  },
  {
    slug: "individuele-voetbaltrainer-venlo-kiezen",
    title: "Individuele voetbaltrainer in Venlo: zo kies je de juiste",
    description:
      "Op zoek naar een individuele voetbaltrainer in Venlo? Checklist: aanpak, groepsgrootte, locatie, proefles — en wat Janssen Voetbalschool anders doet.",
    lead: "Een individuele voetbaltrainer in Venlo zoek je niet alleen op naam, maar op aanpak: kleine groepjes, vaste locatie en training die naast de club past.",
    datePublished: "2026-11-09",
    dateModified: "2026-11-09",
    keywords: [
      "individuele voetbaltrainer Venlo",
      "voetbaltrainer Venlo",
      "persoonlijke voetbaltraining Venlo",
    ],
    intent: "comparison",
  },
  {
    slug: "techniektraining-jeugd-venlo",
    title: "Techniektraining voor jeugd in Venlo: aanname, dribbelen en 1-tegen-1",
    description:
      "Techniektraining voor jeugd in Venlo: wat je traint (aanname, dribbelen, 1-tegen-1), waarom kleine groepjes werken en waar je in Velden start.",
    lead: "Techniektraining voor jeugd in Venlo draait om herhaling met correctie: aanname, dribbelen, passen, schieten en 1-tegen-1 — bij voorkeur in een klein groepje.",
    datePublished: "2026-11-09",
    dateModified: "2026-11-09",
    keywords: [
      "techniektraining Venlo",
      "jeugd techniektraining Venlo",
      "voetbaltechniek Venlo",
    ],
    intent: "informational",
  },
  {
    slug: "voetbaltraining-limburg-naast-club-kiezen",
    title: "Voetbaltraining in Limburg naast je club: waar let je op?",
    description:
      "Voetbaltraining in Limburg naast je club kiezen: waar let je op, waarom Noord-Limburg/Venlo een sterke optie is, en hoe je een proefles plant.",
    lead: "Voetbaltraining in Limburg naast je club kies je op afstand, groepsgrootte en of de sessie écht iets toevoegt boven je wekelijkse teamtraining.",
    datePublished: "2026-11-09",
    dateModified: "2026-11-09",
    keywords: [
      "voetbaltraining Limburg",
      "extra voetbaltraining Limburg",
      "voetbaltraining naast club Limburg",
    ],
    intent: "commercial",
  },
];

export function getBlogPost(slug: string): BlogPost | undefined {
  return BLOG_POSTS.find((p) => p.slug === slug);
}

export function getAllBlogSlugs(): string[] {
  return BLOG_POSTS.map((p) => p.slug);
}
