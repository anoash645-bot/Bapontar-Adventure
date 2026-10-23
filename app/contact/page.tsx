import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { BookingForm } from "@/components/BookingForm";
import { SITE } from "@/data/site-config";
export const metadata: Metadata = { title: "Kontak", description: "Hubungi Bapontar Adventure di Manado untuk merencanakan perjalanan Anda.", alternates: { canonical: "/contact" } };
export default function Page() {
  return <main><PageHero title={{ id: "Kontak", en: "Contact" }} /><div className="wrap sec grid max-w-5xl gap-10 md:grid-cols-[1fr_320px]">
    <BookingForm />
    <aside className="h-fit space-y-2 rounded-2xl bg-sand-100 p-6 text-sm"><p className="font-semibold">{SITE.legalName}</p><p>WhatsApp: {SITE.phoneDisplay}</p><p>{SITE.email}</p><p>{SITE.address}</p><a className="text-aqua-600 underline" href={SITE.instagram} target="_blank" rel="noopener noreferrer">Instagram {SITE.instagramHandle}</a>
      <p className="mt-4 rounded-lg bg-white p-3 text-xs">Waspada penipuan: kontak resmi hanya WhatsApp {SITE.phoneDisplay}. / Scam alert: our only official contact is WhatsApp {SITE.phoneDisplay}.</p></aside></div></main>;
}
