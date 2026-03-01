import type { Required } from 'type-plus'
import { observeAttributes } from '../../../attributes/observe-attribute.ts'
import { applyThemeToClassName } from '../../class-name/apply-theme-to-class-name.ts'
import { resolveThemeFromClassName } from '../../class-name/resolve-theme-from-class-name.ts'
import { themeEntry } from '../../theme-entry.ts'
import type { ThemeMap } from '../../theme-map.types.ts'
import { dummyThemeStore } from '../dummy-theme-store.ts'
import type { ThemeStore } from '../theme-store.types.ts'

export type ClassNameThemeStoreOptions<Themes extends ThemeMap> = {
	themes: Themes
	element?: Element | null
}

/**
 * Creates a theme store that reads and writes via element class names.
 *
 * @param options.element - Element to operate on (defaults to document.documentElement)
 * @param options.themes - Record mapping theme keys to class name(s)
 * @returns ThemeStore
 *
 * @example
 * ```ts
 * const store = classNameThemeStore({
 *   themes: { current: 'theme-current', grayscale: 'theme-grayscale' },
 * })
 * store.read() // returns themeResult from element.className
 * store.write(themeEntry('grayscale', themeMap))
 * store.subscribe((themeResult) => {})
 * ```
 */
export function classNameThemeStore<Themes extends ThemeMap>(
	options: ClassNameThemeStoreOptions<Themes>
): Required<ThemeStore<Themes>> {
	const element = options.element ?? document?.documentElement

	if (!element) return dummyThemeStore

	const { themes } = options

	return {
		read() {
			const theme = resolveThemeFromClassName(element.className, themes)
			if (theme === undefined) return undefined
			return themeEntry(theme, themes)
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
						const entry = theme ? themeEntry(theme, themes) : undefined
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
