import { describe, expect, it } from 'vitest'
import { inMemoryThemeStore, setThemeToStores, themeEntry } from './index.ts'

const themeMap = {
	current: 'current',
	grayscale: 'grayscale',
	'high-contrast': 'high-contrast'
} as const

describe('setThemeToStores', () => {
	it('when store has write, writes theme to it', async () => {
		const store = inMemoryThemeStore<typeof themeMap>()
		await setThemeToStores([store], themeEntry('grayscale', themeMap))
		expect(store.read?.()?.theme).toBe('grayscale')
	})

	it('when store has no write, skips it', async () => {
		const storeWithWrite = inMemoryThemeStore<typeof themeMap>()
		const storeWithoutWrite = { read: () => undefined }
		await setThemeToStores(
			[storeWithoutWrite, storeWithWrite] as any,
			themeEntry('grayscale', themeMap)
		)
		expect(storeWithWrite.read?.()?.theme).toBe('grayscale')
	})

	it('writes to all stores that have write', async () => {
		const store1 = inMemoryThemeStore<typeof themeMap>()
		const store2 = inMemoryThemeStore<typeof themeMap>()
		await setThemeToStores([store1, store2], themeEntry('high-contrast', themeMap))
		expect(store1.read?.()?.theme).toBe('high-contrast')
		expect(store2.read?.()?.theme).toBe('high-contrast')
	})
})
