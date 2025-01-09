import { createApp } from "vue";
import App from "./App.vue";
import { setupRouter } from "@/router";
import { setupPinia } from "@/stores";
import { setupDirectives } from "@/directives";

export function mountApplication(props) {
  const { container } = props;

  const app = createApp(App);

  setupRouter(app);
  setupPinia(app);
  setupDirectives(app);

  app.mount(container ? container.querySelector("#app") : "#app");
}
