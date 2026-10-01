import type { WaitForAnimationsOptions } from './animation.types.ts'
import { getPendingAnimations } from './get-pending-animations.ts'

const TRIGGER_EVENTS = [
	'animationstart',
	'animationend',
	'animationcancel',
	'transitionstart',
	'transitionend',
	'transitioncancel'
] as const

/**
 * Observes `target` for changes to its finite, pending animations and
 * invokes `callback` with the updated list whenever one starts, finishes,
 * or is canceled. Calls `callback` once immediately with the current
 * pending animations.
 *
 * Uses the same detection as {@link getPendingAnimations}: a
 * `MutationObserver` for DOM changes (new elements, class/attribute
 * changes), plus start/end/cancel listeners for CSS animations and
 * transitions. An animation started imperatively via `element.animate()`
 * is only picked up once one of the above triggers a re-check.
 *
 * @param callback - Invoked with the current pending `Animation[]` whenever it may have changed.
 * @param target - Element or Document to observe. Defaults to `document`.
 * @param options - `subtree` (default `true`) includes descendants and pseudo-elements.
 *   `filter` skips animations the caller does not care about.
 * @returns A cleanup function that stops observing.
 *
 * @example
 * ```ts
 * const stop = observePendingAnimations((pending) => {
 *   closeButton.disabled = pending.length > 0
 * }, dialog)
 * // later
 * stop()
 * ```
 *
 * @rc
 */
export function observePendingAnimations(
	callback: (pending: Animation[]) => void,
	target?: Element | Document | undefined,
	options?: Pick<WaitForAnimationsOptions, 'subtree' | 'filter'> | undefined
) {
	const el = target ?? globalThis.document
	if (!el || !('getAnimations' in el)) {
		callback([])
		return () => {}
	}

	const notify = () => callback(getPendingAnimations(el, options))

	notify()

	const observer = new MutationObserver(notify)
	observer.observe(el instanceof Element ? el : el.documentElement, {
		subtree: true,
		childList: true,
		attributes: true
	})

	for (const type of TRIGGER_EVENTS) {
		el.addEventListener(type, notify, true)
	}

	return () => {
		observer.disconnect()
		for (const type of TRIGGER_EVENTS) {
			el.removeEventListener(type, notify, true)
		}
	}
}
