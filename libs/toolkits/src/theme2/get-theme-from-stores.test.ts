import { describe, expect, it } from 'vitest'
import { getThemeFromStores, inMemoryThemeStore, themeResult } from './index.ts'

const themeMap = {
	current: 'current',
	grayscale: 'grayscale',
	'high-contrast': 'high-contrast'
} as const

describe('getThemeFromStores', () => {
	it('when all stores are empty, returns defaultTheme', async () => {
		const store = inMemoryThemeStore<typeof themeMap>()
		const result = await getThemeFromStores([store], 'current')
		expect(result).toBe('current')
	})

	it('when first store has value, returns it', async () => {
		const store = inMemoryThemeStore<typeof themeMap>()
		store.set?.(themeResult('grayscale', themeMap))
		const result = await getThemeFromStores([store], 'current')
		expect(result).toBe('grayscale')
	})

	it('when first store is empty and second has value, waterfall returns second', async () => {
		const store1 = inMemoryThemeStore<typeof themeMap>()
		const store2 = inMemoryThemeStore<typeof themeMap>()
		store2.set?.(themeResult('grayscale', themeMap))
		const result = await getThemeFromStores([store1, store2], 'current')
		expect(result).toBe('grayscale')
	})

	it('when store has get only, participates in waterfall', async () => {
		const store = { get: () => ({ theme: 'high-contrast', value: 'high-contrast' }) }
		const result = await getThemeFromStores([store], 'current')
		expect(result).toBe('high-contrast')
	})

	it('when store has no get, is skipped in waterfall', async () => {
		const storeWithGet = inMemoryThemeStore<typeof themeMap>()
		storeWithGet.set?.(themeResult('grayscale', themeMap))
		const storeWithoutGet = { set: (_entry: unknown) => {} }
		const result = await getThemeFromStores([storeWithoutGet, storeWithGet] as any, 'current')
		expect(result).toBe('grayscale')
	})

	it('when defaultTheme is undefined and all empty, returns undefined', async () => {
		const store = inMemoryThemeStore<typeof themeMap>()
		const result = await getThemeFromStores([store], undefined)
		expect(result).toBeUndefined()
	})
})
