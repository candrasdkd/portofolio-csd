import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { VitePWA } from 'vite-plugin-pwa'
import path from 'path'

const isDev = process.env.NODE_ENV === 'development';

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    VitePWA({
      registerType: 'autoUpdate',
      devOptions: {
        enabled: false // Explicitly disable in dev to prevent HMR interference
      },
      includeAssets: ['favicon.svg', 'assets/profile.png'],
      manifest: {
        name: 'Candra SDKD | Portfolio',
        short_name: 'CSD Portfolio',
        description: 'Frontend & Mobile Developer Portfolio',
        theme_color: '#0f1115',
        background_color: '#0f1115',
        display: 'standalone',
        icons: [
          {
            src: 'favicon.svg',
            sizes: '192x192',
            type: 'image/svg+xml'
          },
          {
            src: 'favicon.svg',
            sizes: '512x512',
            type: 'image/svg+xml'
          }
        ]
      }
    })
  ],
  server: {
    watch: {
      usePolling: true, // Sometimes needed in certain environments for better HMR
    },
    hmr: {
      overlay: true,
    }
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
})
