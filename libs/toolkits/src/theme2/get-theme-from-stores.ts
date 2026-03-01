import type { ThemeEntry } from './theme-entry.types.ts'
import type { ThemeMap } from './theme-map.types.ts'
import type { AsyncThemeStore } from './types/async-theme-store.types.ts'
import type { ThemeStore } from './types/theme-store.types.ts'

type StoreWithRead<Themes extends ThemeMap> = (ThemeStore<Themes> | AsyncThemeStore<Themes>) & {
	read: () => ThemeEntry<Themes> | undefined | null | Promise<ThemeEntry<Themes> | undefined | null>
}

/**
 * Reads theme from stores using waterfall strategy.
 *
 * Iterates stores in order; returns first non-empty result.
 * Only includes stores that have a `read` method.
 *
 * @param stores - Array of theme stores
 * @param defaultTheme - Fallback when all stores return empty
 * @returns Resolved theme key or defaultTheme
 */
export async function getThemeFromStores<Themes extends ThemeMap>(
	stores: (ThemeStore<Themes> | AsyncThemeStore<Themes>)[],
	defaultTheme: keyof Themes | undefined
): Promise<keyof Themes | undefined> {
	const withRead = stores.filter((s): s is StoreWithRead<Themes> => typeof s.read === 'function')

	for (const store of withRead) {
		const result = await Promise.resolve(store.read!())
		if (result !== undefined && result !== null) {
			return result.theme
		}
	}

	return defaultTheme
}
