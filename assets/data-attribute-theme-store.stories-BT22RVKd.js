import{j as r,d as i,w as c,s as d,r as x}from"./iframe-DpiIn1Pa.js";import{d as h}from"./dedent-BuYMbVyj.js";import{d as o}from"./data-attribute-theme-store-Zjn-v2eS.js";import{T as S}from"./theme-result-card-BTwZPLOd.js";import"./preload-helper-PPVm8Dsz.js";import"./get-data-attribute-Bl9c_7h4.js";import"./get-attribute-BI4biMNS.js";import"./observe-attribute-DJMrXwPX.js";import"./findKey-BZZwGHNT.js";import"./append-id-Vsg144gU.js";const A=`import { findKey } from 'type-plus'
import { getDataAttribute } from '../attributes/get-data-attribute.ts'
import { observeDataAttributes } from '../attributes/observe-data-attribute.ts'
import type { ThemeMap } from './theme.types.ts'

export type DataAttributeThemeStoreGetOptions<Themes extends ThemeMap> = {
	themes: Themes
	defaultTheme?: keyof Themes | undefined
	allowCustom?: boolean | undefined
}

export type DataAttributeThemeStoreSetOptions<Themes extends ThemeMap> = {
	themes: Themes
	theme: keyof Themes
}

export type DataAttributeThemeStoreSubscribeOptions<Themes extends ThemeMap> = {
	themes: Themes
	defaultTheme?: string | undefined
	allowCustom?: true | undefined
	handler: (value: string | null) => void
}

export type DataAttributeThemeStore<Themes extends ThemeMap> = {
	get(options: DataAttributeThemeStoreGetOptions<Themes>): keyof Themes | string | undefined
	set(options: DataAttributeThemeStoreSetOptions<Themes>): void
	subscribe(options: DataAttributeThemeStoreSubscribeOptions<Themes>): { disconnect: () => void }
}

function dataAttributeThemeStoreForElement<Themes extends ThemeMap>(
	attributeName: \`data-\${string}\`,
	element: Element,
): DataAttributeThemeStore<Themes> {
	function get(
		options: DataAttributeThemeStoreGetOptions<Themes>,
	): keyof Themes | string | undefined {
		const value = getDataAttribute(attributeName, element) ?? undefined
		const theme = findKey(options.themes, (theme) => options.themes[theme] === value)
		return theme ?? options.defaultTheme ?? (options.allowCustom ? value : undefined)
	}

	function set(options: DataAttributeThemeStoreSetOptions<Themes>): void {
		const theme = options.theme
		if (!theme || !(theme in options.themes)) {
			element.removeAttribute(attributeName)
			return
		}
		const value = options.themes[theme]
		const attributeValue = Array.isArray(value) ? value[0] : value
		if (attributeValue !== undefined && attributeValue !== '') {
			element.setAttribute(attributeName, attributeValue)
		} else {
			element.removeAttribute(attributeName)
		}
	}

	function subscribe(options: DataAttributeThemeStoreSubscribeOptions<Themes>): {
		disconnect: () => void
	} {
		const observer = observeDataAttributes(
			{
				[attributeName]: (value: string | null) => {
					if (value === null) {
						options.handler(options.defaultTheme ?? null)
						return
					}
					for (const name in options.themes) {
						if (options.themes[name] === value) {
							options.handler(name)
							return
						}
					}
					if (options.allowCustom) {
						options.handler(value)
					}
				},
			} as Record<\`data-\${string}\`, (value: string | null) => void>,
			element,
		)
		return {
			disconnect: () => observer.disconnect(),
		}
	}

	return { get, set, subscribe }
}

const defaultStores = new Map<string, DataAttributeThemeStore<any>>()
const elementStores = new WeakMap<Element, Map<string, DataAttributeThemeStore<any>>>()

/**
 * Theme store that reads and writes theme via a data attribute on an element.
 *
 * The returned store provides \`get\`, \`set\`, and \`subscribe\` for the given
 * attribute name and element (or document.documentElement when element is omitted).
 *
 * @param attributeName - Data attribute name (e.g. \`'data-theme'\`)
 * @param element - Element to read/write (defaults to document.documentElement)
 * @returns A store object with get, set, and subscribe
 *
 * @example
 * \`\`\`ts
 * const store = dataAttributeThemeStore('data-theme')
 * const theme = store.get({ themes: { light: 'light', dark: 'dark' }, defaultTheme: 'light' })
 * store.set({ themes, theme: 'dark' })
 * const observer = store.subscribe({ themes, defaultTheme: 'light', handler: (t) => console.log(t) })
 * observer.disconnect()
 * \`\`\`
 */
export function dataAttributeThemeStore<Themes extends ThemeMap>(
	attributeName: \`data-\${string}\`,
	element?: Element | null | undefined,
): DataAttributeThemeStore<Themes> {
	const el = element ?? (typeof document !== 'undefined' ? document.documentElement : null)
	if (!el) {
		return {
			get: () => undefined,
			set: () => {},
			subscribe: () => ({ disconnect: () => {} }),
		}
	}
	if (element == null) {
		let store = defaultStores.get(attributeName)
		if (store) return store
		store = dataAttributeThemeStoreForElement<Themes>(attributeName, el)
		defaultStores.set(attributeName, store)
		return store
	}
	let byAttr = elementStores.get(el)
	if (!byAttr) {
		byAttr = new Map()
		elementStores.set(el, byAttr)
	}
	let store = byAttr.get(attributeName)
	if (store) return store
	store = dataAttributeThemeStoreForElement<Themes>(attributeName, el)
	byAttr.set(attributeName, store)
	return store
}
`,{expect:n,waitFor:N}=__STORYBOOK_MODULE_TEST__,O={title:"theme/dataAttributeThemeStore",tags:["func","version:next"],parameters:i({description:{component:"Theme store that reads and writes theme via a data attribute on an element. The store provides get, set, and subscribe for the given attribute name and element."}}),render:()=>r.jsx(r.Fragment,{})},m={default:"text-white",grayscale:"text-gray-100"},a="data-theme-cs";function v({attributeName:e,themes:t,defaultTheme:l}){const s=o(e).get({themes:t,defaultTheme:l});return r.jsx(S,{title:"store.get() result","data-testid":"store-get-result",result:s!==void 0?{theme:String(s),value:s in t?t[s]:String(s)}:void 0})}const b={tags:["use-case"],parameters:i({description:{story:"Create a store with an attribute name, set a theme, then get and display the result."}}),decorators:[c(),d({source:h`
                const store = dataAttributeThemeStore('data-theme')
                store.set({ themes: { default: 'text-white', grayscale: 'text-gray-100' }, theme: 'default' })
                const theme = store.get({ themes, defaultTheme: 'default' })
            `})],loaders:[()=>(o(a).set({themes:m,theme:"default"}),{attributeName:a})],render:(e,{loaded:{attributeName:t}})=>r.jsx(v,{attributeName:t,themes:m,defaultTheme:"default"}),play:async({canvas:e})=>{await n(e.getByTestId("store-get-result")).toHaveTextContent("theme: default"),await n(e.getByTestId("store-get-result")).toHaveTextContent("value: text-white")}},p={name:"get: with default theme",tags:["use-case","props"],parameters:i({description:{story:"When the attribute is missing or does not match a theme, store.get() returns the default theme from options."}}),loaders:[()=>(document.documentElement.removeAttribute(a),{attributeName:a})],decorators:[c({content:r.jsxs("p",{children:[r.jsx("code",{children:"store.get({ themes, defaultTheme: 'grayscale' })"})," returns grayscale when the attribute is not set."]})}),d({source:h`
                const store = dataAttributeThemeStore('data-theme')
                const theme = store.get({
                    themes: { default: 'text-white', grayscale: 'text-gray-100' },
                    defaultTheme: 'grayscale',
                })
            `})],render:(e,{loaded:{attributeName:t}})=>r.jsx(v,{attributeName:t,themes:m,defaultTheme:"grayscale"}),play:async({canvas:e})=>{await n(e.getByTestId("store-get-result")).toHaveTextContent("theme: grayscale"),await n(e.getByTestId("store-get-result")).toHaveTextContent("value: text-gray-100")}},T={name:"set then get",tags:["use-case"],loaders:[()=>(o(a).set({themes:m,theme:"grayscale"}),{attributeName:a})],decorators:[c({content:r.jsxs("p",{children:[r.jsx("code",{children:"store.set()"})," writes the attribute; ",r.jsx("code",{children:"store.get()"})," reads it back."]})}),d({source:h`
                const store = dataAttributeThemeStore('data-theme')
                store.set({ themes, theme: 'grayscale' })
                const theme = store.get({ themes, defaultTheme: 'default' })
            `})],render:(e,{loaded:{attributeName:t}})=>r.jsx(v,{attributeName:t,themes:m,defaultTheme:"default"}),play:async({canvas:e})=>{await n(e.getByTestId("store-get-result")).toHaveTextContent("theme: grayscale"),await n(e.getByTestId("store-get-result")).toHaveTextContent("value: text-gray-100")}};function C({attributeName:e,themes:t,defaultTheme:l}){const[u,s]=x.useState(void 0);return x.useEffect(()=>{const w=o(e).subscribe({themes:t,defaultTheme:l,handler:s});return()=>w.disconnect()},[e,l,t]),r.jsx(S,{title:"store.subscribe() handler","data-testid":"store-subscribe-result",result:u!=null?{theme:u,value:u in t?t[u]:u}:void 0})}const g={tags:["use-case"],parameters:i({description:{story:"store.subscribe() calls the handler once with the current theme and when the attribute changes."}}),loaders:[()=>({attributeName:a})],decorators:[c(),d({source:h`
                const store = dataAttributeThemeStore('data-theme')
                const observer = store.subscribe({
                    themes: { default: 'text-white', grayscale: 'text-gray-100' },
                    defaultTheme: 'default',
                    handler: (theme) => console.log('Theme:', theme),
                })
                observer.disconnect()
            `})],render:(e,{loaded:{attributeName:t}})=>r.jsx(C,{attributeName:t,themes:m,defaultTheme:"default"}),play:async({canvas:e})=>{o(a).set({themes:m,theme:"grayscale"}),await N(()=>n(e.getByTestId("store-subscribe-result-theme")).toHaveTextContent("grayscale")),await n(e.getByTestId("store-subscribe-result-value")).toHaveTextContent("text-gray-100")}},f={name:"same attribute returns cached store",tags:["use-case"],parameters:i({description:{story:"Calling dataAttributeThemeStore with the same attribute name (and no element) returns the same store instance."}}),loaders:[()=>{const e=o("data-theme-cache"),t=o("data-theme-cache");return{sameReference:e===t}}],decorators:[c({content:r.jsxs("p",{children:["Two calls with the same ",r.jsx("code",{children:"attributeName"})," (and default element) return the same store."]})}),d({source:h`
                const store1 = dataAttributeThemeStore('data-theme')
                const store2 = dataAttributeThemeStore('data-theme')
                store1 === store2
            `})],render:(e,{loaded:{sameReference:t}})=>r.jsx(S,{title:"Same store reference",result:{theme:t?"true":"false",value:String(t)}}),play:async({loaded:{sameReference:e}})=>{await n(e).toBe(!0)}},y={tags:["source"],parameters:i({source:{code:A}}),decorators:[d()]};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  tags: ['use-case'],
  parameters: defineDocsParam({
    description: {
      story: 'Create a store with an attribute name, set a theme, then get and display the result.'
    }
  }),
  decorators: [withStoryCard(), showSource({
    source: dedent\`
                const store = dataAttributeThemeStore('data-theme')
                store.set({ themes: { default: 'text-white', grayscale: 'text-gray-100' }, theme: 'default' })
                const theme = store.get({ themes, defaultTheme: 'default' })
            \`
  })],
  loaders: [() => {
    const store = dataAttributeThemeStore<typeof themes>(ATTR);
    store.set({
      themes,
      theme: 'default'
    });
    return {
      attributeName: ATTR
    };
  }],
  render: (_, {
    loaded: {
      attributeName
    }
  }) => {
    return <StoreGetDemo attributeName={attributeName} themes={themes} defaultTheme="default" />;
  },
  play: async ({
    canvas
  }) => {
    await expect(canvas.getByTestId('store-get-result')).toHaveTextContent('theme: default');
    await expect(canvas.getByTestId('store-get-result')).toHaveTextContent('value: text-white');
  }
}`,...b.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  name: 'get: with default theme',
  tags: ['use-case', 'props'],
  parameters: defineDocsParam({
    description: {
      story: 'When the attribute is missing or does not match a theme, store.get() returns the default theme from options.'
    }
  }),
  loaders: [() => {
    document.documentElement.removeAttribute(ATTR);
    return {
      attributeName: ATTR
    };
  }],
  decorators: [withStoryCard({
    content: <p>
                    <code>store.get(&#123; themes, defaultTheme: &#39;grayscale&#39; &#125;)</code> returns
                    grayscale when the attribute is not set.
                </p>
  }), showSource({
    source: dedent\`
                const store = dataAttributeThemeStore('data-theme')
                const theme = store.get({
                    themes: { default: 'text-white', grayscale: 'text-gray-100' },
                    defaultTheme: 'grayscale',
                })
            \`
  })],
  render: (_, {
    loaded: {
      attributeName
    }
  }) => {
    return <StoreGetDemo attributeName={attributeName} themes={themes} defaultTheme="grayscale" />;
  },
  play: async ({
    canvas
  }) => {
    await expect(canvas.getByTestId('store-get-result')).toHaveTextContent('theme: grayscale');
    await expect(canvas.getByTestId('store-get-result')).toHaveTextContent('value: text-gray-100');
  }
}`,...p.parameters?.docs?.source}}};T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  name: 'set then get',
  tags: ['use-case'],
  loaders: [() => {
    const store = dataAttributeThemeStore<typeof themes>(ATTR);
    store.set({
      themes,
      theme: 'grayscale'
    });
    return {
      attributeName: ATTR
    };
  }],
  decorators: [withStoryCard({
    content: <p>
                    <code>store.set()</code> writes the attribute; <code>store.get()</code> reads it back.
                </p>
  }), showSource({
    source: dedent\`
                const store = dataAttributeThemeStore('data-theme')
                store.set({ themes, theme: 'grayscale' })
                const theme = store.get({ themes, defaultTheme: 'default' })
            \`
  })],
  render: (_, {
    loaded: {
      attributeName
    }
  }) => {
    return <StoreGetDemo attributeName={attributeName} themes={themes} defaultTheme="default" />;
  },
  play: async ({
    canvas
  }) => {
    await expect(canvas.getByTestId('store-get-result')).toHaveTextContent('theme: grayscale');
    await expect(canvas.getByTestId('store-get-result')).toHaveTextContent('value: text-gray-100');
  }
}`,...T.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  tags: ['use-case'],
  parameters: defineDocsParam({
    description: {
      story: 'store.subscribe() calls the handler once with the current theme and when the attribute changes.'
    }
  }),
  loaders: [() => {
    return {
      attributeName: ATTR
    };
  }],
  decorators: [withStoryCard(), showSource({
    source: dedent\`
                const store = dataAttributeThemeStore('data-theme')
                const observer = store.subscribe({
                    themes: { default: 'text-white', grayscale: 'text-gray-100' },
                    defaultTheme: 'default',
                    handler: (theme) => console.log('Theme:', theme),
                })
                observer.disconnect()
            \`
  })],
  render: (_, {
    loaded: {
      attributeName
    }
  }) => {
    return <StoreSubscribeDemo attributeName={attributeName} themes={themes} defaultTheme="default" />;
  },
  play: async ({
    canvas
  }) => {
    const store = dataAttributeThemeStore<typeof themes>(ATTR);
    store.set({
      themes,
      theme: 'grayscale'
    });
    await waitFor(() => expect(canvas.getByTestId('store-subscribe-result-theme')).toHaveTextContent('grayscale'));
    await expect(canvas.getByTestId('store-subscribe-result-value')).toHaveTextContent('text-gray-100');
  }
}`,...g.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  name: 'same attribute returns cached store',
  tags: ['use-case'],
  parameters: defineDocsParam({
    description: {
      story: 'Calling dataAttributeThemeStore with the same attribute name (and no element) returns the same store instance.'
    }
  }),
  loaders: [() => {
    const store1 = dataAttributeThemeStore<typeof themes>('data-theme-cache');
    const store2 = dataAttributeThemeStore<typeof themes>('data-theme-cache');
    return {
      sameReference: store1 === store2
    };
  }],
  decorators: [withStoryCard({
    content: <p>
                    Two calls with the same <code>attributeName</code> (and default element) return the same
                    store.
                </p>
  }), showSource({
    source: dedent\`
                const store1 = dataAttributeThemeStore('data-theme')
                const store2 = dataAttributeThemeStore('data-theme')
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
}`,...f.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  tags: ['source'],
  parameters: defineDocsParam({
    source: {
      code: source
    }
  }),
  decorators: [showSource()]
}`,...y.parameters?.docs?.source}}};const F=["BasicUsage","GetWithDefault","SetThenGet","Subscribe","SameAttributeReturnsCachedStore","Source"];export{b as BasicUsage,p as GetWithDefault,f as SameAttributeReturnsCachedStore,T as SetThenGet,y as Source,g as Subscribe,F as __namedExportsOrder,O as default};
