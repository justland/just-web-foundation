import { getColorScheme, getPrefersColorScheme } from '@just-web/toolkits'
import {
	defineDocsParam,
	type FnToArgTypes,
	StoryCard,
	showSource,
	withStoryCard
} from '@repobuddy/storybook'
import type { Meta, StoryObj } from '@repobuddy/storybook/storybook-addon-tag-badges'
import dedent from 'dedent'
import { useEffect, useRef, useState } from 'react'
import { expect, waitFor } from 'storybook/test'
import { SchemeSample } from '../testing/scheme-sample.tsx'
import code from './get-color-scheme.ts?raw'

const meta: Meta<FnToArgTypes<typeof getColorScheme>> = {
	title: 'color-scheme/getColorScheme',
	tags: ['func', 'version:4.1'],
	parameters: defineDocsParam({
		description: {
			component:
				'Gets the color scheme an element renders in: "light" or "dark". It follows the CSS `color-scheme` property, so it reflects a theme the user picked. `getPrefersColorScheme()` reports the OS preference only.'
		}
	}),
	render: () => <></>
}

export default meta

type Story = StoryObj<typeof meta>

function Panel(props: { id: string; className: string; label: string }) {
	const ref = useRef<HTMLDivElement>(null)
	const [scheme, setScheme] = useState<string>()
	useEffect(() => setScheme(getColorScheme({ element: ref.current })), [])
	return (
		<SchemeSample ref={ref} className={props.className}>
			<code>{props.label}</code>
			<span>
				getColorScheme(): <strong data-testid={props.id}>{scheme}</strong>
			</span>
		</SchemeSample>
	)
}

export const BasicUsage: Story = {
	tags: ['use-case'],
	parameters: defineDocsParam({
		source: {
			code: dedent`
				getColorScheme() // <html>
				getColorScheme({ element }) // 'light' | 'dark'
			`
		}
	}),
	decorators: [
		withStoryCard({
			content: (
				<div className="space-y-2">
					<p>
						Each panel sets its own <code>color-scheme</code>. <code>getColorScheme</code> reads the
						scheme it renders in. Only the <code>light dark</code> panel follows the OS preference.
					</p>
					<p>
						<code>getPrefersColorScheme()</code> returns <strong>{getPrefersColorScheme()}</strong>{' '}
						for all three.
					</p>
				</div>
			)
		}),
		showSource()
	],
	render: () => (
		<StoryCard appearance="output">
			<div className="flex flex-wrap gap-3">
				<Panel id="light" className="scheme-light" label="color-scheme: light" />
				<Panel id="dark" className="scheme-dark" label="color-scheme: dark" />
				<Panel id="light-dark" className="scheme-light-dark" label="color-scheme: light dark" />
			</div>
		</StoryCard>
	),
	play: async ({ canvas }) => {
		await waitFor(() => expect(canvas.getByTestId('light')).toHaveTextContent('light'))
		await expect(canvas.getByTestId('dark')).toHaveTextContent('dark')
		await expect(canvas.getByTestId('light-dark')).toHaveTextContent(getPrefersColorScheme())
	}
}

export const Source: Story = {
	tags: ['source'],
	parameters: defineDocsParam({ source: { code } }),
	decorators: [showSource()]
}
