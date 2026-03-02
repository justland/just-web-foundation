/**
 * Gets the current preferred color scheme.
 * It can only be 'light' or 'dark'.
 *
 * Even if the browser preference is 'auto'/'device', it will return 'light' or 'dark'.
 *
 * @returns 'light' or 'dark'
 */
export function getPrefersColorScheme() {
	return matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark'
}
