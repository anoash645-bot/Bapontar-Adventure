import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { T } from "@/lib/i18n";
import { SITE } from "@/data/site-config";
export const metadata: Metadata = { title: "Tentang Kami", description: "Kenali Bapontar Adventure (PT Bapontar Mega Perkasa), operator wisata bahari di Manado, Sulawesi Utara.", alternates: { canonical: "/about" } };
const values = ["Integritas", "Profesionalisme", "Inovasi", "Kepercayaan"];
export default function Page() {
  return <main><PageHero title={{ id: "Tentang Kami", en: "About Us" }} /><div className="wrap sec max-w-3xl space-y-8 text-lg">
    <p><T v={{ id: `${SITE.legalName} bergerak di bidang pariwisata, perdagangan umum, jasa, dan konstruksi, dengan layanan Bapontar Adventure berupa open trip dan private trip ke Bunaken, Siladen, dan sekitarnya, serta dokumentasi profesional, rental mobil, dan acara gathering.`, en: `${SITE.legalName} operates in tourism, general trade, services and construction. Bapontar Adventure offers open and private trips to Bunaken, Siladen and nearby islands, plus professional documentation, car rental and group gatherings.` }} /></p>
    <section><h2 className="text-2xl"><T v={{ id: "Nilai perusahaan", en: "Our values" }} /></h2><ul className="mt-3 flex flex-wrap gap-2 text-base">{values.map(v => <li key={v} className="rounded-full bg-sand-200 px-4 py-2">{v}</li>)}</ul></section>
    <section><h2 className="text-2xl"><T v={{ id: "Legalitas", en: "Company details" }} /></h2>
      <dl className="mt-3 grid grid-cols-[auto_1fr] gap-x-6 gap-y-2 text-base"><dt className="font-semibold">Nama</dt><dd>{SITE.legalName}</dd><dt className="font-semibold">NIB</dt><dd>{SITE.legal.nib}</dd><dt className="font-semibold">KBLI</dt><dd>{SITE.legal.kbli}</dd><dt className="font-semibold">Status</dt><dd>{SITE.legal.registeredAt}</dd><dt className="font-semibold">Alamat</dt><dd>{SITE.address}</dd></dl></section>
  </div></main>;
}
