// This file has been automatically migrated to valid ESM format by Storybook.
import type { StorybookConfig } from '@storybook/react-vite'

const config: StorybookConfig = {
	stories: ['../src/**/*.@(mdx|stories.tsx)',{
		titlePrefix: '@just-web/css',
		directory: '../../../libs/css',
		files: 'src/**/*.@(mdx|stories.tsx)',
	// },{
	// 	directory: '../../libs/types/src',
	// 	files: '**/*.@(mdx|stories.tsx)',
	// 	titlePrefix: '@just-web/types',
	}],
	// addons: [
	// 	'@storybook/addon-docs',
	// 	'@storybook/addon-themes',
	// 	'@storybook/addon-vitest',
	// 	'@storybook-community/storybook-dark-mode',
	// ],
	framework: {
		name: '@storybook/react-vite',
		options: {},
	},
}
export default config
