import { defineDocsParam, StoryCard, showDocSource, withStoryCard } from '@repobuddy/storybook'
import type { Meta, StoryObj } from '@repobuddy/storybook/storybook-addon-tag-badges'
import dedent from 'dedent'
import { getRemToPxScale, rem2px } from '#just-web/toolkits'
import source from './get-rem-to-px-scale.ts?raw'

const meta = {
	title: 'units/getRemToPxScale',
	tags: ['func', 'version:next'],
	parameters: defineDocsParam({
		description: {
			component:
				"Returns the current document's rem-to-px scale (the pixel value of 1rem) by reading the root element's computed font size. In non-browser environments returns 16.",
		},
	}),
	render: () => <></>,
} satisfies Meta

export default meta

type Story = StoryObj<typeof meta>

export const BasicUsage: Story = {
	tags: ['use-case'],
	parameters: defineDocsParam({
		description: {
			story: 'Read the current document rem-to-px scale (root font size).',
		},
	}),
	decorators: [
		withStoryCard({
			content: (
				<>
					<p>
						<code>getRemToPxScale()</code> returns how many pixels 1rem equals in this document.
					</p>
					<p>This is typically the value of the browser's default font size setting.</p>
				</>
			),
		}),
		showDocSource({ placement: 'before', source: dedent`getRemToPxScale()` }),
	],
	render() {
		const scale = getRemToPxScale()
		return (
			<StoryCard title="Current rem-to-px scale" appearance="output">
				<pre>{scale}px per 1rem</pre>
			</StoryCard>
		)
	},
}

export const WithRem2px: Story = {
	name: 'with rem2px',
	tags: ['use-case'],
	parameters: defineDocsParam({
		description: {
			story: 'Use the scale as base for rem2px so conversions match the document.',
		},
	}),
	decorators: [
		withStoryCard(),
		showDocSource({
			placement: 'before',
			source: dedent`
				const base = getRemToPxScale()
				rem2px(1, { base })
				rem2px(1.5, { base })
			`,
		}),
	],
	render() {
		const base = getRemToPxScale()
		const examples = [1, 1.5, 2, 0.5] as const
		return (
			<StoryCard appearance="output">
				<pre className="text-sm">
					{examples.map((rem) => `${rem}rem → ${rem2px(rem, { base })}px`).join('\n')}
				</pre>
			</StoryCard>
		)
	},
}

export const Source: Story = {
	tags: ['source'],
	parameters: defineDocsParam({ source: { code: source } }),
	decorators: [showDocSource()],
}
