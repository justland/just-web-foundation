import{j as s,d as a,w as h,s as c,r as x}from"./iframe-Pea2t46H.js";import{d as m}from"./dedent-BuYMbVyj.js";import{l as r}from"./local-storage-theme-store-CwG1v2Dm.js";import{T}from"./theme-result-card-D84vDB1y.js";import"./preload-helper-PPVm8Dsz.js";import"./try-parse-json-BpEBnayC.js";import"./append-id-Vsg144gU.js";const C=`import { tryParseJSON } from '../_internal/utils/try-parse-json.ts'
import type { ThemeMap, ThemeResult, ThemeStorageOptions } from './theme.types.ts'

export type LocalStorageThemeStoreOptions<Themes extends ThemeMap> = Omit<
	ThemeStorageOptions<Themes>,
	'storageKey'
>

export type LocalStorageThemeStore<Themes extends ThemeMap> = {
	get(options: LocalStorageThemeStoreOptions<Themes>): ThemeResult<Themes>
	set(
		options: LocalStorageThemeStoreOptions<Themes> & {
			theme?: keyof Themes | null | undefined
		},
	): void
	subscribe(
		options: LocalStorageThemeStoreOptions<Themes> & {
			handler: (result: ThemeResult<Themes>) => void
		},
	): { disconnect: () => void }
}

/**
 * Theme store backed by localStorage for a fixed storage key.
 *
 * The returned store provides \`get\`, \`set\`, and \`subscribe\` that use the given
 * \`storageKey\`. Callers pass \`themes\` and optional \`theme\` (default) when calling
 * get/set/subscribe; the storage key is fixed at creation time.
 *
 * @param storageKey - localStorage key to read/write
 * @returns A store object with get, set, and subscribe
 *
 * @example
 * \`\`\`ts
 * const store = localStorageThemeStore('app-theme')
 * const result = store.get({ themes: { light: 'theme-light', dark: 'theme-dark' }, theme: 'light' })
 * store.set({ themes, theme: 'dark' })
 * const observer = store.subscribe({ themes, theme: 'light', handler: (r) => console.log(r) })
 * observer.disconnect()
 * \`\`\`
 */
const storeCache = new Map<string, LocalStorageThemeStore<ThemeMap>>()

export function localStorageThemeStore<Themes extends ThemeMap>(
	storageKey: string,
): LocalStorageThemeStore<Themes> {
	let store = storeCache.get(storageKey) as LocalStorageThemeStore<Themes> | undefined
	if (store) return store
	function get(options: LocalStorageThemeStoreOptions<Themes>): ThemeResult<Themes> {
		const defaultTheme = options.theme
			? {
					theme: options.theme,
					value: options.themes[options.theme],
				}
			: undefined
		if (!window?.localStorage) return defaultTheme

		try {
			const stored = window.localStorage.getItem(storageKey)
			const theme = tryParseJSON<{
				theme: keyof Themes
				value: Themes[keyof Themes]
			}>(stored)
			if (!theme) return defaultTheme
			return theme
		} catch {
			return defaultTheme
		}
	}

	function set(
		options: LocalStorageThemeStoreOptions<Themes> & {
			theme?: keyof Themes | null | undefined
		},
	): void {
		if (!window?.localStorage) return

		try {
			if (options.theme == null || options.theme === '') {
				window.localStorage.removeItem(storageKey)
				return
			}

			window.localStorage.setItem(
				storageKey,
				JSON.stringify({
					theme: options.theme,
					value: options.themes[options.theme],
				}),
			)
		} catch {
			// Ignore quota or other storage errors
		}
	}

	function subscribe(
		options: LocalStorageThemeStoreOptions<Themes> & {
			handler: (result: ThemeResult<Themes>) => void
		},
	): { disconnect: () => void } {
		const { handler, ...storageOptions } = options

		const notify = () => {
			handler(get(storageOptions))
		}

		if (typeof window === 'undefined' || !window.localStorage) {
			handler(get(storageOptions))
			return { disconnect: () => {} }
		}

		notify()

		const onStorage = (e: StorageEvent) => {
			if (e.key === storageKey && e.storageArea === window.localStorage) {
				notify()
			}
		}

		window.addEventListener('storage', onStorage)

		return {
			disconnect: () => {
				window.removeEventListener('storage', onStorage)
			},
		}
	}

	store = { get, set, subscribe }
	storeCache.set(storageKey, store as unknown as LocalStorageThemeStore<ThemeMap>)
	return store
}
`,{expect:n}=__STORYBOOK_MODULE_TEST__,L={title:"theme/localStorageThemeStore",tags:["func","version:next"],parameters:a({description:{component:"Theme store backed by localStorage for a fixed storage key. The store provides get, set, and subscribe that use the given key. Callers pass themes and optional default theme when calling get/set/subscribe."}}),render:()=>s.jsx(s.Fragment,{})},o={default:"text-white",grayscale:"text-gray-100"},b="cs-theme-basic",v="cs-theme-get",K="cs-theme-set",_="cs-theme-subscribe";function f({storageKey:e,themes:t,theme:l}){const S=r(e).get({themes:t,theme:l});return s.jsx(T,{title:"store.get() result","data-testid":"store-get-result",result:S})}const d={tags:["use-case"],parameters:a({description:{story:"Create a store with a storage key, set a theme, then get and display the result."}}),decorators:[h(),c({source:m`
                const store = localStorageThemeStore('app-theme')
                store.set({ themes: { default: 'text-white', grayscale: 'text-gray-100' }, theme: 'default' })
                const result = store.get({ themes, theme: 'default' })
            `})],loaders:[()=>(r(b).set({themes:o,theme:"default"}),{storageKey:b})],render:(e,{loaded:{storageKey:t}})=>s.jsx(f,{storageKey:t,themes:o,theme:"default"}),play:async({canvas:e})=>{await n(e.getByTestId("store-get-result")).toHaveTextContent("theme: default"),await n(e.getByTestId("store-get-result")).toHaveTextContent("value: text-white")}},i={name:"get: with default theme",tags:["use-case","props"],parameters:a({description:{story:"When nothing is stored at the key, store.get() returns the default theme from options."}}),loaders:[()=>(r(v).set({themes:o,theme:null}),{storageKey:v})],decorators:[h({content:s.jsxs("p",{children:[s.jsx("code",{children:"store.get({ themes, theme: 'grayscale' })"})," returns grayscale when storage is empty."]})}),c({source:m`
                const store = localStorageThemeStore('theme-get')
                const result = store.get({
                    themes: { default: 'text-white', grayscale: 'text-gray-100' },
                    theme: 'grayscale',
                })
            `})],render:(e,{loaded:{storageKey:t}})=>s.jsx(f,{storageKey:t,themes:o,theme:"grayscale"}),play:async({canvas:e})=>{await n(e.getByTestId("store-get-result")).toHaveTextContent("theme: grayscale"),await n(e.getByTestId("store-get-result")).toHaveTextContent("value: text-gray-100")}},u={name:"set then get",tags:["use-case"],loaders:[()=>(r(K).set({themes:o,theme:"grayscale"}),{storageKey:K})],decorators:[h({content:s.jsxs("p",{children:[s.jsx("code",{children:"store.set()"})," persists the theme; ",s.jsx("code",{children:"store.get()"})," reads it back."]})}),c({source:m`
                const store = localStorageThemeStore('theme-set')
                store.set({ themes, theme: 'grayscale' })
                const result = store.get({ themes, theme: 'default' })
            `})],render:(e,{loaded:{storageKey:t}})=>s.jsx(f,{storageKey:t,themes:o,theme:"default"}),play:async({canvas:e})=>{await n(e.getByTestId("store-get-result")).toHaveTextContent("theme: grayscale"),await n(e.getByTestId("store-get-result")).toHaveTextContent("value: text-gray-100")}};function R({storageKey:e,themes:t,theme:l}){const[w,S]=x.useState(void 0);return x.useEffect(()=>{const E=r(e).subscribe({themes:t,theme:l,handler:S});return()=>E.disconnect()},[e,l,t]),s.jsx(T,{title:"store.subscribe() handler","data-testid":"store-subscribe-result",result:w})}const g={tags:["use-case"],parameters:a({description:{story:"store.subscribe() calls the handler once with the current theme and when the storage key changes in another tab."}}),loaders:[()=>(r(_).set({themes:o,theme:"grayscale"}),{storageKey:_})],decorators:[h(),c({source:m`
                const store = localStorageThemeStore('theme-observe')
                const observer = store.subscribe({
                    themes: { default: 'text-white', grayscale: 'text-gray-100' },
                    theme: 'default',
                    handler: (result) => console.log('Theme:', result?.theme, result?.value),
                })
                observer.disconnect()
            `})],render:(e,{loaded:{storageKey:t}})=>s.jsx(R,{storageKey:t,themes:o,theme:"default"}),play:async({canvas:e})=>{await n(e.getByTestId("store-subscribe-result")).toHaveTextContent("theme: grayscale")}},p={name:"same key returns cached store",tags:["use-case"],parameters:a({description:{story:"Calling localStorageThemeStore with the same key returns the same store instance."}}),loaders:[()=>{const e=r("cs-theme-cache"),t=r("cs-theme-cache");return{sameReference:e===t}}],decorators:[h({content:s.jsxs("p",{children:["Two calls with the same ",s.jsx("code",{children:"storageKey"})," return the same store (cached by key)."]})}),c({source:m`
                const store1 = localStorageThemeStore('app-theme')
                const store2 = localStorageThemeStore('app-theme')
                store1 === store2
            `})],render:(e,{loaded:{sameReference:t}})=>s.jsx(T,{title:"Same store reference",result:{theme:t?"true":"false",value:String(t)}}),play:async({loaded:{sameReference:e}})=>{await n(e).toBe(!0)}},y={tags:["source"],parameters:a({source:{code:C}}),decorators:[c()]};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  tags: ['use-case'],
  parameters: defineDocsParam({
    description: {
      story: 'Create a store with a storage key, set a theme, then get and display the result.'
    }
  }),
  decorators: [withStoryCard(), showSource({
    source: dedent\`
                const store = localStorageThemeStore('app-theme')
                store.set({ themes: { default: 'text-white', grayscale: 'text-gray-100' }, theme: 'default' })
                const result = store.get({ themes, theme: 'default' })
            \`
  })],
  loaders: [() => {
    const store = localStorageThemeStore<typeof themes>(STORAGE_KEY_BASIC);
    store.set({
      themes,
      theme: 'default'
    });
    return {
      storageKey: STORAGE_KEY_BASIC
    };
  }],
  render: (_, {
    loaded: {
      storageKey
    }
  }) => {
    return <StoreGetDemo storageKey={storageKey} themes={themes} theme="default" />;
  },
  play: async ({
    canvas
  }) => {
    await expect(canvas.getByTestId('store-get-result')).toHaveTextContent('theme: default');
    await expect(canvas.getByTestId('store-get-result')).toHaveTextContent('value: text-white');
  }
}`,...d.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  name: 'get: with default theme',
  tags: ['use-case', 'props'],
  parameters: defineDocsParam({
    description: {
      story: 'When nothing is stored at the key, store.get() returns the default theme from options.'
    }
  }),
  loaders: [() => {
    const store = localStorageThemeStore<typeof themes>(STORAGE_KEY_GET);
    store.set({
      themes,
      theme: null
    });
    return {
      storageKey: STORAGE_KEY_GET
    };
  }],
  decorators: [withStoryCard({
    content: <p>
                    <code>store.get(&#123; themes, theme: &#39;grayscale&#39; &#125;)</code> returns grayscale
                    when storage is empty.
                </p>
  }), showSource({
    source: dedent\`
                const store = localStorageThemeStore('theme-get')
                const result = store.get({
                    themes: { default: 'text-white', grayscale: 'text-gray-100' },
                    theme: 'grayscale',
                })
            \`
  })],
  render: (_, {
    loaded: {
      storageKey
    }
  }) => {
    return <StoreGetDemo storageKey={storageKey} themes={themes} theme="grayscale" />;
  },
  play: async ({
    canvas
  }) => {
    await expect(canvas.getByTestId('store-get-result')).toHaveTextContent('theme: grayscale');
    await expect(canvas.getByTestId('store-get-result')).toHaveTextContent('value: text-gray-100');
  }
}`,...i.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  name: 'set then get',
  tags: ['use-case'],
  loaders: [() => {
    const store = localStorageThemeStore<typeof themes>(STORAGE_KEY_SET);
    store.set({
      themes,
      theme: 'grayscale'
    });
    return {
      storageKey: STORAGE_KEY_SET
    };
  }],
  decorators: [withStoryCard({
    content: <p>
                    <code>store.set()</code> persists the theme; <code>store.get()</code> reads it back.
                </p>
  }), showSource({
    source: dedent\`
                const store = localStorageThemeStore('theme-set')
                store.set({ themes, theme: 'grayscale' })
                const result = store.get({ themes, theme: 'default' })
            \`
  })],
  render: (_, {
    loaded: {
      storageKey
    }
  }) => {
    return <StoreGetDemo storageKey={storageKey} themes={themes} theme="default" />;
  },
  play: async ({
    canvas
  }) => {
    await expect(canvas.getByTestId('store-get-result')).toHaveTextContent('theme: grayscale');
    await expect(canvas.getByTestId('store-get-result')).toHaveTextContent('value: text-gray-100');
  }
}`,...u.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  tags: ['use-case'],
  parameters: defineDocsParam({
    description: {
      story: 'store.subscribe() calls the handler once with the current theme and when the storage key changes in another tab.'
    }
  }),
  loaders: [() => {
    const store = localStorageThemeStore<typeof themes>(STORAGE_KEY_SUBSCRIBE);
    store.set({
      themes,
      theme: 'grayscale'
    });
    return {
      storageKey: STORAGE_KEY_SUBSCRIBE
    };
  }],
  decorators: [withStoryCard(), showSource({
    source: dedent\`
                const store = localStorageThemeStore('theme-observe')
                const observer = store.subscribe({
                    themes: { default: 'text-white', grayscale: 'text-gray-100' },
                    theme: 'default',
                    handler: (result) => console.log('Theme:', result?.theme, result?.value),
                })
                observer.disconnect()
            \`
  })],
  render: (_, {
    loaded: {
      storageKey
    }
  }) => {
    return <StoreSubscribeDemo storageKey={storageKey} themes={themes} theme="default" />;
  },
  play: async ({
    canvas
  }) => {
    await expect(canvas.getByTestId('store-subscribe-result')).toHaveTextContent('theme: grayscale');
  }
}`,...g.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  name: 'same key returns cached store',
  tags: ['use-case'],
  parameters: defineDocsParam({
    description: {
      story: 'Calling localStorageThemeStore with the same key returns the same store instance.'
    }
  }),
  loaders: [() => {
    const store1 = localStorageThemeStore<typeof themes>('cs-theme-cache');
    const store2 = localStorageThemeStore<typeof themes>('cs-theme-cache');
    return {
      sameReference: store1 === store2
    };
  }],
  decorators: [withStoryCard({
    content: <p>
                    Two calls with the same <code>storageKey</code> return the same store (cached by key).
                </p>
  }), showSource({
    source: dedent\`
                const store1 = localStorageThemeStore('app-theme')
                const store2 = localStorageThemeStore('app-theme')
                store1 === store2
            \`
  })],
  render: (_, {
    loaded: {
      sameReference
    }
  }) => {
    return <ThemeResultCard title="Same store reference" result={{
      theme: sameReference ? 'true' : 'false',
      value: String(sameReference)
    }} />;
  },
  play: async ({
    loaded: {
      sameReference
    }
  }) => {
    await expect(sameReference).toBe(true);
  }
}`,...p.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  tags: ['source'],
  parameters: defineDocsParam({
    source: {
      code: source
    }
  }),
  decorators: [showSource()]
}`,...y.parameters?.docs?.source}}};const H=["BasicUsage","GetWithDefault","SetThenGet","Subscribe","SameKeyReturnsCachedStore","Source"];export{d as BasicUsage,i as GetWithDefault,p as SameKeyReturnsCachedStore,u as SetThenGet,y as Source,g as Subscribe,H as __namedExportsOrder,L as default};
