import React from "react";
import type { Metadata } from "next";
import PackagesSection from "@/components/PackagesSection";

export const metadata: Metadata = {
  title: "Pakketten & tarieven",
  description:
    "Bekijk de trainingspakketten van Janssen Voetbalschool in Velden: techniektraining, jaarpakket en 2-op-1 training. Duidelijke tarieven voor jeugdspelers.",
  alternates: { canonical: "/pakketten" },
  openGraph: {
    title: "Pakketten & tarieven | Janssen Voetbalschool",
    description:
      "Trainingspakketten en tarieven voor individuele voetbaltraining in Velden, gemeente Venlo.",
    url: "/pakketten",
  },
};

export default function PakkettenPage() {
  return (
    <main style={{ backgroundColor: "#0f0f0f", color: "#ffffff", minHeight: "100vh" }}>
      <div style={{ paddingTop: "80px" }}>
        <PackagesSection headingOverride="Pakketten & tarieven" headingAs="h1" />
      </div>
    </main>
  );
}
