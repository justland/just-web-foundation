// This file has been automatically migrated to valid ESM format by Storybook.
import type { StorybookConfig } from '@storybook/react-vite'
import { createRequire } from 'node:module'
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'

const __filename = fileURLToPath(import.meta.url)
const require = createRequire(import.meta.url)

/**
 * This function is used to resolve the absolute path of a package.
 * It is needed in projects that use Yarn PnP or are set up within a monorepo.
 */
function getAbsolutePath(value: string): any {
	return dirname(require.resolve(join(value, 'package.json')))
}
const config: StorybookConfig = {
	stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
	// staticDirs: [...getCodeEditorStaticDirs(__filename)],
	addons: [
		// getAbsolutePath('@storybook/addon-vitest'),
		// getAbsolutePath('storybook-addon-tag-badges'),
		// getAbsolutePath('@storybook-community/storybook-dark-mode'),
		// getAbsolutePath('@storybook/addon-docs'),
		// getAbsolutePath('storybook-addon-code-editor'),
		getAbsolutePath('storybook-addon-vis'),
		// {
		// 	name: getAbsolutePath('storybook-addon-vis'),
		// 	options: defineStorybookVisOptions({
		// 		visProjects: [
		// 			{
		// 				snapshotRootDir: '__vis__/linux',
		// 			},
		// 			{
		// 				snapshotRootDir: '__vis__/local',
		// 			},
		// 		],
		// 	}),
		// },
	],
	framework: {
		name: '@storybook/react-vite',
		options: {},
	},
	features: {
		backgrounds: true,
	},
}
export default config
