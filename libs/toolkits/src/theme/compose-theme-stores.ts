import type { Required, RequiredPick } from 'type-plus'
import { setThemeToStores } from './_utils/set-theme-to-stores.ts'
import { themeEntry } from './theme-entry.ts'
import type { ThemeEntry } from './theme-entry.types.ts'
import type { ThemeMap } from './theme-map.types.ts'
import type { AsyncThemeStore } from './theme-store/async-theme-store.types.ts'
import type { ThemeStore } from './theme-store/theme-store.types.ts'
import type { ThemeStoreFactory } from './theme-store/theme-store-factory.types.ts'

/** Input item for one position: concrete store or factory config [factory, options?]. */
export type ComposeThemeStoreEntry<
	Themes extends ThemeMap,
	F extends ThemeStoreFactory<Themes> = never
> = ThemeStore<Themes> | AsyncThemeStore<Themes> | readonly [F] | readonly [F, Parameters<F>[1]]

export type ComposeThemeStoresOptions<Themes extends ThemeMap> = {
	defaultTheme?: keyof Themes | undefined
}

/**
 * Composes multiple theme stores into a single store.
 *
 * Accepts concrete stores or store factory tuples `[factory]` or `[factory, options]`.
 * For factory tuples, calls `factory(themes)` or `factory(themes, options)` to create stores.
 *
 * - **read**: Returns first non-empty `ThemeEntry` from stores (waterfall). When all empty
 *   and `defaultTheme` is defined, returns `themeEntry(defaultTheme, themes)`.
 * - **write**: Delegates to `setThemeToStores` (writes to all stores with write).
 * - **subscribe**: Aggregates child store subscriptions. No initial notify—handler is only
 *   called when a child store emits.
 *
 * @param themes - ThemeMap for synthesizing fallback ThemeEntry
 * @param stores - Array of theme stores or factory configs [factory, options?]
 * @param options.defaultTheme - Fallback theme key when all stores return empty
 * @returns AsyncThemeStore
 */
export function composeThemeStores<
	Themes extends ThemeMap,
	A extends ThemeStoreFactory<Themes> = never,
	B extends ThemeStoreFactory<Themes> = never,
	C extends ThemeStoreFactory<Themes> = never,
	D extends ThemeStoreFactory<Themes> = never,
	E extends ThemeStoreFactory<Themes> = never,
	F extends ThemeStoreFactory<Themes> = never,
	G extends ThemeStoreFactory<Themes> = never,
	H extends ThemeStoreFactory<Themes> = never
>(
	themes: Themes,
	stores: readonly [
		store1: ComposeThemeStoreEntry<Themes, A>,
		store2?: ComposeThemeStoreEntry<Themes, B>,
		store3?: ComposeThemeStoreEntry<Themes, C>,
		store4?: ComposeThemeStoreEntry<Themes, D>,
		store5?: ComposeThemeStoreEntry<Themes, E>,
		store6?: ComposeThemeStoreEntry<Themes, F>,
		store7?: ComposeThemeStoreEntry<Themes, G>,
		store8?: ComposeThemeStoreEntry<Themes, H>
	],
	options?: ComposeThemeStoresOptions<Themes> | undefined
): Required<AsyncThemeStore<Themes>> {
	const { defaultTheme } = options ?? {}
	const resolved = resolveStores(themes, stores)
	const withRead = resolved.filter((s): s is StoreWithRead<Themes> => typeof s.read === 'function')

	async function readFromStores(): Promise<ThemeEntry<Themes> | undefined | null> {
		for (const store of withRead) {
			const result = await Promise.resolve(store.read())
			if (result !== undefined && result !== null) return result
		}
		return defaultTheme !== undefined ? themeEntry(defaultTheme, themes) : undefined
	}

	const withSubscribe = resolved.filter(
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
			return setThemeToStores(resolved, entry)
		},
		subscribe: withSubscribe.length > 0 ? subscribe : () => () => {}
	}
}

type StoreWithRead<Themes extends ThemeMap> = RequiredPick<AsyncThemeStore<Themes>, 'read'>

type StoreWithSubscribe<Themes extends ThemeMap> = RequiredPick<
	AsyncThemeStore<Themes>,
	'subscribe'
>

function resolveStores<Themes extends ThemeMap>(
	themes: Themes,
	stores: readonly [
		store1: ComposeThemeStoreEntry<Themes, any>,
		store2?: ComposeThemeStoreEntry<Themes, any>,
		store3?: ComposeThemeStoreEntry<Themes, any>,
		store4?: ComposeThemeStoreEntry<Themes, any>,
		store5?: ComposeThemeStoreEntry<Themes, any>,
		store6?: ComposeThemeStoreEntry<Themes, any>,
		store7?: ComposeThemeStoreEntry<Themes, any>,
		store8?: ComposeThemeStoreEntry<Themes, any>
	]
): (ThemeStore<Themes> | AsyncThemeStore<Themes>)[] {
	return stores.map((item) => {
		if (Array.isArray(item)) {
			const [factory, options] = item
			return (factory as (t: Themes, o?: unknown) => ThemeStore<Themes>)(themes, options)
		}
		return item as ThemeStore<Themes> | AsyncThemeStore<Themes>
	})
}
