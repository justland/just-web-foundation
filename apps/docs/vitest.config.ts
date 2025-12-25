import { browserTestPreset } from '@repobuddy/vitest/config'
import storybookTest from '@storybook/addon-vitest/vitest-plugin'
import { join } from 'node:path'
import { storybookVis } from 'storybook-addon-vis/vitest-plugin'
import { mergeConfig } from 'vitest/config'
import config from './vite.config.js'

export default mergeConfig(config, {
	plugins: [
		storybookTest({
			configDir: join(import.meta.dirname, '.storybook'),
		}),
		storybookVis(),
		browserTestPreset({ includeGeneralTests: true }),
	],
	test: {
		name: 'docs',
		setupFiles: ['./vitest.setup.ts'],
	},
})
