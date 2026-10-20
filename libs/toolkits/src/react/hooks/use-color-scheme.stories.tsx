import { getPrefersColorScheme } from '@just-web/toolkits'
import { useColorScheme } from '@just-web/toolkits/react.js'
import { defineDocsParam, StoryCard, showSource, withStoryCard } from '@repobuddy/storybook'
import type { Meta, StoryObj } from '@repobuddy/storybook/storybook-addon-tag-badges'
import dedent from 'dedent'
import { useState } from 'react'
import { expect, userEvent, waitFor } from 'storybook/test'
import { Button } from '../../testing/button.tsx'
import { SchemeSample } from '../../testing/scheme-sample.tsx'
import code from './use-color-scheme.ts?raw'

const meta = {
	title: 'react/hooks/useColorScheme',
	tags: ['func', 'version:4.1'],
	parameters: defineDocsParam({
		description: {
			component:
				'React hook that returns the color scheme an element renders in, and re-renders when it changes. It follows a `color-scheme` override such as a theme the user picked; `usePrefersColorScheme()` reports the OS preference only.'
		}
	}),
	render: () => <></>
} satisfies Meta

export default meta

type Story = StoryObj<typeof meta>

export const BasicUsage: Story = {
	tags: ['use-case'],
	parameters: defineDocsParam({
		source: {
			code: dedent`
				const [element, setElement] = useState<HTMLElement | null>(null)
				const scheme = useColorScheme({ element })
				return <div ref={setElement} style={{ colorScheme }}>Renders in: {scheme}</div>
			`
		}
	}),
	decorators: [
		withStoryCard({
			content: (
				<p>
					The buttons set <code>color-scheme</code> on the panel. Pass the element through state (a
					callback ref), so the hook re-subscribes once the element mounts.
				</p>
			)
		}),
		showSource()
	],
	render: () => {
		const [element, setElement] = useState<HTMLDivElement | null>(null)
		const [colorScheme, setColorScheme] = useState('light dark')
		const scheme = useColorScheme({ element })
		return (
			<div className="flex flex-col gap-3">
				<div className="flex gap-2">
					<Button onPress={() => setColorScheme('light')}>Light</Button>
					<Button onPress={() => setColorScheme('dark')}>Dark</Button>
					<Button onPress={() => setColorScheme('light dark')}>System</Button>
				</div>
				<SchemeSample ref={setElement} style={{ colorScheme }} />
				<StoryCard appearance="output">
					<p>
						<code>color-scheme: {colorScheme}</code>
					</p>
					<p>
						useColorScheme(): <strong data-testid="scheme">{scheme}</strong>
					</p>
				</StoryCard>
			</div>
		)
	},
	play: async ({ canvas }) => {
		await waitFor(() =>
			expect(canvas.getByTestId('scheme')).toHaveTextContent(getPrefersColorScheme())
		)
		await userEvent.click(canvas.getByRole('button', { name: 'Dark' }))
		await waitFor(() => expect(canvas.getByTestId('scheme')).toHaveTextContent('dark'))
		await userEvent.click(canvas.getByRole('button', { name: 'Light' }))
		await waitFor(() => expect(canvas.getByTestId('scheme')).toHaveTextContent('light'))
	}
}

export const Source: Story = {
	tags: ['source'],
	parameters: defineDocsParam({ source: { code } }),
	decorators: [showSource()]
}
