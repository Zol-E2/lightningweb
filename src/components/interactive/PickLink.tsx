"use client";

import Link from "next/link";
import type { ReactNode } from "react";
import { href, type Lang } from "@/lib/i18n";
import { setDraft } from "@/lib/draft";

const PRICE: Record<string, string> = {
  Start: "290 000 Ft",
  Business: "490 000 Ft",
  Webshop: "590 000 Ft",
};

/** Package button: goes to the contact page with the chosen package pre-filled in the message. */
export default function PickLink({
  lang,
  pick,
  className,
  children,
}: {
  lang: Lang;
  pick: string;
  className: string;
  children: ReactNode;
}) {
  const hu = lang === "hu";
  const msg =
    pick === "Next.js"
      ? hu
        ? "Egyedi (Next.js) weboldal érdekel, kérek ajánlatot."
        : "I’m interested in a custom (Next.js) website, please send a quote."
      : hu
        ? `A ${pick} csomag érdekel (${PRICE[pick]}-tól).`
        : `I’m interested in the ${pick} package (from ${PRICE[pick]}).`;
  return (
    <Link
      className={className}
      href={href(lang, "contact")}
      onClick={() => setDraft(msg)}
    >
      {children}
    </Link>
  );
}
