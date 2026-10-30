"use client";
import { MessageCircle } from "lucide-react";
import { useLang } from "@/lib/i18n";
import { waUrl, generalMessage, packageMessage } from "@/lib/whatsapp";
export function WaButton({ pkg, label, cls = "btn btn-primary" }: { pkg?: string; label: { id: string; en: string }; cls?: string }) {
  const { lang } = useLang();
  const msg = pkg ? packageMessage(pkg, "", "", lang) : generalMessage(lang);
  return <a href={waUrl(msg)} target="_blank" rel="noopener noreferrer" className={cls}><MessageCircle size={18} aria-hidden />{label[lang]}</a>;
}
export function FloatingWa() {
  const { lang } = useLang();
  return <a href={waUrl(generalMessage(lang))} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp"
    className="fixed bottom-5 right-5 z-40 grid h-14 w-14 place-items-center rounded-full bg-aqua-400 text-ocean-950 shadow-lg hover:bg-white"><MessageCircle /></a>;
}
