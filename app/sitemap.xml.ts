import { NextResponse } from 'next/server';

export async function GET() {
  const fields = [
    {
      loc: 'https://nexara.io/', // Absolute url
      lastmod: new Date().toISOString(),
      changefreq: 'daily',
      priority: 0.7,
    },
    {
      loc: 'https://nexara.io/about-us',
      lastmod: new Date().toISOString(),
      changefreq: 'daily',
      priority: 0.7,
    },
    // Add more pages here
  ];

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    ${fields
      .map((field) => {
        return `
      <url>
        <loc>${field.loc}</loc>
        <lastmod>${field.lastmod}</lastmod>
        <changefreq>${field.changefreq}</changefreq>
        <priority>${field.priority}</priority>
      </url>
    `;
      })
      .join('')}
  </urlset>`;

  return new NextResponse(sitemap, {
    headers: {
      'Content-Type': 'application/xml',
    },
  });
}