import { defineConfig } from 'vite';

export default defineConfig({
  root: './',
  base: './', // Garante caminhos relativos para assets
  server: {
    open: true, // Abre o navegador automaticamente
  },
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
  }
});