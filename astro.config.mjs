import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

const isGhPages = process.env.DEPLOY_TARGET === 'gh-pages';

export default defineConfig({
  site: isGhPages ? 'https://homeart-pro.github.io' : 'https://molteni-kitchen.ru',
  base: isGhPages ? '/molteni-kitchen' : '/',
  compressHTML: true,
  build: { assets: 'assets' },
  integrations: [
    sitemap({
      filter: (page) =>
        !/\/(privacy|cookies|user-agreement|personal-data-consent|marketing-consent)\/?$/.test(page),
      serialize(item) {
        const path = new URL(item.url).pathname;
        if (path === '/' || path === '/molteni-kitchen/') { item.priority = 1.0; item.changefreq = 'weekly'; }
        else if (/\/collections\/[^/]+\/?$/.test(path)) { item.priority = 0.9; item.changefreq = 'monthly'; }
        else { item.priority = 0.6; item.changefreq = 'monthly'; }
        return item;
      },
    }),
  ],
});
