import type { ThemeEntry } from './theme-entry.types.ts'
import type { ThemeMap } from './theme-map.types.ts'
import type { AsyncThemeStore } from './types/async-theme-store.types.ts'
import type { ThemeStore } from './types/theme-store.types.ts'

type StoreWithWrite<Themes extends ThemeMap> = (ThemeStore<Themes> | AsyncThemeStore<Themes>) & {
	write: (entry: ThemeEntry<Themes> | undefined) => void | Promise<void>
}

/**
 * Writes theme entry to all stores that have a write method.
 *
 * @param stores - Array of theme stores
 * @param entry - Theme entry to write, or undefined to clear
 */
export async function setThemeToStores<Themes extends ThemeMap>(
	stores: (ThemeStore<Themes> | AsyncThemeStore<Themes>)[],
	entry: ThemeEntry<Themes> | undefined
): Promise<void> {
	const withWrite = stores.filter((s): s is StoreWithWrite<Themes> => typeof s.write === 'function')

	await Promise.all(withWrite.map((store) => Promise.resolve(store.write!(entry))))
}
