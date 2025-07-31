import {writeFileSync} from "fs";
import {globby} from "globby";

const siteUrl = "https://adroitsdigital.com";
const generateUrl = (path) => siteUrl + path;
const defaultConfig = {
  changefreq: "weekly",
  priority: "0.7",
  lastmod: new Date().toISOString(),
};

const homeConfig = {
  loc: "/",
  changefreq: "monthly",
  priority: "1.0",
  lastmod: defaultConfig.lastmod,
};

const nextApproach = "app"; // app or pages
const serverPath = `.next/server/${nextApproach}`;

// Map internal paths to public-facing URLs
const rewritesMap = {
  "/about": "/about-us",
  "/SEO": "/seo-service-provider",
  "/WEB3": "/web3-marketing-agency",
  // Add more rewrites as needed
};

async function generateSitemap() {
  // Grab Pages from build
  const buildPages = await globby([
    `${serverPath}/*.html`,
    `${serverPath}/**/*.html`,
    `!${serverPath}/index.html`,
    `!${serverPath}/404.html`,
    `!${serverPath}/_not-found.html`,
    `!${serverPath}/500.html`,
  ]);

  // Manually add blog slugs here
  const manualBlogSlugs = [
    "the-power-of-modern-marketing-strategies-that-drive-results",
    // "how-to-grow-your-business-online",
    // "ai-in-digital-marketing-2025",
    // Add more slugs as needed
  ];

  // Generate blog URLs
  const blogUrls = manualBlogSlugs
    .map((slug) => {
      const loc = generateUrl(`/blogs/${slug}`);
      const lastmod = new Date().toISOString();
      return `<url>
      <loc>${loc}</loc>
      <lastmod>${lastmod}</lastmod>
      <changefreq>weekly</changefreq>
      <priority>0.8</priority>
    </url>`;
    })
    .join("");

  const sitemapStr = `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    <url>
      <loc>${generateUrl(homeConfig.loc)}</loc>
      <lastmod>${homeConfig.lastmod}</lastmod>
      <changefreq>${homeConfig.changefreq}</changefreq>
      <priority>${homeConfig.priority}</priority>
    </url>
    ${buildPages
      .map((page) => {
        const path = page.replace(serverPath, "").replace(".html", "");
        const publicPath = rewritesMap[path] || path;
        const loc = generateUrl(publicPath);
        const lastmod = new Date().toISOString();
        let changefreq = defaultConfig.changefreq;
        let priority = defaultConfig.priority;
        if (publicPath === "/about-us") {
          priority = "0.9";
          changefreq = "daily";
        } else if (publicPath === "/seo-service-provider") {
          priority = "0.9";
          changefreq = "daily";
        } else if (publicPath === "/web3-marketing-agency") {
          priority = "0.9";
          changefreq = "daily";
        } else if (publicPath === "/") {
          priority = "1.0";
          changefreq = "monthly";
        }
        return `<url>
          <loc>${loc}</loc>
          <lastmod>${lastmod}</lastmod>
          <changefreq>${changefreq}</changefreq>
          <priority>${priority}</priority>
        </url>`;
      })
      .join("")}
    ${blogUrls}
  </urlset>
  `;

  writeFileSync(`public/sitemap.xml`, sitemapStr);
}

generateSitemap();
