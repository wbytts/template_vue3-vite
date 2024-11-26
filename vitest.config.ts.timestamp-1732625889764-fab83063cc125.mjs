// vitest.config.ts
import { fileURLToPath as fileURLToPath2 } from "node:url";
import { mergeConfig, defineConfig as defineConfig2, configDefaults } from "file:///E:/projects/github/wbytts/template_vue3-vite/node_modules/.pnpm/vitest@1.6.0_@types+node@20.16.5_jsdom@24.1.3_sass@1.79.3/node_modules/vitest/dist/config.js";

// vite.config.ts
import { fileURLToPath, URL as URL2 } from "node:url";
import { defineConfig } from "file:///E:/projects/github/wbytts/template_vue3-vite/node_modules/.pnpm/vite@5.4.7_@types+node@20.16.5_sass@1.79.3/node_modules/vite/dist/node/index.js";
import vue from "file:///E:/projects/github/wbytts/template_vue3-vite/node_modules/.pnpm/@vitejs+plugin-vue@5.1.4_vite@5.4.7_@types+node@20.16.5_sass@1.79.3__vue@3.5.8_typescript@5.4.5_/node_modules/@vitejs/plugin-vue/dist/index.mjs";
import vueJsx from "file:///E:/projects/github/wbytts/template_vue3-vite/node_modules/.pnpm/@vitejs+plugin-vue-jsx@4.0.1_vite@5.4.7_@types+node@20.16.5_sass@1.79.3__vue@3.5.8_typescript@5.4.5_/node_modules/@vitejs/plugin-vue-jsx/dist/index.mjs";
import vueDevTools from "file:///E:/projects/github/wbytts/template_vue3-vite/node_modules/.pnpm/vite-plugin-vue-devtools@7.4.5_@nuxt+kit@3.13.2_rollup@4.22.4__rollup@4.22.4_vite@5.4.7_@type_o3adxhtkx5kjz6v7tdwqpfsxr4/node_modules/vite-plugin-vue-devtools/dist/vite.mjs";
import AutoImport from "file:///E:/projects/github/wbytts/template_vue3-vite/node_modules/.pnpm/unplugin-auto-import@0.18.3_@nuxt+kit@3.13.2_rollup@4.22.4__@vueuse+core@11.1.0_vue@3.5.8_typ_hs3eebvenkmce46q7eldikwrkq/node_modules/unplugin-auto-import/dist/vite.js";
import Components from "file:///E:/projects/github/wbytts/template_vue3-vite/node_modules/.pnpm/unplugin-vue-components@0.27.4_@babel+parser@7.25.8_@nuxt+kit@3.13.2_rollup@4.22.4__rollup@4._plgj4kuvwtqhbjlwa2bedpniie/node_modules/unplugin-vue-components/dist/vite.js";
import { ElementPlusResolver } from "file:///E:/projects/github/wbytts/template_vue3-vite/node_modules/.pnpm/unplugin-vue-components@0.27.4_@babel+parser@7.25.8_@nuxt+kit@3.13.2_rollup@4.22.4__rollup@4._plgj4kuvwtqhbjlwa2bedpniie/node_modules/unplugin-vue-components/dist/resolvers.js";
import UnoCSS from "file:///E:/projects/github/wbytts/template_vue3-vite/node_modules/.pnpm/unocss@0.62.4_postcss@8.4.47_rollup@4.22.4_vite@5.4.7_@types+node@20.16.5_sass@1.79.3_/node_modules/unocss/dist/vite.mjs";
import VueRouter from "file:///E:/projects/github/wbytts/template_vue3-vite/node_modules/.pnpm/unplugin-vue-router@0.10.8_rollup@4.22.4_vue-router@4.4.5_vue@3.5.8_typescript@5.4.5___vue@3.5.8_typescript@5.4.5_/node_modules/unplugin-vue-router/dist/vite.js";
import { VueRouterAutoImports } from "file:///E:/projects/github/wbytts/template_vue3-vite/node_modules/.pnpm/unplugin-vue-router@0.10.8_rollup@4.22.4_vue-router@4.4.5_vue@3.5.8_typescript@5.4.5___vue@3.5.8_typescript@5.4.5_/node_modules/unplugin-vue-router/dist/index.js";
import Layouts from "file:///E:/projects/github/wbytts/template_vue3-vite/node_modules/.pnpm/vite-plugin-vue-layouts@0.11.0_vite@5.4.7_@types+node@20.16.5_sass@1.79.3__vue-router@4.4.5_v_dhj5dtu7iwidqgxpjelod5hd7a/node_modules/vite-plugin-vue-layouts/dist/index.mjs";
import VueMacros from "file:///E:/projects/github/wbytts/template_vue3-vite/node_modules/.pnpm/unplugin-vue-macros@2.12.2_@vueuse+core@11.1.0_vue@3.5.8_typescript@5.4.5___esbuild@0.23.1_ro_vmoz2jyr5a4vochdfk2vjfl3f4/node_modules/unplugin-vue-macros/dist/vite.js";
import DefineOptions from "file:///E:/projects/github/wbytts/template_vue3-vite/node_modules/.pnpm/unplugin-vue-define-options@1.5.1_rollup@4.22.4_vue@3.5.8_typescript@5.4.5_/node_modules/unplugin-vue-define-options/dist/vite.js";
var __vite_injected_original_import_meta_url = "file:///E:/projects/github/wbytts/template_vue3-vite/vite.config.ts";
var vite_config_default = defineConfig({
  plugins: [
    // https://uvr.esm.is/
    VueRouter({
      routesFolder: [
        // 实际业务路由
        {
          src: "./src/pages",
          path: ""
        },
        // 示例页面相关路由
        {
          src: "./src/examples",
          path: "examples/"
        }
      ],
      // 扫描的拓展名支持 SFC 和 TSX
      extensions: [".vue", ".tsx"],
      // 不需要被扫描的页面(放页面级组件)
      exclude: ["**/components/*"],
      extendRoute(route) {
      }
    }),
    // https://github.com/JohnCampionJr/vite-plugin-vue-layouts
    Layouts({
      layoutsDirs: "./src/layouts",
      // 默认值 src/layouts
      pagesDirs: "./src/pages",
      // 默认值 src/pages
      defaultLayout: "default",
      // 默认 undefined
      // 需要排除的页面
      exclude: []
    }),
    // 自动导入配置
    AutoImport({
      imports: [
        VueRouterAutoImports,
        "vue",
        // Vue常用的组合式API
        "pinia"
        // Pinia相关API
      ],
      resolvers: [ElementPlusResolver()]
    }),
    // 组件自动注册配置
    Components({
      resolvers: [ElementPlusResolver()]
    }),
    UnoCSS(),
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
      "@": fileURLToPath(new URL2("./src", __vite_injected_original_import_meta_url))
    }
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@use "src/styles/element-plus/name.scss" as *;`
      }
    }
  }
});

// vitest.config.ts
var __vite_injected_original_import_meta_url2 = "file:///E:/projects/github/wbytts/template_vue3-vite/vitest.config.ts";
var vitest_config_default = mergeConfig(
  vite_config_default,
  defineConfig2({
    test: {
      environment: "jsdom",
      exclude: [...configDefaults.exclude, "e2e/**"],
      root: fileURLToPath2(new URL("./", __vite_injected_original_import_meta_url2))
    }
  })
);
export {
  vitest_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZXN0LmNvbmZpZy50cyIsICJ2aXRlLmNvbmZpZy50cyJdLAogICJzb3VyY2VzQ29udGVudCI6IFsiY29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2Rpcm5hbWUgPSBcIkU6XFxcXHByb2plY3RzXFxcXGdpdGh1YlxcXFx3Ynl0dHNcXFxcdGVtcGxhdGVfdnVlMy12aXRlXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCJFOlxcXFxwcm9qZWN0c1xcXFxnaXRodWJcXFxcd2J5dHRzXFxcXHRlbXBsYXRlX3Z1ZTMtdml0ZVxcXFx2aXRlc3QuY29uZmlnLnRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9FOi9wcm9qZWN0cy9naXRodWIvd2J5dHRzL3RlbXBsYXRlX3Z1ZTMtdml0ZS92aXRlc3QuY29uZmlnLnRzXCI7aW1wb3J0IHsgZmlsZVVSTFRvUGF0aCB9IGZyb20gJ25vZGU6dXJsJ1xyXG5pbXBvcnQgeyBtZXJnZUNvbmZpZywgZGVmaW5lQ29uZmlnLCBjb25maWdEZWZhdWx0cyB9IGZyb20gJ3ZpdGVzdC9jb25maWcnXHJcbmltcG9ydCB2aXRlQ29uZmlnIGZyb20gJy4vdml0ZS5jb25maWcnXHJcblxyXG5leHBvcnQgZGVmYXVsdCBtZXJnZUNvbmZpZyhcclxuICB2aXRlQ29uZmlnLFxyXG4gIGRlZmluZUNvbmZpZyh7XHJcbiAgICB0ZXN0OiB7XHJcbiAgICAgIGVudmlyb25tZW50OiAnanNkb20nLFxyXG4gICAgICBleGNsdWRlOiBbLi4uY29uZmlnRGVmYXVsdHMuZXhjbHVkZSwgJ2UyZS8qKiddLFxyXG4gICAgICByb290OiBmaWxlVVJMVG9QYXRoKG5ldyBVUkwoJy4vJywgaW1wb3J0Lm1ldGEudXJsKSlcclxuICAgIH1cclxuICB9KVxyXG4pXHJcbiIsICJjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZGlybmFtZSA9IFwiRTpcXFxccHJvamVjdHNcXFxcZ2l0aHViXFxcXHdieXR0c1xcXFx0ZW1wbGF0ZV92dWUzLXZpdGVcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIkU6XFxcXHByb2plY3RzXFxcXGdpdGh1YlxcXFx3Ynl0dHNcXFxcdGVtcGxhdGVfdnVlMy12aXRlXFxcXHZpdGUuY29uZmlnLnRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9FOi9wcm9qZWN0cy9naXRodWIvd2J5dHRzL3RlbXBsYXRlX3Z1ZTMtdml0ZS92aXRlLmNvbmZpZy50c1wiO2ltcG9ydCB7IGZpbGVVUkxUb1BhdGgsIFVSTCB9IGZyb20gJ25vZGU6dXJsJ1xuXG5pbXBvcnQgeyBkZWZpbmVDb25maWcgfSBmcm9tICd2aXRlJ1xuaW1wb3J0IHZ1ZSBmcm9tICdAdml0ZWpzL3BsdWdpbi12dWUnXG5pbXBvcnQgdnVlSnN4IGZyb20gJ0B2aXRlanMvcGx1Z2luLXZ1ZS1qc3gnXG5pbXBvcnQgdnVlRGV2VG9vbHMgZnJvbSAndml0ZS1wbHVnaW4tdnVlLWRldnRvb2xzJ1xuaW1wb3J0IEF1dG9JbXBvcnQgZnJvbSAndW5wbHVnaW4tYXV0by1pbXBvcnQvdml0ZSdcbmltcG9ydCBDb21wb25lbnRzIGZyb20gJ3VucGx1Z2luLXZ1ZS1jb21wb25lbnRzL3ZpdGUnXG5pbXBvcnQgeyBFbGVtZW50UGx1c1Jlc29sdmVyIH0gZnJvbSAndW5wbHVnaW4tdnVlLWNvbXBvbmVudHMvcmVzb2x2ZXJzJ1xuaW1wb3J0IFVub0NTUyBmcm9tICd1bm9jc3Mvdml0ZSdcbmltcG9ydCBWdWVSb3V0ZXIgZnJvbSAndW5wbHVnaW4tdnVlLXJvdXRlci92aXRlJ1xuaW1wb3J0IHsgVnVlUm91dGVyQXV0b0ltcG9ydHMgfSBmcm9tICd1bnBsdWdpbi12dWUtcm91dGVyJ1xuaW1wb3J0IExheW91dHMgZnJvbSAndml0ZS1wbHVnaW4tdnVlLWxheW91dHMnXG5pbXBvcnQgVnVlTWFjcm9zIGZyb20gJ3VucGx1Z2luLXZ1ZS1tYWNyb3Mvdml0ZSdcbmltcG9ydCBEZWZpbmVPcHRpb25zIGZyb20gJ3VucGx1Z2luLXZ1ZS1kZWZpbmUtb3B0aW9ucy92aXRlJ1xuXG4vLyBodHRwczovL3ZpdGVqcy5kZXYvY29uZmlnL1xuZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29uZmlnKHtcbiAgcGx1Z2luczogW1xuICAgIC8vIGh0dHBzOi8vdXZyLmVzbS5pcy9cbiAgICBWdWVSb3V0ZXIoe1xuICAgICAgcm91dGVzRm9sZGVyOiBbXG4gICAgICAgIC8vIFx1NUI5RVx1OTY0NVx1NEUxQVx1NTJBMVx1OERFRlx1NzUzMVxuICAgICAgICB7XG4gICAgICAgICAgc3JjOiAnLi9zcmMvcGFnZXMnLFxuICAgICAgICAgIHBhdGg6ICcnXG4gICAgICAgIH0sXG4gICAgICAgIC8vIFx1NzkzQVx1NEY4Qlx1OTg3NVx1OTc2Mlx1NzZGOFx1NTE3M1x1OERFRlx1NzUzMVxuICAgICAgICB7XG4gICAgICAgICAgc3JjOiAnLi9zcmMvZXhhbXBsZXMnLFxuICAgICAgICAgIHBhdGg6ICdleGFtcGxlcy8nXG4gICAgICAgIH1cbiAgICAgIF0sXG4gICAgICAvLyBcdTYyNkJcdTYzQ0ZcdTc2ODRcdTYyRDNcdTVDNTVcdTU0MERcdTY1MkZcdTYzMDEgU0ZDIFx1NTQ4QyBUU1hcbiAgICAgIGV4dGVuc2lvbnM6IFsnLnZ1ZScsICcudHN4J10sXG4gICAgICAvLyBcdTRFMERcdTk3MDBcdTg5ODFcdTg4QUJcdTYyNkJcdTYzQ0ZcdTc2ODRcdTk4NzVcdTk3NjIoXHU2NTNFXHU5ODc1XHU5NzYyXHU3RUE3XHU3RUM0XHU0RUY2KVxuICAgICAgZXhjbHVkZTogWycqKi9jb21wb25lbnRzLyonXSxcbiAgICAgIGV4dGVuZFJvdXRlKHJvdXRlKSB7fVxuICAgIH0pLFxuICAgIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9Kb2huQ2FtcGlvbkpyL3ZpdGUtcGx1Z2luLXZ1ZS1sYXlvdXRzXG4gICAgTGF5b3V0cyh7XG4gICAgICBsYXlvdXRzRGlyczogJy4vc3JjL2xheW91dHMnLCAvLyBcdTlFRDhcdThCQTRcdTUwM0Mgc3JjL2xheW91dHNcbiAgICAgIHBhZ2VzRGlyczogJy4vc3JjL3BhZ2VzJywgLy8gXHU5RUQ4XHU4QkE0XHU1MDNDIHNyYy9wYWdlc1xuICAgICAgZGVmYXVsdExheW91dDogJ2RlZmF1bHQnLCAvLyBcdTlFRDhcdThCQTQgdW5kZWZpbmVkXG4gICAgICAvLyBcdTk3MDBcdTg5ODFcdTYzOTJcdTk2NjRcdTc2ODRcdTk4NzVcdTk3NjJcbiAgICAgIGV4Y2x1ZGU6IFtdXG4gICAgfSksXG4gICAgLy8gXHU4MUVBXHU1MkE4XHU1QkZDXHU1MTY1XHU5MTREXHU3RjZFXG4gICAgQXV0b0ltcG9ydCh7XG4gICAgICBpbXBvcnRzOiBbXG4gICAgICAgIFZ1ZVJvdXRlckF1dG9JbXBvcnRzLFxuICAgICAgICAndnVlJywgLy8gVnVlXHU1RTM4XHU3NTI4XHU3Njg0XHU3RUM0XHU1NDA4XHU1RjBGQVBJXG4gICAgICAgICdwaW5pYScgLy8gUGluaWFcdTc2RjhcdTUxNzNBUElcbiAgICAgIF0sXG4gICAgICByZXNvbHZlcnM6IFtFbGVtZW50UGx1c1Jlc29sdmVyKCldXG4gICAgfSksXG4gICAgLy8gXHU3RUM0XHU0RUY2XHU4MUVBXHU1MkE4XHU2Q0U4XHU1MThDXHU5MTREXHU3RjZFXG4gICAgQ29tcG9uZW50cyh7XG4gICAgICByZXNvbHZlcnM6IFtFbGVtZW50UGx1c1Jlc29sdmVyKCldXG4gICAgfSksXG4gICAgVW5vQ1NTKCksXG4gICAgVnVlTWFjcm9zKHtcbiAgICAgIHNob3J0RW1pdHM6IHRydWUsXG4gICAgICBzaG9ydFZtb2RlbDogeyBwcmVmaXg6ICckJyB9LFxuICAgICAgcmVhY3Rpdml0eVRyYW5zZm9ybTogdHJ1ZSxcbiAgICAgIHNob3J0QmluZDogdHJ1ZSxcbiAgICAgIGRlZmluZVByb3A6IHsgZWRpdGlvbjogJ2tldmluRWRpdGlvbicgfSxcbiAgICAgIGRlZmluZUVtaXQ6IHRydWUsXG4gICAgICBzZXR1cENvbXBvbmVudDogdHJ1ZSxcbiAgICAgIHNldHVwU0ZDOiB0cnVlLFxuICAgICAgZXhwb3J0RXhwb3NlOiB0cnVlLFxuICAgICAgZXhwb3J0UmVuZGVyOiB0cnVlLFxuICAgICAgY2hhaW5DYWxsOiB0cnVlLFxuICAgICAganN4RGlyZWN0aXZlOiB0cnVlLFxuICAgICAgYm9vbGVhblByb3A6IHRydWUsXG4gICAgICBwbHVnaW5zOiB7XG4gICAgICAgIHZ1ZTogdnVlKHtcbiAgICAgICAgICBpbmNsdWRlOiBbL1xcLnZ1ZSQvLCAvXFwuc2V0dXBcXC5bY21dP1tqdF1zeD8kL11cbiAgICAgICAgfSksXG4gICAgICAgIHZ1ZUpzeDogdnVlSnN4KClcbiAgICAgIH1cbiAgICB9KSxcbiAgICBEZWZpbmVPcHRpb25zKCksXG4gICAgdnVlRGV2VG9vbHMoKVxuICBdLFxuICByZXNvbHZlOiB7XG4gICAgYWxpYXM6IHtcbiAgICAgICdAJzogZmlsZVVSTFRvUGF0aChuZXcgVVJMKCcuL3NyYycsIGltcG9ydC5tZXRhLnVybCkpXG4gICAgfVxuICB9LFxuICBjc3M6IHtcbiAgICBwcmVwcm9jZXNzb3JPcHRpb25zOiB7XG4gICAgICBzY3NzOiB7XG4gICAgICAgIGFkZGl0aW9uYWxEYXRhOiBgQHVzZSBcInNyYy9zdHlsZXMvZWxlbWVudC1wbHVzL25hbWUuc2Nzc1wiIGFzICo7YFxuICAgICAgfVxuICAgIH1cbiAgfSxcblxufSlcbiJdLAogICJtYXBwaW5ncyI6ICI7QUFBb1UsU0FBUyxpQkFBQUEsc0JBQXFCO0FBQ2xXLFNBQVMsYUFBYSxnQkFBQUMsZUFBYyxzQkFBc0I7OztBQ0RzUSxTQUFTLGVBQWUsT0FBQUMsWUFBVztBQUVuVyxTQUFTLG9CQUFvQjtBQUM3QixPQUFPLFNBQVM7QUFDaEIsT0FBTyxZQUFZO0FBQ25CLE9BQU8saUJBQWlCO0FBQ3hCLE9BQU8sZ0JBQWdCO0FBQ3ZCLE9BQU8sZ0JBQWdCO0FBQ3ZCLFNBQVMsMkJBQTJCO0FBQ3BDLE9BQU8sWUFBWTtBQUNuQixPQUFPLGVBQWU7QUFDdEIsU0FBUyw0QkFBNEI7QUFDckMsT0FBTyxhQUFhO0FBQ3BCLE9BQU8sZUFBZTtBQUN0QixPQUFPLG1CQUFtQjtBQWQrSyxJQUFNLDJDQUEyQztBQWlCMVAsSUFBTyxzQkFBUSxhQUFhO0FBQUEsRUFDMUIsU0FBUztBQUFBO0FBQUEsSUFFUCxVQUFVO0FBQUEsTUFDUixjQUFjO0FBQUE7QUFBQSxRQUVaO0FBQUEsVUFDRSxLQUFLO0FBQUEsVUFDTCxNQUFNO0FBQUEsUUFDUjtBQUFBO0FBQUEsUUFFQTtBQUFBLFVBQ0UsS0FBSztBQUFBLFVBQ0wsTUFBTTtBQUFBLFFBQ1I7QUFBQSxNQUNGO0FBQUE7QUFBQSxNQUVBLFlBQVksQ0FBQyxRQUFRLE1BQU07QUFBQTtBQUFBLE1BRTNCLFNBQVMsQ0FBQyxpQkFBaUI7QUFBQSxNQUMzQixZQUFZLE9BQU87QUFBQSxNQUFDO0FBQUEsSUFDdEIsQ0FBQztBQUFBO0FBQUEsSUFFRCxRQUFRO0FBQUEsTUFDTixhQUFhO0FBQUE7QUFBQSxNQUNiLFdBQVc7QUFBQTtBQUFBLE1BQ1gsZUFBZTtBQUFBO0FBQUE7QUFBQSxNQUVmLFNBQVMsQ0FBQztBQUFBLElBQ1osQ0FBQztBQUFBO0FBQUEsSUFFRCxXQUFXO0FBQUEsTUFDVCxTQUFTO0FBQUEsUUFDUDtBQUFBLFFBQ0E7QUFBQTtBQUFBLFFBQ0E7QUFBQTtBQUFBLE1BQ0Y7QUFBQSxNQUNBLFdBQVcsQ0FBQyxvQkFBb0IsQ0FBQztBQUFBLElBQ25DLENBQUM7QUFBQTtBQUFBLElBRUQsV0FBVztBQUFBLE1BQ1QsV0FBVyxDQUFDLG9CQUFvQixDQUFDO0FBQUEsSUFDbkMsQ0FBQztBQUFBLElBQ0QsT0FBTztBQUFBLElBQ1AsVUFBVTtBQUFBLE1BQ1IsWUFBWTtBQUFBLE1BQ1osYUFBYSxFQUFFLFFBQVEsSUFBSTtBQUFBLE1BQzNCLHFCQUFxQjtBQUFBLE1BQ3JCLFdBQVc7QUFBQSxNQUNYLFlBQVksRUFBRSxTQUFTLGVBQWU7QUFBQSxNQUN0QyxZQUFZO0FBQUEsTUFDWixnQkFBZ0I7QUFBQSxNQUNoQixVQUFVO0FBQUEsTUFDVixjQUFjO0FBQUEsTUFDZCxjQUFjO0FBQUEsTUFDZCxXQUFXO0FBQUEsTUFDWCxjQUFjO0FBQUEsTUFDZCxhQUFhO0FBQUEsTUFDYixTQUFTO0FBQUEsUUFDUCxLQUFLLElBQUk7QUFBQSxVQUNQLFNBQVMsQ0FBQyxVQUFVLHdCQUF3QjtBQUFBLFFBQzlDLENBQUM7QUFBQSxRQUNELFFBQVEsT0FBTztBQUFBLE1BQ2pCO0FBQUEsSUFDRixDQUFDO0FBQUEsSUFDRCxjQUFjO0FBQUEsSUFDZCxZQUFZO0FBQUEsRUFDZDtBQUFBLEVBQ0EsU0FBUztBQUFBLElBQ1AsT0FBTztBQUFBLE1BQ0wsS0FBSyxjQUFjLElBQUlDLEtBQUksU0FBUyx3Q0FBZSxDQUFDO0FBQUEsSUFDdEQ7QUFBQSxFQUNGO0FBQUEsRUFDQSxLQUFLO0FBQUEsSUFDSCxxQkFBcUI7QUFBQSxNQUNuQixNQUFNO0FBQUEsUUFDSixnQkFBZ0I7QUFBQSxNQUNsQjtBQUFBLElBQ0Y7QUFBQSxFQUNGO0FBRUYsQ0FBQzs7O0FEbEcwTSxJQUFNQyw0Q0FBMkM7QUFJNVAsSUFBTyx3QkFBUTtBQUFBLEVBQ2I7QUFBQSxFQUNBQyxjQUFhO0FBQUEsSUFDWCxNQUFNO0FBQUEsTUFDSixhQUFhO0FBQUEsTUFDYixTQUFTLENBQUMsR0FBRyxlQUFlLFNBQVMsUUFBUTtBQUFBLE1BQzdDLE1BQU1DLGVBQWMsSUFBSSxJQUFJLE1BQU1GLHlDQUFlLENBQUM7QUFBQSxJQUNwRDtBQUFBLEVBQ0YsQ0FBQztBQUNIOyIsCiAgIm5hbWVzIjogWyJmaWxlVVJMVG9QYXRoIiwgImRlZmluZUNvbmZpZyIsICJVUkwiLCAiVVJMIiwgIl9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwiLCAiZGVmaW5lQ29uZmlnIiwgImZpbGVVUkxUb1BhdGgiXQp9Cg==
