import { defineDocsParam, showSource, withStoryCard } from '@repobuddy/storybook'
import type { Meta, StoryObj } from '@repobuddy/storybook/storybook-addon-tag-badges'
import dedent from 'dedent'
import source from './reduced-data.types.ts?raw'

const meta: Meta = {
	title: 'reduced-data/ReducedData',
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
					<code>ReducedData</code> is a string literal union of the two values from the{' '}
					<code>prefers-reduced-data</code> media feature. Per{' '}
					<a
						href="https://drafts.csswg.org/mediaqueries-5/#prefers-reduced-data"
						target="_blank"
						rel="noopener noreferrer"
					>
						Media Queries Level 5 § prefers-reduced-data
					</a>
					, <code>no-preference</code> and <code>reduce</code> are the only valid values exposed by
					the <code>prefers-reduced-data</code> media feature. <code>no-preference</code> is a real
					state: the user has not asked for reduced data.
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
				import type { ReducedData } from '@just-web/toolkits'

				const noPreference: ReducedData = 'no-preference'
				const reduce: ReducedData = 'reduce'
			`
		}
	}),
	decorators: [
		withStoryCard({
			content: (
				<p>
					<code>ReducedData</code> has exactly two valid values: <code>no-preference</code> and{' '}
					<code>reduce</code>. Use it when typing function parameters or return values related to
					reduced data preference.
				</p>
			)
		}),
		showSource()
	]
}
