import { createApp } from "vue";
import App from "./App.vue";
import { setupRouter } from "@/router";
import { setupPinia } from "@/stores";
import { setupDirectives } from "@/directives";
import CorePlugin from "@/plugins/core";
import BywPlugin from "@/plugins/byw";

export function mountApplication(props) {
  const { container } = props;

  const app = createApp(App);

  setupRouter(app); // 路由
  setupPinia(app); // 状态管理

  setupDirectives(app); // 自定义指令
  app.use(CorePlugin); // 核心插件
  app.use(BywPlugin); // 自定义插件

  app.mount(container ? container.querySelector("#app") : "#app");
}
