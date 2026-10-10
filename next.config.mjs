/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // Demo images are served from Unsplash. Remove once real campus photos are in /public.
    remotePatterns: [{ protocol: "https", hostname: "images.unsplash.com" }],
  },
};

export default nextConfig;
