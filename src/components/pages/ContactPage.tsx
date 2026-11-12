import Link from "next/link";
import { CONTACT, href, type Lang } from "@/lib/i18n";
import ContactForm from "@/components/interactive/ContactForm";
import Slots from "@/components/interactive/Slots";
export default function ContactPage({ lang }: { lang: Lang }) {
  const hu = lang === "hu";
  return (
    <>
      <section className="sub ink">
        <div className="grid-bg" />
        <div className="wrap">
          <span className="crumb mono">
            <b>/</b> {hu ? <span>kapcsolat</span> : <span>contact</span>}
          </span>
          {hu ? (
            <h1>
              Indítsuk el a <span className="it">projektedet</span>.
            </h1>
          ) : (
            <h1>
              Let&apos;s start your <span className="it">project</span>.
            </h1>
          )}
          {hu ? (
            <p className="lead">
              24 órán belül válaszolunk. Általában sokkal hamarabb.
            </p>
          ) : (
            <p className="lead">
              We reply within 24 hours. Usually much sooner.
            </p>
          )}
        </div>
      </section>
      <section className="sec ink" style={{ paddingTop: "16px" }}>
        <div className="wrap contact-grid">
          <div style={{ display: "grid", gap: "28px", alignContent: "start" }}>
            <div className="booking">
              <span className="mono" style={{ color: "var(--volt)" }}>
                {hu ? <span>Leggyorsabb út</span> : <span>Fastest route</span>}
              </span>
              {hu ? (
                <h3>Foglalj egy 20 perces ingyenes hívást.</h3>
              ) : (
                <h3>Book a free 20-minute call.</h3>
              )}
              <Slots lang={lang} />
              <div>
                <Link className="btn btn-volt" href={href(lang, "contact")}>
                  {hu ? (
                    <span>Időpont foglalása</span>
                  ) : (
                    <span>Book this slot</span>
                  )}{" "}
                  <span className="ar">→</span>
                </Link>
              </div>
            </div>
            <div>
              <div className="ch">
                <span className="mono">E-mail</span>
                <strong>
                  <a href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a>
                </strong>
              </div>
              <div className="ch">
                <span className="mono">
                  {hu ? <span>Telefon</span> : <span>Phone</span>}
                </span>
                <strong>
                  <a href={CONTACT.phoneHref}>{CONTACT.phone}</a>
                </strong>
              </div>
              <div className="ch">
                <span className="mono">
                  {hu ? <span>Terület</span> : <span>Area</span>}
                </span>
                <strong>
                  {hu ? (
                    <span>Szabolcs és környező megyék · online országosan</span>
                  ) : (
                    <span>
                      Szabolcs and nearby counties · online nationwide
                    </span>
                  )}
                </strong>
              </div>
            </div>
          </div>
          <ContactForm lang={lang} />
        </div>
      </section>
    </>
  );
}
