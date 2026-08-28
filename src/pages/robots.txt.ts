import type { APIRoute } from 'astro';

export const GET: APIRoute = ({ site }) => {
  const isPreviewHost = site?.hostname?.includes('github.io') ?? false;

  const body = isPreviewHost
    ? 'User-agent: *\nDisallow: /\n'
    : [
        'User-agent: *',
        'Allow: /',
        'Disallow: /privacy',
        'Disallow: /cookies',
        'Disallow: /user-agreement',
        'Disallow: /personal-data-consent',
        'Disallow: /marketing-consent',
        '',
        `Sitemap: ${new URL('sitemap-index.xml', site).toString()}`,
        '',
      ].join('\n');

  return new Response(body, { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
};
