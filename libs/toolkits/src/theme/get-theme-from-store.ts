import type { ThemeMap, ThemeResult, ThemeStore } from './theme.types.ts'

export type GetThemeFromStoreOptions<Themes extends ThemeMap> = {
	store: ThemeStore<Themes>
	themes: Themes
	theme?: keyof Themes | null | undefined
}

/**
 * Gets the theme from a generic store (sync or async).
 *
 * Validates the store result against the themes map; uses the default theme when the stored value is missing or invalid.
 *
 * @param options - Store, themes map, and optional default theme
 * @returns Promise of the current theme result
 *
 * @example
 * ```ts
 * const store = { get: () => ({ theme: 'dark', value: 'theme-dark' }), set: () => {} }
 * const result = await getThemeFromStore({ store, themes: { light: 'theme-light', dark: 'theme-dark' }, theme: 'light' })
 * ```
 */
export async function getThemeFromStore<Themes extends ThemeMap>(
	options: GetThemeFromStoreOptions<Themes>
): Promise<ThemeResult<Themes>> {
	const raw = await options.store.get()
	if (raw && raw.theme in options.themes) return raw

	if (raw) {
		console.warn('The stored theme value is invalid')
	}

	return options.theme != null
		? {
				theme: options.theme,
				value: options.themes[options.theme]
			}
		: undefined
}
