import '@unocss/reset/tailwind-compat.css' // Tailwind兼容版
import 'virtual:uno.css' // unocss 虚拟文件
import './styles/global.scss' // 全局样式
import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')
