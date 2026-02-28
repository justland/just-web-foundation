import { describe, expect, it, vi } from 'vitest'
import { inMemoryThemeStore, observeThemeFromStores } from './index.ts'

const themeMap = {
	current: 'current',
	grayscale: 'grayscale',
	'high-contrast': 'high-contrast'
} as const

describe('observeThemeFromStores', () => {
	it('calls handler immediately with current theme from stores', async () => {
		const store = inMemoryThemeStore({ themeMap })
		store.set?.('grayscale')
		const handler = vi.fn()
		const unsubscribe = observeThemeFromStores([store], 'current', handler)
		await vi.waitFor(() => {
			expect(handler).toHaveBeenCalled()
		})
		expect(handler).toHaveBeenCalledWith('grayscale')
		unsubscribe()
	})

	it('calls handler when store emits change', async () => {
		const store = inMemoryThemeStore({ themeMap })
		const handler = vi.fn()
		observeThemeFromStores([store], 'current', handler)
		await vi.waitFor(() => {
			expect(handler).toHaveBeenCalled()
		})
		handler.mockClear()
		store.set?.('grayscale')
		await vi.waitFor(() => {
			expect(handler).toHaveBeenCalledWith('grayscale')
		})
	})

	it('unsubscribe stops notifications', async () => {
		const store = inMemoryThemeStore({ themeMap })
		const handler = vi.fn()
		const unsubscribe = observeThemeFromStores([store], 'current', handler)
		await vi.waitFor(() => {
			expect(handler).toHaveBeenCalled()
		})
		handler.mockClear()
		unsubscribe()
		store.set?.('grayscale')
		await new Promise((r) => setTimeout(r, 20))
		expect(handler).not.toHaveBeenCalled()
	})

	it('when store has no subscribe, skips it but still receives updates from store with subscribe', async () => {
		const store = inMemoryThemeStore({ themeMap })
		const storeWithoutSubscribe = { get: () => undefined, set: () => {} }
		const handler = vi.fn()
		const unsubscribe = observeThemeFromStores(
			[storeWithoutSubscribe, store] as any,
			'current',
			handler
		)
		await vi.waitFor(() => expect(handler).toHaveBeenCalled())
		handler.mockClear()
		store.set?.('grayscale')
		await vi.waitFor(() => expect(handler).toHaveBeenCalledWith('grayscale'))
		unsubscribe()
	})
})
