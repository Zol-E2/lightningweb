import type { MetadataRoute } from "next";
import { caseHref, ROUTES, SITE_URL, type PageKey } from "@/lib/i18n";
import { REF_KEYS } from "@/lib/refs";

const abs = (p: string) => `${SITE_URL}${p === "/" ? "" : p}`;

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = (Object.keys(ROUTES) as PageKey[]).filter(
    (k) => k !== "privacy",
  );
  const entries: MetadataRoute.Sitemap = [];
  for (const k of pages) {
    const r = ROUTES[k];
    for (const lang of ["hu", "en"] as const) {
      entries.push({
        url: abs(r[lang]),
        priority: k === "home" ? 1 : 0.8,
        alternates: { languages: { hu: abs(r.hu), en: abs(r.en) } },
      });
    }
  }
  for (const key of REF_KEYS) {
    for (const lang of ["hu", "en"] as const) {
      entries.push({
        url: abs(caseHref(lang, key)),
        priority: 0.6,
        alternates: {
          languages: {
            hu: abs(caseHref("hu", key)),
            en: abs(caseHref("en", key)),
          },
        },
      });
    }
  }
  return entries;
}
