// This file has been automatically migrated to valid ESM format by Storybook.
import type { StorybookConfig } from '@storybook/react-vite'

const config: StorybookConfig = {
	stories: [
		'../src/**/*.@(mdx|stories.tsx)',
		{
			titlePrefix: '@just-web/css',
			directory: '../../../libs/css',
			files: 'src/**/*.@(mdx|stories.tsx)',
		},
		{
			titlePrefix: '@just-web/types',
			directory: '../../../libs/types',
			files: 'src/**/*.@(mdx|stories.tsx)',
		},
		{
			titlePrefix: '@just-web/toolkits',
			directory: '../../../libs/toolkits',
			files: 'src/**/*.@(mdx|stories.tsx)',
		},
	],
	addons: [
		'@storybook/addon-docs',
		'@storybook/addon-themes',
		'@storybook-community/storybook-dark-mode',
		'@storybook/addon-vitest',
	],
	framework: {
		name: '@storybook/react-vite',
		options: {},
	},
}
export default config
