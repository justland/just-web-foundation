import type { WaitForAnimationsOptions } from './animation.types.ts'
import { getPendingAnimations } from './get-pending-animations.ts'

/**
 * Resolves when no finite animation on `target` is pending.
 *
 * Uses the Web Animations API (`element.getAnimations()` and
 * `Animation.finished`) to detect CSS transitions, CSS animations,
 * Web Animations, and pseudo-element animations. Infinite animations
 * (e.g. `animate-spin`, `animate-pulse`) are ignored.
 *
 * When `getAnimations` is unavailable (jsdom, happy-dom, SSR), resolves
 * immediately — the same graceful fallback used by React Aria, Headless UI,
 * and Base UI.
 *
 * @param target - Element or Document to watch. Defaults to `document`.
 * @param options - See {@link WaitForAnimationsOptions}.
 * @returns A promise that resolves when all finite animations have finished.
 *
 * @example
 * ```ts
 * el.classList.add('exit')
 * await waitForAnimations(el)
 * el.remove()
 * ```
 *
 * @rc
 */
export async function waitForAnimations(
	target?: Element | Document | undefined,
	options?: WaitForAnimationsOptions | undefined
) {
	const el = target ?? globalThis.document
	if (!el || !('getAnimations' in el)) return

	options?.signal?.throwIfAborted()

	const settleFrames = options?.settleFrames ?? 1
	await waitFrames(settleFrames)

	const timeoutId = setupTimeout(options)

	try {
		await drainAnimations(el, options)
	} finally {
		if (timeoutId !== undefined) clearTimeout(timeoutId)
	}
}

async function drainAnimations(
	el: Element | Document,
	options: WaitForAnimationsOptions | undefined
) {
	// eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
	while (true) {
		options?.signal?.throwIfAborted()

		const pending = getPendingAnimations(el, options)
		if (pending.length === 0) {
			await waitFrames(1)
			const recheck = getPendingAnimations(el, options)
			if (recheck.length === 0) return
		}

		const current = pending.length > 0 ? pending : getPendingAnimations(el, options)
		if (current.length === 0) return

		await Promise.allSettled(current.map((a) => a.finished))
	}
}

function setupTimeout(options: WaitForAnimationsOptions | undefined) {
	if (options?.timeout === undefined) return undefined

	const controller = options.signal ? undefined : new AbortController()
	const signal = options.signal

	return setTimeout(() => {
		const error = new DOMException(
			`waitForAnimations timed out after ${options.timeout}ms`,
			'TimeoutError'
		)
		if (signal) {
			throw error
		}
		if (controller) {
			controller.abort(error)
		}
	}, options.timeout)
}

function waitFrames(n: number) {
	return new Promise<void>((resolve) => {
		let remaining = n
		function tick() {
			remaining--
			if (remaining <= 0) {
				resolve()
			} else {
				requestAnimationFrame(tick)
			}
		}
		requestAnimationFrame(tick)
	})
}
