// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://pryz.coderluii.dev',
  output: 'static',
  integrations: [sitemap({ filter: (page) => !page.includes('/thanks') })],
  vite: {
    // @ts-expect-error Astro check resolves a different Vite type tree here.
    plugins: [tailwindcss()]
  }
});
