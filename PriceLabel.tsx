"use client";
import { useLang } from "@/lib/i18n";
export function PriceLabel({ idr }: { idr: number | null }) {
  const { lang } = useLang();
  if (idr == null) return <>{lang === "id" ? "Hubungi kami untuk harga" : "Contact us for price"}</>;
  return <>{new Intl.NumberFormat("id-ID", { style: "currency", currency: "IDR", maximumFractionDigits: 0 }).format(idr)} /pax</>;
}
