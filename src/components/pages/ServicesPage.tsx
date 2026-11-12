import type { Lang } from "@/lib/i18n";

export default function ServicesPage({ lang }: { lang: Lang }) {
  const hu = lang === "hu";
  return (
    <>
      <section className="sub ink">
        <div className="grid-bg" />
        <div className="wrap">
          <span className="crumb mono">
            <b>/</b> {hu ? <span>szolgaltatasok</span> : <span>services</span>}
          </span>
          {hu ? (
            <h1>
              Minden, ami <span className="it">több vevőt</span> hoz.
            </h1>
          ) : (
            <h1>
              Everything that brings <span className="it">more customers</span>.
            </h1>
          )}
          {hu ? (
            <p className="lead">
              Választhatsz egy szolgáltatást, vagy összerakunk egy csomagot a
              céged méretéhez és céljaihoz.
            </p>
          ) : (
            <p className="lead">
              Pick one service or let us build a package around your size and
              goals.
            </p>
          )}
        </div>
      </section>
      <section className="sec paper" style={{ paddingTop: "24px" }}>
        <div className="wrap">
          <div className="sd">
            <div>
              {hu ? <h2>Weboldal készítés</h2> : <h2>Websites</h2>}
              {hu ? (
                <p className="for">
                  Egy oldal, ami 5 másodperc alatt elmondja, mit kínálsz, és
                  ráveszi a látogatót, hogy felhívjon vagy ajánlatot kérjen.
                </p>
              ) : (
                <p className="for">
                  A site that tells visitors what you offer in 5 seconds and
                  gets them to call or request a quote.
                </p>
              )}
            </div>
            <div>
              {hu ? <h4>Mit kapsz</h4> : <h4>What you get</h4>}
              {hu ? (
                <ul className="ticks">
                  <li>Egyedi, modern dizájn a cégedre szabva</li>
                  <li>Telefonon és számítógépen is tökéletes</li>
                  <li>A szövegeket is mi írjuk</li>
                  <li>Google beállítás, hogy megtaláljanak</li>
                </ul>
              ) : (
                <ul className="ticks">
                  <li>Custom modern design for your business</li>
                  <li>Perfect on phone and desktop</li>
                  <li>We write the copy too</li>
                  <li>Google setup so you&apos;re found</li>
                </ul>
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
                    <span className="btnm" />
                  </div>
                  <div className="img" />
                </div>
              </div>
            </div>
          </div>
          <div className="sd">
            <div>
              <h2>Webshop</h2>
              {hu ? (
                <p className="for">
                  Online bolt, ahol a vevő éjjel-nappal vásárolhat, te pedig
                  csak csomagolsz.
                </p>
              ) : (
                <p className="for">
                  An online store where customers buy day and night; you just
                  pack.
                </p>
              )}
            </div>
            <div>
              {hu ? <h4>Mit kapsz</h4> : <h4>What you get</h4>}
              {hu ? (
                <ul className="ticks">
                  <li>Bankkártyás fizetés</li>
                  <li>Automatikus számla</li>
                  <li>Futárszolgálat bekötése</li>
                  <li>Termékek feltöltése</li>
                </ul>
              ) : (
                <ul className="ticks">
                  <li>Card payments</li>
                  <li>Automatic invoices</li>
                  <li>Courier integration</li>
                  <li>Product upload</li>
                </ul>
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
          </div>
          <div className="sd">
            <div>
              {hu ? (
                <h2>Google-keresés (SEO)</h2>
              ) : (
                <h2>Google search (SEO)</h2>
              )}
              {hu ? (
                <p className="for">
                  Amikor valaki rákeres arra, amit árulsz, te jelensz meg elöl,
                  a Google Térképen is.
                </p>
              ) : (
                <p className="for">
                  When someone searches for what you sell, you appear at the
                  top, on Google Maps too.
                </p>
              )}
            </div>
            <div>
              {hu ? <h4>Mit kapsz</h4> : <h4>What you get</h4>}
              {hu ? (
                <ul className="ticks">
                  <li>Google Cégprofil beállítása</li>
                  <li>Kulcsszavak, amikre a vevőid keresnek</li>
                  <li>Rendszeres blogcikkek</li>
                  <li>Havi helyezés-riport</li>
                </ul>
              ) : (
                <ul className="ticks">
                  <li>Google Business Profile setup</li>
                  <li>The keywords your customers use</li>
                  <li>Regular blog posts</li>
                  <li>Monthly ranking report</li>
                </ul>
              )}
            </div>
            <div className="ill">
              <div className="serp">
                <div className="q">
                  <svg>
                    <use href="#i-search" />
                  </svg>
                  {hu ? (
                    <span>szolgáltatás a közelben</span>
                  ) : (
                    <span>service near me</span>
                  )}
                </div>
                <div className="r you">
                  <span className="pos">#1</span>
                  {hu ? <b>A te céged</b> : <b>Your business</b>}★★★★★
                </div>
              </div>
            </div>
          </div>
          <div className="sd">
            <div>
              {hu ? <h2>Hirdetések</h2> : <h2>Ads</h2>}
              {hu ? (
                <p className="for">
                  Google és Facebook hirdetések azoknak, akik most keresnek.
                  Pontosan látod, mennyi hívást és vásárlást hozott.
                </p>
              ) : (
                <p className="for">
                  Google and Facebook ads for people searching now. You see
                  exactly how many calls and sales they brought.
                </p>
              )}
            </div>
            <div>
              {hu ? <h4>Mit kapsz</h4> : <h4>What you get</h4>}
              {hu ? (
                <ul className="ticks">
                  <li>Kampány beállítása és kezelése</li>
                  <li>Hirdetésszövegek és képek</li>
                  <li>Folyamatos javítás</li>
                  <li>Érthető havi riport</li>
                </ul>
              ) : (
                <ul className="ticks">
                  <li>Campaign setup and management</li>
                  <li>Ad copy and images</li>
                  <li>Ongoing improvement</li>
                  <li>Plain monthly report</li>
                </ul>
              )}
            </div>
            <div className="ill ill-dark">
              <div className="bars">
                <i style={{ height: "22%" }} />
                <i style={{ height: "30%" }} />
                <i style={{ height: "28%" }} />
                <i style={{ height: "40%" }} />
                <i style={{ height: "55%" }} />
                <i style={{ height: "72%" }} />
                <i style={{ height: "94%" }} />
              </div>
            </div>
          </div>
          <div className="sd">
            <div>
              {hu ? <h2>Közösségi média</h2> : <h2>Social media</h2>}
              {hu ? (
                <p className="for">
                  Rendszeres, szép posztok a Facebookon és Instagramon, hogy a
                  vevők lássák: élő, megbízható cég vagy.
                </p>
              ) : (
                <p className="for">
                  Regular, beautiful posts on Facebook and Instagram so
                  customers see you&apos;re active and reliable.
                </p>
              )}
            </div>
            <div>
              {hu ? <h4>Mit kapsz</h4> : <h4>What you get</h4>}
              {hu ? (
                <ul className="ticks">
                  <li>Havi tartalomterv</li>
                  <li>Grafikák és szövegek</li>
                  <li>Kommentek és üzenetek kezelése</li>
                </ul>
              ) : (
                <ul className="ticks">
                  <li>Monthly content plan</li>
                  <li>Graphics and captions</li>
                  <li>Comment and message handling</li>
                </ul>
              )}
            </div>
            <div className="ill">
              <div className="insta">
                <i />
                <i />
                <i />
                <i />
                <i />
                <i />
              </div>
            </div>
          </div>
          <div className="sd">
            <div>
              {hu ? <h2>Karbantartás</h2> : <h2>Maintenance</h2>}
              {hu ? (
                <p className="for">
                  Egy weboldal frissítés nélkül lassul és sebezhető lesz. Mi
                  minden nap vigyázunk rá.
                </p>
              ) : (
                <p className="for">
                  Without updates a site slows down and becomes vulnerable. We
                  look after it every day.
                </p>
              )}
            </div>
            <div>
              {hu ? <h4>Mit kapsz</h4> : <h4>What you get</h4>}
              {hu ? (
                <ul className="ticks">
                  <li>Napi biztonsági mentés</li>
                  <li>Frissítések</li>
                  <li>Folyamatos felügyelet</li>
                  <li>Kisebb módosítások havonta</li>
                </ul>
              ) : (
                <ul className="ticks">
                  <li>Daily backups</li>
                  <li>Updates</li>
                  <li>Constant monitoring</li>
                  <li>Small monthly edits</li>
                </ul>
              )}
            </div>
            <div className="ill ill-dark">
              <div className="checks">
                <div>
                  {hu ? <span>Mentés kész</span> : <span>Backup done</span>}
                  <small>03:00</small>
                </div>
                <div>
                  {hu ? <span>Védelem aktív</span> : <span>Protection on</span>}
                  <small>24/7</small>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
