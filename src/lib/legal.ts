import type { Lang } from "@/lib/i18n";

/**
 * Legal texts (privacy policy incl. cookies, general terms). Same mini-markdown
 * as the blog (see ArticleBody). Keep the "updated" date current when editing.
 * Recommended: have a lawyer review before relying on them.
 */
export const LEGAL_UPDATED = "2026-11-13";

export const PRIVACY: Record<Lang, string> = {
  hu: `## 1. Ki kezeli az adataidat?

Az adatkezelő: **Elek Zoltán E.V.** (márkanév: LightningWeb)
- Székhely: 4484 Ibrány, Toldi utca 2/A
- Nyilvántartási szám: 59586555, adószám: 90398281-1-35
- E-mail: info@lightningweb.hu, telefon: +36 30 137 5903

Ez a tájékoztató azt írja le, milyen személyes adatokat kezelünk a lightningweb.hu weboldalon és a kapcsolódó szolgáltatásainkban, milyen célból, meddig, és milyen jogaid vannak. A tájékoztató az Európai Unió általános adatvédelmi rendelete (GDPR, 2016/679/EU rendelet) és az információs önrendelkezési jogról szóló 2011. évi CXII. törvény (Infotv.) alapján készült.

## 2. Milyen adatokat, mire és meddig kezelünk?

**a) Ajánlatkérés és kapcsolatfelvétel (űrlap, e-mail, telefon)**
- Adatok: név, cégnév, e-mail cím, telefonszám, az érdeklődés tárgya és az üzenet tartalma.
- Cél: az érdeklődés megválaszolása, ajánlat készítése, kapcsolattartás.
- Jogalap: a szerződés megkötését megelőző lépések a te kérésedre (GDPR 6. cikk (1) b) pont), illetve a hozzájárulásod (GDPR 6. cikk (1) a) pont), amit az űrlapon a jelölőnégyzettel adsz meg.
- Időtartam: ha nem jön létre szerződés, az utolsó kapcsolatfelvételtől számított 1 évig, vagy amíg nem kéred a törlést.

**b) Időpontfoglalás (Cal.com)**
- Adatok: név, e-mail cím, a választott időpont, és ha telefonos hívást kérsz, a telefonszámod, valamint az általad megadott megjegyzés.
- Cél: az ingyenes konzultáció időpontjának egyeztetése, visszaigazolás és emlékeztető küldése.
- Jogalap: a szerződés megkötését megelőző lépések a te kérésedre (GDPR 6. cikk (1) b) pont).
- Időtartam: a konzultációt követő 1 évig, vagy amíg nem kéred a törlést.

**c) Szerződés teljesítése és kapcsolattartás ügyfelekkel**
- Adatok: név, cégnév, számlázási cím, adószám, e-mail cím, telefonszám, a projekthez átadott anyagok.
- Cél: a megrendelt szolgáltatás (weboldal, webshop, hirdetéskezelés, SEO, karbantartás) teljesítése.
- Jogalap: szerződés teljesítése (GDPR 6. cikk (1) b) pont).
- Időtartam: a szerződés megszűnésétől számított 5 évig (a polgári jogi elévülési idő).

**d) Számlázás**
- Adatok: név vagy cégnév, számlázási cím, adószám, a számla adatai.
- Cél és jogalap: a számviteli és adójogi kötelezettség teljesítése (GDPR 6. cikk (1) c) pont; a számvitelről szóló 2000. évi C. törvény 169. §).
- Időtartam: 8 év.

**e) A weboldal működése és biztonsága (szervernaplók)**
- Adatok: IP-cím, a böngésző típusa, a megtekintett oldal, a látogatás időpontja.
- Cél: a weboldal biztonságos, gyors működése, támadások kiszűrése.
- Jogalap: jogos érdekünk (GDPR 6. cikk (1) f) pont).
- Időtartam: a tárhelyszolgáltató rendszereiben rövid ideig, legfeljebb néhány hétig.

## 3. Sütik (cookie-k) és helyi tárolás

A weboldal **nem használ követő, reklám- vagy marketingsütiket**, és nem építünk rólad látogatói profilt. Ezért nem jelenik meg süti-hozzájárulást kérő ablak.

- A tárhelyszolgáltató (Cloudflare) a támadások kiszűréséhez szükséges, technikai sütit helyezhet el. Ez az oldal működéséhez elengedhetetlen.
- Ha az árkalkulátorból vagy egy csomagról az ajánlatkérő űrlapra lépsz, a böngésződ ideiglenesen (a lap bezárásáig) megjegyzi az összesítést, hogy ne kelljen újra beírnod. Ez csak a te gépeden tárolódik, hozzánk nem kerül el.
- Az időpontfoglaló naptár csak akkor töltődik be, ha a „Időpont kiválasztása” gombra kattintasz. Ekkor a Cal.com a foglaláshoz szükséges sütiket használhat, a saját adatvédelmi tájékoztatója szerint.

Ha a jövőben látogatottság-mérést vezetünk be, olyan megoldást választunk, ami nem használ sütiket és nem azonosít téged, és ezt itt feltüntetjük.

## 4. Kik férhetnek hozzá az adataidhoz? (adatfeldolgozók)

Az adataidat nem adjuk el és nem adjuk át harmadik félnek marketingcélra. A szolgáltatás működéséhez az alábbi partnereket (adatfeldolgozókat) vesszük igénybe:

- **Cloudflare, Inc.** (101 Townsend St, San Francisco, CA 94107, USA): tárhely, a weboldal kiszolgálása és védelme.
- **Resend, Inc.** (USA): az ajánlatkérő űrlap üzeneteinek e-mailben történő továbbítása hozzánk.
- **Google Ireland Limited** (Gordon House, Barrow Street, Dublin 4, Írország): e-mail fiók és naptár, ahová a megkeresések és foglalások érkeznek.
- **Cal.com, Inc.** (USA): időpontfoglalás, visszaigazoló és emlékeztető e-mailek.
- Az általunk használt **online számlázó szolgáltató**: számlák kiállítása és megőrzése.

Az amerikai partnereknél az adattovábbítás az EU–USA adatvédelmi keretrendszer (Data Privacy Framework) vagy az Európai Bizottság által elfogadott általános szerződési feltételek alapján történik, amelyek megfelelő védelmet biztosítanak.

## 5. Az adatok biztonsága

Az adatokat titkosított (HTTPS) kapcsolaton keresztül továbbítjuk, a fiókjainkat erős jelszóval és kétlépcsős azonosítással védjük, és csak az férhet hozzájuk, akinek a munkájához szükséges.

## 6. Milyen jogaid vannak?

- **Hozzáférés:** tájékoztatást kérhetsz arról, milyen adatokat kezelünk rólad (GDPR 15. cikk).
- **Helyesbítés:** kérheted a pontatlan adatok javítását (16. cikk).
- **Törlés:** kérheted az adataid törlését, ha a kezelésükre már nincs szükség, vagy visszavonod a hozzájárulásod (17. cikk). A számviteli kötelezettség alá eső adatokat a törvényes határidőig meg kell őriznünk.
- **Korlátozás:** kérheted, hogy bizonyos esetekben csak tároljuk az adataidat (18. cikk).
- **Adathordozhatóság:** kérheted, hogy az általad megadott adatokat géppel olvasható formában kiadjuk (20. cikk).
- **Tiltakozás:** a jogos érdeken alapuló adatkezelés ellen tiltakozhatsz (21. cikk).
- **Hozzájárulás visszavonása:** bármikor visszavonhatod, ez nem érinti a korábbi adatkezelés jogszerűségét.

A kéréseidet az info@lightningweb.hu címre küldheted. Legkésőbb 1 hónapon belül válaszolunk.

## 7. Jogorvoslat

Ha úgy érzed, hogy megsértettük az adatvédelmi jogaidat, kérjük, először írj nekünk, hogy rendezhessük. Panaszt tehetsz a **Nemzeti Adatvédelmi és Információszabadság Hatóságnál** (NAIH, 1055 Budapest, Falk Miksa utca 9–11., postacím: 1363 Budapest, Pf. 9., e-mail: ugyfelszolgalat@naih.hu, web: naih.hu), és bírósághoz is fordulhatsz; a pert a lakóhelyed szerinti törvényszék előtt is megindíthatod.

## 8. Módosítás

Ezt a tájékoztatót a jogszabályok vagy a szolgáltatásaink változásakor frissítjük. A mindenkori változat ezen az oldalon olvasható.`,

  en: `## 1. Who handles your data?

The data controller is **Elek Zoltán E.V.** (sole trader, brand: LightningWeb)
- Registered office: 4484 Ibrány, Toldi utca 2/A, Hungary
- Registration number: 59586555, tax number: 90398281-1-35
- Email: info@lightningweb.hu, phone: +36 30 137 5903

This policy explains what personal data we process on lightningweb.hu and in our related services, why, for how long, and what rights you have. It is based on the EU General Data Protection Regulation (GDPR, Regulation (EU) 2016/679) and Hungarian Act CXII of 2011.

## 2. What data we process, why and for how long

**a) Enquiries (form, email, phone)**
- Data: name, company, email address, phone number, subject and message.
- Purpose: replying to your enquiry, preparing a quote, keeping in touch.
- Legal basis: steps taken at your request before entering into a contract (GDPR Art. 6(1)(b)) and your consent given with the checkbox on the form (Art. 6(1)(a)).
- Retention: 1 year after the last contact if no contract is concluded, or until you ask us to delete it.

**b) Booking a call (Cal.com)**
- Data: name, email address, chosen time, and your phone number and notes if you provide them.
- Purpose: scheduling the free consultation, sending confirmation and reminders.
- Legal basis: steps taken at your request before entering into a contract (Art. 6(1)(b)).
- Retention: 1 year after the call, or until you ask us to delete it.

**c) Performing a contract**
- Data: name, company, billing address, tax number, email, phone and materials you provide for the project.
- Purpose: delivering the ordered service (website, online store, ads, SEO, maintenance).
- Legal basis: performance of a contract (Art. 6(1)(b)).
- Retention: 5 years after the contract ends (civil law limitation period).

**d) Invoicing**
- Data: name or company name, billing address, tax number, invoice details.
- Purpose and legal basis: compliance with accounting and tax law (Art. 6(1)(c); Hungarian Accounting Act, Section 169).
- Retention: 8 years.

**e) Website operation and security (server logs)**
- Data: IP address, browser type, page viewed, time of visit.
- Purpose: keeping the website secure and fast, blocking attacks.
- Legal basis: our legitimate interest (Art. 6(1)(f)).
- Retention: briefly in our hosting provider's systems, at most a few weeks.

## 3. Cookies and local storage

This website uses **no tracking, advertising or marketing cookies**, and we do not build visitor profiles. That's why there is no cookie consent banner.

- Our hosting provider (Cloudflare) may set a technical cookie needed to block attacks. It is strictly necessary for the site to work.
- When you go from the price calculator or a package to the enquiry form, your browser temporarily remembers the summary (until you close the tab) so you don't have to type it again. It stays on your device and is never sent to us.
- The booking calendar only loads when you click “Choose a time”. Cal.com may then use cookies needed for booking, under its own privacy policy.

If we add visitor analytics in the future, we will choose a cookie-free solution that does not identify you, and list it here.

## 4. Who can access your data (processors)

We never sell your data or share it with third parties for marketing. To run our services we use these processors:

- **Cloudflare, Inc.** (101 Townsend St, San Francisco, CA 94107, USA): hosting, delivery and protection of the website.
- **Resend, Inc.** (USA): forwarding enquiry form messages to us by email.
- **Google Ireland Limited** (Gordon House, Barrow Street, Dublin 4, Ireland): the email account and calendar where enquiries and bookings arrive.
- **Cal.com, Inc.** (USA): booking, confirmation and reminder emails.
- Our **online invoicing provider**: issuing and storing invoices.

Transfers to US providers are based on the EU–US Data Privacy Framework or the European Commission's standard contractual clauses, which ensure adequate protection.

## 5. Security

Data is transmitted over encrypted (HTTPS) connections, our accounts are protected by strong passwords and two-step verification, and only those who need the data for their work can access it.

## 6. Your rights

- **Access** to the data we hold about you (GDPR Art. 15).
- **Rectification** of inaccurate data (Art. 16).
- **Erasure** when the data is no longer needed or you withdraw consent (Art. 17). Data covered by accounting law must be kept for the legal period.
- **Restriction** of processing in certain cases (Art. 18).
- **Data portability** of the data you provided, in a machine-readable format (Art. 20).
- **Objection** to processing based on legitimate interest (Art. 21).
- **Withdrawing consent** at any time, without affecting earlier lawful processing.

Send your requests to info@lightningweb.hu. We reply within one month at the latest.

## 7. Complaints

If you think we have breached your data protection rights, please contact us first so we can put it right. You can also lodge a complaint with the Hungarian **National Authority for Data Protection and Freedom of Information** (NAIH, 1055 Budapest, Falk Miksa utca 9–11, postal address: 1363 Budapest, Pf. 9, email: ugyfelszolgalat@naih.hu, web: naih.hu) or with the supervisory authority of your EU country, and you may go to court.

## 8. Changes

We update this policy when laws or our services change. The current version is always on this page.`,
};

