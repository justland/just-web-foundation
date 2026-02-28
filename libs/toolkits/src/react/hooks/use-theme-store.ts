import { useCallback, useEffect, useState } from 'react'
import { observeThemeFromStore } from '../../theme/observe-theme-from-store.ts'
import { setThemeToStore } from '../../theme/set-theme-to-store.ts'
import type { ThemeMap, ThemeStore } from '../../theme/theme.types.ts'

/**
 * React hook that returns the current theme (from a theme store) and a setter.
 * Uses get-theme-from-store, set-theme-to-store, and observe-theme-from-store internally.
 * Subscribes to store changes so the returned theme stays in sync.
 *
 * @param options - Configuration options
 * @param options.store - Theme store (get, set, optional subscribe)
 * @param options.themes - Record mapping theme keys to their class name values
 * @param options.defaultTheme - Fallback theme key when the store value is missing or invalid
 * @returns Tuple of [currentTheme, setTheme]
 *
 * @example
 * ```tsx
 * const store = createThemeStore()
 * const themes = { light: 'theme-light', dark: 'theme-dark' }
 * const [theme, setTheme] = useThemeStore({ store, themes, defaultTheme: 'light' })
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
export function useThemeStore<Themes extends ThemeMap>(options: {
	store: ThemeStore<Themes>
	themes: Themes
	theme?: keyof Themes | undefined
}): [keyof Themes | undefined, (theme: keyof Themes) => void] {
	const { store, themes, theme } = options

	const [result, setResult] = useState<
		{ theme: keyof Themes; value: Themes[keyof Themes] } | undefined
	>(undefined)

	useEffect(() => {
		const observer = observeThemeFromStore({
			store,
			themes,
			theme,
			handler: setResult,
		})
		return () => observer.disconnect()
	}, [store, themes, theme])

	const setTheme = useCallback(
		(themeKey: keyof Themes) => {
			setThemeToStore({ store, themes, theme: themeKey })
		},
		[store, themes],
	)

	return [result?.theme, setTheme]
}
