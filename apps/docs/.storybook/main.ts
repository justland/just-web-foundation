import type { StorybookConfig } from '@storybook/react-vite'
import { dirname, join } from 'node:path'

/**
 * This function is used to resolve the absolute path of a package.
 * It is needed in projects that use Yarn PnP or are set up within a monorepo.
 */
function getAbsolutePath(value: string): any {
	return dirname(require.resolve(join(value, 'package.json')))
}
const config: StorybookConfig = {
	stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
	addons: [
		getAbsolutePath('@storybook/addon-docs'),
		getAbsolutePath('@storybook/addon-themes'),
		getAbsolutePath('@storybook/addon-vitest'),
		getAbsolutePath('storybook-dark-mode2'),
	],
	framework: {
		name: getAbsolutePath('@storybook/react-vite'),
		options: {},
	},
	features: {
		backgroundsStoryGlobals: true,
	},
	refs: (_config, { configType }) => {
		if (configType === 'PRODUCTION') {
			return {
				'@just-web/css': {
					title: '@just-web/css',
					url: 'https://justland.github.io/just-web-foundation/css',
				},
				'@just-web/types': {
					title: '@just-web/types',
					url: 'https://justland.github.io/just-web-foundation/types',
				},
			}
		}
		return {
			'@just-web/css': {
				title: '@just-web/css',
				url: 'http://localhost:6206',
			},
			'@just-web/types': {
				title: '@just-web/types',
				url: 'http://localhost:6208',
			},
		}
	},
}
export default config
