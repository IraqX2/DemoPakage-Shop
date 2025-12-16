import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Netlify-safe Vite config:
// - No separate `tsc` step needed (Vite handles TS for frontend builds)
// - No Node-only globals like `__dirname`
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
    host: true
  }
});
