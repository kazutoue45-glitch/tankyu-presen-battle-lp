// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  site: 'https://kazutoue45-glitch.github.io',
  base: '/tankyu-presen-battle-lp',
  server: {
    host: true,
  },
  vite: {
    server: {
      allowedHosts: ['.trycloudflare.com'],
    },
  },
});
