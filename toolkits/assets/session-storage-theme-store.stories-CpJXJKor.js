import{j as t,d as l,w as h,s as m,S as D,r as u}from"./iframe-BzC63Mz9.js";import{d as g}from"./dedent-BuYMbVyj.js";import{t as i}from"./theme-entry-D4S_RAMB.js";import{d as L}from"./dummy-theme-store-DcCfgetv.js";import{r as J,w as z}from"./write-session-storage-CmPsdO-d.js";import{B as p}from"./button-DUo1iKrE.js";import{T as y}from"./theme-result-card-Ou7vx_hj.js";import{T as U}from"./theme-store-demo-CFaskXn6.js";import"./preload-helper-PPVm8Dsz.js";import"./write-web-storage-H7mtIjJa.js";import"./parse-stored-theme-Dsx2RsUi.js";import"./resolve-theme-map-value-CsrxdXA7.js";import"./resolve-class-name-BPOFdAhp.js";import"./append-id-Vsg144gU.js";function d(e,s){const{storageKey:n,parse:a,stringify:S,onError:Y}=s;if(!window?.sessionStorage)return L;const T=new Set;let x=G()?.theme??void 0;function G(){return J(e,n,{parse:a})}function W(){const v=G(),f=v?.theme??void 0;if(f!==x){x=f;for(const E of T)E(v)}}return{read:G,write(v){z(e,n,v,{stringify:S,onError:Y}),W()},subscribe(v){T.add(v);const f=E=>{E.key===n&&E.storageArea===window.sessionStorage&&W()};return window.addEventListener("storage",f),()=>{T.delete(v),window.removeEventListener("storage",f)}}}}const V=`import { dummyThemeStore } from '../../../testing/theme/dummy-theme-store.ts'
import { readSessionStorage } from '../../session-storage/read-session-storage.ts'
import { writeSessionStorage } from '../../session-storage/write-session-storage.ts'
import type { ParseStoredTheme, StringifyStoredTheme, ThemeEntry } from '../../theme-entry.types.ts'
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
 * @param options.stringify - Optional custom serializer (default: JSON.stringify)
 * @param options.onError - Optional callback invoked when storage write throws
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
	options: {
		storageKey: string
		parse?: ParseStoredTheme<Themes> | undefined
		stringify?: StringifyStoredTheme<Themes> | undefined
		onError?: ((error: unknown) => void) | undefined
	}
) {
	const { storageKey, parse, stringify, onError } = options

	if (!window?.sessionStorage) {
		return dummyThemeStore satisfies ThemeStore<Themes>
	}

	const handlers = new Set<(theme: ThemeEntry<Themes> | undefined) => void>()
	let lastNotifiedKey: keyof Themes | undefined = read()?.theme ?? undefined

	function read() {
		return readSessionStorage(themes, storageKey, { parse })
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
			writeSessionStorage(themes, storageKey, entry, { stringify, onError })
			notify()
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
`,{expect:o,userEvent:w,waitFor:b}=__STORYBOOK_MODULE_TEST__,ue={title:"theme/theme-store/sessionStorageThemeStore",tags:["func","version:2.0"],parameters:l({description:{component:"Theme store backed by sessionStorage. Persists per tab. Bakes themes at creation."}}),render:()=>t.jsx(t.Fragment,{})},r={current:"theme-current",next:"theme-next",grayscale:"theme-grayscale","high-contrast":"theme-high-contrast"},c="theme-ss-demo",K={tags:["playground"],parameters:l({description:{story:"Interactive demo: Read theme, write themes via buttons, and observe subscribe updates."}}),decorators:[h(),m({source:g`
                const store = sessionStorageThemeStore(themes, { storageKey: 'app-theme' })
                <ThemeStoreDemo2 store={store} themes={themes} />
            `})],loaders:[()=>(window.sessionStorage.removeItem(c),{})],render:()=>{const e=d(r,{storageKey:c});return t.jsx(U,{store:e,themes:r})},play:async({canvas:e})=>{await w.click(e.getByTestId("theme-store-demo-btn-write-grayscale")),await b(()=>o(e.getByTestId("theme-store-demo-observe")).toHaveTextContent("grayscale")),await o(e.getByTestId("theme-store-demo-observe")).toHaveTextContent("theme-grayscale")}},F="theme-ss-parse";function $(e,s){let n;try{n=s?JSON.parse(s):void 0}catch{return}if(!n?.theme||typeof n.theme!="string"||!(n.theme in e))return;const a=n.theme;return{theme:a,value:e[a]}}const C={name:"options.parse",tags:["props","use-case"],decorators:[h({content:t.jsxs(t.Fragment,{children:[t.jsxs("p",{children:["The ",t.jsx("code",{children:"options.parse"})," allows you to provide a custom parse function to parse the stored value to a specific structure you wanted. Use it when migrating from legacy formats, supporting custom serialization, or relaxing validation."]}),t.jsxs("p",{children:["The example below pre-seeds the sessionStorage with legacy format"," ",t.jsx("code",{children:'{ theme: "grayscale" }'})," (no value)."]})]})}),m({source:g`
                const customParse = (themes, value) => {
                    const parsed = JSON.parse(value || '{}')
                    if (!parsed?.theme || !(parsed.theme in themes)) return undefined
                    return { theme: parsed.theme, value: themes[parsed.theme] }
                }
                const store = sessionStorageThemeStore(themes, { storageKey: 'theme', parse: customParse })
            `})],loaders:[()=>(window.sessionStorage.setItem(F,JSON.stringify({theme:"grayscale"})),{})],render:()=>{const s=d(r,{storageKey:F,parse:$}).read();return t.jsx("div",{className:"flex flex-col gap-4",children:t.jsx(y,{title:"store.read() with custom parse","data-testid":"store-read-result",result:s??{theme:"grayscale",value:r.grayscale}})})},play:async({canvas:e})=>{await o(e.getByTestId("store-read-result")).toHaveTextContent("theme: grayscale"),await o(e.getByTestId("store-read-result")).toHaveTextContent("value: theme-grayscale")}},I={name:"options.storageKey",tags:["use-case","props"],decorators:[h({content:t.jsxs("p",{children:["Pass ",t.jsx("code",{children:"options.storageKey"})," to determine the sessionStorage key used for persistence per tab."]})}),m({source:g`
                const store = sessionStorageThemeStore(themes, { storageKey: 'app-theme' })
            `})],loaders:[()=>(d(r,{storageKey:c}).write(i(r,"current")),{})],render:()=>{const s=d(r,{storageKey:c}).read();return t.jsxs("div",{className:"flex flex-col gap-4",children:[t.jsx(D,{title:"sessionStorage key",appearance:"output",children:t.jsx("code",{children:c})}),t.jsx(y,{title:"store.read() result","data-testid":"store-read-result",result:s??{theme:"current",value:r.current}})]})},play:async({canvas:e})=>{await o(e.getByTestId("store-read-result")).toHaveTextContent("theme: current"),await o(e.getByTestId("store-read-result")).toHaveTextContent("value: theme-current")}},N="theme-ss-thememap",B={name:"themes: string value",tags:["use-case","props"],parameters:l({description:{story:"themes values can be a single string per theme."}}),decorators:[h({content:t.jsx("p",{children:"Each theme maps to one string value."})}),m({source:g`
                const themes = {
                    current: 'theme-current',
                    grayscale: 'theme-grayscale',
                    'high-contrast': 'theme-high-contrast'
                } as const

                const store = sessionStorageThemeStore(themes, { storageKey: 'theme' })
            `})],loaders:[()=>{window.sessionStorage.removeItem(N);const e=d(r,{storageKey:N});return e.write(i(r,"current")),{store:e}}],render:(e,{loaded:{store:s}})=>{const n=s.read();return t.jsx("div",{className:"flex flex-col gap-4",children:t.jsx(y,{title:"store.read() result","data-testid":"store-read-result",result:n??{theme:"current",value:r.current}})})},play:async({canvas:e})=>{await o(e.getByTestId("store-read-result")).toHaveTextContent("theme: current"),await o(e.getByTestId("store-read-result")).toHaveTextContent("value: theme-current")}},M={current:"theme-current",grayscale:["theme-grayscale","app:bg-gray-100"],"high-contrast":"theme-high-contrast"},R={name:"themes: array values",tags:["use-case","props"],parameters:l({description:{story:"themes values can be string[]. Stored and retrieved value is the full array."}}),decorators:[h({content:t.jsxs("p",{children:["Each theme can map to ",t.jsx("code",{children:"string[]"}),". ",t.jsx("code",{children:"ThemeResult.value"})," persists the full array."]})}),m({source:g`
                const themes = {
                    current: 'theme-current',
                    grayscale: ['theme-grayscale', 'app:bg-gray-100'],
                    'high-contrast': 'theme-high-contrast'
                } as const

                const store = sessionStorageThemeStore(themes, { storageKey: 'theme' })
            `})],loaders:[()=>{window.sessionStorage.removeItem(N);const e=d(M,{storageKey:N});return e.write(i(M,"grayscale")),{store:e}}],render:(e,{loaded:{store:s}})=>{const n=s.read();return t.jsx("div",{className:"flex flex-col gap-4",children:t.jsx(y,{title:"store.read() result","data-testid":"store-read-result",result:n??{theme:"grayscale",value:M.grayscale}})})},play:async({canvas:e})=>{await o(e.getByTestId("store-read-result")).toHaveTextContent("theme: grayscale"),await o(e.getByTestId("store-read-result")).toHaveTextContent("value: [theme-grayscale, app:bg-gray-100]")}},O={name:"read",tags:["props"],parameters:l({description:{story:"store.read() reads the current theme from sessionStorage."}}),decorators:[h(),m({source:g`
                const store = sessionStorageThemeStore(themes, { storageKey: 'theme' })
                const result = store.read()
            `})],loaders:[()=>(d(r,{storageKey:c}).write(i(r,"grayscale")),{})],render:()=>{const s=d(r,{storageKey:c}).read();return t.jsx(y,{title:"store.read() result","data-testid":"store-read-result",result:s??{theme:"grayscale",value:r.grayscale}})},play:async({canvas:e})=>{await o(e.getByTestId("store-read-result")).toHaveTextContent("theme: grayscale"),await o(e.getByTestId("store-read-result")).toHaveTextContent("value: theme-grayscale")}},j={name:"read: undefined",tags:["props"],parameters:l({description:{story:"When nothing is stored at the key, store.read() returns undefined."}}),decorators:[h(),m({source:g`
                const store = sessionStorageThemeStore(themes, { storageKey: 'theme-get' })
                const theme = store.read() // undefined when empty
            `})],loaders:[()=>(window.sessionStorage.removeItem(c),{})],render:()=>{const s=d(r,{storageKey:c}).read();return t.jsx(y,{title:"store.read() result","data-testid":"store-read-result",result:s!==void 0?s:{theme:void 0,value:void 0}})},play:async({canvas:e})=>{await o(e.getByTestId("store-read-result")).toHaveTextContent("(undefined)")}},H={name:"write",tags:["props"],parameters:l({description:{story:"store.write() persists the theme to sessionStorage (per tab)."}}),decorators:[h(),m({source:g`
                const store = sessionStorageThemeStore(themes, { storageKey: 'theme' })
                store.write(themeEntry(themes, 'high-contrast'))
            `})],loaders:[()=>(window.sessionStorage.removeItem(c),{})],render:()=>{const e=d(r,{storageKey:c}),[s,n]=u.useState(()=>e.read()?.theme??null);return t.jsxs("div",{className:"flex flex-col gap-4",children:[t.jsx("div",{className:"flex flex-wrap gap-2",children:Object.keys(r).map(a=>t.jsxs(p,{"data-testid":`write-${a}`,onPress:()=>{e.write(i(r,a)),n(a)},children:["write(",a,")"]},a))}),t.jsx(y,{title:"store.read() after write","data-testid":"store-write-result",result:s?{theme:s,value:r[s]}:{theme:"current",value:r.current}})]})},play:async({canvas:e})=>{await w.click(e.getByTestId("write-grayscale")),await o(e.getByTestId("store-write-result")).toHaveTextContent("theme: grayscale"),await o(e.getByTestId("store-write-result")).toHaveTextContent("value: theme-grayscale")}},P={name:"subscribe",tags:["props"],parameters:l({description:{story:"store.subscribe() calls the handler when storage changes in same tab (no initial notify)."}}),decorators:[h(),m({source:g`
                const store = sessionStorageThemeStore(themes, { storageKey: 'theme' })
                return store.subscribe((themeResult) => {
                    console.log('Theme:', themeResult?.theme, themeResult?.value)
                })
            `})],loaders:[()=>(d(r,{storageKey:c}).write(i(r,"grayscale")),{})],render:()=>{const e=u.useMemo(()=>d(r,{storageKey:c}),[]),[s,n]=u.useState(void 0);u.useEffect(()=>e.subscribe(n),[e]);const a=s?.theme??"current";return t.jsxs("div",{className:"flex flex-col gap-4",children:[t.jsxs("div",{className:"flex flex-wrap gap-2",children:[t.jsx(p,{"data-testid":"write-high-contrast",onPress:()=>e.write(i(r,"high-contrast")),children:"write('high-contrast')"}),t.jsx(p,{"data-testid":"write-current",onPress:()=>e.write(i(r,"current")),children:"write('current')"})]}),t.jsx(y,{title:"store.subscribe() receives","data-testid":"store-subscribe-result",result:i(r,a)})]})},play:async({canvas:e})=>{await w.click(e.getByTestId("write-high-contrast")),await b(()=>o(e.getByTestId("store-subscribe-result")).toHaveTextContent("high-contrast")),await w.click(e.getByTestId("write-current")),await b(()=>o(e.getByTestId("store-subscribe-result")).toHaveTextContent("current"))}},_={name:"subscribe: only when themeEntry changes",tags:["props"],parameters:l({description:{story:"The handler is only invoked when the resolved themeEntry changes. Writing the same theme again does not trigger the handler."}}),decorators:[h(),m({source:g`
                const store = sessionStorageThemeStore(themes, { storageKey: 'theme' })
                store.subscribe((entry) => {
                    invocationCount++
                    setObserved(entry)
                })
                store.write(themeEntry(themes, 'grayscale')) // handler runs
                store.write(themeEntry(themes, 'grayscale')) // handler NOT run (same theme)
            `})],loaders:[()=>(window.sessionStorage.removeItem(c),{})],render:()=>{const e=u.useMemo(()=>d(r,{storageKey:c}),[]),[s,n]=u.useState(0),[a,S]=u.useState(null);u.useEffect(()=>e.subscribe(T=>{n(x=>x+1),S(T)}),[e]);const Y=a?.theme??"(none)";return t.jsxs("div",{className:"flex flex-col gap-4","data-testid":"subscribe-only-when-theme-changes",children:[t.jsx(D,{title:"Handler invocations",appearance:"output",children:t.jsx("pre",{"data-testid":"invocation-count",className:"font-mono",children:s})}),t.jsx(D,{title:"Observed theme",appearance:"output",children:t.jsx("pre",{"data-testid":"observed-theme",className:"font-mono",children:Y})}),t.jsxs("div",{className:"flex flex-wrap gap-2",children:[t.jsx(p,{"data-testid":"write-grayscale-twice",onPress:()=>{e.write(i(r,"grayscale")),e.write(i(r,"grayscale"))},children:"write(grayscale) twice"}),t.jsx(p,{"data-testid":"write-high-contrast",onPress:()=>e.write(i(r,"high-contrast")),children:"write(high-contrast)"})]})]})},play:async({canvas:e})=>{await o(e.getByTestId("invocation-count")).toHaveTextContent("0"),await w.click(e.getByTestId("write-grayscale-twice")),await b(()=>o(e.getByTestId("invocation-count")).toHaveTextContent("1")),await o(e.getByTestId("observed-theme")).toHaveTextContent("grayscale")}},k={name:"subscribe: unsubscribe",tags:["props"],parameters:l({description:{story:"After calling the function returned by subscribe(), further write() calls do not invoke the handler."}}),decorators:[h(),m({source:g`
                const store = sessionStorageThemeStore(themes, { storageKey: 'theme' })
                const unsubscribe = store.subscribe((theme) => console.log(theme))
                store.write(themeEntry(themes, 'grayscale'))
                unsubscribe()
                store.write(themeEntry(themes, 'current')) // handler not called
            `})],loaders:[()=>(window.sessionStorage.removeItem(c),{})],render:()=>{const e=u.useMemo(()=>d(r,{storageKey:c}),[]),[s,n]=u.useState(void 0),a=u.useRef(null);u.useEffect(()=>{if(!a.current)return a.current=e.subscribe(n),()=>{a.current?.(),a.current=null}},[e]);const S=s?.theme??"current";return t.jsxs("div",{className:"flex flex-col gap-4",children:[t.jsxs("div",{className:"flex flex-wrap gap-2",children:[t.jsx(p,{"data-testid":"write-grayscale",onPress:()=>e.write(i(r,"grayscale")),children:"write('grayscale')"}),t.jsx(p,{"data-testid":"write-current",onPress:()=>e.write(i(r,"current")),children:"write('current')"}),t.jsx(p,{"data-testid":"unsubscribe",onPress:()=>{a.current?.(),a.current=null},children:"unsubscribe()"})]}),t.jsx(y,{title:"store.subscribe() receives (frozen after unsubscribe)","data-testid":"store-subscribe-result",result:i(r,S)})]})},play:async({canvas:e})=>{await w.click(e.getByTestId("write-grayscale")),await b(()=>o(e.getByTestId("store-subscribe-result")).toHaveTextContent("grayscale")),await w.click(e.getByTestId("unsubscribe")),await w.click(e.getByTestId("write-current")),await o(e.getByTestId("store-subscribe-result")).toHaveTextContent("grayscale")}},A={tags:["source"],parameters:l({source:{code:V}}),decorators:[m()]};K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`{
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
}`,...K.parameters?.docs?.source}}};C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
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
}`,...C.parameters?.docs?.source}}};I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
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
}`,...I.parameters?.docs?.source}}};B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
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
}`,...B.parameters?.docs?.source}}};R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`{
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
}`,...R.parameters?.docs?.source}}};O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
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
}`,...O.parameters?.docs?.source}}};j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
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
}`,...j.parameters?.docs?.source}}};H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`{
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
}`,...H.parameters?.docs?.source}}};P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
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
}`,...P.parameters?.docs?.source}}};_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
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
}`,..._.parameters?.docs?.source}}};k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
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
}`,...k.parameters?.docs?.source}}};A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  tags: ['source'],
  parameters: defineDocsParam({
    source: {
      code: source
    }
  }),
  decorators: [showSource()]
}`,...A.parameters?.docs?.source}}};const me=["Playground","ParseOption","StorageKey","ThemeMapStringValue","ThemeMapArrayValues","Read","ReadWhenEmpty","WriteStory","Subscribe","SubscribeOnlyWhenThemeChanges","SubscribeUnsubscribe","Source"];export{C as ParseOption,K as Playground,O as Read,j as ReadWhenEmpty,A as Source,I as StorageKey,P as Subscribe,_ as SubscribeOnlyWhenThemeChanges,k as SubscribeUnsubscribe,R as ThemeMapArrayValues,B as ThemeMapStringValue,H as WriteStory,me as __namedExportsOrder,ue as default};
