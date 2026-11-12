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

  const api = new URL(
    "https://www.googleapis.com/pagespeedonline/v5/runPagespeed",
  );
  api.searchParams.set("url", `https://${domain}`);
  api.searchParams.set("strategy", "mobile");
  for (const c of ["performance", "accessibility", "seo", "best-practices"])
    api.searchParams.append("category", c);
  if (process.env.PAGESPEED_API_KEY)
    api.searchParams.set("key", process.env.PAGESPEED_API_KEY);

  try {
    const res = await fetch(api, { signal: AbortSignal.timeout(55_000) });
    if (!res.ok)
      return NextResponse.json({ error: "measure_failed" }, { status: 502 });
    const data = (await res.json()) as Lhr;
    const lr = data.lighthouseResult;
    const cat = lr?.categories ?? {};
    if (!cat.performance)
      return NextResponse.json({ error: "measure_failed" }, { status: 502 });
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
    return NextResponse.json({ error: "measure_failed" }, { status: 504 });
  }
}
