import type { Metadata } from "next";
import {
  altPath,
  caseHref,
  href,
  SITE_URL,
  type Lang,
  type PageKey,
} from "@/lib/i18n";
import { REF, type RefKey } from "@/lib/refs";
import { postHref, type Post } from "@/lib/posts";

/** Default share image (Facebook, Messenger, LinkedIn…). */
const OG_IMAGE = {
  url: "/og.png",
  width: 1200,
  height: 630,
  alt: "LightningWeb",
};

const TEXT: Record<
  PageKey,
  Record<Lang, { title: string; description: string }>
> = {
  home: {
    hu: {
      title: "LightningWeb – Weboldal készítés, webshop és online marketing",
      description:
        "Gyors, modern weboldal és webshop kisvállalkozásoknak, Google és Facebook hirdetéssel, SEO-val. Fix ár, fix határidő, érthetően. Szabolcs és országosan.",
    },
    en: {
      title: "LightningWeb – Websites, online stores and digital marketing",
      description:
        "Fast, modern websites and online stores for small businesses, with Google and Facebook ads and SEO. Fixed price, fixed deadline, plain language.",
    },
  },
  services: {
    hu: {
      title: "Szolgáltatások – weboldal, webshop, SEO, hirdetés",
      description:
        "Weboldal készítés, webshop, Google-keresőoptimalizálás, Google és Facebook hirdetések, közösségi média és karbantartás egy helyen.",
    },
    en: {
      title: "Services – websites, stores, SEO, ads",
      description:
        "Websites, online stores, SEO, Google and Facebook ads, social media and maintenance in one place.",
    },
  },
  work: {
    hu: {
      title: "Munkáink – referenciák",
      description:
        "Élő, működő weboldalak és webshopok: TaskoGrill, Ruen Farm, Oz’s Chili és a saját fejlesztésű eNvolve.",
    },
    en: {
      title: "Our work – projects",
      description:
        "Live websites and online stores: TaskoGrill, Ruen Farm, Oz’s Chili and our own eNvolve app.",
    },
  },
  pricing: {
    hu: {
      title: "Árak – weboldal 290 000 Ft-tól",
      description:
        "Átlátható árak: weboldal 290 000 Ft-tól, webshop 590 000 Ft-tól, karbantartás 9 900 Ft/hótól. Árkalkulátor, áfa nélküli végleges árak.",
    },
    en: {
      title: "Pricing – websites from 290,000 HUF",
      description:
        "Clear pricing: websites from 290,000 HUF, online stores from 590,000 HUF, maintenance from 9,900 HUF/month. Price calculator included.",
    },
  },
  about: {
    hu: {
      title: "Rólunk – Zoltán, a LightningWeb alapítója",
      description:
        "Személyes figyelem, ügynökségi tudás. Ismerd meg, ki építi az oldaladat.",
    },
    en: {
      title: "About – Zoltán, founder of LightningWeb",
      description:
        "Personal attention, agency expertise. Meet the person who builds your site.",
    },
  },
  blog: {
    hu: {
      title: "Blog – tippek, hogy több vevő találjon meg",
      description:
        "Gyakorlati tippek weboldalról, Google-ről és hirdetésekről, szakszavak nélkül.",
    },
    en: {
      title: "Blog – tips to help customers find you",
      description:
        "Practical tips on websites, Google and ads, without jargon.",
    },
  },
  contact: {
    hu: {
      title: "Kapcsolat – kérj ajánlatot",
      description:
        "Írj nekünk vagy foglalj egy ingyenes 20 perces hívást. 24 órán belül válaszolunk.",
    },
    en: {
      title: "Contact – get a quote",
      description:
        "Write to us or book a free 20-minute call. We reply within 24 hours.",
    },
  },
  privacy: {
    hu: {
      title: "Adatkezelési tájékoztató és impresszum",
      description: "A LightningWeb adatkezelési tájékoztatója és impresszuma.",
    },
    en: {
      title: "Privacy policy and imprint",
      description: "LightningWeb privacy policy and imprint.",
    },
  },
};

function alternates(
  lang: Lang,
  path: string,
  alt: string,
): Metadata["alternates"] {
  const huPath = lang === "hu" ? path : alt;
  const enPath = lang === "en" ? path : alt;
  return {
    canonical: path,
    languages: { hu: huPath, en: enPath, "x-default": huPath },
  };
}

export function pageMetadata(lang: Lang, page: PageKey): Metadata {
  const t = TEXT[page][lang];
  const path = href(lang, page);
  return {
    title: page === "home" ? { absolute: t.title } : t.title,
    description: t.description,
    alternates: alternates(lang, path, altPath(lang, page)),
    openGraph: {
      title: t.title,
      description: t.description,
      url: path,
      locale: lang === "hu" ? "hu_HU" : "en_GB",
      type: "website",
      siteName: "LightningWeb",
      images: [OG_IMAGE],
    },
    twitter: { card: "summary_large_image" },
    robots: page === "privacy" ? { index: false } : undefined,
  };
}

export function caseMetadata(lang: Lang, k: RefKey): Metadata {
  const r = REF[k];
  const d = r[lang];
  const title = d.h1.replace(/\*/g, "");
  const path = caseHref(lang, k);
  return {
    title,
    description: d.lead,
    alternates: alternates(lang, path, altPath(lang, "work", k)),
    openGraph: {
      title,
      description: d.lead,
      url: path,
      images: "shots" in r ? [{ url: r.shots.d }] : [OG_IMAGE],
      locale: lang === "hu" ? "hu_HU" : "en_GB",
      type: "article",
      siteName: "LightningWeb",
    },
    twitter: { card: "summary_large_image" },
  };
}

export function postMetadata(lang: Lang, p: Post): Metadata {
  const t = p[lang];
  const path = postHref(lang, p);
  const other: Lang = lang === "hu" ? "en" : "hu";
  return {
    title: t.title,
    description: t.desc,
    alternates: alternates(lang, path, postHref(other, p)),
    openGraph: {
      title: t.title,
      description: t.desc,
      url: path,
      images: [OG_IMAGE],
      locale: lang === "hu" ? "hu_HU" : "en_GB",
      type: "article",
      publishedTime: p.date,
      siteName: "LightningWeb",
    },
    twitter: { card: "summary_large_image" },
  };
}

export const baseMetadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: { default: "LightningWeb", template: "%s | LightningWeb" },
  applicationName: "LightningWeb",
};
