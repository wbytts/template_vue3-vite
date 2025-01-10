import { nextTick, type Directive } from "vue";
import { v4 as uuidv4 } from "uuid";

// 挂载元素的DOM类型
type TheHostElement = HTMLElement;
// 指令值
type TheValue = Function;
// 指令修饰符
type TheModifiers = "";
// 指令参数
type TheArg = "";

type ThisDirective = Directive<TheHostElement, TheValue, TheModifiers, TheArg>;

const directive: ThisDirective = {
  created(el, binding, vnode) {
    const cls = `load-more-cls-${uuidv4()}`;
    el.classList.add(cls);
    console.log("beforeMount", el, binding, vnode);
  },
  mounted(el, binding, vnode) {
    console.log("el-select-load-more 指令挂载...", el, binding);
    console.log(vnode);

    // 如果没有提供加载更多的回调函数, 则静默失败
    if (!binding.value) {
      return;
    }

    nextTick(() => {
      const customClass = [...el.classList.values()].find((x) => x.startsWith("load-more-cls-"));
      const domClass = `${customClass || ""} .by-select-dropdown__wrap`;
      const element: any = el.querySelector(domClass);
      console.log("target dom", element);

      const handleScroll: EventListener = () => {
        console.log("scroll");
        const { scrollTop, scrollHeight, clientHeight } = element;
        const scrollDistance = scrollHeight - scrollTop <= clientHeight;
        if (scrollDistance) {
          binding.value(); // 调用加载更多的回调函数
        }
      };
      // 将事件处理函数存储在元素的某个属性上以便后续引用
      element && (element.__vueCustomEvent__ = handleScroll);
      // 监听滚动事件
      element && element.addEventListener("scroll", handleScroll);
    }).then(() => {});
  },
  beforeUnmount(el) {
    // 从元素上获取滚动事件并移除监听器
    const domClass = ".by-select-dropdown__wrap";
    const element = el.querySelector(domClass) as HTMLElement & { __vueCustomEvent__?: EventListener };

    if (element.__vueCustomEvent__) {
      element.removeEventListener("scroll", element.__vueCustomEvent__);
      // 可选：删除存储的函数引用以避免内存泄漏
      delete element.__vueCustomEvent__;
    }
  }
};

export default directive;
