import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // A stray lockfile in the home dir makes Next mis-infer the workspace root.
  // Pin it to this project.
  turbopack: {
    root: import.meta.dirname,
  },
  // The provider logos in public/ are unhashed, and Next serves public assets
  // with max-age=0 by default — which would mean 31 revalidation requests per
  // visit for icons that change maybe once a year. A day of caching plus a week
  // of stale-while-revalidate keeps a rebrand landing on its own.
  async headers() {
    return [
      {
        source: "/logos/:file*",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=86400, stale-while-revalidate=604800",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
