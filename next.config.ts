import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // A stray lockfile in the home dir makes Next mis-infer the workspace root.
  // Pin it to this project.
  turbopack: {
    root: import.meta.dirname,
  },
};

export default nextConfig;
