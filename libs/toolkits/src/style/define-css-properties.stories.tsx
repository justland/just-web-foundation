import { defineDocsParam, StoryCard, showDocSource, withStoryCard } from '@repobuddy/storybook'
import type { Meta, StoryObj } from '@repobuddy/storybook/storybook-addon-tag-badges'
import dedent from 'dedent'
import { expect } from 'storybook/test'
import { defineCSSProperties } from '#just-web/toolkits'
import source from './define-css-properties.ts?raw'

const meta = {
	title: 'style/defineCSSProperties',
	tags: ['func', 'version:next'],
	parameters: defineDocsParam({
		description: {
			component:
				'Helper function to define CSS properties with type checking, including custom properties (--*).',
		},
	}),
	render: () => <></>,
} satisfies Meta<typeof defineCSSProperties>

export default meta

type Story = StoryObj<typeof meta>

export const Specification: Story = {
	tags: ['source'],
	parameters: defineDocsParam({
		source: { code: source },
	}),
	decorators: [
		withStoryCard({
			content: (
				<p>
					<code>defineCSSProperties</code> is a helper function to define <code>CSSProperties</code>
				</p>
			),
		}),
		showDocSource(),
	],
}

export const WithCustomProperties: Story = {
	tags: ['use-case'],
	parameters: defineDocsParam({
		source: {
			code: dedent`const style = defineCSSProperties({
				color: 'red',
				fontSize: '16px',
				'--custom-property': '10px'
			})`,
		},
	}),
	decorators: [
		withStoryCard({
			content: (
				<p>
					A helper function to define <code>CSSProperties</code> with custom properties.
				</p>
			),
		}),
		showDocSource({
			placement: 'before',
			source: dedent`const style = defineCSSProperties({
				color: 'red',
				fontSize: '16px',
				'--custom-property': '10px'
			})`,
		}),
	],
	render() {
		const style = defineCSSProperties({
			color: 'red',
			fontSize: '16px',
			'--custom-property': '10px',
		})
		return <StoryCard appearance="output">{JSON.stringify(style, null, 2)}</StoryCard>
	},
	play: async () => {
		const style = defineCSSProperties({
			color: 'red',
			fontSize: '16px',
			'--custom-property': '10px',
		})
		await expect(style).toEqual({
			color: 'red',
			fontSize: '16px',
			'--custom-property': '10px',
		})
	},
}
