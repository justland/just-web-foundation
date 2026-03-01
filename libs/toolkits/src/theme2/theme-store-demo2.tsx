import { useCallback, useEffect, useState } from 'react'
import { Button } from '../testing/button.tsx'
import { ThemeResultCard } from '../testing/theme-result-card.tsx'
import { appendId } from '../utils/append-id.ts'
import { themeEntry } from './theme-entry.ts'
import type { ThemeEntry } from './theme-entry.types.ts'
import type { ThemeMap } from './theme-map.types.ts'
import type { AsyncThemeStore } from './theme-store/async-theme-store.types.ts'
import type { ThemeStore } from './theme-store/theme-store.types.ts'

export type ThemeStoreDemo2Props<Themes extends ThemeMap> = {
	store: ThemeStore<Themes> | AsyncThemeStore<Themes>
	themes: Themes
	/** Theme keys to show as "Write X" buttons. Defaults to first 3 keys from themes. */
	setThemeKeys?: (keyof Themes)[]
	'data-testid'?: string
}

/**
 * Demo component that uses theme2 store.read, store.write, and store.subscribe.
 * Renders observed value, a one-time read result, and buttons to trigger read/write for showcasing behavior.
 * All interactive elements and result areas use data-testid for testing.
 */
export function ThemeStoreDemo2<Themes extends ThemeMap>({
	store,
	themes,
	setThemeKeys,
	'data-testid': dataTestId = 'theme-store-demo2'
}: ThemeStoreDemo2Props<Themes>) {
	const [observedResult, setObservedResult] = useState<ThemeEntry<Themes> | undefined | null>(
		undefined
	)
	const [getResult, setGetResult] = useState<ThemeEntry<Themes> | undefined | null>(undefined)

	const keys = (setThemeKeys ??
		(Object.keys(themes) as (keyof Themes)[]).slice(0, 3)) as (keyof Themes)[]

	useEffect(() => {
		return store.subscribe?.(setObservedResult)
	}, [store])

	const handleGet = useCallback(async () => {
		const result = store.read?.()
		const resolved = await Promise.resolve(result)
		setGetResult(resolved ?? undefined)
	}, [store])

	const handleSet = useCallback(
		(theme: keyof Themes) => async () => {
			const ret = store.write?.(themeEntry(theme, themes))
			await Promise.resolve(ret)
		},
		[store, themes]
	)

	const observeTestId = appendId(dataTestId, 'observe')
	const readTestId = appendId(dataTestId, 'read')

	return (
		<div className="flex flex-col gap-2" data-testid={dataTestId}>
			<div className="flex flex-wrap gap-2">
				<Button onClick={handleGet} data-testid={appendId(dataTestId, 'btn-read')}>
					Read theme
				</Button>
				{keys.map((key) => (
					<Button
						key={String(key)}
						onClick={handleSet(key)}
						data-testid={appendId(dataTestId, `btn-write-${String(key)}`)}
					>
						Write {String(key)}
					</Button>
				))}
			</div>
			<ThemeResultCard title="Read (one-time)" result={getResult} data-testid={readTestId} />
			<ThemeResultCard
				title="Observed (subscribe)"
				result={observedResult}
				data-testid={observeTestId}
			/>
		</div>
	)
}
