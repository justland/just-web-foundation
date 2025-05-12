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
		getAbsolutePath('@storybook/addon-essentials'),
		getAbsolutePath('storybook-addon-code-editor'),
		getAbsolutePath('@storybook/theming'),
		getAbsolutePath('@storybook/addon-storysource'),
		getAbsolutePath('@storybook/experimental-addon-test'),
		getAbsolutePath('storybook-addon-tag-badges'),
		getAbsolutePath('storybook-dark-mode'),
	],
	framework: {
		name: getAbsolutePath('@storybook/react-vite'),
		options: {},
	},
	features: {
		backgroundsStoryGlobals: true,
	},
}
export default config
