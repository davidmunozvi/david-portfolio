import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
const path = require('path')

export default defineConfig({
  base: '/DavidMunozvi.github.io/',
  resolve:{
    alias:{
      '@' : path.resolve(__dirname, './src'),
    },
  },
  plugins: [react()]
})
