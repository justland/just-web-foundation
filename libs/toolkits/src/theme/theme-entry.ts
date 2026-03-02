import type { ThemeEntry } from './theme-entry.types.ts'
import type { ThemeMap } from './theme-map.types.ts'

/** Creates ThemeEntry from theme map and theme key. */
export function themeEntry<Themes extends ThemeMap>(
	themes: Themes,
	theme: keyof Themes
): ThemeEntry<Themes> {
	return { theme, value: themes[theme] }
}
