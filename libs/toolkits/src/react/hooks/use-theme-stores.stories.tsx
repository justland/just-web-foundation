import { defineDocsParam, StoryCard, showSource, withStoryCard } from '@repobuddy/storybook'
import type { Meta, StoryObj } from '@repobuddy/storybook/storybook-addon-tag-badges'
import dedent from 'dedent'
import { useMemo } from 'react'
import { expect, userEvent, waitFor } from 'storybook/test'
import { useThemeStores } from '#just-web/toolkits/react'
import {
	classNameThemeStore,
	inMemoryThemeStore,
	localStorageThemeStore,
	themeEntry
} from '#just-web/toolkits/theme'
import { Button } from '../../testing/button.tsx'
import code from './use-theme-stores.ts?raw'

const themes = {
	light: 'theme-light',
	dark: 'theme-dark',
	system: 'theme-system'
} as const

const meta = {
	title: 'react/hooks/useThemeStores',
	tags: ['func', 'version:next'],
	parameters: defineDocsParam({
		description: {
			component:
				'React hook that returns the current theme and a setter for composed theme stores. Delegates to createThemeHook internally. Simpler API than createThemeHook—pass themes, stores, and options once.\n\n' +
				'**stores** can be a factory `() => [store1, ...]` (recommended, no memoization needed) or an array `[store1, ...]` (must be memoized or ref-stable; recreating the array each render breaks subscriptions).'
		}
	}),
	render: () => <></>
} satisfies Meta

export default meta

type Story = StoryObj<typeof meta>

export const BasicUsage: Story = {
	parameters: defineDocsParam({
		description: {
			story:
				'With an in-memory store and defaultTheme, useThemeStores returns [theme, setTheme]. setTheme updates the store and the returned theme stays in sync. Uses the factory form so no memoization is needed.'
		},
		source: {
			code: dedent`
				const themes = { light: 'theme-light', dark: 'theme-dark' }
				const [theme, setTheme] = useThemeStores(
					themes,
					() => [inMemoryThemeStore(themes)],
					{ defaultTheme: 'light' }
				)
				setTheme('dark')
			`
		}
	}),
	decorators: [withStoryCard(), showSource()],
	render: () => {
		const [theme, setTheme] = useThemeStores(themes, () => [inMemoryThemeStore(themes)] as const, {
			defaultTheme: 'light'
		})

		return (
			<div className="flex flex-col gap-4 font-sans">
				<div className="flex flex-wrap gap-2">
					<Button onPress={() => setTheme('light')}>Set light</Button>
					<Button onPress={() => setTheme('dark')}>Set dark</Button>
					<Button onPress={() => setTheme('system')}>Set system</Button>
				</div>
				<StoryCard title="Current theme" appearance="output">
					<pre data-testid="current-theme" className="font-mono">
						{theme ?? '(none)'}
					</pre>
				</StoryCard>
			</div>
		)
	},
	play: async ({ canvas, step }) => {
		await step('Initial state is defaultTheme', async () => {
			await expect(canvas.getByTestId('current-theme')).toHaveTextContent('light')
		})
		await step('Set dark', async () => {
			await userEvent.click(canvas.getByRole('button', { name: 'Set dark' }))
			await waitFor(() => expect(canvas.getByTestId('current-theme')).toHaveTextContent('dark'), {
				timeout: 2000
			})
		})
		await step('Set system', async () => {
			await userEvent.click(canvas.getByRole('button', { name: 'Set system' }))
			await waitFor(() => expect(canvas.getByTestId('current-theme')).toHaveTextContent('system'), {
				timeout: 2000
			})
		})
	}
}

export const WithDefaultTheme: Story = {
	name: 'defaultTheme',
	tags: ['props'],
	parameters: defineDocsParam({
		description: {
			story:
				'When stores are empty, the hook returns defaultTheme. The default is also used for SSR.'
		},
		source: {
			code: dedent`
				useThemeStores(themes, () => [inMemoryThemeStore(themes)], { defaultTheme: 'dark' })
			`
		}
	}),
	decorators: [withStoryCard(), showSource()],
	render: () => {
		const [theme] = useThemeStores(themes, () => [inMemoryThemeStore(themes)] as const, {
			defaultTheme: 'dark'
		})

		return (
			<StoryCard title="Theme with defaultTheme: 'dark'" appearance="output">
				<pre data-testid="current-theme" className="font-mono">
					{theme ?? '(none)'}
				</pre>
			</StoryCard>
		)
	},
	play: async ({ canvas }) => {
		await expect(canvas.getByTestId('current-theme')).toHaveTextContent('dark')
	}
}

export const StoreWithInitialValue: Story = {
	name: 'store with initial value',
	tags: ['props'],
	parameters: defineDocsParam({
		description: {
			story: 'When the store already has a value, the hook returns it on first render.'
		},
		source: {
			code: dedent`
				const [theme] = useThemeStores(themes, () => {
					const s = inMemoryThemeStore(themes)
					s.write?.(themeEntry('dark', themes))
					return [s]
				}, { defaultTheme: 'light' })
				// theme === 'dark'
			`
		}
	}),
	decorators: [withStoryCard(), showSource()],
	render: () => {
		const [theme] = useThemeStores(
			themes,
			() => {
				const s = inMemoryThemeStore(themes)
				s.write?.(themeEntry('dark', themes))
				return [s] as const
			},
			{ defaultTheme: 'light' }
		)

		return (
			<StoryCard title="Theme from store with value" appearance="output">
				<pre data-testid="current-theme" className="font-mono">
					{theme ?? '(none)'}
				</pre>
			</StoryCard>
		)
	},
	play: async ({ canvas }) => {
		await waitFor(() => expect(canvas.getByTestId('current-theme')).toHaveTextContent('dark'), {
			timeout: 3000
		})
	}
}

