import "@unocss/reset/tailwind-compat.css"; // 样式重置：Tailwind兼容版
import "virtual:uno.css"; // unocss 虚拟文件
import "./default.scss";
import './by-preset'
import './global/ink-style.scss'  // 引入水墨风格样式

//! VueFlow
/* VueFlow: 引入必要的样式(不引入无法工作) */
import "@vue-flow/core/dist/style.css";
/* VueFlow: 引入默认主题(可选且推荐) */
import "@vue-flow/core/dist/theme-default.css";

// 导入字体
const link = document.createElement('link')
link.rel = 'stylesheet'
link.href = 'https://fonts.googleapis.com/css2?family=Ma+Shan+Zheng&display=swap'
document.head.appendChild(link)
