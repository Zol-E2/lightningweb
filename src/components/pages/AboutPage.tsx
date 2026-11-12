import { type Lang } from "@/lib/i18n";

export default function AboutPage({ lang }: { lang: Lang }) {
  const hu = lang === "hu";
  return (
    <>
      <section className="sub ink">
        <div className="grid-bg" />
        <div className="wrap">
          <span className="crumb mono">
            <b>/</b> {hu ? <span>rolunk</span> : <span>about</span>}
          </span>
          {hu ? (
            <h1>
              Személyes figyelem. <span className="it">Ügynökségi</span> tudás.
            </h1>
          ) : (
            <h1>
              Personal attention. <span className="it">Agency</span> expertise.
            </h1>
          )}
        </div>
      </section>
      <section className="sec ink" style={{ paddingTop: "16px" }}>
        <div className="wrap founder">
          <div className="portrait-wrap">
            <div className="portrait">
              <img
                src="/img/zoltan.jpg"
                alt="Zoltán, a LightningWeb alapítója"
                loading="lazy"
                decoding="async"
              />
            </div>
            <div className="pbadge pb1">
              <b>~3</b>
              {hu ? (
                <span>év tapasztalat</span>
              ) : (
                <span>years of experience</span>
              )}
            </div>
            <div className="pbadge pb2">
              <span className="dot" />
              {hu ? (
                <span>Szabolcs · országosan · külföldön</span>
              ) : (
                <span>Szabolcs · nationwide · abroad</span>
              )}
            </div>
          </div>
          <div className="txt">
            <span className="label mono">
              {hu ? <span>Az alapító</span> : <span>The founder</span>}
            </span>
            {hu ? (
              <h2>
                Szia, <span className="it acc">Zoltán</span> vagyok.
              </h2>
            ) : (
              <h2>
                Hi, I’m <span className="it acc">Zoltán</span>.
              </h2>
            )}
            {hu ? (
              <p>
                Közel három éve építek weboldalakat és kezelek hirdetéseket
                szabolcsi, országos és külföldi vállalkozásoknak. A
                LightningWebet azért indítottam, hogy egy kis cég is olyan
                gyors, profi és jól eladó weboldalt kapjon, mint a nagy márkák,
                csak ügynökségi bürokrácia nélkül.
              </p>
            ) : (
              <p>
                For almost three years I’ve been building websites and running
                ads for businesses in Szabolcs, across Hungary and abroad. I
                started LightningWeb so a small company can get a website as
                fast, professional and effective as the big brands have, without
                agency red tape.
              </p>
            )}
            {hu ? (
              <p>
                Minden projektet személyesen viszek az első beszélgetéstől az
                élesítésig. Nálam nincs projektmenedzser-lánc: azzal beszélsz,
                aki az oldaladat építi.
              </p>
            ) : (
              <p>
                I run every project personally, from the first call to launch.
                No chain of project managers: you talk to the person building
                your site.
              </p>
            )}
            {hu ? (
              <p>
                A sebesség és a technológia a szenvedélyem. A saját fejlesztésű
                AI tanulóalkalmazásom, az eNvolve is Next.js-ben készült. Ezt a
                tudást viszem bele minden ügyfelem oldalába, legyen az egy
                grillgyártó webshopja vagy egy méztermelő angol nyelvű oldala.
              </p>
            ) : (
              <p>
                Speed and technology are my passion. My own AI learning app,
                eNvolve, is built in Next.js too. I bring that know-how to every
                client site, whether it’s a grill maker’s store or a honey
                producer’s English site.
              </p>
            )}
            <div className="vals">
              <div>
                {hu ? <b>Gyorsan</b> : <b>Fast</b>}
                {hu ? (
                  <span>Határidőre, villámgyors oldalakkal.</span>
                ) : (
                  <span>On time, with lightning-fast sites.</span>
                )}
              </div>
              <div>
                {hu ? <b>Őszintén</b> : <b>Honest</b>}
                {hu ? (
                  <span>Fix ár, érthető nyelv, nincs apróbetű.</span>
                ) : (
                  <span>Fixed price, plain words, no small print.</span>
                )}
              </div>
              <div>
                {hu ? <b>Eredményre</b> : <b>Results-driven</b>}
                {hu ? (
                  <span>Az számít, hány vevőt hoz az oldal.</span>
                ) : (
                  <span>What counts is how many customers it brings.</span>
                )}
              </div>
            </div>
            <span className="sig">Zoltán</span>
          </div>
        </div>
      </section>
      <section className="sec paper">
        <div className="wrap">
          <div className="sec-head">
            <div style={{ display: "grid", gap: "20px" }}>
              <span className="label mono">
                {hu ? (
                  <span>Partnerhálózat</span>
                ) : (
                  <span>Partner network</span>
                )}
              </span>
              {hu ? (
                <h2>
                  Ha több kéz kell, <span className="it acc">megvan</span>.
                </h2>
              ) : (
                <h2>
                  More hands, <span className="it acc">when needed</span>.
                </h2>
              )}
            </div>
            {hu ? (
              <p>
                Nagyobb projekteknél tapasztalt partnerekkel dolgozom. Minden
                területhez szakértő jut, a kapcsolattartó pedig marad egy.
              </p>
            ) : (
              <p>
                On bigger projects I bring in experienced partners. Every area
                gets an expert, with one point of contact.
              </p>
            )}
          </div>
          <div className="partners">
            <div className="partner">
              {hu ? <b>Grafikus</b> : <b>Graphic designer</b>}
              {hu ? (
                <span>Logó, arculat, social grafikák</span>
              ) : (
                <span>Logos, branding, social graphics</span>
              )}
            </div>
            <div className="partner">
              {hu ? <b>Szövegíró</b> : <b>Copywriter</b>}
              {hu ? (
                <span>Weboldal- és hirdetésszövegek</span>
              ) : (
                <span>Website and ad copy</span>
              )}
            </div>
            <div className="partner">
              {hu ? <b>Fotós és videós</b> : <b>Photo &amp; video</b>}
              {hu ? (
                <span>Termékfotó, portré, rövid videó</span>
              ) : (
                <span>Product, portrait, short video</span>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
