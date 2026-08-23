import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // The generated frames are served from Higgsfield's CDN until
    // `npm run fetch:images` localises them into /public/images. Remove this
    // once the manifest points at local paths.
    remotePatterns: [
      { protocol: "https", hostname: "d8j0ntlcm91z4.cloudfront.net" },
    ],
  },
};

export default nextConfig;
