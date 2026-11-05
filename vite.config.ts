import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// relative base so it works on username.github.io or a project page
export default defineConfig({
  plugins: [react()],
  base: './',
})
