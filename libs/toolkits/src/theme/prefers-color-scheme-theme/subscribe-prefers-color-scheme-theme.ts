import { observePrefersColorScheme } from '../../color-scheme/observe-prefers-color-scheme.ts'
import { themeEntry } from '../theme-entry.ts'
import type { ThemeEntry } from '../theme-entry.types.ts'

type PrefersColorSchemeThemes = {
	light: string | readonly string[]
	dark: string | readonly string[]
}

/**
 * Subscribes to system `prefers-color-scheme` changes and invokes the handler with theme entries.
 *
 * Themes must only include `light` and `dark` keys—this mirrors the system preference.
 *
 * @param themes - Record with `light` and `dark` keys mapping to theme values
 * @param handler - Callback invoked when the color scheme preference changes
 * @returns Unsubscribe function
 */
export function subscribePrefersColorSchemeTheme<Themes extends PrefersColorSchemeThemes>(
	themes: Themes,
	handler: (entry: ThemeEntry<Themes>) => void
): () => void {
	return observePrefersColorScheme((scheme) => handler(themeEntry(themes, scheme)))
}
