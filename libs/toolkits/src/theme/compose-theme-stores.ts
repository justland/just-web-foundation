import type { Required, RequiredPick } from 'type-plus'
import { themeEntry } from './theme-entry.ts'
import type { ThemeEntry } from './theme-entry.types.ts'
import type { ThemeMap } from './theme-map.types.ts'
import type { AsyncThemeStore } from './theme-store/async-theme-store.types.ts'
import type { ThemeStore } from './theme-store/theme-store.types.ts'
import { setThemeToStores } from './utils/set-theme-to-stores.ts'

type StoreWithRead<Themes extends ThemeMap> = RequiredPick<AsyncThemeStore<Themes>, 'read'>

type StoreWithSubscribe<Themes extends ThemeMap> = RequiredPick<
	AsyncThemeStore<Themes>,
	'subscribe'
>

export type ComposeThemeStoresOptions<Themes extends ThemeMap> = {
	defaultTheme?: keyof Themes | undefined
}

/**
 * Composes multiple theme stores into a single store.
 *
 * - **read**: Returns first non-empty `ThemeEntry` from stores (waterfall). When all empty
 *   and `defaultTheme` is defined, returns `themeEntry(defaultTheme, themes)`.
 * - **write**: Delegates to `setThemeToStores` (writes to all stores with write).
 * - **subscribe**: Aggregates child store subscriptions. No initial notify—handler is only
 *   called when a child store emits.
 *
 * @param themes - ThemeMap for synthesizing fallback ThemeEntry
 * @param stores - Array of theme stores
 * @param options.defaultTheme - Fallback theme key when all stores return empty
 * @returns AsyncThemeStore
 */
export function composeThemeStores<Themes extends ThemeMap>(
	themes: Themes,
	stores: (ThemeStore<Themes> | AsyncThemeStore<Themes>)[],
	options?: ComposeThemeStoresOptions<Themes>
): Required<AsyncThemeStore<Themes>> {
	const { defaultTheme } = options ?? {}
	const withRead = stores.filter((s): s is StoreWithRead<Themes> => typeof s.read === 'function')

	async function readFromStores(): Promise<ThemeEntry<Themes> | undefined | null> {
		for (const store of withRead) {
			const result = await Promise.resolve(store.read!())
			if (result !== undefined && result !== null) return result
		}
		return defaultTheme !== undefined ? themeEntry(defaultTheme, themes) : undefined
	}

	const withSubscribe = stores.filter(
		(s): s is StoreWithSubscribe<Themes> => typeof s.subscribe === 'function'
	)

	function subscribe(handler: (theme: ThemeEntry<Themes> | undefined | null) => void): () => void {
		let scheduled = false
		let lastEmitted: keyof Themes | undefined

		const scheduleNotify = () => {
			if (scheduled) return
			scheduled = true
			queueMicrotask(async () => {
				scheduled = false
				const entry = await readFromStores()
				const key = entry?.theme ?? undefined
				if (key === lastEmitted) return
				lastEmitted = key
				handler(entry ?? undefined)
			})
		}

		const unSubs = withSubscribe.map((s) => s.subscribe!((_result) => scheduleNotify()))

		return () => {
			for (const unSub of unSubs) {
				unSub()
			}
		}
	}

	return {
		read: readFromStores,
		write(entry) {
			return setThemeToStores(stores, entry)
		},
		subscribe: withSubscribe.length > 0 ? subscribe : () => () => {}
	}
}
