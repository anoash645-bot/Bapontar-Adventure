import { Star } from "lucide-react";
import type { GData } from "@/lib/google-reviews";
import { T } from "@/lib/i18n";
export function GoogleReviews({ data }: { data: GData }) {
  return (
    <div>
      {data.rating && <p className="mt-2 text-ink/70">★ {data.rating.toFixed(1).replace(".", ",")} · {data.count} <T v={{ id: "ulasan di Google", en: "reviews on Google" }} /></p>}
      <div className="mt-8 grid gap-6 md:grid-cols-3">
        {data.reviews.slice(0, 3).map((v, i) => (
          <figure key={i} className="flex flex-col rounded-2xl border border-ocean-900/10 p-6">
            <div className="flex items-center gap-3">
              {v.photo && <img src={v.photo} alt="" width={40} height={40} loading="lazy" referrerPolicy="no-referrer" className="h-10 w-10 rounded-full" />}
              <figcaption><a href={v.uri} target="_blank" rel="noopener noreferrer" className="font-semibold underline-offset-2 hover:underline">{v.name}</a>
                <p className="text-xs text-ink/60">{v.when}</p></figcaption>
            </div>
            <p className="mt-3 flex text-aqua-600" aria-label={`${v.rating} / 5`}>{Array.from({ length: Math.round(v.rating) }).map((_, k) => <Star key={k} size={16} fill="currentColor" aria-hidden />)}</p>
            <blockquote className="mt-3 line-clamp-6 text-sm">{v.text}</blockquote>
          </figure>
        ))}
      </div>
      <p className="mt-4 text-xs text-ink/60">{data.mapsUri ? <a href={data.mapsUri} target="_blank" rel="noopener noreferrer" className="underline">Google Maps</a> : "Google Maps"} · <T v={{ id: "Pilihan ulasan terbaru/paling relevan dari Google.", en: "Selection of recent/relevant reviews from Google." }} /></p>
    </div>
  );
}
