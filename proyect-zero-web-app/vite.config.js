import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

import VueI18n from '@intlify/unplugin-vue-i18n/vite'
import { dirname, resolve } from 'node:path'
import { fileURLToPath, URL } from 'node:url'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    VueI18n({
      // Específica donde están los ficheros de Locales, acepta todos los ficheros dentro de la carpeta
      include: resolve(dirname(fileURLToPath(import.meta.url)), './src/locales/**')
    })
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
