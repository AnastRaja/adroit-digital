/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async rewrites() {
    return [
      {
        source: "/about-us",
        destination: "/about", // The actual path of the page file
      },
      {
        source: "/seo-service-provider",
        destination: "/SEO", // The actual path of the page file
      },
      {
        source: "/sitemap.xml",
        destination: "/sitemap.xml.ts", // The actual path of the sitemap file
      },
    ];
  },
};

export default nextConfig;
