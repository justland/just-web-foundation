import { join } from 'node:path'
import { browserTestPreset } from '@repobuddy/vitest/config'
import storybookTest from '@storybook/addon-vitest/vitest-plugin'
import { mergeConfig } from 'vitest/config'
import config from './vite.config.js'

export default mergeConfig(config, {
	plugins: [
		storybookTest({
			configDir: join(import.meta.dirname, '.storybook'),
		}),
		browserTestPreset({ includeGeneralTests: true }),
	],
	test: {
		name: 'docs',
		setupFiles: ['./vitest.setup.ts'],
	},
})
