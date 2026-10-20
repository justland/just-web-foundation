import type { RequiredPick } from 'type-plus'
import { readPrefersColorSchemeTheme } from '../../prefers-color-scheme-theme/read-prefers-color-scheme-theme.ts'
import { subscribePrefersColorSchemeTheme } from '../../prefers-color-scheme-theme/subscribe-prefers-color-scheme-theme.ts'
import type { ThemeStore } from '../theme-store.types.ts'

type PrefersColorSchemeThemes = {
	light: string | readonly string[]
	dark: string | readonly string[]
}

/**
 * Creates a read-only theme store that reads from `prefers-color-scheme`.
 *
 * **Color-scheme specific:** Themes must only include `light` and `dark` keys—this store
 * mirrors the system preference which is always one of these.
 *
 * This is the OS (or browser) preference, not the scheme the page renders in.
 * It does not change when the page sets `color-scheme`, such as for a theme the user picked
 * (Chrome 154 keeps reporting the OS preference). Inside an iframe, it reports the
 * `color-scheme` of the `<iframe>` element. For the scheme an element renders in, use `getColorScheme()`.
 *
 * Returns `ThemeEntry` for `light` or `dark` based on system preference.
 * No write method—the value is controlled by the system.
 *
 * @param themes - Record with `light` and `dark` keys mapping to theme values
 * @returns ThemeStore with read and subscribe only
 *
 * @example
 * ```ts
 * const themes = { light: 'theme-light', dark: 'theme-dark' }
 * const store = prefersColorSchemeThemeStore(themes)
 * store.read() // ThemeEntry for current system preference
 * store.subscribe((entry) => {})
 * ```
 */
export function prefersColorSchemeThemeStore<Themes extends PrefersColorSchemeThemes>(
	themes: Themes
): RequiredPick<ThemeStore<Themes>, 'read' | 'subscribe'> {
	return {
		read() {
			return readPrefersColorSchemeTheme(themes)
		},
		subscribe(handler) {
			return subscribePrefersColorSchemeTheme(themes, handler)
		}
	}
}
