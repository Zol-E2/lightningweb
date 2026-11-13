import { CONTACT, ROUTES, SITE_URL, caseHref } from "@/lib/i18n";
import { POSTS, postHref } from "@/lib/posts";
import { formatFt, PRICE } from "@/lib/prices";
import { REF, REF_KEYS } from "@/lib/refs";

/**
 * /llms.txt: a plain-text summary of the business for AI assistants and AI
 * search (ChatGPT, Gemini, Claude, Perplexity…). Built from the same data as
 * the site, so prices and pages stay in sync.
 */
export const dynamic = "force-static";

const u = (p: string) => `${SITE_URL}${p === "/" ? "" : p}`;

export function GET() {
  const b = PRICE.base;
  const refs = REF_KEYS.map((k) => {
    const r = REF[k];
    return `- [${r.name}](${u(caseHref("hu", k))}): ${r.hu.ind}, ${r.hu.tag.toLowerCase()} (${r.live})`;
  }).join("\n");
  const posts = POSTS.map(
    (p) => `- [${p.hu.title}](${u(postHref("hu", p))}): ${p.hu.desc}`,
  ).join("\n");

  const text = `# LightningWeb

> LightningWeb is a Hungarian web design and online marketing agency for small businesses (1–10 people), run by its founder, Zoltán Elek. It builds fast, modern websites and online stores (WordPress and Next.js), and runs Google and Facebook ads, SEO, Google Business Profile and social media. Based in Szabolcs-Szatmár-Bereg county (Ibrány), serving Szabolcs and nearby counties (Debrecen, Nyíregyháza, Hajdú-Bihar, Borsod) in person, and all of Hungary and clients abroad online. Fixed prices, fixed deadlines, plain language. The site is bilingual: Hungarian at ${SITE_URL}, English at ${u(ROUTES.home.en)}.

## Key facts

- Services: website design and build, online stores (webshops), search engine optimisation (SEO), Google Ads, Facebook and Instagram ads, Google Business Profile (Google Maps), social media management, website maintenance.
- Typical clients: local businesses, manufacturers, producers, shops, restaurants and online stores.
- Prices (HUF, no VAT: the business is VAT exempt): starter website from ${formatFt(b.starter[0])} (${b.starter[1]} pages), business website from ${formatFt(b.business[0])} (${b.business[1]} pages), online store from ${formatFt(b.shop[0])}; custom Next.js projects by quote. Maintenance from ${formatFt(PRICE.care.starter)}/month, SEO from ${formatFt(PRICE.monthly.seo)}/month, social media from ${formatFt(PRICE.monthly.social)}/month, ad management 15% of ad spend, minimum ${formatFt(PRICE.monthly.ads)}/month, with a trial month.
- Guarantees: fixed price, fixed deadline (a simple site within one month), the client owns the site and domain, 6 months of free bug fixing, risk-free start.
- Free first consultation (20-minute call) and a free website check on the home page.
- Contact: ${CONTACT.email}, ${CONTACT.phone}. Enquiries answered within 24 hours.
- Languages: Hungarian and English.

## Main pages

- [Home](${SITE_URL}): overview, free website checker, FAQ
- [Services](${u(ROUTES.services.hu)}): websites, online stores, SEO, ads, social media, maintenance
- [Pricing](${u(ROUTES.pricing.hu)}): packages and a price calculator
- [Our work](${u(ROUTES.work.hu)}): case studies
- [About](${u(ROUTES.about.hu)}): the founder
- [Contact](${u(ROUTES.contact.hu)}): quote request and booking a call
- [English version](${u(ROUTES.home.en)})

## Case studies

${refs}

## Articles (Hungarian; English versions under ${u(ROUTES.blog.en)})

${posts}

## Social

- Facebook: ${CONTACT.social.facebook}
- Instagram: ${CONTACT.social.instagram}
- LinkedIn: ${CONTACT.social.linkedin}
`;
  return new Response(text, {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
}
