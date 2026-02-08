import { defineParameters } from '@repobuddy/storybook'
import { withThemeByClassName } from '@storybook/addon-themes'
import type { Preview } from '@storybook/react-vite'

import '../tailwind.css'
import './tailwind.repobuddy-storybook.css'

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
