import React from "react";
import type { Metadata } from "next";
import ContactSection from "@/components/ContactSection";

export const metadata: Metadata = {
  title: "Proefles aanvragen",
  description:
    "Vraag een gratis proefles aan bij Janssen Voetbalschool in Velden, gemeente Venlo. Individuele voetbaltraining voor jeugdspelers — ik plan samen met jou een moment in.",
  alternates: { canonical: "/proefles-aanvragen" },
  openGraph: {
    title: "Proefles aanvragen | Janssen Voetbalschool",
    description:
      "Vraag een proefles aan voor individuele voetbaltraining in Velden (gemeente Venlo).",
    url: "/proefles-aanvragen",
  },
};

export default function ProeflesAanvragenPage() {
  return (
    <main style={{ backgroundColor: "#0f0f0f", color: "#ffffff", minHeight: "100vh" }}>
      <div style={{ paddingTop: "80px" }}>
        <ContactSection
          aanvraagType="proefles"
          heading="Proefles aanvragen"
          description="Laat je gegevens achter en ik neem contact met je op om de proefles in te plannen."
          submitLabel="Proefles aanvragen"
          initialSubject="Proefles aanvraag"
          headingAs="h1"
        />
      </div>
    </main>
  );
}
