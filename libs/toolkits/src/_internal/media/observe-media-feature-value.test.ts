import { afterEach, describe, expect, it, vi } from 'vitest'
import { fakeMatchMedia } from '../../testing/fake-match-media.ts'
import { observeMediaFeatureValue } from './observe-media-feature-value.ts'

const values = ['no-preference', 'reduce'] as const

afterEach(() => {
	vi.unstubAllGlobals()
})

describe('observeMediaFeatureValue', () => {
	it('calls the handler with the value that becomes active', () => {
		const media = fakeMatchMedia({ 'prefers-reduced-motion': 'no-preference' })
		vi.stubGlobal('matchMedia', media.matchMedia)

		const handler = vi.fn()
		observeMediaFeatureValue('prefers-reduced-motion', values, handler)

		media.set('prefers-reduced-motion', 'reduce')

		expect(handler).toHaveBeenCalledExactlyOnceWith('reduce')
	})

	it('calls the handler on each change', () => {
		const media = fakeMatchMedia({ 'prefers-reduced-motion': 'no-preference' })
		vi.stubGlobal('matchMedia', media.matchMedia)

		const handler = vi.fn()
		observeMediaFeatureValue('prefers-reduced-motion', values, handler)

		media.set('prefers-reduced-motion', 'reduce')
		media.set('prefers-reduced-motion', 'no-preference')

		expect(handler.mock.calls).toEqual([['reduce'], ['no-preference']])
	})

	it('stops observing after cleanup', () => {
		const media = fakeMatchMedia({ 'prefers-reduced-motion': 'no-preference' })
		vi.stubGlobal('matchMedia', media.matchMedia)

		const handler = vi.fn()
		const cleanup = observeMediaFeatureValue('prefers-reduced-motion', values, handler)
		cleanup()

		media.set('prefers-reduced-motion', 'reduce')

		expect(handler).not.toHaveBeenCalled()
	})
})
