import { ref, type Component } from "vue";

/**
 * 封装弹窗
 */
export function useModal(component: Component) {
  const visible = ref(false);

  // 打开弹窗
  const open = () => {
    visible.value = true;
  };

  // 关闭弹窗
  const close = () => {
    visible.value = false;
  };

  // 切换弹窗
  const toggle = () => {
    visible.value = !visible.value;
  };

  return {
    visible,
    open,
    close,
    toggle
  };
}
