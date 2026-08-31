import { defineDocsParam, showSource, withStoryCard } from '@repobuddy/storybook'
import type { Meta, StoryObj } from '@repobuddy/storybook/storybook-addon-tag-badges'
import dedent from 'dedent'
import source from './reduced-motion.types.ts?raw'

const meta: Meta = {
	title: 'reduced-motion/ReducedMotion',
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
					<code>ReducedMotion</code> is a string literal union of the two values from the{' '}
					<code>prefers-reduced-motion</code> media feature. Per{' '}
					<a
						href="https://drafts.csswg.org/mediaqueries-5/#prefers-reduced-motion"
						target="_blank"
						rel="noopener noreferrer"
					>
						Media Queries Level 5 § prefers-reduced-motion
					</a>
					, <code>no-preference</code> and <code>reduce</code> are the only valid values exposed by
					the <code>prefers-reduced-motion</code> media feature. <code>no-preference</code> is a
					real state: the user has not asked for reduced motion.
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
				import type { ReducedMotion } from '@just-web/toolkits'

				const noPreference: ReducedMotion = 'no-preference'
				const reduce: ReducedMotion = 'reduce'
			`
		}
	}),
	decorators: [
		withStoryCard({
			content: (
				<p>
					<code>ReducedMotion</code> has exactly two valid values: <code>no-preference</code> and{' '}
					<code>reduce</code>. Use it when typing function parameters or return values related to
					reduced motion preference.
				</p>
			)
		}),
		showSource()
	]
}
