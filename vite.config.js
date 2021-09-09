// import legacy from '@vitejs/plugin-legacy';
import ViteRestart from 'vite-plugin-restart';
import vue from '@vitejs/plugin-vue';
import { VitePWA } from 'vite-plugin-pwa';
import replace from '@rollup/plugin-replace';

// https://vitejs.dev/config/
export default ({ command }) => ({
  base: command === 'serve' ? '' : '/dist/',
  build: {
    manifest: true,
    outDir: './web/dist/',
    rollupOptions: {
      input: {
        app: '/src/js/app.ts',
      },
    },
  },
  plugins: [
    ViteRestart({
      reload: [
        './templates/**/*',
      ],
    }),
    vue(),
    VitePWA({
      registerType: 'autoUpdate',
      mode: 'development',
      base: '/dist/',
      includeAssets: ['favicon.svg'],
      workbox: {
        cleanupOutdatedCaches: false,
        sourcemap: true,
      },
      manifest: {
        name: 'Craft Vite Inject Manifest',
        short_name: 'Craft Vite',
        theme_color: '#ffffff',
        start_url: '/index.php',
        icons: [
          {
            src: '../big-logo-192x192.png',
            sizes: '192x192',
            type: 'image/png',
          },
          {
            src: '../big-logo-512x512.png',
            sizes: '512x512',
            type: 'image/png',
          },
          {
            src: '../big-logo-512x512.png',
            sizes: '512x512',
            type: 'image/png',
            purpose: 'any maskable',
          },
        ],
      },
    }),
    replace({
      __DATE__: new Date().toISOString(),
    }),
  ],
  server: {
    host: '0.0.0.0',
  },
  resolve: {
    alias: {
      '@': '/src'
    }
  }
});