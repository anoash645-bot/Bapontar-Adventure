"use client";
import { useState } from "react";
import { useLang } from "@/lib/i18n";
import { waUrl } from "@/lib/whatsapp";
import { destinations } from "@/data/destinations";
export function BookingForm() {
  const { lang } = useLang(); const [err, setErr] = useState("");
  const t = (a: string, b: string) => (lang === "id" ? a : b);
  function submit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault(); const f = new FormData(e.currentTarget); const g = (k: string) => String(f.get(k) ?? "").trim().slice(0, 500);
    if (g("name").length < 2) return setErr(t("Nama wajib diisi.", "Name is required."));
    if (!/^[+\d\s-]{8,20}$/.test(g("phone"))) return setErr(t("Nomor WhatsApp tidak valid.", "Invalid WhatsApp number."));
    if (g("email") && !/^\S+@\S+\.\S+$/.test(g("email"))) return setErr(t("Email tidak valid.", "Invalid email."));
    setErr("");
    const na = t("[belum diisi]", "[not provided]");
    const msg = `${t("Halo Bapontar Adventure, saya", "Hello Bapontar Adventure, I'm")} ${g("name")}.\n${t("Destinasi", "Destination")}: ${g("dest") || na}\n${t("Tanggal", "Date")}: ${g("date") || na}\n${t("Peserta", "Guests")}: ${g("pax") || na}\nWhatsApp: ${g("phone")}${g("email") ? `\nEmail: ${g("email")}` : ""}\n${t("Pesan", "Message")}: ${g("msg") || "-"}`;
    window.open(waUrl(msg), "_blank", "noopener,noreferrer");
  }
  const L = ({ id, label, children }: { id: string; label: string; children: React.ReactNode }) => <div><label htmlFor={id} className="mb-1 block text-sm font-medium">{label}</label>{children}</div>;
  return (
    <form onSubmit={submit} className="grid gap-4 sm:grid-cols-2" noValidate>
      <L id="name" label={t("Nama *", "Name *")}><input id="name" name="name" className="input" required /></L>
      <L id="phone" label={t("Nomor WhatsApp *", "WhatsApp number *")}><input id="phone" name="phone" type="tel" className="input" required /></L>
      <L id="email" label={t("Email (opsional)", "Email (optional)")}><input id="email" name="email" type="email" className="input" /></L>
      <L id="dest" label={t("Destinasi diminati", "Destination of interest")}><select id="dest" name="dest" className="input"><option value="">—</option>{destinations.map(d => <option key={d.slug}>{d.name}</option>)}</select></L>
      <L id="date" label={t("Tanggal perjalanan", "Travel date")}><input id="date" name="date" type="date" className="input" /></L>
      <L id="pax" label={t("Jumlah peserta", "Guests")}><input id="pax" name="pax" type="number" min={1} max={100} className="input" /></L>
      <div className="sm:col-span-2"><L id="msg" label={t("Pesan", "Message")}><textarea id="msg" name="msg" rows={4} className="input" /></L></div>
      {err && <p role="alert" className="sm:col-span-2 text-red-700">{err}</p>}
      <div className="sm:col-span-2"><button className="btn btn-dark">{t("Kirim via WhatsApp", "Send via WhatsApp")}</button>
        <p className="mt-2 text-xs text-ink/60">{t("Tombol ini membuka WhatsApp dengan pesan terisi. Tidak ada data yang disimpan di server.", "This opens WhatsApp with a pre-filled message. No data is stored on a server.")}</p></div>
    </form>
  );
}
