import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { destinations } from "@/data/destinations";
import { packages } from "@/data/packages";
import { PageHero } from "@/components/PageHero";
import { Photo } from "@/components/Ph";
import { PackageCard } from "@/components/PackageCard";
import { WaButton } from "@/components/WaButton";
import { T } from "@/lib/i18n";
export const dynamicParams = false;
export const generateStaticParams = () => destinations.map(d => ({ slug: d.slug }));
export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const d = destinations.find(x => x.slug === params.slug); if (!d) return {};
  return { title: `${d.name} – Destinasi`, description: d.summary.id, alternates: { canonical: `/destinations/${d.slug}` } };
}
export default function Page({ params }: { params: { slug: string } }) {
  const d = destinations.find(x => x.slug === params.slug); if (!d) notFound();
  const related = packages.filter(p => p.destinations.includes(d.slug));
  return (
    <main><PageHero title={d.name} sub={d.summary} />
      <div className="wrap sec">
        <div className="aspect-[16/7] overflow-hidden rounded-2xl"><Photo src={d.image} alt={d.name} /></div>
        <p className="mt-8 max-w-2xl text-lg"><T v={d.description} /></p>
        {d.activities.length > 0 && <><h2 className="mt-10 text-2xl"><T v={{ id: "Aktivitas", en: "Activities" }} /></h2><ul className="mt-2 list-disc pl-5">{d.activities.map((a, i) => <li key={i}><T v={a} /></li>)}</ul></>}
        {d.tips.length > 0 && <><h2 className="mt-10 text-2xl"><T v={{ id: "Tips berkunjung", en: "Visitor tips" }} /></h2><ul className="mt-2 list-disc pl-5">{d.tips.map((a, i) => <li key={i}><T v={a} /></li>)}</ul></>}
        <h2 className="mt-10 text-2xl"><T v={{ id: "Paket terkait", en: "Related packages" }} /></h2>
        {related.length ? <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">{related.map(p => <PackageCard key={p.slug} p={p} />)}</div> : <p className="mt-3"><T v={{ id: "Belum ada paket terkait. Tanyakan kepada kami.", en: "No related packages yet. Ask us." }} /></p>}
        <div className="mt-10"><WaButton label={{ id: "Konsultasi via WhatsApp", en: "Consult via WhatsApp" }} cls="btn btn-dark" /></div>
      </div></main>
  );
}
