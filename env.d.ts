/// <reference types="vite/client" />
/// <reference types="element-plus/global" />
/// <reference types="unplugin-vue-router/client" />
/// <reference types="vite-plugin-vue-layouts/client" />

declare module '*.vue' {
  import type { ComponentOptions } from 'vue'
  const componentOptions: ComponentOptions
  export default componentOptions
}
