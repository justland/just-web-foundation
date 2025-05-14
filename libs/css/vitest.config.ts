import { browserTestPreset } from '@repobuddy/vitest/config'
import storybookTest from '@storybook/experimental-addon-test/vitest-plugin'
import tailwindcss from '@tailwindcss/vite'
import path, { join } from 'node:path'
import { fileURLToPath } from 'node:url'
import { storybookVis } from 'storybook-addon-vis/vitest-plugin'
import { defineConfig } from 'vitest/config'

const dirname = typeof __dirname !== 'undefined' ? __dirname : path.dirname(fileURLToPath(import.meta.url))

export default defineConfig({
	esbuild: { jsx: 'automatic' },
	optimizeDeps: {
		include: ['react/jsx-dev-runtime', '@repobuddy/storybook', 'dedent', 'storybook-addon-code-editor'],
	},
	plugins: [
		tailwindcss(),
		storybookTest({
			configDir: join(dirname, '.storybook'),
		}),
		storybookVis(),
		browserTestPreset({ includeGeneralTests: true }),
	],
	test: {
		name: 'css',
		setupFiles: ['./vitest.setup.ts'],
	},
})
