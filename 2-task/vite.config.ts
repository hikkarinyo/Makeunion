import react from '@vitejs/plugin-react'
import { resolve } from 'path'
import { defineConfig } from 'vite'

const buildPath = 'build'

export default defineConfig({
  base: '/',
  plugins: [
    react(),
  ],
  build: {
    target: 'esnext',
    outDir: resolve(__dirname, buildPath),
    assetsDir: 'assets',
    rollupOptions: {
      output: {
        entryFileNames: 'styles/[name].js',
        chunkFileNames: 'styles/[name].js',
        assetFileNames: 'styles/[name].[ext]',
      },
    },
  },
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
      '@components': resolve(__dirname, 'src/components'),
    },
  },
})