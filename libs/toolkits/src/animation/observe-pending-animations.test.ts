import { afterEach, describe, expect, it, vi } from 'vitest'
import { observePendingAnimations } from './observe-pending-animations.ts'

afterEach(() => {
	document.body.innerHTML = ''
})

describe('observePendingAnimations', () => {
	it('calls back immediately with the current pending animations', () => {
		const el = document.createElement('div')
		document.body.appendChild(el)
		el.animate([{ opacity: 0 }, { opacity: 1 }], { duration: 500 })

		const callback = vi.fn()
		const stop = observePendingAnimations(callback, el)

		expect(callback).toHaveBeenCalledTimes(1)
		expect(callback.mock.calls[0]![0]).toHaveLength(1)

		stop()
	})

	it('calls back with an empty array when getAnimations is unavailable', () => {
		const callback = vi.fn()
		const stop = observePendingAnimations(callback, undefined)

		expect(callback).toHaveBeenCalledWith([])

		stop()
	})

	it('notifies when a CSS animation starts and ends', async () => {
		const el = document.createElement('div')
		el.style.animation = 'none'
		document.body.appendChild(el)

		const callback = vi.fn()
		const stop = observePendingAnimations(callback, el)
		callback.mockClear()

		el.animate([{ opacity: 0 }, { opacity: 1 }], { duration: 1 })
		el.dispatchEvent(new AnimationEvent('animationstart'))

		expect(callback).toHaveBeenCalled()

		stop()
	})

	it('notifies on DOM mutations within the subtree', async () => {
		const parent = document.createElement('div')
		document.body.appendChild(parent)

		const callback = vi.fn()
		const stop = observePendingAnimations(callback, parent)
		callback.mockClear()

		const child = document.createElement('div')
		parent.appendChild(child)
		child.animate([{ opacity: 0 }, { opacity: 1 }], { duration: 500 })

		// MutationObserver notifies asynchronously (microtask), unlike the
		// synchronous event listeners used for animation start/end/cancel.
		await Promise.resolve()

		expect(callback).toHaveBeenCalled()

		stop()
	})

	it('respects the filter option', () => {
		const el = document.createElement('div')
		document.body.appendChild(el)

		el.animate([{ opacity: 0 }, { opacity: 1 }], { duration: 500 })
		el.animate([{ transform: 'scale(0)' }, { transform: 'scale(1)' }], { duration: 500 })

		const callback = vi.fn()
		const stop = observePendingAnimations(callback, el, {
			filter: (a) => {
				const keyframes = (a.effect as KeyframeEffect)?.getKeyframes?.()
				return keyframes?.some((k) => 'transform' in k) ?? false
			}
		})

		expect(callback.mock.calls[0]![0]).toHaveLength(1)

		stop()
	})

	it('stops notifying after cleanup is called', () => {
		const el = document.createElement('div')
		document.body.appendChild(el)

		const callback = vi.fn()
		const stop = observePendingAnimations(callback, el)
		callback.mockClear()
		stop()

		el.animate([{ opacity: 0 }, { opacity: 1 }], { duration: 500 })
		el.dispatchEvent(new AnimationEvent('animationstart'))

		expect(callback).not.toHaveBeenCalled()
	})

	it('accepts document as target', () => {
		const el = document.createElement('div')
		document.body.appendChild(el)
		el.animate([{ opacity: 0 }, { opacity: 1 }], { duration: 500 })

		const callback = vi.fn()
		const stop = observePendingAnimations(callback, document)

		expect(callback.mock.calls[0]![0].length).toBeGreaterThanOrEqual(1)

		stop()
	})
})
