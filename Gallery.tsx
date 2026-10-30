"use client";
import { useState } from "react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { gallery } from "@/data/gallery";
import { Photo } from "./Ph";
import { useLang } from "@/lib/i18n";
export function Gallery() {
  const { lang } = useLang(); const tag = lang === "id" ? "Ilustrasi" : "Illustration"; const [i, setI] = useState<number | null>(null); const n = gallery.length;
  return (
    <>
      <div className="grid grid-cols-2 gap-3 md:grid-cols-4 md:auto-rows-[200px]">
        {gallery.map((g, k) => <button key={k} onClick={() => setI(k)} aria-label={g.alt} className={`relative overflow-hidden rounded-2xl aspect-square md:aspect-auto ${k === 0 ? "md:col-span-2 md:row-span-2" : ""}`}><Photo src={g.src} alt={g.alt} />{g.illustration && <span className="absolute bottom-2 left-2 rounded bg-black/60 px-2 py-0.5 text-xs text-white">{tag}</span>}</button>)}
      </div>
      {i !== null && <div role="dialog" aria-modal="true" aria-label="Gallery" className="fixed inset-0 z-50 grid place-items-center bg-black/90 p-4" onKeyDown={e => { if (e.key === "Escape") setI(null); if (e.key === "ArrowRight") setI((i + 1) % n); if (e.key === "ArrowLeft") setI((i - 1 + n) % n); }}>
        <button autoFocus aria-label="Close" className="absolute right-4 top-4 text-white" onClick={() => setI(null)}><X /></button>
        <button aria-label="Previous" className="absolute left-3 text-white" onClick={() => setI((i - 1 + n) % n)}><ChevronLeft size={36} /></button>
        <div className="relative flex h-[70vh] w-full max-w-4xl justify-center"><Photo src={gallery[i].src} alt={gallery[i].alt} className="rounded-xl object-contain" />{gallery[i].illustration && <span className="absolute bottom-6 rounded bg-black/60 px-3 py-1 text-sm text-white">{tag}</span>}</div>
        <button aria-label="Next" className="absolute right-3 text-white" onClick={() => setI((i + 1) % n)}><ChevronRight size={36} /></button>
      </div>}
    </>
  );
}
