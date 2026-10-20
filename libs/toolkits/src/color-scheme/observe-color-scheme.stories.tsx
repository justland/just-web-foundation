import { observeColorScheme } from '@just-web/toolkits'
import { defineDocsParam, type FnToArgTypes, showSource, withStoryCard } from '@repobuddy/storybook'
import type { Meta, StoryObj } from '@repobuddy/storybook/storybook-addon-tag-badges'
import dedent from 'dedent'
import { useEffect, useRef, useState } from 'react'
import { expect, userEvent, waitFor } from 'storybook/test'
import { Button } from '../testing/button.tsx'
import { LogPanel } from '../testing/log-panel.tsx'
import { SchemeSample } from '../testing/scheme-sample.tsx'
import code from './observe-color-scheme.ts?raw'

const meta: Meta<FnToArgTypes<typeof observeColorScheme>> = {
	title: 'color-scheme/observeColorScheme',
	tags: ['func', 'version:4.1'],
	parameters: defineDocsParam({
		description: {
			component:
				'Observes the color scheme an element renders in, and calls the handler when it changes. Unlike `observePrefersColorScheme()`, it follows a `color-scheme` override such as a theme the user picked.'
		}
	}),
	render: () => <></>
}

export default meta

type Story = StoryObj<typeof meta>

export const BasicUsage: Story = {
	tags: ['use-case'],
	parameters: defineDocsParam({
		source: {
			code: dedent`
				// CSS: [data-theme=light] { color-scheme: light } [data-theme=dark] { color-scheme: dark }
				const cleanup = observeColorScheme((scheme) => log(scheme), { element })
			`
		}
	}),
	decorators: [
		withStoryCard({
			content: (
				<p>
					The buttons set <code>data-theme</code> on the panel. A stylesheet maps it to{' '}
					<code>color-scheme</code>, and the observer reports the scheme the panel renders in.
				</p>
			)
		}),
		showSource()
	],
	render: () => {
		const ref = useRef<HTMLDivElement>(null)
		const [log, setLog] = useState<string[]>([])
		useEffect(
			() => observeColorScheme((scheme) => setLog((l) => [...l, scheme]), { element: ref.current }),
			[]
		)
		const setTheme = (theme?: string) => {
			if (!ref.current) return
			if (theme) ref.current.setAttribute('data-theme', theme)
			else ref.current.removeAttribute('data-theme')
		}
		return (
			<div className="flex flex-col gap-3">
				<div className="flex gap-2">
					<Button onPress={() => setTheme('light')}>Light</Button>
					<Button onPress={() => setTheme('dark')}>Dark</Button>
					<Button onPress={() => setTheme()}>System</Button>
				</div>
				<SchemeSample
					ref={ref}
					data-theme="light"
					className="scheme-light-dark data-[theme=dark]:scheme-dark data-[theme=light]:scheme-light"
				/>
				<LogPanel title="observeColorScheme" log={log} />
			</div>
		)
	},
	play: async ({ canvas }) => {
		await userEvent.click(canvas.getByRole('button', { name: 'Dark' }))
		await waitFor(() => expect(canvas.getByText('dark', { selector: 'pre' })).toBeInTheDocument())
		await userEvent.click(canvas.getByRole('button', { name: 'Light' }))
		await waitFor(() => expect(canvas.getByText('light', { selector: 'pre' })).toBeInTheDocument())
	}
}

export const Source: Story = {
	tags: ['source'],
	parameters: defineDocsParam({ source: { code } }),
	decorators: [showSource()]
}
