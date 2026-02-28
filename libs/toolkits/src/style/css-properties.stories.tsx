import { defineDocsParam, showDocSource, withStoryCard } from '@repobuddy/storybook'
import type { Meta, StoryObj } from '@repobuddy/storybook/storybook-addon-tag-badges'
import dedent from 'dedent'
import type * as toolkits from '#just-web/toolkits'
import source from './css-properties.ts?raw'

const meta: Meta<toolkits.CSSProperties> = {
	title: 'style/CSSProperties',
	tags: ['type', 'version:next', '!test'],
	render: () => <></>,
}

export default meta

export const Specification: StoryObj = {
	tags: ['source'],
	parameters: defineDocsParam({
		source: { code: source },
	}),
	decorators: [
		withStoryCard({
			content: (
				<p>
					<code>CSSProperties</code> extends CSS properties to support custom properties (
					<code>--*</code>).
				</p>
			),
		}),
		showDocSource(),
	],
}

export const SupportCustomProperties: StoryObj = {
	tags: ['use-case'],
	parameters: defineDocsParam({
		source: {
			code: dedent`let style: CSSProperties = {
				color: 'red',
				'--custom-property': '10px',
			}
			`,
		},
	}),
	decorators: [
		withStoryCard({
			content: (
				<p>
					Use standard properties and custom properties with the <code>--</code> prefix.
				</p>
			),
		}),
		showDocSource({ placement: 'before' }),
	],
}
