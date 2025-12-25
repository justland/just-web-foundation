import { defineParameters } from '@repobuddy/storybook'
import { defineDarkModeParam } from '@repobuddy/storybook/storybook-dark-mode'
import type { Preview } from '@storybook/react-vite'

import '../tailwind.css'

const preview: Preview = {
	parameters: defineParameters(
		{
			docs: {
				codePanel: true,
			},
			options: {
				storySort: {
					order: ['Overview', '@just-web/css', '@just-web/types'],
				},
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
