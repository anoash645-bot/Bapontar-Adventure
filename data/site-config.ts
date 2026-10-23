// ===== SATU-SATUNYA FILE KONTAK. Sumber: materi resmi yang diberikan Bapontar Adventure. =====
export const SITE = {
  name: "Bapontar Adventure",
  legalName: "PT Bapontar Mega Perkasa",
  url: "", // isi domain final saat deploy, mis. "https://www.bapontar.com" (kosong = canonical memakai localhost)
  websiteDisplay: "www.bapontar.com",
  WHATSAPP_NUMBER: "6285256565665", // nomor WhatsApp resmi (0852-5656-5665)
  phoneDisplay: "0852-5656-5665",
  email: "bapontaradv@gmail.com",
  instagram: "https://www.instagram.com/bapontaradventure/", instagramHandle: "@bapontaradventure",
  facebook: "", // belum ada URL pasti (nama halaman: Bapontar Adventure)
  tiktok: "",
  address: "Jl. Sam Ratulangi No. 61, Tanjung Batu, Kec. Wanea, Kota Manado, Sulawesi Utara",
  hours: "",
  legal: { nib: "1904240125319", kbli: "7911 (Biro Perjalanan Wisata), 4771 (Perdagangan Eceran)", registeredAt: "Terdaftar di Kementerian Hukum dan HAM RI" },
  // Dari screenshot Google yang diberikan; perbarui/kosongkan (null) jika sudah tidak akurat.
  googleRating: { score: "5,0", count: 701 } as { score: string; count: number } | null,
};
export const isConfigured = () => SITE.WHATSAPP_NUMBER.length > 5;
