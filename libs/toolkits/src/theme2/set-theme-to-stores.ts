import type { StoreEntry, ThemeMap } from './theme.types.ts'

type StoreWithSet<Themes extends ThemeMap> = StoreEntry<Themes> & {
	set: (theme: keyof Themes) => void | Promise<void>
}

/**
 * Writes theme to all stores that have a set method.
 *
 * @param stores - Array of theme stores
 * @param theme - Theme key to write
 */
export async function setThemeToStores<Themes extends ThemeMap>(
	stores: StoreEntry<Themes>[],
	theme: keyof Themes
): Promise<void> {
	const withSet = stores.filter((s): s is StoreWithSet<Themes> => typeof s.set === 'function')

	await Promise.all(withSet.map((store) => Promise.resolve(store.set!(theme))))
}
