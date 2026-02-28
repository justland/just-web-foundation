import { defineParameters } from '@repobuddy/storybook'
import type { Preview } from '@storybook/react-vite'
import { defineDarkModeParam } from '@storybook-community/storybook-dark-mode'
import { setupMonaco } from 'storybook-addon-code-editor'

import './tailwind.css'
import './tailwind.repobuddy-storybook.css'
import { onMonacoLoad } from './code-editor.ts'

setupMonaco({ onMonacoLoad })

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
