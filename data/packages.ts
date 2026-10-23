import type { L } from "@/lib/i18n";
export type Pkg = { slug: string; name: string; image?: string; destinations: string[]; category: string[]; durationDays: number; durationLabel: L;
  summary: L; activities: L[]; includes: L[]; excludes: L[]; itinerary: { time: string; text: L }[]; priceIDR: number | null; originalIDR?: number; priceNote?: L; departure?: L; prep: L[]; faqs: { q: L; a: L }[]; spots?: string[]; };
export const categories = ["Island Hopping", "Snorkeling", "Private Trip", "Open Trip", "Adventure"];
const b = (id: string, en: string): L => ({ id, en });
// Sumber: flyer resmi "Open Trip 3 Pulau 7 Spot". Harga promo bisa berubah: periksa & perbarui di sini.
export const packages: Pkg[] = [
  { slug: "open-trip-3-pulau-7-spot", name: "Open Trip 3 Pulau 7 Spot", image: "/images/reef-poster.jpg",
    destinations: ["bunaken", "siladen", "nain"], category: ["Open Trip", "Island Hopping", "Snorkeling"], durationDays: 1,
    durationLabel: b("Konfirmasi jadwal via WhatsApp", "Schedule confirmed via WhatsApp"),
    summary: b("Tiga pulau, tujuh spot: New Bunaken, Siladen, Nain, Pantai Liang, Dolphin Spot, Sunset View, dan 3 spot diving & snorkeling.", "Three islands, seven spots: New Bunaken, Siladen, Nain, Pantai Liang, Dolphin Spot, Sunset View and 3 diving & snorkeling spots."),
    spots: ["New Bunaken", "Siladen", "Nain", "Pantai Liang", "Dolphin Spot", "Sunset View", "3 Spot Diving & Snorkeling"],
    activities: [b("Snorkeling & diving", "Snorkeling & diving"), b("Island hopping", "Island hopping"), b("Dolphin trip (gratis)", "Dolphin trip (free)"), b("Paddleboard (gratis)", "Paddleboard (free)")],
    includes: [
      b("Transportasi long boat 2 deck (PP)", "Two-deck long boat transport (round trip)"), b("Biaya sandar dermaga / kapal Manado", "Manado dock / boat berthing fee"),
      b("Tiket masuk semua destinasi / tiap pulau", "Entry tickets to all destinations / each island"), b("Asuransi", "Insurance"), b("Toilet di kapal", "On-board toilet"),
      b("Free perahu di Nain (penyeberangan)", "Free boat crossing at Nain"), b("Payung pantai", "Beach umbrellas"), b("Guide profesional & tour leader", "Professional guide & tour leader"),
      b("Kapten kapal dan crew berpengalaman", "Experienced captain and crew"),
      b("Foto & video bawah air (GoPro Hero12 / DJI Action 4 Pro / Ace Pro 2)", "Underwater photo & video (GoPro Hero12 / DJI Action 4 Pro / Ace Pro 2)"),
      b("Kamera DSLR & mirrorless, Insta360 x3", "DSLR & mirrorless cameras, Insta360 x3"), b("Foto dokumentasi darat sepuasnya + helper foto", "Unlimited land photo documentation + photo helper"),
      b("Drone DJI (Air 3S, Mavic 2 Pro) dengan pilot profesional", "DJI drone (Air 3S, Mavic 2 Pro) with professional pilot"),
      b("Life jacket, ring buoy, P3K standar", "Life jackets, ring buoys, standard first aid kit"),
      b("Morning breakfast & makan 2x (100% halal)", "Morning breakfast & 2 meals (100% halal)"), b("Air mineral, minuman dingin, tissue basah & kering", "Mineral water, cold drinks, wet & dry tissues"),
      b("Cool box 95 liter, charger handphone", "95 L cool box, phone chargers"), b("Audio musik, speaker Huper JL15 300 watt, mic & karaoke", "Music system, Huper JL15 300 W speaker, mics & karaoke"),
    ],
    excludes: [], itinerary: [], priceIDR: 160000, originalIDR: 250000,
    priceNote: b("Harga promo per orang sesuai flyer resmi. Konfirmasi harga & ketersediaan sebelum berangkat.", "Promo price per person per the official flyer. Confirm price & availability before departure."),
    prep: [b("Pakaian renang & handuk", "Swimwear & towel"), b("Tabir surya ramah terumbu karang", "Reef-safe sunscreen")], faqs: [] },
  { slug: "private-trip-north-sulawesi", name: "Private Trip", image: "/images/boats-shore.jpg", destinations: ["bunaken", "manado-north-sulawesi"], category: ["Private Trip", "Adventure"], durationDays: 1,
    durationLabel: b("Fleksibel", "Flexible"), summary: b("Perjalanan privat untuk keluarga, kelompok, atau acara. Rute dan harga disesuaikan kebutuhan Anda.", "A private trip for families, groups or events. Route and price tailored to you."),
    activities: [], includes: [], excludes: [], itinerary: [], priceIDR: null, prep: [], faqs: [] },
];
