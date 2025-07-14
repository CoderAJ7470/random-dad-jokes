import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vite.dev/config/
export default defineConfig({
  base: '/random-dad-jokes',
  plugins: [react()],
  server: {
    port: 3000,
    open: '/',
  },
});

