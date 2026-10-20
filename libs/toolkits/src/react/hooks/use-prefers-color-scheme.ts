import { useEffect, useState } from 'react'
import { getPrefersColorScheme } from '../../color-scheme/get-prefers-color-scheme.ts'
import { observePrefersColorScheme } from '../../color-scheme/observe-prefers-color-scheme.ts'

/**
 * React hook that returns the current system color scheme preference and re-renders when it changes.
 *
 * This is the OS (or browser) preference, not the scheme the page renders in.
 * It does not change when the page sets `color-scheme`, such as for a theme the user picked
 * (Chrome 154 keeps reporting the OS preference). Inside an iframe, it reports the
 * `color-scheme` of the `<iframe>` element. For the scheme an element renders in, use `useColorScheme()`.
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
