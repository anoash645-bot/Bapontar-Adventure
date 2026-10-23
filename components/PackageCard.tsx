import Link from "next/link";
import { Clock } from "lucide-react";
import type { Pkg } from "@/data/packages";
import { T } from "@/lib/i18n";
import { Photo } from "./Ph";
import { WaButton } from "./WaButton";
import { PriceLabel } from "./PriceLabel";
export function PackageCard({ p }: { p: Pkg }) {
  return (
    <article className="flex flex-col overflow-hidden rounded-2xl border border-ocean-900/10 bg-white">
      <div className="aspect-[4/3]"><Photo src={p.image} alt={p.name} /></div>
      <div className="flex flex-1 flex-col p-5">
        <h3 className="text-xl font-semibold">{p.name}</h3>
        <p className="mt-1 flex items-center gap-1 text-sm text-ocean-700"><Clock size={14} aria-hidden /><T v={p.durationLabel} /></p>
        <p className="mt-3 flex-1 text-sm text-ink/80"><T v={p.summary} /></p>
        <p className="mt-4 font-semibold"><PriceLabel idr={p.priceIDR} /></p>
        <div className="mt-4 flex gap-2">
          <Link href={`/packages/${p.slug}`} className="btn btn-dark flex-1"><T v={{ id: "Lihat Detail", en: "View Details" }} /></Link>
          <WaButton pkg={p.name} label={{ id: "Pesan Paket", en: "Book" }} cls="btn border border-aqua-600 text-aqua-600 flex-1" />
        </div>
      </div>
    </article>
  );
}
