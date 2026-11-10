// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  // Custom domain (GitHub Pages + CNAME), so no `base` path is needed.
  site: 'https://mkcna.org',
  trailingSlash: 'ignore',
  vite: {
    plugins: [tailwindcss()],
  },
});
