export type RefText = {
  ind: string;
  svc: string;
  plat: string;
  mkt: string;
  tag: string;
  fact: string;
  /** Headline; *text* is rendered in the italic accent font. */
  h1: string;
  lead: string;
  /** Challenge / solution / result: [label, title, body] */
  csr: [string, string, string][];
  feats: [string, string][];
  /** Text for the stylised mock-up when there is no screenshot. */
  m: {
    nav: string[];
    h: string;
    sub: string;
    btn: string;
    cards: string[];
    badge: string;
  };
};

/** A desktop screenshot: base path, size of the 800px version, caption. */
export type Shot = { s: string; w: number; h: number; hu: string; en: string };

const shot = (s: string, h: number, hu: string, en: string): Shot => ({
  s: `/img/${s}`,
  w: 800,
  h,
  hu,
  en,
});

export type Ref = {
  name: string;
  url: string;
  live: string;
  /** Screenshots. d and gal entries are base paths: "<base>-800.webp" and "<base>-1440.webp" exist. */
  shots?: { d: Shot; m?: string; gal: Shot[] };
  /** Filter tag on the work page */
  t: "web" | "shop" | "app";
  /** Brand colours: primary, surface, text */
  p: string;
  s: string;
  tx: string;
  dark: 0 | 1;
  /** Icon id in the SVG sprite */
  ic: string;
  hu: RefText;
  en: RefText;
};

