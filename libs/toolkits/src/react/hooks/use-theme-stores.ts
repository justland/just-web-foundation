import { useMemo } from 'react'
import type {
	ComposeThemeStoreEntry,
	ComposeThemeStoresOptions
} from '../../theme/compose-theme-stores.ts'
import type { ThemeMap } from '../../theme/theme-map.types.ts'
import type { ThemeStoreFactory } from '../../theme/theme-store/theme-store-factory.types.ts'
import { createThemeHook } from '../theme/create-theme-hook.ts'

type ThemeStoresTuple<
	Themes extends ThemeMap,
	A extends ThemeStoreFactory<Themes> = never,
	B extends ThemeStoreFactory<Themes> = never,
	C extends ThemeStoreFactory<Themes> = never,
	D extends ThemeStoreFactory<Themes> = never,
	E extends ThemeStoreFactory<Themes> = never,
	F extends ThemeStoreFactory<Themes> = never,
	G extends ThemeStoreFactory<Themes> = never,
	H extends ThemeStoreFactory<Themes> = never
> = readonly [
	store1: ComposeThemeStoreEntry<Themes, A>,
	store2?: ComposeThemeStoreEntry<Themes, B>,
	store3?: ComposeThemeStoreEntry<Themes, C>,
	store4?: ComposeThemeStoreEntry<Themes, D>,
	store5?: ComposeThemeStoreEntry<Themes, E>,
	store6?: ComposeThemeStoreEntry<Themes, F>,
	store7?: ComposeThemeStoreEntry<Themes, G>,
	store8?: ComposeThemeStoreEntry<Themes, H>
]

/**
 * React hook that returns the current theme and a setter for composed theme stores.
 * Delegates to createThemeHook internally.
 *
 * Accepts `stores` in two forms:
 * - **Factory (recommended):** `() => [store1, store2, ...]` — run once on mount; no memoization needed.
 * - **Array:** `[store1, store2, ...]` — must be memoized or ref-stable; recreating the array each render breaks subscriptions.
 *
 * @param themes - ThemeMap mapping theme keys to their values (e.g. CSS class names)
 * @param stores - Array or factory returning 1–8 theme stores (see ComposeThemeStoreEntry)
 * @param options.defaultTheme - Fallback theme key when stores return empty; also used for SSR
 * @returns Tuple of [currentTheme, setTheme]
 *
 * @example
 * ```tsx
 * // Factory form — no memoization needed
 * const [theme, setTheme] = useThemeStores(
 *   themes,
 *   () => [inMemoryThemeStore(themes)],
 *   { defaultTheme: 'light' }
 * )
 *
 * // Array form — must be memoized
 * const stores = useMemo(() => [localStorageStore], [])
 * const [theme, setTheme] = useThemeStores(themes, stores, { defaultTheme: 'light' })
 * setTheme('dark')
 * ```
 */
export function useThemeStores<
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
	stores:
		| ThemeStoresTuple<Themes, A, B, C, D, E, F, G, H>
		| (() => ThemeStoresTuple<Themes, A, B, C, D, E, F, G, H>),
	options?: ComposeThemeStoresOptions<Themes>
): [keyof Themes | undefined, (theme: keyof Themes) => void] {
	const resolvedStores = useMemo(
		() => (typeof stores === 'function' ? stores() : stores),
		// Empty deps: factory runs once on mount; array form must be ref-stable (user memoizes)
		[]
	)
	const useTheme = createThemeHook<Themes, A, B, C, D, E, F, G, H>(themes, resolvedStores, options)
	return useTheme(options?.defaultTheme)
}
