import { fileURLToPath, URL } from "node:url";
import fs from "node:fs";
import path from "node:path";

import { defineConfig } from "vite";
import pluginVue from "@vitejs/plugin-vue";
import pluginVueJsx from "@vitejs/plugin-vue-jsx";
import vueDevTools from "vite-plugin-vue-devtools";
import AutoImport from "unplugin-auto-import/vite";
import Components from "unplugin-vue-components/vite";
import { ElementPlusResolver } from "unplugin-vue-components/resolvers";
import UnoCSS from "unocss/vite";
import VueRouter from "unplugin-vue-router/vite";
import { VueRouterAutoImports } from "unplugin-vue-router";
import Layouts from "vite-plugin-vue-layouts";
import VueMacros from "unplugin-vue-macros/vite";
import DefineOptions from "unplugin-vue-define-options/vite";
import Icons from "unplugin-icons/vite";
import IconsResolver from "unplugin-icons/resolver";
import { NodePackageImporter } from "sass-embedded";
import viteLegacy from "@vitejs/plugin-legacy";
import { visualizer } from "rollup-plugin-visualizer";
import TurboConsole from "unplugin-turbo-console/vite";
import { viteMockServe } from "vite-plugin-mock";
import StyilsVitePlugin from "@styils/vite-plugin";

import pkg from "./package.json";

// https://vitejs.dev/config/
// { mode: 'dev', command: 'serve', isSsrBuild: false, isPreview: false }
export default defineConfig(({ command, mode, isSsrBuild, isPreview }) => {
  return {
    plugins: [
      // https://uvr.esm.is/
      VueRouter({
        routeBlockLang: "json5",
        routesFolder: [
          { src: "./src/pages", path: "" }, // 实际业务路由
          { src: "./src/examples", path: "examples/" } // 示例页面相关路由
        ],
        // 扫描的拓展名支持 SFC 和 TSX
        extensions: [".vue", ".tsx"],
        // 不需要被扫描的页面(放页面级组件)
        exclude: ["**/components/**/*"],
        extendRoute(route: any) {}
      }),
      // https://github.com/JohnCampionJr/vite-plugin-vue-layouts
      Layouts({
        layoutsDirs: "./src/layouts", // 默认值 src/layouts
        pagesDirs: "./src/pages", // 默认值 src/pages
        defaultLayout: "default", // 默认 undefined
        // 需要排除的页面
        exclude: []
      }),
      // 自动导入配置
      AutoImport({
        dts: "./auto-imports.d.ts",
        include: [
          /\.[tj]sx?$/, // .ts, .tsx, .js, .jsx
          /\.vue$/,
          /\.vue\?vue/, // .vue
          /\.md$/ // .md
        ],
        imports: [
          VueRouterAutoImports,
          "vue", // Vue常用的组合式API
          "pinia", // Pinia相关API
          "@vueuse/core" // VueUse核心API
        ],
        resolvers: [
          // 自动导入 Element Plus 组件
          ElementPlusResolver({ importStyle: "sass" }),
          // 自动导入图标组件
          IconsResolver({ prefix: "Icon" })
        ]
      }),
      // 组件自动注册配置
      Components({
        dts: "./components.d.ts",
        dirs: ["src/components"],
        exclude: [],
        excludeNames: [],
        resolvers: [
          // 自动注册图标组件
          IconsResolver({
            enabledCollections: ["ep"]
          }),
          // 自动注册 Element Plus 组件
          ElementPlusResolver({ importStyle: "sass" })
        ]
      }),
      Icons({
        autoInstall: true,
        defaultClass: "by-icon"
      }),
      UnoCSS("./uno.config.ts"),
      VueMacros({
        shortEmits: true,
        shortVmodel: { prefix: "$" },
        reactivityTransform: true,
        shortBind: true,
        defineProp: { edition: "kevinEdition" },
        defineEmit: true,
        setupComponent: true,
        setupSFC: true,
        exportExpose: true,
        exportRender: true,
        chainCall: true,
        jsxDirective: true,
        booleanProp: true,
        plugins: {
          vue: pluginVue({
            include: [/\.vue$/, /\.setup\.[cm]?[jt]sx?$/],
            exclude: [],
            isProduction: mode === "production",
            script: {},
            features: {
              customElement: /.ce.vue$/
            },
            template: {
              compilerOptions: {
                isCustomElement: (tag) => {
                  return tag.startsWith("w-");
                }
              }
            }
          }),
          vueJsx: pluginVueJsx({})
        }
      }),
      DefineOptions(),
      TurboConsole({}),
      vueDevTools(),
      viteLegacy({
        //需要兼容的目标列表，可以设置多个
        targets: ["chrome < 60", "edge < 15"],
        additionalLegacyPolyfills: ["regenerator-runtime/runtime"], // 面向IE11时需要此插件
        renderLegacyChunks: true,
        polyfills: [
          "es.symbol",
          "es.array.filter",
          "es.promise",
          "es.promise.finally",
          "es/map",
          "es/set",
          "es.array.for-each",
          "es.object.define-properties",
          "es.object.define-property",
          "es.object.get-own-property-descriptor",
          "es.object.get-own-property-descriptors",
          "es.object.keys",
          "es.object.to-string",
          "web.dom-collections.for-each",
          "esnext.global-this",
          "esnext.string.match-all"
        ]
      }),
      visualizer({ open: true }),
      StyilsVitePlugin()
    ],
    resolve: {
      alias: {
        "@": fileURLToPath(new URL("./src", import.meta.url))
      }
    },
    define: {
      "process.env": process.env
    },
    css: {
      preprocessorOptions: {
        scss: {
          api: "legacy",
          importers: [new NodePackageImporter()],
          silenceDeprecations: ["legacy-js-api"],
          // 处理scss语法时, 每个文件额外添加的内容
          additionalData: `
            @use "src/styles/element-plus/name.scss" as *;
          `
        }
      }
    },
    optimizeDeps: {
      exclude: [],
      include: []
    },
    server: {
      host: "0.0.0.0",
      port: 3003,
      headers: {
        "Access-Control-Allow-Origin": "*"
      },
      proxy: {}
    }
  };
});
