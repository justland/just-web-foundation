import { afterEach, describe, expect, it } from 'vitest'
import { waitForAnimations } from './wait-for-animations.ts'

afterEach(() => {
	document.body.innerHTML = ''
})

describe('waitForAnimations', () => {
	it('resolves immediately when no animations are running', async () => {
		const el = document.createElement('div')
		document.body.appendChild(el)

		await waitForAnimations(el)
	})

	it('resolves after a finite animation finishes', async () => {
		const el = document.createElement('div')
		document.body.appendChild(el)

		el.animate([{ opacity: 0 }, { opacity: 1 }], { duration: 50 })

		await waitForAnimations(el)

		const pending = el.getAnimations()
		const running = pending.filter((a) => a.playState !== 'finished')
		expect(running).toEqual([])
	})

	it('ignores infinite animations', async () => {
		const el = document.createElement('div')
		document.body.appendChild(el)

		el.animate([{ opacity: 0 }, { opacity: 1 }], {
			duration: 500,
			iterations: Number.POSITIVE_INFINITY
		})

		await waitForAnimations(el)
	})

	it('resolves when getAnimations is unavailable', async () => {
		await waitForAnimations(undefined)
	})

	it('waits for multiple animations', async () => {
		const el = document.createElement('div')
		document.body.appendChild(el)

		el.animate([{ opacity: 0 }, { opacity: 1 }], { duration: 30 })
		el.animate([{ transform: 'scale(0)' }, { transform: 'scale(1)' }], { duration: 50 })

		await waitForAnimations(el)

		const running = el.getAnimations().filter((a) => a.playState !== 'finished')
		expect(running).toEqual([])
	})

	it('respects the subtree option', async () => {
		const parent = document.createElement('div')
		const child = document.createElement('div')
		parent.appendChild(child)
		document.body.appendChild(parent)

		child.animate([{ opacity: 0 }, { opacity: 1 }], { duration: 200 })

		await waitForAnimations(parent, { subtree: false })
	})

	it('respects settleFrames option', async () => {
		const el = document.createElement('div')
		document.body.appendChild(el)

		await waitForAnimations(el, { settleFrames: 3 })
	})

	it('respects the filter option', async () => {
		const el = document.createElement('div')
		document.body.appendChild(el)

		el.animate([{ opacity: 0 }, { opacity: 1 }], { duration: 200 })
		el.animate([{ transform: 'scale(0)' }, { transform: 'scale(1)' }], { duration: 30 })

		await waitForAnimations(el, {
			filter: (a) => {
				const keyframes = (a.effect as KeyframeEffect)?.getKeyframes?.()
				return keyframes?.some((k) => 'transform' in k) ?? false
			}
		})
	})

	it('respects AbortSignal', async () => {
		const el = document.createElement('div')
		document.body.appendChild(el)

		el.animate([{ opacity: 0 }, { opacity: 1 }], { duration: 5000 })

		const controller = new AbortController()
		const promise = waitForAnimations(el, { signal: controller.signal })

		controller.abort()

		await expect(promise).rejects.toThrow()
	})
})
