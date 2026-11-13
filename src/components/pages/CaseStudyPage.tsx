import Link from "next/link";
import { Fragment } from "react";
import { caseHref, href, SITE_URL, type Lang } from "@/lib/i18n";
import JsonLd, { breadcrumbs } from "@/components/JsonLd";
import { REF, REF_KEYS, type RefKey } from "@/lib/refs";
import { RefPhone, RefSite, Shot, shotSrc } from "@/components/RefMock";
import Img from "@/components/Img";

/** Renders "*text*" as the italic accent font. */
function Accent({ text }: { text: string }) {
  return text.split(/\*(.+?)\*/g).map((part, i) =>
    i % 2 ? (
      <span key={i} className="it">
        {part}
      </span>
    ) : (
      <Fragment key={i}>{part}</Fragment>
    ),
  );
}

export default function CaseStudyPage({ lang, k }: { lang: Lang; k: RefKey }) {
  const hu = lang === "hu";
  const r = REF[k];
  const d = r[lang];
  const next = REF_KEYS[(REF_KEYS.indexOf(k) + 1) % REF_KEYS.length];
  const hasShots = "shots" in r;

  return (
    <>
      <JsonLd
        data={breadcrumbs([
          ["LightningWeb", SITE_URL + href(lang, "home")],
          [hu ? "Munkáink" : "Our work", SITE_URL + href(lang, "work")],
          [r.name, SITE_URL + caseHref(lang, k)],
        ])}
      />
      <section className="sub ink">
        <div className="grid-bg" />
        <div className="wrap">
          <span className="crumb mono">
            <b>/</b>{" "}
            <Link href={href(lang, "work")}>{hu ? "munkaink" : "work"}</Link> /{" "}
            {k}
          </span>
          <h1>
            <Accent text={d.h1} />
          </h1>
          <p className="lead">{d.lead}</p>
          <div className="ctas">
            <a
              className="btn btn-volt"
              href={r.live}
              target="_blank"
              rel="noopener"
            >
              {hu ? "Megnézem élőben" : "View live site"}{" "}
              <span className="ar">↗</span>
            </a>
            <Link className="btn btn-line" href={href(lang, "contact")}>
              {hu ? "Ilyet szeretnék" : "I want one like this"}
            </Link>
          </div>
          <div className="case-meta">
            <div>
              <span>{hu ? "Iparág" : "Industry"}</span>
              <b>{d.ind}</b>
            </div>
            <div>
              <span>{hu ? "Amit csináltunk" : "What we did"}</span>
              <b>{d.svc}</b>
            </div>
            <div>
              <span>{hu ? "Technológia" : "Technology"}</span>
              <b>{d.plat}</b>
            </div>
            <div>
              <span>{hu ? "Piac" : "Market"}</span>
              <b>{d.mkt}</b>
            </div>
          </div>
        </div>
      </section>

      <section
        className="ink"
        style={{ paddingBottom: "clamp(64px,8vw,110px)" }}
      >
        <div className="wrap">
          <div className="case-hero-mock">
            <div className="browser">
              <div className="chrome">
                <i />
                <i />
                <i />
                <span className="url">{r.url}</span>
              </div>
              <div className="mock-slot">
                {hasShots ? (
                  <Shot k={k} which="d" lang={lang} />
                ) : (
                  <RefSite k={k} lang={lang} />
                )}
              </div>
            </div>
            {"shots" in r && "m" in r.shots ? (
              <div className="phone">
                <Shot k={k} which="m" lang={lang} className="pimg" />
              </div>
            ) : (
              <RefPhone k={k} lang={lang} />
            )}
          </div>
        </div>
      </section>

      <section className="sec paper">
        <div className="wrap">
          <div className="csr">
            {d.csr.map((c, j) => (
              <div key={c[0]}>
                <span className="mono acc">
                  0{j + 1} · {c[0]}
                </span>
                <h2>{c[1]}</h2>
                <p>{c[2]}</p>
              </div>
            ))}
          </div>
          {"shots" in r && (
            <div className="case-gal">
              {r.shots.gal.map((g) => (
                <figure className="gbrowser" key={g.s}>
                  <div className="chrome">
                    <i />
                    <i />
                    <i />
                    <span className="url">{r.url}</span>
                  </div>
                  <Img
                    {...shotSrc(g)}
                    sizes="(max-width: 760px) 92vw, 480px"
                    alt={`${r.name}: ${g[lang]}`}
                    width={g.w}
                    height={g.h}
                    loading="lazy"
                  />
                  <figcaption className="mono">{g[lang]}</figcaption>
                </figure>
              ))}
            </div>
          )}
          <h2 className="mid-h">
            {hu ? "Amit az oldal tud:" : "What the site does:"}
          </h2>
          <div className="feats">
            {d.feats.map((f) => (
              <div className="feat" key={f[0]}>
                <b>{f[0]}</b>
                <span>{f[1]}</span>
              </div>
            ))}
          </div>
          <div className="ctas" style={{ marginTop: "48px" }}>
            <Link className="btn btn-dark" href={href(lang, "contact")}>
              {hu ? "Hasonló oldalt szeretnék" : "I want a site like this"}{" "}
              <span className="ar">→</span>
            </Link>
            <Link className="btn btn-line" href={caseHref(lang, next)}>
              {hu ? "Következő munka: " : "Next project: "}
              {REF[next].name} <span className="ar">→</span>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
