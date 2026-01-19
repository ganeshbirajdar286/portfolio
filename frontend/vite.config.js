import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [
    react({
      babel: false,      // disable babel — react-compiler does not use it
      reactCompiler: true, // enable react compiler mode
    }),
    tailwindcss(),
  ],
})
