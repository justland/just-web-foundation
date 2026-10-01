import type { WaitForAnimationsOptions } from './animation.types.ts'

/**
 * Quickly settles animations on the target into a stable, no-longer-moving
 * state: finite animations jump to their end, infinite ones pause in place.
 * The visual effect lines up with Playwright's `animations: 'disabled'' for
 * screenshot purposes, though the mechanism differs — this reacts to each
 * `Animation` individually instead of forcing all durations to zero, so a
 * newly started animation can run for a sub-frame instant before it is caught.
 *
 * It also observes the target for new animations that start later (e.g. from
 * a `transitionstart` or `animationstart` firing after a style flush) and
 * settles them as they appear.
 *
 * Returns a cleanup function that stops observing and resumes any infinite
 * animations that were paused.
 *
 * @param target - Element or Document to operate on. Defaults to `document`.
 * @param options - `subtree` (default `true`) includes descendants and pseudo-elements.
 * @returns A cleanup function.
 *
 * @example
 * ```ts
 * const restore = settleAnimations(dialog)
 * // ...take a screenshot or assert layout...
 * restore()
 * ```
 *
 * @rc
 */
export function settleAnimations(
	target?: Element | Document | undefined,
	options?: Pick<WaitForAnimationsOptions, 'subtree'> | undefined
) {
	const el = target ?? globalThis.document
	if (!el || !('getAnimations' in el)) return () => {}

	const subtree = options?.subtree ?? true
	const pausedInfinite: Animation[] = []
	let active = true

	processAnimations(el, subtree, pausedInfinite)

	const observer = new MutationObserver(() => {
		if (active) processAnimations(el, subtree, pausedInfinite)
	})

	if (el instanceof Element) {
		observer.observe(el, { subtree, childList: true, attributes: true })
	} else {
		observer.observe(el.documentElement, { subtree, childList: true, attributes: true })
	}

	const onAnimationStart = () => {
		if (active) processAnimations(el, subtree, pausedInfinite)
	}
	el.addEventListener('animationstart', onAnimationStart, true)
	el.addEventListener('transitionstart', onAnimationStart, true)

	return () => {
		active = false
		observer.disconnect()
		el.removeEventListener('animationstart', onAnimationStart, true)
		el.removeEventListener('transitionstart', onAnimationStart, true)

		for (const a of pausedInfinite) {
			if (a.playState === 'paused') a.play()
		}
	}
}

function processAnimations(el: Element | Document, subtree: boolean, pausedInfinite: Animation[]) {
	const animations = el.getAnimations({ subtree })

	for (const a of animations) {
		if (a.playState === 'finished' || a.playState === 'idle') continue

		const timing = a.effect?.getComputedTiming()
		const isInfinite = timing && !Number.isFinite(timing.endTime)

		if (isInfinite) {
			if (!pausedInfinite.includes(a)) {
				a.pause()
				pausedInfinite.push(a)
			}
		} else {
			a.finish()
		}
	}
}
