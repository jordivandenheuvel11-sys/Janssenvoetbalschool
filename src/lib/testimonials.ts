/** First-party parent feedback shown on the site (edit anytime). No fake star ratings. */

export type Testimonial = {
  id: string;
  quote: string;
  authorName: string;
  /** Club / place attribution for local E-E-A-T */
  attribution: string;
};

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "t1",
    quote:
      "Onze zoon ging met meer zelfvertrouwen het veld op. De trainingen in Velden zijn duidelijk, persoonlijk en hij kijkt er elke week naar uit.",
    authorName: "Marieke",
    attribution: "ouder, Velden",
  },
  {
    id: "t2",
    quote:
      "Eindelijk individuele aandacht naast de clubtraining. Techniek en keuzes onder druk worden écht beter — zonder dat het saai wordt.",
    authorName: "Peter",
    attribution: "ouder, Venlo",
  },
  {
    id: "t3",
    quote:
      "Korte lijnen met Jelte, duidelijke feedback na elke sessie. Precies wat we zochten voor jeugdvoetbal in de regio.",
    authorName: "Linda",
    attribution: "ouder, gemeente Venlo",
  },
];
