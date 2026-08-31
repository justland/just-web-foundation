import { afterEach, describe, expect, it, vi } from 'vitest'
import { fakeMatchMedia } from '../testing/fake-match-media.ts'
import { observePrefersColorScheme } from './observe-prefers-color-scheme.ts'

afterEach(() => {
	vi.unstubAllGlobals()
})

describe('observePrefersColorScheme', () => {
	it('calls the handler when the color scheme changes', () => {
		const media = fakeMatchMedia({ 'prefers-color-scheme': 'light' })
		vi.stubGlobal('matchMedia', media.matchMedia)

		const handler = vi.fn()
		observePrefersColorScheme(handler)

		media.set('prefers-color-scheme', 'dark')

		expect(handler).toHaveBeenCalledExactlyOnceWith('dark')
	})

	it('calls the handler on each change', () => {
		const media = fakeMatchMedia({ 'prefers-color-scheme': 'light' })
		vi.stubGlobal('matchMedia', media.matchMedia)

		const handler = vi.fn()
		observePrefersColorScheme(handler)

		media.set('prefers-color-scheme', 'dark')
		media.set('prefers-color-scheme', 'light')

		expect(handler.mock.calls).toEqual([['dark'], ['light']])
	})

	it('stops observing after cleanup', () => {
		const media = fakeMatchMedia({ 'prefers-color-scheme': 'light' })
		vi.stubGlobal('matchMedia', media.matchMedia)

		const handler = vi.fn()
		observePrefersColorScheme(handler)()

		media.set('prefers-color-scheme', 'dark')

		expect(handler).not.toHaveBeenCalled()
	})
})
