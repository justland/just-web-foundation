import type { ColorScheme } from './color-scheme.types.ts'
import { getPrefersColorScheme } from './get-prefers-color-scheme.ts'

/**
 * Gets the color scheme an element renders in: `'light'` or `'dark'`.
 *
 * This is the scheme that form controls, scrollbars, system colors such as `Canvas`,
 * and `light-dark()` use on the element.
 * It follows the CSS `color-scheme` property, so it reflects a theme the user picked
 * (for example `:root[data-theme='dark'] { color-scheme: dark }`).
 * `getPrefersColorScheme()` does not: it reports the OS preference only.
 *
 * It resolves the scheme the way the browser does
 * ({@link https://drafts.csswg.org/css-color-adjust-1/#resolving-schemes CSS Color Adjustment Level 1 § 2.3}):
 *
 * 1. Read the computed `color-scheme` of the element.
 *    When it is `normal`, read the `<meta name="color-scheme">` tag of its document instead.
 * 2. Without `light` or `dark` in that value, the scheme is `'light'`.
 * 3. With only one of them, that one.
 * 4. With both, the preferred scheme (`prefers-color-scheme`) if listed, otherwise the first one.
 *
 * Inside an iframe, the preferred scheme is the `color-scheme` of the `<iframe>` element.
 *
 * When there is no DOM (e.g. SSR), returns `defaultColorScheme`.
 *
 * @param options.element - Element to read (accepts null e.g. from refs). Defaults to `document.documentElement`.
 * @param options.defaultColorScheme - Returned when there is no DOM (default: `'light'`)
 * @returns `'light'` or `'dark'`
 *
 * @example
 * ```ts
 * // :root { color-scheme: light dark }  :root[data-theme='dark'] { color-scheme: dark }
 * document.documentElement.dataset.theme = 'dark'
 * getColorScheme() // 'dark', even when the OS prefers light
 * getColorScheme({ element: dialog }) // the scheme of a subtree
 * ```
 */
export function getColorScheme(
	options?:
		| { element?: Element | null | undefined; defaultColorScheme?: ColorScheme | undefined }
		| undefined
): ColorScheme {
	const defaultColorScheme = options?.defaultColorScheme ?? 'light'
	const element = options?.element ?? globalThis.document?.documentElement
	if (!element || typeof getComputedStyle === 'undefined') return defaultColorScheme

	const value = getComputedStyle(element).colorScheme
	const schemes = parseColorSchemes(
		value === 'normal' || value === ''
			? element.ownerDocument.querySelector('meta[name="color-scheme"]')?.getAttribute('content')
			: value
	)
	if (schemes.length <= 1) return schemes[0] ?? 'light'

	const preferred = getPrefersColorScheme(schemes[0])
	return schemes.includes(preferred) ? preferred : schemes[0]!
}

/** Reads the known schemes from a `color-scheme` value, in order. Custom idents and `only` are ignored. */
function parseColorSchemes(value: string | null | undefined): ColorScheme[] {
	const schemes: ColorScheme[] = []
	for (const token of value?.trim().split(/\s+/) ?? []) {
		if ((token === 'light' || token === 'dark') && !schemes.includes(token)) schemes.push(token)
	}
	return schemes
}
