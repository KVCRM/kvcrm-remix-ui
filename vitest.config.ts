import { resolve } from 'path'
import { configDefaults, defineConfig } from 'vitest/config'

export default defineConfig({
  resolve: {
    alias: {
      '~': resolve(__dirname, './app'),
    },
  },
  test: {
    coverage: {
      exclude: [],
      reporter: ['text', 'html', 'lcov', 'cobertura'],
    },
    exclude: [...configDefaults.exclude, 'tests/**'],
    globals: true,
    setupFiles: ['./testSetup.tsx'],
  },
})
