import{j as s,d as a,w as h,s as c,r as x}from"./iframe-DpiIn1Pa.js";import{d as m}from"./dedent-BuYMbVyj.js";import{s as n}from"./session-storage-theme-store-DVP72-Z9.js";import{T}from"./theme-result-card-BTwZPLOd.js";import"./preload-helper-PPVm8Dsz.js";import"./try-parse-json-BpEBnayC.js";import"./append-id-Vsg144gU.js";const C=`import { tryParseJSON } from '../_internal/utils/try-parse-json.ts'
import type { ThemeMap, ThemeResult, ThemeStorageOptions } from './theme.types.ts'

export type SessionStorageThemeStoreOptions<Themes extends ThemeMap> = Omit<
	ThemeStorageOptions<Themes>,
	'storageKey'
>

export type SessionStorageThemeStore<Themes extends ThemeMap> = {
	get(options: SessionStorageThemeStoreOptions<Themes>): ThemeResult<Themes>
	set(
		options: SessionStorageThemeStoreOptions<Themes> & {
			theme?: keyof Themes | null | undefined
		},
	): void
	subscribe(
		options: SessionStorageThemeStoreOptions<Themes> & {
			handler: (result: ThemeResult<Themes>) => void
		},
	): { disconnect: () => void }
}

/**
 * Theme store backed by sessionStorage for a fixed storage key.
 *
 * The returned store provides \`get\`, \`set\`, and \`subscribe\` that use the given
 * \`storageKey\`. Callers pass \`themes\` and optional \`theme\` (default) when calling
 * get/set/subscribe; the storage key is fixed at creation time.
 *
 * @param storageKey - sessionStorage key to read/write
 * @returns A store object with get, set, and subscribe
 *
 * @example
 * \`\`\`ts
 * const store = sessionStorageThemeStore('app-theme')
 * const result = store.get({ themes: { light: 'theme-light', dark: 'theme-dark' }, theme: 'light' })
 * store.set({ themes, theme: 'dark' })
 * const observer = store.subscribe({ themes, theme: 'light', handler: (r) => console.log(r) })
 * observer.disconnect()
 * \`\`\`
 */
const storeCache = new Map<string, SessionStorageThemeStore<ThemeMap>>()

export function sessionStorageThemeStore<Themes extends ThemeMap>(
	storageKey: string,
): SessionStorageThemeStore<Themes> {
	let store = storeCache.get(storageKey) as SessionStorageThemeStore<Themes> | undefined
	if (store) return store
	function get(options: SessionStorageThemeStoreOptions<Themes>): ThemeResult<Themes> {
		const defaultTheme = options.theme
			? {
					theme: options.theme,
					value: options.themes[options.theme],
				}
			: undefined
		if (!window?.sessionStorage) return defaultTheme

		try {
			const stored = window.sessionStorage.getItem(storageKey)
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
		options: SessionStorageThemeStoreOptions<Themes> & {
			theme?: keyof Themes | null | undefined
		},
	): void {
		if (!window?.sessionStorage) return

		try {
			if (options.theme == null || options.theme === '') {
				window.sessionStorage.removeItem(storageKey)
				return
			}

			window.sessionStorage.setItem(
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
		options: SessionStorageThemeStoreOptions<Themes> & {
			handler: (result: ThemeResult<Themes>) => void
		},
	): { disconnect: () => void } {
		const { handler, ...storageOptions } = options

		const notify = () => {
			handler(get(storageOptions))
		}

		if (typeof window === 'undefined' || !window.sessionStorage) {
			handler(get(storageOptions))
			return { disconnect: () => {} }
		}

		notify()

		const onStorage = (e: StorageEvent) => {
			if (e.key === storageKey && e.storageArea === window.sessionStorage) {
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
	storeCache.set(storageKey, store as unknown as SessionStorageThemeStore<ThemeMap>)
	return store
}
`,{expect:r}=__STORYBOOK_MODULE_TEST__,H={title:"theme/sessionStorageThemeStore",tags:["func","version:next"],parameters:a({description:{component:"Theme store backed by sessionStorage for a fixed storage key. The store provides get, set, and subscribe that use the given key. Callers pass themes and optional default theme when calling get/set/subscribe."}}),render:()=>s.jsx(s.Fragment,{})},o={default:"text-white",grayscale:"text-gray-100"},b="cs-ss-theme-basic",v="cs-ss-theme-get",K="cs-ss-theme-set",_="cs-ss-theme-subscribe";function f({storageKey:e,themes:t,theme:i}){const y=n(e).get({themes:t,theme:i});return s.jsx(T,{title:"store.get() result","data-testid":"store-get-result",result:y})}const d={tags:["use-case"],parameters:a({description:{story:"Create a store with a storage key, set a theme, then get and display the result."}}),decorators:[h(),c({source:m`
                const store = sessionStorageThemeStore('app-theme')
                store.set({ themes: { default: 'text-white', grayscale: 'text-gray-100' }, theme: 'default' })
                const result = store.get({ themes, theme: 'default' })
            `})],loaders:[()=>(n(b).set({themes:o,theme:"default"}),{storageKey:b})],render:(e,{loaded:{storageKey:t}})=>s.jsx(f,{storageKey:t,themes:o,theme:"default"}),play:async({canvas:e})=>{await r(e.getByTestId("store-get-result")).toHaveTextContent("theme: default"),await r(e.getByTestId("store-get-result")).toHaveTextContent("value: text-white")}},u={name:"get: with default theme",tags:["use-case","props"],parameters:a({description:{story:"When nothing is stored at the key, store.get() returns the default theme from options."}}),loaders:[()=>(n(v).set({themes:o,theme:null}),{storageKey:v})],decorators:[h({content:s.jsxs("p",{children:[s.jsx("code",{children:"store.get({ themes, theme: 'grayscale' })"})," returns grayscale when storage is empty."]})}),c({source:m`
                const store = sessionStorageThemeStore('theme-get')
                const result = store.get({
                    themes: { default: 'text-white', grayscale: 'text-gray-100' },
                    theme: 'grayscale',
                })
            `})],render:(e,{loaded:{storageKey:t}})=>s.jsx(f,{storageKey:t,themes:o,theme:"grayscale"}),play:async({canvas:e})=>{await r(e.getByTestId("store-get-result")).toHaveTextContent("theme: grayscale"),await r(e.getByTestId("store-get-result")).toHaveTextContent("value: text-gray-100")}},g={name:"set then get",tags:["use-case"],loaders:[()=>(n(K).set({themes:o,theme:"grayscale"}),{storageKey:K})],decorators:[h({content:s.jsxs("p",{children:[s.jsx("code",{children:"store.set()"})," persists the theme; ",s.jsx("code",{children:"store.get()"})," reads it back."]})}),c({source:m`
                const store = sessionStorageThemeStore('theme-set')
                store.set({ themes, theme: 'grayscale' })
                const result = store.get({ themes, theme: 'default' })
            `})],render:(e,{loaded:{storageKey:t}})=>s.jsx(f,{storageKey:t,themes:o,theme:"default"}),play:async({canvas:e})=>{await r(e.getByTestId("store-get-result")).toHaveTextContent("theme: grayscale"),await r(e.getByTestId("store-get-result")).toHaveTextContent("value: text-gray-100")}};function R({storageKey:e,themes:t,theme:i}){const[w,y]=x.useState(void 0);return x.useEffect(()=>{const E=n(e).subscribe({themes:t,theme:i,handler:y});return()=>E.disconnect()},[e,i,t]),s.jsx(T,{title:"store.subscribe() handler","data-testid":"store-subscribe-result",result:w})}const l={tags:["use-case"],parameters:a({description:{story:"store.subscribe() calls the handler once with the current theme and when the storage key changes in another tab."}}),loaders:[()=>(n(_).set({themes:o,theme:"grayscale"}),{storageKey:_})],decorators:[h(),c({source:m`
                const store = sessionStorageThemeStore('theme-observe')
                const observer = store.subscribe({
                    themes: { default: 'text-white', grayscale: 'text-gray-100' },
                    theme: 'default',
                    handler: (result) => console.log('Theme:', result?.theme, result?.value),
                })
                observer.disconnect()
            `})],render:(e,{loaded:{storageKey:t}})=>s.jsx(R,{storageKey:t,themes:o,theme:"default"}),play:async({canvas:e})=>{await r(e.getByTestId("store-subscribe-result")).toHaveTextContent("theme: grayscale")}},S={name:"same key returns cached store",tags:["use-case"],parameters:a({description:{story:"Calling sessionStorageThemeStore with the same key returns the same store instance."}}),loaders:[()=>{const e=n("cs-ss-theme-cache"),t=n("cs-ss-theme-cache");return{sameReference:e===t}}],decorators:[h({content:s.jsxs("p",{children:["Two calls with the same ",s.jsx("code",{children:"storageKey"})," return the same store (cached by key)."]})}),c({source:m`
                const store1 = sessionStorageThemeStore('app-theme')
                const store2 = sessionStorageThemeStore('app-theme')
                store1 === store2
            `})],render:(e,{loaded:{sameReference:t}})=>s.jsx(T,{title:"Same store reference",result:{theme:t?"true":"false",value:String(t)}}),play:async({loaded:{sameReference:e}})=>{await r(e).toBe(!0)}},p={tags:["source"],parameters:a({source:{code:C}}),decorators:[c()]};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  tags: ['use-case'],
  parameters: defineDocsParam({
    description: {
      story: 'Create a store with a storage key, set a theme, then get and display the result.'
    }
  }),
  decorators: [withStoryCard(), showSource({
    source: dedent\`
                const store = sessionStorageThemeStore('app-theme')
                store.set({ themes: { default: 'text-white', grayscale: 'text-gray-100' }, theme: 'default' })
                const result = store.get({ themes, theme: 'default' })
            \`
  })],
  loaders: [() => {
    const store = sessionStorageThemeStore<typeof themes>(STORAGE_KEY_BASIC);
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
}`,...d.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  name: 'get: with default theme',
  tags: ['use-case', 'props'],
  parameters: defineDocsParam({
    description: {
      story: 'When nothing is stored at the key, store.get() returns the default theme from options.'
    }
  }),
  loaders: [() => {
    const store = sessionStorageThemeStore<typeof themes>(STORAGE_KEY_GET);
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
                const store = sessionStorageThemeStore('theme-get')
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
}`,...u.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  name: 'set then get',
  tags: ['use-case'],
  loaders: [() => {
    const store = sessionStorageThemeStore<typeof themes>(STORAGE_KEY_SET);
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
                const store = sessionStorageThemeStore('theme-set')
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
}`,...g.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  tags: ['use-case'],
  parameters: defineDocsParam({
    description: {
      story: 'store.subscribe() calls the handler once with the current theme and when the storage key changes in another tab.'
    }
  }),
  loaders: [() => {
    const store = sessionStorageThemeStore<typeof themes>(STORAGE_KEY_SUBSCRIBE);
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
                const store = sessionStorageThemeStore('theme-observe')
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
}`,...l.parameters?.docs?.source}}};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  name: 'same key returns cached store',
  tags: ['use-case'],
  parameters: defineDocsParam({
    description: {
      story: 'Calling sessionStorageThemeStore with the same key returns the same store instance.'
    }
  }),
  loaders: [() => {
    const store1 = sessionStorageThemeStore<typeof themes>('cs-ss-theme-cache');
    const store2 = sessionStorageThemeStore<typeof themes>('cs-ss-theme-cache');
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
                const store1 = sessionStorageThemeStore('app-theme')
                const store2 = sessionStorageThemeStore('app-theme')
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
}`,...S.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  tags: ['source'],
  parameters: defineDocsParam({
    source: {
      code: source
    }
  }),
  decorators: [showSource()]
}`,...p.parameters?.docs?.source}}};const Y=["BasicUsage","GetWithDefault","SetThenGet","Subscribe","SameKeyReturnsCachedStore","Source"];export{d as BasicUsage,u as GetWithDefault,S as SameKeyReturnsCachedStore,g as SetThenGet,p as Source,l as Subscribe,Y as __namedExportsOrder,H as default};
