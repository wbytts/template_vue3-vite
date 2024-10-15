import VueMacros from 'unplugin-vue-macros/vite'
import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import vueDevTools from 'vite-plugin-vue-devtools'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
import UnoCSS from 'unocss/vite'
import VueRouter from 'unplugin-vue-router/vite'
import { VueRouterAutoImports } from 'unplugin-vue-router'
import Layouts from 'vite-plugin-vue-layouts'
import DefineOptions from 'unplugin-vue-define-options/vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    // https://uvr.esm.is/
    VueRouter({
      routesFolder: [
        {
          src: './src/pages',
          path: ''
        },
        {
          src: './src/examples',
          path: 'examples/'
        }
      ],
      // 扫描的拓展名支持 SFC 和 TSX
      extensions: ['.vue', '.tsx'],
      // 不需要被扫描的页面(放页面级组件)
      exclude: ['**/components/*'],
      extendRoute(route) {}
    }), // https://github.com/JohnCampionJr/vite-plugin-vue-layouts
    Layouts({
      layoutsDirs: './src/layouts', // 默认值 src/layouts
      pagesDirs: './src/pages', // 默认值 src/pages
      defaultLayout: 'default', // 默认 undefined
      exclude: []
    }),
    AutoImport({
      imports: [VueRouterAutoImports],
      resolvers: [ElementPlusResolver()]
    }),
    Components({
      resolvers: [ElementPlusResolver()]
    }),
    UnoCSS(),
    VueMacros({
      shortEmits: true,
      shortVmodel: { prefix: '$' },
      reactivityTransform: true,
      shortBind: true,
      defineProp: { edition: 'kevinEdition' },
      defineEmit: true,
      setupComponent: true,
      setupSFC: true,
      exportExpose: true,
      exportRender: true,
      chainCall: true,
      jsxDirective: true,
      booleanProp: true,
      plugins: {
        vue: vue({
          include: [/\.vue$/, /\.setup\.[cm]?[jt]sx?$/]
        }),
        vueJsx: vueJsx()
      }
    }),
    DefineOptions(),
    vueDevTools()
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
