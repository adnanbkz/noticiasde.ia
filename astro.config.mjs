import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// Cambia `site` por tu dominio cuando lo tengas (p. ej. https://noticiasde.ia)
export default defineConfig({
  site: 'https://noticiasdeia.example',
  integrations: [sitemap()],
  build: { format: process.env.PREVIEW ? 'file' : 'directory', assets: 'assets' },
});
