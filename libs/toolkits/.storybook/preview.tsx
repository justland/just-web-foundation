import { defineParameters } from '@repobuddy/storybook'
import { withThemeByClassName } from '@storybook/addon-themes'
import type { Preview } from '@storybook/react-vite'
import { setupMonaco } from 'storybook-addon-code-editor'
import ToolkitTypes from '../.editor/just_web_toolkits/index.d.mts?raw'
import RepobuddyStorybookTypes from '../.editor/repobuddy_storybook/index.d.mts?raw'
import TypePlusTypes from '../.editor/type_plus/index.d.mts?raw'

import './tailwind.css'
import './tailwind.repobuddy-storybook.css'

setupMonaco({
	onMonacoLoad(monaco) {
		monaco.languages.typescript.typescriptDefaults.setDiagnosticsOptions({
			noSemanticValidation: false,
			noSyntaxValidation: false,
		})
		monaco.languages.typescript.typescriptDefaults.addExtraLib(
			ToolkitTypes,
			'file:///node_modules/@just-web/toolkits/index.d.ts',
		)
		monaco.languages.typescript.typescriptDefaults.addExtraLib(
			RepobuddyStorybookTypes,
			'file:///node_modules/@repobuddy/storybook/index.d.ts',
		)
		monaco.languages.typescript.typescriptDefaults.addExtraLib(
			TypePlusTypes,
			'file:///node_modules/type-plus/index.d.ts',
		)
	},
})

const preview: Preview = {
	parameters: defineParameters(
		{
			backgrounds: { disable: true },
			controls: {
				matchers: {
					color: /(background|color)$/i,
					date: /Date$/i,
				},
			},
			docs: {
				codePanel: true,
			},
		},

		// defineDarkModeParam({
		// 	classTarget: 'html',
		// 	stylePreview: true,
		// 	darkClass: ['dark', 'bg-black', 'text-white'],
		// }),
	),
	decorators: [
		withThemeByClassName({
			themes: {
				light: '',
				dark: 'dark bg-black text-white',
			},
			defaultTheme: 'light',
		}),
	],
}

export default preview
