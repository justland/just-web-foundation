import { describe, expect, it } from 'vitest'
import { inMemoryThemeStore, themeEntry } from '#just-web/toolkits/theme'
import { setThemeToStores } from './set-theme-to-stores.ts'

const themeMap = {
	current: { themeValue: 'current' },
	grayscale: { themeValue: 'grayscale' },
	'high-contrast': { themeValue: 'high-contrast' }
} as const

describe('setThemeToStores', () => {
	it('when store has write, writes theme to it', async () => {
		const store = inMemoryThemeStore(themeMap)
		await setThemeToStores([store], themeEntry(themeMap, 'grayscale'))
		expect(store.read?.()?.theme).toBe('grayscale')
	})

	it('when store has no write, skips it', async () => {
		const storeWithWrite = inMemoryThemeStore(themeMap)
		const storeWithoutWrite = { read: () => undefined }
		await setThemeToStores(
			[storeWithoutWrite, storeWithWrite] as any,
			themeEntry(themeMap, 'grayscale')
		)
		expect(storeWithWrite.read?.()?.theme).toBe('grayscale')
	})

	it('writes to all stores that have write', async () => {
		const store1 = inMemoryThemeStore(themeMap)
		const store2 = inMemoryThemeStore(themeMap)
		await setThemeToStores([store1, store2], themeEntry(themeMap, 'high-contrast'))
		expect(store1.read?.()?.theme).toBe('high-contrast')
		expect(store2.read?.()?.theme).toBe('high-contrast')
	})
})
