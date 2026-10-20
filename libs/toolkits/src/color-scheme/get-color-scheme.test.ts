import { afterEach, describe, expect, it, vi } from 'vitest'
import { fakeMatchMedia } from '../testing/fake-match-media.ts'
import { getColorScheme } from './get-color-scheme.ts'

const cleanups: Array<() => void> = []

afterEach(() => {
	vi.unstubAllGlobals()
	for (const cleanup of cleanups.splice(0)) cleanup()
})

function prefers(value: 'light' | 'dark') {
	vi.stubGlobal('matchMedia', fakeMatchMedia({ 'prefers-color-scheme': value }).matchMedia)
}

function box(colorScheme?: string, parent: Element = document.body) {
	const el = document.createElement('div')
	if (colorScheme) el.style.colorScheme = colorScheme
	parent.append(el)
	cleanups.push(() => el.remove())
	return el
}

function meta(content: string) {
	const el = document.createElement('meta')
	el.name = 'color-scheme'
	el.content = content
	document.head.append(el)
	cleanups.push(() => el.remove())
}

describe('getColorScheme', () => {
	it.each([
		['light', 'dark', 'light'],
		['dark', 'light', 'dark'],
		['only light', 'dark', 'light'],
		['only dark', 'light', 'dark'],
		['light dark', 'light', 'light'],
		['light dark', 'dark', 'dark'],
		['dark light', 'light', 'light'],
		['light dark only', 'dark', 'dark']
	] as const)('color-scheme: %s with OS %s → %s', (value, os, expected) => {
		prefers(os)
		expect(getColorScheme({ element: box(value) })).toBe(expected)
	})

	it("returns 'light' for normal without a meta tag, even when the OS prefers dark", () => {
		prefers('dark')
		expect(getColorScheme({ element: box() })).toBe('light')
	})

	it("returns 'light' when only custom schemes are listed", () => {
		prefers('dark')
		expect(getColorScheme({ element: box('sepia') })).toBe('light')
	})

	it('uses the meta tag when the element is normal', () => {
		prefers('dark')
		meta('light dark')
		expect(getColorScheme({ element: box() })).toBe('dark')
	})

	it('prefers the property over the meta tag', () => {
		prefers('dark')
		meta('light dark')
		expect(getColorScheme({ element: box('light') })).toBe('light')
	})

	it('inherits the scheme of an ancestor', () => {
		prefers('light')
		expect(getColorScheme({ element: box(undefined, box('dark')) })).toBe('dark')
	})

	it('reads document.documentElement by default', () => {
		prefers('light')
		const root = document.documentElement
		root.style.colorScheme = 'dark'
		cleanups.push(() => root.style.removeProperty('color-scheme'))
		expect(getColorScheme()).toBe('dark')
	})

	it('picks the first listed scheme when matchMedia is unavailable', () => {
		vi.stubGlobal('matchMedia', undefined)
		expect(getColorScheme({ element: box('dark light') })).toBe('dark')
	})

	it('returns defaultColorScheme when there is no DOM', () => {
		vi.stubGlobal('getComputedStyle', undefined)
		expect(getColorScheme({ defaultColorScheme: 'dark' })).toBe('dark')
		expect(getColorScheme()).toBe('light')
	})
})
