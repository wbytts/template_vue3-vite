import {
  defineConfig,
  presetAttributify,
  presetIcons,
  presetTypography,
  presetUno,
  presetWebFonts,
  presetTagify,
  transformerDirectives,
  transformerVariantGroup,
  transformerCompileClass,
  transformerAttributifyJsx
} from 'unocss'
import presetRemToPx from '@unocss/preset-rem-to-px'

// 交互式文档： https://unocss.dev/interactive/
// TailwindCSS： https://www.tailwindcss.cn/

export default defineConfig({
  shortcuts: [
    // ...
  ],
  theme: {
    colors: {
      // ...
    }
  },
  presets: [
    presetRemToPx({ baseFontSize: 16 }), // 1rem == 16px
    presetUno(), // == @unocss/preset-wind + @unocss/preset-mini
    presetAttributify(), // 属性化预设
    presetIcons(), // 图标
    presetTypography(), // 排版
    presetWebFonts({
      fonts: {
        // ...
      }
    }),
    presetTagify({ prefix: 'uno-' })
  ],
  transformers: [
    transformerVariantGroup(), // 变体组
    transformerDirectives(), // 指令
    transformerCompileClass(),
    transformerAttributifyJsx({
      blocklist: [/text-[a-zA-Z]*/, 'text-5xl']
    })
  ]
})
