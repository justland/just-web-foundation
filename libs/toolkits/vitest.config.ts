import path, { join } from 'node:path'
import { fileURLToPath } from 'node:url'
import { browserTestPreset } from '@repobuddy/vitest/config'
import storybookTest from '@storybook/addon-vitest/vitest-plugin'
import tailwindcss from '@tailwindcss/vite'
import { storybookVis } from 'storybook-addon-vis/vitest-plugin'
import { mergeConfig } from 'vitest/config'
import config from './vite.config.js'

const dirname =
	typeof __dirname !== 'undefined' ? __dirname : path.dirname(fileURLToPath(import.meta.url))

export default mergeConfig(config, {
	esbuild: { jsx: 'automatic' },
	optimizeDeps: {
		include: [
			'react/jsx-dev-runtime',
			'@repobuddy/storybook',
			'@repobuddy/storybook/storybook-dark-mode',
			'dedent',
			'storybook-addon-code-editor',
			'zustand/vanilla',
			'jotai',
		],
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
		name: 'toolkits',
		setupFiles: ['./vitest.setup.ts'],
	},
})
