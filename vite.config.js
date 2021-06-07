import legacy from '@vitejs/plugin-legacy'
import ViteRestart from 'vite-plugin-restart';
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default ({ command }) => ({
  base: command === 'serve' ? '' : '/dist/',
  build: {
    manifest: true,
    outDir: './web/dist/',
    rollupOptions: {
      input: {
        app: '/src/js/app.ts',
      }
    },
  },
  plugins: [
    legacy({
      targets: ['defaults', 'not IE 11']
    }),
    ViteRestart({
      reload: [
        './templates/**/*',
      ],
    }),
    vue(),
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