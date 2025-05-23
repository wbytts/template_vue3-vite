/*
el：指令绑定到的元素。这可以用于直接操作 DOM

binding：一个对象，包含以下属性
    value：传递给指令的值
    oldValue：之前的值，仅在 beforeUpdate 和 updated 中可用。无论值是否更改，它都可用
    arg：传递给指令的参数 (如果有的话)
    modifiers：一个包含修饰符的对象 (如果有的话)
    instance：使用该指令的组件实例
    dir：指令的定义对象

vnode：代表绑定元素的底层 VNode
prevVnode：代表之前的渲染中指令所绑定元素的 VNode。仅在 beforeUpdate 和 updated 钩子中可用

*/
import { type Directive } from "vue";

// 挂载元素的DOM类型
type TheHostElement = HTMLElement;
// 指令值
type TheValue = Function; // 可以修改为其他类型
// 指令修饰符
type TheModifiers = "";
// 指令参数
type TheArg = "";

type ThisDirective = Directive<TheHostElement, TheValue, TheModifiers, TheArg>;

const directive: ThisDirective = {
  // 在绑定元素的 attribute 前, 或事件监听器应用前调用
  created(el, binding, vnode) { },
  // 在元素被插入到 DOM 前调用
  beforeMount(el, binding, vnode) { },
  // 在绑定元素的父组件
  // 及他自己的所有子节点都挂载完成后调用
  mounted(el, binding, vnode) { },
  // 绑定元素的父组件更新前调用
  beforeUpdate(el, binding, vnode, prevVnode) { },
  // 在绑定元素的父组件
  // 及他自己的所有子节点都更新后调用
  updated(el, binding, vnode, prevVnode) { },
  // 绑定元素的父组件卸载前调用
  beforeUnmount(el, binding, vnode) { },
  // 绑定元素的父组件卸载后调用
  unmounted(el, binding, vnode) { }
};

export default directive;

