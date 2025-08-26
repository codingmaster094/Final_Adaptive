export async function GET() {
  const body = `User-agent: *
  Disallow: /

Sitemap: https://corporate-seven-wine.vercel.app/sitemap.xml`;

  return new Response(body, {
    headers: {
      'Content-Type': 'text/plain',
    },
  });
}
