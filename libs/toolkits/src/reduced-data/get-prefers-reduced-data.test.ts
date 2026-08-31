import { afterEach, describe, expect, it, vi } from 'vitest'
import { fakeMatchMedia } from '../testing/fake-match-media.ts'
import { getPrefersReducedData } from './get-prefers-reduced-data.ts'

afterEach(() => {
	vi.unstubAllGlobals()
})

describe('getPrefersReducedData', () => {
	it('returns the active preference', () => {
		vi.stubGlobal('matchMedia', fakeMatchMedia({ 'prefers-reduced-data': 'reduce' }).matchMedia)
		expect(getPrefersReducedData()).toBe('reduce')
	})

	it("returns 'no-preference' as a real value", () => {
		vi.stubGlobal(
			'matchMedia',
			fakeMatchMedia({ 'prefers-reduced-data': 'no-preference' }).matchMedia
		)
		expect(getPrefersReducedData()).toBe('no-preference')
	})

	it("defaults to 'no-preference' when matchMedia is unavailable", () => {
		vi.stubGlobal('matchMedia', undefined)
		expect(getPrefersReducedData()).toBe('no-preference')
	})

	it('returns the given default when matchMedia is unavailable', () => {
		vi.stubGlobal('matchMedia', undefined)
		expect(getPrefersReducedData('reduce')).toBe('reduce')
	})
})
