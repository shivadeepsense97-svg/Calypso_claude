import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  // Relative asset paths so the build runs from any folder, host, or file://
  base: './',
  plugins: [react(), tailwindcss()],
});
