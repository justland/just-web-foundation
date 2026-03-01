import { defineDocsParam, StoryCard, showSource, withStoryCard } from '@repobuddy/storybook'
import type { Meta, StoryObj } from '@repobuddy/storybook/storybook-addon-tag-badges'
import dedent from 'dedent'
import { useEffect, useLayoutEffect, useRef, useState } from 'react'
import { expect, userEvent, waitFor } from 'storybook/test'
import type { Required } from 'type-plus'
import { Button } from '../../../testing/button.tsx'
import { ThemeResultCard } from '../../../testing/theme-result-card.tsx'
import { classNameThemeStore, type ThemeEntry, type ThemeStore } from '../../index.ts'
import { themeEntry } from '../../theme-entry.ts'
import { ThemeStoreDemo2 } from '../../theme-store-demo2.tsx'
import source from './class-name-theme-store.ts?raw'

const meta = {
	title: 'theme2/theme-store/classNameThemeStore',
	tags: ['func', 'version:next'],
	parameters: defineDocsParam({
		description: {
			component:
				'Theme store that reads and writes theme via element class names. Bakes themeMap at creation; read/write/subscribe use theme keys only.'
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
			story:
				'Interactive demo: Read theme, write themes via buttons, and observe subscribe updates.'
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
		await userEvent.click(canvas.getByTestId('theme-store-demo2-btn-write-grayscale'))
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
			store.write(themeEntry('current', themeMap))
			return {}
		}
	],
	render: () => {
		const store = classNameThemeStore<typeof themeMap>({ themeMap })
		const result = store.read()
		return (
			<div className="flex flex-col gap-4">
				<StoryCard title="html.className" appearance="output">
					<code>{typeof document !== 'undefined' ? document.documentElement.className : ''}</code>
				</StoryCard>
				<ThemeResultCard
					title="store.read() result"
					data-testid="store-read-result"
					result={result ?? { theme: 'current', value: themeMap.current }}
				/>
			</div>
		)
	},
	play: async ({ canvas }) => {
		await expect(canvas.getByTestId('store-read-result')).toHaveTextContent('theme: current')
		await expect(canvas.getByTestId('store-read-result')).toHaveTextContent('value: theme-current')
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
			store.write(themeEntry('high-contrast', themeMap))
			return {}
		}
	],
	render: () => {
		const store = classNameThemeStore<typeof themeMap>({ themeMap, element: document.body })
		const result = store.read()
		return (
			<div className="flex flex-col gap-4">
				<StoryCard title="body.className" appearance="output">
					<code>{typeof document !== 'undefined' ? document.body.className : ''}</code>
				</StoryCard>
				<ThemeResultCard
					title="store.read() result"
					data-testid="store-read-result"
					result={result ?? { theme: 'high-contrast', value: themeMap['high-contrast'] }}
				/>
			</div>
		)
	},
	play: async ({ canvas }) => {
		await expect(canvas.getByTestId('store-read-result')).toHaveTextContent('theme: high-contrast')
		await expect(canvas.getByTestId('store-read-result')).toHaveTextContent(
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
			s.write(themeEntry('grayscale', themeMap))
			setStore(s)
		}, [])

		const result = store?.read()
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
							title="store.read() result"
							data-testid="store-read-result"
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
		await expect(canvas.getByTestId('store-read-result')).toHaveTextContent('theme: grayscale')
		await expect(canvas.getByTestId('store-read-result')).toHaveTextContent(
			'value: theme-grayscale'
		)
	}
}

export const ThemeMapStringValue: Story = {
	name: 'themeMap: string value',
	tags: ['use-case', 'props'],
	parameters: defineDocsParam({
		description: {
			story: 'themeMap values can be a single string per theme.'
		}
	}),
	decorators: [
		withStoryCard({
			content: <p>Each theme maps to one string value (one class name).</p>
		}),
		showSource({
			source: dedent`
				const themeMap = {
					current: 'theme-current',
					grayscale: 'theme-grayscale',
					'high-contrast': 'theme-high-contrast',
				} as const

				const store = classNameThemeStore({ themeMap })
			`
		})
	],
	loaders: [
		() => {
			const store = classNameThemeStore({ themeMap })
			store.write(themeEntry('current', themeMap))
			return {}
		}
	],
	render: () => {
		const store = classNameThemeStore({ themeMap })
		const result = store.read()
		return (
			<div className="flex flex-col gap-4">
				<StoryCard title="html.className" appearance="output">
					<code>{typeof document !== 'undefined' ? document.documentElement.className : ''}</code>
				</StoryCard>
				<ThemeResultCard
					title="store.read() result"
					data-testid="store-read-result"
					result={result ?? { theme: 'current', value: themeMap.current }}
				/>
			</div>
		)
	},
	play: async ({ canvas }) => {
		await expect(canvas.getByTestId('store-read-result')).toHaveTextContent('theme: current')
		await expect(canvas.getByTestId('store-read-result')).toHaveTextContent('value: theme-current')
	}
}

