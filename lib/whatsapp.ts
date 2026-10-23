import { SITE } from "@/data/site-config";
export function waUrl(message: string) {
  const num = SITE.WHATSAPP_NUMBER.replace(/\D/g, "");
  return `https://wa.me/${num}?text=${encodeURIComponent(message)}`;
}
export function packageMessage(name: string, pax?: string, date?: string, lang: "id" | "en" = "id") {
  const p = pax?.trim() || (lang === "id" ? "[jumlah peserta]" : "[number of guests]");
  const d = date?.trim() || (lang === "id" ? "[tanggal perjalanan]" : "[travel date]");
  return lang === "id"
    ? `Halo Bapontar Adventure, saya tertarik dengan paket ${name}. Mohon informasi harga, jadwal, fasilitas, dan ketersediaan untuk ${p} orang pada ${d}.`
    : `Hello Bapontar Adventure, I'm interested in the ${name} package. Please share price, schedule, inclusions and availability for ${p} guests on ${d}.`;
}
export const generalMessage = (lang: "id" | "en") =>
  lang === "id" ? "Halo Bapontar Adventure, saya ingin berkonsultasi tentang perjalanan ke Sulawesi Utara." : "Hello Bapontar Adventure, I'd like help planning a trip to North Sulawesi.";
