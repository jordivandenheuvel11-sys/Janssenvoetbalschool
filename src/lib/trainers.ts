/** Team trainers shown on homepage + over-mij. */

export type Trainer = {
  id: string;
  name: string;
  role: string;
  image: string;
  imageAlt: string;
};

export const TRAINERS: Trainer[] = [
  {
    id: "jelte",
    name: "Jelte Janssen",
    role: "Eigenaar & trainer",
    image: "/trainers/jelte.webp",
    imageAlt: "Jelte Janssen, eigenaar van Janssen Voetbalschool",
  },
  {
    id: "rik",
    name: "Rik",
    role: "Trainer",
    image: "/trainers/rik.webp",
    imageAlt: "Rik, trainer bij Janssen Voetbalschool",
  },
  {
    id: "wout",
    name: "Wout",
    role: "Trainer",
    image: "/trainers/wout.webp",
    imageAlt: "Wout, trainer bij Janssen Voetbalschool",
  },
];
