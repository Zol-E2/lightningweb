import type { Lang } from "@/lib/i18n";

/**
 * Blog articles. Each post has its own slug per language (better for SEO).
 *
 * Body format (tiny markdown subset, rendered by ArticleBody):
 *   blank line = new block, "## " = subheading, "- " lines = list,
 *   "> " = highlighted tip, **bold**, [text](page:pricing) or [text](post:maps)
 *   for internal links.
 */
export type PostText = {
  slug: string;
  title: string;
  desc: string;
  cat: string;
  body: string;
};

export type Post = {
  key: string;
  date: string; // ISO, publish date
  minutes: number;
  icon: string;
  cover: string;
  hu: PostText;
  en: PostText;
};

export const POSTS: Post[] = [
  {
    key: "maps",
    date: "2026-11-13",
    minutes: 6,
    icon: "i-search",
    cover: "linear-gradient(140deg,#0a7f9e,#07303c)",
    hu: {
      slug: "google-terkep-elso-hely",
      title: "Így kerülj a Google Térkép élére",
      desc: "Lépésről lépésre: hogyan állítsd be a Google Cégprofilodat, hogy a környékbeli keresők téged találjanak meg először.",
      cat: "Google",
      body: `Amikor valaki beírja a Google-be, hogy „virágbolt a közelben” vagy „autószerelő Nyíregyháza”, a találatok tetején egy térkép jelenik meg három céggel. Ez a hármas a legértékesebb hely az interneten egy helyi vállalkozásnak: ide kattintanak a legtöbben, és innen hívnak a legtöbben. A jó hír, hogy ide nem hirdetéssel, hanem egy jól kitöltött, ingyenes Google Cégprofillal lehet bekerülni.

## 1. Hozd létre vagy vedd át a Cégprofilodat

Menj a google.com/business oldalra, és keresd meg a cégedet. Lehet, hogy már létezik egy profil, amit valaki más (vagy maga a Google) hozott létre: ilyenkor kérd a tulajdonjog átvételét. A Google ellenőrizni fogja, hogy tényleg a tiéd a vállalkozás, ez általában videós ellenőrzéssel vagy postai kóddal történik.

## 2. Töltsd ki teljesen, pontosan

A Google azokat a cégeket rangsorolja előre, akikről sokat és biztosat tud. Ezért minden mezőt tölts ki:

- **Kategória:** válaszd a legpontosabbat (például „Virágüzlet”, nem csak „Bolt”). Adhatsz mellé kiegészítő kategóriákat is.
- **Név:** a valódi cégneved, kulcsszavak nélkül. Ha a neved mellé beírod, hogy „legjobb pizza”, a Google büntethet érte.
- **Cím vagy kiszolgált terület:** ha hozzád jönnek a vevők, add meg a címet; ha te mész hozzájuk, add meg a településeket.
- **Nyitvatartás:** az ünnepnapokat is frissítsd.
- **Telefonszám és weboldal:** a weboldal legyen gyors, és mobilon is jól működjön.

> Fontos: a neved, címed és telefonszámod mindenhol pontosan ugyanúgy szerepeljen: a Cégprofilban, a weboldaladon, a Facebookon és a cégjegyzékekben. Az eltérések összezavarják a Google-t.

## 3. Képek, sok képek

Tölts fel valódi fotókat az üzletről kívül-belül, a termékeidről, a csapatról és a munkáidról. A sok, friss kép azt jelzi a Google-nek és a vevőknek is, hogy a cég él és működik. Havonta pár új kép már sokat számít.

## 4. Gyűjts értékeléseket, és válaszolj rájuk

Az értékelések száma és minősége az egyik legerősebb tényező. Kérd meg az elégedett ügyfeleidet, hogy írjanak pár mondatot: küldj nekik egy rövid linket SMS-ben vagy e-mailben, közvetlenül a vásárlás után. Minden értékelésre válaszolj, a negatívakra is, udvariasan és megoldást kínálva. Pénzért vagy kedvezményért értékelést kérni tilos, ezt a Google szankcionálja.

## 5. Posztolj rendszeresen

A Cégprofilban hírt, ajánlatot vagy eseményt is közzétehetsz. Heti egy rövid poszt (új termék, akció, egy elkészült munka) frissen tartja a profilt.

## 6. Legyen mögötte jó weboldal

A Google a weboldaladat is nézi: miről szól, mennyire gyors, és mennyire megbízható. Ha az oldalon szerepel, milyen településeken dolgozol, mit kínálsz, és ugyanaz a cím meg a telefonszám, mint a Cégprofilban, az együtt erősíti a helyezésedet. Ha szeretnéd tudni, hogyan áll most a weboldalad, [nézd meg ingyen a kezdőlapon](page:home).

## Mennyi idő, mire hat?

A beállítás egy délután, az eredmény általában néhány hét alatt kezd látszani, és a rendszeres értékelésekkel, képekkel hónapról hónapra javul. Ha nincs időd ezzel foglalkozni, [szívesen beállítjuk és kezeljük helyetted](page:services).`,
    },
    en: {
      slug: "rank-on-google-maps",
      title: "How to get to the top of Google Maps",
      desc: "Step by step: how to set up your Google Business Profile so local searchers find you first.",
      cat: "Google",
      body: `When someone searches for “florist near me” or “car repair in my town”, Google shows a map with three businesses at the top. That group of three is the most valuable spot online for a local business: it gets most of the clicks and most of the calls. The good news is that you get there not with ads, but with a complete, free Google Business Profile.

## 1. Create or claim your profile

Go to google.com/business and search for your company. A profile may already exist, created by someone else or by Google itself. In that case, request ownership. Google will verify that the business is really yours, usually with a short video or a postcard code.

## 2. Fill it in completely and accurately

Google ranks the businesses it knows the most about, with confidence. So fill in every field:

- **Category:** pick the most specific one (for example “Florist”, not just “Store”), and add secondary categories if they fit.
- **Name:** your real business name, without keywords. Adding “best pizza” to your name can get you penalised.
- **Address or service area:** if customers come to you, add your address; if you go to them, list the towns you serve.
- **Opening hours:** keep holidays up to date too.
- **Phone and website:** the website should be fast and work well on phones.

> Important: your name, address and phone number should be written exactly the same everywhere: on your profile, your website, Facebook and business directories. Differences confuse Google.

## 3. Photos, lots of photos

Upload real photos of your shop inside and out, your products, your team and your work. Plenty of fresh photos tell both Google and customers that the business is alive. A few new photos each month already make a difference.

## 4. Collect reviews and reply to them

The number and quality of reviews is one of the strongest factors. Ask happy customers to write a few lines: send them a short link by text or email right after the sale. Reply to every review, including the negative ones, politely and with a solution. Paying or offering discounts for reviews is not allowed and Google penalises it.

## 5. Post regularly

You can publish news, offers or events on your profile. One short post a week (a new product, a sale, a finished job) keeps it fresh.

## 6. Back it up with a good website

Google also looks at your website: what it is about, how fast it is and how trustworthy it looks. If your site lists the towns you serve, what you offer, and the same address and phone number as your profile, they strengthen each other. Curious how your site is doing now? [Check it for free on our home page](page:home).

## How long does it take?

Setting it up takes an afternoon. Results usually start to show within a few weeks and keep improving with regular reviews and photos. If you don't have time for it, [we are happy to set it up and manage it for you](page:services).`,
    },
  },
  {
    key: "cost",
    date: "2026-11-13",
    minutes: 5,
    icon: "i-shop",
    cover: "linear-gradient(140deg,#c2456b,#4a1426)",
    hu: {
      slug: "mennyibe-kerul-egy-weboldal",
      title: "Mennyibe kerül egy weboldal 2026-ban?",
      desc: "Mitől függ egy weboldal ára, mi a különbség a 100 ezres és az 1 milliós ajánlat között, és mire figyelj, mielőtt aláírsz.",
      cat: "Web",
      body: `„Mennyibe kerül egy weboldal?” Erre a kérdésre őszintén csak azt lehet mondani: attól függ. De hogy mitől, azt pontosan el lehet magyarázni, és ha ezt tudod, sokkal könnyebb összehasonlítani az ajánlatokat.

## Mitől függ az ár?

- **Az oldalak száma.** Egy 5 oldalas bemutatkozó oldal (főoldal, szolgáltatások, rólunk, referenciák, kapcsolat) jóval kevesebb munka, mint egy 30 oldalas céges oldal.
- **Egyedi tervezés vagy sablon.** A sablonos oldal olcsóbb, de úgy néz ki, mint ezer másik. Az egyedi terv a te vevőidre és a te márkádra készül.
- **Szövegek és képek.** Ha neked kell megírnod mindent, az időt vesz el tőled. Ha a szövegírás és a fotók is benne vannak, az ár magasabb, de az eredmény is jobb.
- **Funkciók.** Webshop, foglalási rendszer, többnyelvűség, blog: mind külön munka.
- **Keresőoptimalizálás.** Egy oldal attól még nem hoz vevőt, hogy létezik. A Google-barát felépítés, a gyorsaság és a jó szövegek külön szakértelmet igényelnek.

## Tájékoztató árak Magyarországon

A piacon nagyon széles a skála. Nagyjából így néz ki:

- **Ingyenes oldalépítők, saját kezűleg:** havi díj, de a te idődbe kerül, és ritkán hoznak vevőt.
- **100–200 ezer Ft:** általában sablon, kevés oldal, keresőoptimalizálás nélkül.
- **300–600 ezer Ft:** egyedi tervezés, szövegek, alap SEO, mobilra optimalizálva. A legtöbb kisvállalkozásnak ez a jó választás.
- **600 ezer Ft felett:** webshopok, egyedi funkciók, nagyobb céges oldalak.

Nálunk egy bemutatkozó oldal 290 000 Ft-tól, egy céges oldal 490 000 Ft-tól, egy webshop 590 000 Ft-tól indul, áfa nélkül, mert alanyi adómentesek vagyunk. A pontos összeget [az árkalkulátorral pár kattintással kiszámolhatod](page:pricing).

## A rejtett költségek

Az ajánlatban szereplő ár ritkán a teljes kép. Kérdezz rá ezekre:

- **Domain és tárhely:** évente fizetendő, kérdezd meg, benne van-e.
- **Karbantartás:** frissítések, biztonsági mentés, apró módosítások. Ha nincs ilyen, az oldal pár év alatt elavul vagy feltörik.
- **Módosítások:** mennyi javítási kör fér bele az árba?
- **Tulajdonjog:** a tiéd lesz az oldal és a domain? Ha egyszer váltani akarsz, el tudod vinni?

> Tipp: kérj fix árat és fix határidőt írásban. Ha valaki csak óradíjat mond, a végösszeg kiszámíthatatlan.

## Olcsó vagy drága?

Egy weboldal nem költség, hanem befektetés. Az a kérdés, hány új vevőt hoz. Egy 150 ezres oldal, ami senkit nem hoz, drágább, mint egy 450 ezres, ami havonta két új megrendelést. Ha bizonytalan vagy, [kérj ingyenes, kötelezettség nélküli ajánlatot](page:contact), és elmondjuk, mi az, amire tényleg szükséged van.`,
    },
    en: {
      slug: "website-cost-2026",
      title: "What does a website cost in 2026?",
      desc: "What drives the price of a website, the difference between a cheap and an expensive quote, and what to check before you sign.",
      cat: "Web",
      body: `“How much does a website cost?” The honest answer is: it depends. But what it depends on can be explained clearly, and once you know that, comparing quotes becomes much easier.

## What drives the price?

- **Number of pages.** A 5-page starter site (home, services, about, projects, contact) is far less work than a 30-page business site.
- **Custom design or template.** A template is cheaper but looks like a thousand others. A custom design is made for your customers and your brand.
- **Text and images.** If you have to write everything yourself, it costs you time. If copywriting and photos are included, the price is higher but so is the result.
- **Features.** An online store, booking system, multiple languages or a blog are each extra work.
- **Search optimisation.** A site doesn't bring customers just by existing. A Google-friendly structure, speed and good copy need real expertise.

## Typical prices in Hungary

The range is wide. Roughly:

- **Free site builders, do it yourself:** a monthly fee, but it costs your time and rarely brings customers.
- **100–200k HUF:** usually a template, few pages, no SEO.
- **300–600k HUF:** custom design, copywriting, basic SEO, mobile-optimised. The right choice for most small businesses.
- **Over 600k HUF:** online stores, custom features, larger business sites.

With us, a starter site begins at 290,000 HUF, a business site at 490,000 HUF and an online store at 590,000 HUF, with no VAT added. You can [work out the exact price in a few clicks with our calculator](page:pricing).

## The hidden costs

The quoted price is rarely the whole picture. Ask about:

- **Domain and hosting:** paid yearly; check whether they are included.
- **Maintenance:** updates, backups, small changes. Without it, a site becomes outdated or gets hacked within a few years.
- **Revisions:** how many rounds of changes are included?
- **Ownership:** will the site and domain be yours? Can you take them with you if you switch?

> Tip: ask for a fixed price and a fixed deadline in writing. If someone only quotes an hourly rate, the final bill is unpredictable.

## Cheap or expensive?

A website isn't a cost, it's an investment. The real question is how many new customers it brings. A 150k site that brings nobody costs more than a 450k site that brings two new orders a month. Not sure what you need? [Ask for a free, no-obligation quote](page:contact) and we'll tell you what you actually need.`,
    },
  },
  {
    key: "factory",
    date: "2026-11-13",
    minutes: 5,
    icon: "i-factory",
    cover: "linear-gradient(140deg,#e2571e,#4a1a06)",
    hu: {
      slug: "weboldal-gyarto-cegeknek",
      title: "Weboldal gyártó cégeknek: mi kell rá?",
      desc: "Ajánlatkérés, referenciák, géppark: ezek a részek döntik el, hogy egy gyártó cég weboldala hoz-e megrendelést.",
      cat: "Web",
      body: `Egy gyártó vagy ipari cég weboldalát nem a hangulat miatt nézik meg. A látogató általában egy beszerző, mérnök vagy cégvezető, akinek egy konkrét kérdésre kell választ kapnia: meg tudjátok csinálni, milyen minőségben, mennyi idő alatt, és hogyan kérhetek ajánlatot? Ha ezekre az oldal gyorsan válaszol, megrendelés lesz belőle.

## 1. Mit gyártotok, egy mondatban

A főoldal tetején egyértelműen álljon, mivel foglalkozol: „CNC megmunkálás és lemezalkatrész-gyártás egyedi és sorozatgyártásban”. Ne „innovatív megoldások partnereinknek”, mert abból senki nem tudja meg, jó helyen jár-e.

## 2. Képességek és géppark

A beszerzők a konkrétumokat keresik. Érdemes felsorolni:

- a fő technológiákat (például hegesztés, lézervágás, porfestés),
- a gépparkot, a legfontosabb méretekkel és tűrésekkel,
- a feldolgozott anyagokat,
- a vállalható mennyiségeket (egyedi darab, kis és nagy sorozat),
- a minőségbiztosítást és a tanúsítványokat, ha vannak.

## 3. Referenciák képekkel

Egy kép egy elkészült alkatrészről vagy szerkezetről többet mond minden leírásnál. Ha a megrendelő neve nem nyilvános, elég az iparág és a feladat: „acélszerkezet egy mezőgazdasági üzem számára, 12 tonna, 3 hét alatt”. A [mi referenciáinkat is így mutatjuk be](page:work).

## 4. Egyszerű ajánlatkérés, fájlfeltöltéssel

Ez a legfontosabb rész. Az ajánlatkérő űrlap legyen rövid, és lehessen hozzá rajzot vagy fájlt csatolni. Minden extra mező csökkenti a beküldések számát. Írd oda, mennyi időn belül válaszolsz, és tartsd is be.

> Tipp: a telefonszám és az e-mail cím minden oldalon legyen látható, mobilon pedig egy érintéssel hívható.

## 5. Legyen megtalálható

A gyártó cégek ritkán gondolnak a Google-re, pedig a beszerzők is ott kezdenek: „lézervágás Szabolcs megye”, „acélszerkezet gyártás”. Ha minden fő szolgáltatásodnak saját oldala van, jó szöveggel, sokkal több ilyen keresésre jelenhetsz meg. Erről bővebben a [Google Térképről szóló cikkünkben](post:maps) írunk.

## 6. Kétnyelvűség, ha exportálsz

Ha külföldi megrendelőkkel is dolgozol, egy angol (vagy német) változat nagyon megéri. Fontos, hogy ne gépi fordítás legyen: a műszaki szövegben a pontatlanság bizalomvesztést okoz.

Ha gyártó cégként új weboldalon gondolkodsz, [beszéljünk 20 percet ingyen](page:contact), és megmutatjuk, mi hozna nálad a legtöbb ajánlatkérést.`,
    },
    en: {
      slug: "websites-for-manufacturers",
      title: "Websites for manufacturers: what to include",
      desc: "Quote forms, projects, equipment: the parts that decide whether a manufacturer's website brings orders.",
      cat: "Web",
      body: `Nobody visits a manufacturer's website for the mood. The visitor is usually a buyer, engineer or manager who needs an answer to a specific question: can you make it, at what quality, how fast, and how do I ask for a quote? If the site answers that quickly, it turns into an order.

## 1. What you make, in one sentence

The top of the home page should say clearly what you do: “CNC machining and sheet metal parts, one-off and in series”. Not “innovative solutions for our partners”, which tells nobody whether they're in the right place.

## 2. Capabilities and equipment

Buyers look for specifics. It's worth listing:

- your main technologies (for example welding, laser cutting, powder coating),
- your machines, with key sizes and tolerances,
- the materials you work with,
- the quantities you take on (single parts, small and large series),
- quality assurance and certificates, if you have them.

## 3. Projects with photos

A photo of a finished part or structure says more than any description. If the client's name is confidential, the industry and task are enough: “steel structure for an agricultural plant, 12 tonnes, in 3 weeks”. That's [how we present our own projects too](page:work).

## 4. A simple quote form with file upload

This is the most important part. Keep the quote form short and let people attach a drawing or file. Every extra field lowers the number of submissions. Say how quickly you reply, and stick to it.

> Tip: your phone number and email should be visible on every page, and on phones one tap should start a call.

## 5. Be findable

Manufacturers rarely think about Google, yet buyers start there too: “laser cutting near me”, “steel fabrication”. If each main service has its own page with good copy, you can show up for many more of these searches. We cover this in more detail in our [article on Google Maps](post:maps).

## 6. A second language if you export

If you work with foreign clients, an English (or German) version is well worth it. Make sure it isn't machine-translated: inaccuracy in technical text costs trust.

If you're a manufacturer thinking about a new website, [let's talk for 20 minutes, free](page:contact), and we'll show you what would bring you the most enquiries.`,
    },
  },
  {
    key: "shop",
    date: "2026-11-13",
    minutes: 6,
    icon: "i-chili",
    cover: "linear-gradient(140deg,#7a3cc2,#24103d)",
    hu: {
      slug: "webshop-inditasa",
      title: "Webshop indítása: 7 dolog, amit előre tudj",
      desc: "Fizetés, szállítás, jogi szövegek, termékfotók: amit érdemes végiggondolni, mielőtt elindítod a webshopodat.",
      cat: "Webshop",
      body: `Egy webshop éjjel-nappal árul helyetted, de csak akkor, ha jól van felépítve. Az alábbi hét dolgot érdemes még az indulás előtt végiggondolni. Ezekkel rengeteg időt és bosszúságot spórolhatsz meg.

## 1. Kezdd kevesebb termékkel

Nem kell az első napon a teljes kínálatnak fent lennie. Indulj a 10–30 legkelendőbb termékkel, jó fotókkal és jó leírással, és bővíts folyamatosan. Egy kisebb, de igényes webshop jobban elad, mint egy nagy, de félkész.

## 2. A termékfotó a kirakatod

Online a vevő nem tudja kézbe venni a terméket, ezért a fotó dönt. Világos, egyszínű háttér, több szög, és legalább egy kép, ami használat közben mutatja a terméket. Telefonnal is lehet jó képet készíteni, ha van elég fény.

## 3. Fizetési módok

A magyar vásárlók többsége bankkártyával fizet, de sokan ragaszkodnak az utánvéthez is. Érdemes mindkettőt felkínálni. A kártyás fizetéshez szerződés kell egy fizetési szolgáltatóval (például Barion, SimplePay vagy Stripe). Ezt az indulás előtt pár héttel intézd el, mert az ellenőrzés időbe telhet.

## 4. Szállítás és csomagautomaták

A csomagautomaták és átvételi pontok nagyon népszerűek, és olcsóbbak a házhoz szállításnál. Döntsd el előre, melyik futárszolgálattal dolgozol, és mennyi lesz a szállítási díj. Az ingyenes szállítás egy bizonyos összeg felett jó ösztönző a nagyobb kosárértékre.

> Tipp: a szállítási díjat már a termékoldalon írd ki. A váratlan költség a kosárban a vásárlás megszakításának egyik leggyakoribb oka.

## 5. Kötelező jogi szövegek

Webshopnál kötelező az általános szerződési feltételek (ÁSZF), az adatkezelési tájékoztató, az impresszum és az elállási jogról szóló tájékoztatás. Ezeket ne másold egy másik webshopból: a te vállalkozásodra kell szabni őket, érdemes szakemberrel vagy jogi sablonszolgáltatóval elkészíttetni.

## 6. Számlázás és készlet

Kapcsold össze a webshopot egy online számlázóval, hogy minden rendelésnél automatikusan elkészüljön a számla. Ha boltban is árulsz, gondold végig, hogyan követed a készletet, hogy ne adj el olyat, ami már elfogyott.

## 7. Hogyan találnak meg?

Egy új webshopot senki nem talál meg magától. Kell egy induló terv: Google Shopping hirdetések, Facebook és Instagram, és jó termékleírások, amelyek a Google-ben is megtalálhatók. A hirdetéseket érdemes kis költségkerettel, egy próbahónappal kezdeni, és a számok alapján bővíteni.

Ha webshopot indítanál, nézd meg, hogyan készült az [Oz’s Chili webshopja](case:oz), vagy [számold ki az árkalkulátorral](page:pricing), mennyibe kerülne a tiéd.`,
    },
    en: {
      slug: "starting-an-online-store",
      title: "Starting an online store: 7 things to know first",
      desc: "Payments, shipping, legal pages, product photos: what to think through before you launch your online store.",
      cat: "Online store",
      body: `An online store sells for you day and night, but only if it's built well. These seven things are worth thinking through before launch. They save a lot of time and frustration.

## 1. Start with fewer products

Your full range doesn't need to be online on day one. Start with your 10–30 best sellers, with good photos and good descriptions, and add more over time. A smaller but polished store sells better than a large, half-finished one.

## 2. Product photos are your shop window

Online, customers can't hold the product, so the photo decides. A bright, plain background, several angles, and at least one photo of the product in use. A phone can take great photos with enough light.

## 3. Payment methods

Most Hungarian shoppers pay by card, but many still want cash on delivery. Offering both is worth it. Card payments need a contract with a payment provider (for example Barion, SimplePay or Stripe). Sort this out a few weeks before launch, as verification can take time.

## 4. Shipping and parcel lockers

Parcel lockers and pickup points are very popular and cheaper than home delivery. Decide in advance which courier you'll use and what shipping will cost. Free shipping above a certain amount is a good nudge towards bigger orders.

> Tip: show the shipping cost on the product page already. Unexpected costs in the cart are one of the most common reasons people abandon a purchase.

## 5. Required legal pages

An online store must have terms and conditions, a privacy policy, an imprint and information about the right of withdrawal. Don't copy them from another store: they need to fit your business, so have them prepared by a professional or a legal template service.

## 6. Invoicing and stock

Connect your store to an online invoicing service so every order gets an invoice automatically. If you also sell in a physical shop, plan how you'll track stock so you don't sell what's already gone.

## 7. How will people find you?

Nobody finds a new store on their own. You need a launch plan: Google Shopping ads, Facebook and Instagram, and product descriptions that can be found on Google. Start ads with a small budget and a trial month, then scale up based on the numbers.

Planning an online store? See how we built the [Oz’s Chili store](case:oz), or [use the calculator](page:pricing) to see what yours would cost.`,
    },
  },
];

export function postBySlug(lang: Lang, slug: string): Post | undefined {
  return POSTS.find((p) => p[lang].slug === slug);
}

export function postHref(lang: Lang, p: Post): string {
  return `${lang === "hu" ? "/blog" : "/en/blog"}/${p[lang].slug}`;
}
