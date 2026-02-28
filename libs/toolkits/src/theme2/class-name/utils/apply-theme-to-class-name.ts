import type { ThemeMap } from '../../theme.types.ts'

/**
 * Applies theme to element by updating its class attribute.
 *
 * Removes all theme classes from the element, then adds classes for the given theme.
 *
 * @param element - Target element
 * @param theme - Theme key to apply
 * @param themeMap - Record mapping theme keys to class name(s)
 */
export function applyThemeToClassName<Themes extends ThemeMap>(
	element: Element,
	theme: keyof Themes,
	themeMap: Themes
): void {
	const allThemeClasses = Object.values(themeMap).flatMap((v) => (Array.isArray(v) ? [...v] : [v]))
	const current = element.className.trim()
	const currentClasses = current ? current.split(/\s+/) : []
	const withoutThemes = currentClasses.filter((c) => !allThemeClasses.includes(c))
	const activeClasses =
		theme in themeMap
			? Array.isArray(themeMap[theme])
				? [...(themeMap[theme] as readonly string[])]
				: [themeMap[theme] as string]
			: []
	element.className = [...withoutThemes, ...activeClasses].filter(Boolean).join(' ')
}
