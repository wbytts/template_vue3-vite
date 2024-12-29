import type { VNode } from "vue";

export default {
  mounted(el: HTMLElement, binding: any, vnode: VNode) {
    console.log(el);
    console.log(binding);
    console.log(vnode);

    // @ts-ignore
    window.x = vnode;
  },
  updated(el: HTMLElement, binding: any) {},
  unmounted(el: HTMLElement, binding: any) {}
};
