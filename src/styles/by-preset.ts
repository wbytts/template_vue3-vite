import { definePreset } from 'unocss'
import type { Preset } from 'unocss'

interface ByPresetOptions {
  prefix?: string
}

export default definePreset((options?: ByPresetOptions): Preset => {
  const prefix = options?.prefix ?? 'by-'

  return {
    name: 'by-preset',
    rules: [],
    variants: []
  }
})
