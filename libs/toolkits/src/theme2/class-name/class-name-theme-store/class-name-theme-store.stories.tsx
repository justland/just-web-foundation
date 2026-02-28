import { defineDocsParam, StoryCard, showSource, withStoryCard } from '@repobuddy/storybook'
import type { Meta, StoryObj } from '@repobuddy/storybook/storybook-addon-tag-badges'
import dedent from 'dedent'
import { useEffect, useLayoutEffect, useRef, useState } from 'react'
import { expect, userEvent, waitFor } from 'storybook/test'
import type { Required } from 'type-plus'
import { Button } from '../../../testing/button.tsx'
import { ThemeResultCard } from '../../../testing/theme-result-card.tsx'
import {
	createClassNameThemeStore as classNameThemeStore,
	type ThemeResult,
	type ThemeStore,
	themeResult
} from '../../index.ts'
import { ThemeStoreDemo2 } from '../../theme-store-demo2.tsx'
import source from './class-name-theme-store.ts?raw'

const meta = {
	title: 'theme2/class-name/classNameThemeStore',
	tags: ['func', 'version:next'],
	parameters: defineDocsParam({
		description: {
			component:
				'Theme store that reads and writes theme via element class names. Bakes themeMap at creation; get/set/subscribe use theme keys only.'
		}
	}),
	render: () => <></>
} satisfies Meta

export default meta

type Story = StoryObj<typeof meta>

const themeMap = {
	current: 'theme-current',
	next: 'theme-next',
	grayscale: 'theme-grayscale',
	'high-contrast': 'theme-high-contrast'
} as const

type ExampleTheme = keyof typeof themeMap

export const Playground: Story = {
	tags: ['playground'],
	parameters: defineDocsParam({
		description: {
			story: 'Interactive demo: Get theme, set themes via buttons, and observe subscribe updates.'
		}
	}),
	decorators: [
		withStoryCard(),
		showSource({
			source: dedent`
				const store = classNameThemeStore({ themeMap })
				<ThemeStoreDemo2 store={store} themes={themeMap} />
			`
		})
	],
	render: () => {
		const store = classNameThemeStore<typeof themeMap>({ themeMap })
		return <ThemeStoreDemo2 store={store} themes={themeMap} />
	},
	play: async ({ canvas }) => {
		const store = classNameThemeStore<typeof themeMap>({ themeMap })
		store.set('grayscale')
		await waitFor(() =>
			expect(canvas.getByTestId('theme-store-demo2-observe')).toHaveTextContent('grayscale')
		)
		await expect(canvas.getByTestId('theme-store-demo2-observe')).toHaveTextContent(
			'theme-grayscale'
		)
	}
}

export const ElementDefault: Story = {
	name: 'element: html (default)',
	tags: ['use-case', 'props'],
	decorators: [
		withStoryCard({
			content: (
				<p>
					Theme is applied to <code>document.documentElement</code> (html) by default when{' '}
					<code>options.element</code> is not specified.
				</p>
			)
		}),
		showSource({
			source: dedent`
				const themeMap = {
					current: 'theme-current',
					grayscale: 'theme-grayscale',
					'high-contrast': 'theme-high-contrast',
				} as const;

				const store = classNameThemeStore({ themeMap })
			`
		})
	],
	loaders: [
		() => {
			const store = classNameThemeStore<typeof themeMap>({ themeMap })
			store.set('current')
			return {}
		}
	],
	render: () => {
		const store = classNameThemeStore<typeof themeMap>({ themeMap })
		const result = store.get()
		return (
			<div className="flex flex-col gap-4">
				<StoryCard title="html.className" appearance="output">
					<code>{typeof document !== 'undefined' ? document.documentElement.className : ''}</code>
				</StoryCard>
				<ThemeResultCard
					title="store.get() result"
					data-testid="store-get-result"
					result={result ?? { theme: 'current', value: themeMap.current }}
				/>
			</div>
		)
	},
	play: async ({ canvas }) => {
		await expect(canvas.getByTestId('store-get-result')).toHaveTextContent('theme: current')
		await expect(canvas.getByTestId('store-get-result')).toHaveTextContent('value: theme-current')
	}
}

