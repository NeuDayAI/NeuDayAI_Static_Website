import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://www.neudayai.com',
  integrations: [
    tailwind(),
    react(),
    sitemap()
  ]
});