import{j as t,d as a,w as u,s as h,S as T,r as m}from"./iframe-Ds1H5bIE.js";import{d as i}from"./dedent-BuYMbVyj.js";import{t as D}from"./theme-entry-D4S_RAMB.js";import{c as E}from"./class-name-theme-store-CmBWQ_Vc.js";import{d as B}from"./data-attribute-theme-store-DutCopE6.js";import{l as F}from"./local-storage-theme-store-74WqzpGC.js";import{c as l}from"./create-theme-hook-QF3gCBPc.js";import{c as N}from"./compose-theme-stores-CD86eyKP.js";import{i as p}from"./in-memory-theme-store-fTg_sUo_.js";import{B as y}from"./button-DN0NMyAj.js";import{T as j}from"./theme-store-demo-CKiy_IMv.js";import"./preload-helper-PPVm8Dsz.js";import"./dummy-theme-store-DcCfgetv.js";import"./write-class-name-CcTpPJCn.js";import"./observe-attribute-DJMrXwPX.js";import"./resolve-theme-map-value-CsrxdXA7.js";import"./findKey-BZZwGHNT.js";import"./write-data-attribute-CRBlNUMN.js";import"./get-data-attribute-Bl9c_7h4.js";import"./get-attribute-BI4biMNS.js";import"./observe-data-attribute-CrIGpGqK.js";import"./write-local-storage-wJ6Lcjak.js";import"./write-web-storage-C2zTqgEU.js";import"./parse-stored-theme-Dsx2RsUi.js";import"./set-theme-to-stores-C1AbMsOJ.js";import"./theme-result-card-s1nzIxT7.js";const I=`import { useCallback, useSyncExternalStore } from 'react'
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

	const handleStoreUpdate = (entry: ThemeEntry<Themes> | undefined | null) => {
		notify(entry?.theme ?? defaultTheme)
	}

	// Initial read to populate lastTheme (compose store subscribe has no initial notify)
	void Promise.resolve(composedStore.read()).then(
		(entry: ThemeEntry<Themes> | undefined | null) => {
			notify(entry?.theme ?? defaultTheme)
		}
	)

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
`,{expect:c,userEvent:M,waitFor:P}=__STORYBOOK_MODULE_TEST__,n={current:"current",grayscale:"grayscale","high-contrast":"high-contrast"},ue={title:"react/theme/createThemeHook",tags:["func","version:1.0"],parameters:a({description:{component:"Factory that creates a React hook returning [theme, setTheme]. Subscribes to theme stores and keeps the returned theme in sync."}}),render:()=>t.jsx(t.Fragment,{})},f={tags:["playground"],parameters:a({description:{story:"When stores are empty, useTheme returns defaultTheme. setTheme updates stores and the returned theme."},source:{code:i`
                const store = inMemoryThemeStore(themes)
                const useTheme = createThemeHook(themes, [store], { defaultTheme: 'current' })
                const [theme, setTheme] = useTheme()
                setTheme('high-contrast')
            `}}),decorators:[u(),h()],loaders:[async()=>{const e=p(n),r=l(n,[e],{defaultTheme:"current"});return{store:e,useTheme:r}}],render:(e,{loaded:{useTheme:r}})=>{const[s,o]=r();return t.jsxs("div",{className:"flex flex-col gap-4 font-sans",children:[t.jsxs("div",{className:"flex flex-wrap gap-2",children:[t.jsx(y,{onPress:()=>o("current"),children:"Set current"}),t.jsx(y,{onPress:()=>o("grayscale"),children:"Set grayscale"}),t.jsx(y,{onPress:()=>o("high-contrast"),children:"Set high-contrast"})]}),t.jsx(T,{title:"Current theme",appearance:"output",children:t.jsx("pre",{"data-testid":"current-theme",className:"font-mono",children:s??"(none)"})})]})},play:async({canvas:e,step:r})=>{await r("Initial state is defaultTheme",async()=>{await c(e.getByTestId("current-theme")).toHaveTextContent("current")}),await r("Set grayscale",async()=>{await M.click(e.getByRole("button",{name:"Set grayscale"})),await c(e.getByTestId("current-theme")).toHaveTextContent("grayscale")}),await r("Set high-contrast",async()=>{await M.click(e.getByRole("button",{name:"Set high-contrast"})),await c(e.getByTestId("current-theme")).toHaveTextContent("high-contrast")})}},S={parameters:a({description:{story:"When the store already has a value, useTheme returns it on first render."},source:{code:i`
                const store = inMemoryThemeStore(themes)
                store.write?.(themeEntry(themes, 'grayscale'))
                const useTheme = createThemeHook(themes, [store], { defaultTheme: 'current' })
                const [theme] = useTheme() // theme === 'grayscale'
            `}}),decorators:[u(),h()],render:()=>{const e=m.useMemo(()=>{const o=p(n);return o.write(D(n,"grayscale")),o},[]),r=m.useMemo(()=>l(n,[e],{defaultTheme:"current"}),[e]),[s]=r();return t.jsx(T,{title:"Theme from store with value",appearance:"output",children:t.jsx("pre",{"data-testid":"current-theme",className:"font-mono",children:s??"(none)"})})},play:async({canvas:e})=>{await P(()=>c(e.getByTestId("current-theme")).toHaveTextContent("grayscale"),{timeout:2e3})}},g={name:"themes: string value",tags:["props"],parameters:a({description:{story:"themes values can be a single string per theme."},source:{code:i`
                const themes = {
                    current: 'current',
                    grayscale: 'grayscale',
                    'high-contrast': 'high-contrast'
                } as const

                const useTheme = createThemeHook(themes, [store], { defaultTheme: 'current' })
            `}}),decorators:[u(),h()],render:()=>{const e=m.useMemo(()=>p(n),[n]),r=m.useMemo(()=>l(n,[e],{defaultTheme:"current"}),[e]);function s(){const[o]=r();return t.jsx(T,{title:"useTheme() with string themes",appearance:"output",children:t.jsx("pre",{"data-testid":"current-theme",className:"font-mono",children:o??"(none)"})})}return t.jsx(s,{})},play:async({canvas:e})=>{await c(e.getByTestId("current-theme")).toHaveTextContent("current")}},A={current:"theme-current",grayscale:["theme-grayscale","app:bg-gray-100"],"high-contrast":"theme-high-contrast"},v={name:"themes: array values",tags:["props"],parameters:a({description:{story:"themes values can be string[]. createThemeHook accepts both; theme keys work the same."},source:{code:i`
                const themes = {
                    current: 'theme-current',
                    grayscale: ['theme-grayscale', 'app:bg-gray-100'],
                    'high-contrast': 'theme-high-contrast'
                } as const

                const useTheme = createThemeHook(themes, [store], { defaultTheme: 'current' })
            `}}),decorators:[u(),h()],render:()=>{const e=m.useMemo(()=>l(A,[[p]],{defaultTheme:"current"}),[]);function r(){const[s]=e();return t.jsx(T,{title:"useTheme() with array themes",appearance:"output",children:t.jsx("pre",{"data-testid":"current-theme",className:"font-mono",children:s??"(none)"})})}return t.jsx(r,{})},play:async({canvas:e})=>{await c(e.getByTestId("current-theme")).toHaveTextContent("current")}},d={current:"theme-current",grayscale:"theme-grayscale","high-contrast":"theme-high-contrast"},x={name:"stores: concrete stores",tags:["props"],parameters:a({description:{story:"Accepts concrete stores."},source:{code:i`
                createThemeHook(themes, [
                    classNameThemeStore(themes),
                    dataAttributeThemeStore(themes, { attributeName: 'data-theme' }),
                    localStorageThemeStore(themes, { storageKey: 'my-theme-key' })
                ], { defaultTheme: 'current' })
            `}}),decorators:[u(),h()],render:()=>{const e=m.useMemo(()=>N(d,[E(d),B(d,{attributeName:"data-theme"}),F(d,{storageKey:"my-theme-key"})],{defaultTheme:"current"}),[]);return t.jsx(j,{store:e,themes:d})}},w={name:"stores: factory tuples",tags:["props"],parameters:a({description:{story:"Accepts store factory tuples [factory] or [factory, options]. Each position has its own type for options autocomplete."},source:{code:i`
                createThemeHook(themes, [
                  [classNameThemeStore, { element: document.body }],
                  [dataAttributeThemeStore, { attributeName: 'data-theme', element: document.body }],
                  [localStorageThemeStore, { storageKey: 'my-theme-key' }]
                ], { defaultTheme: 'current' })
            `}}),decorators:[u(),h()],render:()=>{const e=m.useMemo(()=>N(d,[[E,{element:document.body}],[B,{attributeName:"data-theme",element:document.body}],[F,{storageKey:"my-theme-key"}]],{defaultTheme:"current"}),[]);return t.jsx(j,{store:e,themes:d})}};function R(e,r){const s=p(e);return r.initialTheme!==void 0&&s.write?.(D(e,r.initialTheme)),s}const C={name:"stores: custom store factory",tags:["props"],parameters:a({description:{story:"Custom store factory with options. The F generic infers the factory type, enabling options autocomplete for user-defined factories. Same StoreFactoryPattern as composeThemeStores."},source:{code:i`
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
            `}}),decorators:[u(),h()],render:()=>{const e=m.useMemo(()=>l(n,[[R,{initialTheme:"grayscale"}]],{defaultTheme:"current"}),[]);function r(){const[s,o]=e();return t.jsxs("div",{className:"flex flex-col gap-4 font-sans",children:[t.jsxs("div",{className:"flex flex-wrap gap-2",children:[t.jsx(y,{onPress:()=>o("current"),children:"Set current"}),t.jsx(y,{onPress:()=>o("grayscale"),children:"Set grayscale"}),t.jsx(y,{onPress:()=>o("high-contrast"),children:"Set high-contrast"})]}),t.jsx(T,{title:"Theme (factory-initialized)",appearance:"output",children:t.jsx("pre",{"data-testid":"current-theme",className:"font-mono",children:s??"(none)"})})]})}return t.jsx(r,{})},play:async({canvas:e})=>{await P(()=>c(e.getByTestId("current-theme")).toHaveTextContent("grayscale"),{timeout:2e3})}},k={name:"defaultTheme",tags:["props"],parameters:a({description:{story:"When stores are empty, useTheme() returns the configured defaultTheme. No override is passed."},source:{code:i`
                const store = inMemoryThemeStore(themes)
                const useTheme = createThemeHook(themes, [store], { defaultTheme: 'current' })
                const [theme] = useTheme() // theme === 'current' when store empty
            `}}),decorators:[u(),h()],render:()=>{function e(){const r=m.useMemo(()=>l(n,[[p]],{defaultTheme:"current"}),[]),[s]=r();return t.jsx(T,{title:"Theme with default (no override)",appearance:"output",children:t.jsx("pre",{"data-testid":"current-theme",className:"font-mono",children:s??"(none)"})})}return t.jsx(e,{})},play:async({canvas:e})=>{await c(e.getByTestId("current-theme")).toHaveTextContent("current")}},b={name:"defaultTheme: overridden in hook",tags:["props"],parameters:a({description:{story:"Pass an override default theme to useTheme(). When stores are empty, that override is used instead of the configured defaultTheme."},source:{code:i`
                const store = inMemoryThemeStore(themes)
                const useTheme = createThemeHook(themes, [store], { defaultTheme: 'current' })
                const [theme] = useTheme('high-contrast') // theme === 'high-contrast' when store empty
            `}}),decorators:[u(),h()],render:()=>{function e(){const r=m.useMemo(()=>l(n,[[p]],{defaultTheme:"current"}),[]),[s]=r("high-contrast");return t.jsx(T,{title:"Theme with override default",appearance:"output",children:t.jsx("pre",{"data-testid":"current-theme",className:"font-mono",children:s??"(none)"})})}return t.jsx(e,{})},play:async({canvas:e})=>{await c(e.getByTestId("current-theme")).toHaveTextContent("high-contrast")}},H={tags:["source"],parameters:a({source:{code:I}}),decorators:[h()]};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
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
}`,...f.parameters?.docs?.source}}};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
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
}`,...S.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
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
}`,...g.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
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
}`,...v.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
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
}`,...x.parameters?.docs?.source}}};w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
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
}`,...w.parameters?.docs?.source}}};C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
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
}`,...C.parameters?.docs?.source}}};k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
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
}`,...k.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
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
}`,...b.parameters?.docs?.source}}};H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`{
  tags: ['source'],
  parameters: defineDocsParam({
    source: {
      code
    }
  }),
  decorators: [showSource()]
}`,...H.parameters?.docs?.source}}};const ie=["Playground","StoryWithValue","ThemeMapStringValue","ThemeMapArrayValues","StoresConcrete","StoreFactoryPattern","CustomStoreFactory","DefaultTheme","DefaultThemeOverriddenInHook","Source"];export{C as CustomStoreFactory,k as DefaultTheme,b as DefaultThemeOverriddenInHook,f as Playground,H as Source,w as StoreFactoryPattern,x as StoresConcrete,S as StoryWithValue,v as ThemeMapArrayValues,g as ThemeMapStringValue,ie as __namedExportsOrder,ue as default};
