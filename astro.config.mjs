import { defineConfig } from 'astro/config';

const isGhPages = process.env.DEPLOY_TARGET === 'gh-pages';

export default defineConfig({
  site: isGhPages ? 'https://homeart-pro.github.io' : 'https://molteni-kitchen.ru',
  base: isGhPages ? '/molteni-kitchen' : '/',
  compressHTML: true,
  build: { assets: 'assets' },
});
