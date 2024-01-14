import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import { VitePWA } from 'vite-plugin-pwa'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/musicfy/',
  plugins: [
    vue(),
    VitePWA({
      registerType: 'autoUpdate',
      devOptions: {
        enabled: true
      },
      manifest: {
        name: 'Musicfy',
        short_name: 'Musicfy',
        description: 'Listen to your favorite music anywhere',
        theme_color: '#18181b',
        display_override: ['standalone', 'fullscreen', 'minimal-ui', 'browser'],
        icons: [
          {
            src: 'assets/img/pwa-192x192.png',
            sizes: '192x192',
            type: 'image/png'
          },
          {
            src: 'assets/img/pwa-512x512.png',
            sizes: '512x512',
            type: 'image/png'
          }
        ],
        screenshots: [
          {
            src: 'assets/img/screenshot-pc-fullhd.webp',
            sizes: '1920x1080',
            type: 'image/webp',
            form_factor: 'wide'
          },
          {
            src: 'assets/img/screenshot-iphone14promax.webp',
            sizes: '430x932',
            type: 'image/webp'
          }
        ]
      },
      workbox: {
        globPatterns: ['**/*.{js,css,html,png,jpg,}']
      }
    })
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
      '@pub': fileURLToPath(new URL('./public', import.meta.url))
    }
  }
})
