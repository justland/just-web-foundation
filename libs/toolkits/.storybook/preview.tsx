import { defineParameters } from '@repobuddy/storybook'
import { withThemeByClassName } from '@storybook/addon-themes'
import type { Preview } from '@storybook/react-vite'

import '@repobuddy/storybook/styles.css'
import '../tailwind.css'

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
		// 	darkClass: ['dark', 'jwtk:bg-black', 'jwtk:text-white'],
		// }),
	),
	decorators: [
		withThemeByClassName({
			themes: {
				light: '',
				dark: 'dark jwtk:bg-black jwtk:text-white',
			},
			defaultTheme: 'light',
		}),
	],
}

export default preview
