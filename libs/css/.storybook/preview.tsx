import { defineParameters } from '@repobuddy/storybook'
import { defineDarkModeParam } from '@repobuddy/storybook/storybook-dark-mode'
import type { Preview } from '@storybook/react-vite'

import '../src/tailwind.css'

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
		defineDarkModeParam({
			classTarget: 'html',
			stylePreview: true,
			darkClass: ['dark', 'bg-black', 'text-white'],
		}),
	),
}

export default preview
