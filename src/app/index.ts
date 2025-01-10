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

  setupRouter(app);
  setupPinia(app);
  setupDirectives(app);

  app.use(CorePlugin);
  app.use(BywPlugin);

  app.mount(container ? container.querySelector("#app") : "#app");
}
