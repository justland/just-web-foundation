import type { Required } from 'type-plus'
import { dummyThemeStore } from '../../../testing/theme/dummy-theme-store.ts'
import { parseClassName } from '../../class-name/parse-class-name.ts'
import { readClassName } from '../../class-name/read-class-name.ts'
import { stringifyClassName } from '../../class-name/stringify-class-name.ts'
import { subscribeClassName } from '../../class-name/subscribe-class-name.ts'
import { writeClassName } from '../../class-name/write-class-name.ts'
import type { ParseStoredTheme, StringifyStoredTheme } from '../../theme-entry.types.ts'
import type { ThemeMap } from '../../theme-map.types.ts'
import type { ThemeStore } from '../theme-store.types.ts'

/**
 * Creates a theme store that reads and writes via element class names.
 *
 * @param themes - Record mapping theme keys to class name(s)
 * @param options.element - Element to operate on (accepts null e.g. from refs). Defaults to document.documentElement.
 * @param options.parse - Custom parser (default: parseClassName)
 * @param options.stringify - Custom serializer (default: stringifyClassName)
 * @returns ThemeStore
 *
 * @example
 * ```ts
 * const themes = { current: 'theme-current', grayscale: 'theme-grayscale' }
 * const store = classNameThemeStore(themes)
 * store.read() // returns themeResult from element.className
 * store.write(themeEntry(themes, 'grayscale'))
 * store.subscribe((themeResult) => {})
 * ```
 */
export function classNameThemeStore<Themes extends ThemeMap>(
	themes: Themes,
	options?: {
		element?: Element | null | undefined
		parse?: ParseStoredTheme<Themes> | undefined
		stringify?: StringifyStoredTheme<Themes> | undefined
	}
): Required<ThemeStore<Themes>> {
	const element = options?.element ?? document?.documentElement

	if (!element) return dummyThemeStore

	const parse = options?.parse ?? parseClassName
	const stringify = options?.stringify ?? stringifyClassName

	return {
		read() {
			return readClassName(themes, { element, parse })
		},
		write(entry) {
			writeClassName(themes, entry, { element, stringify })
		},
		subscribe(handler) {
			return subscribeClassName(themes, handler, { element, parse })
		}
	}
}
