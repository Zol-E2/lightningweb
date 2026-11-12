"use client";

import Link from "next/link";
import { useEffect, useRef, useState, type CSSProperties } from "react";
import { caseHref, type Lang } from "@/lib/i18n";
import { REF, REF_KEYS } from "@/lib/refs";
import { Bolt, Icon } from "@/components/Icon";

/** Hero showcase: laptop + phone mock-up cycling through the real projects. */
export default function Showcase({ lang }: { lang: Lang }) {
  const hu = lang === "hu";
  const [idx, setIdx] = useState(0);
  const [tick, setTick] = useState(0); // bumps on every change, restarts animations
  const timer = useRef<ReturnType<typeof setInterval>>(undefined);

  const startAuto = () => {
    clearInterval(timer.current);
    if (matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    timer.current = setInterval(() => {
      setIdx((i) => (i + 1) % REF_KEYS.length);
      setTick((t) => t + 1);
    }, 5000);
  };
  useEffect(() => {
    startAuto();
    return () => clearInterval(timer.current);
  }, []);

  const pick = (i: number) => {
    setIdx(i);
    setTick((t) => t + 1);
    startAuto();
  };

  const k = REF_KEYS[idx];
  const r = REF[k];
  const m = r[lang].m;
  const vars = { "--p": r.p, "--s": r.s, "--t": r.tx } as CSSProperties;
  const swap = tick > 0 ? "swap" : "";
  const shots = "shots" in r ? r.shots : undefined;

  return (
    <div className="show">
      <div className="stage">
        <div className="browser">
          <div className="chrome">
            <i />
            <i />
            <i />
            <span className="url">{r.url}</span>
          </div>
          <div className={`site ${swap}`} style={vars} key={`s${tick}`}>
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
                <h5>{m.h}</h5>
                <p>{m.sub}</p>
                <span className="sbtn">{m.btn}</span>
              </div>
              <div className="site-img">
                <Icon id={r.ic} />
              </div>
            </div>
            <div className="site-cards">
              {m.cards.map((c) => (
                <div key={c}>{c}</div>
              ))}
            </div>
          </div>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            key={`si${tick}`}
            className={`simg ${shots ? swap : "off"}`}
            src={shots?.d ?? "/img/tasko-d.jpg"}
            alt={shots ? `${r.name} ${hu ? "weboldal" : "website"}` : ""}
            decoding="async"
            fetchPriority={idx === 0 ? "high" : undefined}
          />
        </div>
        <div className="phone">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            key={`mi${tick}`}
            className={`pimg ${shots ? swap : "off"}`}
            src={shots?.m ?? "/img/tasko-m.jpg"}
            alt=""
            decoding="async"
          />
          <div className={`site ${swap}`} style={vars} key={`m${tick}`}>
            <div className="site-nav">
              <b>{r.name}</b>
            </div>
            <div className="site-img">
              <Icon id={r.ic} />
            </div>
            <h5>{m.h}</h5>
            <span className="sbtn">{m.btn}</span>
          </div>
        </div>
        <div className="float f1">
          <span className="ic" style={{ color: "var(--volt)" }}>
            <Icon id="i-search" />
          </span>
          <span>
            <span>{r[lang].tag}</span>
            <small>{r.url}</small>
          </span>
        </div>
        <div className="float f2">
          <span className="ic">
            <Bolt />
          </span>
          <span>
            <span>
              {hu ? "Új ajánlatkérés érkezett" : "New enquiry received"}
            </span>
            <small>{hu ? "épp most" : "just now"}</small>
          </span>
        </div>
      </div>
      <div
        className="tabs"
        role="tablist"
        aria-label={hu ? "Munkáink" : "Our work"}
      >
        {REF_KEYS.map((key, i) => (
          <button
            key={key}
            type="button"
            role="tab"
            aria-selected={i === idx}
            onClick={() => pick(i)}
          >
            <Icon id={REF[key].ic} />
            {REF[key].name}
            <span className="prog" key={i === idx ? `p${tick}` : "p"} />
          </button>
        ))}
      </div>
      <span className="tabs-cap">
        {hu ? "Valódi, élő munkáink." : "Real, live projects."}{" "}
        <Link href={caseHref(lang, k)}>
          {hu ? "Megnézem az esettanulmányt" : "See the case study"} →
        </Link>
      </span>
    </div>
  );
}
