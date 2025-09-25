import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: "/st-johns-COGIC/",  // 👈 must match your GitHub repo name
})
