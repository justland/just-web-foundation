import { useEffect, useState } from 'react'
import type { ColorScheme } from '../../color-scheme/color-scheme.types.ts'
import { getColorScheme } from '../../color-scheme/get-color-scheme.ts'
import { observeColorScheme } from '../../color-scheme/observe-color-scheme.ts'

/**
 * React hook that returns the color scheme an element renders in, and re-renders when it changes.
 *
 * Follows the CSS `color-scheme` property, so it reflects a theme the user picked.
 * `usePrefersColorScheme()` reports the OS preference only.
 * See `getColorScheme()` for how the scheme is resolved and `observeColorScheme()` for which changes it sees.
 *
 * For SSR, returns `defaultColorScheme`. On the client, reads the real value immediately;
 * `useEffect` syncs and subscribes to changes.
 *
 * @param options.element - Element to read (accepts null e.g. from refs). Defaults to `document.documentElement`.
 * @param options.defaultColorScheme - Returned when there is no DOM (default: `'light'`)
 * @returns `'light'` or `'dark'`
 *
 * @example
 * ```tsx
 * const scheme = useColorScheme()
 * return <CodeBlock theme={scheme === 'dark' ? 'github-dark' : 'github-light'} />
 * ```
 */
export function useColorScheme(
	options?:
		| { element?: Element | null | undefined; defaultColorScheme?: ColorScheme | undefined }
		| undefined
): ColorScheme {
	const element = options?.element
	const defaultColorScheme = options?.defaultColorScheme
	const [scheme, setScheme] = useState<ColorScheme>(() =>
		getColorScheme({ element, defaultColorScheme })
	)

	useEffect(() => {
		setScheme(getColorScheme({ element, defaultColorScheme }))
		return observeColorScheme(setScheme, { element })
	}, [element, defaultColorScheme])

	return scheme
}
