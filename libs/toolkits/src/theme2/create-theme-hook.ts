import { useCallback, useSyncExternalStore } from 'react'
import { observeThemeFromStores } from './observe-theme-from-stores.ts'
import { setThemeToStores } from './set-theme-to-stores.ts'
import type { StoreEntry, ThemeMap } from './theme.types.ts'
import { themeEntry } from './theme-entry.ts'

function createSharedChannel<Themes extends ThemeMap>(
	stores: StoreEntry<Themes>[],
	defaultTheme: keyof Themes | undefined,
	themeMap: Themes
) {
	let lastTheme: keyof Themes | undefined = defaultTheme
	const listeners = new Set<(theme: keyof Themes | undefined) => void>()

	const notify = (theme: keyof Themes | undefined) => {
		lastTheme = theme
		for (const fn of listeners) {
			fn(theme)
		}
	}

	const subscribe = (listener: (theme: keyof Themes | undefined) => void) => {
		listeners.add(listener)
		listener(lastTheme)
		return () => {
			listeners.delete(listener)
		}
	}

	const unobserve = observeThemeFromStores(stores, defaultTheme, notify)

	const getSnapshot = (): keyof Themes | undefined => lastTheme
	const getServerSnapshot = (): keyof Themes | undefined => defaultTheme

	return {
		subscribe,
		getSnapshot,
		getServerSnapshot,
		setTheme: (theme: keyof Themes) => setThemeToStores(stores, themeEntry(theme, themeMap)),
		unobserve
	}
}

const channelsByStores = new WeakMap<
	object,
	Map<string | undefined, ReturnType<typeof createSharedChannel<any>>>
>()

function getOrCreateChannel<Themes extends ThemeMap>(
	stores: StoreEntry<Themes>[],
	effectiveDefault: keyof Themes | undefined,
	themeMap: Themes
) {
	const storesKey = stores as unknown as object
	let byDefault = channelsByStores.get(storesKey) as Map<
		keyof Themes | undefined,
		ReturnType<typeof createSharedChannel<Themes>>
	>
	if (!byDefault) {
		byDefault = new Map<keyof Themes | undefined, ReturnType<typeof createSharedChannel<Themes>>>()
		channelsByStores.set(storesKey, byDefault as any)
	}
	const defaultKey = effectiveDefault
	let channel = byDefault.get(defaultKey) as ReturnType<typeof createSharedChannel<Themes>>
	if (!channel) {
		channel = createSharedChannel<Themes>(stores, effectiveDefault, themeMap)
		byDefault.set(defaultKey, channel)
	}
	return channel
}

export function createThemeHook<Themes extends ThemeMap>(options: {
	stores: StoreEntry<Themes>[]
	defaultTheme?: keyof Themes | undefined
	themeMap: Themes
}): (
	overrideDefaultTheme?: keyof Themes | undefined
) => [keyof Themes | undefined, (theme: keyof Themes) => void] {
	const { stores, defaultTheme, themeMap } = options
	return function useTheme(overrideDefaultTheme?: keyof Themes | undefined) {
		const effectiveDefault = overrideDefaultTheme ?? defaultTheme
		const channel = getOrCreateChannel<Themes>(stores, effectiveDefault, themeMap)

		const theme = useSyncExternalStore<keyof Themes | undefined>(
			channel.subscribe,
			channel.getSnapshot,
			channel.getServerSnapshot
		)

		const setTheme = useCallback(
			async (newTheme: keyof Themes) => {
				await channel.setTheme(newTheme)
			},
			[channel]
		)

		return [theme, setTheme]
	}
}
