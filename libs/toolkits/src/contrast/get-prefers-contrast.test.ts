import { afterEach, describe, expect, it, vi } from 'vitest'
import { fakeMatchMedia } from '../testing/fake-match-media.ts'
import { getPrefersContrast } from './get-prefers-contrast.ts'

afterEach(() => {
	vi.unstubAllGlobals()
})

describe('getPrefersContrast', () => {
	it('returns the active preference', () => {
		vi.stubGlobal('matchMedia', fakeMatchMedia({ 'prefers-contrast': 'more' }).matchMedia)
		expect(getPrefersContrast()).toBe('more')
	})

	it("returns 'no-preference' as a real value", () => {
		vi.stubGlobal('matchMedia', fakeMatchMedia({ 'prefers-contrast': 'no-preference' }).matchMedia)
		expect(getPrefersContrast()).toBe('no-preference')
	})

	it("defaults to 'no-preference' when matchMedia is unavailable", () => {
		vi.stubGlobal('matchMedia', undefined)
		expect(getPrefersContrast()).toBe('no-preference')
	})

	it('returns the given default when matchMedia is unavailable', () => {
		vi.stubGlobal('matchMedia', undefined)
		expect(getPrefersContrast('more')).toBe('more')
	})
})
