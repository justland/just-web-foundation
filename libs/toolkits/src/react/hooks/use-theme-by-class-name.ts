import { useCallback, useEffect, useMemo, useState } from 'react'
import { resolveThemeFromClassName } from '../../theme/class-name/resolve-theme-from-class-name.ts'
import { themeEntry } from '../../theme/theme-entry.ts'
import type { ThemeMap } from '../../theme/theme-map.types.ts'
import { classNameThemeStore } from '../../theme/theme-store/class-name-theme-store/class-name-theme-store.ts'
import { observeThemeFromStores } from '../../theme/utils/observe-theme-from-stores.ts'
import { setThemeToStores } from '../../theme/utils/set-theme-to-stores.ts'

/**
 * React hook that returns the current theme (from element class) and a setter.
 * Subscribes to class changes on the element so the returned theme stays in sync.
 *
 * @param options - Configuration options
 * @param options.themes - Record mapping theme keys to their class name values
 * @param options.theme - Fallback theme key when no matching class is found
 * @param options.element - Element to read/set theme on (defaults to document.documentElement)
 * @returns Tuple of [currentTheme, setTheme]
 *
 * @example
 * ```tsx
 * const themes = { light: 'theme-light', dark: 'theme-dark' }
 * const [theme, setTheme] = useThemeByClassName({ themes, theme: 'light' })
 *
 * return (
 *   <>
 *     <span>Current: {theme}</span>
 *     <button onClick={() => setTheme('dark')}>Dark</button>
 *     <button onClick={() => setTheme('light')}>Light</button>
 *   </>
 * )
 * ```
 */
export function useThemeByClassName<Themes extends ThemeMap>(options: {
	themes: Themes
	theme?: keyof Themes | undefined
	element?: Element | undefined
}): [keyof Themes | undefined, (theme: keyof Themes) => void] {
	const element =
		options.element ?? (typeof document !== 'undefined' ? document.documentElement : undefined)

	const store = useMemo(
		() => classNameThemeStore(options.themes, { element: element ?? null }),
		[element, options.themes]
	)

	const [theme, setThemeState] = useState<keyof Themes | undefined>(() => {
		if (element) {
			const resolved = resolveThemeFromClassName(element.className, options.themes)
			return resolved ?? options.theme
		}
		return options.theme
	})

	useEffect(() => {
		if (!element) return
		const unobserve = observeThemeFromStores([store], options.theme, setThemeState)
		return unobserve
	}, [element, store, options.theme])

	const setTheme = useCallback(
		(themeKey: keyof Themes) => {
			if (element) {
				setThemeToStores([store], themeEntry(themeKey, options.themes))
			}
		},
		[element, store, options.themes]
	)

	return [theme, setTheme]
}
