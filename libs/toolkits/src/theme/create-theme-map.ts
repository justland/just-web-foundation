import type { ThemeMap } from './theme-map.types.ts'

/**
 * Wraps flat theme values into the polymorphic ThemeMap structure.
 * Useful for migration or keeping simple configs concise.
 *
 * @example
 * const themes = createThemeMap({
 *   light: 'theme-light',
 *   dark: 'theme-dark'
 * })
 * // => { light: { themeValue: 'theme-light' }, dark: { themeValue: 'theme-dark' } }
 */
export function createThemeMap<T extends string>(
	config: Record<T, string | readonly string[]>
): ThemeMap<T> {
	return Object.fromEntries(
		Object.entries(config).map(([k, v]) => [k, { themeValue: v }])
	) as ThemeMap<T>
}
