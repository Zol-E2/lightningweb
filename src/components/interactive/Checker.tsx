"use client";

import Link from "next/link";
import {
  useEffect,
  useRef,
  useState,
  type CSSProperties,
  type FormEvent,
} from "react";
import { href, type Lang } from "@/lib/i18n";
import { setDraft } from "@/lib/draft";

type Scores = { perf: number; mob: number; seo: number; sec: boolean };
type Report = { dom: string; s: Scores; sample: boolean };

/** Illustrative result shown before the visitor runs a check (clearly labelled as a sample). */
const SAMPLE: Report = {
  dom: "pelda-ceg.hu",
  s: { perf: 38, mob: 54, seo: 46, sec: true },
  sample: true,
};

const colorOf = (v: number) =>
  v >= 80 ? "#34d17f" : v >= 50 ? "#f5b83d" : "#ff5d5d";

function Gauge({ label, v, txt }: { label: string; v: number; txt?: string }) {
  const off = (201 * (1 - v / 100)).toFixed(1);
  return (
    <div className="gauge" style={{ "--c": colorOf(v) } as CSSProperties}>
      <div className="gw">
        <svg viewBox="0 0 76 76" aria-hidden="true">
          <circle className="bg" cx="38" cy="38" r="32" />
          <circle
            className="fg"
            cx="38"
            cy="38"
            r="32"
            style={{ strokeDashoffset: off }}
          />
        </svg>
        <b>{txt ?? v}</b>
      </div>
      {label}
    </div>
  );
}

