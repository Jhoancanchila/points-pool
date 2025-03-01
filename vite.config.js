import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import { VitePWA } from 'vite-plugin-pwa'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      includeAssets: ['favicon.svg', 'favicon.ico', 'robots.txt', 'apple-touch-icon.png'],
      manifest: {
        name: 'Points pool',
        short_name: 'Points',
        description: 'Aplicación que permite llevar el control de los puntos de una partida de billar pool',
        theme_color: '#f0e7db',
        background_color:'#319535',
        display:"standalone",
        display_override:['window-controls-overlay'],
        lang:'es',
        scope:'/',
        start_url:"/",
        orientation:'portrait',
        icons:[{
          src: '/android-chrome-192x192.png',
          sizes:'192x192',
          type:'image/png',
          purpose:'favicon'
        },
        {
          src:'/android-chrome-512x512.png',
          sizes:'512x512',
          type:'image/png',
          purpose:'favicon'
        },
        {
          src: '/apple-touch-icon.png',
          sizes:'180x180',
          type:'image/png',
          purpose:'apple touch icon',
        },
        {
          src: '/maskable_icon.png',
          sizes:'512x512',
          type:'image/png',
          purpose:'any maskable',
        }
      ],
      }
    })
  ],
})
