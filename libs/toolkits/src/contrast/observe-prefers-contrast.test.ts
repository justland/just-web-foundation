import { afterEach, describe, expect, it, vi } from 'vitest'
import { fakeMatchMedia } from '../testing/fake-match-media.ts'
import { observePrefersContrast } from './observe-prefers-contrast.ts'

afterEach(() => {
	vi.unstubAllGlobals()
})

describe('observePrefersContrast', () => {
	it('calls the handler when the preference changes', () => {
		const media = fakeMatchMedia({ 'prefers-contrast': 'no-preference' })
		vi.stubGlobal('matchMedia', media.matchMedia)

		const handler = vi.fn()
		observePrefersContrast(handler)

		media.set('prefers-contrast', 'more')

		expect(handler).toHaveBeenCalledExactlyOnceWith('more')
	})

	it('stops observing after cleanup', () => {
		const media = fakeMatchMedia({ 'prefers-contrast': 'no-preference' })
		vi.stubGlobal('matchMedia', media.matchMedia)

		const handler = vi.fn()
		observePrefersContrast(handler)()

		media.set('prefers-contrast', 'more')

		expect(handler).not.toHaveBeenCalled()
	})
})
