import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { packages } from "@/data/packages";
import { destinations } from "@/data/destinations";
import { PageHero } from "@/components/PageHero";
import { Photo } from "@/components/Ph";
import { WaButton } from "@/components/WaButton";
import { PriceLabel } from "@/components/PriceLabel";
import { T, L } from "@/lib/i18n";
export const dynamicParams = false;
export const generateStaticParams = () => packages.map(p => ({ slug: p.slug }));
export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const p = packages.find(x => x.slug === params.slug); if (!p) return {};
  return { title: p.name, description: p.summary.id, alternates: { canonical: `/packages/${p.slug}` }, openGraph: { title: p.name, description: p.summary.id } };
}
const List = ({ title, items }: { title: L; items: L[] }) => (
  <section className="mt-10"><h2 className="text-2xl"><T v={title} /></h2>
    {items.length ? <ul className="mt-3 list-disc space-y-1 pl-5">{items.map((i, k) => <li key={k}><T v={i} /></li>)}</ul>
      : <p className="mt-3 text-ink/70"><T v={{ id: "Akan dikonfirmasi saat konsultasi.", en: "To be confirmed during consultation." }} /></p>}</section>
);
export default function Page({ params }: { params: { slug: string } }) {
  const p = packages.find(x => x.slug === params.slug); if (!p) notFound();
  return (
    <main><PageHero title={p.name} sub={p.summary} />
      <div className="wrap sec grid gap-10 lg:grid-cols-[1fr_340px]">
        <div>
          <div className="aspect-[16/9] overflow-hidden rounded-2xl"><Photo src={p.image} alt={p.name} /></div>
          <p className="mt-6"><strong><T v={{ id: "Destinasi: ", en: "Destinations: " }} /></strong>{p.destinations.map((s, i) => { const d = destinations.find(x => x.slug === s); return d ? <span key={s}>{i > 0 && ", "}<Link className="text-aqua-600 underline" href={`/destinations/${s}`}>{d.name}</Link></span> : null; })}</p>
          {p.spots && <List title={{ id: "Spot kunjungan", en: "Spots" }} items={p.spots.map(x => ({ id: x, en: x }))} />}<List title={{ id: "Aktivitas", en: "Activities" }} items={p.activities} />
          <section className="mt-10"><h2 className="text-2xl"><T v={{ id: "Itinerary", en: "Itinerary" }} /></h2>
            {p.itinerary.length ? <ol className="mt-3 space-y-2">{p.itinerary.map((s, i) => <li key={i}><strong>{s.time}</strong> – <T v={s.text} /></li>)}</ol> : <p className="mt-3 text-ink/70"><T v={{ id: "Itinerary rinci dikirim setelah konsultasi.", en: "Detailed itinerary shared after consultation." }} /></p>}</section>
          <List title={{ id: "Sudah termasuk", en: "Included" }} items={p.includes} />
          <List title={{ id: "Tidak termasuk", en: "Not included" }} items={p.excludes} />
          <List title={{ id: "Persiapan perjalanan", en: "What to prepare" }} items={p.prep} />
          {p.faqs.length > 0 && <section className="mt-10"><h2 className="text-2xl">FAQ</h2>{p.faqs.map((f, i) => <details key={i} className="mt-2 rounded-xl border p-4"><summary className="cursor-pointer font-medium"><T v={f.q} /></summary><p className="mt-2"><T v={f.a} /></p></details>)}</section>}
        </div>
        <aside className="h-fit rounded-2xl bg-sand-100 p-6 lg:sticky lg:top-6">
          <p className="text-sm"><T v={{ id: "Harga", en: "Price" }} /></p>{p.originalIDR && <p className="text-sm line-through text-ink/50">Rp{p.originalIDR.toLocaleString("id-ID")}</p>}<p className="text-2xl font-semibold"><PriceLabel idr={p.priceIDR} /></p>{p.priceNote && <p className="mt-1 text-xs text-ink/70"><T v={p.priceNote} /></p>}
          <p className="mt-1 text-sm"><T v={p.durationLabel} /></p>
          <p className="mt-1 text-sm">{p.departure ? <T v={p.departure} /> : <T v={{ id: "Titik keberangkatan dikonfirmasi saat pemesanan.", en: "Departure point confirmed on booking." }} />}</p>
          <div className="mt-5"><WaButton pkg={p.name} label={{ id: "Pesan via WhatsApp", en: "Book via WhatsApp" }} cls="btn btn-dark w-full" /></div>
        </aside>
      </div></main>
  );
}
