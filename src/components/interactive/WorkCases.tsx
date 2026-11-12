"use client";

import { useState } from "react";
import type { Lang } from "@/lib/i18n";
import { REF, REF_KEYS } from "@/lib/refs";
import { CaseCard } from "@/components/CaseGrid";

const FILTERS = [
  { f: "all", hu: "Mind", en: "All" },
  { f: "web", hu: "Weboldal", en: "Website" },
  { f: "shop", hu: "Webshop", en: "Online store" },
  { f: "app", hu: "Egyedi fejlesztés", en: "Custom build" },
] as const;

/** Work page: project cards with type filters. */
export default function WorkCases({ lang }: { lang: Lang }) {
  const hu = lang === "hu";
  const [f, setF] = useState<(typeof FILTERS)[number]["f"]>("all");
  return (
    <>
      <div
        className="filters"
        role="group"
        aria-label={hu ? "Szűrés" : "Filter"}
      >
        {FILTERS.map((x) => (
          <button
            key={x.f}
            type="button"
            aria-pressed={f === x.f}
            onClick={() => setF(x.f)}
          >
            {hu ? x.hu : x.en}
          </button>
        ))}
      </div>
      <div className="cases" id="cases">
        {REF_KEYS.map((k) => (
          <CaseCard
            key={k}
            k={k}
            lang={lang}
            hidden={f !== "all" && REF[k].t !== f}
          />
        ))}
      </div>
    </>
  );
}
