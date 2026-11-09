import React from "react";
import ContactSection from "@/components/ContactSection";

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
        />
      </div>
    </main>
  );
}

