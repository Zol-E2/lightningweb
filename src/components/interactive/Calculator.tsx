"use client";

import Link from "next/link";
import { useState } from "react";
import { href, type Lang } from "@/lib/i18n";
import { setDraft } from "@/lib/draft";
import { PRICE, formatFt, type SiteType } from "@/lib/prices";

type Extra = keyof typeof PRICE.extra | "lang";
type Monthly = keyof typeof PRICE.monthly;

/** Price calculator: guide price for a site + monthly services, can be sent with the enquiry. */
export default function Calculator({ lang }: { lang: Lang }) {
  const hu = lang === "hu";
  const L = (h: string, e: string) => (hu ? h : e);
  const [type, setType] = useState<SiteType>("business");
  const [pages, setPages] = useState(8);
  const [extras, setExtras] = useState<Set<Extra>>(new Set(["copy"]));
  const [monthly, setMonthly] = useState<Set<Monthly>>(new Set(["care"]));

  const toggle = <T,>(set: Set<T>, v: T, apply: (s: Set<T>) => void) => {
    const n = new Set(set);
    if (n.has(v)) n.delete(v);
    else n.add(v);
    apply(n);
  };

  const types: { id: SiteType; name: string; desc: string }[] = [
    {
      id: "starter",
      name: "Start",
      desc: L("Egyszerű, profi jelenlét", "Simple, professional presence"),
    },
    {
      id: "business",
      name: "Business",
      desc: L("Teljes céges weboldal", "Full business website"),
    },
    { id: "shop", name: "Webshop", desc: L("Online eladás", "Sell online") },
  ];
  const extraNames: Record<Extra, string> = {
    lang: L("Két nyelv", "Two languages"),
    blog: "Blog",
    copy: L("Szövegírás", "Copywriting"),
    logo: L("Logótervezés", "Logo design"),
    photo: L("Fotózás", "Photography"),
  };
  const monthlyNames: Record<Monthly, string> = {
    care: L("Karbantartás", "Maintenance"),
    seo: "Google / SEO",
    ads: L("Hirdetéskezelés", "Ad management"),
    social: "Social media",
  };

  /* --- the sum --- */
  const [basePrice, included] = PRICE.base[type];
  const rows: [string, number][] = [
    [
      `${types.find((t) => t.id === type)!.name} ${L("oldal", "site")} (${included} ${L("oldal", "pages")})`,
      basePrice,
    ],
  ];
  const extraPages = Math.max(0, pages - included);
  if (extraPages)
    rows.push([
      `+${extraPages} ${L("aloldal", "pages")}`,
      extraPages * PRICE.page,
    ]);
  (Object.keys(PRICE.extra) as (keyof typeof PRICE.extra)[]).forEach((x) => {
    if (extras.has(x)) rows.push([extraNames[x], PRICE.extra[x]]);
  });
  let once = rows.reduce((a, r) => a + r[1], 0);
  if (extras.has("lang")) {
    const add = Math.round((once * PRICE.secondLanguage) / 1000) * 1000;
    rows.push([L("Két nyelv (+25%)", "Two languages (+25%)"), add]);
    once += add;
  }
  const mList = (Object.keys(monthlyNames) as Monthly[]).filter((m) =>
    monthly.has(m),
  );
  const month = mList.reduce(
    (a, m) => a + (m === "care" ? PRICE.care[type] : PRICE.monthly[m]),
    0,
  );

  const summary =
    L("Árkalkulátor összesítés:", "Calculator summary:") +
    "\n" +
    rows.map((r) => `• ${r[0]}`).join("\n") +
    (mList.length
      ? `\n${L("Havi: ", "Monthly: ")}${mList.map((m) => monthlyNames[m]).join(", ")}`
      : "") +
    `\n${L("Becsült ár: ", "Estimate: ")}${formatFt(once)}${month ? ` + ${formatFt(month)}${L("/hó", "/mo")}` : ""}`;

  return (
    <div className="calc">
      <div className="calc-in">
        <div className="cg">
          <span>{L("1. Milyen oldal kell?", "1. What do you need?")}</span>
          <div className="types">
            {types.map((t) => (
              <span key={t.id}>
                <input
                  type="radio"
                  name="ctype"
                  id={`ct-${t.id}`}
                  checked={type === t.id}
                  onChange={() => setType(t.id)}
                />
                <label htmlFor={`ct-${t.id}`}>
                  <b>{t.name}</b>
                  <small>{t.desc}</small>
                </label>
              </span>
            ))}
          </div>
        </div>
        <div className="cg">
          <span>
            {L(
              "2. Hány aloldal? (pl. Rólunk, Szolgáltatások, Kapcsolat)",
              "2. How many pages? (e.g. About, Services, Contact)",
            )}
          </span>
          <div className="range-row">
            <input
              type="range"
              min={1}
              max={25}
              value={pages}
              onChange={(e) => setPages(+e.target.value)}
              aria-label={L("Aloldalak száma", "Number of pages")}
            />
            <output>{pages}</output>
          </div>
        </div>
        <div className="cg">
          <span>{L("3. Extrák", "3. Extras")}</span>
          <div className="chips">
            {(Object.keys(extraNames) as Extra[]).map((x) => (
              <span key={x}>
                <input
                  type="checkbox"
                  id={`cx-${x}`}
                  checked={extras.has(x)}
                  onChange={() => toggle(extras, x, setExtras)}
                />
                <label htmlFor={`cx-${x}`}>{extraNames[x]}</label>
              </span>
            ))}
          </div>
        </div>
        <div className="cg">
          <span>{L("4. Havi szolgáltatások", "4. Monthly services")}</span>
          <div className="chips">
            {(Object.keys(monthlyNames) as Monthly[]).map((m) => (
              <span key={m}>
                <input
                  type="checkbox"
                  id={`cm-${m}`}
                  checked={monthly.has(m)}
                  onChange={() => toggle(monthly, m, setMonthly)}
                />
                <label htmlFor={`cm-${m}`}>{monthlyNames[m]}</label>
              </span>
            ))}
          </div>
        </div>
      </div>
      <aside className="calc-out" aria-live="polite">
        <span className="mono" style={{ color: "var(--volt)" }}>
          {L("Becsült ár", "Estimate")}
        </span>
        <div className="big">
          {formatFt(once)} <small>{L("-tól, egyszeri", "from, one-off")}</small>
        </div>
        <ul className="calc-sum">
          {rows.map((r) => (
            <li key={r[0]}>
              <span>{r[0]}</span>
              <b>{formatFt(r[1])}</b>
            </li>
          ))}
        </ul>
        <div className="mo">
          <span>{L("Havidíj", "Monthly")}</span>
          <b>
            {month ? `${formatFt(month)}${L(" / hó-tól", " / mo from")}` : "—"}
          </b>
        </div>
        <Link
          className="btn btn-volt"
          href={href(lang, "contact")}
          onClick={() => setDraft(summary)}
        >
          {L("Ajánlatot kérek ezzel", "Request a quote with this")}{" "}
          <span className="ar">→</span>
        </Link>
        <span
          className="mono"
          style={{ color: "var(--mute-d)", fontSize: "10.5px" }}
        >
          {L(
            "Irányár · végleges ár, áfa nélkül",
            "Guide price · final, no VAT",
          )}
        </span>
      </aside>
    </div>
  );
}
