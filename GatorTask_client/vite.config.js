import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
   // Custom rewrite rule to redirect the root URL to /register
   rewrite: (path) => (path === '/' ? '/register' : path)
})
