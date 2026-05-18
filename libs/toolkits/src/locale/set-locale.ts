/**
 * Sets the `lang` attribute on an element.
 *
 * @param locale - The locale to set (e.g. `'en-US'`, `'ja'`)
 * @param element - The element to set `lang` on (default: `document.documentElement`)
 *
 * @example
 * ```ts
 * setLocale('ja')
 * // <html lang="ja">
 *
 * setLocale('fr', myElement)
 * // <div lang="fr">
 * ```
 */
export function setLocale(locale: string, element?: Element | null | undefined): void {
	const el = element ?? document.documentElement
	el.setAttribute('lang', locale)
}
