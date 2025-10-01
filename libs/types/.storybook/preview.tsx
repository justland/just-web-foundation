import { defineParameters } from '@repobuddy/storybook'
import {
	createDarkModeDocsContainer,
	defineDarkModeParam,
	withDarkMode,
} from '@repobuddy/storybook/storybook-dark-mode'
import type { Preview } from '@storybook/react-vite'

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
				container: createDarkModeDocsContainer(),
			},
		},
		defineDarkModeParam({
			classTarget: 'html',
			stylePreview: true,
			darkClass: 'dark',
		}),
	),
	decorators: withDarkMode({
		bodyClass: 'bg-white text-black dark:bg-black dark:text-white',
	}),
}

export default preview
