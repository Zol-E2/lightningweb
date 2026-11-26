# LightningWeb – teljes átadási dokumentáció

> Utolsó frissítés: 2026-11-26. Ez a dokumentum mindent tartalmaz, amit egy új fejlesztőnek vagy AI-agentnek tudnia kell a projektről: mi ez, hogyan épül fel, miért így, hogyan éred el és kezeled a szolgáltatásokat, hogyan fejlesztesz helyben, mi van kész és mi van még hátra.
>
> **Fontos:** a GitHub-repó (`Zol-E2/lightningweb`) **nyilvános**. Ide soha ne kerüljön titkos kulcs, jelszó, token, személyes e-mail-cím vagy fiókazonosító. A titkos kulcsok csak a Cloudflare-ben és a helyi `.dev.vars` fájlban élnek.

---

## Tartalom

1. [Kiről és miről szól a projekt](#1-kiről-és-miről-szól-a-projekt)
2. [Gyors indulás helyben](#2-gyors-indulás-helyben)
3. [Technológia és architektúra](#3-technológia-és-architektúra)
4. [Kódstruktúra – hol mi van](#4-kódstruktúra--hol-mi-van)
5. [Élesítés (deploy)](#5-élesítés-deploy)
6. [Környezeti változók és titkok](#6-környezeti-változók-és-titkok)
7. [Külső szolgáltatások és hozzáférések](#7-külső-szolgáltatások-és-hozzáférések)
8. [Üzleti adatok, árak, garanciák](#8-üzleti-adatok-árak-garanciák)
9. [Design és tartalom: döntések és indokok](#9-design-és-tartalom-döntések-és-indokok)
10. [SEO és AI-keresők](#10-seo-és-ai-keresők)
11. [Portfólió oldalak (ügyféloldalak)](#11-portfólió-oldalak-ügyféloldalak)
12. [Csapdák, amikbe már belefutottunk](#12-csapdák-amikbe-már-belefutottunk)
13. [Nyitott teendők](#13-nyitott-teendők)
14. [Munkastílus – hogyan dolgozz Zoltánnal](#14-munkastílus--hogyan-dolgozz-zoltánnal)
15. [A projekt története röviden](#15-a-projekt-története-röviden)
16. [Egyéb, nem kapcsolódó korábbi munkák](#16-egyéb-nem-kapcsolódó-korábbi-munkák)

---

## 1. Kiről és miről szól a projekt

**Tulajdonos:** Elek Zoltán (GitHub: `Zol-E2`), magyarul beszél és ír. Egyéni vállalkozó, márkaneve **LightningWeb**.

**A cég:** online marketing ügynökség, Zoltán főleg egyedül dolgozik, vállalkozó üzlettársakkal (pl. a social media munkát főleg egy partner végzi).
- Weboldal-készítés és -karbantartás. Jelenleg főleg **WordPress + Elementor**, egyedi oldalaknál **Next.js**. A cél fokozatosan Next.js-re átállni (gyorsabb, biztonságosabb).
- Hirdetéskezelés, social media kezelés, SEO.

**Ez a repó:** a cég saját weboldala, **https://lightningweb.hu**, kétnyelvű (magyar + angol a `/en` alatt). Élesben fut a Cloudflare-en.

**Célcsoport:** helyi cégek, kisvállalkozások (1–10 fő) és webshopok, főleg Szabolcs-Szatmár-Bereg és a környező megyék, online országosan, és külföldre is (ezért kétnyelvű). Közép-piaci pozicionálás.

**Fő márkajel:** a cián villám. A régi logó („Lightning Web Design”, „Finest Quality Quickly”) csak kiindulópont volt, az oldalon a név mindenhol **LightningWeb**.

---

## 2. Gyors indulás helyben

Követelmény: Node.js 20+ (a felhős gépen 22-vel ment), npm, git.

```bash
git clone https://github.com/Zol-E2/lightningweb.git
cd lightningweb
npm install
cp .dev.vars.example .dev.vars   # kulcsok kitöltése: lásd a 6. fejezetet
npm run dev                      # http://localhost:3000
```

Hasznos parancsok (`package.json`):

| Parancs | Mit csinál |
| --- | --- |
| `npm run dev` | Next.js fejlesztői szerver (http://localhost:3000) |
| `npm run build` | Sima Next.js build (gyors ellenőrzés, hogy lefordul-e) |
| `npm run lint` | ESLint |
| `npm run preview` | OpenNext build + helyi futtatás a Cloudflare Workers futtatókörnyezetben (wrangler). **Élesítés előtt ezzel érdemes tesztelni**, mert ez pontosan úgy fut, mint élesben. |
| `npm run deploy` | Build + kézi élesítés a Cloudflare-re (wrangler bejelentkezés kell). Általában **nem kell**, mert a `main` ágra pusholás automatikusan élesít. |
| `npm run cf-typegen` | Cloudflare env típusok generálása |
| `npm run format` | Prettier a `src` mappán |

**Helyi titkok:**
- `npm run dev` alatt a Next.js a `.env.local`-ból olvas. `npm run preview` (wrangler) alatt a `.dev.vars`-ból. Ha az űrlapot vagy az ellenőrzőt helyben is ki akarod próbálni `dev` módban, ugyanazokat a változókat tedd `.env.local`-ba is. Mindkét fájl szerepel a `.gitignore`-ban.
- A `CONTACT_TO` és `CONTACT_FROM` a `wrangler.jsonc` `vars` részében van; `dev` módban ezeket is add meg `.env.local`-ban, különben az űrlap `not_configured` (503) hibát ad. Ez normális.
- Helyi teszteléskor vigyázz: az űrlap **valódi e-mailt küld** Resenden keresztül, ha van kulcs.

**Next.js figyelmeztetés:** a repóban lévő `AGENTS.md` szerint ez a Next.js 16 verzió eltér a megszokottól. Kódírás előtt nézd meg a `node_modules/next/dist/docs/` alatti útmutatót.

**Git-munkamenet:** a `main` ág = éles oldal. Új munkát külön ágon érdemes csinálni, és PR-rel vagy merge-dzsel bevinni a `main`-be. Minden `main`-re kerülő commit pár percen belül élesedik.

---

## 3. Technológia és architektúra

| Elem | Választás | Miért |
| --- | --- | --- |
| Keretrendszer | **Next.js 16.4.6**, App Router, TypeScript, React 19.3 | Zoltán Next.js-re áll át; a saját oldal bemutatja, mit tud. |
| Hosting | **Cloudflare Workers**, az **OpenNext** adapterrel (`@opennextjs/cloudflare`), Free csomag | Zoltán kérése volt (tárhely + DNS egy helyen). Ingyenes, üzleti célra is használható, világszerte gyors. A Vercel Pro (~20 $/hó) volt az alternatíva. |
| Worker neve | `lightningweb` | Egyeznie kell a `wrangler.jsonc` `name` mezőjével. |
| Build/CI | **Cloudflare Workers Builds** a GitHub-repóhoz kötve | Push a `main`-re → automatikus build és élesítés. Nincs GitHub Actions. |
| Domain | `lightningweb.hu`, regisztrátor: **Rackhost**, névszerverek a **Cloudflare**-en | .hu domaint a Cloudflare nem árul, ezért magyar regisztrátornál van, de a DNS a Cloudflare-en. |
| E-mail küldés (űrlap) | **Resend** (EU régió, eu-west-1) | Egyszerű API, ingyenes keret. |
| E-mail fogadás | **Cloudflare Email Routing**: `info@` és `urlap@lightningweb.hu` → Zoltán Gmailje | Ingyenes továbbítás; küldéshez nincs Workspace. |
| Oldalellenőrző | **Google PageSpeed Insights API** (kulccsal) | Valódi mérés; kulcs nélkül a Google 429-et ad. |
| Időpontfoglalás | **Cal.com** (ingyenes), kattintásra betöltve | Google Naptárral szinkronizál, ütközésfigyeléssel. |
| Analitika | **Cloudflare Web Analytics** (automatikus, süti nélkül) | Ezért nem kell süti-banner. |
| Betűk | Geist, Geist Mono, Instrument Serif (`next/font/google`) | Prémium, precíz hatás (lásd 9. fejezet). |

**Architektúra röviden:**
- Minden oldal **statikus**, build időben előre legenerálva (prerender). Ezért nincs szükség külön cache-tárolóra (`open-next.config.ts` üres alapbeállítás).
- Két dinamikus végpont van: `/api/contact` (POST, Resend) és `/api/pagespeed` (GET, Google PSI).
- Két külön gyökér-layout van a két nyelvhez: `src/app/(hu)/layout.tsx` és `src/app/(en)/en/layout.tsx` (így a `<html lang>` nyelvenként helyes). A közös HTML-váz a `src/components/RootDoc.tsx`.
- A 404 egységes, márkázott: `experimental.globalNotFound` + `src/app/global-not-found.tsx`.
- `next.config.ts`: biztonsági fejlécek (HSTS, nosniff, X-Frame-Options, Referrer-Policy, Permissions-Policy), `www.lightningweb.hu → lightningweb.hu` 308-as átirányítás, `poweredByHeader: false`.
- **`cacheComponents` KI VAN KAPCSOLVA szándékosan.** Bekapcsolva az OpenNext worker lefagy az oldalkéréseknél. Ne kapcsold be.

---

## 4. Kódstruktúra – hol mi van

```
src/
  app/
    (hu)/                 magyar oldalak: / /szolgaltatasok /munkaink /munkaink/[slug]
                          /arak /rolunk /blog /blog/[slug] /kapcsolat /adatkezeles /aszf
                          /[local]  (helyi landing oldalak, pl. /weboldal-keszites-debrecen)
    (en)/en/              angol oldalak: /en /en/services /en/work /en/work/[slug] /en/pricing
                          /en/about /en/blog /en/blog/[slug] /en/contact /en/privacy /en/terms
    api/contact/route.ts  ajánlatkérő űrlap → Resend (+ fix visszaigazoló e-mail az érdeklődőnek)
    api/pagespeed/route.ts ingyenes oldalellenőrző → Google PSI (mobil), www-s újrapróbálással
    llms.txt/route.ts     összefoglaló az AI-modelleknek, az oldal adataiból generálva
    robots.ts             mindenkit és az AI-botokat is engedi, /api/ tiltva
    sitemap.ts            automatikus sitemap (kb. 32 cím, mindkét nyelv + hreflang)
    manifest.ts, icon.svg, apple-icon.png, global-not-found.tsx, globals.css
  components/
    pages/                az oldalak tartalma; a HU és EN szöveg egymás mellett: {hu ? "…" : "…"}
    interactive/          kliensoldali részek: Showcase (hero bemutató), Checker (oldalellenőrző),
                          Calculator (árkalkulátor), ContactForm, Booking (Cal.com), BeforeAfter,
                          Race, LoadTime, WorkCases (szűrő), MobileBar (mobil alsó gombsor), Reveal…
    Nav.tsx, Shell.tsx    menü (lebegő üveg menüsor + teljes képernyős mobil menü), keret, lábléc
    JsonLd.tsx            strukturált adatok
    Img.tsx, PageSkeleton.tsx, NavProgress.tsx   képek skeletonnal, töltő-vázlat, felső töltőcsík
  lib/
    i18n.ts               ROUTES (minden oldal URL-je mindkét nyelven), SITE_URL,
                          CONTACT (e-mail, telefon, Cal.com link, közösségi linkek)
    prices.ts             a kalkulátor árai (az árkártyák a PricingPage-ben – a kettőt együtt kell módosítani!)
    refs.ts               a 4 referencia (TaskoGrill, Ruen Farm, Oz’s Chili, eNvolve) adatai, színei, szövegei
    posts.ts              4 blogcikk HU/EN slugokkal, egyszerű markdown törzzsel
    local.ts              helyi landing oldalak (Nyíregyháza, Debrecen), csak magyarul
    legal.ts              adatkezelési tájékoztató (GDPR + sütik) és ÁSZF szövege
    seo.ts                oldalcímek, leírások, metaadatok
    draft.ts              az „Ezt választom” / kalkulátor gombok sessionStorage-ön át töltik ki az űrlapot
public/img/               WebP képernyőképek (800 és 1440 px széles változatok), mobil képek, portré (zoltan.webp)
public/og.png             megosztási kép
wrangler.jsonc            Worker konfiguráció + nem titkos változók
open-next.config.ts       OpenNext konfiguráció (alapértelmezett)
```

**Tipikus módosítások:**
- **Ár változik:** `src/lib/prices.ts` **és** `src/components/pages/PricingPage.tsx` (kártyák), valamint a GYIK árkérdése a `HomePage.tsx`-ben, és a `src/lib/local.ts` szövegei („290 000 Ft-tól”). Az `llms.txt` és a strukturált adatok a lib-ből generálódnak.
- **Elérhetőség változik:** `src/lib/i18n.ts` → `CONTACT`.
- **Új referencia:** `src/lib/refs.ts` + képek a `public/img/`-be (WebP, 800 és 1440 px).
- **Új blogcikk:** `src/lib/posts.ts` (a sitemap automatikusan frissül).
- **Új helyi oldal:** `src/lib/local.ts` (saját, nem duplikált szöveggel).
- **Stílus:** minden a `src/app/globals.css`-ben van (~4900 sor).

---

## 5. Élesítés (deploy)

**Automatikus (ez a megszokott út):** push vagy merge a `main` ágra → Cloudflare Workers Builds lefuttatja:
- Build command: `npx opennextjs-cloudflare build`
- Deploy command: `npx opennextjs-cloudflare deploy`
- Preview builds: kikapcsolva (az alapértelmezett preview parancs ennél a beállításnál hibára futott).
- 1–3 perc múlva élesben van. A build naplója: Cloudflare dashboard → Workers & Pages → `lightningweb` → Deployments.

**Kézi élesítés helyi gépről:** `npx wrangler login`, majd `npm run deploy`. Csak akkor, ha a Workers Builds nem működik.

**Címek:**
- Éles: https://lightningweb.hu (a `www.` átirányít)
- Workers-cím: `https://lightningweb.lightningwebdesigner.workers.dev`
- Custom domainek a Worker → Settings → Domains & Routes alatt: `lightningweb.hu` és `www.lightningweb.hu`.

**Ellenőrzés élesítés után:** minden oldal betölt (HU + EN), a 404 márkázott, `/sitemap.xml`, `/robots.txt`, `/llms.txt` elérhető, az oldalellenőrző mér (pl. `ozchili.hu`-val, ~17–19 mp), az űrlap kézbesít (Resend dashboard → Emails).

---

## 6. Környezeti változók és titkok

Csak a **nevek** vannak itt, értékek soha.

| Név | Típus | Hol van beállítva | Mire kell |
| --- | --- | --- | --- |
| `RESEND_API_KEY` | **Secret** | Cloudflare → Worker `lightningweb` → Settings → Variables and Secrets; helyben `.dev.vars` / `.env.local` | Az űrlap e-mail küldése. Resend → API Keys, „Sending access”, domain: lightningweb.hu. |
| `PAGESPEED_API_KEY` | **Secret** | ugyanott | Oldalellenőrző. Google Cloud Console → PageSpeed Insights API bekapcsolva → Credentials → API key, API-korlátozás: PageSpeed Insights API, Application restrictions: None (a szerver hívja). |
| `CONTACT_TO` | var | `wrangler.jsonc` | Hová menjenek az ajánlatkérések (`info@lightningweb.hu`). |
| `CONTACT_FROM` | var | `wrangler.jsonc` | Feladó: `LightningWeb <urlap@lightningweb.hu>` (Resendben igazolt domain). |
| `NEXT_PUBLIC_SITE_URL` | var | `wrangler.jsonc` | `https://lightningweb.hu` (kanonikus URL-ek, sitemap). |

Titok beállítása parancssorból: `npx wrangler secret put RESEND_API_KEY`.

Megjegyzés: ha egy agentnek parancssorból kell élesítenie (wrangler), ahhoz egy `CLOUDFLARE_API_TOKEN` kell „Edit Cloudflare Workers” joggal, környezeti változóként. Chatbe vagy repóba sose kerüljön.

---

## 7. Külső szolgáltatások és hozzáférések

Minden fiók Zoltáné. Jelszót agent ne kérjen és ne írjon be: ha böngészőben kell dolgozni, Zoltán bejelentkezik (eddig a Claude in Chrome bővítményen és a Claude app beépített böngészőjén keresztül ment), és utána az agent kattint.

### GitHub
- `Zol-E2/lightningweb` (ez a repó, nyilvános), alapág: `main`.
- `Zol-E2/envolve-app` (az eNvolve app, lásd 11. fejezet).
- Zoltán más repói (Cashier-Software, HistoryFlashcardsIKT, james-ai, Esemenynaptar) iskolai/hobbi projektek, a portfólióban szándékosan nem szerepelnek.

### Cloudflare (Free csomag)
- **Worker:** `lightningweb` (Workers Builds a GitHubhoz kötve).
- **Zóna:** `lightningweb.hu`, névszerverek: `ara.ns.cloudflare.com`, `buck.ns.cloudflare.com`.
- **DNS-ben:** Resend rekordok (DKIM `resend._domainkey`, `send` és `rsend` CNAME/MX/SPF, DMARC `p=none`), Email Routing MX/SPF/DKIM, Search Console TXT ellenőrzés.
- **Email Routing:** `info@lightningweb.hu` és `urlap@lightningweb.hu` → Zoltán fő Gmailje.
- **Web Analytics:** automatikus beállítás, süti nélkül.
- **AI Crawl Control / „Block AI bots”: KIKAPCSOLVA** szándékosan, és a Cloudflare managed robots.txt sincs bekapcsolva (a saját `robots.ts` engedi az AI-botokat).
- **Cloudflare Access: kikapcsolva** (bejelentkezéshez kötné a nyilvános oldalt).
- A Cloudflare új felülete nagyon hasonlít a Vercelére, könnyű összekeverni.

### Rackhost (domainregisztrátor)
- `lightningweb.hu`: regisztrálva, névszerverek egy „Cloudflare” nevű NS-profillal a Cloudflare-re állítva. A Rackhoston DNS-t már nem kell szerkeszteni, minden a Cloudflare-ben van.
- `envolve.hu`: itt **a Rackhost névszerverei maradtak**, a DNS a Rackhoston van: `A @ 216.198.79.1` és `CNAME www → <Vercel által megadott cím>.vercel-dns-017.com` (a Vercel domains oldala mutatja a pontos értéket).
- A Rackhost néha kijelentkeztet, és a megerősítő felugró ablakokat Zoltánnak kell leokéznia.

### Resend
- Domain: `lightningweb.hu`, régió eu-west-1 (Írország), igazolva.
- API-kulcs: „Sending access”, csak a lightningweb.hu-ra → Cloudflare Secret `RESEND_API_KEY`.
- Az űrlap két levelet küld: (1) ajánlatkérés az `info@`-ra, `reply_to` az érdeklődő címe; (2) ha az érdeklődő adott e-mailt, egy **fix szövegű** visszaigazolás (a felhasználó szövegét nem tükrözi vissza, csak egy biztonságosan szűrt keresztnevet, így nem lehet spamre használni). Logó a levélben nincs (Zoltán kérte, hogy vegyük ki).
- Honeypot mező (`website`): ha ki van töltve, a szerver csendben sikert jelez.

### Google
- **Search Console:** `lightningweb.hu` domain-tulajdon (DNS TXT), sitemap beküldve.
- **Cloud Console:** egy projekt a PageSpeed Insights API-val (az OAuth beleegyezési képernyő ki lett töltve, de nem kell hozzá).
- **Merchant Center** (TaskoGrillhez), lásd 11. fejezet.
- A ruenfarm Search Console-ja Zoltán egy másik Google-fiókjában van (nem az alapértelmezett, `/u/2/`).

### Cal.com
- Felhasználónév: `lightningweb`, esemény: `ingyenes-konzultacio` (20 perc, Cal Video vagy telefon, utána 10 perc szünet, legalább 2 órával előre foglalható). Az oldalon: `CONTACT.booking = "lightningweb/ingyenes-konzultacio"`, a `Booking.tsx` csak kattintásra tölti be (sebesség miatt).
- A Cal.com-fiók Zoltán **másik** Gmail-fiókján van (abban van a valódi naptára); a régi fiókot elhagytuk. Ütközésfigyelés ennek a fióknak a fő naptárára van kötve.
- Az egyetemi órák a telefon helyi naptárában vannak, amit a Cal.com nem lát, ezért az elérhetőségből vannak kivágva (Budapest időzóna): **H 12–18, K 10–17, Sze 10–18, Cs 10–14 és 16–18, P–Szo 10–18.** Új félévnél frissíteni kell.

### Vercel
- Team: `zol-e2s-projects`, projekt: `envolve-app` (régió arn1). Domainek: `www.envolve.hu` (Production), `envolve.hu` → 308 → www.

### Clerk (eNvolve bejelentkezés)
- Az élő eNvolve még a Clerk **fejlesztői** példányán fut („Development mode” csík, 3 felesleges átirányítás). Lásd a nyitott teendőket.

### Közösségi oldalak
- Facebook: `facebook.com/lightningwebdesign`, Instagram: `instagram.com/lightningweb`, LinkedIn: Zoltán személyes profilja. Mindhárom frissítésre szorul (Zoltán segítséget kért hozzá, lásd 13. fejezet). Céges WhatsApp nincs.

---

## 8. Üzleti adatok, árak, garanciák

**Impresszum (nyilvános, az /adatkezeles oldalon is szerepel):**
- Elek Zoltán E.V., márkanév: LightningWeb
- Székhely és telephely: 4484 Ibrány, Toldi utca 2/A
- Nyilvántartási szám: 59586555, adószám: 90398281-1-35
- Alanyi adómentes, az árak áfát nem tartalmaznak. Átalányadós; ha a KATA visszajön, átállhat.
- Tárhely: Cloudflare, Inc.
- Telefon: +36 30 137 5903, e-mail: info@lightningweb.hu
- Zoltán jelenleg többnyire Debrecenben van (egyetem). Az oldalon a terület: **„Szabolcs és környező megyék · online országosan”** (az ő megfogalmazása). A strukturált adatokban Debrecen és Nyíregyháza kiszolgált városként szerepel.

**Üzleti tények (Zoltán válaszai, 2026-11-12):** ~2–3 év tapasztalat; korábban 100–200 ezer Ft/oldal, most ~300 ezer a cél és prémiumabb ügyfelek; hirdetéskezelés mindig a költés %-a, próbahónappal; karbantartás sávos (az alap eddig az ár ~10%-a volt); 50% előleg (domain, tárhely, indulási költségek); egyszerű oldal max. 1 hónap.

**Elfogadott árak (2026-11-12, egy 16 magyar szolgáltatót összehasonlító piackutatás alapján, Zoltán az egészet jóváhagyta):**

| Tétel | Ár |
| --- | --- |
| Start weboldal | 290 000 Ft-tól (5 oldal) |
| Business weboldal | 490 000 Ft-tól (10 oldal), „Legnépszerűbb” |
| Webshop | 590 000 Ft-tól |
| Egyedi Next.js | **ár nélkül, csak „Kérj ajánlatot” gomb** (Zoltán kifejezett kérése; belsőleg jellemzően 1 M Ft felett) |
| Karbantartás | 9 900 / 19 900 / 34 900 Ft/hó (oldaltípus szerint) |
| SEO | 89 000 Ft/hó-tól |
| Social media | 79 000 Ft/hó-tól |
| Hirdetéskezelés | a költés 15%-a, min. 39 000 Ft/hó, beállítás 29 000 Ft, próbahónap |
| Éves fizetés | 2 hónap ingyen |
| Kalkulátor extrák | +oldal 15 000; blog 40 000; szövegírás 60 000; logó 80 000; fotó 70 000; második nyelv +25% |

**Garanciák (a főoldalon):** fix ár, fix határidő, az oldal az ügyfél tulajdona (teljes kifizetés után), 6 hónap ingyenes hibajavítás, kockázatmentes start, plusz Next.js-nél mobil PageSpeed 90+ sebességgarancia.

**Jogi szövegek** (`src/lib/legal.ts`): teljes GDPR-tájékoztató (adatok, célok, jogalap, megőrzés, pl. számlázás 8 év; adatfeldolgozók: Cloudflare, Resend, Google, Cal.com, számlázó; jogok, NAIH), süti-tájékoztató (követő süti nincs → nincs banner), ÁSZF (50% előleg, 6 hónap javítás, tulajdonjog teljes fizetés után, havidíjasnál 30 napos felmondás). **Nincsenek ügyvéddel átnézve.**

---

## 9. Design és tartalom: döntések és indokok

A design 14 körös iterációval született (a régi statikus HTML-tervek a projekt fájljai között vannak: `lightning-web-design/` v2–v8 mentések). A lényeg, amit Zoltán visszajelzései alapján tartani kell:

- **Prémium, a sebességet és a precizitást tükrözze.** Paletta: mély fekete (`#07080a` körül) és hűvös világosszürke (`#eceef0`) szekciók váltakoznak, a cián (`#2fd0f5` körül) csak kiemelés.
- **A háttérben óriás villám NEM prémium** (Zoltán elutasította). A hero helyette egy élő bemutató (laptop + telefon mockup), ami Zoltán **valódi munkáit** forgatja képernyőképekkel és esettanulmány-linkkel.
- **Egyszerű, ügyfélbarát nyelv.** Egy acélgyártó, virágkötő vagy kereskedő is értse. Szakszavak helyett pl. „Megtalálnak a Google-ön”. **Tegező** hangnem.
- **Több vizuális elem, mint szöveg**, de arányosan: a szöveg a SEO-nak, a vizuál az ügyfeleknek kell.
- **Egyedi, prémium menü:** asztalon lebegő üveg menüsor csúszó jelölővel, mobilon teljes képernyős animált menü. (Egyszer elromlott a menü, kattintás-vezérelt útválasztással lett javítva.)
- **Iparági aloldalak törölve** (Zoltánnak kevés ügyfele van, az iparági bontás csak példa volt). Helyettük a „Kinek dolgozunk” 3 kártya: helyi vállalkozások, webshopok, gyártók és termelők, mind valódi esettanulmányra mutat.
- **Árkártyák:** Start/Business/Webshop „Ezt választom →” gombja kitölti az űrlapot; a Business világos kártya fekete kerettel; a Next.js kártya sötét, prémium, körbefutó fénylő cián kerettel (csak hoverre mozog), „Prémium” címkével, szlogen: „Mérhetően villámgyors, egyedi weboldal”.
- **Karbantartás és marketing** ugyanabban a sötét havidíjas szekcióban, de elkülönítve: karbantartás semleges szürke panel, marketing cián színezésű panel, köztük szaggatott vonal „+” jellel. (A világos marketing-szekciót Zoltán elutasította: „ettől függetlenül havidíjas szolgáltatás”.)
- **Projektszínek** jól elkülönülnek: TaskoGrill narancs, Ruen Farm zöld, Oz’s Chili piros, eNvolve lila.
- **Animációk visszafogva** (Zoltán kérése: ahol nem fontos, ne legyen): kivettük a villám-intrót, lebegő kártyákat, pulzálást, folyton forgó keretet. A görgetésre beúsztatás csak a fő blokkokon maradt.
- **Skeleton három szinten:** felső töltőcsík oldalváltáskor; 0,5 mp után részletes oldalvázlat; képek helyén csillogó helyőrző.
- **Képek:** minden WebP, pontos méretekkel (nincs ugrálás), két méret (800/1440), csak a hero tölt azonnal.
- **Rólunk:** Zoltán fotója + „Szia, Zoltán vagyok” bemutatkozás (~3 év, Szabolcs/országos/külföld, eNvolve saját fejlesztés), értékek: Gyorsan, Őszintén, Eredményre. Zoltán finomíthatja a tényeket.
- **Kitalált számokat nem írunk** (eredmények, ügyfélszám). A főoldali ügyfélvélemény helye még helyőrző.
- **Oldalellenőrző:** szigorú, sebességsúlyozott értékelés (sebesség 40%, https csak 10%), van középső „figyelmeztetés” szint. Ok: a korábbi túl engedékeny volt, egy közepes oldalra is „Kiváló”-t adott, így az érdeklődőnek nem volt oka írni. Hibánál nem mutat minta pontszámot.
- **Inspirációk:** garanciák (OneNine), interaktív hero (Madwell), saját sebesség mint bizonyíték (Bleech), munkákkal teli első képernyő (Mosaic).

---

## 10. SEO és AI-keresők

- Külön URL nyelvenként (`/arak` ↔ `/en/pricing`), hreflang, kanonikus URL-ek, automatikus sitemap.
- „Honlap” kulcsszó a címekben és leírásokban (sok vállalkozó így keres).
- Helyi landing oldalak: `/weboldal-keszites-nyiregyhaza`, `/weboldal-keszites-debrecen` (saját szöveg, árak, környékbeli munkák). Zoltánnal még megerősítendő állítások: személyes látogatás Szabolcsban, „többnyire Debrecenben”.
- Strukturált adatok: Organization/LocalBusiness, szolgáltatások árakkal, alapító (Zoltán + LinkedIn), cikkek, morzsamenü. **FAQ schema szándékosan kihagyva** (a Google korlátozza a FAQ rich resultot).
- AI-keresők: `/llms.txt`, a `robots.ts` kifejezetten engedi a GPTBot, ClaudeBot, PerplexityBot, Google-Extended stb. botokat, a Cloudflare AI-blokkolás kikapcsolva. A Bing Webmaster Tools importja még hátravan (a ChatGPT/Copilot a Binget használja).
- Lighthouse: akadálymentesség/SEO/best practices 100. Célkutatás: „LightningWeb – célcsoport és SEO kutatás” (claude.ai artifact).
- Megemlítve: létezik egy állami honlap-voucher program, de a kifizetések állítólag akadoznak (2026-08-as hír), ezért nem építettünk rá.

---

## 11. Portfólió oldalak (ügyféloldalak)

Ezek nem ebben a repóban vannak, de az oldal referenciái, és rendszeresen dolgozunk rajtuk. Mindhárom WordPress oldal láblécében „LightningWeb” kreditlink van. Módosítás előtt **mindig mentés** (UpdraftPlus), a kinézet nem változhat, és az ügyfelek oldalai, ezért Zoltánon keresztül egyeztetünk. A belépést Zoltán végzi a böngészőben.

**Mérési módszer:** pagespeed.web.dev Zoltán Chrome-jában (a felhős gép hálózata ezeket az oldalakat nem éri el, és az anonim PSI API kerete gyakran elfogy).

### ozchili.hu – Oz’s Chili (kézműves chiliszósz webshop)
- Rackhost tárhely, Zakra + Elementor + WooCommerce + Barion, Rackhost xSpeed Cache.
- Eredmény: mobil ~60 → 80, asztali 86 → 93–95 (LCP 21,4 mp → 5,1 mp).
- Változtatások: Converter for Media (WebP, eredetik megvannak); Elementor FA4 shim ki; hero háttérméretek eszközönként; a hero szöveg belépő animációja törölve; xSpeed: minify, defer, delay JS, CSS összevonás, resource hints; Code Snippets snippet „LightningWeb sebesség-optimalizálás” (dashicons ki vendégeknek, Everest Forms CSS csak a /kapcsolat-on, ikonkészletek, async fontok, hero preload, lazy load).
- **Csapda:** a „Delay JS” elrontotta a kosarat és a termékgalériát → most csak a felsorolt scriptek késleltetettek (elementor, swiper, sourcebuster, order-attribution, gtm/gtag, skip-link). A jQuery szándékosan render-blocking maradt.

### ruenfarm.com – Ruen Farm (szabolcsi méz, **angol nyelvű, brit piac**, Amazon UK)
- Hostinger, Astra + Elementor, LiteSpeed Cache. Mobil 98 / asztali 97.
- SureRank és Starter Templates kikapcsolva (az All in One SEO-val duplikált meta/canonical/schema); nyelv en_GB, időzóna Europe/London; ~36 amerikai → brit helyesírás-javítás; AIOSEO címek/leírások, Organization schema, OG kép, archívumok noindex, csatolmányok átirányítva, FAQPage schema a /contact-on, Amazon UK `sameAs`.
- Search Console (meta tag, Zoltán egy másik Google-fiókjában) + sitemap, Bing import kész.

### taskogrill.com – TaskoGrill (újfehértói lézervágott acél grillek, webshop, magyar vásárlók)
- Hostinger, Astra/Elementor/WooCommerce/CartFlows/FunnelKit, LiteSpeed. Mobil 71 → 86, asztali 87 → 98.
- A 33 MB-os háttérvideó 4,5 MB-os 720p és 2 MB-os 480p változatra cserélve, lazy betöltéssel (WPCode snippet: hero preload + IntersectionObserver). A tömörített fájlok a projektfájlok között: `taskogrill/`.
- LiteSpeed: CSS összevonás, HTML+JS minify (kivétel `wp-includes/js/dist/`), JS defer **csak gtm.js/analytics.js kivétellel** (Woo scriptek kizárása eltörte az inline paramétereiket), logó kizárva a lazy loadból.
- Rank Math SEO: kulcsszavas címek/leírások (főoldal, bolt, kapcsolat, 19 termék, 7 kategória), LocalBusiness Store Újfehértó, TASKÓ márka minden terméken, 3 útmutató cikk **piszkozatban**.
- **SZÁLLÍTÁS – NAGYON FONTOS:** a szállítási díjat **nem** a WooCommerce szállítási zónái számolják, hanem egy WPCode kódrészlet: „TG - Fizetési módok szűrése + szállítási díj” (szállítási osztályonként, utalás vs. utánvét, „utólag egyeztetve” osztály). **Soha ne adj hozzá WooCommerce szállítási zónát** – duplán számolna (egyszer kipróbáltuk és visszavontuk, rendelés nem sérült). Létezik már értékelés-kérő e-mail kódrészlet is.
- **Google Merchant Center:** a szállítási díjakat egy attribútumszabály adja a „Google for WooCommerce (hu/HU)” forráson, termék-ID regex alapján: 4 000 Ft, 5 000 Ft, 12 500 Ft, 3 000 Ft csoportok. A feltételnek az `id` attribútumot (`gla_<postID>`) kell figyelnie, **nem** az `offer id`-t. Új termék vagy szállítási osztály változás → a regexet frissíteni kell. A 7 egyedi szállítású termék szándékosan korlátozott marad.
- Jótállás: élettartam a lézervágott alkatrészekre, festés kivételével. **Karácsonyi ajándékoldal: későbbi terv.**

### eNvolve – envolve.hu (Zoltán saját Next.js fejlesztése)
- Hangalapú AI tanulóalkalmazás tanulási nehézséggel élő gyerekeknek. Repó: `Zol-E2/envolve-app`, Next 16 + Clerk + Supabase, Vercel. Az oldalon „Egyedi fejlesztés · Next.js” referenciaként szerepel.
- Bejelentkezéshez kötött, ezért a PSI a `/hu/sign-in` oldalt méri. PR #1 (összevonva): Clerk preconnect, a bejelentkező doboz helyének foglalása (CLS 0,178 → 0,013), telemetria ki, magyar Clerk-cím. Eredmény mobil 64 → 74, asztali 92.
- A maradék lassulás a **fejlesztői Clerk-példány** miatt van. Az éles Clerk ingyenes (saját domain, 50k MRU), **de** az admin oldalak MFA-t kérnek, ami éles példányon csak Pro. Zoltán az éles tesztekig halasztja a váltást.

---

## 12. Csapdák, amikbe már belefutottunk

1. **`cacheComponents` bekapcsolva → az OpenNext worker lefagy.** Maradjon kikapcsolva.
2. **Anonim PageSpeed API → 429.** Kulcs kell (`PAGESPEED_API_KEY`).
3. **A felhős (AI) gépek hálózata** nem mindig éri el a workers.dev-et és az ügyféloldalakat. Ilyenkor Zoltán gépén, böngészőből kell ellenőrizni.
4. **.hu domain:** a regisztráció 1–2 munkanap, addig a Rackhost nem enged névszervert cserélni. Cloudflare Workerre csak névszerver-cserével lehet domaint kötni (A/CNAME rekorddal nem, az csak Business csomagban menne).
5. **Gmail átmenetileg visszautasíthatja** a továbbított leveleket egy friss domainről (421 4.7.28), ha sok teszt ment rajta. Kb. egy óra után magától rendeződik.
6. **TaskoGrill:** ne adj hozzá Woo szállítási zónát; LiteSpeed JS-beállításokkal óvatosan, minden lépés után vendégként teszteld a kosarat.
7. **ozchili:** a Delay JS eltörheti a Woo Blocks kosarat.
8. **Merchant Center:** `id`, nem `offer id`.
9. **Cloudflare vs. Vercel felület** összetéveszthető.
10. **A visszaigazoló e-mail** sosem tükrözhet vissza felhasználói szöveget (spam-visszaélés).
11. **Az árak két helyen vannak** (`prices.ts` és `PricingPage.tsx`), és szövegesen a `local.ts`-ben és a GYIK-ben is.

---

## 13. Nyitott teendők

**Zoltánra vár (nem kód):**
- [ ] Bing Webmaster Tools: lightningweb.hu importja a Search Console-ból.
- [ ] Google Cégprofil (Business Profile) létrehozása.
- [ ] Valódi ügyfélvélemények (a főoldalon helyőrző van: `HomePage.tsx`), Google-értékelések gyűjtése.
- [ ] Gmail profilkép / másodlagos e-mail-címek (`urlap@`, `info@`) hozzáadása a Google-fiókhoz, hogy a levelek mellett a logó jelenjen meg. Opció még: BIMI.
- [ ] A Rólunk szöveg és a helyi oldalak állításainak pontosítása.
- [ ] eNvolve: Clerk éles példány, amikor indulnak az éles tesztek (Clerk felület, DNS-rekordok, kulcscsere a Vercelben; admin MFA miatt Pro vagy átmeneti lazítás).
- [ ] „Készítette: LightningWeb” lábléclinkek ellenőrzése az ügyféloldalakon.
- [ ] Cal.com elérhetőség frissítése új félévnél.

**Lehetséges következő fejlesztések:**
- [ ] Facebook/Instagram oldal frissítése és tartalomterv, LinkedIn-profil frissítése (Zoltán kérte, hogy segítsünk).
- [ ] TaskoGrill: karácsonyi ajándékoldal; a 3 piszkozat útmutató cikk élesítése; a termékoldalak mobil pontszáma (59–67, a Complianz süti-banner az LCP).
- [ ] Jogi szövegek ügyvédi átnézése.
- [ ] Több blogcikk, további helyi oldalak (csak egyedi szöveggel).
- [ ] Videós ügyfélvélemény / beágyazott Google-értékelések.
- [ ] Ha lesz rá igény: „szabad helyek” jelzés (csak ha igaz).

---

## 14. Munkastílus – hogyan dolgozz Zoltánnal

- **Magyarul** kommunikálj, egyszerűen és tömören. Zoltán nem szereti a hosszú szakszavas magyarázatot; azt szereti tudni, mit csináltál és mi a dolga.
- Ha valamit meg tudsz csinálni nélküle, csináld meg („amiket meg tudsz csinálni nélkülem, azokat nyugodtan”). Ha valami tőle kell, írd le konkrétan, lépésenként, linkkel.
- Kitalált adatot ne tegyél az oldalra. Ami bizonytalan, azt jelöld és kérdezd meg.
- Minden vizuális változtatás után nézd át asztalon és mobilon is (300–390 px szélességig), mert Zoltán kiszúrja az elcsúszásokat.
- Sebesség az első: képek WebP, kevés animáció, minden harmadik féltől származó dolog (pl. Cal.com) kattintásra töltődjön.
- Élő ügyféloldalon: előbb mentés, a kinézet nem változhat, minden lépés után teszt (különösen kosár/pénztár).
- Titkos kulcsot Zoltán maga ír be a Cloudflare-be; chatbe se kérd.
- Kisebb, tiszta változtatásokat szeret a meglévő struktúrába illesztve, nem nagy átírásokat.

---

## 15. A projekt története röviden

- **2026-11-11:** design-iterációk (v2–v5) statikus HTML-ként claude.ai artifactban, a logóból kiindulva, majd prémium újratervezés.
- **2026-11-12:** valódi referenciák és képernyőképek (v6–v8), iparági oldalak törlése, piackutatás és árak (v9–v14), Rólunk fotóval. Hosting döntés: Cloudflare. Next.js build a repóba, Workers Builds bekötve, első élesítés workers.dev-en. Optimalizálás (WebP, kevesebb animáció, skeleton). Blog, OG kép, biztonsági fejlécek.
- **2026-11-13:** elérhetőségek, impresszum, AI SEO (llms.txt), Cal.com, jogi oldalak, envolve.hu Vercelen, domain élesítés (NS → Cloudflare), Email Routing, Search Console, Web Analytics, PageSpeed kulcs, Resend + visszaigazoló levél, új képernyőképek, szigorúbb ellenőrző. Párhuzamosan a négy portfólióoldal gyorsítása és SEO-ja.
- **2026-11-14:** SEO kör (helyi oldalak, „honlap”, akadálymentesség), mobil elrendezés javítások. Ez az utolsó commit a `main`-en az átadás előtt.

---

## 16. Egyéb, nem kapcsolódó korábbi munkák

A claude.ai projektben korábban két, ehhez a weboldalhoz nem kapcsolódó beszélgetés volt:
- **ElevenLabs Python hiba** (2025-12): Python projekt az ElevenLabs conversational AI API-val (WebSocket). A hiba oka a kvóta túllépése volt, a többi hiba (1002-es protokollhiba, időtúllépések) ebből következett.
- **Budget meal planner** (2026-03/04): költségkímélő étkezéstervező app egyetemistáknak. Supabase (PostgreSQL, Edge Functions Deno/TypeScript, Zod, RLS), Gemini 2.5 Flash. Megtervezett migráció: `004_nutrition_fallbacks_translations.sql`. Nyitott: új mezők a `GenerateMealPlanSchema`-ba, frontend átállítása a `meals_localized` nézetre. Referencia: AllTrails elemzés (projektfájlok: `knowledge/`).
