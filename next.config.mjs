/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      "images.unsplash.com",
      "cdn.sanity.io",
      // ...
    ],
  },
};

export default nextConfig;
