import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { Catalog } from "@/components/Catalog";
export const metadata: Metadata = { title: "Paket Wisata Bunaken & Sulawesi Utara", description: "Pilih paket island hopping, snorkeling, dan private trip di Manado dan Sulawesi Utara.", alternates: { canonical: "/packages" } };
export default function Page() {
  return <main><PageHero title={{ id: "Paket Wisata", en: "Tour Packages" }} sub={{ id: "Filter berdasarkan destinasi, durasi, dan jenis aktivitas.", en: "Filter by destination, duration and activity." }} /><div className="wrap sec"><Catalog /></div></main>;
}
