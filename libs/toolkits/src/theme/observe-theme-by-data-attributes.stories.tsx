import { defineDocsParam, StoryCard, showSource, withStoryCard } from '@repobuddy/storybook'
import type { Meta, StoryObj } from '@repobuddy/storybook/storybook-addon-tag-badges'
import dedent from 'dedent'
import { useCallback, useEffect, useRef, useState } from 'react'
import { expect, userEvent } from 'storybook/test'
import { observeThemeByDataAttributes, setThemeByDataAttribute } from '#just-web/toolkits'
import { useAttribute } from '#just-web/toolkits/react'
import { Button } from '../testing/button.tsx'
import source from './observe-theme-by-data-attributes.ts?raw'

const meta = {
	title: 'theme/observeThemeByDataAttributes',
	tags: ['func', 'version:next'],
	parameters: defineDocsParam({
		description: {
			component:
				'Observes a data attribute (e.g. data-theme) and invokes a handler when the theme value changes.',
		},
	}),
	render: () => <></>,
} satisfies Meta

export default meta

type Story = StoryObj<typeof meta>

const themes = {
	light: 'light',
	dark: 'dark',
} as const

const ATTRIBUTE_NAME = 'data-theme'

export const BasicUsage: Story = {
	tags: ['use-case'],
	parameters: defineDocsParam({
		description: {
			story: 'Observe theme changes when data-theme attribute is toggled.',
		},
	}),
	decorators: [
		withStoryCard(),
		showSource({
			source: dedent`
				observeThemeByDataAttributes({
				  attributeName: 'data-theme',
				  themes: { light: 'light', dark: 'dark' },
				  handler: (value) => setLog(prev => [...prev, \`data-theme: \${value}\`]),
				})
			`,
		}),
	],
	render: () => {
		const [dataTheme] = useAttribute(ATTRIBUTE_NAME)

		useEffect(() => {
			const observer = observeThemeByDataAttributes({
				attributeName: ATTRIBUTE_NAME,
				themes,
				handler: () => {},
			})
			return () => observer.disconnect()
		}, [])

		return (
			<div className="flex flex-col gap-4">
				<div className="flex gap-2">
					{(Object.keys(themes) as (keyof typeof themes)[]).map((theme) => (
						<Button
							key={theme}
							onPress={() =>
								setThemeByDataAttribute({
									attributeName: ATTRIBUTE_NAME,
									themes,
									theme,
								})
							}
						>
							{theme}
						</Button>
					))}
					<Button onPress={() => document.documentElement.removeAttribute(ATTRIBUTE_NAME)}>
						Clear
					</Button>
				</div>
				<span>
					Current theme: <span data-testid="current-theme">{dataTheme ?? '(none)'}</span>
				</span>
				<StoryCard title="document.documentElement.getAttribute('data-theme')" appearance="output">
					<code>{dataTheme ?? '(not set)'}</code>
				</StoryCard>
			</div>
		)
	},
	play: async ({ canvas, step }) => {
		await step('null -> light', async () => {
			const btn = canvas.getByRole('button', { name: 'light' })
			await userEvent.click(btn)
			await expect(canvas.getByTestId('current-theme')).toHaveTextContent('light')
		})
		await step('light -> dark', async () => {
			const btn = canvas.getByRole('button', { name: 'dark' })
			await userEvent.click(btn)
			await expect(canvas.getByTestId('current-theme')).toHaveTextContent('dark')
		})
		await step('dark -> null', async () => {
			const btn = canvas.getByRole('button', { name: 'Clear' })
			await userEvent.click(btn)
			await expect(canvas.getByTestId('current-theme')).toHaveTextContent('(none)')
		})
	},
}

