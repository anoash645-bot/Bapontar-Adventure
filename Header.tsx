"use client";
import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { useLang, T } from "@/lib/i18n";
import { WaButton } from "./WaButton";
const nav = [
  { href: "/", l: { id: "Beranda", en: "Home" } }, { href: "/packages", l: { id: "Paket Wisata", en: "Tour Packages" } },
  { href: "/destinations/bunaken", l: { id: "Destinasi", en: "Destinations" } }, { href: "/#galeri", l: { id: "Galeri", en: "Gallery" } },
  { href: "/about", l: { id: "Tentang Kami", en: "About" } }, { href: "/faq", l: { id: "FAQ", en: "FAQ" } },
];
export function Header() {
  const [open, setOpen] = useState(false); const { lang, setLang } = useLang();
  return (
    <header className="absolute inset-x-0 top-0 z-30 text-white">
      <div className="wrap flex h-16 items-center justify-between">
        <Link href="/" className="font-display text-xl font-semibold">Bapontar <span className="text-aqua-400">Adventure</span></Link>
        <nav className="hidden items-center gap-6 text-sm lg:flex" aria-label="Utama">
          {nav.map(n => <Link key={n.href} href={n.href} className="hover:text-aqua-400"><T v={n.l} /></Link>)}
        </nav>
        <div className="flex items-center gap-2">
          <div className="flex rounded-lg border border-white/40 text-xs" role="group" aria-label="Language">
            {(["id", "en"] as const).map(l => <button key={l} onClick={() => setLang(l)} aria-pressed={lang === l} className={`px-3 py-2 min-h-[40px] ${lang === l ? "bg-white text-ocean-900" : ""}`}>{l.toUpperCase()}</button>)}
          </div>
          <WaButton label={{ id: "Pesan Sekarang", en: "Book Now" }} cls="btn btn-primary hidden sm:inline-flex" />
          <button className="lg:hidden p-2" aria-label="Menu" aria-expanded={open} onClick={() => setOpen(!open)}>{open ? <X /> : <Menu />}</button>
        </div>
      </div>
      {open && <nav className="lg:hidden bg-ocean-950 px-5 pb-5" aria-label="Mobile">
        {nav.map(n => <Link key={n.href} href={n.href} onClick={() => setOpen(false)} className="block border-b border-white/10 py-3"><T v={n.l} /></Link>)}
        <div className="pt-4"><WaButton label={{ id: "Pesan Sekarang", en: "Book Now" }} cls="btn btn-primary w-full" /></div>
      </nav>}
    </header>
  );
}
