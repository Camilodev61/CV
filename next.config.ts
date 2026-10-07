import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  cacheComponents: true,
  partialPrefetching: true,
  // Spanish is the default language and lives at "/" (served by app/[lang] with lang = "es").
  async rewrites() {
    return [{ source: "/", destination: "/es" }];
  },
  async redirects() {
    return [{ source: "/es", destination: "/", permanent: true }];
  },
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