export const WithDifferentAttributeValues: Story = {
	tags: ['use-case'],
	parameters: defineDocsParam({
		description: {
			story: 'Theme keys can map to different attribute values (e.g. light-theme, dark-theme).',
		},
	}),
	decorators: [withStoryCard()],
	render: () => {
		const [dataTheme] = useAttribute(ATTRIBUTE_NAME)
		const customThemes = { light: 'light-theme', dark: 'dark-theme' } as const

		useEffect(() => {
			const observer = observeThemeByDataAttributes({
				attributeName: ATTRIBUTE_NAME,
				themes: customThemes,
				handler: () => {},
			})
			return () => observer.disconnect()
		}, [])

		return (
			<div className="flex flex-col gap-4">
				<div className="flex gap-2">
					{(Object.keys(customThemes) as (keyof typeof customThemes)[]).map((theme) => (
						<Button
							key={theme}
							onPress={() =>
								setThemeByDataAttribute({
									attributeName: ATTRIBUTE_NAME,
									themes: customThemes,
									theme,
								})
							}
						>
							{theme}
						</Button>
					))}
					<Button onPress={() => document.documentElement.removeAttribute(ATTRIBUTE_NAME)}>
						Clear
					</Button>
				</div>
				<span>
					Current theme: <span data-testid="current-theme">{dataTheme ?? '(none)'}</span>
				</span>
				<StoryCard title="document.documentElement.getAttribute('data-theme')" appearance="output">
					<code>{dataTheme ?? '(not set)'}</code>
				</StoryCard>
			</div>
		)
	},
	play: async ({ canvas, step }) => {
		await step('null -> light', async () => {
			const btn = canvas.getByRole('button', { name: 'light' })
			await userEvent.click(btn)
			await expect(canvas.getByTestId('current-theme')).toHaveTextContent('light-theme')
		})
		await step('light -> dark', async () => {
			const btn = canvas.getByRole('button', { name: 'dark' })
			await userEvent.click(btn)
			await expect(canvas.getByTestId('current-theme')).toHaveTextContent('dark-theme')
		})
		await step('dark -> null', async () => {
			const btn = canvas.getByRole('button', { name: 'Clear' })
			await userEvent.click(btn)
			await expect(canvas.getByTestId('current-theme')).toHaveTextContent('(none)')
		})
	},
}

export const WithDefaultTheme: Story = {
	name: 'With theme',
	tags: ['use-case'],
	parameters: defineDocsParam({
		description: {
			story: 'When attribute is removed, handler receives options.theme instead of null.',
		},
	}),
	decorators: [withStoryCard()],
	render: () => {
		const [dataTheme] = useAttribute(ATTRIBUTE_NAME)

		useEffect(() => {
			const observer = observeThemeByDataAttributes({
				attributeName: ATTRIBUTE_NAME,
				themes,
				handler: () => {},
				theme: 'light',
			})
			return () => observer.disconnect()
		}, [])

		return (
			<div className="flex flex-col gap-4">
				<div className="flex gap-2">
					{(Object.keys(themes) as (keyof typeof themes)[]).map((theme) => (
						<Button
							key={theme}
							onPress={() =>
								setThemeByDataAttribute({
									attributeName: ATTRIBUTE_NAME,
									themes,
									theme,
								})
							}
						>
							{theme}
						</Button>
					))}
					<Button onPress={() => document.documentElement.removeAttribute(ATTRIBUTE_NAME)}>
						Clear
					</Button>
				</div>
				<span>
					Current theme: <span data-testid="current-theme">{dataTheme ?? '(none)'}</span>
				</span>
				<StoryCard title="document.documentElement.getAttribute('data-theme')" appearance="output">
					<code>{dataTheme ?? '(not set)'}</code>
				</StoryCard>
			</div>
		)
	},
	play: async ({ canvas, step }) => {
		await step('null -> light', async () => {
			const btn = canvas.getByRole('button', { name: 'light' })
			await userEvent.click(btn)
			await expect(canvas.getByTestId('current-theme')).toHaveTextContent('light')
		})
		await step('light -> dark', async () => {
			const btn = canvas.getByRole('button', { name: 'dark' })
			await userEvent.click(btn)
			await expect(canvas.getByTestId('current-theme')).toHaveTextContent('dark')
		})
		await step('dark -> (not set)', async () => {
			const btn = canvas.getByRole('button', { name: 'Clear' })
			await userEvent.click(btn)
			await expect(canvas.getByTestId('current-theme')).toHaveTextContent('(none)')
		})
	},
}

