import type { StorybookConfig } from '@storybook/react-vite'
import { dirname, join } from 'node:path'
import { getCodeEditorStaticDirs } from 'storybook-addon-code-editor/getStaticDirs'
import { defineStorybookVisOptions } from 'storybook-addon-vis'

/**
 * This function is used to resolve the absolute path of a package.
 * It is needed in projects that use Yarn PnP or are set up within a monorepo.
 */
function getAbsolutePath(value: string): any {
	return dirname(require.resolve(join(value, 'package.json')))
}
const config: StorybookConfig = {
	stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
	staticDirs: [...getCodeEditorStaticDirs(__filename)],
	addons: [
		getAbsolutePath('storybook-addon-code-editor'),
		getAbsolutePath('@storybook/addon-vitest'),
		getAbsolutePath('storybook-addon-tag-badges'),
		getAbsolutePath('storybook-dark-mode2'),
		getAbsolutePath('@storybook/addon-docs'),
		{
			name: getAbsolutePath('storybook-addon-vis'),
			options: defineStorybookVisOptions({
				visProjects: [
					{
						snapshotRootDir: '__vis__/linux',
					},
					{
						snapshotRootDir: '__vis__/local',
					},
				],
			}),
		},
	],
	framework: {
		name: getAbsolutePath('@storybook/react-vite'),
		options: {},
	},
	features: {
		backgrounds: true,
	},
}
export default config
