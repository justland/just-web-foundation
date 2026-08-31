import { afterEach, describe, expect, it, vi } from 'vitest'
import { fakeMatchMedia } from '../testing/fake-match-media.ts'
import { observePrefersReducedMotion } from './observe-prefers-reduced-motion.ts'

afterEach(() => {
	vi.unstubAllGlobals()
})

describe('observePrefersReducedMotion', () => {
	it('calls the handler when the preference changes', () => {
		const media = fakeMatchMedia({ 'prefers-reduced-motion': 'no-preference' })
		vi.stubGlobal('matchMedia', media.matchMedia)

		const handler = vi.fn()
		observePrefersReducedMotion(handler)

		media.set('prefers-reduced-motion', 'reduce')

		expect(handler).toHaveBeenCalledExactlyOnceWith('reduce')
	})

	it('stops observing after cleanup', () => {
		const media = fakeMatchMedia({ 'prefers-reduced-motion': 'no-preference' })
		vi.stubGlobal('matchMedia', media.matchMedia)

		const handler = vi.fn()
		observePrefersReducedMotion(handler)()

		media.set('prefers-reduced-motion', 'reduce')

		expect(handler).not.toHaveBeenCalled()
	})
})