export const WithAllowCustom: Story = {
	name: 'With allowCustom',
	tags: ['use-case'],
	parameters: defineDocsParam({
		description: {
			story:
				'Observe theme with allowCustom: unknown attribute values are passed to the handler as-is.',
		},
	}),
	decorators: [
		withStoryCard({
			content: (
				<>
					<p>
						With <code>allowCustom: true</code>, any attribute value is passed through: known themes
						are still normalized to their key, but unknown values are passed as-is (e.g.{' '}
						<code>custom</code>, <code>brand-blue</code>).
					</p>
				</>
			),
		}),
		showSource({
			source: dedent`
				observeThemeByDataAttributes({
				  attributeName: 'data-theme',
				  themes: { light: 'light', dark: 'dark' },
				  allowCustom: true,
				  handler: (value) => setLog(prev => [...prev, \`data-theme: \${value}\`]),
				})
			`,
		}),
	],
	render: () => {
		const [dataTheme] = useAttribute(ATTRIBUTE_NAME)

		useEffect(() => {
			const observer = observeThemeByDataAttributes({
				attributeName: ATTRIBUTE_NAME,
				themes: { light: 'light', dark: 'dark' },
				handler: () => {},
				allowCustom: true,
			})
			return () => observer.disconnect()
		}, [])

		return (
			<div className="flex flex-col gap-4">
				<div className="flex gap-2">
					<Button
						onPress={() =>
							setThemeByDataAttribute({
								attributeName: ATTRIBUTE_NAME,
								themes: { light: 'light', dark: 'dark' },
								theme: 'light',
							})
						}
					>
						light
					</Button>
					<Button onPress={() => document.documentElement.setAttribute(ATTRIBUTE_NAME, 'custom')}>
						custom
					</Button>
					<Button onPress={() => document.documentElement.removeAttribute(ATTRIBUTE_NAME)}>
						Clear
					</Button>
				</div>
				<span>
					Current theme: <span data-testid="current-theme">{dataTheme ?? '(none)'}</span>
				</span>
				<StoryCard title="document.documentElement.getAttribute('data-theme')" appearance="output">
					<code>{dataTheme ?? '(not set)'}</code>
				</StoryCard>
			</div>
		)
	},
	play: async ({ canvas, step }) => {
		await step('null -> light', async () => {
			const btn = canvas.getByRole('button', { name: 'light' })
			await userEvent.click(btn)
			await expect(canvas.getByTestId('current-theme')).toHaveTextContent('light')
		})
		await step('light -> custom', async () => {
			const btn = canvas.getByRole('button', { name: 'custom' })
			await userEvent.click(btn)
			await expect(canvas.getByTestId('current-theme')).toHaveTextContent('custom')
		})
	},
}

export const WithCustomElement: Story = {
	tags: ['use-case'],
	parameters: defineDocsParam({
		description: {
			story: 'Observe theme on a specific element via the element option.',
		},
	}),
	decorators: [
		withStoryCard({
			content: (
				<p>
					The data attribute is observed on the target div below instead of{' '}
					<code>document.documentElement</code>.
				</p>
			),
		}),
		showSource({
			source: dedent`observeThemeByDataAttributes({
				attributeName: 'data-theme',
				themes: { light: 'light', dark: 'dark' },
				handler: (value) => ...,
				element: myElement,
			})`,
		}),
	],
	render: () => {
		const customElementRef = useRef<HTMLDivElement>(null)
		const [customElement, setCustomElement] = useState<HTMLDivElement | null>(null)
		const setRef = useCallback((el: HTMLDivElement | null) => {
			customElementRef.current = el
			setCustomElement(el)
		}, [])
		const [dataTheme] = useAttribute(ATTRIBUTE_NAME, customElement ?? undefined)

		useEffect(() => {
			const el = customElementRef.current
			if (!el) return
			const observer = observeThemeByDataAttributes({
				attributeName: ATTRIBUTE_NAME,
				themes,
				handler: () => {},
				element: el,
			})
			return () => observer.disconnect()
		}, [customElement])

		return (
			<div className="flex flex-col gap-4">
				<div className="flex gap-2">
					{(Object.keys(themes) as (keyof typeof themes)[]).map((theme) => (
						<Button
							key={theme}
							onPress={() => {
								const el = customElementRef.current
								if (el) {
									setThemeByDataAttribute({
										attributeName: ATTRIBUTE_NAME,
										themes,
										theme,
										element: el,
									})
								}
							}}
						>
							{theme}
						</Button>
					))}
					<Button onPress={() => customElementRef.current?.removeAttribute(ATTRIBUTE_NAME)}>
						Clear
					</Button>
				</div>
				<div ref={setRef} className="min-h-8 rounded border border-gray-300 p-2" />
				<StoryCard title="customElement.getAttribute('data-theme')" appearance="output">
					<code data-testid="element-data-theme">{dataTheme ?? '(not set)'}</code>
				</StoryCard>
			</div>
		)
	},
	play: async ({ canvas, step }) => {
		await step('light', async () => {
			const btn = canvas.getByRole('button', { name: 'light' })
			await userEvent.click(btn)
			await expect(canvas.getByTestId('element-data-theme')).toHaveTextContent('light')
		})
		await step('dark', async () => {
			const btn = canvas.getByRole('button', { name: 'dark' })
			await userEvent.click(btn)
			await expect(canvas.getByTestId('element-data-theme')).toHaveTextContent('dark')
		})
	},
}

export const Source: Story = {
	tags: ['source'],
	parameters: defineDocsParam({ source: { code: source } }),
	decorators: [showSource()],
}