export const ConcreteStores: Story = {
	name: 'stores: concrete stores',
	tags: ['props'],
	parameters: defineDocsParam({
		description: {
			story:
				'Accepts concrete theme stores such as inMemoryThemeStore and localStorageThemeStore. Uses factory form for inline store creation.'
		},
		source: {
			code: dedent`
				useThemeStores(themes, () => [
					inMemoryThemeStore(themes),
					localStorageThemeStore(themes, { storageKey: 'app-theme' })
				], { defaultTheme: 'light' })
			`
		}
	}),
	decorators: [withStoryCard(), showSource()],
	render: () => {
		const [theme, setTheme] = useThemeStores(
			themes,
			() =>
				[
					inMemoryThemeStore(themes),
					localStorageThemeStore(themes, { storageKey: 'use-theme-stores-story' })
				] as const,
			{ defaultTheme: 'light' }
		)

		return (
			<div className="flex flex-col gap-4 font-sans">
				<div className="flex flex-wrap gap-2">
					<Button onPress={() => setTheme('light')}>Set light</Button>
					<Button onPress={() => setTheme('dark')}>Set dark</Button>
				</div>
				<StoryCard title="Theme from className + localStorage" appearance="output">
					<pre data-testid="current-theme" className="font-mono">
						{theme ?? '(none)'}
					</pre>
				</StoryCard>
			</div>
		)
	},
	play: async ({ canvas }) => {
		await expect(canvas.getByTestId('current-theme')).toHaveTextContent('light')
		await userEvent.click(canvas.getByRole('button', { name: 'Set dark' }))
		await waitFor(() => expect(canvas.getByTestId('current-theme')).toHaveTextContent('dark'), {
			timeout: 2000
		})
	},
	afterEach: () => {
		localStorage.removeItem('use-theme-stores-story')
	}
}

export const FactoryTuplePattern: Story = {
	name: 'stores: factory tuples',
	tags: ['props'],
	parameters: defineDocsParam({
		description: {
			story:
				'Accepts store factory tuples [factory] or [factory, options]. Same pattern as createThemeHook and composeThemeStores. Uses factory form so the tuple array is created once.'
		},
		source: {
			code: dedent`
				useThemeStores(themes, () => [
					[classNameThemeStore],
					[localStorageThemeStore, { storageKey: 'app-theme' }]
				], { defaultTheme: 'light' })
			`
		}
	}),
	decorators: [withStoryCard(), showSource()],
	render: () => {
		const [theme, setTheme] = useThemeStores(
			themes,
			() =>
				[
					[classNameThemeStore],
					[localStorageThemeStore, { storageKey: 'use-theme-stores-factory-story' }]
				] as const,
			{ defaultTheme: 'light' }
		)

		return (
			<div className="flex flex-col gap-4 font-sans">
				<div className="flex flex-wrap gap-2">
					<Button onPress={() => setTheme('light')}>Set light</Button>
					<Button onPress={() => setTheme('dark')}>Set dark</Button>
				</div>
				<StoryCard title="Theme from factory tuples" appearance="output">
					<pre data-testid="current-theme" className="font-mono">
						{theme ?? '(none)'}
					</pre>
				</StoryCard>
			</div>
		)
	},
	play: async ({ canvas }) => {
		await expect(canvas.getByTestId('current-theme')).toHaveTextContent('light')
	},
	afterEach: () => {
		document.documentElement.classList.remove('theme-light', 'theme-dark')
		localStorage.removeItem('use-theme-stores-factory-story')
	}
}

export const ArrayForm: Story = {
	name: 'stores: array form',
	tags: ['props'],
	parameters: defineDocsParam({
		description: {
			story:
				'When using the array form (not a factory), the stores array must be memoized or ref-stable. Recreating the array each render breaks internal caching and subscriptions.'
		},
		source: {
			code: dedent`
				// Required: memoize so the array reference is stable
				const stores = useMemo(() => [inMemoryThemeStore(themes)] as const, [])
				const [theme, setTheme] = useThemeStores(themes, stores, { defaultTheme: 'light' })
			`
		}
	}),
	decorators: [withStoryCard(), showSource()],
	render: () => {
		const stores = useMemo(() => [inMemoryThemeStore(themes)] as const, [])
		const [theme, setTheme] = useThemeStores(themes, stores, { defaultTheme: 'light' })

		return (
			<div className="flex flex-col gap-4 font-sans">
				<div className="flex flex-wrap gap-2">
					<Button onPress={() => setTheme('light')}>Set light</Button>
					<Button onPress={() => setTheme('dark')}>Set dark</Button>
				</div>
				<StoryCard title="Array form (memoized)" appearance="output">
					<pre data-testid="current-theme" className="font-mono">
						{theme ?? '(none)'}
					</pre>
				</StoryCard>
			</div>
		)
	},
	play: async ({ canvas }) => {
		await expect(canvas.getByTestId('current-theme')).toHaveTextContent('light')
		await userEvent.click(canvas.getByRole('button', { name: 'Set dark' }))
		await waitFor(() => expect(canvas.getByTestId('current-theme')).toHaveTextContent('dark'), {
			timeout: 2000
		})
	}
}

export const Source: Story = {
	tags: ['source'],
	parameters: defineDocsParam({ source: { code } }),
	decorators: [showSource()]
}
