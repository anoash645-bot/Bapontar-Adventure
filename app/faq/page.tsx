import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { faqs } from "@/data/faq";
import { T } from "@/lib/i18n";
export const metadata: Metadata = { title: "FAQ", description: "Pertanyaan umum tentang pemesanan paket wisata Bapontar Adventure.", alternates: { canonical: "/faq" } };
export default function Page() {
  return <main><PageHero title="FAQ" /><div className="wrap sec max-w-3xl">{faqs.map((f, i) => <details key={i} className="mb-3 rounded-xl border p-4"><summary className="cursor-pointer font-medium"><T v={f.q} /></summary><p className="mt-2"><T v={f.a} /></p></details>)}</div></main>;
}
