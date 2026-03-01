import { describe, expect, it } from 'vitest'
import { inMemoryThemeStore, setThemeToStores, themeEntry } from './index.ts'

const themeMap = {
	current: 'current',
	grayscale: 'grayscale',
	'high-contrast': 'high-contrast'
} as const

describe('setThemeToStores', () => {
	it('when store has set, writes theme to it', async () => {
		const store = inMemoryThemeStore<typeof themeMap>()
		await setThemeToStores([store], themeEntry('grayscale', themeMap))
		expect(store.get?.()?.theme).toBe('grayscale')
	})

	it('when store has no set, skips it', async () => {
		const storeWithSet = inMemoryThemeStore<typeof themeMap>()
		const storeWithoutSet = { get: () => undefined }
		await setThemeToStores(
			[storeWithoutSet, storeWithSet] as any,
			themeEntry('grayscale', themeMap)
		)
		expect(storeWithSet.get?.()?.theme).toBe('grayscale')
	})

	it('writes to all stores that have set', async () => {
		const store1 = inMemoryThemeStore<typeof themeMap>()
		const store2 = inMemoryThemeStore<typeof themeMap>()
		await setThemeToStores([store1, store2], themeEntry('high-contrast', themeMap))
		expect(store1.get?.()?.theme).toBe('high-contrast')
		expect(store2.get?.()?.theme).toBe('high-contrast')
	})
})
