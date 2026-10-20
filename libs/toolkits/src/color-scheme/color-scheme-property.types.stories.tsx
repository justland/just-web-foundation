import { defineDocsParam, showSource, withStoryCard } from '@repobuddy/storybook'
import type { Meta, StoryObj } from '@repobuddy/storybook/storybook-addon-tag-badges'
import dedent from 'dedent'
import source from './color-scheme-property.types.ts?raw'

const meta: Meta = {
	title: 'color-scheme/ColorSchemePropertyValue',
	tags: ['type', 'version:4.1'],
	render: () => <></>
}

export default meta

type Story = StoryObj<typeof meta>

export const Specification: Story = {
	tags: ['source'],
	parameters: defineDocsParam({
		source: { code: source }
	}),
	decorators: [
		withStoryCard({
			content: (
				<p>
					<code>ColorSchemePropertyValue</code> lists the values of the CSS{' '}
					<code>color-scheme</code> property. It is wider than <code>ColorScheme</code>, which holds
					the two values of the <code>prefers-color-scheme</code> media feature. See{' '}
					<a
						href="https://drafts.csswg.org/css-color-adjust-1/#color-scheme-prop"
						target="_blank"
						rel="noopener noreferrer"
					>
						CSS Color Adjustment Level 1 § color-scheme
					</a>
					.
				</p>
			)
		}),
		showSource()
	]
}

export const BasicUsage: Story = {
	tags: ['use-case'],
	parameters: defineDocsParam({
		source: {
			code: dedent`
				import type { ColorSchemePropertyValue } from '@just-web/toolkits'

				const colorSchemes: Record<string, ColorSchemePropertyValue> = {
					system: 'light dark',
					print: 'only light'
				}
				element.style.colorScheme = colorSchemes[theme]
			`
		}
	}),
	decorators: [
		withStoryCard({
			content: (
				<p>
					Use it to type a value you write to <code>color-scheme</code>, such as a map from theme
					keys to schemes.
				</p>
			)
		}),
		showSource()
	]
}
