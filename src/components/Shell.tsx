import Link from "next/link";
import type { ReactNode } from "react";
import { CONTACT, href, type Lang, type PageKey } from "@/lib/i18n";
import Nav from "@/components/Nav";
import MobileBar from "@/components/interactive/MobileBar";
import Reveal from "@/components/interactive/Reveal";
import { Bolt } from "@/components/Icon";

/** Page frame: menu, closing call-to-action, footer and the mobile action bar. */
export default function Shell({
  lang,
  page,
  alt,
  children,
}: {
  lang: Lang;
  page: PageKey;
  /** URL of this page in the other language */
  alt: string;
  children: ReactNode;
}) {
  const hu = lang === "hu";
  return (
    <>
      <Nav lang={lang} page={page} alt={alt} />
      <main>{children}</main>

      <section className="cta ink">
        <div className="wrap">
          <span className="mark">
            <Bolt />
          </span>
          {hu ? (
            <h2>
              Legyél te a <span className="it">leggyorsabb</span> a piacodon.
            </h2>
          ) : (
            <h2>
              Be the <span className="it">fastest</span> in your market.
            </h2>
          )}
          <p>
            {hu
              ? "Egy 20 perces ingyenes beszélgetés, és megmutatjuk, hogyan hozhat több vevőt a weboldalad."
              : "One free 20-minute call and we’ll show you how your website can bring more customers."}
          </p>
          <Link className="btn btn-volt" href={href(lang, "contact")}>
            {hu ? "Ingyenes konzultáció" : "Free consultation"}{" "}
            <span className="ar">→</span>
          </Link>
        </div>
      </section>

      <footer>
        <div className="wrap">
          <div className="foot">
            <div>
              <Link
                className="brand"
                href={href(lang, "home")}
                aria-label="LightningWeb"
              >
                <span className="mark">
                  <Bolt />
                </span>
                <span className="wm">
                  Lightning<span>Web</span>
                </span>
              </Link>
              <p className="slogan">Finest Quality Quickly.</p>
            </div>
            <div>
              <h4>{hu ? "Oldalak" : "Pages"}</h4>
              <ul>
                <li>
                  <Link href={href(lang, "services")}>
                    {hu ? "Szolgáltatások" : "Services"}
                  </Link>
                </li>
                <li>
                  <Link href={href(lang, "work")}>
                    {hu ? "Munkáink" : "Work"}
                  </Link>
                </li>
                <li>
                  <Link href={href(lang, "pricing")}>
                    {hu ? "Árak" : "Pricing"}
                  </Link>
                </li>
                <li>
                  <Link href={href(lang, "about")}>
                    {hu ? "Rólunk" : "About"}
                  </Link>
                </li>
                <li>
                  <Link href={href(lang, "blog")}>Blog</Link>
                </li>
              </ul>
            </div>
            <div>
              <h4>{hu ? "Kapcsolat" : "Contact"}</h4>
              <ul>
                <li>
                  <a href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a>
                </li>
                <li>
                  <a href={CONTACT.phoneHref}>{CONTACT.phone}</a>
                </li>
                <li>
                  <Link href={href(lang, "contact")}>
                    {hu ? "Időpontfoglalás" : "Book a call"}
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4>Social</h4>
              <ul>
                <li>
                  <a href={CONTACT.social.facebook}>Facebook</a>
                </li>
                <li>
                  <a href={CONTACT.social.instagram}>Instagram</a>
                </li>
                <li>
                  <a href={CONTACT.social.linkedin}>LinkedIn</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="wordmark" aria-hidden="true">
            Lightning<span>Web</span>
          </div>
          <div className="legal mono">
            <span>© 2026 LightningWeb</span>
            <span>
              <Link href={href(lang, "privacy")}>
                {hu ? "Adatkezelés és impresszum" : "Privacy & imprint"}
              </Link>
            </span>
          </div>
        </div>
      </footer>

      <MobileBar lang={lang} hideOnPage={page === "contact"} />
      <Reveal />
    </>
  );
}
