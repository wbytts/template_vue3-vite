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
  created(el, binding, vnode) {},
  mounted(el, binding, vnode) {
    console.log(binding);
  },
  beforeUnmount(el) {}
};

export default directive;
