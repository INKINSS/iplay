// @ts-check
import { defineConfig } from 'astro/config';
import tailwind from '@tailwindcss/vite';
import react from '@astrojs/react';
import vercel from '@astrojs/vercel/serverless';

// https://astro.build/config
export default defineConfig({
  devToolbar: {
      enabled: false
  },
  output: 'server',
  adapter: vercel({}),
  vite: {
      plugins: [tailwind()],
  },
  integrations: [react()],
});