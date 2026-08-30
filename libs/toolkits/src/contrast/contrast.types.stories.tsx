import { defineDocsParam, showSource, withStoryCard } from '@repobuddy/storybook'
import type { Meta, StoryObj } from '@repobuddy/storybook/storybook-addon-tag-badges'
import dedent from 'dedent'
import source from './contrast.types.ts?raw'

const meta: Meta = {
	title: 'contrast/Contrast',
	tags: ['type', 'version:next'],
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
					<code>Contrast</code> is a string literal union of the four values from the{' '}
					<code>prefers-contrast</code> media feature. Per{' '}
					<a
						href="https://drafts.csswg.org/mediaqueries-5/#prefers-contrast"
						target="_blank"
						rel="noopener noreferrer"
					>
						Media Queries Level 5 § prefers-contrast
					</a>
					, <code>no-preference</code>, <code>less</code>, <code>more</code> and <code>custom</code>{' '}
					are the only valid values exposed by the <code>prefers-contrast</code> media feature.{' '}
					<code>no-preference</code> is a real state: the user has not asked for a contrast
					adjustment.
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
			story: 'All four values are valid. The browser/OS determines the actual preference.'
		},
		source: {
			code: dedent`
				import type { Contrast } from '@just-web/toolkits'

				const noPreference: Contrast = 'no-preference'
				const less: Contrast = 'less'
				const more: Contrast = 'more'
				const custom: Contrast = 'custom'
			`
		}
	}),
	decorators: [
		withStoryCard({
			content: (
				<p>
					<code>Contrast</code> has exactly four valid values: <code>no-preference</code>,{' '}
					<code>less</code>, <code>more</code> and <code>custom</code>. Use it when typing function
					parameters or return values related to contrast preference.
				</p>
			)
		}),
		showSource()
	]
}
