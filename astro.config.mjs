// @ts-check

import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import cloudflare from '@astrojs/cloudflare';
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import decapCmsOauth from 'astro-decap-cms-oauth';

// https://astro.build/config
export default defineConfig({
  // Replace with your actual domain when deploying
  site: 'https://www.juliendoclot.com',

  integrations: [
    mdx(),
    sitemap(),
    decapCmsOauth(),
  ],

  vite: {
    plugins: [tailwindcss()],
  },

  // Server mode avec prerender par défaut pour les pages statiques
  // Les routes OAuth de Decap seront en SSR
  output: 'server',

  adapter: cloudflare(),

  build: {
    // Generate assets in the assets folder
    assets: 'assets',
  },
});