const themeMapArray = {
	current: 'theme-current',
	grayscale: ['theme-grayscale', 'app:bg-gray-100'],
	'high-contrast': 'theme-high-contrast'
} as const

export const ThemeMapArrayValues: Story = {
	name: 'themeMap: array values',
	tags: ['use-case', 'props'],
	parameters: defineDocsParam({
		description: {
			story:
				'themeMap values can be string[] for multiple CSS classes. All classes are applied to the element.'
		}
	}),
	decorators: [
		withStoryCard({
			content: (
				<p>
					Each theme can map to multiple class names. Setting <code>grayscale</code> adds both{' '}
					<code>theme-grayscale</code> and <code>app:bg-gray-100</code> to the element.
				</p>
			)
		}),
		showSource({
			source: dedent`
				const themeMap = {
					current: 'theme-current',
					grayscale: ['theme-grayscale', 'app:bg-gray-100'],
					'high-contrast': 'theme-high-contrast',
				} as const

				const store = classNameThemeStore({ themeMap })
			`
		})
	],
	loaders: [
		() => {
			const store = classNameThemeStore<typeof themeMapArray>({ themeMap: themeMapArray })
			store.write(themeEntry('grayscale', themeMapArray))
			return {}
		}
	],
	render: () => {
		const store = classNameThemeStore<typeof themeMapArray>({ themeMap: themeMapArray })
		const result = store.read()
		return (
			<div className="flex flex-col gap-4">
				<StoryCard title="html.className" appearance="output">
					<code>{typeof document !== 'undefined' ? document.documentElement.className : ''}</code>
				</StoryCard>
				<ThemeResultCard
					title="store.read() result"
					data-testid="store-read-result"
					result={result ?? { theme: 'grayscale', value: themeMapArray.grayscale }}
				/>
			</div>
		)
	},
	play: async ({ canvas }) => {
		await expect(canvas.getByTestId('store-read-result')).toHaveTextContent('theme: grayscale')
		await expect(canvas.getByTestId('store-read-result')).toHaveTextContent(
			'value: [theme-grayscale, app:bg-gray-100]'
		)
	}
}

export const Read: Story = {
	name: 'read',
	tags: ['props'],
	parameters: defineDocsParam({
		description: {
			story: 'store.read() reads the current theme from the element class names.'
		}
	}),
	decorators: [
		withStoryCard(),
		showSource({
			source: dedent`
				const store = classNameThemeStore({ themeMap })
				const result = store.read()
			`
		})
	],
	loaders: [
		() => {
			const store = classNameThemeStore<typeof themeMap>({ themeMap })
			store.write(themeEntry('grayscale', themeMap))
			return {}
		}
	],
	render: () => {
		const store = classNameThemeStore<typeof themeMap>({ themeMap })
		const result = store.read()
		return (
			<ThemeResultCard
				title="store.read() result"
				data-testid="store-read-result"
				result={result ?? { theme: 'grayscale', value: themeMap.grayscale }}
			/>
		)
	},
	play: async ({ canvas }) => {
		await expect(canvas.getByTestId('store-read-result')).toHaveTextContent('theme: grayscale')
		await expect(canvas.getByTestId('store-read-result')).toHaveTextContent(
			'value: theme-grayscale'
		)
	}
}

