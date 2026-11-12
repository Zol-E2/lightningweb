import Link from "next/link";
import type { CSSProperties } from "react";
import { caseHref, type Lang } from "@/lib/i18n";
import { REF, REF_KEYS, type RefKey } from "@/lib/refs";
import { RefSite, Shot } from "@/components/RefMock";

export function CaseCard({
  k,
  lang,
  hidden,
}: {
  k: RefKey;
  lang: Lang;
  hidden?: boolean;
}) {
  const r = REF[k];
  const d = r[lang];
  const hu = lang === "hu";
  const hasShots = "shots" in r;
  return (
    <Link className="case" href={caseHref(lang, k)} hidden={hidden}>
      <div className="shot" style={{ "--b": r.p } as CSSProperties}>
        <div className="frame">
          {hasShots ? (
            <Shot k={k} which="d" lang={lang} />
          ) : (
            <RefSite k={k} lang={lang} />
          )}
        </div>
        <span className="live-dot mono">
          {hasShots
            ? hu
              ? "Élő oldal"
              : "Live site"
            : hu
              ? "Saját fejlesztés"
              : "Own build"}
        </span>
      </div>
      <div className="meta mono">
        <span>{d.tag}</span>
        <span>{r.url}</span>
      </div>
      <h3>{r.name}</h3>
      <div className="res">
        <b>→</b>
        <span>{d.fact}</span>
      </div>
    </Link>
  );
}

/** All projects as cards (home page). */
export default function CaseGrid({ lang }: { lang: Lang }) {
  return (
    <div className="cases">
      {REF_KEYS.map((k) => (
        <CaseCard key={k} k={k} lang={lang} />
      ))}
    </div>
  );
}
