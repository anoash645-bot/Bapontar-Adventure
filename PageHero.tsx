import { T, L } from "@/lib/i18n";
export function PageHero({ title, sub }: { title: string | L; sub?: L }) {
  return <section className="bg-ocean-900 pb-14 pt-32 text-white"><div className="wrap"><h1 className="text-4xl md:text-5xl">{typeof title === "string" ? title : <T v={title} />}</h1>{sub && <p className="mt-3 max-w-2xl text-white/80"><T v={sub} /></p>}</div></section>;
}
