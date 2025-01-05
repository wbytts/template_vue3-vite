/// <reference types="vite/client" />
/// <reference types="element-plus/global" />
/// <reference types="unplugin-vue-router/client" />
/// <reference types="vite-plugin-vue-layouts/client" />
/// <reference types="unplugin-vue-macros/macros-global" />
/// <reference types="unplugin-vue-define-options/macros-global" />
/// <reference types="@vue-macros/reactivity-transform/macros-global" />

declare module "*.vue" {
  import type { ComponentOptions } from "vue";
  const componentOptions: ComponentOptions;
  export default componentOptions;
}
