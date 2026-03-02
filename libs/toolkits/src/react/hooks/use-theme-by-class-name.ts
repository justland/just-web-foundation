import { useCallback, useEffect, useMemo, useState } from 'react'
import { observeThemeFromStores } from '../../theme/_utils/observe-theme-from-stores.ts'
import { setThemeToStores } from '../../theme/_utils/set-theme-to-stores.ts'
import { resolveThemeFromClassName } from '../../theme/class-name/resolve-theme-from-class-name.ts'
import { themeEntry } from '../../theme/theme-entry.ts'
import type { ThemeMap } from '../../theme/theme-map.types.ts'
import { classNameThemeStore } from '../../theme/theme-store/class-name-theme-store/class-name-theme-store.ts'

/**
 * React hook that returns the current theme (from element class) and a setter.
 * Subscribes to class changes on the element so the returned theme stays in sync.
 *
 * @param themes - Record mapping theme keys to their class name values
 * @param options.theme - Fallback theme key when no matching class is found
 * @param options.element - Element to read/set theme on (defaults to document.documentElement)
 * @returns Tuple of [currentTheme, setTheme]
 *
 * @example
 * ```tsx
 * const themes = { light: 'theme-light', dark: 'theme-dark' }
 * const [theme, setTheme] = useThemeByClassName(themes, { theme: 'light' })
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
export function useThemeByClassName<Themes extends ThemeMap>(
	themes: Themes,
	options?: {
		defaultTheme?: keyof Themes | undefined
		element?: Element | undefined
	}
): [keyof Themes | undefined, (theme: keyof Themes) => void] {
	const element =
		options?.element ?? (typeof document !== 'undefined' ? document.documentElement : undefined)
	const defaultTheme = options?.defaultTheme

	const store = useMemo(() => classNameThemeStore(themes, { element }), [element, themes])

	const [theme, setThemeState] = useState<keyof Themes | undefined>(() => {
		if (element) {
			const resolved = resolveThemeFromClassName(element.className, themes)
			return resolved ?? defaultTheme
		}
		return defaultTheme
	})

	useEffect(() => {
		if (!element) return
		const unobserve = observeThemeFromStores([store], defaultTheme, setThemeState)
		return unobserve
	}, [element, store, defaultTheme])

	const setTheme = useCallback(
		(themeKey: keyof Themes) => {
			if (element) {
				setThemeToStores([store], themeEntry(themeKey, themes))
			}
		},
		[element, store, themes]
	)

	return [theme, setTheme]
}
