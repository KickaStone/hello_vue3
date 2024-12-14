import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueSetupExtend from 'vite-plugin-vue-setup-extend' // import plugin

// https://vite.dev/config/
export default defineConfig({
  plugins: [
      vue(),
      vueSetupExtend() // call plugin
  ],
})
