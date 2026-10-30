import Link from "next/link";
import { SITE } from "@/data/site-config";
import { T } from "@/lib/i18n";
export function Footer() {
  return (
    <footer className="bg-ocean-950 text-white/80 py-12">
      <div className="wrap grid gap-8 md:grid-cols-3">
        <div><p className="font-display text-xl text-white">Bapontar Adventure</p>
          <p className="mt-2 text-sm"><T v={{ id: "Wisata bahari, island hopping, dan petualangan di Manado, Sulawesi Utara.", en: "Marine tours, island hopping and adventures in Manado, North Sulawesi." }} /></p>
          <p className="mt-2 text-xs text-white/60">{SITE.legalName}</p></div>
        <ul className="space-y-2 text-sm">{[["/packages", "Paket / Packages"], ["/about", "Tentang / About"], ["/contact", "Kontak / Contact"], ["/faq", "FAQ"]].map(([h, l]) => <li key={h}><Link href={h} className="hover:text-aqua-400">{l}</Link></li>)}</ul>
        <ul className="space-y-2 text-sm">
          <li>WhatsApp: {SITE.phoneDisplay}</li><li>{SITE.email}</li><li>{SITE.address}</li>
          <li><a href={SITE.instagram} rel="noopener noreferrer" target="_blank" className="hover:text-aqua-400">Instagram {SITE.instagramHandle}</a></li>
        </ul>
      </div>
      <p className="wrap mt-8 rounded-xl bg-white/10 p-4 text-sm"><T v={{ id: `Waspada penipuan: kontak resmi Bapontar Adventure hanya WhatsApp ${SITE.phoneDisplay}. Jangan transfer ke nomor lain.`, en: `Beware of scams: Bapontar Adventure's only official contact is WhatsApp ${SITE.phoneDisplay}. Do not pay any other number.` }} /></p>
      <p className="wrap mt-6 text-xs text-white/50">© {new Date().getFullYear()} {SITE.legalName}. <T v={{ id: "Situs ini tidak memproses pembayaran atau menyimpan data pelanggan.", en: "This site does not process payments or store customer data." }} /></p>
    </footer>
  );
}
