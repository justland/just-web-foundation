const DEFAULT_REM_TO_PX_SCALE = 16

/**
 * Returns the current document's rem-to-px scale (the pixel value of 1rem).
 *
 * Reads the computed font size of the root element (`html`), which is the value
 * the browser uses to resolve rem units. In non-browser environments (e.g. SSR,
 * Node), returns {@link DEFAULT_REM_TO_PX_SCALE} as a fallback.
 *
 * @returns The number of pixels that 1rem equals in the current document,
 * or {@link DEFAULT_REM_TO_PX_SCALE} when not in a browser.
 *
 * @example
 * ```ts
 * getRemToPxScale() // e.g. 16 (or 20 if user increased default font size)
 * rem2px(1, { base: getRemToPxScale() }) // matches actual 1rem in the document
 * ```
 */
export function getRemToPxScale(): number {
	if (typeof document === 'undefined' || !document.documentElement) {
		return DEFAULT_REM_TO_PX_SCALE
	}
	const rootFontSize = getComputedStyle(document.documentElement).fontSize
	return Number.parseFloat(rootFontSize) ?? DEFAULT_REM_TO_PX_SCALE
}
