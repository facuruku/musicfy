import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import { VitePWA } from 'vite-plugin-pwa'
import vue from '@vitejs/plugin-vue'
//import { visualizer } from 'rollup-plugin-visualizer'

// https://vitejs.dev/config/
export default defineConfig({
  test: {
    globals: true
  },
  //base: '/musicfy/',
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
        background_color: '#18181b',
        display_override: ['standalone', 'fullscreen', 'minimal-ui', 'browser'],
        start_url: '/musicfy/',
        icons: [
          {
            src: 'assets/img/pwa-192.webp',
            sizes: '192x192',
            type: 'image/webp'
          },
          {
            src: 'assets/img/pwa-512.webp',
            sizes: '512x512',
            type: 'image/webp'
          },
          {
            src: 'assets/img/pwa-512.webp',
            sizes: '512x512',
            type: 'image/webp',
            purpose: 'maskable'
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
        globPatterns: ['**/*.{js,css,html,png,jpg,gif,svg,webp,woff2}'],
        globIgnores: ['**/pwa-192.webp', '**/pwa-512.webp'], // ignore pwa icons precached automatically by vite-plugin-pwa to avoid 'add-to-cache-list-conflicting-entries'
        runtimeCaching: [
          {
            urlPattern: '**/*.mp3',
            handler: 'CacheFirst',
            options: {
              cacheName: 'audio-cache',
              expiration: {
                maxEntries: 50,
                maxAgeSeconds: 30 * 24 * 60 * 60 // 30 Days
              }
            }
          },
          {
            urlPattern: 'https://kit.fontawesome.com/1dba7abd3d.js',
            handler: 'StaleWhileRevalidate',
            options: {
              cacheName: 'font-awesome-cache',
              expiration: {
                maxEntries: 5,
                maxAgeSeconds: 30 * 24 * 60 * 60 // 30 Days
              }
            }
          }
        ]
      }
    })
    //visualizer({ open: true })
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
      '@pub': fileURLToPath(new URL('./public', import.meta.url))
    }
  }
})
