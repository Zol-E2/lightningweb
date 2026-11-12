import { CONTACT, type Lang } from "@/lib/i18n";

/**
 * Privacy policy + imprint. PLACEHOLDER: the company details and the final
 * legal text still need to be filled in (ideally checked by a lawyer).
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
              {hu
                ? "Név / cégnév: [kitöltendő]"
                : "Name / company: [to be completed]"}
            </li>
            <li>
              {hu
                ? "Székhely: [kitöltendő]"
                : "Registered address: [to be completed]"}
            </li>
            <li>
              {hu ? "Adószám: [kitöltendő]" : "Tax number: [to be completed]"}
            </li>
            <li>
              {hu
                ? "Nyilvántartási szám: [kitöltendő]"
                : "Registration number: [to be completed]"}
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
