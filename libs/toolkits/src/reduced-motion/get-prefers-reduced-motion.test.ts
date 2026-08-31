import { afterEach, describe, expect, it, vi } from 'vitest'
import { fakeMatchMedia } from '../testing/fake-match-media.ts'
import { getPrefersReducedMotion } from './get-prefers-reduced-motion.ts'

afterEach(() => {
	vi.unstubAllGlobals()
})

describe('getPrefersReducedMotion', () => {
	it('returns the active preference', () => {
		vi.stubGlobal('matchMedia', fakeMatchMedia({ 'prefers-reduced-motion': 'reduce' }).matchMedia)
		expect(getPrefersReducedMotion()).toBe('reduce')
	})

	it("returns 'no-preference' as a real value", () => {
		vi.stubGlobal(
			'matchMedia',
			fakeMatchMedia({ 'prefers-reduced-motion': 'no-preference' }).matchMedia
		)
		expect(getPrefersReducedMotion()).toBe('no-preference')
	})

	it("defaults to 'no-preference' when matchMedia is unavailable", () => {
		vi.stubGlobal('matchMedia', undefined)
		expect(getPrefersReducedMotion()).toBe('no-preference')
	})

	it('returns the given default when matchMedia is unavailable', () => {
		vi.stubGlobal('matchMedia', undefined)
		expect(getPrefersReducedMotion('reduce')).toBe('reduce')
	})
})
