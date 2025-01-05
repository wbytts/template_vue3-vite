import "@unocss/reset/tailwind-compat.css"; // 样式重置：Tailwind兼容版
import "virtual:uno.css"; // unocss 虚拟文件
import "./styles/index.scss"; // 项目全局样式
import { createApp } from "vue";

import App from "./App.vue";
import router from "./router";
import pinia from "./stores";
import elCustomColumnDirective from "./directives/el-custom-column";

const app = createApp(App);
app.use(router);
app.use(pinia);
app.directive("custom-column", elCustomColumnDirective);
app.mount("#app");
