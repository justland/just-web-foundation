import type { ThemeEntry } from './theme-entry.types.ts'
import type { ThemeMap } from './theme-map.types.ts'
import type { AsyncThemeStore } from './theme-store/async-theme-store.types.ts'
import type { ThemeStore } from './theme-store/theme-store.types.ts'

type StoreWithSet<Themes extends ThemeMap> = (ThemeStore<Themes> | AsyncThemeStore<Themes>) & {
	set: (entry: ThemeEntry<Themes> | undefined) => void | Promise<void>
}

/**
 * Writes theme entry to all stores that have a set method.
 *
 * @param stores - Array of theme stores
 * @param entry - Theme entry to write, or undefined to clear
 */
export async function setThemeToStores<Themes extends ThemeMap>(
	stores: (ThemeStore<Themes> | AsyncThemeStore<Themes>)[],
	entry: ThemeEntry<Themes> | undefined
): Promise<void> {
	const withSet = stores.filter((s): s is StoreWithSet<Themes> => typeof s.set === 'function')

	await Promise.all(withSet.map((store) => Promise.resolve(store.set!(entry))))
}
