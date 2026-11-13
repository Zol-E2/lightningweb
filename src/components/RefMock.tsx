import type { CSSProperties } from "react";
import type { Lang } from "@/lib/i18n";
import { REF, type RefKey, type Shot as ShotT } from "@/lib/refs";
import { Icon } from "@/components/Icon";
import Img from "@/components/Img";

const vars = (k: RefKey) => {
  const r = REF[k];
  return { "--p": r.p, "--s": r.s, "--t": r.tx } as CSSProperties;
};

/** Stylised mock-up of a project's site, used where there is no screenshot. */
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

/** src + srcSet for a desktop screenshot (800px and 1440px WebP versions). */
export const shotSrc = (s: ShotT) => ({
  src: `${s.s}-800.webp`,
  srcSet: `${s.s}-800.webp 800w, ${s.s}-1440.webp 1440w`,
});

/** A project screenshot: the desktop hero ("d") or the phone view ("m"). */
export function Shot({
  k,
  which,
  lang,
  className = "simg",
  sizes = "(max-width: 900px) 92vw, 640px",
}: {
  k: RefKey;
  which: "d" | "m";
  lang: Lang;
  className?: string;
  sizes?: string;
}) {
  const r = REF[k];
  if (!("shots" in r)) return null;
  const alt = `${r.name} ${lang === "hu" ? "weboldal" : "website"}`;
  if (which === "m") {
    if (!("m" in r.shots)) return null;
    return (
      <Img
        className={className}
        src={r.shots.m}
        alt={alt}
        width={400}
        height={700}
        loading="lazy"
      />
    );
  }
  const d = r.shots.d;
  return (
    <Img
      className={className}
      {...shotSrc(d)}
      sizes={sizes}
      alt={`${alt}: ${d[lang]}`}
      width={d.w}
      height={d.h}
      loading="lazy"
    />
  );
}
