import { defineDocsParam } from '@repobuddy/storybook'
import type { Meta, StoryObj } from '@storybook/react-vite'
import dedent from 'dedent'
import { makeLiveEditStory } from 'storybook-addon-code-editor'
import * as css from '../index.ts'

export default {
	title: 'props/StyleProps',
	tags: ['autodocs', 'new', 'version:1.0.0'],
	render: () => <></>,
} satisfies Meta

export const Example: StoryObj = {
	tags: ['!test', 'editor'],
	parameters: defineDocsParam({
		description: {
			story:
				'`style` prop with extended `CSSProperties` type to support custom properties. This is useful when composing component props',
		},
		source: {
			code: dedent`
			import type { StyleProps } from '@just-web/css'

			type MyCompProps = PropsWithChildren<StyleProps & OtherProps>

			const MyComponent = ({ style, children }: MyCompProps) => {
				return <div style={style}>{children}</div>
			}

			export default () => <MyComponent style={{ color: 'red' }}>Hello in red</MyComponent>
			`,
		},
	}),
}

makeLiveEditStory(Example, {
	availableImports: {
		'@just-web/css': css,
	},
	code: Example.parameters?.['docs']?.['source']?.code,
})