export const ElementBody: Story = {
	name: 'element: body',
	tags: ['use-case', 'props'],
	decorators: [
		withStoryCard({
			content: (
				<p>
					Theme is applied to <code>document.body</code> when passing it in{' '}
					<code>options.element</code>.
				</p>
			)
		}),
		showSource({
			source: dedent`
				const themeMap = {
					current: 'theme-current',
					grayscale: 'theme-grayscale',
					'high-contrast': 'theme-high-contrast',
				} as const;

				const store = classNameThemeStore({ themeMap, element: document.body })
			`
		})
	],
	loaders: [
		() => {
			const store = classNameThemeStore<typeof themeMap>({ themeMap, element: document.body })
			store.set('high-contrast')
			return {}
		}
	],
	render: () => {
		const store = classNameThemeStore<typeof themeMap>({ themeMap, element: document.body })
		const result = store.get()
		return (
			<div className="flex flex-col gap-4">
				<StoryCard title="body.className" appearance="output">
					<code>{typeof document !== 'undefined' ? document.body.className : ''}</code>
				</StoryCard>
				<ThemeResultCard
					title="store.get() result"
					data-testid="store-get-result"
					result={result ?? { theme: 'high-contrast', value: themeMap['high-contrast'] }}
				/>
			</div>
		)
	},
	play: async ({ canvas }) => {
		await expect(canvas.getByTestId('store-get-result')).toHaveTextContent('theme: high-contrast')
		await expect(canvas.getByTestId('store-get-result')).toHaveTextContent(
			'value: theme-high-contrast'
		)
	}
}

export const ElementCustom: Story = {
	name: 'element: custom element',
	tags: ['props'],
	decorators: [
		withStoryCard({
			content: (
				<p>
					Theme is applied to a custom element by passing it in <code>options.element</code>.
				</p>
			)
		}),
		showSource({
			source: dedent`
				const themeMap = {
					current: 'theme-current',
					grayscale: 'theme-grayscale',
					'high-contrast': 'theme-high-contrast',
				} as const;

				const store = classNameThemeStore({
					themeMap,
					element: targetElement,
				})
			`
		})
	],
	render: () => {
		const targetRef = useRef<HTMLDivElement | null>(null)
		const [store, setStore] = useState<Required<ThemeStore<typeof themeMap>> | null>(null)

		useLayoutEffect(() => {
			const el = targetRef.current
			if (!el) return
			const s = classNameThemeStore<typeof themeMap>({ themeMap, element: el })
			s.set('grayscale')
			setStore(s)
		}, [])

		const result = store?.get()
		return (
			<div className="flex flex-col gap-2">
				<div
					ref={targetRef}
					id="target"
					data-testid="target-element"
					className="rounded border border-gray-300 p-4"
				>
					Target element (theme class is observed here)
				</div>
				{store ? (
					<>
						<StoryCard title="target.className" appearance="output">
							<code>{targetRef.current?.className}</code>
						</StoryCard>
						<ThemeResultCard
							title="store.get() result"
							data-testid="store-get-result"
							result={result ?? { theme: 'grayscale', value: themeMap.grayscale }}
						/>
					</>
				) : (
					<p>Loading…</p>
				)}
			</div>
		)
	},
	play: async ({ canvas }) => {
		await expect(canvas.getByTestId('store-get-result')).toHaveTextContent('theme: grayscale')
		await expect(canvas.getByTestId('store-get-result')).toHaveTextContent('value: theme-grayscale')
	}
}

