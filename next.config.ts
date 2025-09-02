import type { NextConfig } from "next";
const path = require("path");

const nextConfig: NextConfig = {
  /* config options here */
  transpilePackages: ["three"],
  eslint: {
    ignoreDuringBuilds: true,
  },
  // pageExtensions: ["js", "jsx", "md", "mdx", "ts", "tsx"],
};

export default nextConfig;
