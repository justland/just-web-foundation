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
 * This is the OS (or browser) preference, not the scheme the page renders in.
 * It does not change when the page sets `color-scheme`, such as for a theme the user picked
 * (Chrome 154 keeps reporting the OS preference). Inside an iframe, it reports the
 * `color-scheme` of the `<iframe>` element. For the scheme an element renders in, use `getColorScheme()`.
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
