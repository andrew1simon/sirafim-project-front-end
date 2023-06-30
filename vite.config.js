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
        globPatterns: ['**/*.{js,css,html,ico,png,svg,json,vue,txt,woff2}'],
        cleanupOutdatedCaches: true
      },
      includeAssets: ['favicon.ico', 'https://unpkg.com/pwacompat' , 'https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css' , 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css'],
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