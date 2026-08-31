import { afterEach, describe, expect, it, vi } from 'vitest'
import { fakeMatchMedia } from '../testing/fake-match-media.ts'
import { getPrefersColorScheme } from './get-prefers-color-scheme.ts'

afterEach(() => {
	vi.unstubAllGlobals()
})

describe('getPrefersColorScheme', () => {
	it("returns 'light' when the system prefers light", () => {
		vi.stubGlobal('matchMedia', fakeMatchMedia({ 'prefers-color-scheme': 'light' }).matchMedia)
		expect(getPrefersColorScheme()).toBe('light')
	})

	it("returns 'dark' when the system prefers dark", () => {
		vi.stubGlobal('matchMedia', fakeMatchMedia({ 'prefers-color-scheme': 'dark' }).matchMedia)
		expect(getPrefersColorScheme()).toBe('dark')
	})

	it("defaults to 'light' when matchMedia is unavailable", () => {
		vi.stubGlobal('matchMedia', undefined)
		expect(getPrefersColorScheme()).toBe('light')
	})

	it('returns the given default when matchMedia is unavailable', () => {
		vi.stubGlobal('matchMedia', undefined)
		expect(getPrefersColorScheme('dark')).toBe('dark')
	})
})
