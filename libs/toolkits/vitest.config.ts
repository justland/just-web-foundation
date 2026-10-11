import { join } from 'node:path'
import { browserTestPreset } from '@repobuddy/vitest/config'
import storybookTest from '@storybook/addon-vitest/vitest-plugin'
import tailwindcss from '@tailwindcss/vite'
import { storybookVis } from 'storybook-addon-vis/vitest-plugin'
import { mergeConfig } from 'vitest/config'
import config from './vite.config.js'

export default mergeConfig(config, {
	esbuild: { jsx: 'automatic' },
	optimizeDeps: {
		include: [
			'@testing-library/react',
			'react/jsx-dev-runtime',
			'@repobuddy/storybook',
			'@repobuddy/storybook/storybook-dark-mode',
			'dedent',
			'storybook-addon-code-editor',
			'zustand/vanilla',
			'jotai'
		]
	},
	plugins: [
		tailwindcss(),
		storybookTest({
			configDir: join(import.meta.dirname, '.storybook')
		}),
		storybookVis(),
		// @repobuddy/vitest 3 marks this preset `enforce: 'pre'`, so the Storybook plugin
		// clears its `test.include` and the general tests stop running. Run it after the
		// Storybook plugin, as 2.x did, so its globs merge with the stories.
		{ ...browserTestPreset({ includeGeneralTests: true }), enforce: undefined }
	],
	test: {
		name: 'toolkits',
		setupFiles: ['./vitest.setup.ts'],
		// Floors, not targets. Calibrated a few points under what every leg of the CI
		// matrix reports (85.85 / 73.19 / 93.91 / 89.59, identical on ubuntu, macos and
		// windows across both node versions) so a real regression fails `pnpm verify`
		// while normal drift does not.
		coverage: {
			thresholds: { statements: 83, branches: 71, functions: 91, lines: 87 }
		}
	}
})
