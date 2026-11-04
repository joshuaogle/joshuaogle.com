import { fileURLToPath } from 'node:url'
import { defineConfig } from 'vitest/config'

// The same @/ alias as tsconfig.json, so tests can import modules that use it
export default defineConfig({
  resolve: {
    alias: { '@': fileURLToPath(new URL('./', import.meta.url)) },
  },
  test: {
    exclude: ['node_modules/**', '.claude/**'],
  },
})
