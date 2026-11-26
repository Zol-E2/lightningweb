# LightningWeb – weboldal

A lightningweb.hu forráskódja: Next.js 16 (App Router, TypeScript), Cloudflare Workers-en futtatva az OpenNext adapterrel.

## Indítás a saját gépeden

```bash
npm install
npm run dev          # fejlesztői szerver: http://localhost:3000
npm run preview      # Cloudflare-környezetben futtatja a kész buildet (wrangler)
```

A helyi titkos kulcsokat a `.dev.vars` fájlba írd (minta: `.dev.vars.example`). Ez a fájl nem kerül fel a GitHubra.

## Felépítés

| Hol | Mi van ott |
| --- | --- |
| `src/app/(hu)/…` | Magyar oldalak (`/`, `/szolgaltatasok`, `/munkaink`, `/arak`, `/rolunk`, `/blog`, `/kapcsolat`, `/adatkezeles`, `/aszf`, helyi oldalak) |
| `src/app/(en)/en/…` | Angol oldalak (`/en`, `/en/services`, …) |
| `src/app/api/contact` | Az ajánlatkérő űrlap: e-mailt küld a Resenden keresztül |
| `src/app/api/pagespeed` | Az ingyenes oldalellenőrző: a Google PageSpeed mérését futtatja |
| `src/components/pages/` | Az oldalak tartalma. A magyar és az angol szöveg egymás mellett van: `{hu ? "magyar" : "English"}` |
| `src/components/interactive/` | Az interaktív részek (bemutató, kalkulátor, ellenőrző, űrlap, szűrők…) |
| `src/lib/refs.ts` | A referenciák (TaskoGrill, Ruen Farm, Oz’s Chili, eNvolve) adatai és szövegei |
| `src/lib/prices.ts` | A kalkulátor árai |
| `src/lib/i18n.ts` | Az útvonalak mindkét nyelven, és az elérhetőségek (e-mail, telefon, közösségi linkek) |
| `src/lib/seo.ts` | Oldalcímek és leírások a Google-nek |
| `src/app/globals.css` | Az összes stílus |
| `public/img/` | Képernyőképek és a portré |

## Dokumentáció

A teljes átadási dokumentáció (architektúra, szolgáltatások, döntések, nyitott teendők): [docs/HANDOFF.md](docs/HANDOFF.md).

## Élesítés a Cloudflare-en (már be van állítva, újrabeállításhoz)

1. Cloudflare dashboard → **Workers & Pages** → **Create application** → **GitHub** → válaszd ki ezt a repót.
   - Projekt neve: `lightningweb` (egyeznie kell a `wrangler.jsonc` nevével)
   - Build command: `npx opennextjs-cloudflare build`
   - Deploy command: `npx opennextjs-cloudflare deploy`
   - Ezután minden `main` ágra feltöltött módosítás automatikusan élesedik.
2. A Worker **Settings → Variables and Secrets** oldalán add meg titkosként (Secret):
   - `RESEND_API_KEY`: a resend.com fiókból (ezzel küld e-mailt az űrlap)
   - `PAGESPEED_API_KEY`: Google Cloud Console → PageSpeed Insights API kulcs (kulcs nélkül a Google gyakran elutasítja a mérést)
   - A `CONTACT_TO` és `CONTACT_FROM` a `wrangler.jsonc` fájlban van, ott módosítható.
3. Resend: a `lightningweb.hu` domaint igazold a Resendben (DNS-rekordok a Cloudflare DNS-be), hogy az `urlap@lightningweb.hu` címről küldhessen.
4. Domain: a lightningweb.hu névszervereit állítsd át a Cloudflare által megadottakra, majd a Worker **Settings → Domains & Routes** oldalán add hozzá a `lightningweb.hu` és `www.lightningweb.hu` címet.
