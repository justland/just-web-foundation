import type { StoreEntry, ThemeMap } from './theme.types.ts'
import type { ThemeEntry } from './theme-entry.types.ts'

type StoreWithGet<Themes extends ThemeMap> = StoreEntry<Themes> & {
	get: () => ThemeEntry<Themes> | undefined | null | Promise<ThemeEntry<Themes> | undefined | null>
}

/**
 * Reads theme from stores using waterfall strategy.
 *
 * Iterates stores in order; returns first non-empty result.
 * Only includes stores that have a `get` method.
 *
 * @param stores - Array of theme stores
 * @param defaultTheme - Fallback when all stores return empty
 * @returns Resolved theme key or defaultTheme
 */
export async function getThemeFromStores<Themes extends ThemeMap>(
	stores: StoreEntry<Themes>[],
	defaultTheme: keyof Themes | undefined
): Promise<keyof Themes | undefined> {
	const withGet = stores.filter((s): s is StoreWithGet<Themes> => typeof s.get === 'function')

	for (const store of withGet) {
		const result = await Promise.resolve(store.get!())
		if (result !== undefined && result !== null) {
			return result.theme
		}
	}

	return defaultTheme
}
