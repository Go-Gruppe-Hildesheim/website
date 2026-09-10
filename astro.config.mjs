import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// Tailwind wird seit Tailwind 4 nicht mehr ueber die Astro-Integration
// `@astrojs/tailwind` eingebunden (die ist deprecated und haengt als Peer an
// astro <= 5), sondern direkt als Vite-Plugin. Die Konfiguration selbst steht
// CSS-seitig in `src/styles/global.css`.
export default defineConfig({
  vite: {
    plugins: [tailwindcss()]
  }
});
