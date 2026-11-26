<!-- BEGIN:nextjs-agent-rules -->

## This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

# LightningWeb – projektszabályok agenteknek

A teljes átadási dokumentáció: **[docs/HANDOFF.md](docs/HANDOFF.md)**. Munka előtt olvasd el.

Röviden:
- Ez a lightningweb.hu forrása: Next.js 16 (App Router, TS) Cloudflare Workers-en, OpenNext adapterrel. A `main` ágra kerülő commit automatikusan élesedik (Cloudflare Workers Builds).
- A tulajdonos, Zoltán, magyarul ír: neki magyarul, egyszerűen válaszolj.
- A repó **nyilvános**: titok, token, személyes e-mail vagy fiókazonosító soha ne kerüljön bele. Titkok: `RESEND_API_KEY`, `PAGESPEED_API_KEY` (Cloudflare Secret, helyben `.dev.vars` / `.env.local`).
- `cacheComponents` maradjon kikapcsolva (különben az OpenNext worker lefagy).
- A szövegek HU/EN párban vannak a `src/components/pages/*` fájlokban (`{hu ? … : …}`); mindkét nyelvet frissítsd.
- Az árak a `src/lib/prices.ts`-ben **és** a `PricingPage.tsx`-ben is szerepelnek (plusz `local.ts`, GYIK) – együtt módosítsd.
- Kitalált számot, eredményt vagy véleményt ne tegyél az oldalra.
- Vizuális változás után nézd át asztali és mobil (300–390 px) szélességen is; maradjon gyors (WebP képek, kevés animáció).
- Élesítés előtt: `npm run lint`, `npm run build`, ideális esetben `npm run preview` (Workers környezet).
