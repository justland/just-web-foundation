import type { RequiredPick } from 'type-plus'
import { getPrefersColorScheme } from '../../../color-scheme/get-prefers-color-scheme.ts'
import { observePrefersColorScheme } from '../../../color-scheme/observe-prefers-color-scheme.ts'
import { themeEntry } from '../../theme-entry.ts'
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
			return themeEntry(getPrefersColorScheme(), themes)
		},
		subscribe(handler) {
			return observePrefersColorScheme((scheme) => handler(themeEntry(scheme, themes)))
		}
	}
}
