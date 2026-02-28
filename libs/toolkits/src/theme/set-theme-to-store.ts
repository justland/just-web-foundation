import type { ThemeMap, ThemeResult, ThemeStore } from './theme.types.ts'

export type SetThemeToStoreOptions<Themes extends ThemeMap> = {
	store: ThemeStore<Themes>
	themes: Themes
	theme?: keyof Themes | null | undefined
}

/**
 * Sets the theme in a generic store (sync or async).
 *
 * Writes the theme result when the theme key is in the themes map; clears (undefined) when theme is null or undefined.
 *
 * @param options - Store, themes map, and theme key to write (or null to clear)
 * @returns Promise that resolves when the store has been updated
 *
 * @example
 * ```ts
 * await setThemeToStore({
 *   store,
 *   themes: { light: 'theme-light', dark: 'theme-dark' },
 *   theme: 'dark',
 * })
 * ```
 */
export async function setThemeToStore<Themes extends ThemeMap>(
	options: SetThemeToStoreOptions<Themes>,
): Promise<void> {
	const result: ThemeResult<Themes> =
		options.theme != null
			? {
					theme: options.theme,
					value: options.themes[options.theme],
				}
			: undefined
	await Promise.resolve(options.store.set(result))
}
