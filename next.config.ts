import type { NextConfig } from "next";

// On GitHub Project Pages the site is served under /<repo>, supplied via
// NEXT_PUBLIC_BASE_PATH at build time. Empty locally (served at root).
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

const nextConfig: NextConfig = {
  output: "export", // static HTML export for GitHub Pages
  basePath: basePath || undefined,
  trailingSlash: true, // emit /profile/index.html etc. for Pages routing
  images: { unoptimized: true }, // no image optimizer in a static export
  devIndicators: false,
};

export default nextConfig;
