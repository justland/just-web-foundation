// This file has been automatically migrated to valid ESM format by Storybook.
import { fileURLToPath } from 'node:url'
import type { StorybookConfig } from '@storybook/react-vite'
import { getCodeEditorStaticDirs } from 'storybook-addon-code-editor/getStaticDirs'

const __filename = fileURLToPath(import.meta.url)

const config: StorybookConfig = {
	stories: [
		'../src/**/*.@(mdx|stories.tsx)',
		{
			titlePrefix: '@just-web/css',
			directory: '../../../libs/css',
			files: 'src/**/*.@(mdx|stories.tsx)'
		},
		{
			titlePrefix: '@just-web/types',
			directory: '../../../libs/types',
			files: 'src/**/*.@(mdx|stories.tsx)'
		},
		{
			titlePrefix: '@just-web/toolkits',
			directory: '../../../libs/toolkits',
			files: 'src/**/*.@(mdx|stories.tsx)'
		}
	],
	staticDirs: [...getCodeEditorStaticDirs(__filename)],
	addons: [
		'@storybook/addon-docs',
		'@storybook/addon-themes',
		'@storybook-community/storybook-dark-mode',
		'storybook-addon-tag-badges',
		'storybook-addon-code-editor'
	],
	framework: {
		name: '@storybook/react-vite',
		options: {}
	},
	tags: {
		unit: {
			defaultFilterSelection: 'exclude'
		}
	}
}
export default config
