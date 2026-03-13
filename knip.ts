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
	workspaces: {
		'apps/website': {
			entry: ['src/styles/global.css']
		},
		'libs/toolkits': {
			paths: {
				'#just-web/toolkits': ['src/index.ts'],
				'#just-web/toolkits/react': ['src/react.ts'],
				'#just-web/toolkits/theme': ['src/theme.ts']
			}
		}
	}
}

export default config
