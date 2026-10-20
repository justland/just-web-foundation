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
 * This is the OS (or browser) preference, not the scheme the page renders in.
 * It does not change when the page sets `color-scheme`, such as for a theme the user picked
 * (Chrome 154 keeps reporting the OS preference). Inside an iframe, it reports the
 * `color-scheme` of the `<iframe>` element. For the scheme an element renders in, use `observeColorScheme()`.
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
