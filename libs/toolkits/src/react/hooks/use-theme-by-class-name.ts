import { useCallback, useEffect, useState } from 'react'
import { observeAttributes } from '../../attributes/observe-attribute.ts'
import { getThemeByClassName } from '../../theme/get-theme-by-class-name.ts'
import { setThemeByClassName } from '../../theme/set-theme-by-class-name.ts'
import type { ThemeMap } from '../../theme/theme.types.ts'

/**
 * React hook that returns the current theme (from element class) and a setter.
 * Subscribes to class changes on the element so the returned theme stays in sync.
 *
 * @param options - Configuration options
 * @param options.themes - Record mapping theme keys to their class name values
 * @param options.defaultTheme - Fallback theme key when no matching class is found
 * @param options.element - Element to read/set theme on (defaults to document.documentElement)
 * @returns Tuple of [currentTheme, setTheme]
 *
 * @example
 * ```tsx
 * const themes = { light: 'theme-light', dark: 'theme-dark' }
 * const [theme, setTheme] = useThemeByClassName({ themes, defaultTheme: 'light' })
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
	defaultTheme?: keyof Themes | undefined
	element?: Element | undefined
}): [keyof Themes | undefined, (theme: keyof Themes) => void] {
	const element =
		options.element ?? (typeof document !== 'undefined' ? document.documentElement : undefined)

	const [theme, setThemeState] = useState<keyof Themes | undefined>(() =>
		element
			? getThemeByClassName({ themes: options.themes, defaultTheme: options.defaultTheme, element })
			: options.defaultTheme,
	)

	useEffect(() => {
		if (!element) return

		setThemeState(
			getThemeByClassName({ themes: options.themes, defaultTheme: options.defaultTheme, element }),
		)

		const observer = observeAttributes(
			{
				class: () => {
					setThemeState(
						getThemeByClassName({
							themes: options.themes,
							defaultTheme: options.defaultTheme,
							element,
						}),
					)
				},
			},
			element,
		)
		return () => observer.disconnect()
	}, [element, options.themes, options.defaultTheme])

	const setTheme = useCallback(
		(themeKey: keyof Themes) => {
			if (element) {
				setThemeByClassName({ themes: options.themes, theme: themeKey, element })
			}
		},
		[element, options.themes],
	)

	return [theme, setTheme]
}
