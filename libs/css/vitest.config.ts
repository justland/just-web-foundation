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
			'storybook-addon-code-editor'
		]
	},
	plugins: [
		tailwindcss(),
		storybookTest({
			configDir: join(dirname, '.storybook')
		}),
		storybookVis(),
		browserTestPreset({ includeGeneralTests: true })
	],
	test: {
		name: 'css',
		setupFiles: ['./vitest.setup.ts'],
		// Floors, not targets. Calibrated a few points under what every leg of the CI
		// matrix reports (92.07 / 94.36 / 87.17 / 93.4, identical on ubuntu, macos and
		// windows across both node versions) so a real regression fails `pnpm verify`
		// while normal drift does not.
		coverage: {
			thresholds: { statements: 90, branches: 92, functions: 85, lines: 91 }
		}
	}
})
