// This file has been automatically migrated to valid ESM format by Storybook.

import { fileURLToPath } from 'node:url'
import type { StorybookConfig } from '@storybook/react-vite'
import { getCodeEditorStaticDirs } from 'storybook-addon-code-editor/getStaticDirs'

const __filename = fileURLToPath(import.meta.url)

const config: StorybookConfig = {
	stories: ['../src/**/*.@(mdx|stories.tsx)'],
	staticDirs: [...getCodeEditorStaticDirs(__filename)],
	addons: [
		'@storybook/addon-docs',
		'@storybook/addon-vitest',
		'@storybook-community/storybook-dark-mode',
		'storybook-addon-code-editor',
		'storybook-addon-tag-badges'
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
