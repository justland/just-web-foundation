import { describe, expect, it } from 'vitest'
import { getThemeFromStores, inMemoryThemeStore } from './index.ts'

const themeMap = {
	current: 'current',
	grayscale: 'grayscale',
	'high-contrast': 'high-contrast'
} as const

describe('getThemeFromStores', () => {
	it('when all stores are empty, returns defaultTheme', async () => {
		const store = inMemoryThemeStore({ themeMap })
		const result = await getThemeFromStores([store], 'current')
		expect(result).toBe('current')
	})

	it('when first store has value, returns it', async () => {
		const store = inMemoryThemeStore({ themeMap })
		store.set?.('grayscale')
		const result = await getThemeFromStores([store], 'current')
		expect(result).toBe('grayscale')
	})

	it('when first store is empty and second has value, waterfall returns second', async () => {
		const store1 = inMemoryThemeStore({ themeMap })
		const store2 = inMemoryThemeStore({ themeMap })
		store2.set?.('grayscale')
		const result = await getThemeFromStores([store1, store2], 'current')
		expect(result).toBe('grayscale')
	})

	it('when store has get only, participates in waterfall', async () => {
		const store = { get: () => ({ theme: 'high-contrast', value: 'high-contrast' }) }
		const result = await getThemeFromStores([store], 'current')
		expect(result).toBe('high-contrast')
	})

	it('when store has no get, is skipped in waterfall', async () => {
		const storeWithGet = inMemoryThemeStore({ themeMap })
		storeWithGet.set?.('grayscale')
		const storeWithoutGet = { set: () => {} }
		const result = await getThemeFromStores([storeWithoutGet, storeWithGet] as any, 'current')
		expect(result).toBe('grayscale')
	})

	it('when defaultTheme is undefined and all empty, returns undefined', async () => {
		const store = inMemoryThemeStore({ themeMap })
		const result = await getThemeFromStores([store], undefined)
		expect(result).toBeUndefined()
	})
})
