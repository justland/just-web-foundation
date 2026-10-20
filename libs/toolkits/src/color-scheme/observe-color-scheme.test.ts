import { afterEach, describe, expect, it, vi } from 'vitest'
import { fakeMatchMedia } from '../testing/fake-match-media.ts'
import { observeColorScheme } from './observe-color-scheme.ts'

const cleanups: Array<() => void> = []

afterEach(() => {
	vi.unstubAllGlobals()
	for (const cleanup of cleanups.splice(0)) cleanup()
})

function setup(os: 'light' | 'dark' = 'light') {
	const media = fakeMatchMedia({ 'prefers-color-scheme': os })
	vi.stubGlobal('matchMedia', media.matchMedia)
	const parent = document.createElement('div')
	const element = document.createElement('div')
	parent.append(element)
	document.body.append(parent)
	cleanups.push(() => parent.remove())
	return { media, parent, element }
}

/** MutationObserver callbacks run as microtasks. */
const flush = () => new Promise((resolve) => setTimeout(resolve, 0))

describe('observeColorScheme', () => {
	it('calls the handler when the element scheme changes', async () => {
		const { element } = setup()
		const handler = vi.fn()
		cleanups.push(observeColorScheme(handler, { element }))

		element.style.colorScheme = 'dark'
		await flush()

		expect(handler).toHaveBeenCalledExactlyOnceWith('dark')
	})

	it('sees a change on an ancestor', async () => {
		const { parent, element } = setup()
		const handler = vi.fn()
		cleanups.push(observeColorScheme(handler, { element }))

		parent.style.colorScheme = 'dark'
		await flush()

		expect(handler).toHaveBeenCalledExactlyOnceWith('dark')
	})

	it('sees a theme attribute that a stylesheet in <head> maps to color-scheme', async () => {
		const { parent, element } = setup()
		const style = document.createElement('style')
		style.textContent = '[data-test-theme="dark"] { color-scheme: dark }'
		document.head.append(style)
		cleanups.push(() => style.remove())
		const handler = vi.fn()
		cleanups.push(observeColorScheme(handler, { element }))

		parent.setAttribute('data-test-theme', 'dark')
		await flush()

		expect(handler).toHaveBeenCalledExactlyOnceWith('dark')
	})

	it('sees the meta tag being added', async () => {
		const { element } = setup('dark')
		const handler = vi.fn()
		cleanups.push(observeColorScheme(handler, { element }))

		const meta = document.createElement('meta')
		meta.name = 'color-scheme'
		meta.content = 'light dark'
		document.head.append(meta)
		cleanups.push(() => meta.remove())
		await flush()

		expect(handler).toHaveBeenCalledExactlyOnceWith('dark')
	})

	it('follows the preference when the element supports both schemes', () => {
		const { media, element } = setup()
		element.style.colorScheme = 'light dark'
		const handler = vi.fn()
		cleanups.push(observeColorScheme(handler, { element }))

		media.set('prefers-color-scheme', 'dark')

		expect(handler).toHaveBeenCalledExactlyOnceWith('dark')
	})

	it('ignores a preference change when the element forces a scheme', () => {
		const { media, element } = setup()
		element.style.colorScheme = 'light'
		const handler = vi.fn()
		cleanups.push(observeColorScheme(handler, { element }))

		media.set('prefers-color-scheme', 'dark')

		expect(handler).not.toHaveBeenCalled()
	})

	it('does not call the handler when the scheme stays the same', async () => {
		const { element } = setup()
		const handler = vi.fn()
		cleanups.push(observeColorScheme(handler, { element }))

		element.className = 'something'
		element.style.colorScheme = 'only light'
		await flush()

		expect(handler).not.toHaveBeenCalled()
	})

	it('stops observing after cleanup', async () => {
		const { media, element } = setup()
		element.style.colorScheme = 'light dark'
		const handler = vi.fn()
		observeColorScheme(handler, { element })()

		media.set('prefers-color-scheme', 'dark')
		element.style.colorScheme = 'dark'
		await flush()

		expect(handler).not.toHaveBeenCalled()
	})

	it('returns a no-op when there is no element', () => {
		vi.stubGlobal('MutationObserver', undefined)
		expect(observeColorScheme(vi.fn())).toBeTypeOf('function')
	})
})
