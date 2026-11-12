import { defineCloudflareConfig } from "@opennextjs/cloudflare";

// All pages are prerendered at build time, so no extra cache storage is needed.
export default defineCloudflareConfig();
