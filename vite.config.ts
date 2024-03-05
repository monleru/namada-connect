import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'
// // https://vitejs.dev/config/
// export default defineConfig({
//   plugins: [react()],
// })


export default {

  build: {
    lib: {
      entry: resolve(__dirname, 'dist/index.js'),
      name: "namada-connector",
      fileName: 'namada-connector'
    }
  }
}