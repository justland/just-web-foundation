import { afterEach, describe, expect, it, vi } from 'vitest'
import { fakeMatchMedia } from '../testing/fake-match-media.ts'
import { observePrefersReducedTransparency } from './observe-prefers-reduced-transparency.ts'

afterEach(() => {
	vi.unstubAllGlobals()
})

describe('observePrefersReducedTransparency', () => {
	it('calls the handler when the preference changes', () => {
		const media = fakeMatchMedia({ 'prefers-reduced-transparency': 'no-preference' })
		vi.stubGlobal('matchMedia', media.matchMedia)

		const handler = vi.fn()
		observePrefersReducedTransparency(handler)

		media.set('prefers-reduced-transparency', 'reduce')

		expect(handler).toHaveBeenCalledExactlyOnceWith('reduce')
	})

	it('stops observing after cleanup', () => {
		const media = fakeMatchMedia({ 'prefers-reduced-transparency': 'no-preference' })
		vi.stubGlobal('matchMedia', media.matchMedia)

		const handler = vi.fn()
		observePrefersReducedTransparency(handler)()

		media.set('prefers-reduced-transparency', 'reduce')

		expect(handler).not.toHaveBeenCalled()
	})
})
