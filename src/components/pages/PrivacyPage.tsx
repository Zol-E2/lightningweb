import { CONTACT, type Lang } from "@/lib/i18n";
import { LEGAL_UPDATED, PRIVACY } from "@/lib/legal";
import ArticleBody from "@/components/ArticleBody";
import { formatDate } from "@/components/pages/PostPage";

/** Imprint + full privacy policy (texts in src/lib/legal.ts). */
export default function PrivacyPage({ lang }: { lang: Lang }) {
  const hu = lang === "hu";
  return (
    <>
      <section className="sub ink">
        <div className="grid-bg" />
        <div className="wrap">
          <span className="crumb mono">
            <b>/</b> {hu ? "adatkezeles" : "privacy"}
          </span>
          <h1>{hu ? "Adatkezelés és impresszum" : "Privacy & imprint"}</h1>
          <p className="lead">
            {hu ? "Hatályos: " : "Effective: "}
            {formatDate(lang, LEGAL_UPDATED)}
          </p>
        </div>
      </section>
      <section className="sec paper">
        <div className="wrap legal-text">
          <h2 id="impresszum">{hu ? "Impresszum" : "Imprint"}</h2>
          <ul>
            <li>
              {hu ? "Szolgáltató" : "Provider"}: Elek Zoltán E.V. (
              {hu ? "márkanév" : "brand"}: LightningWeb)
            </li>
            <li>
              {hu ? "Székhely és telephely" : "Registered office"}: 4484 Ibrány,
              Toldi utca 2/A
            </li>
            <li>
              {hu
                ? "Egyéni vállalkozói nyilvántartási szám"
                : "Sole trader registration number"}
              : 59586555
            </li>
            <li>{hu ? "Adószám" : "Tax number"}: 90398281-1-35</li>
            <li>
              {hu
                ? "Alanyi adómentes, az árak áfát nem tartalmaznak."
                : "VAT exempt (small business); prices include no VAT."}
            </li>
            <li>E-mail: {CONTACT.email}</li>
            <li>
              {hu ? "Telefon" : "Phone"}: {CONTACT.phone}
            </li>
            <li>
              {hu
                ? "Tárhelyszolgáltató: Cloudflare, Inc., 101 Townsend St, San Francisco, CA 94107, USA (cloudflare.com)"
                : "Hosting: Cloudflare, Inc., 101 Townsend St, San Francisco, CA 94107, USA (cloudflare.com)"}
            </li>
          </ul>
          <h2 id="adatkezeles" className="legal-h">
            {hu ? "Adatkezelési tájékoztató" : "Privacy policy"}
          </h2>
          <ArticleBody lang={lang} body={PRIVACY[lang]} />
        </div>
      </section>
    </>
  );
}
