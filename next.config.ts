import type { NextConfig } from "next";

const securityHeaders = [
  {
    key: "Strict-Transport-Security",
    value: "max-age=31536000; includeSubDomains",
  },
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "X-Frame-Options", value: "SAMEORIGIN" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  {
    key: "Permissions-Policy",
    value: "camera=(), microphone=(), geolocation=()",
  },
];

const nextConfig: NextConfig = {
  // Note: `cacheComponents` is left off on purpose. Every page here is static,
  // and with it enabled the Cloudflare (OpenNext) worker hangs on page requests.
  experimental: {
    // one branded 404 for both language layouts
    globalNotFound: true,
  },
  poweredByHeader: false,
  async headers() {
    return [{ source: "/:path*", headers: securityHeaders }];
  },
  async redirects() {
    // www.lightningweb.hu → lightningweb.hu (one address for Google)
    return [
      {
        source: "/:path*",
        has: [{ type: "host", value: "www.lightningweb.hu" }],
        destination: "https://lightningweb.hu/:path*",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
