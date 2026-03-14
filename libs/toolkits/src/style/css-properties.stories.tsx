import type * as toolkits from '@just-web/toolkits'
import type { CSSProperties } from '@just-web/toolkits'
import { defineDocsParam, showSource, withStoryCard } from '@repobuddy/storybook'
import type { Meta, StoryObj } from '@repobuddy/storybook/storybook-addon-tag-badges'
import dedent from 'dedent'
import type { CSSProperties as ReactCSSProperties } from 'react'
import { expect } from 'storybook/test'
import { testType } from 'type-plus'
import source from './css-properties.ts?raw'

const meta: Meta<toolkits.CSSProperties> = {
	title: 'style/CSSProperties',
	tags: ['type', 'version:1.0', '!test'],
	render: () => <></>
}

export default meta

export const Specification: StoryObj = {
	tags: ['source'],
	parameters: defineDocsParam({
		source: { code: source }
	}),
	decorators: [
		withStoryCard({
			content: (
				<>
					<p>
						<code>CSSProperties</code> widens CSS properties to support custom properties. Standard
						properties accept string or number values; custom properties (<code>--*</code>) accept
						string values.
					</p>
					<p>
						<code>React.CSSProperties</code> (using <code>csstype</code>) is augmented with custom
						properties, so you can use it directly without this type.
					</p>
				</>
			)
		}),
		showSource()
	]
}

export const SupportCustomProperties: StoryObj = {
	tags: ['use-case'],
	parameters: defineDocsParam({
		source: {
			code: dedent`let style: CSSProperties = {
				color: 'red',
				'--custom-property': '10px',
			}
			`
		}
	}),
	decorators: [
		withStoryCard({
			content: (
				<p>
					Use standard properties and custom properties with the <code>--</code> prefix.
				</p>
			)
		}),
		showSource()
	]
}

export const AcceptsReactCSSProperties: StoryObj = {
	name: 'Accepts React.CSSProperties',
	tags: ['unit'],
	decorators: [
		withStoryCard({
			content: (
				<p>
					<code>CSSProperties</code> accepts <code>React.CSSProperties</code>.
				</p>
			)
		}),
		showSource({
			source: dedent`const reactStyle: ReactCSSProperties = { backgroundColor: 'olive' }
			const justStyle: CSSProperties = reactStyle
		`
		})
	],
	play: async () => {
		const reactStyle: ReactCSSProperties = { backgroundColor: 'olive' }
		const justStyle: CSSProperties = reactStyle

		testType.canAssign<typeof justStyle, typeof reactStyle>(true)
		testType.canAssign<typeof reactStyle, typeof justStyle>(true)
		const keys: Array<keyof CSSProperties> = ['backgroundColor', '--custom-property']
		await expect(keys).toEqual(['backgroundColor', '--custom-property'])
	}
}
