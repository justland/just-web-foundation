import type { ThemeEntry } from './theme-entry.types.ts'
import type { ThemeMap } from './theme-map.types.ts'

/** Returns the display value (string or string[]) from a ThemeEntry for DOM application. */
export function getThemeDisplayValue<Themes extends ThemeMap>(
	entry: ThemeEntry<Themes>
): string | readonly string[] {
	return entry.value.themeValue
}

/** Creates ThemeEntry from theme map and theme key. */
export function themeEntry<Themes extends ThemeMap>(
	themes: Themes,
	theme: keyof Themes
): ThemeEntry<Themes> {
	return { theme, value: themes[theme] }
}
