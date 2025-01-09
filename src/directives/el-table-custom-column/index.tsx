// @ts-nocheck
import request from "@/utils/request";
import { Setting as EpIconSetting, RefreshLeft } from "@element-plus/icons-vue";
import { ClickOutside, ElPopover, ElCheckbox, ElButton, ElRow, ElCol, ElTooltip } from "element-plus";
import * as _ from "lodash-es";
import { createApp, defineComponent, nextTick, ref, watch, computed, toRaw, onMounted, getCurrentInstance } from "vue";
import { styled } from "@styils/vue";
import { VueDraggable } from "vue-draggable-plus";

//! ====================== 接口 ===================================
/**
 * 添加公共缓存
 */
export function cacheAdd(data = {}) {
  return request({
    url: "/wms-web/wms-extend-api/cache/add",
    method: "post",
    data
  });
}

/**
 * 公共缓存查询
 */
export function cacheFind(data = {}) {
  return request({
    url: "/wms-web/wms-extend-api/cache/find",
    method: "post",
    data
  });
}

/**
 * 公共缓存清除
 */
export function cacheDelete(data = {}) {
  return request({
    url: "/wms-web/wms-extend-api/cache/delete",
    method: "post",
    data
  });
}

export async function getCache(cacheKey: string) {
  const params = {
    businessCode: "FORM",
    businessType: `${cacheKey}`
  };

  const res = await cacheFind(params);
  let map = JSON.parse(res.data.cacheList || "{}");
  // log(`读取自定义列缓存 FORM ${cacheKey}`, JSON.parse(JSON.stringify(map)))

  if (!map || map === "null") {
    map = {};
  }
  let set = async (key: string, value: any) => {
    value = _.cloneDeep(value);
    if (key === "columnOptions") {
      value.forEach((c: any) => {
        c.checked = c.checked || false;
      });
    }

    map[key] = value;
    const params = {
      businessCode: "FORM",
      businessType: `${cacheKey}`,
      cacheList: JSON.stringify(map)
    };
    return await cacheAdd(params);
  };

  set = _.throttle(set, 1000);

  const get = async (key: any) => map[key];

  return { set, get };
}

//! 表格状态管理

//! ===================== 排序组件
const TableColumnSettingContainerDiv = styled("div", {
  position: "absolute",
  top: 0,
  right: 0,
  zIndex: 99
});
const PopoverContainerDiv = styled("div", { width: "280px" });
const ColumnCheckboxContainerDiv = styled("div", {
  width: "250px",
  height: "400px",
  overflow: "auto",
  paddingLeft: "40px",
  paddingBottom: "10px"
});
const ReactiveDiv = styled("div", { position: "relative" });
const footerBtnStyle = {
  width: "100px",
  fontSize: "12px",
  marginLeft: "10px"
};

function createSettingComponent() {
  const SettingComponent = defineComponent({
    directives: {
      "click-outside": ClickOutside
    },
    setup() {
      const popover = ref(null);
      const columns = ref(_.cloneDeep(ctx.currentColumnOptions));

      const indeterminate = computed(() => {
        const checkedColumns = columns.value.filter((c) => c.checked);
        return checkedColumns.length != 0 && checkedColumns.length != columns.value.length;
      });
      const checkAll = computed({
        get() {
          return columns.value.every((c) => c.checked);
        },
        set(val) {
          columns.value.forEach((c) => (c.checked = val));
        }
      });

      const handleReset = () => {
        const initColumnOptions = getTableColumnOptions(ctx);
        ctx.cache.set("columnOptions", initColumnOptions);
        ctx.currentColumnOptions = _.cloneDeep(initColumnOptions);
        columns.value = _.cloneDeep(ctx.currentColumnOptions);
        columns.value.forEach((c) => (c.checked = true));
      };

      const handleCancel = () => {
        columns.value = _.cloneDeep(ctx.currentColumnOptions);
        popover.value?.hide(); // 隐藏
      };

      const handleSubmit = () => {
        el.style.display = "none";
        // 保存当前的配置状态
        ctx.currentColumnOptions = _.cloneDeep(columns.value);
        console.log(ctx.currentColumnOptions);

        ctx.cache.set("columnOptions", ctx.currentColumnOptions);

        // 不需要自定义的列
        const otherColumns = ctx.initColumns.filter((c) => isIgnoreColumn(c));
        const orderedColumns = columns.value
          .filter((option) => option.checked)
          .map((option) => ctx.initColumns.find((col) => col.label === option.label))
          .filter((c) => !!c);
        let newTableColumns = [...otherColumns, ...orderedColumns];
        newTableColumns = newTableColumns.filter(
          (c, index, arr) => arr.findIndex((c2) => c2.label === c.label) === index
        );
        newTableColumns = newTableColumns.filter((c) => !c.className?.includes("hidden-cell"));
        console.log(
          "newTableColumns",
          newTableColumns.map((c) => c.label)
        );

        // 重写 getColumnIndex 方法
        newTableColumns.forEach((column, index) => {
          column._getColumnIndex = column.getColumnIndex;
          column.getColumnIndex = () => index;
        });

        if (newTableColumns.length != 0) {
          ctx.tableStore.states.columns.value.forEach((c) => ctx.tableStore.commit("removeColumn", c));
          newTableColumns.reverse().forEach((c) => ctx.tableStore.commit("insertColumn", c, 0));
        }
        el.style.display = "block";
        popover.value?.hide(); // 隐藏
      };

      onMounted(async () => {
        await handleSubmit();
      });

      return () => (
        <TableColumnSettingContainerDiv>
          <ElPopover ref={popover} placement='right' trigger='click' width={300}>
            {{
              default: () => (
                <PopoverContainerDiv v-click-outside={handleCancel}>
                  <div>
                    <p>请选择页面展示内容：</p>
                    <p>可以拖拽排序，列表会按照已选择的内容从上到下依次展示！</p>
                  </div>
                  <ColumnCheckboxContainerDiv>
                    <ReactiveDiv>
                      <ElCheckbox indeterminate={indeterminate.value} v-model={checkAll.value}>
                        全选
                      </ElCheckbox>
                      <ElButton
                        icon={RefreshLeft}
                        type='primary'
                        size='small'
                        style={{ position: "absolute", right: 0 }}
                        onClick={handleReset}
                      >
                        重置
                      </ElButton>
                    </ReactiveDiv>
                    <VueDraggable v-model={columns.value}>
                      {columns.value
                        .filter((x) => x?.label)
                        .map((column) => {
                          return (
                            <div key={column.id}>
                              <ElCheckbox v-model={column.checked} label={column.label} value={column.num}></ElCheckbox>
                            </div>
                          );
                        })}
                    </VueDraggable>
                  </ColumnCheckboxContainerDiv>
                  <br />
                  <ElRow>
                    <ElCol span={12} style={{ textAlgin: "right" }}>
                      <ElButton size='small' style={footerBtnStyle} onClick={handleCancel}>
                        取消
                      </ElButton>
                    </ElCol>
                    <ElCol span={12} style={{ textAlgin: "left" }}>
                      <ElButton type='primary' size='small' style={footerBtnStyle} onClick={handleSubmit}>
                        确定
                      </ElButton>
                    </ElCol>
                  </ElRow>
                </PopoverContainerDiv>
              ),
              reference: () => <EpIconSetting style='width: 20px; cursor: pointer;' />
            }}
          </ElPopover>
        </TableColumnSettingContainerDiv>
      );
    }
  });
  return SettingComponent;
}

