import { defineDocsParam, showSource, withStoryCard } from '@repobuddy/storybook'
import type { Meta, StoryObj } from '@repobuddy/storybook/storybook-addon-tag-badges'
import dedent from 'dedent'
import source from './color-scheme.types.ts?raw'

const meta: Meta = {
	title: 'color-scheme/ColorScheme',
	tags: ['type', 'version:2.1'],
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
					<code>ColorScheme</code> is a string literal union of the two values from the{' '}
					<code>prefers-color-scheme</code> media feature. Per{' '}
					<a
						href="https://drafts.csswg.org/mediaqueries-5/#prefers-color-scheme"
						target="_blank"
						rel="noopener noreferrer"
					>
						Media Queries Level 5 § prefers-color-scheme
					</a>
					, <code>light</code> and <code>dark</code> are the only valid values exposed by the{' '}
					<code>prefers-color-scheme</code> media feature.
				</p>
			)
		}),
		showSource()
	]
}

export const BasicUsage: Story = {
	tags: ['use-case'],
	parameters: defineDocsParam({
		description: {
			story: 'Both values are valid. The browser/OS determines the actual preference.'
		},
		source: {
			code: dedent`
				import type { ColorScheme } from '@just-web/toolkits'

				const light: ColorScheme = 'light'
				const dark: ColorScheme = 'dark'
			`
		}
	}),
	decorators: [
		withStoryCard({
			content: (
				<p>
					<code>ColorScheme</code> has exactly two valid values: <code>light</code> and{' '}
					<code>dark</code>. Use it when typing function parameters or return values related to
					color scheme.
				</p>
			)
		}),
		showSource()
	]
}
