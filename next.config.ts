import type { NextConfig } from "next";

// Set NEXT_PUBLIC_BASE_PATH=/your-repo-name when deploying to a project page
// (e.g. github.io/your-repo-name). Leave unset for username.github.io repos.
const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

const nextConfig: NextConfig = {
  output: "export",
  ...(basePath ? { basePath, assetPrefix: `${basePath}/` } : {}),
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
};

export default nextConfig;
