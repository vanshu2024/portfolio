import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'    // only if using React template
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [
    react(),         // remove this line if not using React plugin
    tailwindcss(),
  ],
})