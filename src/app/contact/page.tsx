import React from "react";
import type { Metadata } from "next";
import ContactSection from "@/components/ContactSection";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Neem contact op met Janssen Voetbalschool in Velden (gemeente Venlo). Sportpark Theo Lommen, Schandeloseweg 1a, 5941 CP Velden. Vragen over trainingen of de Mini Voetbalschool? Ik help je graag.",
  alternates: { canonical: "/contact" },
  openGraph: {
    title: "Contact | Janssen Voetbalschool",
    description:
      "Contact Janssen Voetbalschool — Sportpark Theo Lommen, Schandeloseweg 1a, 5941 CP Velden.",
    url: "/contact",
  },
};

type ContactPageProps = {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
};

export default async function ContactPage({ searchParams }: ContactPageProps) {
  const params = await searchParams;
  const onderwerp = typeof params.onderwerp === "string" ? params.onderwerp : undefined;

  return (
    <main style={{ backgroundColor: "#0f0f0f", color: "#ffffff", minHeight: "100vh" }}>
      <div style={{ paddingTop: "80px" }}>
        <ContactSection
          aanvraagType={onderwerp?.toLowerCase().includes("mini") ? "mini-voetbalschool" : "contact"}
          initialSubject={onderwerp}
          heading="Contact"
          description="Stel je vraag of plan een gesprek. Ik reageer zo snel mogelijk."
          headingAs="h1"
        />
      </div>
    </main>
  );
}
