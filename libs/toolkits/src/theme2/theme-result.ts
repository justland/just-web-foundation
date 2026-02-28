import type { ThemeMap } from './theme.types.ts'
import type { ThemeResult } from './theme-result.types.ts'

/** Creates ThemeResult from theme key and theme map. */
export function themeResult<Themes extends ThemeMap>(
	theme: keyof Themes,
	themeMap: Themes
): ThemeResult<Themes> {
	return { theme, value: themeMap[theme] }
}
