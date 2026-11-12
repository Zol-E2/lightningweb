import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Note: `cacheComponents` is left off on purpose. Every page here is static,
  // and with it enabled the Cloudflare (OpenNext) worker hangs on page requests.
  experimental: {
    // one branded 404 for both language layouts
    globalNotFound: true,
  },
};

export default nextConfig;