export const WriteStory: Story = {
	name: 'write',
	tags: ['props'],
	parameters: defineDocsParam({
		description: {
			story: 'store.write() applies the theme class to the element.'
		}
	}),
	decorators: [
		withStoryCard(),
		showSource({
			source: dedent`
				const store = classNameThemeStore({ themeMap })
				store.write(themeResult('high-contrast', themeMap))
			`
		})
	],
	render: () => {
		const store = classNameThemeStore<typeof themeMap>({ themeMap })
		const [currentTheme, setCurrentTheme] = useState<ExampleTheme | null>(() => {
			const r = store.read()
			return r?.theme ?? null
		})

		return (
			<div className="flex flex-col gap-4">
				<div className="flex flex-wrap gap-2">
					{(Object.keys(themeMap) as ExampleTheme[]).map((theme) => (
						<Button
							key={theme}
							data-testid={`write-${theme}`}
							onClick={() => {
								store.write(themeEntry(theme, themeMap))
								setCurrentTheme(theme)
							}}
						>
							write({theme})
						</Button>
					))}
				</div>
				<ThemeResultCard
					title="store.read() after write"
					data-testid="store-write-result"
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
		await userEvent.click(canvas.getByTestId('write-grayscale'))
		await expect(canvas.getByTestId('store-write-result')).toHaveTextContent('theme: grayscale')
		await expect(canvas.getByTestId('store-write-result')).toHaveTextContent(
			'value: theme-grayscale'
		)
	}
}

export const Subscribe: Story = {
	name: 'subscribe',
	tags: ['props'],
	parameters: defineDocsParam({
		description: {
			story:
				'store.subscribe() calls the handler when the class attribute changes (no initial notify).'
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
		const storeRef = useRef<ReturnType<typeof classNameThemeStore<typeof themeMap>> | null>(null)
		const [result, setResult] = useState<ThemeEntry<typeof themeMap> | undefined | null>(undefined)

		useLayoutEffect(() => {
			storeRef.current = classNameThemeStore<typeof themeMap>({ themeMap })
		}, [])

		useEffect(() => {
			const store = storeRef.current
			if (!store) return
			return store.subscribe!(setResult)
		}, [])

		const displayTheme = result?.theme ?? 'current'
		return (
			<div className="flex flex-col gap-4">
				<div className="flex flex-wrap gap-2">
					{(Object.keys(themeMap) as ExampleTheme[]).map((theme) => (
						<Button
							key={theme}
							data-testid={`write-${theme}`}
							onClick={() => storeRef.current?.write(themeEntry(theme, themeMap))}
						>
							write({theme})
						</Button>
					))}
				</div>
				<ThemeResultCard
					title="store.subscribe() receives"
					data-testid="store-subscribe-result"
					result={themeEntry(displayTheme, themeMap)}
				/>
			</div>
		)
	},
	play: async ({ canvas }) => {
		await userEvent.click(canvas.getByTestId('write-high-contrast'))
		await waitFor(() =>
			expect(canvas.getByTestId('store-subscribe-result')).toHaveTextContent('high-contrast')
		)
	}
}

export const SubscribeOnlyWhenThemeChanges: Story = {
	name: 'subscribe: only when themeEntry changes',
	tags: ['props'],
	parameters: defineDocsParam({
		description: {
			story:
				'The handler is only invoked when the resolved themeEntry changes. Adding non-theme classes does not trigger the handler.'
		}
	}),
	decorators: [
		withStoryCard(),
		showSource({
			source: dedent`
				const store = classNameThemeStore({ themeMap, element: targetElement })
				store.subscribe((entry) => {
					invocationCount++
					setObserved(entry)
				})
				// Adding element.classList.add('app-other') does NOT invoke handler
				// store.write(themeEntry('grayscale')) DOES invoke when theme changes
			`
		})
	],
	render: () => {
		const targetRef = useRef<HTMLDivElement | null>(null)
		const storeRef = useRef<ReturnType<typeof classNameThemeStore<typeof themeMap>> | null>(null)
		const [invocationCount, setInvocationCount] = useState(0)
		const [observed, setObserved] = useState<ThemeEntry<typeof themeMap> | undefined | null>(null)

		useLayoutEffect(() => {
			const el = targetRef.current
			if (!el) return
			const store = classNameThemeStore<typeof themeMap>({ themeMap, element: el })
			storeRef.current = store
		}, [])

		useEffect(() => {
			const store = storeRef.current
			if (!store) return
			const unSub = store.subscribe!((entry) => {
				setInvocationCount((c) => c + 1)
				setObserved(entry)
			})
			store.write(themeEntry('grayscale', themeMap))
			return unSub
		}, [])

		const displayTheme = observed?.theme ?? '(none)'
		return (
			<div className="flex flex-col gap-4" data-testid="subscribe-only-when-theme-changes">
				<div
					ref={targetRef}
					data-testid="target-element"
					className="rounded border border-gray-300 p-2"
				>
					Target element
				</div>
				<StoryCard title="Handler invocations" appearance="output">
					<pre data-testid="invocation-count" className="font-mono">
						{invocationCount}
					</pre>
				</StoryCard>
				<StoryCard title="Observed theme" appearance="output">
					<pre data-testid="observed-theme" className="font-mono">
						{displayTheme}
					</pre>
				</StoryCard>
				<div className="flex flex-wrap gap-2">
					<Button
						data-testid="add-non-theme-class"
						onPress={() => targetRef.current?.classList.add('app-other')}
					>
						Add non-theme class
					</Button>
					<Button
						data-testid="change-to-high-contrast"
						onPress={() => storeRef.current?.write(themeEntry('high-contrast', themeMap))}
					>
						Change to high-contrast
					</Button>
					<Button
						data-testid="change-to-current"
						onPress={() => storeRef.current?.write(themeEntry('current', themeMap))}
					>
						Change to current
					</Button>
				</div>
			</div>
		)
	},
	play: async ({ canvas }) => {
		// write(grayscale) in useEffect triggers mutation → handler runs (MutationObserver only fires on changes)
		await expect(canvas.getByTestId('invocation-count')).toHaveTextContent('1')
		await expect(canvas.getByTestId('observed-theme')).toHaveTextContent('grayscale')

		// Change theme: handler SHOULD run again
		await userEvent.click(canvas.getByTestId('change-to-high-contrast'))
		await waitFor(() => expect(canvas.getByTestId('invocation-count')).toHaveTextContent('2'))
		await expect(canvas.getByTestId('observed-theme')).toHaveTextContent('high-contrast')
	}
}

export const Source: Story = {
	tags: ['source'],
	parameters: defineDocsParam({ source: { code: source } }),
	decorators: [showSource()]
}
