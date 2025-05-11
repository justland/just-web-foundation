import { configDefaults } from '@repobuddy/vitest/config'
import { defineConfig } from 'vitest/config'

export default defineConfig({
	test: {
		coverage: {
			include: configDefaults.include.source,
			exclude: configDefaults.exclude.vitestDefault,
		},
		workspace: ['./libs/css/vitest.config.ts', './apps/docs/vitest.config.ts'],
	},
})
