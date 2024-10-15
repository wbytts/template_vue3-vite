import { defineConfig } from 'unocss'
import {
  presetUno,
  presetIcons,
  presetWebFonts,
  presetAttributify,
  presetTypography,
  presetTagify,
  transformerVariantGroup,
  transformerDirectives,
  transformerCompileClass,
  transformerAttributifyJsx
} from 'unocss'
import presetRemToPx from '@unocss/preset-rem-to-px'
import presetLegacyCompat from '@unocss/preset-legacy-compat'
import byPreset from './src/styles/by-preset'

/*
pnpm add -D unocss @unocss/preset-legacy-compat @unocss/preset-rem-to-px  clsx
pnpm add @unocss/reset
*/

// https://unocss.dev/
export default defineConfig({
  presets: [
    // uno 默认预设
    // @unocss/preset-mini 基本预设，仅包含最基本的实用工具
    // @unocss/preset-wind 参考 TailWind/Windi CSS 预设。继承于preset-mini
    // @unocss/preset-uno 继承 preset-wind 和 preset-mini 两个预设
    // 该预设尝试提供流行的功能优先框架（包括 Tailwind CSS、Windi CSS、Bootstrap、Tachyons 等）的共同超集
    presetUno(),
    // 纯 CSS 图标预设
    // https://unocss.dev/presets/icons
    presetIcons({}),
    presetWebFonts({
      provider: 'none' // none 仅将字体视为系统字体
    }),
    presetTypography(),
    presetAttributify({
      prefix: 'un-', // 前缀 (默认 un-)
      prefixedOnly: false // 是否只处理带前缀的 (默认false)
    }),
    // 标签化
    // 将css样式作为HTML的标签使用
    presetTagify({ prefix: 'un-' }),
    // rem -> px 转换预设
    presetRemToPx(),
    // 传统兼容实用程序集
    // @ts-ignore
    presetLegacyCompat({
      commaStyleColorFunction: true // 将颜色函数【rgb() 和 hsl()】 从空格分隔转换为逗号分隔，以便更好地兼容旧版浏览器
    }),
    // 自定义 preset
    byPreset({})
  ],
  transformers: [
    // 为 UnoCSS 启用 Windi CSS 的 变体组特性
    transformerVariantGroup(),
    // 指令转换器: 启用指令转换器将支持 @apply、@screen 和 theme() 指令
    transformerDirectives(),
    // 将写在一个元素上的样式编译成一个类名
    transformerCompileClass(),
    // 主要作用于在jsx文件内写 属性化预设的样式
    transformerAttributifyJsx()
  ]
})
