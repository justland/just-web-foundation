import type { KnipConfig } from 'knip'

const config: KnipConfig = {
	ignoreDependencies: [
		// bug? should detect
		'@vitest/coverage-v8',
		// Hoisting issue
		'pathe',
		// For CI
		'playwright'
	],
	paths: {
		'#just-web/toolkits': ['libs/toolkits/src/index.ts'],
		'#just-web/toolkits/react': ['libs/toolkits/src/react.ts'],
		'#just-web/toolkits/theme': ['libs/toolkits/src/theme.ts']
	},
	workspaces: {
		'apps/website': {
			entry: ['src/styles/global.css']
		}
	}
}

export default config
