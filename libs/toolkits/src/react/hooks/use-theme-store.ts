import { useCallback, useEffect, useState } from 'react'
import { themeEntry } from '../../theme/theme-entry.ts'
import type { ThemeMap } from '../../theme/theme-map.types.ts'
import type { AsyncThemeStore } from '../../theme/theme-store/async-theme-store.types.ts'
import type { ThemeStore } from '../../theme/theme-store/theme-store.types.ts'
import { observeThemeFromStores } from '../../theme/utils/observe-theme-from-stores.ts'
import { setThemeToStores } from '../../theme/utils/set-theme-to-stores.ts'

/**
 * React hook that returns the current theme (from a theme store) and a setter.
 * Uses observeThemeFromStores and setThemeToStores internally.
 * Subscribes to store changes so the returned theme stays in sync.
 *
 * @param options - Configuration options
 * @param options.store - Theme store (read, write, optional subscribe)
 * @param options.themes - Record mapping theme keys to their class name values
 * @param options.theme - Fallback theme key when the store value is missing or invalid
 * @returns Tuple of [currentTheme, setTheme]
 *
 * @example
 * ```tsx
 * const store = inMemoryThemeStore(themes)
 * const themes = { light: 'theme-light', dark: 'theme-dark' }
 * const [theme, setTheme] = useThemeStore({ store, themes, theme: 'light' })
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
	store: ThemeStore<Themes> | AsyncThemeStore<Themes>
	themes: Themes
	theme?: keyof Themes | undefined
}): [keyof Themes | undefined, (theme: keyof Themes) => void] {
	const { store, themes, theme } = options

	const [currentTheme, setCurrentTheme] = useState<keyof Themes | undefined>(undefined)

	useEffect(() => {
		const unobserve = observeThemeFromStores([store], theme, setCurrentTheme)
		return unobserve
	}, [store, theme])

	const setTheme = useCallback(
		(themeKey: keyof Themes) => {
			setThemeToStores([store], themeEntry(themeKey, themes))
		},
		[store, themes]
	)

	return [currentTheme, setTheme]
}
