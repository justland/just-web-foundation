/**
 * Gets the current locale from an element's `lang` attribute.
 *
 * Priority: `element.lang` > `navigator.language` > `defaultLocale`
 *
 * When `document` is unavailable (e.g. SSR), falls back to `navigator.language` or `defaultLocale`.
 *
 * @param defaultLocale - Fallback when neither the element's `lang` nor `navigator.language` is available (default: `'en'`)
 * @param element - Element to read from (default: `document.documentElement`)
 * @returns The current locale string (e.g. `'en-US'`, `'ja'`, `'zh-Hans'`)
 *
 * @example
 * ```ts
 * // Read from <html lang="ja">
 * const locale = getLocale() // 'ja'
 *
 * // Read from a specific element
 * const locale = getLocale('en', myElement)
 * ```
 */
export function getLocale(defaultLocale = 'en', element?: Element | null | undefined): string {
	if (typeof document === 'undefined') {
		return typeof navigator !== 'undefined' ? navigator.language : defaultLocale
	}
	const el = element ?? document.documentElement
	return el.getAttribute('lang') || navigator.language || defaultLocale
}
