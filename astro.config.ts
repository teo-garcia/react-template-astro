import react from '@astrojs/react'
import sitemap from '@astrojs/sitemap'
import vercel from '@astrojs/vercel'
import { defineConfig } from 'astro/config'

const isVercel = process.env.VERCEL === '1'

export default defineConfig({
  site: process.env.PUBLIC_SITE_URL ?? 'http://localhost:4321',
  integrations: [react(), sitemap()],
  adapter: isVercel ? vercel() : undefined,
  output: isVercel ? 'server' : 'static',
  server: {
    port: 4321,
  },
  vite: {
    server: {
      watch: {
        usePolling: true,
      },
    },
  },
})
