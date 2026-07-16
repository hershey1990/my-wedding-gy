import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://g-y.us',
  vite: { plugins: [tailwindcss()] },
});
