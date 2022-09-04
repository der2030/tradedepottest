import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vitePluginImport from 'vite-plugin-babel-import';
import path from 'path'

const baseUrl = {
  development: './',
  beta: './',
  release: './'
}

export default ({ mode }) =>  defineConfig({
  plugins: [
    vue(), 
  ],
  base: baseUrl[mode],
  resolve: {
    alias: {
      '~': path.resolve(__dirname, './'),
      '@': path.resolve(__dirname, 'src')
    }
  },
  server: {
    port: 8721,
      host: true,
      open: false,
    proxy: {
      '/api': {
        target: 'https://freight-api.tradedepottest.com',
        changeOrigin: true,
        ws: true, 
        secure: true,
        rewrite: path => path.replace(/^\/api/, '')
      }
    }
  }
})
