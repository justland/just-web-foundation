import type { KnipConfig } from 'knip'

const config: KnipConfig = {
	ignoreDependencies: [
		// Hoisting issue
		'pathe',
		// For CI
		'playwright'
	],
	workspaces: {
		'apps/website': {
			entry: ['src/styles/global.css']
		}
	}
}

export default config
