import type { MetadataRoute } from "next";
import { SITE } from "@/data/site-config";
import { packages } from "@/data/packages";
import { destinations } from "@/data/destinations";
export default function sitemap(): MetadataRoute.Sitemap {
  const b = SITE.url || "http://localhost:3000";
  return ["", "/packages", "/about", "/contact", "/faq", ...packages.map(p => `/packages/${p.slug}`), ...destinations.map(d => `/destinations/${d.slug}`)].map(u => ({ url: b + u }));
}