//! ============================== 指令
function isIgnoreColumn(column) {
  if (column.label == "序号") return true;
  if (column.label == "操作") return true;
  if (column.fixed) return true;
  if (column.fixed == "right") return true;
  if (column.type == "index") return true;
  if (column.type == "selection") return true;
  if (column.label == "#") return true;
}

function getTableColumnOptions(context) {
  return context.initColumns
    .filter((c) => !isIgnoreColumn(c))
    .map((col, index) => {
      const option = {};
      option.checked = true;
      option.num = index;
      option.label = col.label;
      option.prop = col.prop;
      return option;
    })
    .filter(
      (col) => !col.fixed && col.type !== "index" && col.type !== "selection" && col.label != "操作" && col.label != "#"
    );
}

export default {
  async mounted(el: HTMLElement, binding: any, vnode: any) {
    // @ts-ignore
    window.el = el;
    // @ts-ignore
    window.vnode = vnode;
    // @ts-ignore
    window.binding = binding;
    el.style.display = "none";

    const instance = getCurrentInstance();
    console.log("instance", instance);

    const unwatch = watch(
      () => vnode.ctx.store.states.columns.value.length,
      async () => {
        const tableRef = vnode.ctx;
        const tableStore = vnode.ctx.store;
        unwatch();

        const propsMap = {};
        tableRef.slots.default().forEach((item) => {
          if (item.props) {
            propsMap[item.props.label] = item.props;
          }

          if (item.children && item.children instanceof Array) {
            item.children.forEach((item2) => {
              if (item2.props) {
                propsMap[item2.props.label] = item2.props;
              }
            });
          }
        });

        console.log("propsMap", propsMap);

        const ctx = {
          el,
          binding,
          vnode,
          tableRef,
          tableStore,
          initColumns: _.cloneDeep(tableStore.states.columns.value.map((c) => toRaw(c))),
          getCurrentColumns: () => _.cloneDeep(tableStore.states.columns.value.map((c) => toRaw(c))),
          cache: await getCache(binding.value),
          propsMap
        };
        window.ctx = ctx;

        const cachedColumns = await ctx.cache.get("columnOptions");
        const options = getTableColumnOptions(ctx);

        ctx.currentColumnOptions = [];
        (cachedColumns || []).forEach((cacheOption) => {
          const index = options.findIndex((col) => col.label === cacheOption.label);
          if (index != -1) {
            ctx.currentColumnOptions.push({ ...options[index], checked: cacheOption.checked });
            options.splice(index, 1);
          }
        });
        ctx.currentColumnOptions.push(...options);

        // 额外信息
        ctx.currentColumnOptions.forEach((option) => {
          option.prop = propsMap[option.label].prop;
          option.propType = propsMap[option.label].propType;
        });

        // console.log('表格列的缓存', cachedColumns)
        // if (cachedColumns && cachedColumns.length === columns.length) {
        //   ctx.currentColumnOptions = _.cloneDeep(cachedColumns)
        // } else {
        //   // 将初始列写入缓存
        //   ctx.currentColumnOptions = _.cloneDeep(columns)
        // }

        ctx.cache.set("columnOptions", ctx.currentColumnOptions);
        console.log("ctx.currentColumnOptions", ctx.currentColumnOptions);

        const SettingComponent = createSettingComponent(ctx);
        // 创建组件并挂载到表格上
        const setting: any = createApp(SettingComponent);
        // const settingInstance = setting.mount("#el-custom-column-setting");
        const div = document.createElement("div");
        el.appendChild(div);
        el.style.position = "relative";
        el.style.overflow = "visible";
        div.style.position = "absolute";
        div.style.top = "10px";
        div.style.right = "10px";
        div.style.zIndex = 99999;
        const settingInstance = setting.mount(div);
        window.setting = setting;
        window.settingInstance = settingInstance;
      }
    );
  },
  updated(el: HTMLElement, binding: any, vnode: any) {},
  unmounted(el: HTMLElement, binding: any, vnode: any) {}
};
