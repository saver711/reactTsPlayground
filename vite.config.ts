import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  css:{
    modules:{
      // 👁️ i can use camelCase will using classNames
      localsConvention: 'camelCase'
    }
  }
})
