import{j as t,d,w as m,s as u,S as A,r as g}from"./iframe-BRf7Axb3.js";import{d as h}from"./dedent-BuYMbVyj.js";import{t as i}from"./theme-entry-D4S_RAMB.js";import{l}from"./local-storage-theme-store-CQ0vNisZ.js";import{B as p}from"./button-CkgYDtEi.js";import{T as y}from"./theme-result-card-DEniDmnf.js";import{T as L}from"./theme-store-demo-De_vsOVS.js";import"./preload-helper-PPVm8Dsz.js";import"./dummy-theme-store-DcCfgetv.js";import"./write-local-storage-CE6rqo_l.js";import"./write-web-storage-H7mtIjJa.js";import"./parse-stored-theme-Dsx2RsUi.js";import"./resolve-theme-map-value-CsrxdXA7.js";import"./resolve-class-name-Bq_FyHcK.js";import"./append-id-Vsg144gU.js";const J=`import { dummyThemeStore } from '../../../testing/theme/dummy-theme-store.ts'
import { readLocalStorage } from '../../local-storage/read-local-storage.ts'
import { writeLocalStorage } from '../../local-storage/write-local-storage.ts'
import type { ParseStoredTheme, StringifyStoredTheme, ThemeEntry } from '../../theme-entry.types.ts'
import type { ThemeMap } from '../../theme-map.types.ts'
import type { ThemeStore } from '../theme-store.types.ts'

/**
 * Creates a theme store backed by localStorage.
 *
 * Persists across sessions; cross-tab sync via StorageEvent.
 * Same-tab writes trigger manual notify (StorageEvent does not fire for same tab).
 *
 * @param themes - Record mapping theme keys to values (for validation)
 * @param options.storageKey - localStorage key
 * @param options.parse - Optional custom parser for stored string (default: parseStoredTheme)
 * @param options.stringify - Optional custom serializer (default: JSON.stringify)
 * @param options.onError - Optional callback invoked when storage write throws
 * @returns ThemeStore
 *
 * @example
 * \`\`\`ts
 * const themes = { current: 'theme-current', grayscale: 'theme-grayscale' }
 * const store = localStorageThemeStore(themes, { storageKey: 'theme' })
 * store.read() // returns themeResult from localStorage
 * store.write(themeEntry(themes, 'grayscale'))
 * store.subscribe((themeResult) => {})
 * \`\`\`
 */
export function localStorageThemeStore<Themes extends ThemeMap>(
	themes: Themes,
	options: {
		storageKey: string
		parse?: ParseStoredTheme<Themes> | undefined
		stringify?: StringifyStoredTheme<Themes> | undefined
		onError?: ((error: unknown) => void) | undefined
	}
) {
	const { storageKey, parse, stringify, onError } = options

	if (!window?.localStorage) {
		return dummyThemeStore satisfies ThemeStore<Themes>
	}

	const handlers = new Set<(theme: ThemeEntry<Themes> | undefined) => void>()
	let lastNotifiedKey: keyof Themes | undefined = read()?.theme ?? undefined

	function read() {
		return readLocalStorage(themes, storageKey, { parse })
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
			writeLocalStorage(themes, storageKey, entry, { stringify, onError })
			notify()
		},
		subscribe(handler) {
			handlers.add(handler)

			const onStorage = (e: StorageEvent) => {
				if (e.key === storageKey && e.storageArea === window.localStorage) notify()
			}
			window.addEventListener('storage', onStorage)

			return () => {
				handlers.delete(handler)
				window.removeEventListener('storage', onStorage)
			}
		}
	} satisfies ThemeStore<Themes>
}
`,{expect:a,userEvent:v,waitFor:T}=__STORYBOOK_MODULE_TEST__,ce={title:"theme/theme-store/localStorageThemeStore",tags:["func","version:1.0"],parameters:d({description:{component:"Theme store backed by localStorage. Persists across sessions; cross-tab sync via StorageEvent. Bakes themes at creation."}}),render:()=>t.jsx(t.Fragment,{})},r={current:"theme-current",next:"theme-next",grayscale:"theme-grayscale","high-contrast":"theme-high-contrast"},c="theme-ls-demo",S={tags:["playground"],parameters:d({description:{story:"Interactive demo: Read theme, write themes via buttons, and observe subscribe updates."}}),decorators:[m(),u({source:h`
                const store = localStorageThemeStore(themes, { storageKey: 'app-theme' })
                <ThemeStoreDemo2 store={store} themes={themes} />
            `})],loaders:[()=>(window.localStorage.removeItem(c),{})],render:()=>{const e=l(r,{storageKey:c});return t.jsx(L,{store:e,themes:r})},play:async({canvas:e})=>{await v.click(e.getByTestId("theme-store-demo-btn-write-grayscale")),await T(()=>a(e.getByTestId("theme-store-demo-observe")).toHaveTextContent("grayscale")),await a(e.getByTestId("theme-store-demo-observe")).toHaveTextContent("theme-grayscale")}},N="theme-ls-validation",f={name:"Stored Validation: legacy format returns undefined",tags:["integration"],parameters:d({description:{story:"Strict validation: when stored JSON has no value field (legacy format) or shape/comparable mismatch, store.read() returns undefined."}}),decorators:[m({content:t.jsxs("p",{children:["Pre-seeded localStorage with legacy format ",t.jsx("code",{children:'{ theme: "dark" }'})," (no value). Store returns undefined."]})}),u({source:h`
                // Legacy storage: { theme: "dark" } - no value field
                // store.read() returns undefined (strict validation)
            `})],loaders:[()=>(window.localStorage.setItem(N,JSON.stringify({theme:"dark"})),{})],render:()=>{const s=l(r,{storageKey:N}).read();return t.jsx("div",{className:"flex flex-col gap-4",children:t.jsx(y,{title:"store.read() result","data-testid":"store-read-result",result:s!==void 0?s:{theme:void 0,value:void 0}})})},play:async({canvas:e})=>{await a(e.getByTestId("store-read-result")).toHaveTextContent("(undefined)")}},Y="theme-ls-parse";function W(e,s){let n;try{n=s?JSON.parse(s):void 0}catch{return}if(!n?.theme||typeof n.theme!="string"||!(n.theme in e))return;const o=n.theme;return{theme:o,value:e[o]}}const x={name:"options.parse",tags:["props","use-case"],parameters:d({description:{story:"The options.parse allows you to provide a custom parse function to parse the stored value into a structure you need. Use it when migrating from legacy formats, supporting custom serialization, or relaxing validation. This example accepts legacy format { theme } (no value field) and coerces to ThemeEntry; the default parseStoredTheme would return undefined."}}),decorators:[m({content:t.jsxs(t.Fragment,{children:[t.jsxs("p",{children:["The ",t.jsx("code",{children:"options.parse"})," allows you to provide a custom parse function to parse the stored value to a specific structure you wanted. Use it when migrating from legacy formats, supporting custom serialization, or relaxing validation."]}),t.jsxs("p",{children:["The example below pre-seeds the localStorage with legacy format"," ",t.jsx("code",{children:'{ theme: "grayscale" }'})," (no value)."]})]})}),u({source:h`
                const customParse = (themes, value) => {
                    const parsed = JSON.parse(value || '{}')
                    if (!parsed?.theme || !(parsed.theme in themes)) return undefined
                    return { theme: parsed.theme, value: themes[parsed.theme] }
                }
                const store = localStorageThemeStore(themes, { storageKey: 'theme', parse: customParse })
            `})],loaders:[()=>(window.localStorage.setItem(Y,JSON.stringify({theme:"grayscale"})),{})],render:()=>{const s=l(r,{storageKey:Y,parse:W}).read();return t.jsx("div",{className:"flex flex-col gap-4",children:t.jsx(y,{title:"store.read() with custom parse","data-testid":"store-read-result",result:s??{theme:"grayscale",value:r.grayscale}})})},play:async({canvas:e})=>{await a(e.getByTestId("store-read-result")).toHaveTextContent("theme: grayscale"),await a(e.getByTestId("store-read-result")).toHaveTextContent("value: theme-grayscale")}},b={name:"options.storageKey",tags:["props"],decorators:[m({content:t.jsxs("p",{children:["Pass ",t.jsx("code",{children:"options.storageKey"})," to determine the localStorage key used for persistence."]})}),u({source:h`
                const store = localStorageThemeStore(themes, { storageKey: 'app-theme' })
            `})],loaders:[()=>(l(r,{storageKey:c}).write(i(r,"current")),{})],render:()=>{const s=l(r,{storageKey:c}).read();return t.jsxs("div",{className:"flex flex-col gap-4",children:[t.jsx(A,{title:"localStorage key",appearance:"output",children:t.jsx("code",{children:c})}),t.jsx(y,{title:"store.read() result","data-testid":"store-read-result",result:s??{theme:"current",value:r.current}})]})},play:async({canvas:e})=>{await a(e.getByTestId("store-read-result")).toHaveTextContent("theme: current"),await a(e.getByTestId("store-read-result")).toHaveTextContent("value: theme-current")}},w="theme-ls-thememap",E={name:"themes: string value",tags:["props"],parameters:d({description:{story:"themes values can be a single string per theme."}}),decorators:[m({content:t.jsx("p",{children:"Each theme maps to one string value."})}),u({source:h`
                const themes = {
                    current: 'theme-current',
                    grayscale: 'theme-grayscale',
                    'high-contrast': 'theme-high-contrast'
                } as const

                const store = localStorageThemeStore(themes, { storageKey: 'theme' })
            `})],loaders:[()=>{window.localStorage.removeItem(w);const e=l(r,{storageKey:w});return e.write(i(r,"current")),{store:e}}],render:(e,{loaded:{store:s}})=>{const n=s.read();return t.jsx("div",{className:"flex flex-col gap-4",children:t.jsx(y,{title:"store.read() result","data-testid":"store-read-result",result:n??{theme:"current",value:r.current}})})},play:async({canvas:e})=>{await a(e.getByTestId("store-read-result")).toHaveTextContent("theme: current"),await a(e.getByTestId("store-read-result")).toHaveTextContent("value: theme-current")}},_={current:"theme-current",grayscale:["theme-grayscale","app:bg-gray-100"],"high-contrast":"theme-high-contrast"},K={name:"themes: array values",tags:["props"],parameters:d({description:{story:"themes values can be string[]. Stored and retrieved value is the full array."}}),decorators:[m({content:t.jsxs("p",{children:["Each theme can map to ",t.jsx("code",{children:"string[]"}),". ",t.jsx("code",{children:"ThemeResult.value"})," persists the full array."]})}),u({source:h`
                const themes = {
                    current: 'theme-current',
                    grayscale: ['theme-grayscale', 'app:bg-gray-100'],
                    'high-contrast': 'theme-high-contrast'
                } as const

                const store = localStorageThemeStore(themes, { storageKey: 'theme' })
            `})],loaders:[()=>{window.localStorage.removeItem(w);const e=l(_,{storageKey:w});return e.write(i(_,"grayscale")),{store:e}}],render:(e,{loaded:{store:s}})=>{const n=s.read();return t.jsx("div",{className:"flex flex-col gap-4",children:t.jsx(y,{title:"store.read() result","data-testid":"store-read-result",result:n??{theme:"grayscale",value:_.grayscale}})})},play:async({canvas:e})=>{await a(e.getByTestId("store-read-result")).toHaveTextContent("theme: grayscale"),await a(e.getByTestId("store-read-result")).toHaveTextContent("value: [theme-grayscale, app:bg-gray-100]")}},G={light:"theme-light",dark:{themeValue:"theme-dark",contrast:"high"}},C={name:"themes: object value",tags:["props"],parameters:d({description:{story:"themes values can be { themeValue: string | string[] }. Extra props (e.g. contrast) are preserved when read from storage."}}),decorators:[m({content:t.jsxs("p",{children:["Each theme can map to ",t.jsx("code",{children:"{ themeValue, ...extra }"}),". Stored and retrieved value preserves extra props for user metadata."]})}),u({source:h`
                const themes = {
                    light: 'theme-light',
                    dark: { themeValue: 'theme-dark', contrast: 'high' }
                } as const

                const store = localStorageThemeStore(themes, { storageKey: 'theme' })
            `})],loaders:[()=>{window.localStorage.removeItem(w);const e=l(G,{storageKey:w});return e.write({theme:"dark",value:{themeValue:"theme-dark",contrast:"high"}}),{store:e}}],render:(e,{loaded:{store:s}})=>{const n=s.read();return t.jsx("div",{className:"flex flex-col gap-4",children:t.jsx(y,{title:"store.read() result","data-testid":"store-read-result",result:n??{theme:"dark",value:G.dark}})})},play:async({canvas:e})=>{await a(e.getByTestId("store-read-result")).toHaveTextContent("theme: dark"),await a(e.getByTestId("store-read-result")).toHaveTextContent("theme-dark"),await a(e.getByTestId("store-read-result")).toHaveTextContent("contrast"),await a(e.getByTestId("store-read-result")).toHaveTextContent("high")}},I={name:"read",tags:["props"],parameters:d({description:{story:"store.read() reads the current theme from localStorage."}}),decorators:[m(),u({source:h`
                const store = localStorageThemeStore(themes, { storageKey: 'theme' })
                const result = store.read()
            `})],loaders:[()=>(l(r,{storageKey:c}).write(i(r,"grayscale")),{})],render:()=>{const s=l(r,{storageKey:c}).read();return t.jsx(y,{title:"store.read() result","data-testid":"store-read-result",result:s??{theme:"grayscale",value:r.grayscale}})},play:async({canvas:e})=>{await a(e.getByTestId("store-read-result")).toHaveTextContent("theme: grayscale"),await a(e.getByTestId("store-read-result")).toHaveTextContent("value: theme-grayscale")}},B={name:"read: undefined",tags:["props"],parameters:d({description:{story:"When nothing is stored at the key, store.read() returns undefined."}}),decorators:[m(),u({source:h`
                const store = localStorageThemeStore(themes, { storageKey: 'theme-get' })
                const theme = store.read() // undefined when empty
            `})],loaders:[()=>(window.localStorage.removeItem(c),{})],render:()=>{const s=l(r,{storageKey:c}).read();return t.jsx(y,{title:"store.read() result","data-testid":"store-read-result",result:s!==void 0?s:{theme:void 0,value:void 0}})},play:async({canvas:e})=>{await a(e.getByTestId("store-read-result")).toHaveTextContent("(undefined)")}},R={tags:["props"],parameters:d({description:{story:"store.write() persists the theme to localStorage."}}),decorators:[m(),u({source:h`
                const store = localStorageThemeStore(themes, { storageKey: 'theme' })
                store.write(themeEntry(themes, 'high-contrast'))
            `})],loaders:[()=>(window.localStorage.removeItem(c),{})],render:()=>{const e=l(r,{storageKey:c}),[s,n]=g.useState(()=>e.read()?.theme??null);return t.jsxs("div",{className:"flex flex-col gap-4",children:[t.jsx("div",{className:"flex flex-wrap gap-2",children:Object.keys(r).map(o=>t.jsxs(p,{"data-testid":`write-${o}`,onPress:()=>{e.write(i(r,o)),n(o)},children:["write(",o,")"]},o))}),t.jsx(y,{title:"store.read() after write","data-testid":"store-write-result",result:s?{theme:s,value:r[s]}:{theme:"current",value:r.current}})]})},play:async({canvas:e})=>{await v.click(e.getByTestId("write-grayscale")),await a(e.getByTestId("store-write-result")).toHaveTextContent("theme: grayscale"),await a(e.getByTestId("store-write-result")).toHaveTextContent("value: theme-grayscale")}},O={name:"subscribe",tags:["props"],parameters:d({description:{story:"store.subscribe() calls the handler when storage changes (same-tab or cross-tab) (no initial notify)."}}),decorators:[m(),u({source:h`
                const store = localStorageThemeStore(themes, { storageKey: 'theme' })
                return store.subscribe((themeResult) => {
                    console.log('Theme:', themeResult?.theme, themeResult?.value)
                })
            `})],loaders:[()=>(l(r,{storageKey:c}).write(i(r,"grayscale")),{})],render:()=>{const e=g.useMemo(()=>l(r,{storageKey:c}),[]),[s,n]=g.useState(void 0);g.useEffect(()=>e.subscribe(n),[e]);const o=s?.theme??"current";return t.jsxs("div",{className:"flex flex-col gap-4",children:[t.jsxs("div",{className:"flex flex-wrap gap-2",children:[t.jsx(p,{"data-testid":"write-high-contrast",onPress:()=>e.write(i(r,"high-contrast")),children:"write('high-contrast')"}),t.jsx(p,{"data-testid":"write-current",onPress:()=>e.write(i(r,"current")),children:"write('current')"})]}),t.jsx(y,{title:"store.subscribe() receives","data-testid":"store-subscribe-result",result:i(r,o)})]})},play:async({canvas:e})=>{await v.click(e.getByTestId("write-high-contrast")),await T(()=>a(e.getByTestId("store-subscribe-result")).toHaveTextContent("high-contrast")),await v.click(e.getByTestId("write-current")),await T(()=>a(e.getByTestId("store-subscribe-result")).toHaveTextContent("current"))}},j={name:"subscribe: only when themeEntry changes",tags:["props"],parameters:d({description:{story:"The handler is only invoked when the resolved themeEntry changes. Writing the same theme again does not trigger the handler."}}),decorators:[m(),u({source:h`
                const store = localStorageThemeStore(themes, { storageKey: 'theme' })
                store.subscribe((entry) => {
                    invocationCount++
                    setObserved(entry)
                })
                store.write(themeEntry(themes, 'grayscale')) // handler runs
                store.write(themeEntry(themes, 'grayscale')) // handler NOT run (same theme)
            `})],loaders:[()=>(window.localStorage.removeItem(c),{})],render:()=>{const e=g.useMemo(()=>l(r,{storageKey:c}),[]),[s,n]=g.useState(0),[o,P]=g.useState(null);g.useEffect(()=>e.subscribe(D=>{n(V=>V+1),P(D)}),[e]);const M=o?.theme??"(none)";return t.jsxs("div",{className:"flex flex-col gap-4","data-testid":"subscribe-only-when-theme-changes",children:[t.jsx(A,{title:"Handler invocations",appearance:"output",children:t.jsx("pre",{"data-testid":"invocation-count",className:"font-mono",children:s})}),t.jsx(A,{title:"Observed theme",appearance:"output",children:t.jsx("pre",{"data-testid":"observed-theme",className:"font-mono",children:M})}),t.jsxs("div",{className:"flex flex-wrap gap-2",children:[t.jsx(p,{"data-testid":"write-grayscale-twice",onPress:()=>{e.write(i(r,"grayscale")),e.write(i(r,"grayscale"))},children:"write(grayscale) twice"}),t.jsx(p,{"data-testid":"write-high-contrast",onPress:()=>e.write(i(r,"high-contrast")),children:"write(high-contrast)"})]})]})},play:async({canvas:e})=>{await a(e.getByTestId("invocation-count")).toHaveTextContent("0"),await v.click(e.getByTestId("write-grayscale-twice")),await T(()=>a(e.getByTestId("invocation-count")).toHaveTextContent("1")),await a(e.getByTestId("observed-theme")).toHaveTextContent("grayscale")}},k={name:"subscribe: unsubscribe",tags:["props"],parameters:d({description:{story:"After calling the function returned by subscribe(), further write() calls do not invoke the handler."}}),decorators:[m(),u({source:h`
                const store = localStorageThemeStore(themes, { storageKey: 'theme' })
                const unsubscribe = store.subscribe((theme) => console.log(theme))
                store.write(themeEntry(themes, 'grayscale'))
                unsubscribe()
                store.write(themeResult('current', themes)) // handler not called
            `})],loaders:[()=>(window.localStorage.removeItem(c),{})],render:()=>{const e=g.useMemo(()=>l(r,{storageKey:c}),[]),[s,n]=g.useState(void 0),o=g.useRef(null);g.useEffect(()=>{if(!o.current)return o.current=e.subscribe(n),()=>{o.current?.(),o.current=null}},[e]);const P=s?.theme??"current";return t.jsxs("div",{className:"flex flex-col gap-4",children:[t.jsxs("div",{className:"flex flex-wrap gap-2",children:[t.jsx(p,{"data-testid":"write-grayscale",onPress:()=>e.write(i(r,"grayscale")),children:"write('grayscale')"}),t.jsx(p,{"data-testid":"write-current",onPress:()=>e.write(i(r,"current")),children:"write('current')"}),t.jsx(p,{"data-testid":"unsubscribe",onPress:()=>{o.current?.(),o.current=null},children:"unsubscribe()"})]}),t.jsx(y,{title:"store.subscribe() receives (frozen after unsubscribe)","data-testid":"store-subscribe-result",result:i(r,P)})]})},play:async({canvas:e})=>{await v.click(e.getByTestId("write-grayscale")),await T(()=>a(e.getByTestId("store-subscribe-result")).toHaveTextContent("grayscale")),await v.click(e.getByTestId("unsubscribe")),await v.click(e.getByTestId("write-current")),await a(e.getByTestId("store-subscribe-result")).toHaveTextContent("grayscale")}},H={tags:["source"],parameters:d({source:{code:J}}),decorators:[u()]};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  tags: ['playground'],
  parameters: defineDocsParam({
    description: {
      story: 'Interactive demo: Read theme, write themes via buttons, and observe subscribe updates.'
    }
  }),
  decorators: [withStoryCard(), showSource({
    source: dedent\`
                const store = localStorageThemeStore(themes, { storageKey: 'app-theme' })
                <ThemeStoreDemo2 store={store} themes={themes} />
            \`
  })],
  loaders: [() => {
    window.localStorage.removeItem(STORAGE_KEY);
    return {};
  }],
  render: () => {
    const store = localStorageThemeStore(themes, {
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
}`,...S.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  name: 'Stored Validation: legacy format returns undefined',
  tags: ['integration'],
  parameters: defineDocsParam({
    description: {
      story: 'Strict validation: when stored JSON has no value field (legacy format) or shape/comparable mismatch, store.read() returns undefined.'
    }
  }),
  decorators: [withStoryCard({
    content: <p>
                    Pre-seeded localStorage with legacy format <code>{\`{ theme: "dark" }\`}</code> (no value).
                    Store returns undefined.
                </p>
  }), showSource({
    source: dedent\`
                // Legacy storage: { theme: "dark" } - no value field
                // store.read() returns undefined (strict validation)
            \`
  })],
  loaders: [() => {
    window.localStorage.setItem(STORAGE_KEY_VALIDATION, JSON.stringify({
      theme: 'dark'
    }));
    return {};
  }],
  render: () => {
    const store = localStorageThemeStore(themes, {
      storageKey: STORAGE_KEY_VALIDATION
    });
    const result = store.read();
    return <div className="flex flex-col gap-4">
                <ThemeResultCard title="store.read() result" data-testid="store-read-result" result={result !== undefined ? result : {
        theme: undefined,
        value: undefined
      }} />
            </div>;
  },
  play: async ({
    canvas
  }) => {
    await expect(canvas.getByTestId('store-read-result')).toHaveTextContent('(undefined)');
  }
}`,...f.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  name: 'options.parse',
  tags: ['props', 'use-case'],
  parameters: defineDocsParam({
    description: {
      story: 'The options.parse allows you to provide a custom parse function to parse the stored value into a structure you need. Use it when migrating from legacy formats, supporting custom serialization, or relaxing validation. This example accepts legacy format { theme } (no value field) and coerces to ThemeEntry; the default parseStoredTheme would return undefined.'
    }
  }),
  decorators: [withStoryCard({
    content: <>
                    <p>
                        The <code>options.parse</code> allows you to provide a custom parse function to parse
                        the stored value to a specific structure you wanted. Use it when migrating from legacy
                        formats, supporting custom serialization, or relaxing validation.
                    </p>
                    <p>
                        The example below pre-seeds the localStorage with legacy format{' '}
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
                const store = localStorageThemeStore(themes, { storageKey: 'theme', parse: customParse })
            \`
  })],
  loaders: [() => {
    window.localStorage.setItem(STORAGE_KEY_PARSE, JSON.stringify({
      theme: 'grayscale'
    }));
    return {};
  }],
  render: () => {
    const store = localStorageThemeStore(themes, {
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
}`,...x.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  name: 'options.storageKey',
  tags: ['props'],
  decorators: [withStoryCard({
    content: <p>
                    Pass <code>options.storageKey</code> to determine the localStorage key used for
                    persistence.
                </p>
  }), showSource({
    source: dedent\`
                const store = localStorageThemeStore(themes, { storageKey: 'app-theme' })
            \`
  })],
  loaders: [() => {
    const store = localStorageThemeStore(themes, {
      storageKey: STORAGE_KEY
    });
    store.write(themeEntry(themes, 'current'));
    return {};
  }],
  render: () => {
    const store = localStorageThemeStore(themes, {
      storageKey: STORAGE_KEY
    });
    const result = store.read();
    return <div className="flex flex-col gap-4">
                <StoryCard title="localStorage key" appearance="output">
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
}`,...b.parameters?.docs?.source}}};E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  name: 'themes: string value',
  tags: ['props'],
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

                const store = localStorageThemeStore(themes, { storageKey: 'theme' })
            \`
  })],
  loaders: [() => {
    window.localStorage.removeItem(THEMEMAP_STORAGE_KEY);
    const store = localStorageThemeStore(themes, {
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
}`,...E.parameters?.docs?.source}}};K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`{
  name: 'themes: array values',
  tags: ['props'],
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

                const store = localStorageThemeStore(themes, { storageKey: 'theme' })
            \`
  })],
  loaders: [() => {
    window.localStorage.removeItem(THEMEMAP_STORAGE_KEY);
    const store = localStorageThemeStore(themesArray, {
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
}`,...K.parameters?.docs?.source}}};C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  name: 'themes: object value',
  tags: ['props'],
  parameters: defineDocsParam({
    description: {
      story: 'themes values can be { themeValue: string | string[] }. Extra props (e.g. contrast) are preserved when read from storage.'
    }
  }),
  decorators: [withStoryCard({
    content: <p>
                    Each theme can map to <code>{'{ themeValue, ...extra }'}</code>. Stored and retrieved
                    value preserves extra props for user metadata.
                </p>
  }), showSource({
    source: dedent\`
                const themes = {
                    light: 'theme-light',
                    dark: { themeValue: 'theme-dark', contrast: 'high' }
                } as const

                const store = localStorageThemeStore(themes, { storageKey: 'theme' })
            \`
  })],
  loaders: [() => {
    window.localStorage.removeItem(THEMEMAP_STORAGE_KEY);
    const store = localStorageThemeStore(themesObject, {
      storageKey: THEMEMAP_STORAGE_KEY
    });
    store.write({
      theme: 'dark',
      value: {
        themeValue: 'theme-dark',
        contrast: 'high'
      }
    });
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
        theme: 'dark',
        value: themesObject.dark
      }} />
            </div>;
  },
  play: async ({
    canvas
  }) => {
    await expect(canvas.getByTestId('store-read-result')).toHaveTextContent('theme: dark');
    await expect(canvas.getByTestId('store-read-result')).toHaveTextContent('theme-dark');
    await expect(canvas.getByTestId('store-read-result')).toHaveTextContent('contrast');
    await expect(canvas.getByTestId('store-read-result')).toHaveTextContent('high');
  }
}`,...C.parameters?.docs?.source}}};I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
  name: 'read',
  tags: ['props'],
  parameters: defineDocsParam({
    description: {
      story: 'store.read() reads the current theme from localStorage.'
    }
  }),
  decorators: [withStoryCard(), showSource({
    source: dedent\`
                const store = localStorageThemeStore(themes, { storageKey: 'theme' })
                const result = store.read()
            \`
  })],
  loaders: [() => {
    const store = localStorageThemeStore(themes, {
      storageKey: STORAGE_KEY
    });
    store.write(themeEntry(themes, 'grayscale'));
    return {};
  }],
  render: () => {
    const store = localStorageThemeStore(themes, {
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
}`,...I.parameters?.docs?.source}}};B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
  name: 'read: undefined',
  tags: ['props'],
  parameters: defineDocsParam({
    description: {
      story: 'When nothing is stored at the key, store.read() returns undefined.'
    }
  }),
  decorators: [withStoryCard(), showSource({
    source: dedent\`
                const store = localStorageThemeStore(themes, { storageKey: 'theme-get' })
                const theme = store.read() // undefined when empty
            \`
  })],
  loaders: [() => {
    window.localStorage.removeItem(STORAGE_KEY);
    return {};
  }],
  render: () => {
    const store = localStorageThemeStore(themes, {
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
}`,...B.parameters?.docs?.source}}};R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`{
  tags: ['props'],
  parameters: defineDocsParam({
    description: {
      story: 'store.write() persists the theme to localStorage.'
    }
  }),
  decorators: [withStoryCard(), showSource({
    source: dedent\`
                const store = localStorageThemeStore(themes, { storageKey: 'theme' })
                store.write(themeEntry(themes, 'high-contrast'))
            \`
  })],
  loaders: [() => {
    window.localStorage.removeItem(STORAGE_KEY);
    return {};
  }],
  render: () => {
    const store = localStorageThemeStore(themes, {
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
}`,...R.parameters?.docs?.source}}};O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  name: 'subscribe',
  tags: ['props'],
  parameters: defineDocsParam({
    description: {
      story: 'store.subscribe() calls the handler when storage changes (same-tab or cross-tab) (no initial notify).'
    }
  }),
  decorators: [withStoryCard(), showSource({
    source: dedent\`
                const store = localStorageThemeStore(themes, { storageKey: 'theme' })
                return store.subscribe((themeResult) => {
                    console.log('Theme:', themeResult?.theme, themeResult?.value)
                })
            \`
  })],
  loaders: [() => {
    const store = localStorageThemeStore(themes, {
      storageKey: STORAGE_KEY
    });
    store.write(themeEntry(themes, 'grayscale'));
    return {};
  }],
  render: () => {
    const store = useMemo(() => localStorageThemeStore(themes, {
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
}`,...O.parameters?.docs?.source}}};j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  name: 'subscribe: only when themeEntry changes',
  tags: ['props'],
  parameters: defineDocsParam({
    description: {
      story: 'The handler is only invoked when the resolved themeEntry changes. Writing the same theme again does not trigger the handler.'
    }
  }),
  decorators: [withStoryCard(), showSource({
    source: dedent\`
                const store = localStorageThemeStore(themes, { storageKey: 'theme' })
                store.subscribe((entry) => {
                    invocationCount++
                    setObserved(entry)
                })
                store.write(themeEntry(themes, 'grayscale')) // handler runs
                store.write(themeEntry(themes, 'grayscale')) // handler NOT run (same theme)
            \`
  })],
  loaders: [() => {
    window.localStorage.removeItem(STORAGE_KEY);
    return {};
  }],
  render: () => {
    const store = useMemo(() => localStorageThemeStore(themes, {
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
}`,...j.parameters?.docs?.source}}};k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  name: 'subscribe: unsubscribe',
  tags: ['props'],
  parameters: defineDocsParam({
    description: {
      story: 'After calling the function returned by subscribe(), further write() calls do not invoke the handler.'
    }
  }),
  decorators: [withStoryCard(), showSource({
    source: dedent\`
                const store = localStorageThemeStore(themes, { storageKey: 'theme' })
                const unsubscribe = store.subscribe((theme) => console.log(theme))
                store.write(themeEntry(themes, 'grayscale'))
                unsubscribe()
                store.write(themeResult('current', themes)) // handler not called
            \`
  })],
  loaders: [() => {
    window.localStorage.removeItem(STORAGE_KEY);
    return {};
  }],
  render: () => {
    const store = useMemo(() => localStorageThemeStore(themes, {
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
}`,...k.parameters?.docs?.source}}};H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`{
  tags: ['source'],
  parameters: defineDocsParam({
    source: {
      code: source
    }
  }),
  decorators: [showSource()]
}`,...H.parameters?.docs?.source}}};const le=["Playground","StoredValidationShapeMismatch","ParseOption","StorageKey","ThemeMapStringValue","ThemeMapArrayValues","ThemeMapObjectValue","Read","ReadWhenEmpty","Write","Subscribe","SubscribeOnlyWhenThemeChanges","SubscribeUnsubscribe","Source"];export{x as ParseOption,S as Playground,I as Read,B as ReadWhenEmpty,H as Source,b as StorageKey,f as StoredValidationShapeMismatch,O as Subscribe,j as SubscribeOnlyWhenThemeChanges,k as SubscribeUnsubscribe,K as ThemeMapArrayValues,C as ThemeMapObjectValue,E as ThemeMapStringValue,R as Write,le as __namedExportsOrder,ce as default};