export const REF = {
  tasko: {
    name: "TaskoGrill",
    url: "taskogrill.com",
    shots: {
      d: shot("tasko-home", 430, "Nyitóoldal", "Home page"),
      m: "/img/tasko-m.webp",
      gal: [
        shot(
          "tasko-shop",
          430,
          "Termékek kategóriák szerint",
          "Products by category",
        ),
        shot("tasko-why", 430, "Miért minket válassz?", "Why choose us"),
      ],
    },
    live: "https://www.taskogrill.com",
    t: "shop" as const,
    p: "#f07a26",
    s: "#18130f",
    tx: "#f3ece4",
    dark: 1 as const,
    ic: "i-flame",
    hu: {
      ind: "Fémipar · grillgyártás",
      svc: "Webshop, online fizetés",
      plat: "WordPress · WooCommerce",
      mkt: "Magyarország",
      tag: "Webshop",
      fact: "Lézervágott acélgrillek webshopja, bankkártyás fizetéssel",
      h1: "TaskoGrill: kézműves grillek *online boltja*.",
      lead: "Újfehértói gyártó, amely 3 mm-es acélból készít lézervágott grilleket, smokereket és rakétakályhákat. Olyan webshop kellett, amelyen a minőség első ránézésre átjön, és a vásárlás pár kattintás.",
      csr: [
        [
          "Kihívás",
          "A kézműves minőség megmutatása",
          "Egy fémipari termék értéke a részletekben van: vastag acél, precíz vágás, egyedi minták. Ezt kellett úgy bemutatni, hogy a vásárló online is megbízzon benne, ne csak telefonon.",
        ],
        [
          "Megoldás",
          "Webshop, ami elad és ajánlatot is gyűjt",
          "Termékkategóriák, akciós és felkapott termékek, gyártási videó, az élethosszig tartó garancia kiemelése, és egy „Tervezd meg saját termékedet” rész az egyedi rendelésekhez.",
        ],
        [
          "Eredmény",
          "Értékesítés a nap 24 órájában",
          "A vásárló kiválasztja a terméket és bankkártyával fizet, az egyedi igények pedig közvetlenül ajánlatkérésként érkeznek a gyártóhoz.",
        ],
      ],
      feats: [
        ["Webshop", "Kategóriák, kosár, saját fiók."],
        ["Bankkártyás fizetés", "Barion online fizetéssel."],
        ["Egyedi rendelés", "Saját terv alapján gyártott termékekre."],
        ["Gyártási videó", "Hogy lássák, hogyan készül."],
      ],
      m: {
        nav: ["Termékek", "Egyedi tervezés", "Kapcsolat"],
        h: "Grillezz stílusosan!",
        sub: "Kézműves, egyedi termékek, élethosszig tartó garanciával.",
        btn: "Termékeink",
        cards: ["WITCH-700", "Faszenes grill", "Rakétakályha"],
        badge: "Élethosszig garancia",
      },
    },
    en: {
      ind: "Metalwork · grill maker",
      svc: "Online store, card payments",
      plat: "WordPress · WooCommerce",
      mkt: "Hungary",
      tag: "Online store",
      fact: "Online store for laser-cut steel grills, with card payments",
      h1: "TaskoGrill: handmade grills, *sold online*.",
      lead: "A Hungarian manufacturer of laser-cut grills, smokers and rocket stoves made from 3 mm steel. They needed a store where the quality shows at first glance and buying takes a few clicks.",
      csr: [
        [
          "Challenge",
          "Showing handmade quality",
          "The value of a metal product is in the details: thick steel, precise cuts, custom patterns. Buyers had to trust it online, not only over the phone.",
        ],
        [
          "Solution",
          "A store that sells and collects quotes",
          "Product categories, offers and best-sellers, a production video, the lifetime warranty up front, and a “Design your own” section for custom orders.",
        ],
        [
          "Result",
          "Selling around the clock",
          "Customers pick a product and pay by card, while custom requests arrive straight to the maker as quote requests.",
        ],
      ],
      feats: [
        ["Online store", "Categories, cart, customer accounts."],
        ["Card payments", "Online payments via Barion."],
        ["Custom orders", "Products built to the customer’s design."],
        ["Production video", "Shows how it’s made."],
      ],
      m: {
        nav: ["Products", "Custom design", "Contact"],
        h: "Grill in style!",
        sub: "Handmade, one-of-a-kind products with a lifetime warranty.",
        btn: "Our products",
        cards: ["WITCH-700", "Charcoal grill", "Rocket stove"],
        badge: "Lifetime warranty",
      },
    },
  },
  ruen: {
    name: "Ruen Farm",
    url: "ruenfarm.com",
    shots: {
      d: shot("ruen-home", 430, "Nyitóoldal", "Home page"),
      m: "/img/ruen-m.webp",
      gal: [
        shot("ruen-honey", 430, "Mézeink oldal", "Our Honey page"),
        shot(
          "ruen-indigo",
          370,
          "A ritka gyalogakác-méz kiemelése",
          "The rare False Indigo honey",
        ),
        shot(
          "ruen-crystal",
          430,
          "Miért kristályosodik az igazi méz?",
          "Why real honey crystallises",
        ),
        shot(
          "ruen-label",
          430,
          "Saját márkás (private label) aloldal",
          "Private label page",
        ),
      ],
    },
    live: "https://www.ruenfarm.com",
    t: "web" as const,
    p: "#5fae3e",
    s: "#f8f1e3",
    tx: "#3a2812",
    dark: 0 as const,
    ic: "i-honey",
    hu: {
      ind: "Élelmiszer · méztermelő",
      svc: "Angol márkaoldal, export",
      plat: "WordPress",
      mkt: "Egyesült Királyság",
      tag: "Márkaoldal · export",
      fact: "Szabolcsi méz angol nyelvű oldallal, a brit Amazon vásárlóinak",
      h1: "Ruen Farm: szabolcsi méz *a brit piacon*.",
      lead: "Családi méztermelő, amely nyers, hőkezeletlen mézet árul az Egyesült Királyságban, főként az Amazon UK-n. Angol nyelvű márkaoldalt építettünk, ami elmeséli a történetet, és egyenesen a termékhez vezeti a vásárlót.",
      csr: [
        [
          "Kihívás",
          "Ismeretlen márka, külföldi vevők",
          "Egy brit vásárló nem ismeri a szabolcsi mézet. Bizalmat kellett építeni: honnan jön, miben más, és miért éri meg érte többet fizetni.",
        ],
        [
          "Megoldás",
          "Történet és termékek egy helyen",
          "Négy mézfajta részletes bemutatása, a ritka gyalogakác-méz kiemelése, „az igazi méz kristályosodik” tájékoztató, Amazon-vélemények és egyértelmű vásárlás gombok.",
        ],
        [
          "Eredmény",
          "Egy oldal, két célcsoport",
          "A magánvásárlókat az Amazonra irányítja, a viszonteladóknak pedig külön nagykereskedelmi és saját márkás (private label) aloldalt ad.",
        ],
      ],
      feats: [
        ["Angol nyelvű oldal", "Brit vásárlóknak írt szöveg."],
        ["Termékbemutatók", "Négy mézfajta, mindegyik a saját történetével."],
        ["Amazon-összekötés", "Egy kattintás a vásárlásig."],
        ["B2B aloldalak", "Nagykereskedelem és private label."],
      ],
      m: {
        nav: ["Our Honey", "Our Story", "Wholesale"],
        h: "Hungarian gold from the heart of Szabolcs",
        sub: "Raw, unpasteurised, single-origin honey.",
        btn: "Shop on Amazon",
        cards: ["Acacia", "Wildflower", "Sunflower"],
        badge: "100% Raw",
      },
    },
    en: {
      ind: "Food · honey producer",
      svc: "English brand site, export",
      plat: "WordPress",
      mkt: "United Kingdom",
      tag: "Brand site · export",
      fact: "Hungarian honey with an English site for UK Amazon shoppers",
      h1: "Ruen Farm: Hungarian honey *in the UK*.",
      lead: "A family honey producer selling raw, unpasteurised honey in the United Kingdom, mainly on Amazon UK. We built an English brand site that tells the story and takes shoppers straight to the product.",
      csr: [
        [
          "Challenge",
          "Unknown brand, foreign buyers",
          "A British shopper doesn’t know Szabolcs honey. We had to build trust: where it comes from, what makes it different, and why it’s worth paying more.",
        ],
        [
          "Solution",
          "Story and products in one place",
          "Four honeys presented in detail, the rare False Indigo honey highlighted, a “real honey crystallises” explainer, Amazon reviews and clear shop buttons.",
        ],
        [
          "Result",
          "One site, two audiences",
          "Consumers go straight to Amazon, while resellers get dedicated wholesale and private label pages.",
        ],
      ],
      feats: [
        ["English site", "Copy written for UK shoppers."],
        ["Product stories", "Four honeys, each with its own story."],
        ["Amazon link-up", "One click to buy."],
        ["B2B pages", "Wholesale and private label."],
      ],
      m: {
        nav: ["Our Honey", "Our Story", "Wholesale"],
        h: "Hungarian gold from the heart of Szabolcs",
        sub: "Raw, unpasteurised, single-origin honey.",
        btn: "Shop on Amazon",
        cards: ["Acacia", "Wildflower", "Sunflower"],
        badge: "100% Raw",
      },
    },
  },
  oz: {
    name: "Oz’s Chili",
    url: "ozchili.hu",
    shots: {
      d: shot("oz-home", 430, "Nyitóoldal", "Home page"),
      m: "/img/oz-m.webp",
      gal: [
        shot("oz-shop", 430, "Webshop kategóriákkal", "Shop with categories"),
        shot(
          "oz-chili",
          430,
          "Chilifajták csípősség szerint",
          "Chili varieties by heat",
        ),
      ],
    },
    live: "https://ozchili.hu",
    t: "shop" as const,
    p: "#e0313f",
    s: "#140f10",
    tx: "#f6ebe6",
    dark: 1 as const,
    ic: "i-chili",
    hu: {
      ind: "Élelmiszer · kézműves szószok",
      svc: "Webshop, márkaépítés",
      plat: "WordPress · WooCommerce",
      mkt: "Magyarország",
      tag: "Webshop",
      fact: "Kézműves chiliszószok webshopja, karakteres márkával",
      h1: "Oz’s Chili: a tűz, ami *ízzé válik*.",
      lead: "Kis szériás chili- és BBQ-szósz manufaktúra. Olyan webshopot építettünk, ami ugyanolyan karakteres, mint a termékek: a vásárló csípősség szerint választ, és megismeri, kik és hogyan készítik a szószokat.",
      csr: [
        [
          "Kihívás",
          "Kis márka, nagy konkurencia",
          "A polcokon tucatnyi csípős szósz van. Online a hangulat és a történet tud különbséget tenni, és a vásárlónak gyorsan meg kell találnia a neki való erősséget.",
        ],
        [
          "Megoldás",
          "Karakteres webshop, átlátható kínálat",
          "Kategóriák (chili- és BBQ-szószok, esszenciák), a chilifajták bemutatása a jalapenótól a Carolina Reaperig, „Kik vagyunk mi?” rész, a készítés lépései és a partnerek.",
        ],
        [
          "Eredmény",
          "Vásárlás és márkaépítés egyben",
          "A webshop online fizetéssel árul, közben elmeséli a márka történetét, így a vevő nem csak egy üveg szószt vesz, hanem egy márkát is megismer.",
        ],
      ],
      feats: [
        ["Webshop", "Kategóriák, kosár, készletkezelés."],
        ["Online fizetés", "Barion bankkártyás fizetéssel."],
        ["Alapanyag-bemutató", "Chilifajták csípősség szerint."],
        ["Márkatörténet", "Az alapítók és a készítés lépései."],
      ],
      m: {
        nav: ["Webshop", "Rólunk", "Kapcsolat"],
        h: "A tűz, ami ízzé válik",
        sub: "Minden cseppben szenvedély.",
        btn: "Irány a webshop",
        cards: ["Red Habanero", "Original BBQ", "Carolina Reaper"],
        badge: "Kézműves",
      },
    },
    en: {
      ind: "Food · craft sauces",
      svc: "Online store, branding",
      plat: "WordPress · WooCommerce",
      mkt: "Hungary",
      tag: "Online store",
      fact: "Online store for craft chili sauces with a bold brand",
      h1: "Oz’s Chili: fire that *becomes flavour*.",
      lead: "A small-batch chili and BBQ sauce workshop. We built a store as bold as the products: shoppers choose by heat level and get to know who makes the sauces and how.",
      csr: [
        [
          "Challenge",
          "Small brand, big competition",
          "Shelves are full of hot sauces. Online, mood and story make the difference, and shoppers need to find their heat level fast.",
        ],
        [
          "Solution",
          "A bold store, a clear range",
          "Categories (chili sauces, BBQ sauces, essences), chili varieties from jalapeño to Carolina Reaper, a “Who we are” section, the making-of steps and partners.",
        ],
        [
          "Result",
          "Sales and brand in one",
          "The store sells with online payments while telling the brand’s story, so buyers don’t just buy a bottle, they get to know a brand.",
        ],
      ],
      feats: [
        ["Online store", "Categories, cart, stock control."],
        ["Online payments", "Card payments via Barion."],
        ["Ingredient guide", "Chili varieties by heat."],
        ["Brand story", "The founders and how it’s made."],
      ],
      m: {
        nav: ["Shop", "About", "Contact"],
        h: "Fire that becomes flavour",
        sub: "Passion in every drop.",
        btn: "Visit the shop",
        cards: ["Red Habanero", "Original BBQ", "Carolina Reaper"],
        badge: "Handmade",
      },
    },
  },
  envolve: {
    name: "eNvolve",
    url: "envolve.hu",
    live: "https://envolve.hu",
    shots: {
      d: shot("envolve-home", 506, "Diák kezdőoldal", "Student home"),
      m: "/img/envolve-m.webp",
      gal: [
        shot("envolve-lesson", 411, "Hangalapú AI lecke", "AI voice lesson"),
        shot(
          "envolve-profile",
          411,
          "Profil és kényelmi beállítások",
          "Profile and comfort settings",
        ),
      ],
    },
    t: "app" as const,
    p: "#7b6cf6",
    s: "#f8f3ec",
    tx: "#1f2433",
    dark: 0 as const,
    ic: "i-wave",
    hu: {
      ind: "Oktatás · mesterséges intelligencia",
      svc: "Egyedi webalkalmazás",
      plat: "Next.js",
      mkt: "Magyar és angol",
      tag: "Egyedi fejlesztés · Next.js",
      fact: "Hangalapú AI tanulóalkalmazás tanulási nehézséggel élő gyerekeknek",
      h1: "eNvolve: AI tanulóapp, *Next.js-ben*.",
      lead: "Saját fejlesztésű, hangalapú tanulóalkalmazás autizmussal, ADHD-val vagy diszlexiával élő gyerekeknek. Ugyanazzal a technológiával készült, amivel az egyedi, villámgyors weboldalakat is építjük.",
      csr: [
        [
          "Kihívás",
          "Összetett rendszer, egyszerű használat",
          "Diák, tanár és adminisztrátor nézet, valós idejű hangalapú leckék és két nyelv, úgy, hogy egy gyerek is magabiztosan használja.",
        ],
        [
          "Megoldás",
          "Modern technológia, biztonságos alapok",
          "Next.js alapú felület, védett bejelentkezés és jogosultságkezelés, szigorúan védett adatbázis, AI hangalapú leckék és felolvasott tippek, magyarul és angolul.",
        ],
        [
          "Eredmény",
          "Bizonyíték, mire képes a Next.js",
          "Ha egy ilyen összetett alkalmazás gyorsan és biztonságosan fut, akkor egy céges weboldal vagy webshop is fog. Ezt a tudást visszük bele minden egyedi projektbe.",
        ],
      ],
      feats: [
        ["Hangalapú AI leckék", "Valós idejű beszélgetés a tanulóval."],
        ["Szerepkörök", "Diák, tanár és admin nézet."],
        ["Két nyelv", "Magyar és angol felület."],
        ["Biztonság", "Védett bejelentkezés és adatok."],
      ],
      m: {
        nav: ["Kurzusok", "Új kurzus", "Profil"],
        h: "Valós idejű AI oktatási platform",
        sub: "Hangalapú leckék, a saját tempódban.",
        btn: "Kezdjük",
        cards: ["Hangalapú lecke", "Felolvasott tipp", "Tanári nézet"],
        badge: "AI",
      },
    },
    en: {
      ind: "Education · AI",
      svc: "Custom web app",
      plat: "Next.js",
      mkt: "Hungarian & English",
      tag: "Custom build · Next.js",
      fact: "Voice-first AI learning app for children with learning difficulties",
      h1: "eNvolve: an AI learning app, *built in Next.js*.",
      lead: "Our own voice-first learning app for children with autism, ADHD or dyslexia. It’s built with the same technology we use for custom, lightning-fast websites.",
      csr: [
        [
          "Challenge",
          "A complex system, simple to use",
          "Student, teacher and admin views, real-time voice lessons and two languages, all simple enough for a child to use with confidence.",
        ],
        [
          "Solution",
          "Modern tech, secure foundations",
          "A Next.js interface, protected sign-in and roles, a strictly secured database, AI voice lessons and read-aloud tips, in Hungarian and English.",
        ],
        [
          "Result",
          "Proof of what Next.js can do",
          "If an app this complex runs fast and securely, so will a company website or store. We bring this know-how to every custom project.",
        ],
      ],
      feats: [
        ["AI voice lessons", "Real-time conversation with the learner."],
        ["Roles", "Student, teacher and admin views."],
        ["Two languages", "Hungarian and English."],
        ["Security", "Protected sign-in and data."],
      ],
      m: {
        nav: ["Courses", "New course", "Profile"],
        h: "Real-time AI learning platform",
        sub: "Voice lessons, at your own pace.",
        btn: "Get started",
        cards: ["Voice lesson", "Read-aloud tip", "Teacher view"],
        badge: "AI",
      },
    },
  },
} satisfies Record<string, Ref>;

export type RefKey = keyof typeof REF;
export const REF_KEYS = Object.keys(REF) as RefKey[];
export const isRefKey = (k: string): k is RefKey => k in REF;
