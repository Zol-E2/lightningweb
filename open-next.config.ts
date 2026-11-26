import { defineCloudflareConfig } from "@opennextjs/cloudflare";
import staticAssetsIncrementalCache from "@opennextjs/cloudflare/overrides/incremental-cache/static-assets-incremental-cache";

// All pages are prerendered at build time. Serve them straight from the
// prerendered files (Workers static assets) instead of rendering every
// request again: much less CPU per request and no random 500 errors.
// enableCacheInterception answers cached pages before the Next.js server
// even loads.
export default defineCloudflareConfig({
  incrementalCache: staticAssetsIncrementalCache,
  enableCacheInterception: true,
});