export const Get: Story = {
	name: 'get',
	tags: ['props'],
	parameters: defineDocsParam({
		description: {
			story: 'store.get() reads the current theme from the element class names.'
		}
	}),
	decorators: [
		withStoryCard(),
		showSource({
			source: dedent`
				const store = classNameThemeStore({ themeMap })
				const result = store.get()
			`
		})
	],
	loaders: [
		() => {
			const store = classNameThemeStore<typeof themeMap>({ themeMap })
			store.set('grayscale')
			return {}
		}
	],
	render: () => {
		const store = classNameThemeStore<typeof themeMap>({ themeMap })
		const result = store.get()
		return (
			<ThemeResultCard
				title="store.get() result"
				data-testid="store-get-result"
				result={result ?? { theme: 'grayscale', value: themeMap.grayscale }}
			/>
		)
	},
	play: async ({ canvas }) => {
		await expect(canvas.getByTestId('store-get-result')).toHaveTextContent('theme: grayscale')
		await expect(canvas.getByTestId('store-get-result')).toHaveTextContent('value: theme-grayscale')
	}
}

export const SetStory: Story = {
	name: 'set',
	tags: ['props'],
	parameters: defineDocsParam({
		description: {
			story: 'store.set() applies the theme class to the element.'
		}
	}),
	decorators: [
		withStoryCard(),
		showSource({
			source: dedent`
				const store = classNameThemeStore({ themeMap })
				store.set('high-contrast')
			`
		})
	],
	render: () => {
		const store = classNameThemeStore<typeof themeMap>({ themeMap })
		const [currentTheme, setCurrentTheme] = useState<ExampleTheme | null>(() => {
			const r = store.get()
			return r?.theme ?? null
		})

		return (
			<div className="flex flex-col gap-4">
				<div className="flex flex-wrap gap-2">
					{(Object.keys(themeMap) as ExampleTheme[]).map((theme) => (
						<Button
							key={theme}
							data-testid={`set-${theme}`}
							onClick={() => {
								store.set(theme)
								setCurrentTheme(theme)
							}}
						>
							set({theme})
						</Button>
					))}
				</div>
				<ThemeResultCard
					title="store.get() after set"
					data-testid="store-set-result"
					result={
						currentTheme
							? { theme: currentTheme, value: themeMap[currentTheme] }
							: { theme: 'current', value: themeMap.current }
					}
				/>
			</div>
		)
	},
	play: async ({ canvas }) => {
		await userEvent.click(canvas.getByTestId('set-grayscale'))
		await expect(canvas.getByTestId('store-set-result')).toHaveTextContent('theme: grayscale')
		await expect(canvas.getByTestId('store-set-result')).toHaveTextContent('value: theme-grayscale')
	}
}

export const Subscribe: Story = {
	name: 'subscribe',
	tags: ['props'],
	parameters: defineDocsParam({
		description: {
			story:
				'store.subscribe() calls the handler with the current theme and when the class attribute changes.'
		}
	}),
	decorators: [
		withStoryCard(),
		showSource({
			source: dedent`
				const store = createClassNameThemeStore({ themeMap })
				return store.subscribe((themeResult) => {
					console.log('Theme:', themeResult?.theme, themeResult?.value)
				})
			`
		})
	],
	render: () => {
		const [result, setResult] = useState<ThemeResult<typeof themeMap> | undefined | null>(undefined)

		useEffect(() => {
			const store = classNameThemeStore<typeof themeMap>({ themeMap })
			return store.subscribe!(setResult)
		}, [])

		const displayTheme = result?.theme ?? 'current'
		return (
			<ThemeResultCard
				title="store.subscribe() receives"
				data-testid="store-subscribe-result"
				result={themeResult(displayTheme, themeMap)}
			/>
		)
	},
	play: async ({ canvas }) => {
		const store = classNameThemeStore<typeof themeMap>({ themeMap })
		store.set('high-contrast')

		await waitFor(() =>
			expect(canvas.getByTestId('store-subscribe-result')).toHaveTextContent('high-contrast')
		)
	}
}

export const Source: Story = {
	tags: ['source'],
	parameters: defineDocsParam({ source: { code: source } }),
	decorators: [showSource()]
}
