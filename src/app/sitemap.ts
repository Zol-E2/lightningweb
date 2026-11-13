import type { MetadataRoute } from "next";
import { caseHref, ROUTES, SITE_URL, type PageKey } from "@/lib/i18n";
import { REF_KEYS } from "@/lib/refs";
import { POSTS, postHref } from "@/lib/posts";
import { LOCAL } from "@/lib/local";

const abs = (p: string) => `${SITE_URL}${p === "/" ? "" : p}`;

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = (Object.keys(ROUTES) as PageKey[]).filter(
    (k) => k !== "privacy" && k !== "terms",
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
  for (const p of POSTS) {
    for (const lang of ["hu", "en"] as const) {
      entries.push({
        url: abs(postHref(lang, p)),
        lastModified: p.date,
        priority: 0.7,
        alternates: {
          languages: { hu: abs(postHref("hu", p)), en: abs(postHref("en", p)) },
        },
      });
    }
  }
  for (const l of LOCAL)
    entries.push({ url: abs(`/${l.slug}`), priority: 0.8 });
  return entries;
}
