import type { KnipConfig } from 'knip'

const config: KnipConfig = {
	ignoreDependencies: [
		// bug? should detect
		'@vitest/coverage-v8',
		// Hoisting issue
		'pathe',
		// For CI
		'playwright'
	]
}

export default config
