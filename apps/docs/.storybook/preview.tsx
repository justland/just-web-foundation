import { defineParameters } from '@repobuddy/storybook'
import { defineDarkModeParam } from '@repobuddy/storybook/storybook-dark-mode'
import type { Preview } from '@storybook/react-vite'
import { setupMonaco } from 'storybook-addon-code-editor'
import { onMonacoLoad } from '../../../libs/toolkits/.storybook/code-editor.ts'

import './tailwind.css'
import './tailwind.repobuddy-storybook.css'

setupMonaco({ onMonacoLoad })

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
