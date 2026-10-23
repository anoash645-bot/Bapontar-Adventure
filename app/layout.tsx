import type { Metadata } from "next";
import { Fraunces, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { LangProvider } from "@/lib/i18n";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { FloatingWa } from "@/components/WaButton";
import { SITE } from "@/data/site-config";
const display = Fraunces({ subsets: ["latin"], variable: "--font-display", display: "swap" });
const sans = Plus_Jakarta_Sans({ subsets: ["latin"], variable: "--font-sans", display: "swap" });
export const metadata: Metadata = {
  metadataBase: new URL(SITE.url || "http://localhost:3000"),
  title: { default: "Bapontar Adventure – Wisata Bahari Manado & Sulawesi Utara", template: "%s | Bapontar Adventure" },
  description: "Paket wisata bahari, island hopping, dan snorkeling di Manado dan Sulawesi Utara bersama Bapontar Adventure.",
  openGraph: { type: "website", siteName: "Bapontar Adventure" },
};
export default function RootLayout({ children }: { children: React.ReactNode }) {
  const org = { "@context": "https://schema.org", "@type": "TravelAgency", name: SITE.name, legalName: SITE.legalName, ...(SITE.url && { url: SITE.url }), telephone: `+${SITE.WHATSAPP_NUMBER}`, email: SITE.email, sameAs: [SITE.instagram], address: { "@type": "PostalAddress", streetAddress: "Jl. Sam Ratulangi No. 61, Tanjung Batu, Wanea", addressLocality: "Manado", addressRegion: "Sulawesi Utara", addressCountry: "ID" }, areaServed: "North Sulawesi, Indonesia" };
  return (
    <html lang="id" className={`${display.variable} ${sans.variable}`}>
      <body><LangProvider><Header />{children}<Footer /><FloatingWa /></LangProvider>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(org) }} /></body>
    </html>
  );
}
