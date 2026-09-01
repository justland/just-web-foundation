import{n as e,r as t}from"./rolldown-runtime-DkW27tQK.js";import{t as n}from"./react-B6tGW3fj.js";import{a as r}from"./chunk-W22LQPXL-BSpKiHdn.js";import{a as i,c as a,i as o,l as s,s as c}from"./iframe-BJVp8-w1.js";import{n as l,t as u}from"./dedent-DQaCLeUO.js";import{n as d}from"./theme-entry-Cs_OPpJC.js";import{n as f,t as p}from"./compose-theme-stores-BkbiF_Ba.js";import{n as m,t as h}from"./class-name-theme-store-DxMBjZh1.js";import{n as g,t as _}from"./data-attribute-theme-store-DqRsPjhr.js";import{n as v,t as y}from"./in-memory-theme-store-CJ-IHEDk.js";import{n as b,t as x}from"./local-storage-theme-store-nmP5Qc1w.js";import{n as S,t as C}from"./button-BlO48FDB.js";import{i as w,t as T}from"./react-BIf6FuzT.js";import{n as E,t as D}from"./theme-store-demo-CxcbzR8_.js";var O;function k(){return(k=e((()=>{O=`import { useCallback, useSyncExternalStore } from 'react'
import type { Required } from 'type-plus'
import {
	type ComposeThemeStoreEntry,
	type ComposeThemeStoresOptions,
	composeThemeStores
} from '../../theme/compose-theme-stores.ts'
import { themeEntry } from '../../theme/theme-entry.ts'
import type { ThemeEntry } from '../../theme/theme-entry.types.ts'
import type { ThemeMap } from '../../theme/theme-map.types.ts'
import type { AsyncThemeStore } from '../../theme/theme-store/async-theme-store.types.ts'
import type { ThemeStoreFactory } from '../../theme/theme-store/theme-store-factory.types.ts'

/**
 * Creates a React hook for theme selection that reads from and writes to composed theme stores.
 *
 * The returned hook subscribes to store changes via \`useSyncExternalStore\`, supports SSR
 * (uses \`defaultTheme\` for server snapshot), and returns a \`[theme, setTheme]\` tuple.
 * Channels are cached per store configuration and default theme for efficient reuse.
 *
 * @param themes - ThemeMap mapping theme keys to their values (e.g. CSS class names)
 * @param stores - Array of 1–8 theme stores or factory configs (see ComposeThemeStoreEntry)
 * @param options.defaultTheme - Fallback theme key when stores return empty; also used for SSR
 * @returns A \`useTheme\` hook that returns \`[currentTheme, setTheme]\` tuple
 *
 * @example
 * \`\`\`ts
 * const useTheme = createThemeHook(themes, [localStorageStore], { defaultTheme: 'light' })
 * const [theme, setTheme] = useTheme()
 * setTheme('dark')
 * \`\`\`
 */
export function createThemeHook<
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
	options?: ComposeThemeStoresOptions<Themes>
): (
	overrideDefaultTheme?: keyof Themes | undefined
) => [keyof Themes | undefined, (theme: keyof Themes) => void] {
	const { defaultTheme } = options ?? {}
	return function useTheme(overrideDefaultTheme?: keyof Themes | undefined) {
		const effectiveDefault = overrideDefaultTheme ?? defaultTheme
		const channel = getOrCreateChannel<Themes, A, B, C, D, E, F, G, H>(themes, stores, {
			defaultTheme: effectiveDefault
		})

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

/**
 * Creates a subscription channel bridging a composed theme store to React's useSyncExternalStore.
 * Manages listeners, initial async read from store, and delegates setTheme to store.write.
 *
 * @internal
 */
function createSharedChannel<Themes extends ThemeMap>(
	themes: Themes,
	composedStore: Required<AsyncThemeStore<Themes>>,
	defaultTheme: keyof Themes | undefined
) {
	let lastTheme: keyof Themes | undefined = defaultTheme
	const listeners = new Set<(theme: keyof Themes | undefined) => void>()

	const notify = (theme: keyof Themes | undefined) => {
		lastTheme = theme
		for (const fn of listeners) {
			fn(theme)
		}
	}

	const handleStoreUpdate = (entry: ThemeEntry<Themes> | undefined) => {
		notify(entry?.theme ?? defaultTheme)
	}

	// Initial read to populate lastTheme (compose store subscribe has no initial notify)
	void Promise.resolve(composedStore.read()).then((entry: ThemeEntry<Themes> | undefined) => {
		notify(entry?.theme ?? defaultTheme)
	})

	let unobserve: () => void = composedStore.subscribe(handleStoreUpdate)
	let isSubscribedToStore = true

	const subscribe = (listener: (theme: keyof Themes | undefined) => void) => {
		if (!isSubscribedToStore) {
			unobserve = composedStore.subscribe(handleStoreUpdate)
			isSubscribedToStore = true
		}
		listeners.add(listener)
		listener(lastTheme)
		return () => {
			listeners.delete(listener)
			if (listeners.size === 0) {
				unobserve()
				isSubscribedToStore = false
			}
		}
	}

	const getSnapshot = (): keyof Themes | undefined => lastTheme
	const getServerSnapshot = (): keyof Themes | undefined => defaultTheme

	return {
		subscribe,
		getSnapshot,
		getServerSnapshot,
		setTheme: (theme: keyof Themes) => composedStore.write(themeEntry(themes, theme))
	}
}

const channelsByStores = new WeakMap<
	object,
	Map<string | undefined, ReturnType<typeof createSharedChannel<any>>>
>()

/**
 * Returns a cached shared channel for the given themes, stores, and defaultTheme.
 * Channels are keyed by stores (WeakMap) and defaultTheme to avoid duplicate subscriptions.
 *
 * @internal
 */
function getOrCreateChannel<
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
) {
	const { defaultTheme } = options ?? {}
	const storesKey = stores as unknown as object
	let byDefault = channelsByStores.get(storesKey) as Map<
		keyof Themes | undefined,
		ReturnType<typeof createSharedChannel<Themes>>
	>
	if (!byDefault) {
		byDefault = new Map<keyof Themes | undefined, ReturnType<typeof createSharedChannel<Themes>>>()
		channelsByStores.set(storesKey, byDefault as any)
	}
	let channel = byDefault.get(defaultTheme) as ReturnType<typeof createSharedChannel<Themes>>
	if (!channel) {
		const composedStore = composeThemeStores(themes, stores, { defaultTheme })
		channel = createSharedChannel<Themes>(themes, composedStore, defaultTheme)
		byDefault.set(defaultTheme, channel)
	}
	return channel
}
`})))()}var A=t({CustomStoreFactory:()=>q,DefaultTheme:()=>J,DefaultThemeOverriddenInHook:()=>Y,Playground:()=>z,Source:()=>X,StoreFactoryPattern:()=>K,StoresConcrete:()=>G,StoryWithValue:()=>B,ThemeMapArrayValues:()=>U,ThemeMapStringValue:()=>V,__namedExportsOrder:()=>Z,default:()=>R});function j(e,t){let n=y(e);return t.initialTheme!==void 0&&n.write?.(d(e,t.initialTheme)),n}var M,N,P,F,I,L,R,z,B,V,H,U,W,G,K,q,J,Y,X,Z;function Q(){return(Q=e((()=>{T(),m(),f(),g(),v(),x(),c(),l(),M=n(),S(),E(),k(),N=r(),{expect:P,userEvent:F,waitFor:I}=__STORYBOOK_MODULE_TEST__,L={current:`current`,grayscale:`grayscale`,"high-contrast":`high-contrast`},R={title:`react/theme/createThemeHook`,tags:[`func`,`version:1.0`],parameters:i({description:{component:`Factory that creates a React hook returning [theme, setTheme]. Subscribes to theme stores and keeps the returned theme in sync.`}}),render:()=>(0,N.jsx)(N.Fragment,{})},z={tags:[`playground`],parameters:i({description:{story:`When stores are empty, useTheme returns defaultTheme. setTheme updates stores and the returned theme.`},source:{code:u`
                const store = inMemoryThemeStore(themes)
                const useTheme = createThemeHook(themes, [store], { defaultTheme: 'current' })
                const [theme, setTheme] = useTheme()
                setTheme('high-contrast')
            `}}),decorators:[s(),a()],loaders:[async()=>{let e=y(L);return{store:e,useTheme:w(L,[e],{defaultTheme:`current`})}}],render:(e,{loaded:{useTheme:t}})=>{let[n,r]=t();return(0,N.jsxs)(`div`,{className:`flex flex-col gap-4 font-sans`,children:[(0,N.jsxs)(`div`,{className:`flex flex-wrap gap-2`,children:[(0,N.jsx)(C,{onPress:()=>r(`current`),children:`Set current`}),(0,N.jsx)(C,{onPress:()=>r(`grayscale`),children:`Set grayscale`}),(0,N.jsx)(C,{onPress:()=>r(`high-contrast`),children:`Set high-contrast`})]}),(0,N.jsx)(o,{title:`Current theme`,appearance:`output`,children:(0,N.jsx)(`pre`,{"data-testid":`current-theme`,className:`font-mono`,children:n??`(none)`})})]})},play:async({canvas:e,step:t})=>{await t(`Initial state is defaultTheme`,async()=>{await P(e.getByTestId(`current-theme`)).toHaveTextContent(`current`)}),await t(`Set grayscale`,async()=>{await F.click(e.getByRole(`button`,{name:`Set grayscale`})),await P(e.getByTestId(`current-theme`)).toHaveTextContent(`grayscale`)}),await t(`Set high-contrast`,async()=>{await F.click(e.getByRole(`button`,{name:`Set high-contrast`})),await P(e.getByTestId(`current-theme`)).toHaveTextContent(`high-contrast`)})}},B={parameters:i({description:{story:`When the store already has a value, useTheme returns it on first render.`},source:{code:u`
                const store = inMemoryThemeStore(themes)
                store.write?.(themeEntry(themes, 'grayscale'))
                const useTheme = createThemeHook(themes, [store], { defaultTheme: 'current' })
                const [theme] = useTheme() // theme === 'grayscale'
            `}}),decorators:[s(),a()],render:()=>{let e=(0,M.useMemo)(()=>{let e=y(L);return e.write(d(L,`grayscale`)),e},[]),[t]=(0,M.useMemo)(()=>w(L,[e],{defaultTheme:`current`}),[e])();return(0,N.jsx)(o,{title:`Theme from store with value`,appearance:`output`,children:(0,N.jsx)(`pre`,{"data-testid":`current-theme`,className:`font-mono`,children:t??`(none)`})})},play:async({canvas:e})=>{await I(()=>P(e.getByTestId(`current-theme`)).toHaveTextContent(`grayscale`),{timeout:2e3})}},V={name:`themes: string value`,tags:[`props`],parameters:i({description:{story:`themes values can be a single string per theme.`},source:{code:u`
                const themes = {
                    current: 'current',
                    grayscale: 'grayscale',
                    'high-contrast': 'high-contrast'
                } as const

                const useTheme = createThemeHook(themes, [store], { defaultTheme: 'current' })
            `}}),decorators:[s(),a()],render:()=>{let e=(0,M.useMemo)(()=>y(L),[L]),t=(0,M.useMemo)(()=>w(L,[e],{defaultTheme:`current`}),[e]);function n(){let[e]=t();return(0,N.jsx)(o,{title:`useTheme() with string themes`,appearance:`output`,children:(0,N.jsx)(`pre`,{"data-testid":`current-theme`,className:`font-mono`,children:e??`(none)`})})}return(0,N.jsx)(n,{})},play:async({canvas:e})=>{await P(e.getByTestId(`current-theme`)).toHaveTextContent(`current`)}},H={current:`theme-current`,grayscale:[`theme-grayscale`,`app:bg-gray-100`],"high-contrast":`theme-high-contrast`},U={name:`themes: array values`,tags:[`props`],parameters:i({description:{story:`themes values can be string[]. createThemeHook accepts both; theme keys work the same.`},source:{code:u`
                const themes = {
                    current: 'theme-current',
                    grayscale: ['theme-grayscale', 'app:bg-gray-100'],
                    'high-contrast': 'theme-high-contrast'
                } as const

                const useTheme = createThemeHook(themes, [store], { defaultTheme: 'current' })
            `}}),decorators:[s(),a()],render:()=>{let e=(0,M.useMemo)(()=>w(H,[[y]],{defaultTheme:`current`}),[]);function t(){let[t]=e();return(0,N.jsx)(o,{title:`useTheme() with array themes`,appearance:`output`,children:(0,N.jsx)(`pre`,{"data-testid":`current-theme`,className:`font-mono`,children:t??`(none)`})})}return(0,N.jsx)(t,{})},play:async({canvas:e})=>{await P(e.getByTestId(`current-theme`)).toHaveTextContent(`current`)}},W={current:`theme-current`,grayscale:`theme-grayscale`,"high-contrast":`theme-high-contrast`},G={name:`stores: concrete stores`,tags:[`props`],parameters:i({description:{story:`Accepts concrete stores.`},source:{code:u`
                createThemeHook(themes, [
                    classNameThemeStore(themes),
                    dataAttributeThemeStore(themes, { attributeName: 'data-theme' }),
                    localStorageThemeStore(themes, { storageKey: 'my-theme-key' })
                ], { defaultTheme: 'current' })
            `}}),decorators:[s(),a()],render:()=>{let e=(0,M.useMemo)(()=>p(W,[h(W),_(W,{attributeName:`data-theme`}),b(W,{storageKey:`my-theme-key`})],{defaultTheme:`current`}),[]);return(0,N.jsx)(D,{store:e,themes:W})}},K={name:`stores: factory tuples`,tags:[`props`],parameters:i({description:{story:`Accepts store factory tuples [factory] or [factory, options]. Each position has its own type for options autocomplete.`},source:{code:u`
                createThemeHook(themes, [
                  [classNameThemeStore, { element: document.body }],
                  [dataAttributeThemeStore, { attributeName: 'data-theme', element: document.body }],
                  [localStorageThemeStore, { storageKey: 'my-theme-key' }]
                ], { defaultTheme: 'current' })
            `}}),decorators:[s(),a()],render:()=>{let e=(0,M.useMemo)(()=>p(W,[[h,{element:document.body}],[_,{attributeName:`data-theme`,element:document.body}],[b,{storageKey:`my-theme-key`}]],{defaultTheme:`current`}),[]);return(0,N.jsx)(D,{store:e,themes:W})}},q={name:`stores: custom store factory`,tags:[`props`],parameters:i({description:{story:`Custom store factory with options. The F generic infers the factory type, enabling options autocomplete for user-defined factories. Same StoreFactoryPattern as composeThemeStores.`},source:{code:u`
                function createInitializedThemeStore(themes, options: { initialTheme?: keyof Themes }) {
                  const store = inMemoryThemeStore(themes)
                  if (options.initialTheme) store.write?.(themeEntry(themes, options.initialTheme))
                  return store
                }
                const useTheme = createThemeHook(
                  themes,
                  [[createInitializedThemeStore, { initialTheme: 'grayscale' }]],
                  { defaultTheme: 'current' }
                )
                const [theme] = useTheme() // theme === 'grayscale' (from factory init)
            `}}),decorators:[s(),a()],render:()=>{let e=(0,M.useMemo)(()=>w(L,[[j,{initialTheme:`grayscale`}]],{defaultTheme:`current`}),[]);function t(){let[t,n]=e();return(0,N.jsxs)(`div`,{className:`flex flex-col gap-4 font-sans`,children:[(0,N.jsxs)(`div`,{className:`flex flex-wrap gap-2`,children:[(0,N.jsx)(C,{onPress:()=>n(`current`),children:`Set current`}),(0,N.jsx)(C,{onPress:()=>n(`grayscale`),children:`Set grayscale`}),(0,N.jsx)(C,{onPress:()=>n(`high-contrast`),children:`Set high-contrast`})]}),(0,N.jsx)(o,{title:`Theme (factory-initialized)`,appearance:`output`,children:(0,N.jsx)(`pre`,{"data-testid":`current-theme`,className:`font-mono`,children:t??`(none)`})})]})}return(0,N.jsx)(t,{})},play:async({canvas:e})=>{await I(()=>P(e.getByTestId(`current-theme`)).toHaveTextContent(`grayscale`),{timeout:2e3})}},J={name:`defaultTheme`,tags:[`props`],parameters:i({description:{story:`When stores are empty, useTheme() returns the configured defaultTheme. No override is passed.`},source:{code:u`
                const store = inMemoryThemeStore(themes)
                const useTheme = createThemeHook(themes, [store], { defaultTheme: 'current' })
                const [theme] = useTheme() // theme === 'current' when store empty
            `}}),decorators:[s(),a()],render:()=>{function e(){let[e]=(0,M.useMemo)(()=>w(L,[[y]],{defaultTheme:`current`}),[])();return(0,N.jsx)(o,{title:`Theme with default (no override)`,appearance:`output`,children:(0,N.jsx)(`pre`,{"data-testid":`current-theme`,className:`font-mono`,children:e??`(none)`})})}return(0,N.jsx)(e,{})},play:async({canvas:e})=>{await P(e.getByTestId(`current-theme`)).toHaveTextContent(`current`)}},Y={name:`defaultTheme: overridden in hook`,tags:[`props`],parameters:i({description:{story:`Pass an override default theme to useTheme(). When stores are empty, that override is used instead of the configured defaultTheme.`},source:{code:u`
                const store = inMemoryThemeStore(themes)
                const useTheme = createThemeHook(themes, [store], { defaultTheme: 'current' })
                const [theme] = useTheme('high-contrast') // theme === 'high-contrast' when store empty
            `}}),decorators:[s(),a()],render:()=>{function e(){let[e]=(0,M.useMemo)(()=>w(L,[[y]],{defaultTheme:`current`}),[])(`high-contrast`);return(0,N.jsx)(o,{title:`Theme with override default`,appearance:`output`,children:(0,N.jsx)(`pre`,{"data-testid":`current-theme`,className:`font-mono`,children:e??`(none)`})})}return(0,N.jsx)(e,{})},play:async({canvas:e})=>{await P(e.getByTestId(`current-theme`)).toHaveTextContent(`high-contrast`)}},X={tags:[`source`],parameters:i({source:{code:O}}),decorators:[a()]},z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`{
  tags: ['playground'],
  parameters: defineDocsParam({
    description: {
      story: 'When stores are empty, useTheme returns defaultTheme. setTheme updates stores and the returned theme.'
    },
    source: {
      code: dedent\`
                const store = inMemoryThemeStore(themes)
                const useTheme = createThemeHook(themes, [store], { defaultTheme: 'current' })
                const [theme, setTheme] = useTheme()
                setTheme('high-contrast')
            \`
    }
  }),
  decorators: [withStoryCard(), showSource()],
  loaders: [async () => {
    const store = inMemoryThemeStore(themes);
    const useTheme = createThemeHook(themes, [store], {
      defaultTheme: 'current'
    });
    return {
      store,
      useTheme
    };
  }],
  render: (_, {
    loaded: {
      useTheme
    }
  }) => {
    const [theme, setTheme] = useTheme();
    return <div className="flex flex-col gap-4 font-sans">
                <div className="flex flex-wrap gap-2">
                    <Button onPress={() => setTheme('current')}>Set current</Button>
                    <Button onPress={() => setTheme('grayscale')}>Set grayscale</Button>
                    <Button onPress={() => setTheme('high-contrast')}>Set high-contrast</Button>
                </div>
                <StoryCard title="Current theme" appearance="output">
                    <pre data-testid="current-theme" className="font-mono">
                        {theme ?? '(none)'}
                    </pre>
                </StoryCard>
            </div>;
  },
  play: async ({
    canvas,
    step
  }) => {
    await step('Initial state is defaultTheme', async () => {
      await expect(canvas.getByTestId('current-theme')).toHaveTextContent('current');
    });
    await step('Set grayscale', async () => {
      await userEvent.click(canvas.getByRole('button', {
        name: 'Set grayscale'
      }));
      await expect(canvas.getByTestId('current-theme')).toHaveTextContent('grayscale');
    });
    await step('Set high-contrast', async () => {
      await userEvent.click(canvas.getByRole('button', {
        name: 'Set high-contrast'
      }));
      await expect(canvas.getByTestId('current-theme')).toHaveTextContent('high-contrast');
    });
  }
}`,...z.parameters?.docs?.source}}},B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
  parameters: defineDocsParam({
    description: {
      story: 'When the store already has a value, useTheme returns it on first render.'
    },
    source: {
      code: dedent\`
                const store = inMemoryThemeStore(themes)
                store.write?.(themeEntry(themes, 'grayscale'))
                const useTheme = createThemeHook(themes, [store], { defaultTheme: 'current' })
                const [theme] = useTheme() // theme === 'grayscale'
            \`
    }
  }),
  decorators: [withStoryCard(), showSource()],
  render: () => {
    const store = useMemo(() => {
      const s = inMemoryThemeStore(themes);
      s.write(themeEntry(themes, 'grayscale'));
      return s;
    }, []);
    const useTheme = useMemo(() => createThemeHook(themes, [store], {
      defaultTheme: 'current'
    }), [store]);
    const [theme] = useTheme();
    return <StoryCard title="Theme from store with value" appearance="output">
                <pre data-testid="current-theme" className="font-mono">
                    {theme ?? '(none)'}
                </pre>
            </StoryCard>;
  },
  play: async ({
    canvas
  }) => {
    await waitFor(() => expect(canvas.getByTestId('current-theme')).toHaveTextContent('grayscale'), {
      timeout: 2000
    });
  }
}`,...B.parameters?.docs?.source}}},V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`{
  name: 'themes: string value',
  tags: ['props'],
  parameters: defineDocsParam({
    description: {
      story: 'themes values can be a single string per theme.'
    },
    source: {
      code: dedent\`
                const themes = {
                    current: 'current',
                    grayscale: 'grayscale',
                    'high-contrast': 'high-contrast'
                } as const

                const useTheme = createThemeHook(themes, [store], { defaultTheme: 'current' })
            \`
    }
  }),
  decorators: [withStoryCard(), showSource()],
  render: () => {
    const store = useMemo(() => inMemoryThemeStore(themes), [themes]);
    const useTheme = useMemo(() => createThemeHook(themes, [store], {
      defaultTheme: 'current'
    }), [store]);
    function Demo() {
      const [theme] = useTheme();
      return <StoryCard title="useTheme() with string themes" appearance="output">
                    <pre data-testid="current-theme" className="font-mono">
                        {theme ?? '(none)'}
                    </pre>
                </StoryCard>;
    }
    return <Demo />;
  },
  play: async ({
    canvas
  }) => {
    await expect(canvas.getByTestId('current-theme')).toHaveTextContent('current');
  }
}`,...V.parameters?.docs?.source}}},U.parameters={...U.parameters,docs:{...U.parameters?.docs,source:{originalSource:`{
  name: 'themes: array values',
  tags: ['props'],
  parameters: defineDocsParam({
    description: {
      story: 'themes values can be string[]. createThemeHook accepts both; theme keys work the same.'
    },
    source: {
      code: dedent\`
                const themes = {
                    current: 'theme-current',
                    grayscale: ['theme-grayscale', 'app:bg-gray-100'],
                    'high-contrast': 'theme-high-contrast'
                } as const

                const useTheme = createThemeHook(themes, [store], { defaultTheme: 'current' })
            \`
    }
  }),
  decorators: [withStoryCard(), showSource()],
  render: () => {
    const useTheme = useMemo(() => createThemeHook(themesArray, [[inMemoryThemeStore]], {
      defaultTheme: 'current'
    }), []);
    function Demo() {
      const [theme] = useTheme();
      return <StoryCard title="useTheme() with array themes" appearance="output">
                    <pre data-testid="current-theme" className="font-mono">
                        {theme ?? '(none)'}
                    </pre>
                </StoryCard>;
    }
    return <Demo />;
  },
  play: async ({
    canvas
  }) => {
    await expect(canvas.getByTestId('current-theme')).toHaveTextContent('current');
  }
}`,...U.parameters?.docs?.source}}},G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`{
  name: 'stores: concrete stores',
  tags: ['props'],
  parameters: defineDocsParam({
    description: {
      story: 'Accepts concrete stores.'
    },
    source: {
      code: dedent\`
                createThemeHook(themes, [
                    classNameThemeStore(themes),
                    dataAttributeThemeStore(themes, { attributeName: 'data-theme' }),
                    localStorageThemeStore(themes, { storageKey: 'my-theme-key' })
                ], { defaultTheme: 'current' })
            \`
    }
  }),
  decorators: [withStoryCard(), showSource()],
  render: () => {
    const store = useMemo(() => composeThemeStores(themesStoreFactory, [classNameThemeStore(themesStoreFactory), dataAttributeThemeStore(themesStoreFactory, {
      attributeName: 'data-theme'
    }), localStorageThemeStore(themesStoreFactory, {
      storageKey: 'my-theme-key'
    })], {
      defaultTheme: 'current'
    }), []);
    return <ThemeStoreDemo store={store} themes={themesStoreFactory} />;
  }
}`,...G.parameters?.docs?.source}}},K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`{
  name: 'stores: factory tuples',
  tags: ['props'],
  parameters: defineDocsParam({
    description: {
      story: 'Accepts store factory tuples [factory] or [factory, options]. Each position has its own type for options autocomplete.'
    },
    source: {
      code: dedent\`
                createThemeHook(themes, [
                  [classNameThemeStore, { element: document.body }],
                  [dataAttributeThemeStore, { attributeName: 'data-theme', element: document.body }],
                  [localStorageThemeStore, { storageKey: 'my-theme-key' }]
                ], { defaultTheme: 'current' })
            \`
    }
  }),
  decorators: [withStoryCard(), showSource()],
  render: () => {
    const store = useMemo(() => composeThemeStores(themesStoreFactory, [[classNameThemeStore, {
      element: document.body
    }], [dataAttributeThemeStore, {
      attributeName: 'data-theme',
      element: document.body
    }], [localStorageThemeStore, {
      storageKey: 'my-theme-key'
    }]], {
      defaultTheme: 'current'
    }), []);
    return <ThemeStoreDemo store={store} themes={themesStoreFactory} />;
  }
}`,...K.parameters?.docs?.source}}},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
  name: 'stores: custom store factory',
  tags: ['props'],
  parameters: defineDocsParam({
    description: {
      story: 'Custom store factory with options. The F generic infers the factory type, enabling options autocomplete for user-defined factories. Same StoreFactoryPattern as composeThemeStores.'
    },
    source: {
      code: dedent\`
                function createInitializedThemeStore(themes, options: { initialTheme?: keyof Themes }) {
                  const store = inMemoryThemeStore(themes)
                  if (options.initialTheme) store.write?.(themeEntry(themes, options.initialTheme))
                  return store
                }
                const useTheme = createThemeHook(
                  themes,
                  [[createInitializedThemeStore, { initialTheme: 'grayscale' }]],
                  { defaultTheme: 'current' }
                )
                const [theme] = useTheme() // theme === 'grayscale' (from factory init)
            \`
    }
  }),
  decorators: [withStoryCard(), showSource()],
  render: () => {
    const useTheme = useMemo(() => createThemeHook(themes, [[createInitializedThemeStore, {
      initialTheme: 'grayscale'
    }]], {
      defaultTheme: 'current'
    }), []);
    function Demo() {
      const [theme, setTheme] = useTheme();
      return <div className="flex flex-col gap-4 font-sans">
                    <div className="flex flex-wrap gap-2">
                        <Button onPress={() => setTheme('current')}>Set current</Button>
                        <Button onPress={() => setTheme('grayscale')}>Set grayscale</Button>
                        <Button onPress={() => setTheme('high-contrast')}>Set high-contrast</Button>
                    </div>
                    <StoryCard title="Theme (factory-initialized)" appearance="output">
                        <pre data-testid="current-theme" className="font-mono">
                            {theme ?? '(none)'}
                        </pre>
                    </StoryCard>
                </div>;
    }
    return <Demo />;
  },
  play: async ({
    canvas
  }) => {
    await waitFor(() => expect(canvas.getByTestId('current-theme')).toHaveTextContent('grayscale'), {
      timeout: 2000
    });
  }
}`,...q.parameters?.docs?.source}}},J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`{
  name: 'defaultTheme',
  tags: ['props'],
  parameters: defineDocsParam({
    description: {
      story: 'When stores are empty, useTheme() returns the configured defaultTheme. No override is passed.'
    },
    source: {
      code: dedent\`
                const store = inMemoryThemeStore(themes)
                const useTheme = createThemeHook(themes, [store], { defaultTheme: 'current' })
                const [theme] = useTheme() // theme === 'current' when store empty
            \`
    }
  }),
  decorators: [withStoryCard(), showSource()],
  render: () => {
    function Demo() {
      const useTheme = useMemo(() => createThemeHook(themes, [[inMemoryThemeStore]], {
        defaultTheme: 'current'
      }), []);
      const [theme] = useTheme();
      return <StoryCard title="Theme with default (no override)" appearance="output">
                    <pre data-testid="current-theme" className="font-mono">
                        {theme ?? '(none)'}
                    </pre>
                </StoryCard>;
    }
    return <Demo />;
  },
  play: async ({
    canvas
  }) => {
    await expect(canvas.getByTestId('current-theme')).toHaveTextContent('current');
  }
}`,...J.parameters?.docs?.source}}},Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`{
  name: 'defaultTheme: overridden in hook',
  tags: ['props'],
  parameters: defineDocsParam({
    description: {
      story: 'Pass an override default theme to useTheme(). When stores are empty, that override is used instead of the configured defaultTheme.'
    },
    source: {
      code: dedent\`
                const store = inMemoryThemeStore(themes)
                const useTheme = createThemeHook(themes, [store], { defaultTheme: 'current' })
                const [theme] = useTheme('high-contrast') // theme === 'high-contrast' when store empty
            \`
    }
  }),
  decorators: [withStoryCard(), showSource()],
  render: () => {
    function Demo() {
      const useTheme = useMemo(() => createThemeHook(themes, [[inMemoryThemeStore]], {
        defaultTheme: 'current'
      }), []);
      const [theme] = useTheme('high-contrast');
      return <StoryCard title="Theme with override default" appearance="output">
                    <pre data-testid="current-theme" className="font-mono">
                        {theme ?? '(none)'}
                    </pre>
                </StoryCard>;
    }
    return <Demo />;
  },
  play: async ({
    canvas
  }) => {
    await expect(canvas.getByTestId('current-theme')).toHaveTextContent('high-contrast');
  }
}`,...Y.parameters?.docs?.source}}},X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`{
  tags: ['source'],
  parameters: defineDocsParam({
    source: {
      code
    }
  }),
  decorators: [showSource()]
}`,...X.parameters?.docs?.source}}},Z=[`Playground`,`StoryWithValue`,`ThemeMapStringValue`,`ThemeMapArrayValues`,`StoresConcrete`,`StoreFactoryPattern`,`CustomStoreFactory`,`DefaultTheme`,`DefaultThemeOverriddenInHook`,`Source`]})))()}export{Q as n,R as r,A as t};