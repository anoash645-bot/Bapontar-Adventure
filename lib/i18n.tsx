"use client";
import { createContext, useContext, useEffect, useState, ReactNode } from "react";
export type Lang = "id" | "en";
export type L = { id: string; en: string };
const Ctx = createContext<{ lang: Lang; setLang: (l: Lang) => void }>({ lang: "id", setLang: () => {} });
export function LangProvider({ children }: { children: ReactNode }) {
  const [lang, set] = useState<Lang>("id");
  useEffect(() => { try { const s = localStorage.getItem("lang"); if (s === "en" || s === "id") set(s); } catch {} }, []);
  const setLang = (l: Lang) => { set(l); try { localStorage.setItem("lang", l); } catch {} document.documentElement.lang = l; };
  return <Ctx.Provider value={{ lang, setLang }}>{children}</Ctx.Provider>;
}
export const useLang = () => useContext(Ctx);
export function T({ v }: { v: L }) { const { lang } = useLang(); return <>{v[lang]}</>; }
