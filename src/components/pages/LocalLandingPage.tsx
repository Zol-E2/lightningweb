import Link from "next/link";
import { CaseCard } from "@/components/CaseGrid";
import JsonLd, { breadcrumbs } from "@/components/JsonLd";
import { CONTACT, href, SITE_URL } from "@/lib/i18n";
import type { LocalPage } from "@/lib/local";
import { PRICE, formatFt } from "@/lib/prices";

/** Hungarian city landing page: "Weboldal készítés <város>". */
export default function LocalLandingPage({ p }: { p: LocalPage }) {
  const url = `${SITE_URL}/${p.slug}`;
  return (
    <>
      <JsonLd
        data={breadcrumbs([
          ["Főoldal", SITE_URL],
          [`Weboldal készítés ${p.city}`, url],
        ])}
      />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Service",
          name: `Weboldal és honlap készítés ${p.city}`,
          serviceType: "Weboldal készítés",
          url,
          provider: { "@id": `${SITE_URL}/#business` },
          areaServed: p.near.map((name) => ({ "@type": "City", name })),
          offers: {
            "@type": "Offer",
            priceCurrency: "HUF",
            price: PRICE.base.starter[0],
          },
        }}
      />
      <section className="sub ink">
        <div className="grid-bg" />
        <div className="wrap">
          <span className="crumb mono">
            <b>/</b> <span>weboldal készítés · {p.city.toLowerCase()}</span>
          </span>
          <h1>
            Weboldal készítés <span className="it">{p.inCity}</span>.
          </h1>
          <p className="lead">{p.lead}</p>
          <div className="ctas">
            <Link className="btn btn-volt" href={href("hu", "contact")}>
              Ingyenes ajánlatot kérek <span className="ar">→</span>
            </Link>
            <a className="btn btn-line" href={CONTACT.phoneHref}>
              Hívj: {CONTACT.phone}
            </a>
          </div>
        </div>
      </section>

      <section className="sec paper">
        <div className="wrap">
          <div className="csr">
            {p.why.map(([t, d], j) => (
              <div key={t}>
                <span className="mono acc">0{j + 1}</span>
                <h2>{t}</h2>
                <p>{d}</p>
              </div>
            ))}
          </div>

          <h2 className="mid-h">Amit {p.adj} vállalkozásoknak készítünk:</h2>
          <div className="feats">
            <div className="feat">
              <b>Bemutatkozó weboldal</b>
              <span>
                {formatFt(PRICE.base.starter[0])}-tól, {PRICE.base.starter[1]}{" "}
                oldallal, a szövegeket is megírjuk.
              </span>
            </div>
            <div className="feat">
              <b>Céges weboldal</b>
              <span>
                {formatFt(PRICE.base.business[0])}-tól, {PRICE.base.business[1]}{" "}
                oldallal, SEO alapokkal.
              </span>
            </div>
            <div className="feat">
              <b>Webshop</b>
              <span>
                {formatFt(PRICE.base.shop[0])}-tól, bankkártyás fizetéssel,
                szállítással, számlázással.
              </span>
            </div>
            <div className="feat">
              <b>Google és Facebook</b>
              <span>
                Keresőoptimalizálás, Google Cégprofil, hirdetések és közösségi
                média.
              </span>
            </div>
          </div>
          <p style={{ marginTop: "28px", color: "var(--mute)" }}>
            Áfát nem számolunk fel, a végleges, fix árat egy ingyenes
            beszélgetés után mondjuk meg. Részletek az{" "}
            <Link href={href("hu", "pricing")}>Árak</Link> oldalon.
          </p>
        </div>
      </section>

      <section className="sec ink">
        <div className="wrap">
          <h2 className="mid-h" style={{ marginTop: 0 }}>
            Néhány munkánk a környékről
          </h2>
          <div className="cases">
            <CaseCard k="tasko" lang="hu" />
            <CaseCard k="ruen" lang="hu" />
          </div>
        </div>
      </section>

      <section className="sec ink" style={{ paddingTop: 0 }}>
        <div className="wrap seo-text">
          <div style={{ display: "grid", gap: "22px", alignContent: "start" }}>
            <span className="label mono">
              <span>Honlap készítés {p.city} és környéke</span>
            </span>
            <h2>
              Honlap, ami <span className="it acc">vevőt hoz</span>, nem csak
              szép.
            </h2>
            <div className="cols">
              <p>
                Egy {p.adj} vállalkozás vevőinek többsége a telefonján keres rá
                arra, amire szüksége van: „villanyszerelő {p.city}”, „virágbolt{" "}
                {p.city}”, „autószerviz a közelben”. Ha ilyenkor a te oldalad
                lassú, régi vagy meg sem jelenik, a vevő a versenytársadat
                hívja.
              </p>
              <p>
                Mi olyan weboldalt és honlapot készítünk, ami pár másodperc
                alatt betölt, telefonon is kényelmes, és világosan elmondja, mit
                kínálsz és hogyan érhetnek el. A Google-beállítást és a Google
                Cégprofilt is elvégezzük, hogy a helyi keresésekben is
                megtaláljanak.
              </p>
              <h3>Ahol dolgozunk</h3>
              <p>
                {p.near.join(", ")} és a környező települések, de online az
                egész országban és külföldön is vállalunk munkát.
              </p>
            </div>
          </div>
          <div className="faq">
            {p.faq.map(([q, a], i) => (
              <details key={q} open={i === 0}>
                <summary>
                  <span>{q}</span>
                </summary>
                <p>{a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
