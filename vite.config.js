// import legacy from '@vitejs/plugin-legacy';
import ViteRestart from 'vite-plugin-restart';
import vue from '@vitejs/plugin-vue';
import { VitePWA } from 'vite-plugin-pwa';

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
      mode: 'development',
      srcDir: 'src/js',
      filename: 'sw.ts',
      base: '/',
      strategies: 'injectManifest',
      includeAssets: [],
      manifest: {
        name: 'Craft Vite Inject Manifest',
        short_name: 'Craft Vite',
        theme_color: '#ffffff',
      },
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