import { afterEach, describe, expect, it, vi } from 'vitest'
import { fakeMatchMedia } from '../testing/fake-match-media.ts'
import { observePrefersReducedData } from './observe-prefers-reduced-data.ts'

afterEach(() => {
	vi.unstubAllGlobals()
})

describe('observePrefersReducedData', () => {
	it('calls the handler when the preference changes', () => {
		const media = fakeMatchMedia({ 'prefers-reduced-data': 'no-preference' })
		vi.stubGlobal('matchMedia', media.matchMedia)

		const handler = vi.fn()
		observePrefersReducedData(handler)

		media.set('prefers-reduced-data', 'reduce')

		expect(handler).toHaveBeenCalledExactlyOnceWith('reduce')
	})

	it('stops observing after cleanup', () => {
		const media = fakeMatchMedia({ 'prefers-reduced-data': 'no-preference' })
		vi.stubGlobal('matchMedia', media.matchMedia)

		const handler = vi.fn()
		observePrefersReducedData(handler)()

		media.set('prefers-reduced-data', 'reduce')

		expect(handler).not.toHaveBeenCalled()
	})
})
