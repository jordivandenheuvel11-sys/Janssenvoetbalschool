import type { Metadata } from "next";
import dynamic from "next/dynamic";
import Hero2 from "@/components/concept/Hero2";
import NiveauSection from "@/components/concept/NiveauSection";
import TrainingPhotosSection from "@/components/concept/TrainingPhotosSection";

const GezienBijBar = dynamic(() => import("@/components/concept/GezienBijBar"));

export const metadata: Metadata = {
  title: "Homepage concept (niet live)",
  description:
    "Conceptversie van de homepage — niet geïndexeerd, oude homepage blijft live.",
  robots: { index: false, follow: false },
  alternates: { canonical: "/" },
};

/**
 * Preview-only homepage concept from Figma “Janssen voetbalschool hero 2”.
 * Live site keeps `/` unchanged until this concept is approved.
 */
export default function NieuwHomepageConceptPage() {
  return (
    <main>
      <Hero2 />
      <GezienBijBar />
      <NiveauSection />
      <TrainingPhotosSection />
    </main>
  );
}