export const TERMS: Record<Lang, string> = {
  hu: `## 1. A szolgáltató

**Elek Zoltán E.V.** (márkanév: LightningWeb), székhely: 4484 Ibrány, Toldi utca 2/A, nyilvántartási szám: 59586555, adószám: 90398281-1-35, e-mail: info@lightningweb.hu, telefon: +36 30 137 5903. Alanyi adómentes, az árak áfát nem tartalmaznak.

## 2. A feltételek hatálya

Ezek az általános szerződési feltételek (ÁSZF) a LightningWeb által nyújtott szolgáltatásokra vonatkoznak: weboldal- és webshopkészítés, keresőoptimalizálás (SEO), Google- és Facebook-hirdetések kezelése, közösségi média kezelése és karbantartás. Az egyedi árajánlatban vagy szerződésben foglaltak eltérhetnek ezektől a feltételektől; eltérés esetén az egyedi megállapodás az irányadó.

## 3. Ajánlat és megrendelés

- A weboldalon szereplő árak tájékoztató, „-tól” árak. A végleges, fix árat egy ingyenes egyeztetés után írásban (e-mailben) küldött árajánlat tartalmazza.
- Az árajánlat a kiküldéstől számított 30 napig érvényes.
- A szerződés az árajánlat írásos (e-mailes) elfogadásával és az előleg megfizetésével jön létre.

## 4. Fizetési feltételek

- Egyszeri munkáknál (weboldal, webshop) a megrendeléskor a vállalási ár **50%-a előleg**, a fennmaradó 50% az átadáskor fizetendő.
- Havidíjas szolgáltatásoknál (karbantartás, SEO, közösségi média, hirdetéskezelés) a díj havonta előre fizetendő.
- A hirdetési költséget (amit a Google vagy a Meta számláz) a megrendelő közvetlenül fizeti a hirdetési platformnak; ez nem része a kezelési díjnak.
- A számlát elektronikusan küldjük, a fizetési határidő 8 nap.

## 5. Határidők és együttműködés

- A határidőt az árajánlat tartalmazza. Egy egyszerű bemutatkozó oldal általában legfeljebb 1 hónap alatt elkészül.
- A határidő az előleg beérkezésével és a szükséges anyagok (szövegek, képek, logó, hozzáférések) átadásával indul. Ha a megrendelő késve adja át az anyagokat vagy a visszajelzést, a határidő ennyivel meghosszabbodik.
- Az árajánlatban rögzített számú javítási kör része az árnak. Az ezen felüli vagy a megállapodáson túli kéréseket külön árajánlat alapján végezzük.

## 6. Átadás és tulajdonjog

- Az elkészült munkát átadás előtt bemutatjuk, a megrendelő jóváhagyása után élesítjük.
- A teljes vételár kifizetése után a weboldal, a domain és a hozzájuk tartozó hozzáférések **a megrendelő tulajdonába kerülnek**, a szolgáltatótól függetlenül tovább használhatók és átvihetők.
- A megrendelő szavatolja, hogy az általa átadott szövegek, képek és egyéb anyagok felhasználására jogosult.
- A szolgáltató az elkészült munkát referenciaként bemutathatja, kivéve, ha a megrendelő ezt írásban kéri, hogy ne tegye.

## 7. Garancia

- Az átadástól számított **6 hónapig** az általunk okozott hibákat díjmentesen javítjuk.
- Nem tartozik a garancia körébe a megrendelő vagy harmadik fél által végzett módosításból, külső szolgáltatás (például tárhely, fizetési rendszer) hibájából vagy jogszabályváltozásból eredő probléma.
- A hirdetéseknél és a keresőoptimalizálásnál konkrét helyezést, eladást vagy bevételt nem garantálunk, mert ezek a Google, a Meta és a piac működésétől is függnek; a munkát a legjobb szakmai tudásunk szerint végezzük.

## 8. Felmondás

- A havidíjas szolgáltatások a hónap végére, 30 napos felmondási idővel mondhatók fel írásban (e-mailben).
- Egyszeri munkánál, ha a megrendelő a munka megkezdése után eláll, az addig elvégzett munka arányos díja megilleti a szolgáltatót, amit az előlegből levonunk.
- **Fogyasztónak minősülő megrendelő** (magánszemély) a szerződéskötéstől számított 14 napon belül indoklás nélkül elállhat (45/2014. (II. 26.) Korm. rendelet). Ha kifejezetten kéri, hogy a munkát ezen belül megkezdjük, elállás esetén az addig elvégzett munka arányos díját kell megfizetnie; a teljesen elvégzett szolgáltatás után az elállási jog megszűnik.

## 9. Felelősség

A szolgáltató felelőssége a szerződés szerinti díj összegéig terjed, kivéve a szándékosan vagy súlyos gondatlansággal okozott károkat. Nem felelünk a külső szolgáltatók (tárhely, domainregisztrátor, hirdetési platformok) kieséséért vagy döntéseiért.

## 10. Adatkezelés

A személyes adatok kezeléséről az [adatkezelési tájékoztató](page:privacy) rendelkezik.

## 11. Panaszkezelés és jogviták

Kérdéseddel, panaszoddal írj az info@lightningweb.hu címre, 15 napon belül válaszolunk. A felek a vitás kérdéseket elsősorban egyeztetéssel rendezik. Fogyasztó a lakóhelye szerinti békéltető testülethez is fordulhat (Szabolcs-Szatmár-Bereg megyében: Szabolcs-Szatmár-Bereg Megyei Békéltető Testület, 4400 Nyíregyháza, Széchenyi u. 2.). A szerződésre a magyar jog irányadó.`,

  en: `## 1. The provider

**Elek Zoltán E.V.** (sole trader, brand: LightningWeb), registered office: 4484 Ibrány, Toldi utca 2/A, Hungary, registration number: 59586555, tax number: 90398281-1-35, email: info@lightningweb.hu, phone: +36 30 137 5903. VAT exempt; prices include no VAT.

## 2. Scope

These general terms apply to the services provided by LightningWeb: website and online store development, search engine optimisation (SEO), Google and Facebook ad management, social media management and maintenance. An individual quote or contract may differ from these terms; in that case the individual agreement prevails.

## 3. Quotes and orders

- Prices on the website are indicative “from” prices. The final, fixed price is set out in a written (email) quote sent after a free consultation.
- Quotes are valid for 30 days from sending.
- The contract is concluded when the quote is accepted in writing (by email) and the deposit is paid.

## 4. Payment

- For one-off projects (website, online store), a **50% deposit** is due on ordering and the remaining 50% on handover.
- Monthly services (maintenance, SEO, social media, ad management) are paid monthly in advance.
- Ad spend charged by Google or Meta is paid by the client directly to the ad platform and is not part of the management fee.
- Invoices are sent electronically with 8 days' payment terms.

## 5. Deadlines and cooperation

- The deadline is set in the quote. A simple starter website is usually ready within one month.
- The deadline starts when the deposit and the required materials (text, images, logo, access details) arrive. Late materials or feedback extend the deadline accordingly.
- The number of revision rounds stated in the quote is included in the price. Further requests are handled under a separate quote.

## 6. Handover and ownership

- We show the finished work before launch and go live after the client's approval.
- Once paid in full, the website, the domain and the related access **belong to the client** and can be used and moved independently of us.
- The client warrants that they have the right to use the text, images and other materials they provide.
- We may show the finished work as a reference unless the client asks us in writing not to.

## 7. Guarantee

- For **6 months** after handover we fix any bugs we caused free of charge.
- The guarantee does not cover problems caused by changes made by the client or third parties, failures of external services (e.g. hosting, payment systems) or changes in law.
- For ads and SEO we do not guarantee specific rankings, sales or revenue, as these also depend on Google, Meta and the market; we do the work to the best of our professional knowledge.

## 8. Termination

- Monthly services can be cancelled in writing (email) with 30 days' notice, effective at the end of the month.
- If the client withdraws from a one-off project after work has started, the provider is entitled to a proportional fee for the work done, deducted from the deposit.
- **Consumers** (private individuals) may withdraw within 14 days of concluding the contract without giving reasons (Hungarian Government Decree 45/2014). If they expressly ask us to start within that period, they owe a proportional fee for work done; the right of withdrawal ends once the service is fully performed.

## 9. Liability

The provider's liability is limited to the contract fee, except for damage caused intentionally or by gross negligence. We are not liable for outages or decisions of external providers (hosting, domain registrars, ad platforms).

## 10. Data protection

Personal data is handled as described in our [privacy policy](page:privacy).

## 11. Complaints and disputes

Send questions or complaints to info@lightningweb.hu; we reply within 15 days. The parties will first try to settle disputes by agreement. Consumers may also turn to the conciliation board of their place of residence. Hungarian law governs the contract.`,
};
