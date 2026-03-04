import { getPrefersColorScheme } from '../../color-scheme/get-prefers-color-scheme.ts'
import { themeEntry } from '../theme-entry.ts'
import type { ThemeEntry } from '../theme-entry.types.ts'

type PrefersColorSchemeThemes = {
	light: string | readonly string[]
	dark: string | readonly string[]
}

export interface ReadPrefersColorSchemeThemeOptions {
	defaultColorScheme?: 'light' | 'dark' | undefined
}

/**
 * Reads a theme entry from the system `prefers-color-scheme` media query.
 *
 * Themes must only include `light` and `dark` keys—this mirrors the system preference.
 *
 * @param themes - Record with `light` and `dark` keys mapping to theme values
 * @param options.defaultColorScheme - Fallback when matchMedia is unavailable (e.g. SSR, default: 'light')
 * @returns ThemeEntry for current system preference
 */
export function readPrefersColorSchemeTheme<Themes extends PrefersColorSchemeThemes>(
	themes: Themes,
	options?: ReadPrefersColorSchemeThemeOptions | undefined
): ThemeEntry<Themes> {
	const defaultColorScheme = options?.defaultColorScheme ?? 'light'
	const scheme = getPrefersColorScheme(defaultColorScheme)
	return themeEntry(themes, scheme)
}
