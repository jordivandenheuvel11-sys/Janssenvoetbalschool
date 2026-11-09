/** Shared FAQ for homepage, /faq page and FAQPage schema (eerste persoon + page links). */

export type FaqLink = { href: string; label: string };

export type FaqPart = string | FaqLink;

export type FaqItem = {
  question: string;
  /** Mixed plain text + internal links (rendered in UI) */
  parts: FaqPart[];
};

export function isFaqLink(part: FaqPart): part is FaqLink {
  return typeof part === "object" && part !== null && "href" in part;
}

/** Plain-text answer for JSON-LD */
export function faqAnswerText(item: FaqItem): string {
  return item.parts
    .map((p) => (isFaqLink(p) ? p.label : p))
    .join("");
}

export const FAQ_ITEMS: FaqItem[] = [
  {
    question: "Voor welke leeftijden train ik?",
    parts: [
      "Ik train jeugdspelers die naast hun club extra willen werken aan techniek en zelfvertrouwen. Meer over ",
      { href: "/jeugd-voetbaltraining", label: "jeugd voetbaltraining" },
      ". Voor 3 t/m 5 jaar bied ik de ",
      { href: "/mini-voetbalschool", label: "Mini Voetbalschool" },
      ".",
    ],
  },
  {
    question: "Waar train ik?",
    parts: [
      "Ik train op ",
      {
        href: "/locatie-sportpark-theo-lommen",
        label: "Sportpark Theo Lommen",
      },
      " in Velden (gemeente Venlo). Ook relevant: ",
      { href: "/voetbaltraining-velden", label: "training in Velden" },
      " en ",
      { href: "/voetbaltraining-venlo", label: "training in Venlo" },
      ".",
    ],
  },
  {
    question: "Hoe lang duurt een training?",
    parts: [
      "Een individuele sessie bij mij duurt 60 minuten. Actuele data staan op de ",
      { href: "/trainingen", label: "trainingsplanning" },
      ".",
    ],
  },
  {
    question: "Kan ik eerst een proefles doen?",
    parts: [
      "Ja. Via ",
      { href: "/proefles-aanvragen", label: "proefles aanvragen" },
      " plan ik samen met jou een moment. Zo ervaar je mijn aanpak voordat je een pakket kiest.",
    ],
  },
  {
    question: "Wat kosten de trainingen?",
    parts: [
      "Ik bied trainingsblokken en jaarpakketten. Actuele tarieven staan bij ",
      { href: "/pakketten", label: "pakketten" },
      ".",
    ],
  },
  {
    question: "Bied je privé voetbaltraining / 1-op-1?",
    parts: [
      "Ja. Ik geef ",
      { href: "/prive-voetbaltraining", label: "privé voetbaltraining" },
      " (1-op-1) en ",
      {
        href: "/individuele-techniektraining",
        label: "individuele techniektraining",
      },
      " in Velden, gemeente Venlo (Limburg).",
    ],
  },
  {
    question: "Ben jij een individuele voetbaltrainer in Venlo of Limburg?",
    parts: [
      "Ja. Ik ben ",
      {
        href: "/individuele-voetbaltrainer-venlo",
        label: "individuele voetbaltrainer in Venlo en Limburg",
      },
      " — Jelte Janssen van Janssen Voetbalschool.",
    ],
  },
  {
    question: "Wat is het verschil met clubtraining?",
    parts: [
      "Bij de club train je in een groep. Bij mij krijg je individuele aandacht — zie ook ",
      {
        href: "/individuele-techniektraining",
        label: "individuele techniektraining",
      },
      " en ",
      { href: "/prive-voetbaltraining", label: "privé voetbaltraining" },
      ".",
    ],
  },
  {
    question: "Wat is de Mini Voetbalschool?",
    parts: [
      "Dat is mijn programma voor kinderen van 3 t/m 5 jaar (ouder & kind). Alles staat op de ",
      { href: "/mini-voetbalschool", label: "Mini Voetbalschool-pagina" },
      ".",
    ],
  },
  {
    question: "Hoe meld ik me aan?",
    parts: [
      "Vraag een ",
      { href: "/proefles-aanvragen", label: "proefles" },
      " aan of stuur me een bericht via ",
      { href: "/contact", label: "Contact" },
      ". Ik neem zo snel mogelijk contact met je op. Inschrijven kan via ",
      { href: "/inschrijven", label: "inschrijven" },
      ".",
    ],
  },
];
