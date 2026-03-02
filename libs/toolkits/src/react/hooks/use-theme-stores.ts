import type {
	ComposeThemeStoreEntry,
	ComposeThemeStoresOptions
} from '../../theme/compose-theme-stores.ts'
import type { ThemeMap } from '../../theme/theme-map.types.ts'
import type { ThemeStoreFactory } from '../../theme/theme-store/theme-store-factory.types.ts'
import { createThemeHook } from '../theme/create-theme-hook.ts'

/**
 * React hook that returns the current theme and a setter for composed theme stores.
 * Delegates to createThemeHook internally.
 *
 * @param themes - ThemeMap mapping theme keys to their values (e.g. CSS class names)
 * @param stores - Array of 1–8 theme stores or factory configs (see ComposeThemeStoreEntry)
 * @param options.defaultTheme - Fallback theme key when stores return empty; also used for SSR
 * @returns Tuple of [currentTheme, setTheme]
 *
 * @example
 * ```tsx
 * const [theme, setTheme] = useThemeStores(themes, [localStorageStore], { defaultTheme: 'light' })
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
	stores: [
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
): [keyof Themes | undefined, (theme: keyof Themes) => void] {
	const useTheme = createThemeHook<Themes, A, B, C, D, E, F, G, H>(themes, stores, options)
	return useTheme(options?.defaultTheme)
}
