import { fileURLToPath } from 'node:url'
import type { StorybookConfig } from '@storybook/react-vite'
import { getCodeEditorStaticDirs } from 'storybook-addon-code-editor/getStaticDirs'
import { defineStorybookVis } from 'storybook-addon-vis/node'

const __filename = fileURLToPath(import.meta.url)

const config: StorybookConfig = {
	stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
	staticDirs: [...getCodeEditorStaticDirs(__filename)],
	addons: [
		'@storybook/addon-docs',
		'@storybook/addon-vitest',
		'@storybook-community/storybook-dark-mode',
		'storybook-addon-tag-badges',
		'storybook-addon-code-editor',
		defineStorybookVis({
			visProjects: [
				{
					snapshotRootDir: '__vis__/linux'
				},
				{
					snapshotRootDir: '__vis__/local'
				}
			]
		})
	],
	framework: {
		name: '@storybook/react-vite',
		options: {}
	},
	features: {
		backgrounds: true
	}
}
export default config
