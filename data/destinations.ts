import type { L } from "@/lib/i18n";
export type Destination = { slug: string; name: string; image?: string; summary: L; description: L; activities: L[]; tips: L[]; };
// image: taruh file di /public/images lalu isi "/images/nama.jpg". Kosong = placeholder.
export const destinations: Destination[] = [
  { slug: "bunaken", name: "Bunaken Island", image: "/images/bunaken-view.jpg",
    summary: { id: "Pulau di kawasan Taman Nasional Bunaken yang dikenal untuk snorkeling dan penyelaman.", en: "An island in Bunaken National Park, known for snorkeling and diving." },
    description: { id: "Bunaken berada di perairan utara Manado. Hubungi kami untuk memastikan titik snorkeling, waktu tempuh, dan biaya yang berlaku untuk jadwal Anda.", en: "Bunaken lies off Manado's northern coast. Contact us to confirm snorkeling spots, travel time and applicable fees for your dates." },
    activities: [{ id: "Snorkeling", en: "Snorkeling" }, { id: "Island hopping", en: "Island hopping" }],
    tips: [{ id: "Bawa tabir surya ramah terumbu karang dan baju ganti.", en: "Bring reef-safe sunscreen and a change of clothes." }] },
  { slug: "siladen", name: "Siladen Island",
    summary: { id: "Pulau kecil di dekat Bunaken. Ketersediaan di paket tertentu perlu dikonfirmasi.", en: "A small island near Bunaken. Availability per package must be confirmed." },
    description: { id: "Informasi detail Siladen akan dilengkapi setelah dikonfirmasi oleh tim Bapontar Adventure.", en: "Detailed Siladen information will be added once confirmed by the Bapontar Adventure team." },
    activities: [{ id: "Island hopping", en: "Island hopping" }], tips: [] },
  { slug: "nain", name: "Nain Island",
    summary: { id: "Pulau di perairan Manado. Ketersediaan di paket tertentu perlu dikonfirmasi.", en: "An island off Manado. Availability per package must be confirmed." },
    description: { id: "Informasi detail Nain akan dilengkapi setelah dikonfirmasi.", en: "Detailed Nain information will be added once confirmed." },
    activities: [{ id: "Island hopping", en: "Island hopping" }], tips: [] },
  { slug: "manado-north-sulawesi", name: "Manado & North Sulawesi", image: "/images/beach-day.jpg",
    summary: { id: "Kota Manado dan destinasi sekitar Sulawesi Utara.", en: "Manado city and destinations around North Sulawesi." },
    description: { id: "Tanyakan kepada kami destinasi darat dan bahari yang dapat disusun sesuai minat Anda.", en: "Ask us which land and marine destinations can be arranged around your interests." },
    activities: [], tips: [] },
];
