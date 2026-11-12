/**
 * Prices used by the calculator (HUF, no VAT: átalányadó).
 * The package cards on the pricing page show the same numbers; keep them in sync.
 */
export const PRICE = {
  /** [price from, pages included] */
  base: {
    starter: [290000, 5],
    business: [490000, 10],
    shop: [590000, 10],
  } as Record<SiteType, [number, number]>,
  /** each page above the included number */
  page: 15000,
  extra: { blog: 40000, copy: 60000, logo: 80000, photo: 70000 },
  /** second language adds this share of the one-off price */
  secondLanguage: 0.25,
  monthly: { care: 0, seo: 89000, ads: 39000, social: 79000 },
  /** maintenance depends on the site type */
  care: { starter: 9900, business: 19900, shop: 34900 } as Record<
    SiteType,
    number
  >,
};

export type SiteType = "starter" | "business" | "shop";

export function formatFt(n: number): string {
  // Hungarian thousands separator is a (non-breaking) space: 490 000 Ft
  return n.toLocaleString("hu-HU").replace(/\s/g, " ") + " Ft";
}
