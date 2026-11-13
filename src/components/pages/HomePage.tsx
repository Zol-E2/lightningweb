import Link from "next/link";
import type { CSSProperties } from "react";
import { CONTACT, SITE_URL, href, caseHref, type Lang } from "@/lib/i18n";
import { PRICE } from "@/lib/prices";
import Showcase from "@/components/interactive/Showcase";
import Checker from "@/components/interactive/Checker";
import BeforeAfter from "@/components/interactive/BeforeAfter";
import Race from "@/components/interactive/Race";
import LoadTime from "@/components/interactive/LoadTime";
import CaseGrid from "@/components/CaseGrid";
/** Structured data so Google understands the business (name, area, services). */
function JsonLd({ lang }: { lang: Lang }) {
  const hu = lang === "hu";
  const offer = (name: string, price: number, desc: string) => ({
    "@type": "Offer",
    priceCurrency: "HUF",
    priceSpecification: {
      "@type": "PriceSpecification",
      minPrice: price,
      priceCurrency: "HUF",
      valueAddedTaxIncluded: false,
    },
    itemOffered: { "@type": "Service", name, description: desc },
  });
  const data = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "@id": `${SITE_URL}/#business`,
    name: "LightningWeb",
    legalName: "Elek Zoltán E.V.",
    url: SITE_URL,
    logo: `${SITE_URL}/apple-icon.png`,
    image: `${SITE_URL}/og.png`,
    founder: {
      "@type": "Person",
      name: "Elek Zoltán",
      jobTitle: hu ? "alapító, webfejlesztő" : "founder, web developer",
      sameAs: [CONTACT.social.linkedin],
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: hu ? "Szolgáltatások" : "Services",
      itemListElement: [
        offer(
          hu ? "Bemutatkozó weboldal" : "Starter website",
          PRICE.base.starter[0],
          hu
            ? "Egyedi tervezésű, gyors weboldal 5 oldallal."
            : "Custom-designed fast website, 5 pages.",
        ),
        offer(
          hu ? "Céges weboldal" : "Business website",
          PRICE.base.business[0],
          hu
            ? "Bővebb céges weboldal 10 oldallal, SEO alapokkal."
            : "Larger business website, 10 pages, SEO basics.",
        ),
        offer(
          hu ? "Webshop" : "Online store",
          PRICE.base.shop[0],
          hu
            ? "Webshop fizetéssel, szállítással, számlázással."
            : "Online store with payments, shipping and invoicing.",
        ),
        offer(
          hu ? "Keresőoptimalizálás (SEO)" : "Search engine optimisation (SEO)",
          PRICE.monthly.seo,
          hu
            ? "Havi SEO, Google Cégprofil kezelés."
            : "Monthly SEO and Google Business Profile management.",
        ),
        offer(
          hu ? "Google és Facebook hirdetés" : "Google and Facebook ads",
          PRICE.monthly.ads,
          hu
            ? "Hirdetéskezelés a hirdetési költés 15%-áért, próbahónappal."
            : "Ad management for 15% of ad spend, with a trial month.",
        ),
        offer(
          hu ? "Közösségi média kezelés" : "Social media management",
          PRICE.monthly.social,
          hu
            ? "Facebook és Instagram tartalom és kezelés."
            : "Facebook and Instagram content and management.",
        ),
      ],
    },
    email: CONTACT.email,
    telephone: CONTACT.phone.replace(/\s/g, ""),
    address: {
      "@type": "PostalAddress",
      addressLocality: "Ibrány",
      addressRegion: "Szabolcs-Szatmár-Bereg",
      addressCountry: "HU",
    },
    sameAs: Object.values(CONTACT.social),
    slogan: "Finest Quality Quickly",
    areaServed: [
      "Debrecen",
      "Nyíregyháza",
      "Ibrány",
      "Szabolcs-Szatmár-Bereg",
      "Hajdú-Bihar",
      "Borsod-Abaúj-Zemplén",
      "Magyarország",
    ],
    knowsLanguage: ["hu", "en"],
    description:
      lang === "hu"
        ? "Weboldal készítés, webshop, Google és Facebook hirdetés, SEO és közösségi média kisvállalkozásoknak."
        : "Websites, online stores, Google and Facebook ads, SEO and social media for small businesses.",
    priceRange: "290 000 Ft –",
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export default function HomePage({ lang }: { lang: Lang }) {
  const hu = lang === "hu";
  return (
    <>
      <JsonLd lang={lang} />
      <section className="hero ink">
        <div className="grid-bg" />
        <div className="wrap">
          <div className="hero-copy">
            <span className="status mono">
              <i />
              {hu ? (
                <span>Új projekteket vállalunk</span>
              ) : (
                <span>Taking on new projects</span>
              )}
            </span>
            {hu ? (
              <h1>
                Weboldal, ami <span className="it">ügyfeleket</span> hoz.
              </h1>
            ) : (
              <h1>
                A website that brings <span className="it">customers</span>.
              </h1>
            )}
            {hu ? (
              <p className="lead">
                Legyen virágboltod, gyártó céged vagy üzleted: elkészítjük a
                weboldalad, és elérjük, hogy{" "}
                <b>megtaláljanak a Google-ön és a közösségi médiában</b>.
                Gyorsan, precízen, érthetően.
              </p>
            ) : (
              <p className="lead">
                Whether you run a flower shop, a factory or a store: we build
                your website and make sure{" "}
                <b>people find you on Google and social media</b>. Fast,
                precise, in plain language.
              </p>
            )}
            <div className="ctas">
              <Link className="btn btn-volt" href={href(lang, "contact")}>
                {hu ? (
                  <span>Ingyenes konzultáció</span>
                ) : (
                  <span>Free consultation</span>
                )}{" "}
                <span className="ar">→</span>
              </Link>
              <Link className="btn btn-line" href={href(lang, "work")}>
                {hu ? (
                  <span>Nézd meg a munkáinkat</span>
                ) : (
                  <span>See our work</span>
                )}
              </Link>
            </div>
            <Link
              className="proof"
              href={href(lang, "work")}
              style={{ textDecoration: "none" }}
            >
              <span className="faces">
                <i style={{ background: "#e8692c" }} />
                <i style={{ background: "#d4952a" }} />
                <i style={{ background: "#de3a2c" }} />
              </span>
              <span>
                <b style={{ fontWeight: "600", color: "#eceef0" }}>
                  TaskoGrill · Ruen Farm · Oz’s Chili
                </b>
                <br />
                {hu ? (
                  <span>gyártók, termelők és webshopok bíznak bennünk</span>
                ) : (
                  <span>manufacturers, producers and stores trust us</span>
                )}
              </span>
            </Link>
          </div>
          <Showcase lang={lang} />
        </div>
      </section>
      <div className="logos ink">
        <div className="wrap">
          <span className="mono" style={{ color: "var(--mute-d)" }}>
            {hu ? <span>Akik már ránk bízták</span> : <span>Trusted by</span>}
          </span>
          <div className="logo-row">
            <Link href={caseHref(lang, "tasko")}>
              <span>
                <i style={{ "--lc": "#e8692c" } as CSSProperties} />
                TaskoGrill
              </span>
            </Link>
            <Link href={caseHref(lang, "ruen")}>
              <span>
                <i style={{ "--lc": "#d4952a" } as CSSProperties} />
                Ruen Farm
              </span>
            </Link>
            <Link href={caseHref(lang, "oz")}>
              <span>
                <i style={{ "--lc": "#de3a2c" } as CSSProperties} />
                Oz’s Chili
              </span>
            </Link>
            <Link href={caseHref(lang, "envolve")}>
              <span>
                <i style={{ "--lc": "#c4562f" } as CSSProperties} />
                eNvolve
              </span>
            </Link>
          </div>
        </div>
      </div>
      <section className="sec ink" id="checker">
        <Checker lang={lang} />
      </section>
      <section className="sec paper">
        <div className="wrap">
          <div className="sec-head">
            <div style={{ display: "grid", gap: "20px" }}>
              <span className="label mono">
                {hu ? <span>Mit kapsz tőlünk</span> : <span>What you get</span>}
              </span>
              {hu ? (
                <h2>
                  Minden, hogy <span className="it acc">online</span> is
                  megtaláljanak.
                </h2>
              ) : (
                <h2>
                  Everything you need to be{" "}
                  <span className="it acc">found</span> online.
                </h2>
              )}
            </div>
            {hu ? (
              <p>
                Nem kell értened a technikához. Elmondod, mivel foglalkozol, a
                többit mi intézzük, és mindig érthetően elmondjuk, mi történik.
              </p>
            ) : (
              <p>
                You don&apos;t need to understand the tech. Tell us what you do;
                we handle the rest and always explain it in plain words.
              </p>
            )}
          </div>
          <div className="bento">
            <Link className="tile b-a" href={href(lang, "services")}>
              <span className="go">→</span>
              <div className="tt">
                {hu ? (
                  <h3>Weboldal, ami bemutat és elad</h3>
                ) : (
                  <h3>A website that presents and sells</h3>
                )}
                {hu ? (
                  <p>
                    Modern, gyors oldal, ami telefonon is tökéletes. A látogató
                    5 másodperc alatt megérti, mit kínálsz, és fel is hív.
                  </p>
                ) : (
                  <p>
                    A modern, fast site that&apos;s perfect on phones. Visitors
                    understand what you offer in 5 seconds and call you.
                  </p>
                )}
              </div>
              <div className="ill">
                <div className="mini-browser">
                  <div className="mc">
                    <i />
                    <i />
                    <i />
                  </div>
                  <div className="mb">
                    <div className="col">
                      <span className="ln b" />
                      <span className="ln b s" />
                      <span className="ln" />
                      <span className="ln s" />
                      <span className="btnm" />
                    </div>
                    <div className="img" />
                  </div>
                </div>
                <div className="mini-phone">
                  <i />
                </div>
              </div>
            </Link>
            <Link className="tile b-b" href={href(lang, "services")}>
              <span className="go">→</span>
              <div className="tt">
                {hu ? (
                  <h3>Webshop, ami éjjel is árul</h3>
                ) : (
                  <h3>A store that sells overnight</h3>
                )}
                {hu ? (
                  <p>Online fizetés, számla és szállítás automatikusan.</p>
                ) : (
                  <p>Online payment, invoicing and shipping on autopilot.</p>
                )}
              </div>
              <div className="ill">
                <div className="cart">
                  <div className="row">
                    <i />
                    <span>
                      {hu ? <span>Termék A</span> : <span>Product A</span>}
                    </span>
                    <b>12 900 Ft</b>
                  </div>
                  <div className="row">
                    <i />
                    <span>
                      {hu ? <span>Termék B</span> : <span>Product B</span>}
                    </span>
                    <b>8 400 Ft</b>
                  </div>
                  {hu ? (
                    <div className="pay">Fizetés kártyával</div>
                  ) : (
                    <div className="pay">Pay by card</div>
                  )}
                </div>
              </div>
            </Link>
            <Link className="tile b-c" href={href(lang, "services")}>
              <span className="go">→</span>
              <div className="tt">
                {hu ? (
                  <h3>Megtalálnak a Google-ön</h3>
                ) : (
                  <h3>Get found on Google</h3>
                )}
                {hu ? (
                  <p>
                    Amikor valaki rákeres a szolgáltatásodra a környéken, te
                    jelensz meg elsőként. Ezt hívják SEO-nak.
                  </p>
                ) : (
                  <p>
                    When someone searches for your service nearby, you show up
                    first. That&apos;s what SEO means.
                  </p>
                )}
              </div>
              <div className="ill">
                <div className="serp">
                  <div className="q">
                    <svg>
                      <use href="#i-search" />
                    </svg>
                    {hu ? (
                      <span>virágbolt a közelben</span>
                    ) : (
                      <span>florist near me</span>
                    )}
                  </div>
                  <div className="r you">
                    <span className="pos">#1</span>
                    {hu ? <b>A te céged</b> : <b>Your business</b>}★★★★★ ·{" "}
                    {hu ? <span>Nyitva</span> : <span>Open</span>}
                  </div>
                  <div className="r dim">
                    {hu ? <b>Konkurens</b> : <b>Competitor</b>}★★★☆☆
                  </div>
                </div>
              </div>
            </Link>
            <Link className="tile b-d dark" href={href(lang, "services")}>
              <span className="go">→</span>
              <div className="tt">
                {hu ? (
                  <h3>Hirdetések, amik hívást hoznak</h3>
                ) : (
                  <h3>Ads that make the phone ring</h3>
                )}
                {hu ? (
                  <p>
                    Google és Facebook hirdetések pont azoknak, akik most
                    keresnek. Minden forintról látod, mit hozott.
                  </p>
                ) : (
                  <p>
                    Google and Facebook ads for people searching right now. You
                    see what every forint brought in.
                  </p>
                )}
              </div>
              <div className="ill">
                <div className="ad">
                  <div className="ad-card">
                    <i />
                    <div>
                      {hu ? <small>Hirdetés</small> : <small>Sponsored</small>}
                      {hu ? (
                        <b>Acélszerkezet gyártás 2 hét alatt</b>
                      ) : (
                        <b>Steel structures in 2 weeks</b>
                      )}
                      {hu ? <span>Hívás most</span> : <span>Call now</span>}
                    </div>
                  </div>
                  <div className="bars">
                    <i style={{ height: "22%" }} />
                    <i style={{ height: "30%" }} />
                    <i style={{ height: "28%" }} />
                    <i style={{ height: "40%" }} />
                    <i style={{ height: "55%" }} />
                    <i style={{ height: "72%" }} />
                    <i style={{ height: "94%" }} />
                  </div>
                  <div className="bars-cap">
                    {hu ? (
                      <span>Hívások hetente</span>
                    ) : (
                      <span>Calls per week</span>
                    )}
                    <b>↑</b>
                  </div>
                </div>
              </div>
            </Link>
            <Link className="tile b-e dark" href={href(lang, "services")}>
              <span className="go">→</span>
              <div className="tt">
                {hu ? <h3>Közösségi média</h3> : <h3>Social media</h3>}
                {hu ? (
                  <p>Rendszeres, szép posztok, amik bizalmat építenek.</p>
                ) : (
                  <p>Regular, beautiful posts that build trust.</p>
                )}
              </div>
              <div className="ill">
                <div>
                  <div className="insta">
                    <i />
                    <i />
                    <i />
                    <i />
                    <i />
                    <i />
                  </div>
                  <span className="likes">
                    <b>♥</b>{" "}
                    {hu ? <span>új követők</span> : <span>new followers</span>}
                  </span>
                </div>
              </div>
            </Link>
            <Link className="tile b-f dark" href={href(lang, "services")}>
              <span className="go">→</span>
              <div className="tt">
                {hu ? (
                  <h3>Mi vigyázunk az oldaladra</h3>
                ) : (
                  <h3>We look after your site</h3>
                )}
                {hu ? (
                  <p>
                    Mentés, frissítés, védelem minden nap. Neked semmivel nem
                    kell foglalkoznod, csak az üzlettel.
                  </p>
                ) : (
                  <p>
                    Backups, updates and protection every day. You just focus on
                    the business.
                  </p>
                )}
              </div>
              <div className="ill">
                <div className="checks">
                  <div>
                    {hu ? (
                      <span>Biztonsági mentés kész</span>
                    ) : (
                      <span>Backup complete</span>
                    )}
                    <small>03:00</small>
                  </div>
                  <div>
                    {hu ? (
                      <span>Minden frissítve</span>
                    ) : (
                      <span>Everything updated</span>
                    )}
                    <small>04:12</small>
                  </div>
                  <div>
                    {hu ? (
                      <span>Védelem aktív</span>
                    ) : (
                      <span>Protection active</span>
                    )}
                    <small>24/7</small>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>
      <section className="sec ink">
        <div className="wrap">
          <div className="sec-head">
            <div style={{ display: "grid", gap: "20px" }}>
              <span className="label mono">
                {hu ? (
                  <span>Előtte és utána</span>
                ) : (
                  <span>Before and after</span>
                )}
              </span>
              {hu ? (
                <h2>
                  Az első benyomás <span className="it acc">mindent</span>{" "}
                  eldönt.
                </h2>
              ) : (
                <h2>
                  First impressions <span className="it acc">decide</span>{" "}
                  everything.
                </h2>
              )}
            </div>
            {hu ? (
              <p>
                Húzd a csúszkát. Egy elavult oldal elriasztja a vevőt, egy
                modern oldal bizalmat ad és cselekvésre késztet.
              </p>
            ) : (
              <p>
                Drag the slider. A dated site scares buyers away; a modern one
                builds trust and gets them to act.
              </p>
            )}
          </div>
          <BeforeAfter
            label={
              hu
                ? "Előtte és utána összehasonlítás"
                : "Before and after comparison"
            }
          >
            <div className="ba-old">
              <div className="o-head">*** Üdvözöljük honlapunkon! ***</div>
              <div className="o-nav">
                <span>Kezdőlap</span>
                <span>Rólunk</span>
                <span>Termékeink</span>
                <span>Árlista (PDF)</span>
                <span>Galéria</span>
                <span>Vendégkönyv</span>
                <span>Elérhetőség</span>
              </div>
              <div className="o-body">
                <div>
                  <b>Hírek</b>
                  <br />
                  2014.03.12 - Új termékek!
                  <br />
                  2013.11.02 - Nyitvatartás változás
                  <br />
                  <span className="blink">AKCIÓ!!!</span>
                </div>
                <div>
                  <b>Cégünkről</b>
                  <br />
                  Cégünk 1998 óta áll kedves ügyfeleink rendelkezésére.
                  Termékeinkről érdeklődjön telefonon munkaidőben. Az oldal
                  fejlesztés alatt áll.<div className="o-img">[kép]</div>Kérjük,
                  látogasson vissza később!
                </div>
                <div>
                  <b>Elérhetőség</b>
                  <br />
                  Tel: 06-1/123-4567
                  <br />
                  Fax: 06-1/123-4568
                  <br />
                  <span className="cnt">Látogatók: 004213</span>
                </div>
              </div>
            </div>
            <div className="ba-new">
              <div className="n-nav">
                <b>Kovács Kft.</b>
                <span>
                  <span>Termékek</span>
                  <span>Referenciák</span>
                  <span>Rólunk</span>
                </span>
                <em>Ajánlatkérés</em>
              </div>
              <div className="n-hero">
                <div className="n-img" />
                <div>
                  <div className="h5">
                    Minőség, ami <i>tovább</i> tart.
                  </div>
                  <p>
                    Több mint 25 év tapasztalat. Kérj ajánlatot, és 24 órán
                    belül visszahívunk.
                  </p>
                  <div className="n-btns">
                    <span>Ajánlatot kérek</span>
                    <span>Termékeink</span>
                  </div>
                </div>
              </div>
              <div className="n-stats">
                <div>
                  <b>25+</b>év
                </div>
                <div>
                  <b>1200+</b>ügyfél
                </div>
                <div>
                  <b>24h</b>válasz
                </div>
              </div>
            </div>
            <span className="ba-tag l">
              {hu ? <span>Előtte</span> : <span>Before</span>}
            </span>
            <span className="ba-tag r">
              {hu ? <span>Utána</span> : <span>After</span>}
            </span>
            <div className="ba-handle" />
          </BeforeAfter>
          <div className="ba-points">
            <div>
              {hu ? <b>Telefonon is tökéletes</b> : <b>Perfect on phones</b>}
              {hu ? (
                <span>A legtöbb látogató mobilról érkezik.</span>
              ) : (
                <span>Most visitors arrive on mobile.</span>
              )}
            </div>
            <div>
              {hu ? <b>Egyértelmű gombok</b> : <b>Clear buttons</b>}
              {hu ? (
                <span>Hívás, ajánlatkérés, foglalás egy érintéssel.</span>
              ) : (
                <span>Call, quote or book with one tap.</span>
              )}
            </div>
            <div>
              {hu ? <b>Bizalmat épít</b> : <b>Builds trust</b>}
              {hu ? (
                <span>Vélemények, referenciák, valódi számok.</span>
              ) : (
                <span>Reviews, projects, real numbers.</span>
              )}
            </div>
            <div>
              {hu ? <b>Villámgyors</b> : <b>Lightning fast</b>}
              {hu ? (
                <span>Senki nem vár egy lassú oldalra.</span>
              ) : (
                <span>Nobody waits for a slow site.</span>
              )}
            </div>
          </div>
        </div>
      </section>
      <section className="sec paper">
        <div className="wrap">
          <div className="sec-head">
            <div style={{ display: "grid", gap: "20px" }}>
              <span className="label mono">
                {hu ? (
                  <span>Miért fontos a gyorsaság</span>
                ) : (
                  <span>Why speed matters</span>
                )}
              </span>
              {hu ? (
                <h2>
                  A vevőid <span className="it acc">nem várnak</span>.
                </h2>
              ) : (
                <h2>
                  Your customers <span className="it acc">won&apos;t wait</span>
                  .
                </h2>
              )}
            </div>
            {hu ? (
              <p>
                Ha egy oldal lassan tölt be, a látogató visszalép, és a
                konkurenciánál köt ki. Mi a legmodernebb technológiával építünk,
                hogy az oldalad azonnal megjelenjen.
              </p>
            ) : (
              <p>
                If a page loads slowly, visitors go back and end up with a
                competitor. We build with the latest technology so your site
                appears instantly.
              </p>
            )}
          </div>
          <div className="speed">
            <Race>
              <div className="race-head">
                <span className="mono mute">
                  {hu ? (
                    <span>Betöltési idő telefonon</span>
                  ) : (
                    <span>Load time on a phone</span>
                  )}
                </span>
                <button className="btn btn-dark" type="button" id="race-btn">
                  {hu ? <span>Indítsd újra</span> : <span>Run again</span>}{" "}
                  <span className="ar">↻</span>
                </button>
              </div>
              <div className="lane fast">
                <div className="lane-top">
                  {hu ? <b>LightningWeb oldal</b> : <b>LightningWeb site</b>}
                  <span className="t" data-to="0.8">
                    0.8 s
                  </span>
                </div>
                <div className="track">
                  <i />
                </div>
                <span className="out">
                  {hu ? (
                    <span>A látogató már nézelődik és telefonál.</span>
                  ) : (
                    <span>The visitor is already browsing and calling.</span>
                  )}
                </span>
              </div>
              <div className="lane">
                <div className="lane-top">
                  {hu ? <b>Átlagos régi oldal</b> : <b>Typical old site</b>}
                  <span className="t" data-to="4.2">
                    4.2 s
                  </span>
                </div>
                <div className="track">
                  <i />
                </div>
                <span className="out">
                  {hu ? (
                    <span>A látogató közben visszalépett.</span>
                  ) : (
                    <span>The visitor has already left.</span>
                  )}
                </span>
              </div>
              <span className="mono mute" style={{ fontSize: "11px" }}>
                {hu ? <span>Szemléltetés</span> : <span>Illustration</span>}
              </span>
            </Race>
            <div className="live">
              <span className="pulse mono">
                {hu ? <span>Élő mérés</span> : <span>Live measurement</span>}
              </span>
              <LoadTime />
              {hu ? (
                <p>
                  Ennyi idő alatt töltött be ez az oldal nálad, most. Ilyen
                  gyors oldalt építünk neked is.
                </p>
              ) : (
                <p>
                  That&apos;s how long this page took to load for you, right
                  now. That&apos;s the speed we build for you.
                </p>
              )}
            </div>
          </div>
        </div>
      </section>
      <section className="sec ink">
        <div className="wrap">
          <div className="sec-head">
            <div style={{ display: "grid", gap: "20px" }}>
              <span className="label mono">
                {hu ? (
                  <span>Kinek dolgozunk</span>
                ) : (
                  <span>Who we work for</span>
                )}
              </span>
              {hu ? (
                <h2>
                  Kis cégeknek, <span className="it acc">nagy</span> tervekkel.
                </h2>
              ) : (
                <h2>
                  Small businesses with <span className="it acc">big</span>{" "}
                  plans.
                </h2>
              )}
            </div>
            {hu ? (
              <p>
                Legyen szó egy helyi szolgáltatóról, egy webshopról vagy egy
                gyártóról, aki külföldre is eladna: a cél mindig ugyanaz. Több
                érdeklődő, több vevő.
              </p>
            ) : (
              <p>
                A local service, an online store or a manufacturer selling
                abroad: the goal is always the same. More enquiries, more
                customers.
              </p>
            )}
          </div>
          <div className="who">
            <div className="wcard">
              <span className="ic">
                <svg>
                  <use href="#i-search" />
                </svg>
              </span>
              {hu ? <b>Helyi vállalkozások</b> : <b>Local businesses</b>}
              {hu ? (
                <p>
                  Weboldal, amit a környékbeliek megtalálnak a Google-ön és a
                  térképen, és ahonnan egy kattintással hívnak vagy ajánlatot
                  kérnek.
                </p>
              ) : (
                <p>
                  A website locals find on Google and Maps, and call or request
                  a quote from in one click.
                </p>
              )}
              <ul>
                {hu ? (
                  <li>Google Cégprofil és helyi SEO</li>
                ) : (
                  <li>Google Business Profile &amp; local SEO</li>
                )}
                {hu ? (
                  <li>Ajánlatkérő űrlap, hívás gomb</li>
                ) : (
                  <li>Quote form, call button</li>
                )}
                {hu ? <li>Közösségi média</li> : <li>Social media</li>}
              </ul>
              <Link className="wlink" href={href(lang, "contact")}>
                {hu ? <span>Beszéljünk</span> : <span>Let’s talk</span>} →
              </Link>
            </div>
            <div className="wcard">
              <span className="ic">
                <svg>
                  <use href="#i-shop" />
                </svg>
              </span>
              <b>Webshop</b>
              {hu ? (
                <p>
                  Online bolt bankkártyás fizetéssel, átlátható kategóriákkal és
                  olyan termékoldalakkal, amik eladnak.
                </p>
              ) : (
                <p>
                  An online store with card payments, clear categories and
                  product pages that sell.
                </p>
              )}
              <ul>
                {hu ? (
                  <li>Online fizetés (pl. Barion)</li>
                ) : (
                  <li>Online payments (e.g. Barion)</li>
                )}
                {hu ? (
                  <li>Készlet és rendeléskezelés</li>
                ) : (
                  <li>Stock &amp; order management</li>
                )}
                {hu ? (
                  <li>Google és Facebook hirdetések</li>
                ) : (
                  <li>Google &amp; Facebook ads</li>
                )}
              </ul>
              <span className="wex">
                {hu ? <span>Példák:</span> : <span>Examples:</span>}{" "}
                <Link href={caseHref(lang, "oz")}>Oz’s Chili</Link> ·{" "}
                <Link href={caseHref(lang, "tasko")}>TaskoGrill</Link>
              </span>
            </div>
            <div className="wcard">
              <span className="ic">
                <svg>
                  <use href="#i-factory" />
                </svg>
              </span>
              {hu ? <b>Gyártók és termelők</b> : <b>Makers &amp; producers</b>}
              {hu ? (
                <p>
                  Oldal, ami megmutatja a minőséget, bizalmat épít az ismeretlen
                  vevőben, és akár angolul is elad, külföldre.
                </p>
              ) : (
                <p>
                  A site that shows your quality, builds trust with new buyers,
                  and sells abroad in English too.
                </p>
              )}
              <ul>
                {hu ? (
                  <li>Termék- és gyártásbemutató</li>
                ) : (
                  <li>Product &amp; production showcase</li>
                )}
                {hu ? (
                  <li>Több nyelv, export</li>
                ) : (
                  <li>Multiple languages, export</li>
                )}
                {hu ? (
                  <li>Nagyker és egyedi ajánlatkérés</li>
                ) : (
                  <li>Wholesale &amp; custom quotes</li>
                )}
              </ul>
              <span className="wex">
                {hu ? <span>Példák:</span> : <span>Examples:</span>}{" "}
                <Link href={caseHref(lang, "tasko")}>TaskoGrill</Link> ·{" "}
                <Link href={caseHref(lang, "ruen")}>Ruen Farm</Link>
              </span>
            </div>
          </div>
        </div>
      </section>
      <section className="sec paper">
        <div className="wrap">
          <div className="sec-head">
            <div style={{ display: "grid", gap: "20px" }}>
              <span className="label mono">
                {hu ? <span>Így dolgozunk</span> : <span>How it works</span>}
              </span>
              {hu ? (
                <h2>
                  Neked csak <span className="it acc">két dolgod</span> van.
                </h2>
              ) : (
                <h2>
                  You only do <span className="it acc">two things</span>.
                </h2>
              )}
            </div>
            {hu ? (
              <p>
                Elmondod, mit szeretnél, és jóváhagyod a tervet. Minden mást mi
                csinálunk, fix határidőre.
              </p>
            ) : (
              <p>
                Tell us what you want and approve the design. We do everything
                else, on a fixed deadline.
              </p>
            )}
          </div>
          <div className="steps">
            <div className="step">
              <div className="n">
                <b>1</b>
                {hu ? <span>1. nap</span> : <span>Day 1</span>}
              </div>
              {hu ? <h3>Beszélgetünk</h3> : <h3>We talk</h3>}
              {hu ? (
                <p>
                  Egy ingyenes hívásban elmondod, mivel foglalkozol és mit
                  szeretnél elérni.
                </p>
              ) : (
                <p>
                  On a free call you tell us what you do and what you want to
                  achieve.
                </p>
              )}
              <span className="who you">
                {hu ? <span>Te</span> : <span>You</span>}
              </span>
            </div>
            <div className="step">
              <div className="n">
                <b>2</b>
                {hu ? <span>1. hét</span> : <span>Week 1</span>}
              </div>
              {hu ? <h3>Megtervezzük</h3> : <h3>We design</h3>}
              {hu ? (
                <p>
                  Elkészítjük az oldal látványtervét, a szövegeket is mi írjuk.
                </p>
              ) : (
                <p>We create the design and write the copy for you.</p>
              )}
              <span className="who">LightningWeb</span>
            </div>
            <div className="step">
              <div className="n">
                <b>3</b>
                {hu ? <span>1. hét vége</span> : <span>End of week 1</span>}
              </div>
              {hu ? <h3>Jóváhagyod</h3> : <h3>You approve</h3>}
              {hu ? (
                <p>
                  Megnézed, kéred a módosításokat, mi pedig finomítjuk, amíg
                  tökéletes nem lesz.
                </p>
              ) : (
                <p>
                  You review, ask for changes, and we refine until it&apos;s
                  right.
                </p>
              )}
              <span className="who you">
                {hu ? <span>Te</span> : <span>You</span>}
              </span>
            </div>
            <div className="step">
              <div className="n">
                <b>4</b>
                {hu ? <span>2–3. hét</span> : <span>Weeks 2–3</span>}
              </div>
              {hu ? <h3>Élesítjük</h3> : <h3>We launch</h3>}
              {hu ? (
                <p>
                  Megépítjük, beállítjuk a Google-t, és az oldal elindul. Utána
                  is melletted vagyunk.
                </p>
              ) : (
                <p>
                  We build it, set up Google, and go live. We stay with you
                  afterwards.
                </p>
              )}
              <span className="who">LightningWeb</span>
            </div>
          </div>
        </div>
      </section>
      <section className="sec ink">
        <div className="wrap">
          <div className="sec-head">
            <div style={{ display: "grid", gap: "20px" }}>
              <span className="label mono">
                {hu ? <span>Munkáink</span> : <span>Our work</span>}
              </span>
              {hu ? (
                <h2>
                  Munkák, amik <span className="it acc">élesben</span> futnak.
                </h2>
              ) : (
                <h2>
                  Work that’s <span className="it acc">live</span> right now.
                </h2>
              )}
            </div>
            <div>
              <Link className="btn btn-line" href={href(lang, "work")}>
                {hu ? (
                  <span>Összes referencia</span>
                ) : (
                  <span>All projects</span>
                )}{" "}
                <span className="ar">→</span>
              </Link>
            </div>
          </div>
          <CaseGrid lang={lang} />
        </div>
      </section>
      <section className="sec paper">
        <div className="wrap">
          <div className="sec-head">
            <div style={{ display: "grid", gap: "20px" }}>
              <span className="label mono">
                {hu ? <span>Amit garantálunk</span> : <span>Our promises</span>}
              </span>
              {hu ? (
                <h2>
                  Nyugodtan <span className="it acc">ránk bízhatod</span>.
                </h2>
              ) : (
                <h2>
                  You can <span className="it acc">rely on us</span>.
                </h2>
              )}
            </div>
          </div>
          <div className="guar">
            <div className="g">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M4 7h16M4 12h10M4 17h7" />
                <path d="M17 15l2 2 3-4" />
              </svg>
              {hu ? <b>Fix ár</b> : <b>Fixed price</b>}
              {hu ? (
                <span>
                  Amit az ajánlatban leírtunk, annyit fizetsz. Plusz kérésre
                  előre jóváhagyott ajánlatot adunk.
                </span>
              ) : (
                <span>
                  You pay what the quote says. Any extras get a separate quote
                  you approve first.
                </span>
              )}
            </div>
            <div className="g">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="12" cy="12" r="9" />
                <path d="M12 7v5l3 2" />
              </svg>
              {hu ? <b>Fix határidő</b> : <b>Fixed deadline</b>}
              {hu ? (
                <span>
                  Start 3 hét, Business 4 hét, Webshop 6 hét, a tartalmak
                  beérkezésétől.
                </span>
              ) : (
                <span>
                  Start 3 weeks, Business 4, Webshop 6, from when we get your
                  content.
                </span>
              )}
            </div>
            <div className="g">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect x="5" y="10" width="14" height="10" rx="2" />
                <path d="M8 10V7a4 4 0 018 0v3" />
              </svg>
              {hu ? <b>Az oldal a tiéd</b> : <b>You own the site</b>}
              {hu ? (
                <span>
                  Teljes admin hozzáférés, a domain a te nevedre kerül. Semmit
                  nem tartunk vissza.
                </span>
              ) : (
                <span>
                  Full admin access, the domain is in your name. We never hold
                  anything back.
                </span>
              )}
            </div>
            <div className="g">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M14.7 6.3a4 4 0 00-5.4 5.4L4 17l3 3 5.3-5.3a4 4 0 005.4-5.4l-2.5 2.5-2.4-.6-.6-2.4z" />
              </svg>
              {hu ? (
                <b>6 hónap ingyenes hibajavítás</b>
              ) : (
                <b>6 months of free fixes</b>
              )}
              {hu ? (
                <span>
                  Ha átadás után valami nem úgy működik, ahogy megbeszéltük,
                  ingyen javítjuk.
                </span>
              ) : (
                <span>
                  If something doesn’t work as agreed after launch, we fix it
                  free.
                </span>
              )}
            </div>
            <div className="g">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M12 3l8 4v5c0 4.5-3.4 8.3-8 9-4.6-.7-8-4.5-8-9V7z" />
                <path d="M9 12l2 2 4-4" />
              </svg>
              {hu ? <b>Kockázatmentes start</b> : <b>Risk-free start</b>}
              {hu ? (
                <span>
                  Ha az első design két javítási kör után sem tetszik,
                  visszaadjuk az előleget (a domain és a tárhely díja
                  kivételével).
                </span>
              ) : (
                <span>
                  If you don’t like the first design after two rounds of
                  changes, we refund the deposit (minus domain and hosting).
                </span>
              )}
            </div>
          </div>
          <div className="quote" style={{ marginTop: "clamp(64px,8vw,110px)" }}>
            <span className="label mono">
              {hu ? (
                <span>Ügyfeleink mondták</span>
              ) : (
                <span>What clients say</span>
              )}
            </span>
            {hu ? (
              <blockquote>
                Ide kerül egy valódi ügyfélvélemény, ami konkrétan elmondja, mi
                változott az új weboldal után.”
              </blockquote>
            ) : (
              <blockquote>
                A real client testimonial goes here, saying exactly what changed
                after the new website.”
              </blockquote>
            )}
            <div className="person">
              <i />
              <div>
                {hu ? <b>Ügyfél neve</b> : <b>Client name</b>}
                {hu ? <span>Cégnév · Város</span> : <span>Company · City</span>}
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="sec ink">
        <div className="wrap seo-text">
          <div style={{ display: "grid", gap: "22px", alignContent: "start" }}>
            <span className="label mono">
              {hu ? (
                <span>Weboldal készítés kisvállalkozásoknak</span>
              ) : (
                <span>Websites for small businesses</span>
              )}
            </span>
            {hu ? (
              <h2>
                Weboldal készítés, webshop és online marketing{" "}
                <span className="it acc">egy helyen</span>.
              </h2>
            ) : (
              <h2>
                Web design, online stores and marketing{" "}
                <span className="it acc">in one place</span>.
              </h2>
            )}
            {hu ? (
              <div className="cols">
                <p>
                  A LightningWeb helyi vállalkozásoknak, kisvállalkozásoknak és
                  webshopoknak készít weboldalt. Legyen szó gyártó cégről,
                  kereskedésről, virágboltról, étteremről vagy szolgáltatóról,
                  olyan oldalt építünk, ami érthetően bemutatja, mit kínálsz, és
                  amiből érdeklődő, hívás vagy vásárlás lesz.
                </p>
                <h3>Gyors és biztonságos weboldalak</h3>
                <p>
                  Egyedi weboldalainkat modern technológiával (Next.js) építjük,
                  ezért gyorsabbak és biztonságosabbak a hagyományos
                  megoldásoknál. Ha egyszerűbb, könnyen szerkeszthető oldalra
                  van szükséged, WordPress alapon is dolgozunk.
                </p>
                <h3>Hogy meg is találjanak</h3>
                <p>
                  A jó weboldal csak az első lépés. Keresőoptimalizálással
                  (SEO), Google Cégprofillal, Google és Facebook hirdetésekkel,
                  valamint közösségi média kezeléssel érjük el, hogy a
                  környékeden keresők téged találjanak meg elsőként.
                </p>
              </div>
            ) : (
              <div className="cols">
                <p>
                  LightningWeb builds websites for local businesses, small
                  companies and online stores. Whether you run a manufacturing
                  company, a shop, a florist, a restaurant or a service, we
                  build a site that clearly explains what you offer and turns
                  visitors into enquiries, calls and sales.
                </p>
                <h3>Fast, secure websites</h3>
                <p>
                  We build custom sites with modern technology (Next.js), so
                  they&apos;re faster and more secure than traditional setups.
                  If you need a simpler, easy-to-edit site, we also work with
                  WordPress.
                </p>
                <h3>So people actually find you</h3>
                <p>
                  A good website is just the first step. With SEO, Google
                  Business Profile, Google and Facebook ads and social media
                  management, we make sure local searchers find you first.
                </p>
              </div>
            )}
          </div>
          <div className="faq">
            <details open>
              <summary>
                {hu ? (
                  <span>Mennyibe kerül egy weboldal?</span>
                ) : (
                  <span>How much does a website cost?</span>
                )}
              </summary>
              {hu ? (
                <p>
                  Egy bemutatkozó oldal 290 000 Ft-tól, egy céges oldal 490 000
                  Ft-tól, egy webshop 590 000 Ft-tól indul. Az árak véglegesek,
                  áfa nem kerül rájuk. A pontos, fix árat egy ingyenes
                  beszélgetés után mondjuk meg, rejtett költségek nélkül.
                </p>
              ) : (
                <p>
                  A starter site begins at 290,000 HUF, a business site at
                  490,000 HUF and an online store at 590,000 HUF. Prices are
                  final, with no VAT added. We give an exact, fixed price after
                  a free call, with no hidden costs.
                </p>
              )}
            </details>
            <details>
              <summary>
                {hu ? (
                  <span>Nekem kell megírnom a szövegeket?</span>
                ) : (
                  <span>Do I have to write the text?</span>
                )}
              </summary>
              {hu ? (
                <p>
                  Nem. Elég, ha elmondod, mivel foglalkozol. A szövegeket mi
                  írjuk meg úgy, hogy a vevőid és a Google is értse.
                </p>
              ) : (
                <p>
                  No. Just tell us what you do. We write the copy so both
                  customers and Google understand it.
                </p>
              )}
            </details>
            <details>
              <summary>
                {hu ? (
                  <span>Tudom majd én is módosítani az oldalt?</span>
                ) : (
                  <span>Can I edit the site myself?</span>
                )}
              </summary>
              {hu ? (
                <p>
                  Igen. Kapsz egy egyszerű felületet, ahol a szövegeket,
                  képeket, árakat magad is átírhatod. Ha nem szeretnéd,
                  megcsináljuk helyetted.
                </p>
              ) : (
                <p>
                  Yes. You get a simple panel to change text, images and prices.
                  If you&apos;d rather not, we&apos;ll do it for you.
                </p>
              )}
            </details>
            <details>
              <summary>
                {hu ? (
                  <span>Mi az a SEO, egyszerűen?</span>
                ) : (
                  <span>What is SEO, simply?</span>
                )}
              </summary>
              {hu ? (
                <p>
                  Az a munka, amitől a Google előrébb sorolja az oldaladat,
                  amikor valaki rákeres arra, amit árulsz. Minél előrébb vagy,
                  annál több vevő talál meg.
                </p>
              ) : (
                <p>
                  It&apos;s the work that makes Google rank your site higher
                  when someone searches for what you sell. The higher you are,
                  the more customers find you.
                </p>
              )}
            </details>
            <details>
              <summary>
                {hu ? (
                  <span>Mennyi idő alatt készül el?</span>
                ) : (
                  <span>How long does it take?</span>
                )}
              </summary>
              {hu ? (
                <p>
                  Egy bemutatkozó oldal általában 2–3 hét, egy webshop 4–6 hét.
                </p>
              ) : (
                <p>
                  A starter site usually takes 2–3 weeks, an online store 4–6
                  weeks.
                </p>
              )}
            </details>
          </div>
        </div>
      </section>
    </>
  );
}
