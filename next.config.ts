import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Static export: `npm run build` writes plain HTML/CSS/JS into ./dist, ready to be served by Nginx.
  output: "export",
  distDir: "dist",
  images: { unoptimized: true },
  trailingSlash: true,
};

export default nextConfig;
