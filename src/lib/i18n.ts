export type Lang = "hu" | "en";
export const LANGS: Lang[] = ["hu", "en"];

/** Every page of the site, with its URL in each language. */
export const ROUTES = {
  home: { hu: "/", en: "/en" },
  services: { hu: "/szolgaltatasok", en: "/en/services" },
  work: { hu: "/munkaink", en: "/en/work" },
  pricing: { hu: "/arak", en: "/en/pricing" },
  about: { hu: "/rolunk", en: "/en/about" },
  blog: { hu: "/blog", en: "/en/blog" },
  contact: { hu: "/kapcsolat", en: "/en/contact" },
  privacy: { hu: "/adatkezeles", en: "/en/privacy" },
} as const;

export type PageKey = keyof typeof ROUTES;

export function href(lang: Lang, page: string): string {
  const r = ROUTES[page as PageKey] ?? ROUTES.home;
  return r[lang];
}

export function caseHref(lang: Lang, key: string): string {
  return `${ROUTES.work[lang]}/${key}`;
}

/** Path of the same page in the other language (for the HU/EN switch and hreflang). */
export function altPath(lang: Lang, page: PageKey, caseKey?: string): string {
  const other: Lang = lang === "hu" ? "en" : "hu";
  return caseKey ? caseHref(other, caseKey) : href(other, page);
}

export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://lightningweb.hu";

/** Contact details shown across the site. Placeholders until Zoltan fills them in. */
export const CONTACT = {
  email: "info@lightningweb.hu",
  phone: "+36 00 000 0000",
  phoneHref: "tel:+36000000000",
  whatsapp: "+36 00 000 0000",
  social: { facebook: "#", instagram: "#", linkedin: "#" },
};
