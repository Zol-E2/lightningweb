/**
 * Local landing pages (Hungarian only): one per city where clients search for
 * "weboldal készítés <város>". Each has its own text so they are not duplicates.
 */
export type LocalPage = {
  slug: string;
  city: string;
  /** "Nyíregyházán", "Debrecenben" */
  inCity: string;
  /** "nyíregyházi", "debreceni" */
  adj: string;
  title: string;
  description: string;
  lead: string;
  /** Why a local partner helps here: [title, text] */
  why: [string, string][];
  /** Nearby towns also served */
  near: string[];
  faq: [string, string][];
};

export const LOCAL: LocalPage[] = [
  {
    slug: "weboldal-keszites-nyiregyhaza",
    city: "Nyíregyháza",
    inCity: "Nyíregyházán",
    adj: "nyíregyházi",
    title: "Weboldal és honlap készítés Nyíregyházán – LightningWeb",
    description:
      "Weboldal, honlap és webshop készítés nyíregyházi és szabolcsi vállalkozásoknak. Fix ár 290 000 Ft-tól, fix határidő, Google-optimalizálással. Ingyenes konzultáció.",
    lead: "Szabolcsi vállalkozóként szabolcsi vállalkozásoknak készítünk gyors, modern weboldalt és webshopot, hogy a nyíregyházi és környékbeli vevők téged találjanak meg a Google-ön.",
    why: [
      [
        "Helyben vagyunk",
        "Ibrányból dolgozunk, Nyíregyháza fél óra. Ha szeretnéd, személyesen is leülünk, de minden intézhető telefonon és online is.",
      ],
      [
        "Ismerjük a szabolcsi piacot",
        "Dolgoztunk újfehértói grillgyártónak (TaskoGrill) és szabolcsi méztermelőnek (Ruen Farm). Tudjuk, hogyan keresnek a helyi vevők, és mi győzi meg őket.",
      ],
      [
        "Hogy a térképen is ott legyél",
        "A Google Cégprofilt is beállítjuk, így amikor valaki Nyíregyházán rákeres a szolgáltatásodra, a térképes találatok között is megjelensz.",
      ],
    ],
    near: [
      "Nyíregyháza",
      "Ibrány",
      "Kisvárda",
      "Mátészalka",
      "Tiszavasvári",
      "Újfehértó",
      "Nagykálló",
      "Baktalórántháza",
      "Kemecse",
      "Nyírbátor",
    ],
    faq: [
      [
        "Mennyibe kerül egy weboldal Nyíregyházán?",
        "Egy bemutatkozó weboldal 290 000 Ft-tól, egy céges oldal 490 000 Ft-tól, egy webshop 590 000 Ft-tól indul. Áfát nem számolunk fel, a végleges, fix árat egy ingyenes beszélgetés után mondjuk meg.",
      ],
      [
        "Mennyi idő alatt készül el?",
        "Egy egyszerű weboldal legfeljebb egy hónap alatt elkészül. A pontos határidőt előre rögzítjük.",
      ],
      [
        "Személyesen is tudunk találkozni?",
        "Igen, Nyíregyházán és Szabolcs megyében szívesen elmegyünk hozzád. Ha neked kényelmesebb, telefonon vagy videóhívásban is mindent megbeszélünk.",
      ],
      [
        "A régi honlapomat is fel tudjátok újítani?",
        "Igen. Megnézzük, mi működik a mostani oldaladon, és egy gyorsabb, modernebb oldalt építünk helyette úgy, hogy a Google-helyezésed se vesszen el.",
      ],
    ],
  },
  {
    slug: "weboldal-keszites-debrecen",
    city: "Debrecen",
    inCity: "Debrecenben",
    adj: "debreceni",
    title: "Weboldal és honlap készítés Debrecenben – LightningWeb",
    description:
      "Weboldal, honlap és webshop készítés debreceni és Hajdú-Bihar megyei vállalkozásoknak. Fix ár 290 000 Ft-tól, gyors oldalak, Google-optimalizálás. Ingyenes konzultáció.",
    lead: "Debreceni kis- és középvállalkozásoknak készítünk gyors, modern weboldalt és webshopot, ami érthetően bemutatja, mit kínálsz, és amiből érdeklődő, hívás vagy vásárlás lesz.",
    why: [
      [
        "Debrecenben is ott vagyunk",
        "Az időnk nagy részét Debrecenben töltjük, így személyesen is könnyen találkozunk. Ha neked egyszerűbb, telefonon és online is mindent elintézünk.",
      ],
      [
        "Kitűnni egy nagyvárosban",
        "Debrecenben minden szakmában sok a versenytárs. Egy gyors, jól megírt oldal és a helyi kulcsszavakra optimalizált tartalom segít, hogy a keresőben előrébb kerülj náluk.",
      ],
      [
        "Hogy a térképen is ott legyél",
        "A Google Cégprofilt is beállítjuk, így amikor valaki Debrecenben rákeres a szolgáltatásodra, a térképes találatok között is megjelensz.",
      ],
    ],
    near: [
      "Debrecen",
      "Hajdúböszörmény",
      "Hajdúszoboszló",
      "Hajdúnánás",
      "Balmazújváros",
      "Berettyóújfalu",
      "Hajdúsámson",
      "Létavértes",
    ],
    faq: [
      [
        "Mennyibe kerül egy weboldal Debrecenben?",
        "Egy bemutatkozó weboldal 290 000 Ft-tól, egy céges oldal 490 000 Ft-tól, egy webshop 590 000 Ft-tól indul. Áfát nem számolunk fel, a végleges, fix árat egy ingyenes beszélgetés után mondjuk meg.",
      ],
      [
        "Mennyi idő alatt készül el?",
        "Egy egyszerű weboldal legfeljebb egy hónap alatt elkészül. A pontos határidőt előre rögzítjük.",
      ],
      [
        "Webshopot is készítetek?",
        "Igen, bankkártyás fizetéssel, szállítással és számlázással. Két élő webshopunkat a Munkáink oldalon meg is nézheted.",
      ],
      [
        "Hirdetést és Google-optimalizálást is vállaltok?",
        "Igen. A weboldal mellett Google és Facebook hirdetéseket, keresőoptimalizálást és közösségi média kezelést is vállalunk, így minden egy kézben van.",
      ],
    ],
  },
];

export const localBySlug = (slug: string) => LOCAL.find((l) => l.slug === slug);
