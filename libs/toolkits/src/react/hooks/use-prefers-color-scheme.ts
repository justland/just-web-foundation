import { useEffect, useState } from 'react'
import { getPrefersColorScheme } from '../../color-scheme/get-prefers-color-scheme.ts'
import { observePrefersColorScheme } from '../../color-scheme/observe-prefers-color-scheme.ts'

/**
 * React hook that returns the current system color scheme preference and re-renders when it changes.
 *
 * Uses `prefers-color-scheme` media query. Returns `'light'` or `'dark'`; re-renders when the user
 * changes their OS or browser light/dark setting.
 *
 * For SSR, uses `defaultColorScheme` when `matchMedia` is unavailable. On client, reads the real
 * value immediately (no flicker); `useEffect` syncs and subscribes to changes.
 *
 * @param defaultColorScheme - Fallback when `matchMedia` is unavailable (default: `'light'`)
 * @returns Current system color scheme: `'light'` or `'dark'`
 *
 * @example
 * ```tsx
 * const scheme = usePrefersColorScheme()
 * return <div>System prefers: {scheme}</div>
 * ```
 *
 * @example
 * ```tsx
 * const scheme = usePrefersColorScheme('dark')
 * return <div>System prefers: {scheme}</div>
 * ```
 */
export function usePrefersColorScheme(
	defaultColorScheme: 'light' | 'dark' = 'light'
): 'light' | 'dark' {
	const [scheme, setScheme] = useState<'light' | 'dark'>(() =>
		getPrefersColorScheme(defaultColorScheme)
	)

	useEffect(() => {
		setScheme(getPrefersColorScheme())
		return observePrefersColorScheme(setScheme)
	}, [])

	return scheme
}
