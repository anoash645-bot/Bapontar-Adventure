# Bapontar Adventure – Next.js 14 + TypeScript + Tailwind
## Jalankan
    npm install && npm run dev      # http://localhost:3000
    npm run typecheck && npm run lint && npm run build
## Ubah konten (semua di /data)
- site-config.ts: nomor WhatsApp (`WHATSAPP_NUMBER`, format 628xxx), email, sosmed, alamat, domain (`url`).
- packages.ts / destinations.ts: paket & destinasi (draft; harga `null` = "Hubungi kami untuk harga").
- testimonials.ts: hanya ulasan asli. gallery.ts + destinations/packages `image`: foto di /public/images (mis. "/images/bunaken.jpg").
- faq.ts, app/about/page.tsx: teks FAQ dan profil.
## Deploy
Push ke GitHub → import di Vercel (atau `npm run build && npm start`). Isi `SITE.url` setelah domain resmi ada.
## Catatan
Tanpa backend: formulir & pemesanan hanya membuka WhatsApp. Tidak ada login admin, pembayaran, atau penyimpanan data. Siapkan CMS (Sanity/Strapi) kelak dengan menukar isi /data.
