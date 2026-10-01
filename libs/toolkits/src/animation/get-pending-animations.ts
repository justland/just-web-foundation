import type { WaitForAnimationsOptions } from './animation.types.ts'

/**
 * Lists the finite, pending animations on `target`, for custom logic.
 *
 * Returns animations whose `effect.getComputedTiming().endTime` is finite
 * and whose `playState` is neither `'finished'` nor `'idle'`. Infinite
 * animations (e.g. `animate-spin`) are excluded because they never finish.
 *
 * @param target - Element or Document to query. Defaults to `document`.
 * @param options - `subtree` (default `true`) includes descendants and pseudo-elements.
 *   `filter` skips animations the caller does not care about.
 * @returns The pending `Animation` objects.
 *
 * @example
 * ```ts
 * const pending = getPendingAnimations(dialog)
 * if (pending.length === 0) unmount()
 * ```
 *
 * @rc
 */
export function getPendingAnimations(
	target?: Element | Document | undefined,
	options?: Pick<WaitForAnimationsOptions, 'subtree' | 'filter'> | undefined
) {
	const el = target ?? globalThis.document
	if (!el || !('getAnimations' in el)) return []

	const subtree = options?.subtree ?? true
	const all = el.getAnimations({ subtree })

	return all.filter((a) => {
		if (a.playState === 'finished' || a.playState === 'idle') return false

		const timing = a.effect?.getComputedTiming()
		if (timing && !Number.isFinite(timing.endTime)) return false

		if (options?.filter && !options.filter(a)) return false
		return true
	})
}
