import type { CSSProperties } from "react";
import type { Lang } from "@/lib/i18n";
import { REF, type RefKey } from "@/lib/refs";
import { Icon } from "@/components/Icon";
import Img from "@/components/Img";

const vars = (k: RefKey) => {
  const r = REF[k];
  return { "--p": r.p, "--s": r.s, "--t": r.tx } as CSSProperties;
};

/** Stylised mock-up of a project's site, used where there is no screenshot (eNvolve). */
export function RefSite({ k, lang }: { k: RefKey; lang: Lang }) {
  const r = REF[k];
  const m = r[lang].m;
  return (
    <div className={`site ref${r.dark ? " dark" : ""}`} style={vars(k)}>
      <div className="site-nav">
        <b>{r.name}</b>
        <span>
          {m.nav.map((x) => (
            <span key={x}>{x}</span>
          ))}
        </span>
      </div>
      <div className="site-hero">
        <div>
          <em className="sbadge">{m.badge}</em>
          <div className="h5">{m.h}</div>
          <p>{m.sub}</p>
          <span className="sbtn">{m.btn}</span>
        </div>
        <div className="site-img">
          <Icon id={r.ic} />
        </div>
      </div>
      <div className="site-cards prod">
        {m.cards.map((c) => (
          <div key={c}>
            <i>
              <Icon id={r.ic} />
            </i>
            {c}
          </div>
        ))}
      </div>
    </div>
  );
}

export function RefPhone({ k, lang }: { k: RefKey; lang: Lang }) {
  const r = REF[k];
  const m = r[lang].m;
  return (
    <div className="phone">
      <div className={`site ref${r.dark ? " dark" : ""}`} style={vars(k)}>
        <div className="site-nav">
          <b>{r.name}</b>
        </div>
        <div className="site-img">
          <Icon id={r.ic} />
        </div>
        <div className="h5">{m.h}</div>
        <span className="sbtn">{m.btn}</span>
      </div>
    </div>
  );
}

export function Shot({
  k,
  which,
  lang,
  className = "simg",
}: {
  k: RefKey;
  which: "d" | "d2" | "m";
  lang: Lang;
  className?: string;
}) {
  const r = REF[k];
  if (!("shots" in r)) return null;
  return (
    <Img
      className={className}
      src={r.shots[which]}
      alt={`${r.name} ${lang === "hu" ? "weboldal" : "website"}`}
      width={which === "m" ? 375 : 790}
      height={which === "m" ? 790 : 494}
      loading="lazy"
    />
  );
}
