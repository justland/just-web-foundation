import type { StoreEntry, ThemeMap } from './theme.types.ts'
import type { ThemeEntry } from './theme-entry.types.ts'

type StoreWithSet<Themes extends ThemeMap> = StoreEntry<Themes> & {
	set: (entry: ThemeEntry<Themes> | undefined) => void | Promise<void>
}

/**
 * Writes theme entry to all stores that have a set method.
 *
 * @param stores - Array of theme stores
 * @param entry - Theme entry to write, or undefined to clear
 */
export async function setThemeToStores<Themes extends ThemeMap>(
	stores: StoreEntry<Themes>[],
	entry: ThemeEntry<Themes> | undefined
): Promise<void> {
	const withSet = stores.filter((s): s is StoreWithSet<Themes> => typeof s.set === 'function')

	await Promise.all(withSet.map((store) => Promise.resolve(store.set!(entry))))
}
