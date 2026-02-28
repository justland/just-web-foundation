import type { ThemeMap } from './theme.types.ts'
import type { ThemeEntry } from './theme-entry.types.ts'

/** Creates ThemeEntry from theme key and theme map. */
export function themeEntry<Themes extends ThemeMap>(
	theme: keyof Themes,
	themeMap: Themes
): ThemeEntry<Themes> {
	return { theme, value: themeMap[theme] }
}
