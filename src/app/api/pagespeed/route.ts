import { NextResponse, type NextRequest } from "next/server";

/**
 * Free website check: runs Google PageSpeed Insights (mobile) for a domain and
 * returns four simple scores. Optional env var PAGESPEED_API_KEY raises Google's
 * rate limit (free key from Google Cloud Console > PageSpeed Insights API).
 */
type Lhr = {
  lighthouseResult?: {
    finalDisplayedUrl?: string;
    finalUrl?: string;
    categories?: Record<string, { score: number | null } | undefined>;
    audits?: Record<string, { score: number | null } | undefined>;
  };
};

const pct = (s: number | null | undefined) => Math.round((s ?? 0) * 100);

export async function GET(req: NextRequest) {
  const raw = (req.nextUrl.searchParams.get("url") ?? "").trim().toLowerCase();
  const domain = raw
    .replace(/^https?:\/\//, "")
    .replace(/^www\./, "")
    .split("/")[0];
  if (
    !/^[a-z0-9áéíóöőúüű-]+(\.[a-z0-9áéíóöőúüű-]+)+$/.test(domain) ||
    domain.length > 120
  ) {
    return NextResponse.json({ error: "bad_url" }, { status: 400 });
  }

  const key = process.env.PAGESPEED_API_KEY;
  const run = async (target: string) => {
    const api = new URL(
      "https://www.googleapis.com/pagespeedonline/v5/runPagespeed",
    );
    api.searchParams.set("url", target);
    api.searchParams.set("strategy", "mobile");
    for (const c of ["performance", "accessibility", "seo", "best-practices"])
      api.searchParams.append("category", c);
    if (key) api.searchParams.set("key", key);
    return fetch(api, { signal: AbortSignal.timeout(60_000) });
  };

  try {
    let res = await run(`https://${domain}`);
    if (res.status === 429)
      return NextResponse.json({ error: "busy" }, { status: 503 });
    // Some sites only answer on www (or the bare domain fails DNS): try once more.
    if (!res.ok) res = await run(`https://www.${domain}`);
    if (res.status === 429)
      return NextResponse.json({ error: "busy" }, { status: 503 });
    if (!res.ok)
      return NextResponse.json({ error: "unreachable" }, { status: 502 });
    const data = (await res.json()) as Lhr;
    const lr = data.lighthouseResult;
    const cat = lr?.categories ?? {};
    if (!cat.performance || cat.performance.score == null)
      return NextResponse.json({ error: "unreachable" }, { status: 502 });
    const finalUrl = lr?.finalDisplayedUrl ?? lr?.finalUrl ?? "";
    const httpsAudit = lr?.audits?.["is-on-https"]?.score;
    return NextResponse.json(
      {
        perf: pct(cat.performance?.score),
        // "Mobile" = how usable it is on a phone: accessibility checks (tap targets, font size, contrast…)
        mob: pct(cat.accessibility?.score),
        seo: pct(cat.seo?.score),
        sec: finalUrl.startsWith("https://") && httpsAudit !== 0,
      },
      { headers: { "cache-control": "public, max-age=3600" } },
    );
  } catch {
    return NextResponse.json({ error: "timeout" }, { status: 504 });
  }
}
