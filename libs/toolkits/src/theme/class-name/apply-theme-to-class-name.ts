import { getThemeDisplayValue } from '../theme-entry.ts'
import type { ThemeEntry } from '../theme-entry.types.ts'
import type { ThemeMap } from '../theme-map.types.ts'

/**
 * Applies theme to element by updating its class attribute.
 *
 * Removes all theme classes from the element, then adds classes for the given entry.
 * When entry is undefined, removes all theme classes (themeMap needed for clear path).
 *
 * @param element - Target element
 * @param entry - Theme entry to apply, or undefined to clear
 * @param themes - Record mapping theme keys to class names (used for clear case)
 */
export function applyThemeToClassName<Themes extends ThemeMap>(
	themes: Themes,
	element: Element,
	entry: ThemeEntry<Themes> | undefined
): void {
	const allThemeClasses = Object.values(themes).flatMap((v) =>
		Array.isArray(v.themeValue) ? [...v.themeValue] : [v.themeValue]
	)
	const current = element.className.trim()
	const currentClasses = current ? current.split(/\s+/) : []
	const withoutThemes = currentClasses.filter((c) => !allThemeClasses.includes(c))
	const displayValue = entry !== undefined ? getThemeDisplayValue(entry) : []
	const activeClasses =
		entry !== undefined ? (Array.isArray(displayValue) ? [...displayValue] : [displayValue]) : []
	element.className = [...withoutThemes, ...activeClasses].filter(Boolean).join(' ')
}
