import{j as t,d as o,w as l,s as m,r as b}from"./iframe-Pea2t46H.js";import{d as h}from"./dedent-BuYMbVyj.js";import{c as r}from"./class-name-theme-store-IC1hzE--.js";import{T as y}from"./theme-result-card-D84vDB1y.js";import"./preload-helper-PPVm8Dsz.js";import"./observe-attribute-DJMrXwPX.js";import"./findKey-D_Zca1Sl.js";import"./append-id-Vsg144gU.js";const x=`import { findKey } from 'type-plus'
import { observeAttributes } from '../attributes/observe-attribute.ts'
import type { ThemeMap } from './theme.types.ts'

export type ClassNameThemeStoreGetOptions<Themes extends ThemeMap> = {
	themes: Themes
	defaultTheme?: keyof Themes | undefined
}

export type ClassNameThemeStoreSetOptions<Themes extends ThemeMap> = {
	themes: Themes
	theme: keyof Themes
}

export type ClassNameThemeStoreSubscribeOptions<Themes extends ThemeMap> = {
	themes: Themes
	defaultTheme?: (keyof Themes | (string & {})) | undefined
	handler: (value: string | undefined) => void
}

export type ClassNameThemeStore<Themes extends ThemeMap> = {
	get(options: ClassNameThemeStoreGetOptions<Themes>): keyof Themes | undefined
	set(options: ClassNameThemeStoreSetOptions<Themes>): void
	subscribe(options: ClassNameThemeStoreSubscribeOptions<Themes>): { disconnect: () => void }
}

function classNameThemeStoreForElement<Themes extends ThemeMap>(
	element: Element,
): ClassNameThemeStore<Themes> {
	function get(options: ClassNameThemeStoreGetOptions<Themes>): keyof Themes | undefined {
		const className = element.className
		const theme = findKey(options.themes, (theme) => {
			const value: string | readonly string[] | undefined = options.themes[theme]
			if (value === undefined) return false
			const v = Array.isArray(value) ? value[0] : value
			return !!v && className.includes(v)
		})
		return theme ?? options.defaultTheme
	}

	function set(options: ClassNameThemeStoreSetOptions<Themes>): void {
		const theme = options.theme
		if (!theme) return

		const allThemeClasses = Object.values(options.themes).flatMap((v) =>
			Array.isArray(v) ? [...v] : [v],
		)
		const current = element.className.trim()
		const currentClasses = current ? current.split(/\\s+/) : []
		const withoutThemes = currentClasses.filter((c) => !allThemeClasses.includes(c))
		const activeClasses =
			theme in options.themes
				? Array.isArray(options.themes[theme])
					? [...(options.themes[theme] as readonly string[])]
					: [options.themes[theme] as string]
				: []
		element.className = [...withoutThemes, ...activeClasses].filter(Boolean).join(' ')
	}

	function subscribe(options: ClassNameThemeStoreSubscribeOptions<Themes>): {
		disconnect: () => void
	} {
		const observer = observeAttributes(
			{
				class: (value: string | null) => {
					if (value === null) {
						options.handler(options.defaultTheme as string | undefined)
						return
					}
					for (const name in options.themes) {
						const themeValue = options.themes[name]
						if (
							themeValue &&
							value.includes(Array.isArray(themeValue) ? themeValue[0] : themeValue)
						) {
							options.handler(name)
							return
						}
					}
					options.handler(options.defaultTheme as string | undefined)
				},
			},
			element,
		)
		return {
			disconnect: () => observer.disconnect(),
		}
	}

	return { get, set, subscribe }
}

const storeCache = new WeakMap<Element, ClassNameThemeStore<any>>()

/**
 * Theme store that reads and writes theme via element class names.
 *
 * The returned store provides \`get\`, \`set\`, and \`subscribe\` that operate on the
 * given element (or document.documentElement when omitted). Callers pass \`themes\`
 * and optional \`defaultTheme\` / \`theme\` when calling get/set/subscribe.
 *
 * @param element - Element to read/write class names on (defaults to document.documentElement)
 * @returns A store object with get, set, and subscribe
 *
 * @example
 * \`\`\`ts
 * const store = classNameThemeStore()
 * const theme = store.get({ themes: { light: 'theme-light', dark: 'theme-dark' }, defaultTheme: 'light' })
 * store.set({ themes, theme: 'dark' })
 * const observer = store.subscribe({ themes, defaultTheme: 'light', handler: (t) => console.log(t) })
 * observer.disconnect()
 * \`\`\`
 */
export function classNameThemeStore<Themes extends ThemeMap>(
	element?: Element | null | undefined,
): ClassNameThemeStore<Themes> {
	const el = element ?? (typeof document !== 'undefined' ? document.documentElement : null)
	if (!el) {
		return {
			get: () => undefined,
			set: () => {},
			subscribe: () => ({ disconnect: () => {} }),
		}
	}
	let store = storeCache.get(el)
	if (store) return store
	store = classNameThemeStoreForElement<Themes>(el)
	storeCache.set(el, store)
	return store
}
`,{expect:n,waitFor:w}=__STORYBOOK_MODULE_TEST__,A={title:"theme/classNameThemeStore",tags:["func","version:next"],parameters:o({description:{component:"Theme store that reads and writes theme via element class names. The store provides get, set, and subscribe for the given element (or document.documentElement when omitted)."}}),render:()=>t.jsx(t.Fragment,{})},a={default:"text-white",grayscale:"text-gray-100"};function S({themes:e,defaultTheme:s}){const c=r().get({themes:e,defaultTheme:s});return t.jsx(y,{title:"store.get() result","data-testid":"store-get-result",result:c!==void 0?{theme:c,value:e[c]}:void 0})}const d={tags:["use-case"],parameters:o({description:{story:"Create a store (default element), set a theme, then get and display the result."}}),decorators:[l(),m({source:h`
                const store = classNameThemeStore()
                store.set({ themes: { default: 'text-white', grayscale: 'text-gray-100' }, theme: 'default' })
                const theme = store.get({ themes, defaultTheme: 'default' })
            `})],loaders:[()=>(r().set({themes:a,theme:"default"}),{})],render:()=>t.jsx(S,{themes:a,defaultTheme:"default"}),play:async({canvas:e})=>{await n(e.getByTestId("store-get-result")).toHaveTextContent("theme: default"),await n(e.getByTestId("store-get-result")).toHaveTextContent("value: text-white")}},i={name:"get: with default theme",tags:["use-case","props"],parameters:o({description:{story:"When no matching class is on the element, store.get() returns the default theme from options."}}),loaders:[()=>{const e=document.documentElement;return e.className=e.className.replace(/\btext-white\b/,"").replace(/\btext-gray-100\b/,"").replace(/\s+/g," ").trim(),{}}],decorators:[l({content:t.jsxs("p",{children:[t.jsx("code",{children:"store.get({ themes, defaultTheme: 'grayscale' })"})," returns grayscale when no theme class is present."]})}),m({source:h`
                const store = classNameThemeStore()
                const theme = store.get({
                    themes: { default: 'text-white', grayscale: 'text-gray-100' },
                    defaultTheme: 'grayscale',
                })
            `})],render:()=>t.jsx(S,{themes:a,defaultTheme:"grayscale"}),play:async({canvas:e})=>{await n(e.getByTestId("store-get-result")).toHaveTextContent("theme: grayscale"),await n(e.getByTestId("store-get-result")).toHaveTextContent("value: text-gray-100")}},p={name:"set then get",tags:["use-case"],loaders:[()=>(r().set({themes:a,theme:"grayscale"}),{})],decorators:[l({content:t.jsxs("p",{children:[t.jsx("code",{children:"store.set()"})," applies theme classes; ",t.jsx("code",{children:"store.get()"})," reads the current theme."]})}),m({source:h`
                const store = classNameThemeStore()
                store.set({ themes, theme: 'grayscale' })
                const theme = store.get({ themes, defaultTheme: 'default' })
            `})],render:()=>t.jsx(S,{themes:a,defaultTheme:"default"}),play:async({canvas:e})=>{await n(e.getByTestId("store-get-result")).toHaveTextContent("theme: grayscale"),await n(e.getByTestId("store-get-result")).toHaveTextContent("value: text-gray-100")}};function C({themes:e,defaultTheme:s}){const[u,c]=b.useState(void 0);return b.useEffect(()=>{const v=r().subscribe({themes:e,defaultTheme:s,handler:c});return()=>v.disconnect()},[s,e]),t.jsx(y,{title:"store.subscribe() handler","data-testid":"store-subscribe-result",result:u!==void 0?{theme:u,value:e[u]}:void 0})}const g={tags:["use-case"],parameters:o({description:{story:"store.subscribe() calls the handler once with the current theme and when the class attribute changes."}}),decorators:[l(),m({source:h`
                const store = classNameThemeStore()
                const observer = store.subscribe({
                    themes: { default: 'text-white', grayscale: 'text-gray-100' },
                    defaultTheme: 'default',
                    handler: (theme) => console.log('Theme:', theme),
                })
                observer.disconnect()
            `})],render:()=>t.jsx(C,{themes:a,defaultTheme:"default"}),play:async({canvas:e})=>{r().set({themes:a,theme:"grayscale"}),await w(()=>n(e.getByTestId("store-subscribe-result-theme")).toHaveTextContent("grayscale")),await n(e.getByTestId("store-subscribe-result-value")).toHaveTextContent("text-gray-100")}},T={name:"same element returns cached store",tags:["use-case"],parameters:o({description:{story:"Calling classNameThemeStore with the same element (or both undefined for documentElement) returns the same store instance."}}),loaders:[()=>{const e=r(),s=r();return{sameReference:e===s}}],decorators:[l({content:t.jsx("p",{children:"Two calls with the same element return the same store (cached by element)."})}),m({source:h`
                const store1 = classNameThemeStore()
                const store2 = classNameThemeStore()
                store1 === store2
            `})],render:(e,{loaded:{sameReference:s}})=>t.jsx(y,{title:"Same store reference",result:{theme:s?"true":"false",value:String(s)}}),play:async({loaded:{sameReference:e}})=>{await n(e).toBe(!0)}},f={tags:["source"],parameters:o({source:{code:x}}),decorators:[m()]};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  tags: ['use-case'],
  parameters: defineDocsParam({
    description: {
      story: 'Create a store (default element), set a theme, then get and display the result.'
    }
  }),
  decorators: [withStoryCard(), showSource({
    source: dedent\`
                const store = classNameThemeStore()
                store.set({ themes: { default: 'text-white', grayscale: 'text-gray-100' }, theme: 'default' })
                const theme = store.get({ themes, defaultTheme: 'default' })
            \`
  })],
  loaders: [() => {
    const store = classNameThemeStore<typeof themes>();
    store.set({
      themes,
      theme: 'default'
    });
    return {};
  }],
  render: () => {
    return <StoreGetDemo themes={themes} defaultTheme="default" />;
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
      story: 'When no matching class is on the element, store.get() returns the default theme from options.'
    }
  }),
  loaders: [() => {
    const el = document.documentElement;
    el.className = el.className.replace(/\\btext-white\\b/, '').replace(/\\btext-gray-100\\b/, '').replace(/\\s+/g, ' ').trim();
    return {};
  }],
  decorators: [withStoryCard({
    content: <p>
                    <code>store.get(&#123; themes, defaultTheme: &#39;grayscale&#39; &#125;)</code> returns
                    grayscale when no theme class is present.
                </p>
  }), showSource({
    source: dedent\`
                const store = classNameThemeStore()
                const theme = store.get({
                    themes: { default: 'text-white', grayscale: 'text-gray-100' },
                    defaultTheme: 'grayscale',
                })
            \`
  })],
  render: () => {
    return <StoreGetDemo themes={themes} defaultTheme="grayscale" />;
  },
  play: async ({
    canvas
  }) => {
    await expect(canvas.getByTestId('store-get-result')).toHaveTextContent('theme: grayscale');
    await expect(canvas.getByTestId('store-get-result')).toHaveTextContent('value: text-gray-100');
  }
}`,...i.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  name: 'set then get',
  tags: ['use-case'],
  loaders: [() => {
    const store = classNameThemeStore<typeof themes>();
    store.set({
      themes,
      theme: 'grayscale'
    });
    return {};
  }],
  decorators: [withStoryCard({
    content: <p>
                    <code>store.set()</code> applies theme classes; <code>store.get()</code> reads the current
                    theme.
                </p>
  }), showSource({
    source: dedent\`
                const store = classNameThemeStore()
                store.set({ themes, theme: 'grayscale' })
                const theme = store.get({ themes, defaultTheme: 'default' })
            \`
  })],
  render: () => {
    return <StoreGetDemo themes={themes} defaultTheme="default" />;
  },
  play: async ({
    canvas
  }) => {
    await expect(canvas.getByTestId('store-get-result')).toHaveTextContent('theme: grayscale');
    await expect(canvas.getByTestId('store-get-result')).toHaveTextContent('value: text-gray-100');
  }
}`,...p.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  tags: ['use-case'],
  parameters: defineDocsParam({
    description: {
      story: 'store.subscribe() calls the handler once with the current theme and when the class attribute changes.'
    }
  }),
  decorators: [withStoryCard(), showSource({
    source: dedent\`
                const store = classNameThemeStore()
                const observer = store.subscribe({
                    themes: { default: 'text-white', grayscale: 'text-gray-100' },
                    defaultTheme: 'default',
                    handler: (theme) => console.log('Theme:', theme),
                })
                observer.disconnect()
            \`
  })],
  render: () => {
    return <StoreSubscribeDemo themes={themes} defaultTheme="default" />;
  },
  play: async ({
    canvas
  }) => {
    const store = classNameThemeStore<typeof themes>();
    store.set({
      themes,
      theme: 'grayscale'
    });
    await waitFor(() => expect(canvas.getByTestId('store-subscribe-result-theme')).toHaveTextContent('grayscale'));
    await expect(canvas.getByTestId('store-subscribe-result-value')).toHaveTextContent('text-gray-100');
  }
}`,...g.parameters?.docs?.source}}};T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  name: 'same element returns cached store',
  tags: ['use-case'],
  parameters: defineDocsParam({
    description: {
      story: 'Calling classNameThemeStore with the same element (or both undefined for documentElement) returns the same store instance.'
    }
  }),
  loaders: [() => {
    const store1 = classNameThemeStore<typeof themes>();
    const store2 = classNameThemeStore<typeof themes>();
    return {
      sameReference: store1 === store2
    };
  }],
  decorators: [withStoryCard({
    content: <p>Two calls with the same element return the same store (cached by element).</p>
  }), showSource({
    source: dedent\`
                const store1 = classNameThemeStore()
                const store2 = classNameThemeStore()
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
}`,...T.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  tags: ['source'],
  parameters: defineDocsParam({
    source: {
      code: source
    }
  }),
  decorators: [showSource()]
}`,...f.parameters?.docs?.source}}};const G=["BasicUsage","GetWithDefault","SetThenGet","Subscribe","SameElementReturnsCachedStore","Source"];export{d as BasicUsage,i as GetWithDefault,T as SameElementReturnsCachedStore,p as SetThenGet,f as Source,g as Subscribe,G as __namedExportsOrder,A as default};
