import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import { preload } from "react-dom";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import ScrollHandler from "@/components/ScrollHandler";
import { ContactModalProvider } from "@/components/contact/ContactModalContext";
import { Suspense } from "react";
import { Analytics } from "@vercel/analytics/next";
import { getSiteUrl } from "@/lib/site";

const montserrat = Montserrat({
  subsets: ["latin"],
  display: "swap",
  preload: true,
  weight: ["500", "600", "700", "800", "900"],
});

const siteUrl = getSiteUrl();
const siteName = "Janssen Voetbalschool";
const siteDescription =
  "Extra voetbaltraining in Limburg naast je club: kleine groepjes in Velden (gemeente Venlo). Individuele voetbaltrainer Jelte Janssen — techniek en zelfvertrouwen voor jeugdspelers uit heel Limburg.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${siteName} | Extra voetbaltraining Limburg · Venlo`,
    template: `%s | ${siteName}`,
  },
  description: siteDescription,
  keywords: [
    "voetbaltraining Limburg",
    "extra voetbaltraining Limburg",
    "voetbaltraining naast club",
    "voetbaltraining kleine groepjes",
    "individuele voetbaltrainer Venlo",
    "individuele voetbaltrainer Limburg",
    "jeugd voetbaltraining Limburg",
    "voetbaltraining Velden",
    "voetbaltraining Venlo",
  ],
  alternates: {
    canonical: "/",
  },
  /** Favicon: `app/icon.tsx` + `app/apple-icon.tsx` (PNG) — Google SERP werkt slecht met alleen SVG */
  icons: {
    icon: [{ url: "/icon", sizes: "48x48", type: "image/png" }],
    apple: [{ url: "/apple-icon", sizes: "180x180", type: "image/png" }],
  },
  openGraph: {
    type: "website",
    locale: "nl_NL",
    title: `${siteName} | Extra voetbaltraining Limburg · Venlo`,
    description: siteDescription,
    siteName,
    url: "/",
    /** Raster OG via `app/opengraph-image.tsx` (ImageResponse) — crawlers prefer PNG over SVG */
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteName} | Extra voetbaltraining Limburg · Venlo`,
    description: siteDescription,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Discover sharp LCP hero poster in the initial document (no JS delay)
  preload("/hero-studio-glow.jpg", { as: "image", fetchPriority: "high" });

  return (
    <html lang="nl">
      <body className={montserrat.className}>
        <Suspense fallback={null}>
          <ScrollHandler />
        </Suspense>
        <ContactModalProvider>
          <Navbar />
          {children}
          <WhatsAppButton />
          <Footer />
        </ContactModalProvider>
        <Analytics />
      </body>
    </html>
  );
}
