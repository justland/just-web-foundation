import { buddyConfigDefaults } from '@repobuddy/vitest/config'
import { defineConfig } from 'vitest/config'

export default defineConfig({
	test: {
		coverage: {
			include: buddyConfigDefaults.include.source,
			exclude: buddyConfigDefaults.exclude.vitestDefault,
		},
		projects: ['./libs/css/vitest.config.ts', './apps/docs/vitest.config.ts'],
	},
})
