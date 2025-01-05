import { fileURLToPath } from 'node:url'
import { mergeConfig, defineConfig, configDefaults } from 'vitest/config'
import viteConfig from './vite.config'

// https://cn.vitest.dev/
export default defineConfig((...args) => {
  return mergeConfig(
    viteConfig(...args),
    defineConfig({
      test: {
        environment: 'jsdom',
        exclude: [...configDefaults.exclude, 'e2e/**'],
        root: fileURLToPath(new URL('./', import.meta.url)),
        includeTaskLocation: true
      }
    })
  )
})
