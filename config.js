import { defineConfig } from 'vite';

export default defineConfig({
  root: './',
  base: './',
  build: {
    outDir: 'dist',
    emptyOutDir: true,
  },
  server: {
    port: 8080,
    open: true, // Automatically open browser
    host: true, // Listen on all local IPs
  },
  optimizeDeps: {
    include: ['three', 'gsap'] // Pre-bundle these dependencies
  }
});