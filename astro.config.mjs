// @ts-check

import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  // Replace with your actual domain when deploying
  site: 'https://juliendoclot.koyeb.app',

  integrations: [
    mdx(),
    sitemap(),
  ],

  vite: {
    plugins: [tailwindcss()],
  },

  // Static output for Koyeb deployment
  output: 'static',

  build: {
    // Generate assets in the assets folder
    assets: 'assets',
  },
});
