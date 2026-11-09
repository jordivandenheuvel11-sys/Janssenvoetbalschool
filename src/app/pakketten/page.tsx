import React from "react";
import PackagesSection from "@/components/PackagesSection";

export default function PakkettenPage() {
  return (
    <main style={{ backgroundColor: "#0f0f0f", color: "#ffffff", minHeight: "100vh" }}>
      <div style={{ paddingTop: "80px" }}>
        <PackagesSection headingOverride="Pakketten & tarieven" />
      </div>
    </main>
  );
}

