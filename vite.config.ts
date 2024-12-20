import { fileURLToPath, URL } from 'node:url'
import fs from 'node:fs'

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
import VueMacros from 'unplugin-vue-macros/vite'
import DefineOptions from 'unplugin-vue-define-options/vite'
import Icons from 'unplugin-icons/vite'
import IconsResolver from 'unplugin-icons/resolver'
import { NodePackageImporter } from 'sass-embedded'

// https://vitejs.dev/config/
// { mode: 'dev', command: 'serve', isSsrBuild: false, isPreview: false }
export default defineConfig(({ command, mode, isSsrBuild, isPreview }) => {
  return {
    plugins: [
      // https://uvr.esm.is/
      VueRouter({
        routeBlockLang: 'json5',
        routesFolder: [
          // 实际业务路由
          {
            src: './src/pages',
            path: ''
          },
          // 示例页面相关路由
          {
            src: './src/examples',
            path: 'examples/'
          }
        ],
        // 扫描的拓展名支持 SFC 和 TSX
        extensions: ['.vue', '.tsx'],
        // 不需要被扫描的页面(放页面级组件)
        exclude: ['**/components/**/*'],
        extendRoute(route: any) {}
      }),
      // https://github.com/JohnCampionJr/vite-plugin-vue-layouts
      Layouts({
        layoutsDirs: './src/layouts', // 默认值 src/layouts
        pagesDirs: './src/pages', // 默认值 src/pages
        defaultLayout: 'default', // 默认 undefined
        // 需要排除的页面
        exclude: []
      }),
      // 自动导入配置
      AutoImport({
        dts: './auto-imports.d.ts',
        include: [
          /\.[tj]sx?$/, // .ts, .tsx, .js, .jsx
          /\.vue$/,
          /\.vue\?vue/, // .vue
          /\.md$/ // .md
        ],
        imports: [
          VueRouterAutoImports,
          'vue', // Vue常用的组合式API
          'pinia', // Pinia相关API
          '@vueuse/core' // VueUse核心API
        ],
        resolvers: [
          // 自动导入 Element Plus 组件
          ElementPlusResolver({ importStyle: 'sass' }),
          // 自动导入图标组件
          IconsResolver({ prefix: 'Icon' })
        ]
      }),
      // 组件自动注册配置
      Components({
        dts: './components.d.ts',
        dirs: ['src/components'],
        exclude: [],
        excludeNames: [],
        resolvers: [
          // 自动注册图标组件
          IconsResolver({
            enabledCollections: ['ep']
          }),
          // 自动注册 Element Plus 组件
          ElementPlusResolver({ importStyle: 'sass' })
        ]
      }),
      Icons({
        autoInstall: true,
        defaultClass: 'by-icon'
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
            include: [/\.vue$/, /\.setup\.[cm]?[jt]sx?$/],
            exclude: [],
            isProduction: mode === 'production',
            script: {},
            features: {
              customElement: /.ce.vue$/
            },
            template: {
              compilerOptions: {
                isCustomElement: (tag) => {
                  return tag.startsWith('w-')
                }
              }
            }
          }),
          vueJsx: vueJsx({})
        }
      }),
      DefineOptions(),
      vueDevTools()
    ],
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url))
      }
    },
    css: {
      preprocessorOptions: {
        scss: {
          api: 'legacy',
          importers: [new NodePackageImporter()],
          silenceDeprecations: ['legacy-js-api'],
          // 处理scss语法时, 每个文件额外添加的内容
          additionalData: `
            @use "src/styles/element-plus/name.scss" as *;
          `
        }
      }
    }
  }
})
