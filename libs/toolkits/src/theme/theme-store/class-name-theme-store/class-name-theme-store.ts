import type { Required } from 'type-plus'
import { observeAttributes } from '../../../attributes/observe-attribute.ts'
import { dummyThemeStore } from '../../../testing/theme/dummy-theme-store.ts'
import { applyThemeToClassName } from '../../class-name/apply-theme-to-class-name.ts'
import { resolveThemeFromClassName } from '../../class-name/resolve-theme-from-class-name.ts'
import { themeEntry } from '../../theme-entry.ts'
import type { ThemeMap } from '../../theme-map.types.ts'
import type { ThemeStore } from '../theme-store.types.ts'

/**
 * Creates a theme store that reads and writes via element class names.
 *
 * @param themes - Record mapping theme keys to class name(s)
 * @param options.element - Element to operate on (defaults to document.documentElement)
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
	options?: { element?: Element | undefined }
): Required<ThemeStore<Themes>> {
	const element = options?.element ?? document?.documentElement

	if (!element) return dummyThemeStore

	return {
		read() {
			const theme = resolveThemeFromClassName(element.className, themes)
			if (theme === undefined) return undefined
			return themeEntry(themes, theme)
		},
		write(entry) {
			applyThemeToClassName(element, entry, themes)
		},
		subscribe(handler) {
			let lastEmitted: keyof Themes | undefined | null = null
			const observer = observeAttributes(
				{
					class: (value) => {
						const theme = value ? resolveThemeFromClassName(value, themes) : undefined
						const entry = theme ? themeEntry(themes, theme) : undefined
						const key = theme ?? undefined

						if (lastEmitted === key) return
						lastEmitted = key
						handler(entry)
					}
				},
				element
			)
			return () => observer.disconnect()
		}
	}
}
