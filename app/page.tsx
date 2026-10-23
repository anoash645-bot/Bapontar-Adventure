import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { T } from "@/lib/i18n";
import { WaButton } from "@/components/WaButton";
import { PackageCard } from "@/components/PackageCard";
import { Photo } from "@/components/Ph";
import { Gallery } from "@/components/Gallery";
import { packages } from "@/data/packages";
import { destinations } from "@/data/destinations";
import { SITE } from "@/data/site-config";
import { testimonials } from "@/data/testimonials";
export default function Home() {
  return (
    <main>
      <section className="relative bg-ocean-950 text-white">
        <div className="absolute inset-0 opacity-60"><Photo src="/images/reef-poster.jpg" alt="Terumbu karang dan ikan di laut Sulawesi Utara" /><video className="absolute inset-0 h-full w-full object-cover motion-reduce:hidden" autoPlay muted loop playsInline preload="metadata" poster="/images/reef-poster.jpg" aria-hidden="true"><source src="/videos/reef.mp4" type="video/mp4" /></video></div>
        <div className="absolute inset-0 bg-gradient-to-t from-ocean-950 via-ocean-950/40 to-transparent" />
        <div className="wrap relative flex min-h-[88vh] flex-col justify-end pb-16 pt-32 hero-in">
          <h1 className="max-w-3xl text-5xl md:text-7xl">Explore the Beauty of North Sulawesi</h1>
          <p className="mt-5 max-w-xl text-lg text-white/85">Discover unforgettable island adventures, crystal-clear waters, and extraordinary marine life with Bapontar Adventure.</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="/packages" className="btn btn-primary">Jelajahi Paket Wisata</Link>
            <WaButton label={{ id: "Konsultasi via WhatsApp", en: "Consult via WhatsApp" }} cls="btn btn-ghost" />
          </div>
          <p className="mt-8 text-sm text-white/70">{destinations.slice(0, 3).map(d => d.name).join("  ·  ")}</p>{SITE.googleRating && <p className="mt-2 text-sm text-white/80">★ {SITE.googleRating.score} Google · {SITE.googleRating.count} <T v={{ id: "ulasan", en: "reviews" }} /></p>}
        </div>
      </section>

      <section className="sec"><div className="wrap">
        <h2 className="text-3xl md:text-4xl"><T v={{ id: "Destinasi unggulan", en: "Featured destinations" }} /></h2>
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {destinations.map(d => <Link key={d.slug} href={`/destinations/${d.slug}`} className="group block">
            <div className="aspect-[3/4] overflow-hidden rounded-2xl"><Photo src={d.image} alt={d.name} className="transition-transform duration-500 group-hover:scale-105" /></div>
            <h3 className="mt-3 text-lg font-semibold">{d.name}</h3><p className="text-sm text-ink/70"><T v={d.summary} /></p></Link>)}
        </div></div></section>

      <section className="sec bg-sand-100"><div className="wrap">
        <div className="flex items-end justify-between"><h2 className="text-3xl md:text-4xl"><T v={{ id: "Paket wisata", en: "Tour packages" }} /></h2>
          <Link href="/packages" className="flex items-center gap-1 text-sm font-semibold text-aqua-600"><T v={{ id: "Semua paket", en: "All packages" }} /><ArrowRight size={16} aria-hidden /></Link></div>
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">{packages.slice(0, 3).map(p => <PackageCard key={p.slug} p={p} />)}</div></div></section>

      <section className="sec"><div className="wrap">
        <h2 className="text-3xl md:text-4xl"><T v={{ id: "Mengapa Bapontar Adventure", en: "Why Bapontar Adventure" }} /></h2>
        <ul className="mt-8 grid gap-6 md:grid-cols-3">
          {[{ id: "Pilihan wisata bahari: island hopping dan snorkeling.", en: "Marine experiences: island hopping and snorkeling." },
            { id: "Konsultasi sebelum perjalanan dan informasi paket yang jelas.", en: "Pre-trip consultation and clear package information." },
            { id: "Pemesanan mudah lewat WhatsApp, dengan pendampingan pelanggan.", en: "Easy booking via WhatsApp, with customer support." }]
            .map((v, i) => <li key={i} className="border-l-4 border-aqua-400 pl-4 text-lg"><T v={v} /></li>)}
        </ul></div></section>

      <section id="galeri" className="sec bg-sand-100"><div className="wrap">
        <h2 className="mb-8 text-3xl md:text-4xl"><T v={{ id: "Galeri", en: "Gallery" }} /></h2><Gallery /></div></section>

      <section className="sec bg-ocean-950 text-white"><div className="wrap"><h2 className="text-3xl md:text-4xl"><T v={{ id: "Di bawah permukaan", en: "Beneath the surface" }} /></h2>
        <div className="mt-8 grid gap-4 md:grid-cols-2">{[["turtle","Penyu di perairan biru"],["reef","Terumbu karang dan ikan"]].map(([n,a]) => <video key={n} controls preload="none" playsInline poster={`/images/${n}-poster.jpg`} aria-label={a} className="aspect-video w-full rounded-2xl bg-black"><source src={`/videos/${n}.mp4`} type="video/mp4" /></video>)}</div></div></section>
      <section className="sec"><div className="wrap">
        <h2 className="text-3xl md:text-4xl"><T v={{ id: "Ulasan pelanggan", en: "Customer reviews" }} /></h2>
        {testimonials.length === 0 ? <p className="mt-6 rounded-xl bg-sand-100 p-6"><T v={{ id: "Ulasan asli pelanggan akan ditampilkan di sini.", en: "Verified customer reviews will appear here." }} /></p>
          : <div className="mt-8 grid gap-6 md:grid-cols-3">{testimonials.map((t, i) => <blockquote key={i} className="rounded-2xl border p-6"><p>{t.text}</p><footer className="mt-3 text-sm font-semibold">{t.name}{t.origin && `, ${t.origin}`}</footer></blockquote>)}</div>}
      </div></section>

      <section className="bg-ocean-900 py-20 text-center text-white"><div className="wrap">
        <h2 className="text-4xl">Your Next Adventure Starts Here</h2>
        <p className="mx-auto mt-3 max-w-xl text-white/80">Planning your trip to North Sulawesi? Let us help you find the right adventure.</p>
        <div className="mt-6"><WaButton label={{ id: "Plan Your Trip", en: "Plan Your Trip" }} /></div></div></section>
    </main>
  );
}
