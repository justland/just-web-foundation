import{j as t,d as l,w as h,s as m,S as M,r as u}from"./iframe-D_6mvhRd.js";import{d as g}from"./dedent-BuYMbVyj.js";import{t as i}from"./theme-entry-D4S_RAMB.js";import{d as W}from"./resolve-theme-map-value-6BKppRxh.js";import{p as F}from"./parse-stored-theme-CqNOdFO7.js";import{B as w}from"./button-BvxDy0Ld.js";import{T as p}from"./theme-result-card-rXyXLGwz.js";import{T as J}from"./theme-store-demo-DiN5wMI7.js";import"./preload-helper-PPVm8Dsz.js";import"./resolve-class-name-1fsVhyj2.js";import"./append-id-Vsg144gU.js";function d(e,s){const{storageKey:a,parse:o=F}=s;if(typeof window>"u"||!window.sessionStorage)return W;const T=new Set;let x=S()?.theme??void 0;function S(){const y=window.sessionStorage.getItem(a);return o(e,y??void 0)}function E(){const y=S(),f=y?.theme??void 0;if(f!==x){x=f;for(const K of T)K(y)}}return{read:S,write(y){try{y===void 0?window.sessionStorage.removeItem(a):window.sessionStorage.setItem(a,JSON.stringify(y)),E()}catch{}},subscribe(y){T.add(y);const f=K=>{K.key===a&&K.storageArea===window.sessionStorage&&E()};return window.addEventListener("storage",f),()=>{T.delete(y),window.removeEventListener("storage",f)}}}}const L=`import { dummyThemeStore } from '../../../testing/theme/dummy-theme-store.ts'
import { parseStoredTheme } from '../../_utils/parse-stored-theme.ts'
import type { ParseStoredTheme, ThemeEntry } from '../../theme-entry.types.ts'
import type { ThemeMap } from '../../theme-map.types.ts'
import type { ThemeStore } from '../theme-store.types.ts'

/**
 * Creates a theme store backed by sessionStorage.
 *
 * Persists per tab; cross-tab sync via StorageEvent when available.
 * Same-tab writes trigger manual notify (StorageEvent does not fire for same tab).
 *
 * @param themes - Record mapping theme keys to values (for validation)
 * @param options.storageKey - sessionStorage key
 * @param options.parse - Optional custom parser for stored string (default: parseStoredTheme)
 * @returns ThemeStore
 *
 * @example
 * \`\`\`ts
 * const themes = { current: 'theme-current', grayscale: 'theme-grayscale' }
 * const store = sessionStorageThemeStore(themes, { storageKey: 'theme' })
 * store.read() // returns themeResult from sessionStorage
 * store.write(themeEntry(themes, 'grayscale'))
 * store.subscribe((themeResult) => {})
 * \`\`\`
 */
export function sessionStorageThemeStore<Themes extends ThemeMap>(
	themes: Themes,
	options: { storageKey: string; parse?: ParseStoredTheme<Themes> | undefined }
) {
	const { storageKey, parse = parseStoredTheme } = options

	if (typeof window === 'undefined' || !window.sessionStorage) {
		return dummyThemeStore satisfies ThemeStore<Themes>
	}

	const handlers = new Set<(theme: ThemeEntry<Themes> | undefined) => void>()
	let lastNotifiedKey: keyof Themes | undefined = read()?.theme ?? undefined

	function read() {
		const stored = window.sessionStorage.getItem(storageKey)
		return parse(themes, stored ?? undefined)
	}

	function notify() {
		const result = read()
		const key = result?.theme ?? undefined
		if (key === lastNotifiedKey) return
		lastNotifiedKey = key
		for (const h of handlers) h(result)
	}

	return {
		read,
		write(entry) {
			try {
				if (entry === undefined) {
					window.sessionStorage.removeItem(storageKey)
				} else {
					window.sessionStorage.setItem(storageKey, JSON.stringify(entry))
				}
				notify()
			} catch {
				// Ignore quota or other errors
			}
		},
		subscribe(handler) {
			handlers.add(handler)

			const onStorage = (e: StorageEvent) => {
				if (e.key === storageKey && e.storageArea === window.sessionStorage) notify()
			}
			window.addEventListener('storage', onStorage)

			return () => {
				handlers.delete(handler)
				window.removeEventListener('storage', onStorage)
			}
		}
	} satisfies ThemeStore<Themes>
}
`,{expect:n,userEvent:v,waitFor:b}=__STORYBOOK_MODULE_TEST__,ae={title:"theme/theme-store/sessionStorageThemeStore",tags:["func","version:1.0"],parameters:l({description:{component:"Theme store backed by sessionStorage. Persists per tab. Bakes themes at creation."}}),render:()=>t.jsx(t.Fragment,{})},r={current:"theme-current",next:"theme-next",grayscale:"theme-grayscale","high-contrast":"theme-high-contrast"},c="theme-ss-demo",I={tags:["playground"],parameters:l({description:{story:"Interactive demo: Read theme, write themes via buttons, and observe subscribe updates."}}),decorators:[h(),m({source:g`
                const store = sessionStorageThemeStore(themes, { storageKey: 'app-theme' })
                <ThemeStoreDemo2 store={store} themes={themes} />
            `})],loaders:[()=>(window.sessionStorage.removeItem(c),{})],render:()=>{const e=d(r,{storageKey:c});return t.jsx(J,{store:e,themes:r})},play:async({canvas:e})=>{await v.click(e.getByTestId("theme-store-demo-btn-write-grayscale")),await b(()=>n(e.getByTestId("theme-store-demo-observe")).toHaveTextContent("grayscale")),await n(e.getByTestId("theme-store-demo-observe")).toHaveTextContent("theme-grayscale")}},D="theme-ss-parse";function U(e,s){let a;try{a=s?JSON.parse(s):void 0}catch{return}if(!a?.theme||typeof a.theme!="string"||!(a.theme in e))return;const o=a.theme;return{theme:o,value:e[o]}}const C={name:"options.parse",tags:["props","use-case"],decorators:[h({content:t.jsxs(t.Fragment,{children:[t.jsxs("p",{children:["The ",t.jsx("code",{children:"options.parse"})," allows you to provide a custom parse function to parse the stored value to a specific structure you wanted. Use it when migrating from legacy formats, supporting custom serialization, or relaxing validation."]}),t.jsxs("p",{children:["The example below pre-seeds the sessionStorage with legacy format"," ",t.jsx("code",{children:'{ theme: "grayscale" }'})," (no value)."]})]})}),m({source:g`
                const customParse = (themes, value) => {
                    const parsed = JSON.parse(value || '{}')
                    if (!parsed?.theme || !(parsed.theme in themes)) return undefined
                    return { theme: parsed.theme, value: themes[parsed.theme] }
                }
                const store = sessionStorageThemeStore(themes, { storageKey: 'theme', parse: customParse })
            `})],loaders:[()=>(window.sessionStorage.setItem(D,JSON.stringify({theme:"grayscale"})),{})],render:()=>{const s=d(r,{storageKey:D,parse:U}).read();return t.jsx("div",{className:"flex flex-col gap-4",children:t.jsx(p,{title:"store.read() with custom parse","data-testid":"store-read-result",result:s??{theme:"grayscale",value:r.grayscale}})})},play:async({canvas:e})=>{await n(e.getByTestId("store-read-result")).toHaveTextContent("theme: grayscale"),await n(e.getByTestId("store-read-result")).toHaveTextContent("value: theme-grayscale")}},B={name:"options.storageKey",tags:["use-case","props"],decorators:[h({content:t.jsxs("p",{children:["Pass ",t.jsx("code",{children:"options.storageKey"})," to determine the sessionStorage key used for persistence per tab."]})}),m({source:g`
                const store = sessionStorageThemeStore(themes, { storageKey: 'app-theme' })
            `})],loaders:[()=>(d(r,{storageKey:c}).write(i(r,"current")),{})],render:()=>{const s=d(r,{storageKey:c}).read();return t.jsxs("div",{className:"flex flex-col gap-4",children:[t.jsx(M,{title:"sessionStorage key",appearance:"output",children:t.jsx("code",{children:c})}),t.jsx(p,{title:"store.read() result","data-testid":"store-read-result",result:s??{theme:"current",value:r.current}})]})},play:async({canvas:e})=>{await n(e.getByTestId("store-read-result")).toHaveTextContent("theme: current"),await n(e.getByTestId("store-read-result")).toHaveTextContent("value: theme-current")}},Y="theme-ss-thememap",R={name:"themes: string value",tags:["use-case","props"],parameters:l({description:{story:"themes values can be a single string per theme."}}),decorators:[h({content:t.jsx("p",{children:"Each theme maps to one string value."})}),m({source:g`
                const themes = {
                    current: 'theme-current',
                    grayscale: 'theme-grayscale',
                    'high-contrast': 'theme-high-contrast'
                } as const

                const store = sessionStorageThemeStore(themes, { storageKey: 'theme' })
            `})],loaders:[()=>{window.sessionStorage.removeItem(Y);const e=d(r,{storageKey:Y});return e.write(i(r,"current")),{store:e}}],render:(e,{loaded:{store:s}})=>{const a=s.read();return t.jsx("div",{className:"flex flex-col gap-4",children:t.jsx(p,{title:"store.read() result","data-testid":"store-read-result",result:a??{theme:"current",value:r.current}})})},play:async({canvas:e})=>{await n(e.getByTestId("store-read-result")).toHaveTextContent("theme: current"),await n(e.getByTestId("store-read-result")).toHaveTextContent("value: theme-current")}},G={current:"theme-current",grayscale:["theme-grayscale","app:bg-gray-100"],"high-contrast":"theme-high-contrast"},O={name:"themes: array values",tags:["use-case","props"],parameters:l({description:{story:"themes values can be string[]. Stored and retrieved value is the full array."}}),decorators:[h({content:t.jsxs("p",{children:["Each theme can map to ",t.jsx("code",{children:"string[]"}),". ",t.jsx("code",{children:"ThemeResult.value"})," persists the full array."]})}),m({source:g`
                const themes = {
                    current: 'theme-current',
                    grayscale: ['theme-grayscale', 'app:bg-gray-100'],
                    'high-contrast': 'theme-high-contrast'
                } as const

                const store = sessionStorageThemeStore(themes, { storageKey: 'theme' })
            `})],loaders:[()=>{window.sessionStorage.removeItem(Y);const e=d(G,{storageKey:Y});return e.write(i(G,"grayscale")),{store:e}}],render:(e,{loaded:{store:s}})=>{const a=s.read();return t.jsx("div",{className:"flex flex-col gap-4",children:t.jsx(p,{title:"store.read() result","data-testid":"store-read-result",result:a??{theme:"grayscale",value:G.grayscale}})})},play:async({canvas:e})=>{await n(e.getByTestId("store-read-result")).toHaveTextContent("theme: grayscale"),await n(e.getByTestId("store-read-result")).toHaveTextContent("value: [theme-grayscale, app:bg-gray-100]")}},j={name:"read",tags:["props"],parameters:l({description:{story:"store.read() reads the current theme from sessionStorage."}}),decorators:[h(),m({source:g`
                const store = sessionStorageThemeStore(themes, { storageKey: 'theme' })
                const result = store.read()
            `})],loaders:[()=>(d(r,{storageKey:c}).write(i(r,"grayscale")),{})],render:()=>{const s=d(r,{storageKey:c}).read();return t.jsx(p,{title:"store.read() result","data-testid":"store-read-result",result:s??{theme:"grayscale",value:r.grayscale}})},play:async({canvas:e})=>{await n(e.getByTestId("store-read-result")).toHaveTextContent("theme: grayscale"),await n(e.getByTestId("store-read-result")).toHaveTextContent("value: theme-grayscale")}},H={name:"read: undefined",tags:["props"],parameters:l({description:{story:"When nothing is stored at the key, store.read() returns undefined."}}),decorators:[h(),m({source:g`
                const store = sessionStorageThemeStore(themes, { storageKey: 'theme-get' })
                const theme = store.read() // undefined when empty
            `})],loaders:[()=>(window.sessionStorage.removeItem(c),{})],render:()=>{const s=d(r,{storageKey:c}).read();return t.jsx(p,{title:"store.read() result","data-testid":"store-read-result",result:s!==void 0?s:{theme:void 0,value:void 0}})},play:async({canvas:e})=>{await n(e.getByTestId("store-read-result")).toHaveTextContent("(undefined)")}},P={name:"write",tags:["props"],parameters:l({description:{story:"store.write() persists the theme to sessionStorage (per tab)."}}),decorators:[h(),m({source:g`
                const store = sessionStorageThemeStore(themes, { storageKey: 'theme' })
                store.write(themeEntry(themes, 'high-contrast'))
            `})],loaders:[()=>(window.sessionStorage.removeItem(c),{})],render:()=>{const e=d(r,{storageKey:c}),[s,a]=u.useState(()=>e.read()?.theme??null);return t.jsxs("div",{className:"flex flex-col gap-4",children:[t.jsx("div",{className:"flex flex-wrap gap-2",children:Object.keys(r).map(o=>t.jsxs(w,{"data-testid":`write-${o}`,onPress:()=>{e.write(i(r,o)),a(o)},children:["write(",o,")"]},o))}),t.jsx(p,{title:"store.read() after write","data-testid":"store-write-result",result:s?{theme:s,value:r[s]}:{theme:"current",value:r.current}})]})},play:async({canvas:e})=>{await v.click(e.getByTestId("write-grayscale")),await n(e.getByTestId("store-write-result")).toHaveTextContent("theme: grayscale"),await n(e.getByTestId("store-write-result")).toHaveTextContent("value: theme-grayscale")}},_={name:"subscribe",tags:["props"],parameters:l({description:{story:"store.subscribe() calls the handler when storage changes in same tab (no initial notify)."}}),decorators:[h(),m({source:g`
                const store = sessionStorageThemeStore(themes, { storageKey: 'theme' })
                return store.subscribe((themeResult) => {
                    console.log('Theme:', themeResult?.theme, themeResult?.value)
                })
            `})],loaders:[()=>(d(r,{storageKey:c}).write(i(r,"grayscale")),{})],render:()=>{const e=u.useMemo(()=>d(r,{storageKey:c}),[]),[s,a]=u.useState(void 0);u.useEffect(()=>e.subscribe(a),[e]);const o=s?.theme??"current";return t.jsxs("div",{className:"flex flex-col gap-4",children:[t.jsxs("div",{className:"flex flex-wrap gap-2",children:[t.jsx(w,{"data-testid":"write-high-contrast",onPress:()=>e.write(i(r,"high-contrast")),children:"write('high-contrast')"}),t.jsx(w,{"data-testid":"write-current",onPress:()=>e.write(i(r,"current")),children:"write('current')"})]}),t.jsx(p,{title:"store.subscribe() receives","data-testid":"store-subscribe-result",result:i(r,o)})]})},play:async({canvas:e})=>{await v.click(e.getByTestId("write-high-contrast")),await b(()=>n(e.getByTestId("store-subscribe-result")).toHaveTextContent("high-contrast")),await v.click(e.getByTestId("write-current")),await b(()=>n(e.getByTestId("store-subscribe-result")).toHaveTextContent("current"))}},A={name:"subscribe: only when themeEntry changes",tags:["props"],parameters:l({description:{story:"The handler is only invoked when the resolved themeEntry changes. Writing the same theme again does not trigger the handler."}}),decorators:[h(),m({source:g`
                const store = sessionStorageThemeStore(themes, { storageKey: 'theme' })
                store.subscribe((entry) => {
                    invocationCount++
                    setObserved(entry)
                })
                store.write(themeEntry(themes, 'grayscale')) // handler runs
                store.write(themeEntry(themes, 'grayscale')) // handler NOT run (same theme)
            `})],loaders:[()=>(window.sessionStorage.removeItem(c),{})],render:()=>{const e=u.useMemo(()=>d(r,{storageKey:c}),[]),[s,a]=u.useState(0),[o,T]=u.useState(null);u.useEffect(()=>e.subscribe(S=>{a(E=>E+1),T(S)}),[e]);const x=o?.theme??"(none)";return t.jsxs("div",{className:"flex flex-col gap-4","data-testid":"subscribe-only-when-theme-changes",children:[t.jsx(M,{title:"Handler invocations",appearance:"output",children:t.jsx("pre",{"data-testid":"invocation-count",className:"font-mono",children:s})}),t.jsx(M,{title:"Observed theme",appearance:"output",children:t.jsx("pre",{"data-testid":"observed-theme",className:"font-mono",children:x})}),t.jsxs("div",{className:"flex flex-wrap gap-2",children:[t.jsx(w,{"data-testid":"write-grayscale-twice",onPress:()=>{e.write(i(r,"grayscale")),e.write(i(r,"grayscale"))},children:"write(grayscale) twice"}),t.jsx(w,{"data-testid":"write-high-contrast",onPress:()=>e.write(i(r,"high-contrast")),children:"write(high-contrast)"})]})]})},play:async({canvas:e})=>{await n(e.getByTestId("invocation-count")).toHaveTextContent("0"),await v.click(e.getByTestId("write-grayscale-twice")),await b(()=>n(e.getByTestId("invocation-count")).toHaveTextContent("1")),await n(e.getByTestId("observed-theme")).toHaveTextContent("grayscale")}},N={name:"subscribe: unsubscribe",tags:["props"],parameters:l({description:{story:"After calling the function returned by subscribe(), further write() calls do not invoke the handler."}}),decorators:[h(),m({source:g`
                const store = sessionStorageThemeStore(themes, { storageKey: 'theme' })
                const unsubscribe = store.subscribe((theme) => console.log(theme))
                store.write(themeEntry(themes, 'grayscale'))
                unsubscribe()
                store.write(themeEntry(themes, 'current')) // handler not called
            `})],loaders:[()=>(window.sessionStorage.removeItem(c),{})],render:()=>{const e=u.useMemo(()=>d(r,{storageKey:c}),[]),[s,a]=u.useState(void 0),o=u.useRef(null);u.useEffect(()=>{if(!o.current)return o.current=e.subscribe(a),()=>{o.current?.(),o.current=null}},[e]);const T=s?.theme??"current";return t.jsxs("div",{className:"flex flex-col gap-4",children:[t.jsxs("div",{className:"flex flex-wrap gap-2",children:[t.jsx(w,{"data-testid":"write-grayscale",onPress:()=>e.write(i(r,"grayscale")),children:"write('grayscale')"}),t.jsx(w,{"data-testid":"write-current",onPress:()=>e.write(i(r,"current")),children:"write('current')"}),t.jsx(w,{"data-testid":"unsubscribe",onPress:()=>{o.current?.(),o.current=null},children:"unsubscribe()"})]}),t.jsx(p,{title:"store.subscribe() receives (frozen after unsubscribe)","data-testid":"store-subscribe-result",result:i(r,T)})]})},play:async({canvas:e})=>{await v.click(e.getByTestId("write-grayscale")),await b(()=>n(e.getByTestId("store-subscribe-result")).toHaveTextContent("grayscale")),await v.click(e.getByTestId("unsubscribe")),await v.click(e.getByTestId("write-current")),await n(e.getByTestId("store-subscribe-result")).toHaveTextContent("grayscale")}},k={tags:["source"],parameters:l({source:{code:L}}),decorators:[m()]};I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
  tags: ['playground'],
  parameters: defineDocsParam({
    description: {
      story: 'Interactive demo: Read theme, write themes via buttons, and observe subscribe updates.'
    }
  }),
  decorators: [withStoryCard(), showSource({
    source: dedent\`
                const store = sessionStorageThemeStore(themes, { storageKey: 'app-theme' })
                <ThemeStoreDemo2 store={store} themes={themes} />
            \`
  })],
  loaders: [() => {
    window.sessionStorage.removeItem(STORAGE_KEY);
    return {};
  }],
  render: () => {
    const store = sessionStorageThemeStore(themes, {
      storageKey: STORAGE_KEY
    });
    return <ThemeStoreDemo store={store} themes={themes} />;
  },
  play: async ({
    canvas
  }) => {
    await userEvent.click(canvas.getByTestId('theme-store-demo-btn-write-grayscale'));
    await waitFor(() => expect(canvas.getByTestId('theme-store-demo-observe')).toHaveTextContent('grayscale'));
    await expect(canvas.getByTestId('theme-store-demo-observe')).toHaveTextContent('theme-grayscale');
  }
}`,...I.parameters?.docs?.source}}};C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  name: 'options.parse',
  tags: ['props', 'use-case'],
  decorators: [withStoryCard({
    content: <>
                    <p>
                        The <code>options.parse</code> allows you to provide a custom parse function to parse
                        the stored value to a specific structure you wanted. Use it when migrating from legacy
                        formats, supporting custom serialization, or relaxing validation.
                    </p>
                    <p>
                        The example below pre-seeds the sessionStorage with legacy format{' '}
                        <code>{\`{ theme: "grayscale" }\`}</code> (no value).
                    </p>
                </>
  }), showSource({
    source: dedent\`
                const customParse = (themes, value) => {
                    const parsed = JSON.parse(value || '{}')
                    if (!parsed?.theme || !(parsed.theme in themes)) return undefined
                    return { theme: parsed.theme, value: themes[parsed.theme] }
                }
                const store = sessionStorageThemeStore(themes, { storageKey: 'theme', parse: customParse })
            \`
  })],
  loaders: [() => {
    window.sessionStorage.setItem(STORAGE_KEY_PARSE, JSON.stringify({
      theme: 'grayscale'
    }));
    return {};
  }],
  render: () => {
    const store = sessionStorageThemeStore(themes, {
      storageKey: STORAGE_KEY_PARSE,
      parse: customParseLegacy
    });
    const result = store.read();
    return <div className="flex flex-col gap-4">
                <ThemeResultCard title="store.read() with custom parse" data-testid="store-read-result" result={result ?? {
        theme: 'grayscale',
        value: themes.grayscale
      }} />
            </div>;
  },
  play: async ({
    canvas
  }) => {
    await expect(canvas.getByTestId('store-read-result')).toHaveTextContent('theme: grayscale');
    await expect(canvas.getByTestId('store-read-result')).toHaveTextContent('value: theme-grayscale');
  }
}`,...C.parameters?.docs?.source}}};B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
  name: 'options.storageKey',
  tags: ['use-case', 'props'],
  decorators: [withStoryCard({
    content: <p>
                    Pass <code>options.storageKey</code> to determine the sessionStorage key used for
                    persistence per tab.
                </p>
  }), showSource({
    source: dedent\`
                const store = sessionStorageThemeStore(themes, { storageKey: 'app-theme' })
            \`
  })],
  loaders: [() => {
    const store = sessionStorageThemeStore(themes, {
      storageKey: STORAGE_KEY
    });
    store.write(themeEntry(themes, 'current'));
    return {};
  }],
  render: () => {
    const store = sessionStorageThemeStore(themes, {
      storageKey: STORAGE_KEY
    });
    const result = store.read();
    return <div className="flex flex-col gap-4">
                <StoryCard title="sessionStorage key" appearance="output">
                    <code>{STORAGE_KEY}</code>
                </StoryCard>
                <ThemeResultCard title="store.read() result" data-testid="store-read-result" result={result ?? {
        theme: 'current',
        value: themes.current
      }} />
            </div>;
  },
  play: async ({
    canvas
  }) => {
    await expect(canvas.getByTestId('store-read-result')).toHaveTextContent('theme: current');
    await expect(canvas.getByTestId('store-read-result')).toHaveTextContent('value: theme-current');
  }
}`,...B.parameters?.docs?.source}}};R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`{
  name: 'themes: string value',
  tags: ['use-case', 'props'],
  parameters: defineDocsParam({
    description: {
      story: 'themes values can be a single string per theme.'
    }
  }),
  decorators: [withStoryCard({
    content: <p>Each theme maps to one string value.</p>
  }), showSource({
    source: dedent\`
                const themes = {
                    current: 'theme-current',
                    grayscale: 'theme-grayscale',
                    'high-contrast': 'theme-high-contrast'
                } as const

                const store = sessionStorageThemeStore(themes, { storageKey: 'theme' })
            \`
  })],
  loaders: [() => {
    window.sessionStorage.removeItem(THEMEMAP_STORAGE_KEY);
    const store = sessionStorageThemeStore(themes, {
      storageKey: THEMEMAP_STORAGE_KEY
    });
    store.write(themeEntry(themes, 'current'));
    return {
      store
    };
  }],
  render: (_, {
    loaded: {
      store
    }
  }) => {
    const result = store.read();
    return <div className="flex flex-col gap-4">
                <ThemeResultCard title="store.read() result" data-testid="store-read-result" result={result ?? {
        theme: 'current',
        value: themes.current
      }} />
            </div>;
  },
  play: async ({
    canvas
  }) => {
    await expect(canvas.getByTestId('store-read-result')).toHaveTextContent('theme: current');
    await expect(canvas.getByTestId('store-read-result')).toHaveTextContent('value: theme-current');
  }
}`,...R.parameters?.docs?.source}}};O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  name: 'themes: array values',
  tags: ['use-case', 'props'],
  parameters: defineDocsParam({
    description: {
      story: 'themes values can be string[]. Stored and retrieved value is the full array.'
    }
  }),
  decorators: [withStoryCard({
    content: <p>
                    Each theme can map to <code>string[]</code>. <code>ThemeResult.value</code> persists the
                    full array.
                </p>
  }), showSource({
    source: dedent\`
                const themes = {
                    current: 'theme-current',
                    grayscale: ['theme-grayscale', 'app:bg-gray-100'],
                    'high-contrast': 'theme-high-contrast'
                } as const

                const store = sessionStorageThemeStore(themes, { storageKey: 'theme' })
            \`
  })],
  loaders: [() => {
    window.sessionStorage.removeItem(THEMEMAP_STORAGE_KEY);
    const store = sessionStorageThemeStore(themesArray, {
      storageKey: THEMEMAP_STORAGE_KEY
    });
    store.write(themeEntry(themesArray, 'grayscale'));
    return {
      store
    };
  }],
  render: (_, {
    loaded: {
      store
    }
  }) => {
    const result = store.read();
    return <div className="flex flex-col gap-4">
                <ThemeResultCard title="store.read() result" data-testid="store-read-result" result={result ?? {
        theme: 'grayscale',
        value: themesArray.grayscale
      }} />
            </div>;
  },
  play: async ({
    canvas
  }) => {
    await expect(canvas.getByTestId('store-read-result')).toHaveTextContent('theme: grayscale');
    await expect(canvas.getByTestId('store-read-result')).toHaveTextContent('value: [theme-grayscale, app:bg-gray-100]');
  }
}`,...O.parameters?.docs?.source}}};j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  name: 'read',
  tags: ['props'],
  parameters: defineDocsParam({
    description: {
      story: 'store.read() reads the current theme from sessionStorage.'
    }
  }),
  decorators: [withStoryCard(), showSource({
    source: dedent\`
                const store = sessionStorageThemeStore(themes, { storageKey: 'theme' })
                const result = store.read()
            \`
  })],
  loaders: [() => {
    const store = sessionStorageThemeStore(themes, {
      storageKey: STORAGE_KEY
    });
    store.write(themeEntry(themes, 'grayscale'));
    return {};
  }],
  render: () => {
    const store = sessionStorageThemeStore(themes, {
      storageKey: STORAGE_KEY
    });
    const result = store.read();
    return <ThemeResultCard title="store.read() result" data-testid="store-read-result" result={result ?? {
      theme: 'grayscale',
      value: themes.grayscale
    }} />;
  },
  play: async ({
    canvas
  }) => {
    await expect(canvas.getByTestId('store-read-result')).toHaveTextContent('theme: grayscale');
    await expect(canvas.getByTestId('store-read-result')).toHaveTextContent('value: theme-grayscale');
  }
}`,...j.parameters?.docs?.source}}};H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`{
  name: 'read: undefined',
  tags: ['props'],
  parameters: defineDocsParam({
    description: {
      story: 'When nothing is stored at the key, store.read() returns undefined.'
    }
  }),
  decorators: [withStoryCard(), showSource({
    source: dedent\`
                const store = sessionStorageThemeStore(themes, { storageKey: 'theme-get' })
                const theme = store.read() // undefined when empty
            \`
  })],
  loaders: [() => {
    window.sessionStorage.removeItem(STORAGE_KEY);
    return {};
  }],
  render: () => {
    const store = sessionStorageThemeStore(themes, {
      storageKey: STORAGE_KEY
    });
    const result = store.read();
    return <ThemeResultCard title="store.read() result" data-testid="store-read-result" result={result !== undefined ? result : {
      theme: undefined,
      value: undefined
    }} />;
  },
  play: async ({
    canvas
  }) => {
    await expect(canvas.getByTestId('store-read-result')).toHaveTextContent('(undefined)');
  }
}`,...H.parameters?.docs?.source}}};P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
  name: 'write',
  tags: ['props'],
  parameters: defineDocsParam({
    description: {
      story: 'store.write() persists the theme to sessionStorage (per tab).'
    }
  }),
  decorators: [withStoryCard(), showSource({
    source: dedent\`
                const store = sessionStorageThemeStore(themes, { storageKey: 'theme' })
                store.write(themeEntry(themes, 'high-contrast'))
            \`
  })],
  loaders: [() => {
    window.sessionStorage.removeItem(STORAGE_KEY);
    return {};
  }],
  render: () => {
    const store = sessionStorageThemeStore(themes, {
      storageKey: STORAGE_KEY
    });
    const [currentTheme, setCurrentTheme] = useState<ExampleTheme | null>(() => {
      const r = store.read();
      return r?.theme ?? null;
    });
    return <div className="flex flex-col gap-4">
                <div className="flex flex-wrap gap-2">
                    {(Object.keys(themes) as ExampleTheme[]).map(theme => <Button key={theme} data-testid={\`write-\${theme}\`} onPress={() => {
          store.write(themeEntry(themes, theme));
          setCurrentTheme(theme);
        }}>
                            write({theme})
                        </Button>)}
                </div>
                <ThemeResultCard title="store.read() after write" data-testid="store-write-result" result={currentTheme ? {
        theme: currentTheme,
        value: themes[currentTheme]
      } : {
        theme: 'current',
        value: themes.current
      }} />
            </div>;
  },
  play: async ({
    canvas
  }) => {
    await userEvent.click(canvas.getByTestId('write-grayscale'));
    await expect(canvas.getByTestId('store-write-result')).toHaveTextContent('theme: grayscale');
    await expect(canvas.getByTestId('store-write-result')).toHaveTextContent('value: theme-grayscale');
  }
}`,...P.parameters?.docs?.source}}};_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  name: 'subscribe',
  tags: ['props'],
  parameters: defineDocsParam({
    description: {
      story: 'store.subscribe() calls the handler when storage changes in same tab (no initial notify).'
    }
  }),
  decorators: [withStoryCard(), showSource({
    source: dedent\`
                const store = sessionStorageThemeStore(themes, { storageKey: 'theme' })
                return store.subscribe((themeResult) => {
                    console.log('Theme:', themeResult?.theme, themeResult?.value)
                })
            \`
  })],
  loaders: [() => {
    const store = sessionStorageThemeStore(themes, {
      storageKey: STORAGE_KEY
    });
    store.write(themeEntry(themes, 'grayscale'));
    return {};
  }],
  render: () => {
    const store = useMemo(() => sessionStorageThemeStore(themes, {
      storageKey: STORAGE_KEY
    }), []);
    const [result, setResult] = useState<ThemeEntry<typeof themes> | undefined | null>(undefined);
    useEffect(() => {
      return store.subscribe!(setResult);
    }, [store]);
    const displayTheme = result?.theme ?? 'current';
    return <div className="flex flex-col gap-4">
                <div className="flex flex-wrap gap-2">
                    <Button data-testid="write-high-contrast" onPress={() => store.write(themeEntry(themes, 'high-contrast'))}>
                        write('high-contrast')
                    </Button>
                    <Button data-testid="write-current" onPress={() => store.write(themeEntry(themes, 'current'))}>
                        write('current')
                    </Button>
                </div>
                <ThemeResultCard title="store.subscribe() receives" data-testid="store-subscribe-result" result={themeEntry(themes, displayTheme)} />
            </div>;
  },
  play: async ({
    canvas
  }) => {
    // Handler receives grayscale from loader, then we trigger multiple updates
    await userEvent.click(canvas.getByTestId('write-high-contrast'));
    await waitFor(() => expect(canvas.getByTestId('store-subscribe-result')).toHaveTextContent('high-contrast'));
    await userEvent.click(canvas.getByTestId('write-current'));
    await waitFor(() => expect(canvas.getByTestId('store-subscribe-result')).toHaveTextContent('current'));
  }
}`,..._.parameters?.docs?.source}}};A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  name: 'subscribe: only when themeEntry changes',
  tags: ['props'],
  parameters: defineDocsParam({
    description: {
      story: 'The handler is only invoked when the resolved themeEntry changes. Writing the same theme again does not trigger the handler.'
    }
  }),
  decorators: [withStoryCard(), showSource({
    source: dedent\`
                const store = sessionStorageThemeStore(themes, { storageKey: 'theme' })
                store.subscribe((entry) => {
                    invocationCount++
                    setObserved(entry)
                })
                store.write(themeEntry(themes, 'grayscale')) // handler runs
                store.write(themeEntry(themes, 'grayscale')) // handler NOT run (same theme)
            \`
  })],
  loaders: [() => {
    window.sessionStorage.removeItem(STORAGE_KEY);
    return {};
  }],
  render: () => {
    const store = useMemo(() => sessionStorageThemeStore(themes, {
      storageKey: STORAGE_KEY
    }), []);
    const [invocationCount, setInvocationCount] = useState(0);
    const [observed, setObserved] = useState<ThemeEntry<typeof themes> | undefined | null>(null);
    useEffect(() => {
      return store.subscribe!(entry => {
        setInvocationCount(c => c + 1);
        setObserved(entry);
      });
    }, [store]);
    const displayTheme = observed?.theme ?? '(none)';
    return <div className="flex flex-col gap-4" data-testid="subscribe-only-when-theme-changes">
                <StoryCard title="Handler invocations" appearance="output">
                    <pre data-testid="invocation-count" className="font-mono">
                        {invocationCount}
                    </pre>
                </StoryCard>
                <StoryCard title="Observed theme" appearance="output">
                    <pre data-testid="observed-theme" className="font-mono">
                        {displayTheme}
                    </pre>
                </StoryCard>
                <div className="flex flex-wrap gap-2">
                    <Button data-testid="write-grayscale-twice" onPress={() => {
          store.write(themeEntry(themes, 'grayscale'));
          store.write(themeEntry(themes, 'grayscale'));
        }}>
                        write(grayscale) twice
                    </Button>
                    <Button data-testid="write-high-contrast" onPress={() => store.write(themeEntry(themes, 'high-contrast'))}>
                        write(high-contrast)
                    </Button>
                </div>
            </div>;
  },
  play: async ({
    canvas
  }) => {
    // No initial notify - count starts at 0
    await expect(canvas.getByTestId('invocation-count')).toHaveTextContent('0');

    // write(grayscale) twice: first write notifies (count=1), second write should NOT notify (count stays 1)
    await userEvent.click(canvas.getByTestId('write-grayscale-twice'));
    await waitFor(() => expect(canvas.getByTestId('invocation-count')).toHaveTextContent('1'));
    await expect(canvas.getByTestId('observed-theme')).toHaveTextContent('grayscale');
  }
}`,...A.parameters?.docs?.source}}};N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
  name: 'subscribe: unsubscribe',
  tags: ['props'],
  parameters: defineDocsParam({
    description: {
      story: 'After calling the function returned by subscribe(), further write() calls do not invoke the handler.'
    }
  }),
  decorators: [withStoryCard(), showSource({
    source: dedent\`
                const store = sessionStorageThemeStore(themes, { storageKey: 'theme' })
                const unsubscribe = store.subscribe((theme) => console.log(theme))
                store.write(themeEntry(themes, 'grayscale'))
                unsubscribe()
                store.write(themeEntry(themes, 'current')) // handler not called
            \`
  })],
  loaders: [() => {
    window.sessionStorage.removeItem(STORAGE_KEY);
    return {};
  }],
  render: () => {
    const store = useMemo(() => sessionStorageThemeStore(themes, {
      storageKey: STORAGE_KEY
    }), []);
    const [result, setResult] = useState<ThemeEntry<typeof themes> | undefined | null>(undefined);
    const unsubRef = useRef<(() => void) | null>(null);
    useEffect(() => {
      if (unsubRef.current) return;
      unsubRef.current = store.subscribe!(setResult);
      return () => {
        unsubRef.current?.();
        unsubRef.current = null;
      };
    }, [store]);
    const displayTheme = result?.theme ?? 'current';
    return <div className="flex flex-col gap-4">
                <div className="flex flex-wrap gap-2">
                    <Button data-testid="write-grayscale" onPress={() => store.write(themeEntry(themes, 'grayscale'))}>
                        write('grayscale')
                    </Button>
                    <Button data-testid="write-current" onPress={() => store.write(themeEntry(themes, 'current'))}>
                        write('current')
                    </Button>
                    <Button data-testid="unsubscribe" onPress={() => {
          unsubRef.current?.();
          unsubRef.current = null;
        }}>
                        unsubscribe()
                    </Button>
                </div>
                <ThemeResultCard title="store.subscribe() receives (frozen after unsubscribe)" data-testid="store-subscribe-result" result={themeEntry(themes, displayTheme)} />
            </div>;
  },
  play: async ({
    canvas
  }) => {
    await userEvent.click(canvas.getByTestId('write-grayscale'));
    await waitFor(() => expect(canvas.getByTestId('store-subscribe-result')).toHaveTextContent('grayscale'));
    await userEvent.click(canvas.getByTestId('unsubscribe'));
    await userEvent.click(canvas.getByTestId('write-current'));
    // Display should stay grayscale because we unsubscribed before write('current')
    await expect(canvas.getByTestId('store-subscribe-result')).toHaveTextContent('grayscale');
  }
}`,...N.parameters?.docs?.source}}};k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  tags: ['source'],
  parameters: defineDocsParam({
    source: {
      code: source
    }
  }),
  decorators: [showSource()]
}`,...k.parameters?.docs?.source}}};const oe=["Playground","ParseOption","StorageKey","ThemeMapStringValue","ThemeMapArrayValues","Read","ReadWhenEmpty","WriteStory","Subscribe","SubscribeOnlyWhenThemeChanges","SubscribeUnsubscribe","Source"];export{C as ParseOption,I as Playground,j as Read,H as ReadWhenEmpty,k as Source,B as StorageKey,_ as Subscribe,A as SubscribeOnlyWhenThemeChanges,N as SubscribeUnsubscribe,O as ThemeMapArrayValues,R as ThemeMapStringValue,P as WriteStory,oe as __namedExportsOrder,ae as default};
