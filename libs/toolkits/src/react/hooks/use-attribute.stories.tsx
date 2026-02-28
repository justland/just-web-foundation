import { defineDocsParam, StoryCard, showSource, withStoryCard } from '@repobuddy/storybook'
import type { Meta, StoryObj } from '@repobuddy/storybook/storybook-addon-tag-badges'
import dedent from 'dedent'
import { useState } from 'react'
import { expect, userEvent } from 'storybook/test'
import { useAttribute } from '#just-web/toolkits/react'
import { Button } from '../../testing/button.tsx'
import code from './use-attribute.ts?raw'

const meta = {
	title: 'react/hooks/useAttribute',
	tags: ['func', 'version:next'],
	parameters: defineDocsParam({
		description: {
			component:
				'React hook that returns the current value of an attribute on a target element and a setter to update it. Stays in sync when the attribute changes elsewhere.',
		},
	}),
	render: () => <></>,
} satisfies Meta

export default meta

type Story = StoryObj<typeof meta>

const ATTRIBUTE_NAME = 'data-theme'

export const BasicUsage: Story = {
	parameters: defineDocsParam({
		description: {
			story:
				'Observe and set an attribute on document.documentElement. Pass null to setValue to remove the attribute.',
		},
		source: {
			code: dedent`
				const [value, setValue] = useAttribute('data-theme')
				setValue('dark')
				setValue(null) // removes attribute
			`,
		},
	}),
	decorators: [withStoryCard(), showSource()],
	render: () => {
		const [dataTheme, setDataTheme] = useAttribute(ATTRIBUTE_NAME)

		return (
			<div className="flex flex-col gap-4 font-sans">
				<div className="flex flex-wrap gap-2">
					<Button onPress={() => setDataTheme('light')}>Set light</Button>
					<Button onPress={() => setDataTheme('dark')}>Set dark</Button>
					<Button onPress={() => setDataTheme(null)}>Remove</Button>
				</div>
				<StoryCard
					title={
						<>
							Current <code>{ATTRIBUTE_NAME}</code>
						</>
					}
					appearance="output"
				>
					<pre data-testid="current-value" className="font-mono">
						{dataTheme ?? '(not set)'}
					</pre>
				</StoryCard>
			</div>
		)
	},
	play: async ({ canvas, step }) => {
		await step('Set light', async () => {
			await userEvent.click(canvas.getByRole('button', { name: 'Set light' }))
			await expect(canvas.getByTestId('current-value')).toHaveTextContent('light')
		})
		await step('Set dark', async () => {
			await userEvent.click(canvas.getByRole('button', { name: 'Set dark' }))
			await expect(canvas.getByTestId('current-value')).toHaveTextContent('dark')
		})
		await step('Remove', async () => {
			await userEvent.click(canvas.getByRole('button', { name: 'Remove' }))
			await expect(canvas.getByTestId('current-value')).toHaveTextContent('(not set)')
		})
	},
}

export const CustomElement: Story = {
	parameters: defineDocsParam({
		description: {
			story:
				'Observe and set an attribute on a specific element by passing it as the second argument.',
		},
		source: {
			code: dedent`
				const [element, setElement] = useState<HTMLDivElement | null>(null)
				const [value, setValue] = useAttribute('data-foo', element ?? undefined)
				return <div ref={setElement}>...</div>
			`,
		},
	}),
	decorators: [withStoryCard(), showSource()],
	render: () => {
		const [element, setElement] = useState<HTMLDivElement | null>(null)
		const [dataFoo, setDataFoo] = useAttribute('data-foo', element ?? undefined)

		return (
			<div className="flex flex-col gap-4 font-sans">
				<div
					ref={setElement}
					className="rounded border border-gray-300 p-4"
					data-testid="target-element"
				>
					Target element (data-foo is observed here)
				</div>
				<div className="flex flex-wrap gap-2">
					<Button onPress={() => setDataFoo('a')}>Set to "a"</Button>
					<Button onPress={() => setDataFoo('b')}>Set to "b"</Button>
					<Button onPress={() => setDataFoo(null)}>Remove</Button>
				</div>
				<StoryCard
					title={
						<>
							Current <code>data-foo</code> on target
						</>
					}
					appearance="output"
				>
					<pre data-testid="current-value" className="font-mono">
						{dataFoo ?? '(not set)'}
					</pre>
				</StoryCard>
			</div>
		)
	},
	play: async ({ canvas, step }) => {
		await step('Set to a', async () => {
			await userEvent.click(canvas.getByRole('button', { name: 'Set to "a"' }))
			await expect(canvas.getByTestId('current-value')).toHaveTextContent('a')
		})
		await step('Remove', async () => {
			await userEvent.click(canvas.getByRole('button', { name: 'Remove' }))
			await expect(canvas.getByTestId('current-value')).toHaveTextContent('(not set)')
		})
	},
}

export const SyncFromElsewhere: Story = {
	parameters: defineDocsParam({
		description: {
			story:
				'The hook stays in sync when the attribute is changed outside of setValue (e.g. by another component or direct DOM mutation).',
		},
		source: {
			code: dedent`
				const [value] = useAttribute('data-theme')
				// When something else does element.setAttribute('data-theme', 'x'),
				// value updates to 'x' automatically
			`,
		},
	}),
	decorators: [withStoryCard(), showSource()],
	render: () => {
		const [dataTheme] = useAttribute(ATTRIBUTE_NAME)

		const setExternally = () => {
			const next =
				document.documentElement.getAttribute(ATTRIBUTE_NAME) === 'synced' ? null : 'synced'
			if (next === null) {
				document.documentElement.removeAttribute(ATTRIBUTE_NAME)
			} else {
				document.documentElement.setAttribute(ATTRIBUTE_NAME, next)
			}
		}

		return (
			<div className="flex flex-col gap-4 font-sans">
				<Button onPress={setExternally}>Toggle via setAttribute (external)</Button>
				<StoryCard appearance="output">
					<p className="mb-2">Hook value (updates when attribute changes elsewhere):</p>
					<pre data-testid="current-value" className="font-mono">
						{dataTheme ?? '(not set)'}
					</pre>
				</StoryCard>
			</div>
		)
	},
	play: async ({ canvas }) => {
		const btn = canvas.getByRole('button', { name: /Toggle via setAttribute/ })
		await userEvent.click(btn)
		await expect(canvas.getByTestId('current-value')).toHaveTextContent('synced')
		await userEvent.click(btn)
		await expect(canvas.getByTestId('current-value')).toHaveTextContent('(not set)')
	},
}

export const Source: Story = {
	tags: ['source'],
	parameters: defineDocsParam({
		source: { code },
	}),
	decorators: [showSource()],
}
