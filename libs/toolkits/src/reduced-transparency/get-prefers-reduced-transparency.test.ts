import { afterEach, describe, expect, it, vi } from 'vitest'
import { fakeMatchMedia } from '../testing/fake-match-media.ts'
import { getPrefersReducedTransparency } from './get-prefers-reduced-transparency.ts'

afterEach(() => {
	vi.unstubAllGlobals()
})

describe('getPrefersReducedTransparency', () => {
	it('returns the active preference', () => {
		vi.stubGlobal(
			'matchMedia',
			fakeMatchMedia({ 'prefers-reduced-transparency': 'reduce' }).matchMedia
		)
		expect(getPrefersReducedTransparency()).toBe('reduce')
	})

	it("returns 'no-preference' as a real value", () => {
		vi.stubGlobal(
			'matchMedia',
			fakeMatchMedia({ 'prefers-reduced-transparency': 'no-preference' }).matchMedia
		)
		expect(getPrefersReducedTransparency()).toBe('no-preference')
	})

	it("defaults to 'no-preference' when matchMedia is unavailable", () => {
		vi.stubGlobal('matchMedia', undefined)
		expect(getPrefersReducedTransparency()).toBe('no-preference')
	})

	it('returns the given default when matchMedia is unavailable', () => {
		vi.stubGlobal('matchMedia', undefined)
		expect(getPrefersReducedTransparency('reduce')).toBe('reduce')
	})
})
