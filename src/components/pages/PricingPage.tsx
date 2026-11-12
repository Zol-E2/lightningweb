import type { Lang } from "@/lib/i18n";
import Calculator from "@/components/interactive/Calculator";
import PickLink from "@/components/interactive/PickLink";
export default function PricingPage({ lang }: { lang: Lang }) {
  const hu = lang === "hu";
  return (
    <>
      <section className="sub ink">
        <div className="grid-bg" />
        <div className="wrap">
          <span className="crumb mono">
            <b>/</b> {hu ? <span>arak</span> : <span>pricing</span>}
          </span>
          {hu ? (
            <h1>
              Átlátható árak. <span className="it">Nulla</span> meglepetés.
            </h1>
          ) : (
            <h1>
              Clear pricing. <span className="it">Zero</span> surprises.
            </h1>
          )}
          {hu ? (
            <p className="lead">
              Irányárak, hogy tudd, mire számíts. A pontos, fix árat egy
              ingyenes beszélgetés után kapod, és ahhoz tartjuk magunkat.
            </p>
          ) : (
            <p className="lead">
              Guide prices so you know what to expect. You get an exact, fixed
              price after a free call, and we stick to it.
            </p>
          )}
        </div>
      </section>
      <section className="sec paper">
        <div className="wrap">
          <div className="sec-head">
            <div style={{ display: "grid", gap: "20px" }}>
              <span className="label mono">
                {hu ? (
                  <span>Weboldal · egyszeri díj</span>
                ) : (
                  <span>Website · one-off</span>
                )}
              </span>
              {hu ? (
                <h2>Válaszd ki az indulást.</h2>
              ) : (
                <h2>Choose your start.</h2>
              )}
            </div>
          </div>
          <div className="plans four">
            <div className="plan">
              <h3>Start</h3>
              <div className="price">
                290 000 Ft {hu ? <small>-tól</small> : <small>from</small>}
              </div>
              {hu ? (
                <p>Ha most indulsz, vagy egy egyszerű, profi oldal kell.</p>
              ) : (
                <p>
                  If you’re starting out or need a simple, professional site.
                </p>
              )}
              {hu ? (
                <ul className="ticks">
                  <li>1–5 aloldal</li>
                  <li>Telefonra optimalizálva</li>
                  <li>Kapcsolati űrlap</li>
                  <li>Alap SEO és Google Cégprofil</li>
                  <li>Elkészül 3 hét alatt</li>
                </ul>
              ) : (
                <ul className="ticks">
                  <li>1–5 pages</li>
                  <li>Phone-optimised</li>
                  <li>Contact form</li>
                  <li>Basic SEO &amp; Google Business Profile</li>
                  <li>Ready in 3 weeks</li>
                </ul>
              )}
              <PickLink lang={lang} pick="Start" className="btn btn-line">
                {hu ? <span>Ezt választom</span> : <span>I’ll take this</span>}{" "}
                <span className="ar">→</span>
              </PickLink>
            </div>
            <div className="plan pop">
              {hu ? (
                <span className="pillb">Legnépszerűbb</span>
              ) : (
                <span className="pillb">Most popular</span>
              )}
              <h3>Business</h3>
              <div className="price">
                490 000 Ft {hu ? <small>-tól</small> : <small>from</small>}
              </div>
              {hu ? (
                <p>
                  Teljes céges oldal, ami folyamatosan hozza az érdeklődőket.
                </p>
              ) : (
                <p>A full business site that keeps enquiries coming.</p>
              )}
              {hu ? (
                <ul className="ticks">
                  <li>Max. 10 aloldal</li>
                  <li>Blog és ajánlatkérő űrlap</li>
                  <li>Bővített SEO, Google Analytics</li>
                  <li>Két nyelv opcionálisan</li>
                  <li>Elkészül 4 hét alatt</li>
                </ul>
              ) : (
                <ul className="ticks">
                  <li>Up to 10 pages</li>
                  <li>Blog and quote form</li>
                  <li>Extended SEO, Google Analytics</li>
                  <li>Optional second language</li>
                  <li>Ready in 4 weeks</li>
                </ul>
              )}
              <PickLink lang={lang} pick="Business" className="btn btn-dark">
                {hu ? <span>Ezt választom</span> : <span>I’ll take this</span>}{" "}
                <span className="ar">→</span>
              </PickLink>
            </div>
            <div className="plan">
              <h3>Webshop</h3>
              <div className="price">
                590 000 Ft {hu ? <small>-tól</small> : <small>from</small>}
              </div>
              {hu ? (
                <p>Ha online szeretnél eladni.</p>
              ) : (
                <p>If you want to sell online.</p>
              )}
              {hu ? (
                <ul className="ticks">
                  <li>Bankkártyás fizetés (Barion)</li>
                  <li>Számlázó és futár bekötése</li>
                  <li>30 termék feltöltése</li>
                  <li>Szállítási módok</li>
                  <li>Elkészül 5–6 hét alatt</li>
                </ul>
              ) : (
                <ul className="ticks">
                  <li>Card payments (Barion)</li>
                  <li>Invoicing &amp; courier set-up</li>
                  <li>30 products uploaded</li>
                  <li>Shipping options</li>
                  <li>Ready in 5–6 weeks</li>
                </ul>
              )}
              <PickLink lang={lang} pick="Webshop" className="btn btn-line">
                {hu ? <span>Ezt választom</span> : <span>I’ll take this</span>}{" "}
                <span className="ar">→</span>
              </PickLink>
            </div>
            <div className="plan nx">
              <span className="nx-glow" aria-hidden="true" />
              {hu ? (
                <span className="pillb">Prémium</span>
              ) : (
                <span className="pillb">Premium</span>
              )}
              <span className="nx-mark">
                <svg viewBox="0 0 270 660" aria-hidden="true">
                  <use href="#bolt" />
                </svg>
              </span>
              {hu ? <h3>Egyedi oldal</h3> : <h3>Custom site</h3>}
              <span className="nx-tag mono">Next.js</span>
              {hu ? (
                <p className="nx-line">
                  Mérhetően <span className="it">villámgyors</span>, egyedi
                  weboldal.
                </p>
              ) : (
                <p className="nx-line">
                  A measurably <span className="it">lightning-fast</span>,
                  one-of-a-kind website.
                </p>
              )}
              {hu ? (
                <p>
                  Ha a sablon már kevés: egyedi design, egyedi funkciók, a
                  leggyorsabb technológiával.
                </p>
              ) : (
                <p>
                  When a template isn’t enough: custom design and features on
                  the fastest tech.
                </p>
              )}
              {hu ? (
                <ul className="ticks">
                  <li>Sebességgarancia: mobil PageSpeed 90+</li>
                  <li>Egyedi funkciók, webalkalmazás</li>
                  <li>Biztonságosabb, mint a WordPress</li>
                  <li>Határidő a szerződés szerint</li>
                </ul>
              ) : (
                <ul className="ticks">
                  <li>Speed guarantee: mobile PageSpeed 90+</li>
                  <li>Custom features, web app</li>
                  <li>More secure than WordPress</li>
                  <li>Deadline set in the contract</li>
                </ul>
              )}
              <PickLink lang={lang} pick="Next.js" className="btn btn-volt">
                {hu ? <span>Kérj ajánlatot</span> : <span>Get a quote</span>}{" "}
                <span className="ar">→</span>
              </PickLink>
            </div>
          </div>
          <div className="pnote">
            {hu ? (
              <span>
                <b>Végleges árak, áfa nem kerül rájuk.</b> 50% előleg, amely a
                domaint és a tárhelyet is fedezi. A határidők a tartalmak
                beérkezésétől számítanak.
              </span>
            ) : (
              <span>
                <b>Final prices, no VAT added.</b> 50% deposit, which also
                covers the domain and hosting. Deadlines run from when we
                receive your content.
              </span>
            )}
          </div>
        </div>
      </section>
      <section className="sec ink" id="calc-sec">
        <div className="wrap">
          <div className="sec-head">
            <div style={{ display: "grid", gap: "20px" }}>
              <span className="label mono">
                {hu ? <span>Árkalkulátor</span> : <span>Price calculator</span>}
              </span>
              {hu ? (
                <h2>
                  Számold ki <span className="it acc">pár kattintással</span>.
                </h2>
              ) : (
                <h2>
                  Work it out <span className="it acc">in a few clicks</span>.
                </h2>
              )}
            </div>
            {hu ? (
              <p>
                Válaszd ki, mire van szükséged, és azonnal látod az irányárat.
                Az összesítést egy gombnyomással elküldheted nekünk.
              </p>
            ) : (
              <p>
                Pick what you need and see a guide price instantly. Send us the
                summary with one click.
              </p>
            )}
          </div>
          <Calculator lang={lang} />
        </div>
      </section>
      <section className="sec ink">
        <div className="wrap">
          <div className="sec-head">
            <div style={{ display: "grid", gap: "20px" }}>
              <span className="label mono">
                {hu ? (
                  <span>Havidíjas szolgáltatások</span>
                ) : (
                  <span>Monthly services</span>
                )}
              </span>
              {hu ? (
                <h2>
                  Növekedés <span className="it acc">havonta</span>.
                </h2>
              ) : (
                <h2>
                  Growth, <span className="it acc">monthly</span>.
                </h2>
              )}
            </div>
            {hu ? (
              <p>
                Karbantartás, hogy az oldalad mindig biztonságos és gyors
                legyen, és marketing, hogy vevőket is hozzon.
              </p>
            ) : (
              <p>
                Maintenance to keep your site safe and fast, and marketing to
                bring in customers.
              </p>
            )}
          </div>
          <div className="pgroup">
            <div className="pg-head">
              <span className="pg-ic">
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
              </span>
              <div>
                <span className="mono pg-k">
                  {hu ? <span>01 · Működés</span> : <span>01 · Upkeep</span>}
                </span>
                <h3>
                  {hu ? <span>Karbantartás</span> : <span>Maintenance</span>}
                </h3>
                {hu ? (
                  <p>
                    Hogy az oldalad mindig biztonságos, gyors és naprakész
                    legyen.
                  </p>
                ) : (
                  <p>Keeps your site safe, fast and up to date.</p>
                )}
              </div>
            </div>
            <div className="plans three">
              <div className="plan">
                {hu ? <h3>Alap</h3> : <h3>Basic</h3>}
                <div className="price">
                  9 900 {hu ? <small>Ft / hó</small> : <small>Ft / mo</small>}
                </div>
                {hu ? (
                  <ul className="ticks">
                    <li>Tárhely</li>
                    <li>Frissítések</li>
                    <li>Havi mentés</li>
                    <li>Biztonsági figyelés</li>
                  </ul>
                ) : (
                  <ul className="ticks">
                    <li>Hosting</li>
                    <li>Updates</li>
                    <li>Monthly backup</li>
                    <li>Security monitoring</li>
                  </ul>
                )}
              </div>
              <div className="plan hi">
                {hu ? (
                  <span className="pillb">Ajánlott</span>
                ) : (
                  <span className="pillb">Recommended</span>
                )}
                <h3>Pro</h3>
                <div className="price">
                  19 900 {hu ? <small>Ft / hó</small> : <small>Ft / mo</small>}
                </div>
                {hu ? (
                  <ul className="ticks">
                    <li>Az Alap tartalma</li>
                    <li>Heti mentés, tesztelt frissítés</li>
                    <li>Havi 30 perc módosítás</li>
                    <li>Havi jelentés</li>
                  </ul>
                ) : (
                  <ul className="ticks">
                    <li>Everything in Basic</li>
                    <li>Weekly backup, tested updates</li>
                    <li>30 minutes of edits a month</li>
                    <li>Monthly report</li>
                  </ul>
                )}
              </div>
              <div className="plan">
                <h3>Webshop</h3>
                <div className="price">
                  34 900 {hu ? <small>Ft / hó</small> : <small>Ft / mo</small>}
                </div>
                {hu ? (
                  <ul className="ticks">
                    <li>A Pro tartalma</li>
                    <li>Napi mentés</li>
                    <li>Havi 1 óra módosítás</li>
                    <li>Webshop-figyelés, 24 órás sürgős javítás</li>
                  </ul>
                ) : (
                  <ul className="ticks">
                    <li>Everything in Pro</li>
                    <li>Daily backup</li>
                    <li>1 hour of edits a month</li>
                    <li>Store monitoring, 24-hour urgent fixes</li>
                  </ul>
                )}
              </div>
            </div>
          </div>
          <div className="pg-join" aria-hidden="true">
            <span>+</span>
          </div>
          <div className="pgroup mk">
            <div className="pg-head">
              <span className="pg-ic">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M4 19h16" />
                  <path d="M6 15l4-4 3 3 5-6" />
                  <path d="M15 8h3v3" />
                </svg>
              </span>
              <div>
                <span className="mono pg-k">
                  {hu ? <span>02 · Növekedés</span> : <span>02 · Growth</span>}
                </span>
                <h3>Marketing</h3>
                {hu ? (
                  <p>
                    Hogy az oldalad ne csak szép legyen, hanem vevőket is
                    hozzon.
                  </p>
                ) : (
                  <p>
                    So your site doesn’t just look good, it brings in customers.
                  </p>
                )}
              </div>
            </div>
            <div className="plans three">
              <div className="plan">
                <h3>Google / SEO</h3>
                <div className="price">
                  89 000 {hu ? <small>Ft / hó</small> : <small>Ft / mo</small>}{" "}
                  {hu ? <small>-tól</small> : <small>from</small>}
                </div>
                {hu ? (
                  <ul className="ticks">
                    <li>Minimum 3 hónap</li>
                    <li>Havi 2 cikk</li>
                    <li>Helyezések követése</li>
                    <li>Havi jelentés</li>
                  </ul>
                ) : (
                  <ul className="ticks">
                    <li>Minimum 3 months</li>
                    <li>2 articles a month</li>
                    <li>Ranking tracking</li>
                    <li>Monthly report</li>
                  </ul>
                )}
              </div>
              <div className="plan">
                <h3>Social media</h3>
                <div className="price">
                  79 000 {hu ? <small>Ft / hó</small> : <small>Ft / mo</small>}{" "}
                  {hu ? <small>-tól</small> : <small>from</small>}
                </div>
                {hu ? (
                  <ul className="ticks">
                    <li>Facebook és Instagram</li>
                    <li>Havi 8–12 poszt</li>
                    <li>Grafikákkal</li>
                    <li>Havi jelentés</li>
                  </ul>
                ) : (
                  <ul className="ticks">
                    <li>Facebook and Instagram</li>
                    <li>8–12 posts a month</li>
                    <li>With graphics</li>
                    <li>Monthly report</li>
                  </ul>
                )}
              </div>
              <div className="plan">
                {hu ? <h3>Hirdetéskezelés</h3> : <h3>Ad management</h3>}
                <div className="price">
                  15%{" "}
                  {hu ? (
                    <small>a hirdetési költésből</small>
                  ) : (
                    <small>of ad spend</small>
                  )}
                </div>
                {hu ? (
                  <ul className="ticks">
                    <li>Google és Meta (Facebook, Instagram)</li>
                    <li>Minimum 39 000 Ft / hó</li>
                    <li>Egyszeri beállítás 29 000 Ft</li>
                    <li>Próbahónap</li>
                  </ul>
                ) : (
                  <ul className="ticks">
                    <li>Google and Meta (Facebook, Instagram)</li>
                    <li>Minimum 39,000 Ft / mo</li>
                    <li>One-off set-up 29,000 Ft</li>
                    <li>Trial month</li>
                  </ul>
                )}
              </div>
            </div>
          </div>
          <div className="pnote">
            {hu ? (
              <span>
                <b>Éves előfizetésnél 2 hónap ingyen.</b> A hirdetésre szánt
                összeget közvetlenül a Google-nek és a Meta-nak fizeted, mi csak
                a kezelési díjat számlázzuk.
              </span>
            ) : (
              <span>
                <b>Pay yearly and get 2 months free.</b> Your ad budget is paid
                directly to Google and Meta; we only bill the management fee.
              </span>
            )}
          </div>
        </div>
      </section>
    </>
  );
}