function cleanDomain(raw: string) {
  return raw
    .trim()
    .toLowerCase()
    .replace(/^https?:\/\//, "")
    .replace(/^www\./, "")
    .split("/")[0];
}

/**
 * Free website check. Runs Google's real PageSpeed measurement through
 * /api/pagespeed and explains the result in plain words.
 */
export default function Checker({ lang }: { lang: Lang }) {
  const hu = lang === "hu";
  const L = (h: string, e: string) => (hu ? h : e);
  const [rep, setRep] = useState<Report>(SAMPLE);
  const [scan, setScan] = useState<{ dom: string; step: number } | null>(null);
  const [error, setError] = useState<string | null>(null);
  const form = useRef<HTMLFormElement>(null);
  const input = useRef<HTMLInputElement>(null);
  const stepTimer = useRef<ReturnType<typeof setInterval>>(undefined);
  useEffect(() => () => clearInterval(stepTimer.current), []);

  const steps = [
    L("Betöltési sebesség mérése", "Measuring load speed"),
    L("Mobilnézet ellenőrzése", "Checking mobile view"),
    L("Google-láthatóság vizsgálata", "Checking Google visibility"),
    L("Biztonság ellenőrzése", "Checking security"),
  ];

  async function onSubmit(e: FormEvent) {
    e.preventDefault();
    if (scan) return;
    const dom = cleanDomain(input.current?.value ?? "");
    if (!/^[a-z0-9áéíóöőúüű-]+(\.[a-z0-9áéíóöőúüű-]+)+$/.test(dom)) {
      const f = form.current;
      if (f) {
        f.classList.remove("shake");
        void f.offsetWidth;
        f.classList.add("shake");
      }
      input.current?.focus();
      return;
    }
    setError(null);
    setScan({ dom, step: 0 });
    // The real measurement takes 10-30 s; advance the step list while we wait.
    stepTimer.current = setInterval(
      () =>
        setScan((s) =>
          s && s.step < steps.length - 1 ? { ...s, step: s.step + 1 } : s,
        ),
      4000,
    );
    try {
      const res = await fetch(`/api/pagespeed?url=${encodeURIComponent(dom)}`);
      const data = (await res.json()) as Partial<Scores> & { error?: string };
      if (!res.ok || data.error || data.perf == null)
        throw new Error(data.error ?? "failed");
      setRep({ dom, s: data as Scores, sample: false });
    } catch (err) {
      const code = err instanceof Error ? err.message : "";
      setRep({ dom, s: SAMPLE.s, sample: false });
      setError(
        code === "busy"
          ? L(
              "A Google mérőszolgáltatása most túlterhelt. Próbáld újra egy perc múlva, vagy kérj ingyenes elemzést, és mi megnézzük helyetted.",
              "Google’s measuring service is busy right now. Try again in a minute, or request a free analysis and we’ll check it for you.",
            )
          : L(
              "Ezt az oldalt most nem sikerült lemérni. Lehet, hogy nem elérhető, túl lassan válaszol, vagy letiltja az automatikus mérést (ilyen például a Facebook). Kérj ingyenes elemzést, és mi megnézzük helyetted.",
              "We couldn’t measure this site. It may be offline, too slow to respond, or it blocks automated tests (Facebook does, for example). Request a free analysis and we’ll check it for you.",
            ),
      );
    } finally {
      clearInterval(stepTimer.current);
      setScan(null);
    }
  }

  const s = rep.s;
  /* Speed weighs most: it is what visitors feel first. One weak area caps the grade. */
  const avg = Math.round(
    s.perf * 0.4 + s.mob * 0.25 + s.seo * 0.25 + (s.sec ? 10 : 0),
  );
  const low = Math.min(s.perf, s.mob, s.seo);
  const c = colorOf(avg);
  let g: "A" | "B" | "C" | "D" | "E" =
    avg >= 90 ? "A" : avg >= 75 ? "B" : avg >= 60 ? "C" : avg >= 45 ? "D" : "E";
  if (g === "A" && low < 80) g = "B";
  if ((g === "A" || g === "B") && (low < 50 || !s.sec)) g = "C";
  const verdict = {
    A: L("Kiváló állapot", "Excellent"),
    B: L("Jó, de van mit javítani", "Good, room to improve"),
    C: L(
      "Közepes: vevőket veszíthetsz",
      "Average: you may be losing customers",
    ),
    D: L("Gyenge: sok vevőt veszítesz", "Weak: you’re losing customers"),
    E: L("Kritikus: sürgős frissítés kell", "Critical: needs an urgent update"),
  }[g];
  type Level = "ok" | "warn" | "bad";
  const lvl = (v: number): Level => (v >= 90 ? "ok" : v >= 50 ? "warn" : "bad");
  const pick = (v: number, t: Record<Level, string>): [Level, string] => [
    lvl(v),
    t[lvl(v)],
  ];
  const finds: [Level, string][] = [
    pick(s.perf, {
      ok: L("Gyorsan tölt be.", "Loads fast."),
      warn: L(
        "Lehetne gyorsabb. Minden plusz másodperc betöltés látogatókba kerül.",
        "Could be faster. Every extra second of loading costs visitors.",
      ),
      bad: L(
        "Lassan tölt be. A látogatók egy része már a betöltés előtt elmegy.",
        "Loads slowly. Some visitors leave before it appears.",
      ),
    }),
    pick(s.mob, {
      ok: L("Telefonon jól használható.", "Works well on phones."),
      warn: L(
        "Telefonon használható, de vannak apró hibák (kis gombok, kontraszt).",
        "Usable on phones, with small issues (small buttons, contrast).",
      ),
      bad: L(
        "Telefonon nehezen használható: apró szövegek, kis gombok.",
        "Hard to use on phones: tiny text, small buttons.",
      ),
    }),
    pick(s.seo, {
      ok: L(
        "A Google jól érti az oldalt.",
        "Google understands the site well.",
      ),
      warn: L(
        "A Google nagyjából érti az oldalt, de van mit pontosítani.",
        "Google mostly understands the site, but there’s room to improve.",
      ),
      bad: L(
        "A Google nem érti pontosan, mivel foglalkozol, ezért hátrébb sorol.",
        "Google doesn’t clearly understand what you do, so it ranks you lower.",
      ),
    }),
  ];
  if (!s.sec)
    finds.push([
      "bad",
      L(
        "Nincs biztonságos (https) kapcsolat, a böngésző figyelmeztet.",
        "No secure (https) connection; browsers show a warning.",
      ),
    ]);

  const askAnalysis = () =>
    setDraft(
      L(
        `Kérem a(z) ${rep.sample ? "weboldalam" : rep.dom} részletes elemzését.`,
        `Please send me a full analysis of ${rep.sample ? "my website" : rep.dom}.`,
      ),
    );

  return (
    <div className="wrap chk">
      <div className="chk-l">
        <span className="label mono">
          {L("Ingyenes ellenőrzés", "Free check-up")}
        </span>
        {hu ? (
          <h2>
            Mennyire jó a <span className="it acc">mostani</span> weboldalad?
          </h2>
        ) : (
          <h2>
            How good is your <span className="it acc">current</span> website?
          </h2>
        )}
        <p>
          {L(
            "Írd be a címét, és megmutatjuk, mennyire gyors, mennyire használható telefonon, és mennyire látja a Google.",
            "Enter its address and we’ll show you how fast it is, how it works on phones, and how well Google sees it.",
          )}
        </p>
        <form ref={form} className="chk-form" onSubmit={onSubmit} noValidate>
          <input
            ref={input}
            type="text"
            inputMode="url"
            autoComplete="url"
            placeholder={L("sajatcegem.hu", "mycompany.com")}
            aria-label={L("Weboldal címe", "Website address")}
          />
          <button className="btn btn-volt" type="submit" disabled={!!scan}>
            {L("Ellenőrzés", "Check")} <span className="ar">→</span>
          </button>
        </form>
        <div className="chk-pts">
          <span>{L("Sebesség", "Speed")}</span>
          <span>{L("Mobilnézet", "Mobile")}</span>
          <span>{L("Google-láthatóság", "Google visibility")}</span>
          <span>{L("Biztonság", "Security")}</span>
        </div>
        <span className="chk-note">
          {L(
            "A mérést a Google PageSpeed végzi, telefonos nézetben. 10–30 másodpercig is eltarthat.",
            "The measurement is run by Google PageSpeed, in mobile view. It can take 10–30 seconds.",
          )}
        </span>
      </div>

      <div className="report" aria-live="polite">
        {scan ? (
          <>
            <div className="rep-top">
              <span
                className="rep-dom"
                style={{ "--c": "var(--volt)" } as CSSProperties}
              >
                <i />
                {scan.dom}
              </span>
              <span className="rep-tag">{L("Elemzés…", "Analysing…")}</span>
            </div>
            <div className="scanbar">
              <i
                style={{ width: `${((scan.step + 1) / steps.length) * 100}%` }}
              />
            </div>
            <div className="scan">
              {steps.map((t, i) => (
                <div
                  key={t}
                  className={
                    i < scan.step ? "done" : i === scan.step ? "run" : undefined
                  }
                >
                  <i />
                  {t}
                </div>
              ))}
            </div>
          </>
        ) : (
          <>
            <div className="rep-top">
              <span
                className="rep-dom"
                style={{ "--c": error ? "#ff5d5d" : c } as CSSProperties}
              >
                <i />
                {rep.dom}
              </span>
              <span className="rep-tag">
                {error
                  ? L("Sikertelen mérés", "Test failed")
                  : rep.sample
                    ? L("Minta eredmény", "Sample result")
                    : L("Mobil mérés", "Mobile test")}
              </span>
            </div>
            {error && <p className="chk-err">{error}</p>}
            {!error && (
              <>
                <div className="grade" style={{ "--c": c } as CSSProperties}>
                  <b>{g}</b>
                  <span>
                    <strong>{verdict}</strong>
                    {L("Összpontszám: ", "Overall score: ")}
                    {avg}/100
                  </span>
                </div>
                <div className="gauges">
                  <Gauge label={L("Sebesség", "Speed")} v={s.perf} />
                  <Gauge label={L("Mobil", "Mobile")} v={s.mob} />
                  <Gauge label="Google" v={s.seo} />
                  <Gauge
                    label={L("Biztonság", "Security")}
                    v={s.sec ? 100 : 15}
                    txt={s.sec ? "✓" : "✕"}
                  />
                </div>
                <ul className="finds">
                  {finds.map(([lv, t]) => (
                    <li
                      key={t}
                      className={lv === "ok" ? "ok" : undefined}
                      style={
                        {
                          "--c":
                            lv === "ok"
                              ? "#34d17f"
                              : lv === "warn"
                                ? "#f5b83d"
                                : "#ff5d5d",
                        } as CSSProperties
                      }
                    >
                      {t}
                    </li>
                  ))}
                </ul>
              </>
            )}
            <div>
              <Link
                className="btn btn-volt"
                href={href(lang, "contact")}
                onClick={askAnalysis}
              >
                {L(
                  "Kérem a részletes elemzést, ingyen",
                  "Get the full analysis, free",
                )}{" "}
                <span className="ar">→</span>
              </Link>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
