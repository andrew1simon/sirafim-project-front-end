import { fileURLToPath, URL } from 'node:url'
import { VitePWA } from 'vite-plugin-pwa'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue() , 
      VitePWA({
      registerType: 'autoUpdate',
      devOptions: {
        enabled: true
      },
      workbox: {
        runtimeCaching: [
          {
            urlPattern: /^https:\/\/cdnjs\.cloudflare\.com\/ajax\/libs\/font\-awesome\/.*/i,
            handler: 'CacheFirst',
            options: {
              cacheName: 'fontaw-cache',
              expiration: {
                maxEntries: 10,
                maxAgeSeconds: 60 * 60 * 24 * 365 // <== 365 days
              },
              cacheableResponse: {
                statuses: [0, 200]
              }
            }
          }
        ],
        globPatterns: ['**/*.{js,css,html,ico,png,svg,json,vue,txt,woff2}'],
        cleanupOutdatedCaches: true
      },
      includeAssets: ['favicon.ico',],
      manifest: {
        name: 'Srirafim mangment app',
        short_name: 'Srirafim mangment app',
        description: 'My Awesome App description',
        theme_color: '#ffffff',
        icons: [
          {
            src: '/Icons/192x192.png',
            sizes: '192x192',
            type: 'image/png'
          },
          {
            src: '/Icons/512x512.png',
            sizes: '512x512',
            type: 'image/png'
          }
        ]
      }
    })
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})