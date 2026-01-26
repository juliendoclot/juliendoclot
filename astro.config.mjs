// @ts-check

import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import vercel from '@astrojs/vercel';
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import decapCmsOauth from 'astro-decap-cms-oauth';

// https://astro.build/config
export default defineConfig({
  // Replace with your actual domain when deploying
  site: 'https://juliendoclot.vercel.app',

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

  adapter: vercel(),

  build: {
    // Generate assets in the assets folder
    assets: 'assets',
  },
});
