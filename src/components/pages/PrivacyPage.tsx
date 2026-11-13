import { CONTACT, type Lang } from "@/lib/i18n";

/**
 * Privacy policy + imprint. The full privacy policy text is still short
 * (ideally checked by a lawyer).
 */
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
        </div>
      </section>
      <section className="sec paper">
        <div className="wrap legal-text">
          <h2>{hu ? "Impresszum" : "Imprint"}</h2>
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
                ? "Tárhelyszolgáltató: Cloudflare, Inc., 101 Townsend St, San Francisco, CA 94107, USA"
                : "Hosting: Cloudflare, Inc., 101 Townsend St, San Francisco, CA 94107, USA"}
            </li>
          </ul>
          <h2>{hu ? "Adatkezelési tájékoztató" : "Privacy policy"}</h2>
          <p>
            {hu
              ? "Adatkezelő: Elek Zoltán E.V., a fenti impresszumban szereplő adatokkal."
              : "Data controller: Elek Zoltán E.V., with the details listed in the imprint above."}
          </p>
          <p>
            {hu
              ? "Az ajánlatkérő űrlapon megadott adatokat (név, cégnév, e-mail cím, telefonszám, üzenet) kizárólag az érdeklődés megválaszolására és az ajánlatadásra használjuk, harmadik félnek nem adjuk át. Az üzenet e-mailben érkezik hozzánk; az e-mail küldését a Resend (Resend, Inc.) végzi."
              : "We use the details entered in the enquiry form (name, company, email, phone, message) only to reply to your enquiry and send a quote, and we never pass them on to third parties. The message reaches us by email, sent through Resend (Resend, Inc.)."}
          </p>
          <p>
            {hu
              ? "A weboldal nem használ követő (marketing) sütiket. A teljes tájékoztató szövege hamarosan elérhető. Kérdés esetén írj a fenti e-mail címre."
              : "This website uses no tracking (marketing) cookies. The full policy text will be available soon. For questions, write to the email address above."}
          </p>
        </div>
      </section>
    </>
  );
}
