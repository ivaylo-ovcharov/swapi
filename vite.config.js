import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: [
      {
        find: /^~.+/,
        replacement: (val) => {
          return val.replace(/^~/, '')
        },
      },
      {
        find: '@',
        replacement: (val) => {
          return path.resolve(__dirname, './src')
        },
      },
      {
        find: 'tailwind.config.js',
        replacement: () => './src/css/tailwind.config.js',
      }
    ],
  },
  optimizeDeps: {
    include: [
      'tailwind.config.js',
    ]
  }
})
