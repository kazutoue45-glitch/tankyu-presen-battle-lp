// @ts-check
import { defineConfig } from 'astro/config';

const isVercel = !!process.env.VERCEL;

// https://astro.build/config
export default defineConfig({
  site: isVercel ? undefined : 'https://kazutoue45-glitch.github.io',
  base: isVercel ? '/' : '/tankyu-presen-battle-lp/',
  server: {
    host: true,
  },
  vite: {
    server: {
      allowedHosts: ['.trycloudflare.com'],
    },
  },
});
