import { describe, expect, it, vi } from 'vitest'
import { inMemoryThemeStore, observeThemeFromStores, themeEntry } from './index.ts'

const themeMap = {
	current: 'current',
	grayscale: 'grayscale',
	'high-contrast': 'high-contrast'
} as const

describe('observeThemeFromStores', () => {
	it('calls handler immediately with current theme from stores', async () => {
		const store = inMemoryThemeStore<typeof themeMap>()
		store.write?.(themeEntry('grayscale', themeMap))
		const handler = vi.fn()
		const unsubscribe = observeThemeFromStores([store], 'current', handler)
		await vi.waitFor(() => {
			expect(handler).toHaveBeenCalled()
		})
		expect(handler).toHaveBeenCalledWith('grayscale')
		unsubscribe()
	})

	it('calls handler when store emits change', async () => {
		const store = inMemoryThemeStore<typeof themeMap>()
		const handler = vi.fn()
		observeThemeFromStores([store], 'current', handler)
		await vi.waitFor(() => {
			expect(handler).toHaveBeenCalled()
		})
		handler.mockClear()
		store.write?.(themeEntry('grayscale', themeMap))
		await vi.waitFor(() => {
			expect(handler).toHaveBeenCalledWith('grayscale')
		})
	})

	it('unsubscribe stops notifications', async () => {
		const store = inMemoryThemeStore<typeof themeMap>()
		const handler = vi.fn()
		const unsubscribe = observeThemeFromStores([store], 'current', handler)
		await vi.waitFor(() => {
			expect(handler).toHaveBeenCalled()
		})
		handler.mockClear()
		unsubscribe()
		store.write?.(themeEntry('grayscale', themeMap))
		await new Promise((r) => setTimeout(r, 20))
		expect(handler).not.toHaveBeenCalled()
	})

	it('when store has no subscribe, skips it but still receives updates from store with subscribe', async () => {
		const store = inMemoryThemeStore<typeof themeMap>()
		const storeWithoutSubscribe = { read: () => undefined, write: (_entry: unknown) => {} }
		const handler = vi.fn()
		const unsubscribe = observeThemeFromStores(
			[storeWithoutSubscribe, store] as any,
			'current',
			handler
		)
		await vi.waitFor(() => expect(handler).toHaveBeenCalled())
		handler.mockClear()
		store.write?.(themeEntry('grayscale', themeMap))
		await vi.waitFor(() => expect(handler).toHaveBeenCalledWith('grayscale'))
		unsubscribe()
	})
})
