import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./react-B6tGW3fj.js";import{a as n}from"./chunk-W22LQPXL-BSpKiHdn.js";import{a as r,c as i,i as a,l as o,s}from"./iframe-Dhw67M0q.js";import{n as c,t as l}from"./dedent-DQaCLeUO.js";import{n as u}from"./theme-entry-Cs_OPpJC.js";import{n as d,t as f}from"./local-storage-theme-store-nmP5Qc1w.js";import{n as p,t as m}from"./button-Cd599w8f.js";import{n as h,t as g}from"./theme-result-card-DLpbfmZr.js";import{n as _,t as v}from"./theme-store-demo-BMuLlMoM.js";var y;function b(){return(b=e((()=>{y=`import { dummyThemeStore } from '../../../testing/theme/dummy-theme-store.ts'
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
`})))()}function x(e,t){let n;try{n=t?JSON.parse(t):void 0}catch{return}if(!n?.theme||typeof n.theme!=`string`||!(n.theme in e))return;let r=n.theme;return{theme:r,value:e[r]}}var S,C,w,T,E,D,O,k,A,j,M,N,P,F,I,L,R,z,B,V,H,U,W,G,K,q,J,Y;function X(){return(X=e((()=>{f(),s(),c(),S=t(),p(),h(),_(),b(),C=n(),{expect:w,userEvent:T,waitFor:E}=__STORYBOOK_MODULE_TEST__,D={title:`theme/theme-store/localStorageThemeStore`,tags:[`func`,`version:2.0`],parameters:r({description:{component:`Theme store backed by localStorage. Persists across sessions; cross-tab sync via StorageEvent. Bakes themes at creation.`}}),render:()=>(0,C.jsx)(C.Fragment,{})},O={current:`theme-current`,next:`theme-next`,grayscale:`theme-grayscale`,"high-contrast":`theme-high-contrast`},k=`theme-ls-demo`,A={tags:[`playground`],parameters:r({description:{story:`Interactive demo: Read theme, write themes via buttons, and observe subscribe updates.`}}),decorators:[o(),i({source:l`
                const store = localStorageThemeStore(themes, { storageKey: 'app-theme' })
                <ThemeStoreDemo2 store={store} themes={themes} />
            `})],loaders:[()=>(window.localStorage.removeItem(k),{})],render:()=>{let e=d(O,{storageKey:k});return(0,C.jsx)(v,{store:e,themes:O})},play:async({canvas:e})=>{await T.click(e.getByTestId(`theme-store-demo-btn-write-grayscale`)),await E(()=>w(e.getByTestId(`theme-store-demo-observe`)).toHaveTextContent(`grayscale`)),await w(e.getByTestId(`theme-store-demo-observe`)).toHaveTextContent(`theme-grayscale`)}},j=`theme-ls-validation`,M={name:`Stored Validation: legacy format returns undefined`,tags:[`integration`],parameters:r({description:{story:`Strict validation: when stored JSON has no value field (legacy format) or shape/comparable mismatch, store.read() returns undefined.`}}),decorators:[o({content:(0,C.jsxs)(`p`,{children:[`Pre-seeded localStorage with legacy format `,(0,C.jsx)(`code`,{children:`{ theme: "dark" }`}),` (no value). Store returns undefined.`]})}),i({source:l`
                // Legacy storage: { theme: "dark" } - no value field
                // store.read() returns undefined (strict validation)
            `})],loaders:[()=>(window.localStorage.setItem(j,JSON.stringify({theme:`dark`})),{})],render:()=>{let e=d(O,{storageKey:j}).read();return(0,C.jsx)(`div`,{className:`flex flex-col gap-4`,children:(0,C.jsx)(g,{title:`store.read() result`,"data-testid":`store-read-result`,result:e===void 0?{theme:void 0,value:void 0}:e})})},play:async({canvas:e})=>{await w(e.getByTestId(`store-read-result`)).toHaveTextContent(`(undefined)`)}},N=`theme-ls-parse`,P={name:`options.parse`,tags:[`props`,`use-case`],parameters:r({description:{story:`The options.parse allows you to provide a custom parse function to parse the stored value into a structure you need. Use it when migrating from legacy formats, supporting custom serialization, or relaxing validation. This example accepts legacy format { theme } (no value field) and coerces to ThemeEntry; the default parseStoredTheme would return undefined.`}}),decorators:[o({content:(0,C.jsxs)(C.Fragment,{children:[(0,C.jsxs)(`p`,{children:[`The `,(0,C.jsx)(`code`,{children:`options.parse`}),` allows you to provide a custom parse function to parse the stored value to a specific structure you wanted. Use it when migrating from legacy formats, supporting custom serialization, or relaxing validation.`]}),(0,C.jsxs)(`p`,{children:[`The example below pre-seeds the localStorage with legacy format`,` `,(0,C.jsx)(`code`,{children:`{ theme: "grayscale" }`}),` (no value).`]})]})}),i({source:l`
                const customParse = (themes, value) => {
                    const parsed = JSON.parse(value || '{}')
                    if (!parsed?.theme || !(parsed.theme in themes)) return undefined
                    return { theme: parsed.theme, value: themes[parsed.theme] }
                }
                const store = localStorageThemeStore(themes, { storageKey: 'theme', parse: customParse })
            `})],loaders:[()=>(window.localStorage.setItem(N,JSON.stringify({theme:`grayscale`})),{})],render:()=>{let e=d(O,{storageKey:N,parse:x}).read();return(0,C.jsx)(`div`,{className:`flex flex-col gap-4`,children:(0,C.jsx)(g,{title:`store.read() with custom parse`,"data-testid":`store-read-result`,result:e??{theme:`grayscale`,value:O.grayscale}})})},play:async({canvas:e})=>{await w(e.getByTestId(`store-read-result`)).toHaveTextContent(`theme: grayscale`),await w(e.getByTestId(`store-read-result`)).toHaveTextContent(`value: theme-grayscale`)}},F={name:`options.storageKey`,tags:[`props`],decorators:[o({content:(0,C.jsxs)(`p`,{children:[`Pass `,(0,C.jsx)(`code`,{children:`options.storageKey`}),` to determine the localStorage key used for persistence.`]})}),i({source:l`
                const store = localStorageThemeStore(themes, { storageKey: 'app-theme' })
            `})],loaders:[()=>(d(O,{storageKey:k}).write(u(O,`current`)),{})],render:()=>{let e=d(O,{storageKey:k}).read();return(0,C.jsxs)(`div`,{className:`flex flex-col gap-4`,children:[(0,C.jsx)(a,{title:`localStorage key`,appearance:`output`,children:(0,C.jsx)(`code`,{children:k})}),(0,C.jsx)(g,{title:`store.read() result`,"data-testid":`store-read-result`,result:e??{theme:`current`,value:O.current}})]})},play:async({canvas:e})=>{await w(e.getByTestId(`store-read-result`)).toHaveTextContent(`theme: current`),await w(e.getByTestId(`store-read-result`)).toHaveTextContent(`value: theme-current`)}},I=`theme-ls-thememap`,L={name:`themes: string value`,tags:[`props`],parameters:r({description:{story:`themes values can be a single string per theme.`}}),decorators:[o({content:(0,C.jsx)(`p`,{children:`Each theme maps to one string value.`})}),i({source:l`
                const themes = {
                    current: 'theme-current',
                    grayscale: 'theme-grayscale',
                    'high-contrast': 'theme-high-contrast'
                } as const

                const store = localStorageThemeStore(themes, { storageKey: 'theme' })
            `})],loaders:[()=>{window.localStorage.removeItem(I);let e=d(O,{storageKey:I});return e.write(u(O,`current`)),{store:e}}],render:(e,{loaded:{store:t}})=>{let n=t.read();return(0,C.jsx)(`div`,{className:`flex flex-col gap-4`,children:(0,C.jsx)(g,{title:`store.read() result`,"data-testid":`store-read-result`,result:n??{theme:`current`,value:O.current}})})},play:async({canvas:e})=>{await w(e.getByTestId(`store-read-result`)).toHaveTextContent(`theme: current`),await w(e.getByTestId(`store-read-result`)).toHaveTextContent(`value: theme-current`)}},R={current:`theme-current`,grayscale:[`theme-grayscale`,`app:bg-gray-100`],"high-contrast":`theme-high-contrast`},z={name:`themes: array values`,tags:[`props`],parameters:r({description:{story:`themes values can be string[]. Stored and retrieved value is the full array.`}}),decorators:[o({content:(0,C.jsxs)(`p`,{children:[`Each theme can map to `,(0,C.jsx)(`code`,{children:`string[]`}),`. `,(0,C.jsx)(`code`,{children:`ThemeResult.value`}),` persists the full array.`]})}),i({source:l`
                const themes = {
                    current: 'theme-current',
                    grayscale: ['theme-grayscale', 'app:bg-gray-100'],
                    'high-contrast': 'theme-high-contrast'
                } as const

                const store = localStorageThemeStore(themes, { storageKey: 'theme' })
            `})],loaders:[()=>{window.localStorage.removeItem(I);let e=d(R,{storageKey:I});return e.write(u(R,`grayscale`)),{store:e}}],render:(e,{loaded:{store:t}})=>{let n=t.read();return(0,C.jsx)(`div`,{className:`flex flex-col gap-4`,children:(0,C.jsx)(g,{title:`store.read() result`,"data-testid":`store-read-result`,result:n??{theme:`grayscale`,value:R.grayscale}})})},play:async({canvas:e})=>{await w(e.getByTestId(`store-read-result`)).toHaveTextContent(`theme: grayscale`),await w(e.getByTestId(`store-read-result`)).toHaveTextContent(`value: [theme-grayscale, app:bg-gray-100]`)}},B={light:`theme-light`,dark:{themeValue:`theme-dark`,contrast:`high`}},V={name:`themes: object value`,tags:[`props`],parameters:r({description:{story:`themes values can be { themeValue: string | string[] }. Extra props (e.g. contrast) are preserved when read from storage.`}}),decorators:[o({content:(0,C.jsxs)(`p`,{children:[`Each theme can map to `,(0,C.jsx)(`code`,{children:`{ themeValue, ...extra }`}),`. Stored and retrieved value preserves extra props for user metadata.`]})}),i({source:l`
                const themes = {
                    light: 'theme-light',
                    dark: { themeValue: 'theme-dark', contrast: 'high' }
                } as const

                const store = localStorageThemeStore(themes, { storageKey: 'theme' })
            `})],loaders:[()=>{window.localStorage.removeItem(I);let e=d(B,{storageKey:I});return e.write({theme:`dark`,value:{themeValue:`theme-dark`,contrast:`high`}}),{store:e}}],render:(e,{loaded:{store:t}})=>{let n=t.read();return(0,C.jsx)(`div`,{className:`flex flex-col gap-4`,children:(0,C.jsx)(g,{title:`store.read() result`,"data-testid":`store-read-result`,result:n??{theme:`dark`,value:B.dark}})})},play:async({canvas:e})=>{await w(e.getByTestId(`store-read-result`)).toHaveTextContent(`theme: dark`),await w(e.getByTestId(`store-read-result`)).toHaveTextContent(`theme-dark`),await w(e.getByTestId(`store-read-result`)).toHaveTextContent(`contrast`),await w(e.getByTestId(`store-read-result`)).toHaveTextContent(`high`)}},H={name:`read`,tags:[`props`],parameters:r({description:{story:`store.read() reads the current theme from localStorage.`}}),decorators:[o(),i({source:l`
                const store = localStorageThemeStore(themes, { storageKey: 'theme' })
                const result = store.read()
            `})],loaders:[()=>(d(O,{storageKey:k}).write(u(O,`grayscale`)),{})],render:()=>{let e=d(O,{storageKey:k}).read();return(0,C.jsx)(g,{title:`store.read() result`,"data-testid":`store-read-result`,result:e??{theme:`grayscale`,value:O.grayscale}})},play:async({canvas:e})=>{await w(e.getByTestId(`store-read-result`)).toHaveTextContent(`theme: grayscale`),await w(e.getByTestId(`store-read-result`)).toHaveTextContent(`value: theme-grayscale`)}},U={name:`read: undefined`,tags:[`props`],parameters:r({description:{story:`When nothing is stored at the key, store.read() returns undefined.`}}),decorators:[o(),i({source:l`
                const store = localStorageThemeStore(themes, { storageKey: 'theme-get' })
                const theme = store.read() // undefined when empty
            `})],loaders:[()=>(window.localStorage.removeItem(k),{})],render:()=>{let e=d(O,{storageKey:k}).read();return(0,C.jsx)(g,{title:`store.read() result`,"data-testid":`store-read-result`,result:e===void 0?{theme:void 0,value:void 0}:e})},play:async({canvas:e})=>{await w(e.getByTestId(`store-read-result`)).toHaveTextContent(`(undefined)`)}},W={tags:[`props`],parameters:r({description:{story:`store.write() persists the theme to localStorage.`}}),decorators:[o(),i({source:l`
                const store = localStorageThemeStore(themes, { storageKey: 'theme' })
                store.write(themeEntry(themes, 'high-contrast'))
            `})],loaders:[()=>(window.localStorage.removeItem(k),{})],render:()=>{let e=d(O,{storageKey:k}),[t,n]=(0,S.useState)(()=>e.read()?.theme??null);return(0,C.jsxs)(`div`,{className:`flex flex-col gap-4`,children:[(0,C.jsx)(`div`,{className:`flex flex-wrap gap-2`,children:Object.keys(O).map(t=>(0,C.jsxs)(m,{"data-testid":`write-${t}`,onPress:()=>{e.write(u(O,t)),n(t)},children:[`write(`,t,`)`]},t))}),(0,C.jsx)(g,{title:`store.read() after write`,"data-testid":`store-write-result`,result:t?{theme:t,value:O[t]}:{theme:`current`,value:O.current}})]})},play:async({canvas:e})=>{await T.click(e.getByTestId(`write-grayscale`)),await w(e.getByTestId(`store-write-result`)).toHaveTextContent(`theme: grayscale`),await w(e.getByTestId(`store-write-result`)).toHaveTextContent(`value: theme-grayscale`)}},G={name:`subscribe`,tags:[`props`],parameters:r({description:{story:`store.subscribe() calls the handler when storage changes (same-tab or cross-tab) (no initial notify).`}}),decorators:[o(),i({source:l`
                const store = localStorageThemeStore(themes, { storageKey: 'theme' })
                return store.subscribe((themeResult) => {
                    console.log('Theme:', themeResult?.theme, themeResult?.value)
                })
            `})],loaders:[()=>(d(O,{storageKey:k}).write(u(O,`grayscale`)),{})],render:()=>{let e=(0,S.useMemo)(()=>d(O,{storageKey:k}),[]),[t,n]=(0,S.useState)(void 0);(0,S.useEffect)(()=>e.subscribe(n),[e]);let r=t?.theme??`current`;return(0,C.jsxs)(`div`,{className:`flex flex-col gap-4`,children:[(0,C.jsxs)(`div`,{className:`flex flex-wrap gap-2`,children:[(0,C.jsx)(m,{"data-testid":`write-high-contrast`,onPress:()=>e.write(u(O,`high-contrast`)),children:`write('high-contrast')`}),(0,C.jsx)(m,{"data-testid":`write-current`,onPress:()=>e.write(u(O,`current`)),children:`write('current')`})]}),(0,C.jsx)(g,{title:`store.subscribe() receives`,"data-testid":`store-subscribe-result`,result:u(O,r)})]})},play:async({canvas:e})=>{await T.click(e.getByTestId(`write-high-contrast`)),await E(()=>w(e.getByTestId(`store-subscribe-result`)).toHaveTextContent(`high-contrast`)),await T.click(e.getByTestId(`write-current`)),await E(()=>w(e.getByTestId(`store-subscribe-result`)).toHaveTextContent(`current`))}},K={name:`subscribe: only when themeEntry changes`,tags:[`props`],parameters:r({description:{story:`The handler is only invoked when the resolved themeEntry changes. Writing the same theme again does not trigger the handler.`}}),decorators:[o(),i({source:l`
                const store = localStorageThemeStore(themes, { storageKey: 'theme' })
                store.subscribe((entry) => {
                    invocationCount++
                    setObserved(entry)
                })
                store.write(themeEntry(themes, 'grayscale')) // handler runs
                store.write(themeEntry(themes, 'grayscale')) // handler NOT run (same theme)
            `})],loaders:[()=>(window.localStorage.removeItem(k),{})],render:()=>{let e=(0,S.useMemo)(()=>d(O,{storageKey:k}),[]),[t,n]=(0,S.useState)(0),[r,i]=(0,S.useState)(null);(0,S.useEffect)(()=>e.subscribe(e=>{n(e=>e+1),i(e)}),[e]);let o=r?.theme??`(none)`;return(0,C.jsxs)(`div`,{className:`flex flex-col gap-4`,"data-testid":`subscribe-only-when-theme-changes`,children:[(0,C.jsx)(a,{title:`Handler invocations`,appearance:`output`,children:(0,C.jsx)(`pre`,{"data-testid":`invocation-count`,className:`font-mono`,children:t})}),(0,C.jsx)(a,{title:`Observed theme`,appearance:`output`,children:(0,C.jsx)(`pre`,{"data-testid":`observed-theme`,className:`font-mono`,children:o})}),(0,C.jsxs)(`div`,{className:`flex flex-wrap gap-2`,children:[(0,C.jsx)(m,{"data-testid":`write-grayscale-twice`,onPress:()=>{e.write(u(O,`grayscale`)),e.write(u(O,`grayscale`))},children:`write(grayscale) twice`}),(0,C.jsx)(m,{"data-testid":`write-high-contrast`,onPress:()=>e.write(u(O,`high-contrast`)),children:`write(high-contrast)`})]})]})},play:async({canvas:e})=>{await w(e.getByTestId(`invocation-count`)).toHaveTextContent(`0`),await T.click(e.getByTestId(`write-grayscale-twice`)),await E(()=>w(e.getByTestId(`invocation-count`)).toHaveTextContent(`1`)),await w(e.getByTestId(`observed-theme`)).toHaveTextContent(`grayscale`)}},q={name:`subscribe: unsubscribe`,tags:[`props`],parameters:r({description:{story:`After calling the function returned by subscribe(), further write() calls do not invoke the handler.`}}),decorators:[o(),i({source:l`
                const store = localStorageThemeStore(themes, { storageKey: 'theme' })
                const unsubscribe = store.subscribe((theme) => console.log(theme))
                store.write(themeEntry(themes, 'grayscale'))
                unsubscribe()
                store.write(themeResult('current', themes)) // handler not called
            `})],loaders:[()=>(window.localStorage.removeItem(k),{})],render:()=>{let e=(0,S.useMemo)(()=>d(O,{storageKey:k}),[]),[t,n]=(0,S.useState)(void 0),r=(0,S.useRef)(null);(0,S.useEffect)(()=>{if(!r.current)return r.current=e.subscribe(n),()=>{r.current?.(),r.current=null}},[e]);let i=t?.theme??`current`;return(0,C.jsxs)(`div`,{className:`flex flex-col gap-4`,children:[(0,C.jsxs)(`div`,{className:`flex flex-wrap gap-2`,children:[(0,C.jsx)(m,{"data-testid":`write-grayscale`,onPress:()=>e.write(u(O,`grayscale`)),children:`write('grayscale')`}),(0,C.jsx)(m,{"data-testid":`write-current`,onPress:()=>e.write(u(O,`current`)),children:`write('current')`}),(0,C.jsx)(m,{"data-testid":`unsubscribe`,onPress:()=>{r.current?.(),r.current=null},children:`unsubscribe()`})]}),(0,C.jsx)(g,{title:`store.subscribe() receives (frozen after unsubscribe)`,"data-testid":`store-subscribe-result`,result:u(O,i)})]})},play:async({canvas:e})=>{await T.click(e.getByTestId(`write-grayscale`)),await E(()=>w(e.getByTestId(`store-subscribe-result`)).toHaveTextContent(`grayscale`)),await T.click(e.getByTestId(`unsubscribe`)),await T.click(e.getByTestId(`write-current`)),await w(e.getByTestId(`store-subscribe-result`)).toHaveTextContent(`grayscale`)}},J={tags:[`source`],parameters:r({source:{code:y}}),decorators:[i()]},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
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
}`,...A.parameters?.docs?.source}}},M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
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
}`,...M.parameters?.docs?.source}}},P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
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
}`,...P.parameters?.docs?.source}}},F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
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
}`,...F.parameters?.docs?.source}}},L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`{
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
}`,...L.parameters?.docs?.source}}},z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`{
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
}`,...z.parameters?.docs?.source}}},V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`{
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
}`,...V.parameters?.docs?.source}}},H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`{
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
}`,...H.parameters?.docs?.source}}},U.parameters={...U.parameters,docs:{...U.parameters?.docs,source:{originalSource:`{
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
}`,...U.parameters?.docs?.source}}},W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`{
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
}`,...W.parameters?.docs?.source}}},G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`{
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
}`,...G.parameters?.docs?.source}}},K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`{
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
}`,...K.parameters?.docs?.source}}},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
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
}`,...q.parameters?.docs?.source}}},J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`{
  tags: ['source'],
  parameters: defineDocsParam({
    source: {
      code: source
    }
  }),
  decorators: [showSource()]
}`,...J.parameters?.docs?.source}}},Y=[`Playground`,`StoredValidationShapeMismatch`,`ParseOption`,`StorageKey`,`ThemeMapStringValue`,`ThemeMapArrayValues`,`ThemeMapObjectValue`,`Read`,`ReadWhenEmpty`,`Write`,`Subscribe`,`SubscribeOnlyWhenThemeChanges`,`SubscribeUnsubscribe`,`Source`]})))()}X();export{P as ParseOption,A as Playground,H as Read,U as ReadWhenEmpty,J as Source,F as StorageKey,M as StoredValidationShapeMismatch,G as Subscribe,K as SubscribeOnlyWhenThemeChanges,q as SubscribeUnsubscribe,z as ThemeMapArrayValues,V as ThemeMapObjectValue,L as ThemeMapStringValue,W as Write,Y as __namedExportsOrder,D as default};