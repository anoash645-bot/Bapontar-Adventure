"use client";
import { useMemo, useState } from "react";
import { packages, categories } from "@/data/packages";
import { destinations } from "@/data/destinations";
import { useLang } from "@/lib/i18n";
import { PackageCard } from "./PackageCard";
export function Catalog() {
  const { lang } = useLang();
  const [q, setQ] = useState(""), [dest, setDest] = useState(""), [cat, setCat] = useState(""), [dur, setDur] = useState("");
  const list = useMemo(() => packages.filter(p =>
    (!q || (p.name + p.summary.id + p.summary.en).toLowerCase().includes(q.toLowerCase())) &&
    (!dest || p.destinations.includes(dest)) && (!cat || p.category.includes(cat)) &&
    (!dur || (dur === "1" ? p.durationDays === 1 : p.durationDays >= 2))), [q, dest, cat, dur]);
  const t = (a: string, b: string) => (lang === "id" ? a : b);
  return (
    <div>
      <div className="grid gap-3 md:grid-cols-4">
        <label className="md:col-span-4"><span className="sr-only">{t("Cari paket", "Search")}</span><input className="input" type="search" placeholder={t("Cari paket…", "Search packages…")} value={q} onChange={e => setQ(e.target.value)} /></label>
        <label><span className="sr-only">{t("Destinasi", "Destination")}</span><select className="input" value={dest} onChange={e => setDest(e.target.value)}><option value="">{t("Semua destinasi", "All destinations")}</option>{destinations.map(d => <option key={d.slug} value={d.slug}>{d.name}</option>)}</select></label>
        <label><span className="sr-only">{t("Kategori", "Category")}</span><select className="input" value={cat} onChange={e => setCat(e.target.value)}><option value="">{t("Semua kategori", "All categories")}</option>{categories.map(c => <option key={c}>{c}</option>)}</select></label>
        <label><span className="sr-only">{t("Durasi", "Duration")}</span><select className="input" value={dur} onChange={e => setDur(e.target.value)}><option value="">{t("Semua durasi", "Any duration")}</option><option value="1">{t("1 hari", "1 day")}</option><option value="2">{t("2 hari atau lebih", "2+ days")}</option></select></label>
        <button className="btn btn-dark" onClick={() => { setQ(""); setDest(""); setCat(""); setDur(""); }}>{t("Reset filter", "Reset filters")}</button>
      </div>
      {list.length === 0 ? <p className="mt-10 rounded-xl bg-sand-100 p-6">{t("Tidak ada paket yang cocok. Ubah filter atau hubungi kami untuk paket khusus.", "No matching packages. Adjust filters or contact us for a custom trip.")}</p>
        : <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">{list.map(p => <PackageCard key={p.slug} p={p} />)}</div>}
    </div>
  );
}
