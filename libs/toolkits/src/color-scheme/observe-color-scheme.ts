import type { ColorScheme } from './color-scheme.types.ts'
import { getColorScheme } from './get-color-scheme.ts'
import { observePrefersColorScheme } from './observe-prefers-color-scheme.ts'

/**
 * Observes the color scheme an element renders in, and calls `handler` when it changes.
 *
 * See `getColorScheme()` for how the scheme is resolved.
 * Unlike `observePrefersColorScheme()`, this follows a `color-scheme` override,
 * such as a theme the user picked.
 *
 * It re-checks the scheme when:
 *
 * - an attribute (`class`, `style`, `data-*`, ...) changes on the element or one of its ancestors,
 * - anything changes in `<head>` (the `color-scheme` meta tag, added or edited stylesheets),
 * - the `prefers-color-scheme` preference changes.
 *
 * Changes it does not see: stylesheets added or edited outside `<head>`,
 * rules that depend on other elements (e.g. `:has()` or sibling selectors),
 * and the element moving to a new parent after the call.
 *
 * The handler is not called with the initial value; use `getColorScheme()` for that.
 *
 * @param handler - Called with `'light'` or `'dark'` when the scheme changes
 * @param options.element - Element to observe (accepts null e.g. from refs). Defaults to `document.documentElement`.
 * @returns A cleanup function that stops observing. A no-op when there is no DOM (e.g. SSR).
 *
 * @example
 * ```ts
 * const cleanup = observeColorScheme((scheme) => chart.setTheme(scheme))
 *
 * // Later, to stop observing:
 * cleanup()
 * ```
 */
export function observeColorScheme(
	handler: (value: ColorScheme) => void,
	options?: { element?: Element | null | undefined } | undefined
): () => void {
	const element = options?.element ?? globalThis.document?.documentElement
	if (!element || typeof MutationObserver === 'undefined') return () => {}

	let current = getColorScheme({ element })
	const check = () => {
		const next = getColorScheme({ element })
		if (next === current) return
		current = next
		handler(next)
	}

	const observer = new MutationObserver(check)
	for (let node: Element | null = element; node; node = node.parentElement) {
		observer.observe(node, { attributes: true })
	}
	const head = element.ownerDocument.head
	if (head) {
		observer.observe(head, {
			attributes: true,
			characterData: true,
			childList: true,
			subtree: true
		})
	}
	const stopPrefers =
		typeof matchMedia === 'undefined' ? () => {} : observePrefersColorScheme(check)

	return () => {
		observer.disconnect()
		stopPrefers()
	}
}
