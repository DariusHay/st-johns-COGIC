import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  // base: "/https://stjohncogiccocoa.org", 
  base: "/",  // 👈 must match your GitHub repo name
  assetsInclude: ["**/*.PNG", "**/*.JPG", "**/*.JPEG", "**/*.SVG"],
  server: {
    proxy: {
      "/contact-api": {
        target: "https://stjohn-contact.dariushay.workers.dev",
        changeOrigin: true,
        secure: true,
        rewrite: (p) => p.replace(/^\/contact-api/, ""),
      },
    },
  },
})
