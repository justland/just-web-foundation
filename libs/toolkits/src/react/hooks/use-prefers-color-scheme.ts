import { useEffect, useState } from 'react'
import { getPrefersColorScheme } from '../../color-scheme/get-prefers-color-scheme.ts'
import { observePrefersColorScheme } from '../../color-scheme/observe-prefers-color-scheme.ts'

/**
 * React hook that returns the current system color scheme preference and re-renders when it changes.
 *
 * Uses `prefers-color-scheme` media query. Returns `'light'` or `'dark'`; re-renders when the user
 * changes their OS or browser light/dark setting.
 *
 * For SSR, initial value is `'light'` to avoid hydration mismatch; the real value syncs in `useEffect`.
 *
 * @returns Current system color scheme: `'light'` or `'dark'`
 *
 * @example
 * ```tsx
 * const scheme = usePrefersColorScheme()
 * return <div>System prefers: {scheme}</div>
 * ```
 */
export function usePrefersColorScheme(): 'light' | 'dark' {
	const [scheme, setScheme] = useState<'light' | 'dark'>(() => 'light')

	useEffect(() => {
		setScheme(getPrefersColorScheme())
		return observePrefersColorScheme(setScheme)
	}, [])

	return scheme
}
