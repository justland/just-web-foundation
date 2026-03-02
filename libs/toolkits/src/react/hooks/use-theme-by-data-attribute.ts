import { useCallback, useEffect, useMemo, useState } from 'react'
import { getDataAttribute } from '../../attributes/get-data-attribute.ts'
import { observeThemeFromStores } from '../../theme/_utils/observe-theme-from-stores.ts'
import { setThemeToStores } from '../../theme/_utils/set-theme-to-stores.ts'
import { resolveThemeFromDataAttribute } from '../../theme/data-attribute/resolve-theme-from-data-attribute.ts'
import { themeEntry } from '../../theme/theme-entry.ts'
import type { ThemeMap } from '../../theme/theme-map.types.ts'
import { dataAttributeThemeStore } from '../../theme/theme-store/data-attribute-theme-store/data-attribute-theme-store.ts'

/**
 * React hook that returns the current theme (from element data attribute) and a setter.
 * Subscribes to data attribute changes on the element so the returned theme stays in sync.
 *
 * @param themes - Record mapping theme keys to their data attribute values
 * @param options.attributeName - Data attribute name (e.g. `data-theme`)
 * @param options.defaultTheme - Fallback theme key when no matching attribute value is found
 * @param options.element - Element to read/set theme on (defaults to document.documentElement)
 * @returns Tuple of [currentTheme, setTheme]
 *
 * @example
 * ```tsx
 * const themes = { light: 'theme-light', dark: 'theme-dark' }
 * const [theme, setTheme] = useThemeByDataAttribute(themes, {
 *   attributeName: 'data-theme',
 *   defaultTheme: 'light'
 * })
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
export function useThemeByDataAttribute<Themes extends ThemeMap>(
	themes: Themes,
	options: {
		attributeName: `data-${string}`
		defaultTheme?: keyof Themes | undefined
		element?: Element | undefined
	}
): [keyof Themes | undefined, (theme: keyof Themes) => void] {
	const element =
		options.element ?? (typeof document !== 'undefined' ? document.documentElement : undefined)
	const defaultTheme = options.defaultTheme
	const attributeName = options.attributeName

	const store = useMemo(
		() =>
			dataAttributeThemeStore(themes, {
				attributeName,
				element
			}),
		[element, themes, attributeName]
	)

	const [theme, setThemeState] = useState<keyof Themes | undefined>(() => {
		if (element) {
			const attrValue = getDataAttribute(attributeName, element)
			const resolved = resolveThemeFromDataAttribute(attrValue, themes)
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
