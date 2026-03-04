import { useCallback, useSyncExternalStore } from 'react'
import type { Required } from 'type-plus'
import {
	type ComposeThemeStoreEntry,
	type ComposeThemeStoresOptions,
	composeThemeStores
} from '../../theme/compose-theme-stores.ts'
import { themeEntry } from '../../theme/theme-entry.ts'
import type { ThemeEntry } from '../../theme/theme-entry.types.ts'
import type { ThemeMap } from '../../theme/theme-map.types.ts'
import type { AsyncThemeStore } from '../../theme/theme-store/async-theme-store.types.ts'
import type { ThemeStoreFactory } from '../../theme/theme-store/theme-store-factory.types.ts'

/**
 * Creates a React hook for theme selection that reads from and writes to composed theme stores.
 *
 * The returned hook subscribes to store changes via `useSyncExternalStore`, supports SSR
 * (uses `defaultTheme` for server snapshot), and returns a `[theme, setTheme]` tuple.
 * Channels are cached per store configuration and default theme for efficient reuse.
 *
 * @param themes - ThemeMap mapping theme keys to their values (e.g. CSS class names)
 * @param stores - Array of 1–8 theme stores or factory configs (see ComposeThemeStoreEntry)
 * @param options.defaultTheme - Fallback theme key when stores return empty; also used for SSR
 * @returns A `useTheme` hook that returns `[currentTheme, setTheme]` tuple
 *
 * @example
 * ```ts
 * const useTheme = createThemeHook(themes, [localStorageStore], { defaultTheme: 'light' })
 * const [theme, setTheme] = useTheme()
 * setTheme('dark')
 * ```
 */
export function createThemeHook<
	Themes extends ThemeMap,
	A extends ThemeStoreFactory<Themes> = never,
	B extends ThemeStoreFactory<Themes> = never,
	C extends ThemeStoreFactory<Themes> = never,
	D extends ThemeStoreFactory<Themes> = never,
	E extends ThemeStoreFactory<Themes> = never,
	F extends ThemeStoreFactory<Themes> = never,
	G extends ThemeStoreFactory<Themes> = never,
	H extends ThemeStoreFactory<Themes> = never
>(
	themes: Themes,
	stores: readonly [
		store1: ComposeThemeStoreEntry<Themes, A>,
		store2?: ComposeThemeStoreEntry<Themes, B>,
		store3?: ComposeThemeStoreEntry<Themes, C>,
		store4?: ComposeThemeStoreEntry<Themes, D>,
		store5?: ComposeThemeStoreEntry<Themes, E>,
		store6?: ComposeThemeStoreEntry<Themes, F>,
		store7?: ComposeThemeStoreEntry<Themes, G>,
		store8?: ComposeThemeStoreEntry<Themes, H>
	],
	options?: ComposeThemeStoresOptions<Themes>
): (
	overrideDefaultTheme?: keyof Themes | undefined
) => [keyof Themes | undefined, (theme: keyof Themes) => void] {
	const { defaultTheme } = options ?? {}
	return function useTheme(overrideDefaultTheme?: keyof Themes | undefined) {
		const effectiveDefault = overrideDefaultTheme ?? defaultTheme
		const channel = getOrCreateChannel<Themes, A, B, C, D, E, F, G, H>(themes, stores, {
			defaultTheme: effectiveDefault
		})

		const theme = useSyncExternalStore<keyof Themes | undefined>(
			channel.subscribe,
			channel.getSnapshot,
			channel.getServerSnapshot
		)

		const setTheme = useCallback(
			async (newTheme: keyof Themes) => {
				await channel.setTheme(newTheme)
			},
			[channel]
		)

		return [theme, setTheme]
	}
}

/**
 * Creates a subscription channel bridging a composed theme store to React's useSyncExternalStore.
 * Manages listeners, initial async read from store, and delegates setTheme to store.write.
 *
 * @internal
 */
