import { type App } from "vue";
import ElTableCustomColumn from "./el-table-custom-column";
import ElSelectLoadMore from "./el-select-load-more";

export function setupDirectives(app: App) {
  // Element Plus 自定义列指令
  app.directive("el-table-custom-column", ElTableCustomColumn);
  app.directive("el-select-load-more", ElSelectLoadMore);
}
