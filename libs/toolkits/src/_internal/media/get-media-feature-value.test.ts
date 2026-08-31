import { afterEach, describe, expect, it, vi } from 'vitest'
import { fakeMatchMedia } from '../../testing/fake-match-media.ts'
import { getMediaFeatureValue } from './get-media-feature-value.ts'

const values = ['no-preference', 'less', 'more', 'custom'] as const

afterEach(() => {
	vi.unstubAllGlobals()
})

describe('getMediaFeatureValue', () => {
	it('returns the matching value', () => {
		vi.stubGlobal('matchMedia', fakeMatchMedia({ 'prefers-contrast': 'more' }).matchMedia)
		expect(getMediaFeatureValue('prefers-contrast', values, 'no-preference')).toBe('more')
	})

	it('returns the first matching value when values are checked in order', () => {
		vi.stubGlobal('matchMedia', fakeMatchMedia({ 'prefers-contrast': 'custom' }).matchMedia)
		expect(getMediaFeatureValue('prefers-contrast', values, 'no-preference')).toBe('custom')
	})

	it('returns fallback when no value matches', () => {
		vi.stubGlobal('matchMedia', fakeMatchMedia().matchMedia)
		expect(getMediaFeatureValue('prefers-contrast', values, 'less')).toBe('less')
	})

	it('returns fallback when matchMedia is unavailable', () => {
		vi.stubGlobal('matchMedia', undefined)
		expect(getMediaFeatureValue('prefers-contrast', values, 'custom')).toBe('custom')
	})
})
