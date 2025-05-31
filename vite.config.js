import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [
    react({
      babel: {
        babelrc: true,
      },
    }),
  ],
  assetsInclude: ['**/*.png'],
  base: './',
  optimizeDeps: {
    esbuildOptions: {
      target: 'es2020',
    },
  },
  build: {
    chunkSizeWarningLimit: 1000, // Увеличиваем лимит
    rollupOptions: {
      output: {
        manualChunks: {
          heartbutton: ['src/components/UI/heart/HeartButton.jsx'], // Выносим в отдельный чанк
        },
      },
    },
  },
})
