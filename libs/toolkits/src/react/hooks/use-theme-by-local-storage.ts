import { useCallback, useEffect, useMemo, useState } from 'react'
import { observeThemeFromStores } from '../../theme/_utils/observe-theme-from-stores.ts'
import { setThemeToStores } from '../../theme/_utils/set-theme-to-stores.ts'
import { themeEntry } from '../../theme/theme-entry.ts'
import type { ThemeEntry } from '../../theme/theme-entry.types.ts'
import type { ThemeMap } from '../../theme/theme-map.types.ts'
import { localStorageThemeStore } from '../../theme/theme-store/local-storage-theme-store/local-storage-theme-store.ts'

/**
 * React hook that returns the current theme (from localStorage) and a setter.
 * Subscribes to storage changes so the returned theme stays in sync across tabs.
 *
 * @param themes - Record mapping theme keys to their values
 * @param options.storageKey - localStorage key to persist the theme
 * @param options.defaultTheme - Fallback theme key when no stored value is found
 * @param options.parse - Optional parse function (default: parseThemeEntry)
 * @returns Tuple of [currentTheme, setTheme]
 *
 * @example
 * ```tsx
 * const themes = { light: { themeValue: 'theme-light' }, dark: { themeValue: 'theme-dark' } }
 * const [theme, setTheme] = useThemeByLocalStorage(themes, {
 *   storageKey: 'app-theme',
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
export function useThemeByLocalStorage<Themes extends ThemeMap>(
	themes: Themes,
	options: {
		storageKey: string
		defaultTheme?: keyof Themes | undefined
		parse?:
			| ((themes: Themes, value: string | null | undefined) => ThemeEntry<Themes> | undefined)
			| undefined
	}
): [keyof Themes | undefined, (theme: keyof Themes) => void] {
	const { storageKey, defaultTheme, parse } = options

	const store = useMemo(
		() => localStorageThemeStore(themes, { storageKey, parse }),
		[themes, storageKey, parse]
	)

	const [theme, setThemeState] = useState<keyof Themes | undefined>(
		() => store.read()?.theme ?? defaultTheme
	)

	useEffect(() => {
		const unobserve = observeThemeFromStores([store], defaultTheme, setThemeState)
		return unobserve
	}, [store, defaultTheme])

	const setTheme = useCallback(
		(themeKey: keyof Themes) => {
			setThemeToStores([store], themeEntry(themes, themeKey))
		},
		[store, themes]
	)

	return [theme, setTheme]
}
