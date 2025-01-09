import { type App } from "vue";
import { createPinia } from "pinia";
import piniaPluginPersistedstate from "pinia-plugin-persistedstate";

const pinia = createPinia();
pinia.use(piniaPluginPersistedstate);
export default pinia;

export function setupPinia(app: App) {
  app.use(pinia);
}
