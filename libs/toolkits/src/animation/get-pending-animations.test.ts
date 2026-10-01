import { afterEach, describe, expect, it } from 'vitest'
import { getPendingAnimations } from './get-pending-animations.ts'

afterEach(() => {
	document.body.innerHTML = ''
})

describe('getPendingAnimations', () => {
	it('returns empty when no animations are running', () => {
		const el = document.createElement('div')
		document.body.appendChild(el)

		expect(getPendingAnimations(el)).toEqual([])
	})

	it('returns a finite animation that is running', () => {
		const el = document.createElement('div')
		document.body.appendChild(el)

		el.animate([{ opacity: 0 }, { opacity: 1 }], { duration: 500 })

		expect(getPendingAnimations(el)).toHaveLength(1)
	})

	it('excludes finished animations', async () => {
		const el = document.createElement('div')
		document.body.appendChild(el)

		const a = el.animate([{ opacity: 0 }, { opacity: 1 }], { duration: 1 })
		await a.finished

		expect(getPendingAnimations(el)).toEqual([])
	})

	it('excludes infinite animations', () => {
		const el = document.createElement('div')
		document.body.appendChild(el)

		el.animate([{ opacity: 0 }, { opacity: 1 }], {
			duration: 500,
			iterations: Number.POSITIVE_INFINITY
		})

		expect(getPendingAnimations(el)).toEqual([])
	})

	it('includes descendant animations when subtree is true (default)', () => {
		const parent = document.createElement('div')
		const child = document.createElement('div')
		parent.appendChild(child)
		document.body.appendChild(parent)

		child.animate([{ opacity: 0 }, { opacity: 1 }], { duration: 500 })

		expect(getPendingAnimations(parent)).toHaveLength(1)
	})

	it('excludes descendant animations when subtree is false', () => {
		const parent = document.createElement('div')
		const child = document.createElement('div')
		parent.appendChild(child)
		document.body.appendChild(parent)

		child.animate([{ opacity: 0 }, { opacity: 1 }], { duration: 500 })

		expect(getPendingAnimations(parent, { subtree: false })).toEqual([])
	})

	it('applies the filter option', () => {
		const el = document.createElement('div')
		document.body.appendChild(el)

		el.animate([{ opacity: 0 }, { opacity: 1 }], { duration: 500 })
		el.animate([{ transform: 'scale(0)' }, { transform: 'scale(1)' }], { duration: 500 })

		const result = getPendingAnimations(el, {
			filter: (a) => {
				const keyframes = (a.effect as KeyframeEffect)?.getKeyframes?.()
				return keyframes?.some((k) => 'opacity' in k) ?? false
			}
		})

		expect(result).toHaveLength(1)
	})

	it('returns empty when getAnimations is unavailable', () => {
		expect(getPendingAnimations(undefined)).toEqual([])
	})

	it('accepts document as target', () => {
		const el = document.createElement('div')
		document.body.appendChild(el)

		el.animate([{ opacity: 0 }, { opacity: 1 }], { duration: 500 })

		expect(getPendingAnimations(document).length).toBeGreaterThanOrEqual(1)
	})
})