function createSharedChannel<Themes extends ThemeMap>(
	themes: Themes,
	composedStore: Required<AsyncThemeStore<Themes>>,
	defaultTheme: keyof Themes | undefined
) {
	let lastTheme: keyof Themes | undefined = defaultTheme
	const listeners = new Set<(theme: keyof Themes | undefined) => void>()

	const notify = (theme: keyof Themes | undefined) => {
		lastTheme = theme
		for (const fn of listeners) {
			fn(theme)
		}
	}

	const handleStoreUpdate = (entry: ThemeEntry<Themes> | undefined) => {
		notify(entry?.theme ?? defaultTheme)
	}

	// Initial read to populate lastTheme (compose store subscribe has no initial notify)
	void Promise.resolve(composedStore.read()).then((entry: ThemeEntry<Themes> | undefined) => {
		notify(entry?.theme ?? defaultTheme)
	})

	let unobserve: () => void = composedStore.subscribe(handleStoreUpdate)
	let isSubscribedToStore = true

	const subscribe = (listener: (theme: keyof Themes | undefined) => void) => {
		if (!isSubscribedToStore) {
			unobserve = composedStore.subscribe(handleStoreUpdate)
			isSubscribedToStore = true
		}
		listeners.add(listener)
		listener(lastTheme)
		return () => {
			listeners.delete(listener)
			if (listeners.size === 0) {
				unobserve()
				isSubscribedToStore = false
			}
		}
	}

	const getSnapshot = (): keyof Themes | undefined => lastTheme
	const getServerSnapshot = (): keyof Themes | undefined => defaultTheme

	return {
		subscribe,
		getSnapshot,
		getServerSnapshot,
		setTheme: (theme: keyof Themes) => composedStore.write(themeEntry(themes, theme))
	}
}

const channelsByStores = new WeakMap<
	object,
	Map<string | undefined, ReturnType<typeof createSharedChannel<any>>>
>()

/**
 * Returns a cached shared channel for the given themes, stores, and defaultTheme.
 * Channels are keyed by stores (WeakMap) and defaultTheme to avoid duplicate subscriptions.
 *
 * @internal
 */
function getOrCreateChannel<
	Themes extends ThemeMap,
	A extends ThemeStoreFactory<Themes> = never,
	B extends ThemeStoreFactory<Themes> = never,
	C extends ThemeStoreFactory<Themes> = never,
	D extends ThemeStoreFactory<Themes> = never,
	E extends ThemeStoreFactory<Themes> = never,
	F extends ThemeStoreFactory<Themes> = never,
	G extends ThemeStoreFactory<Themes> = never,
	H extends ThemeStoreFactory<Themes> = never
>(
	themes: Themes,
	stores: readonly [
		store1: ComposeThemeStoreEntry<Themes, A>,
		store2?: ComposeThemeStoreEntry<Themes, B>,
		store3?: ComposeThemeStoreEntry<Themes, C>,
		store4?: ComposeThemeStoreEntry<Themes, D>,
		store5?: ComposeThemeStoreEntry<Themes, E>,
		store6?: ComposeThemeStoreEntry<Themes, F>,
		store7?: ComposeThemeStoreEntry<Themes, G>,
		store8?: ComposeThemeStoreEntry<Themes, H>
	],
	options?: ComposeThemeStoresOptions<Themes> | undefined
) {
	const { defaultTheme } = options ?? {}
	const storesKey = stores as unknown as object
	let byDefault = channelsByStores.get(storesKey) as Map<
		keyof Themes | undefined,
		ReturnType<typeof createSharedChannel<Themes>>
	>
	if (!byDefault) {
		byDefault = new Map<keyof Themes | undefined, ReturnType<typeof createSharedChannel<Themes>>>()
		channelsByStores.set(storesKey, byDefault as any)
	}
	let channel = byDefault.get(defaultTheme) as ReturnType<typeof createSharedChannel<Themes>>
	if (!channel) {
		const composedStore = composeThemeStores(themes, stores, { defaultTheme })
		channel = createSharedChannel<Themes>(themes, composedStore, defaultTheme)
		byDefault.set(defaultTheme, channel)
	}
	return channel
}
