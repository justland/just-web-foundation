import { defineDocsParam, showSource, withStoryCard } from '@repobuddy/storybook'
import type { Meta, StoryObj } from '@repobuddy/storybook/storybook-addon-tag-badges'
import dedent from 'dedent'
import source from './reduced-transparency.types.ts?raw'

const meta: Meta = {
	title: 'reduced-transparency/ReducedTransparency',
	tags: ['type', 'version:3.5'],
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
					<code>ReducedTransparency</code> is a string literal union of the two values from the{' '}
					<code>prefers-reduced-transparency</code> media feature. Per{' '}
					<a
						href="https://drafts.csswg.org/mediaqueries-5/#prefers-reduced-transparency"
						target="_blank"
						rel="noopener noreferrer"
					>
						Media Queries Level 5 § prefers-reduced-transparency
					</a>
					, <code>no-preference</code> and <code>reduce</code> are the only valid values exposed by
					the <code>prefers-reduced-transparency</code> media feature. <code>no-preference</code> is
					a real state: the user has not asked for reduced transparency.
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
				import type { ReducedTransparency } from '@just-web/toolkits'

				const noPreference: ReducedTransparency = 'no-preference'
				const reduce: ReducedTransparency = 'reduce'
			`
		}
	}),
	decorators: [
		withStoryCard({
			content: (
				<p>
					<code>ReducedTransparency</code> has exactly two valid values: <code>no-preference</code>{' '}
					and <code>reduce</code>. Use it when typing function parameters or return values related
					to reduced transparency preference.
				</p>
			)
		}),
		showSource()
	]
}
