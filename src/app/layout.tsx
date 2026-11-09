import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import ScrollHandler from "@/components/ScrollHandler";
import { Suspense } from "react";
import { Analytics } from "@vercel/analytics/next";
import { getSiteUrl } from "@/lib/site";

const inter = Inter({ subsets: ["latin"] });

const siteUrl = getSiteUrl();
const siteName = "Janssen Voetbalschool";
const siteDescription =
  "Professionele voetbaltraining in Velden, gemeente Venlo. Individuele techniektraining voor jeugdspelers in de regio Venlo. Vraag een gratis proefles aan!";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${siteName} | Voetbaltraining in Velden & Gemeente Venlo`,
    template: `%s | ${siteName}`,
  },
  description: siteDescription,
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
    title: `${siteName} | Voetbaltraining in Velden & Gemeente Venlo`,
    description: siteDescription,
    siteName,
    url: "/",
    images: [{ url: "/og-image.svg", width: 1200, height: 630, alt: siteName }],
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteName} | Voetbaltraining in Velden & Gemeente Venlo`,
    description: siteDescription,
    images: ["/og-image.svg"],
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
  return (
    <html lang="nl">
      <body className={inter.className}>
        <Suspense fallback={null}>
          <ScrollHandler />
        </Suspense>
        <Navbar />
        {children}
        <WhatsAppButton />
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
