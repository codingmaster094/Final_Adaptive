export async function GET() {
  const pages = [
    'https://zmc-management-consulting.vercel.app/',
    'https://zmc-management-consulting.vercel.app/Impressum',
    'https://zmc-management-consulting.vercel.app/Datenschutz',
  ];

  const sitemap = `<?xml version="1.0" encoding="UTF-8" ?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${pages
    .map(
      (url) => `
  <url>
    <loc>${url}</loc>
    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
  </url>`
    )
    .join('')}
</urlset>`;

  return new Response(sitemap, {
    headers: {
      'Content-Type': 'application/xml',
    },
  });
}
