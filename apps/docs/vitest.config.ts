import { browserTestPreset } from '@repobuddy/vitest/config'
import storybookTest from '@storybook/addon-vitest/vitest-plugin'
import { join } from 'node:path'
import { storybookVis } from 'storybook-addon-vis/vitest-plugin'
import { defineConfig } from 'vitest/config'

export default defineConfig({
	plugins: [
		storybookTest({
			configDir: join(import.meta.dirname, '.storybook'),
		}),
		storybookVis(),
		browserTestPreset({ includeGeneralTests: true }),
	],
	esbuild: { jsx: 'automatic' },
	optimizeDeps: {
		include: ['react/jsx-dev-runtime'],
	},
	test: {
		name: 'docs',
		setupFiles: ['./vitest.setup.ts'],
	},
})
