import { afterEach, describe, expect, it } from 'vitest'
import { settleAnimations } from './settle-animations.ts'

afterEach(() => {
	document.body.innerHTML = ''
})

describe('settleAnimations', () => {
	it('finishes a running finite animation', () => {
		const el = document.createElement('div')
		document.body.appendChild(el)

		el.animate([{ opacity: 0 }, { opacity: 1 }], { duration: 5000 })

		settleAnimations(el)

		const running = el.getAnimations().filter((a) => a.playState !== 'finished')
		expect(running).toEqual([])
	})

	it('pauses infinite animations instead of finishing them', () => {
		const el = document.createElement('div')
		document.body.appendChild(el)

		const a = el.animate([{ opacity: 0 }, { opacity: 1 }], {
			duration: 500,
			iterations: Number.POSITIVE_INFINITY
		})

		settleAnimations(el)

		expect(a.playState).toBe('paused')
	})

	it('cleanup resumes paused infinite animations', () => {
		const el = document.createElement('div')
		document.body.appendChild(el)

		const a = el.animate([{ opacity: 0 }, { opacity: 1 }], {
			duration: 500,
			iterations: Number.POSITIVE_INFINITY
		})

		const restore = settleAnimations(el)
		expect(a.playState).toBe('paused')

		restore()
		expect(a.playState).toBe('running')
	})

	it('returns a no-op cleanup when getAnimations is unavailable', () => {
		const restore = settleAnimations(undefined)
		expect(restore).toBeTypeOf('function')
		restore()
	})

	it('handles mixed finite and infinite animations', () => {
		const el = document.createElement('div')
		document.body.appendChild(el)

		el.animate([{ opacity: 0 }, { opacity: 1 }], { duration: 5000 })
		const infinite = el.animate([{ transform: 'rotate(0deg)' }, { transform: 'rotate(360deg)' }], {
			duration: 1000,
			iterations: Number.POSITIVE_INFINITY
		})

		settleAnimations(el)

		const finiteAnims = el
			.getAnimations()
			.filter((a) => Number.isFinite(a.effect?.getComputedTiming().endTime))
		const runningFinite = finiteAnims.filter((a) => a.playState !== 'finished')
		expect(runningFinite).toEqual([])
		expect(infinite.playState).toBe('paused')
	})

	it('settles animations on descendant elements', () => {
		const parent = document.createElement('div')
		const child = document.createElement('div')
		parent.appendChild(child)
		document.body.appendChild(parent)

		child.animate([{ opacity: 0 }, { opacity: 1 }], { duration: 5000 })

		settleAnimations(parent)

		const running = child.getAnimations().filter((a) => a.playState !== 'finished')
		expect(running).toEqual([])
	})

	it('excludes descendant animations when subtree is false', () => {
		const parent = document.createElement('div')
		const child = document.createElement('div')
		parent.appendChild(child)
		document.body.appendChild(parent)

		child.animate([{ opacity: 0 }, { opacity: 1 }], { duration: 5000 })

		settleAnimations(parent, { subtree: false })

		const running = child.getAnimations().filter((a) => a.playState !== 'finished')
		expect(running).toHaveLength(1)
	})
})
