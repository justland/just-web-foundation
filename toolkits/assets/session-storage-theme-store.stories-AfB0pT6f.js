import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./react-B6tGW3fj.js";import{a as n}from"./chunk-W22LQPXL-BSpKiHdn.js";import{a as r,c as i,i as a,l as o,s}from"./iframe-C-caXvtV.js";import{n as c,t as l}from"./dedent-DQaCLeUO.js";import{n as u}from"./theme-entry-Cs_OPpJC.js";import{i as d,n as f,r as p,t as m}from"./write-session-storage-B6yacOdK.js";import{n as h,t as g}from"./dummy-theme-store-D8K5nRD9.js";import{n as _,t as v}from"./button-BQi9n5XX.js";import{n as y,t as b}from"./theme-result-card-CJBN2MES.js";import{n as x,t as S}from"./theme-store-demo-Bb76mXKJ.js";function C(e,t){let{storageKey:n,parse:r,stringify:i,onError:a}=t;if(!window?.sessionStorage)return g;let o=new Set,s=c()?.theme??void 0;function c(){return d(e,n,{parse:r})}function l(){let e=c(),t=e?.theme??void 0;if(t!==s){s=t;for(let t of o)t(e)}}return{read:c,write(t){f(e,n,t,{stringify:i,onError:a}),l()},subscribe(e){o.add(e);let t=e=>{e.key===n&&e.storageArea===window.sessionStorage&&l()};return window.addEventListener(`storage`,t),()=>{o.delete(e),window.removeEventListener(`storage`,t)}}}}function w(){return(w=e((()=>{h(),p(),m()})))()}var T;function E(){return(E=e((()=>{T=`import { dummyThemeStore } from '../../../testing/theme/dummy-theme-store.ts'
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
`})))()}function D(e,t){let n;try{n=t?JSON.parse(t):void 0}catch{return}if(!n?.theme||typeof n.theme!=`string`||!(n.theme in e))return;let r=n.theme;return{theme:r,value:e[r]}}var O,k,A,j,M,N,P,F,I,L,R,z,B,V,H,U,W,G,K,q,J,Y,X,Z;function Q(){return(Q=e((()=>{w(),s(),c(),O=t(),_(),y(),x(),E(),k=n(),{expect:A,userEvent:j,waitFor:M}=__STORYBOOK_MODULE_TEST__,N={title:`theme/theme-store/sessionStorageThemeStore`,tags:[`func`,`version:2.0`],parameters:r({description:{component:`Theme store backed by sessionStorage. Persists per tab. Bakes themes at creation.`}}),render:()=>(0,k.jsx)(k.Fragment,{})},P={current:`theme-current`,next:`theme-next`,grayscale:`theme-grayscale`,"high-contrast":`theme-high-contrast`},F=`theme-ss-demo`,I={tags:[`playground`],parameters:r({description:{story:`Interactive demo: Read theme, write themes via buttons, and observe subscribe updates.`}}),decorators:[o(),i({source:l`
                const store = sessionStorageThemeStore(themes, { storageKey: 'app-theme' })
                <ThemeStoreDemo2 store={store} themes={themes} />
            `})],loaders:[()=>(window.sessionStorage.removeItem(F),{})],render:()=>{let e=C(P,{storageKey:F});return(0,k.jsx)(S,{store:e,themes:P})},play:async({canvas:e})=>{await j.click(e.getByTestId(`theme-store-demo-btn-write-grayscale`)),await M(()=>A(e.getByTestId(`theme-store-demo-observe`)).toHaveTextContent(`grayscale`)),await A(e.getByTestId(`theme-store-demo-observe`)).toHaveTextContent(`theme-grayscale`)}},L=`theme-ss-parse`,R={name:`options.parse`,tags:[`props`,`use-case`],decorators:[o({content:(0,k.jsxs)(k.Fragment,{children:[(0,k.jsxs)(`p`,{children:[`The `,(0,k.jsx)(`code`,{children:`options.parse`}),` allows you to provide a custom parse function to parse the stored value to a specific structure you wanted. Use it when migrating from legacy formats, supporting custom serialization, or relaxing validation.`]}),(0,k.jsxs)(`p`,{children:[`The example below pre-seeds the sessionStorage with legacy format`,` `,(0,k.jsx)(`code`,{children:`{ theme: "grayscale" }`}),` (no value).`]})]})}),i({source:l`
                const customParse = (themes, value) => {
                    const parsed = JSON.parse(value || '{}')
                    if (!parsed?.theme || !(parsed.theme in themes)) return undefined
                    return { theme: parsed.theme, value: themes[parsed.theme] }
                }
                const store = sessionStorageThemeStore(themes, { storageKey: 'theme', parse: customParse })
            `})],loaders:[()=>(window.sessionStorage.setItem(L,JSON.stringify({theme:`grayscale`})),{})],render:()=>{let e=C(P,{storageKey:L,parse:D}).read();return(0,k.jsx)(`div`,{className:`flex flex-col gap-4`,children:(0,k.jsx)(b,{title:`store.read() with custom parse`,"data-testid":`store-read-result`,result:e??{theme:`grayscale`,value:P.grayscale}})})},play:async({canvas:e})=>{await A(e.getByTestId(`store-read-result`)).toHaveTextContent(`theme: grayscale`),await A(e.getByTestId(`store-read-result`)).toHaveTextContent(`value: theme-grayscale`)}},z={name:`options.storageKey`,tags:[`use-case`,`props`],decorators:[o({content:(0,k.jsxs)(`p`,{children:[`Pass `,(0,k.jsx)(`code`,{children:`options.storageKey`}),` to determine the sessionStorage key used for persistence per tab.`]})}),i({source:l`
                const store = sessionStorageThemeStore(themes, { storageKey: 'app-theme' })
            `})],loaders:[()=>(C(P,{storageKey:F}).write(u(P,`current`)),{})],render:()=>{let e=C(P,{storageKey:F}).read();return(0,k.jsxs)(`div`,{className:`flex flex-col gap-4`,children:[(0,k.jsx)(a,{title:`sessionStorage key`,appearance:`output`,children:(0,k.jsx)(`code`,{children:F})}),(0,k.jsx)(b,{title:`store.read() result`,"data-testid":`store-read-result`,result:e??{theme:`current`,value:P.current}})]})},play:async({canvas:e})=>{await A(e.getByTestId(`store-read-result`)).toHaveTextContent(`theme: current`),await A(e.getByTestId(`store-read-result`)).toHaveTextContent(`value: theme-current`)}},B=`theme-ss-thememap`,V={name:`themes: string value`,tags:[`use-case`,`props`],parameters:r({description:{story:`themes values can be a single string per theme.`}}),decorators:[o({content:(0,k.jsx)(`p`,{children:`Each theme maps to one string value.`})}),i({source:l`
                const themes = {
                    current: 'theme-current',
                    grayscale: 'theme-grayscale',
                    'high-contrast': 'theme-high-contrast'
                } as const

                const store = sessionStorageThemeStore(themes, { storageKey: 'theme' })
            `})],loaders:[()=>{window.sessionStorage.removeItem(B);let e=C(P,{storageKey:B});return e.write(u(P,`current`)),{store:e}}],render:(e,{loaded:{store:t}})=>{let n=t.read();return(0,k.jsx)(`div`,{className:`flex flex-col gap-4`,children:(0,k.jsx)(b,{title:`store.read() result`,"data-testid":`store-read-result`,result:n??{theme:`current`,value:P.current}})})},play:async({canvas:e})=>{await A(e.getByTestId(`store-read-result`)).toHaveTextContent(`theme: current`),await A(e.getByTestId(`store-read-result`)).toHaveTextContent(`value: theme-current`)}},H={current:`theme-current`,grayscale:[`theme-grayscale`,`app:bg-gray-100`],"high-contrast":`theme-high-contrast`},U={name:`themes: array values`,tags:[`use-case`,`props`],parameters:r({description:{story:`themes values can be string[]. Stored and retrieved value is the full array.`}}),decorators:[o({content:(0,k.jsxs)(`p`,{children:[`Each theme can map to `,(0,k.jsx)(`code`,{children:`string[]`}),`. `,(0,k.jsx)(`code`,{children:`ThemeResult.value`}),` persists the full array.`]})}),i({source:l`
                const themes = {
                    current: 'theme-current',
                    grayscale: ['theme-grayscale', 'app:bg-gray-100'],
                    'high-contrast': 'theme-high-contrast'
                } as const

                const store = sessionStorageThemeStore(themes, { storageKey: 'theme' })
            `})],loaders:[()=>{window.sessionStorage.removeItem(B);let e=C(H,{storageKey:B});return e.write(u(H,`grayscale`)),{store:e}}],render:(e,{loaded:{store:t}})=>{let n=t.read();return(0,k.jsx)(`div`,{className:`flex flex-col gap-4`,children:(0,k.jsx)(b,{title:`store.read() result`,"data-testid":`store-read-result`,result:n??{theme:`grayscale`,value:H.grayscale}})})},play:async({canvas:e})=>{await A(e.getByTestId(`store-read-result`)).toHaveTextContent(`theme: grayscale`),await A(e.getByTestId(`store-read-result`)).toHaveTextContent(`value: [theme-grayscale, app:bg-gray-100]`)}},W={name:`read`,tags:[`props`],parameters:r({description:{story:`store.read() reads the current theme from sessionStorage.`}}),decorators:[o(),i({source:l`
                const store = sessionStorageThemeStore(themes, { storageKey: 'theme' })
                const result = store.read()
            `})],loaders:[()=>(C(P,{storageKey:F}).write(u(P,`grayscale`)),{})],render:()=>{let e=C(P,{storageKey:F}).read();return(0,k.jsx)(b,{title:`store.read() result`,"data-testid":`store-read-result`,result:e??{theme:`grayscale`,value:P.grayscale}})},play:async({canvas:e})=>{await A(e.getByTestId(`store-read-result`)).toHaveTextContent(`theme: grayscale`),await A(e.getByTestId(`store-read-result`)).toHaveTextContent(`value: theme-grayscale`)}},G={name:`read: undefined`,tags:[`props`],parameters:r({description:{story:`When nothing is stored at the key, store.read() returns undefined.`}}),decorators:[o(),i({source:l`
                const store = sessionStorageThemeStore(themes, { storageKey: 'theme-get' })
                const theme = store.read() // undefined when empty
            `})],loaders:[()=>(window.sessionStorage.removeItem(F),{})],render:()=>{let e=C(P,{storageKey:F}).read();return(0,k.jsx)(b,{title:`store.read() result`,"data-testid":`store-read-result`,result:e===void 0?{theme:void 0,value:void 0}:e})},play:async({canvas:e})=>{await A(e.getByTestId(`store-read-result`)).toHaveTextContent(`(undefined)`)}},K={name:`write`,tags:[`props`],parameters:r({description:{story:`store.write() persists the theme to sessionStorage (per tab).`}}),decorators:[o(),i({source:l`
                const store = sessionStorageThemeStore(themes, { storageKey: 'theme' })
                store.write(themeEntry(themes, 'high-contrast'))
            `})],loaders:[()=>(window.sessionStorage.removeItem(F),{})],render:()=>{let e=C(P,{storageKey:F}),[t,n]=(0,O.useState)(()=>e.read()?.theme??null);return(0,k.jsxs)(`div`,{className:`flex flex-col gap-4`,children:[(0,k.jsx)(`div`,{className:`flex flex-wrap gap-2`,children:Object.keys(P).map(t=>(0,k.jsxs)(v,{"data-testid":`write-${t}`,onPress:()=>{e.write(u(P,t)),n(t)},children:[`write(`,t,`)`]},t))}),(0,k.jsx)(b,{title:`store.read() after write`,"data-testid":`store-write-result`,result:t?{theme:t,value:P[t]}:{theme:`current`,value:P.current}})]})},play:async({canvas:e})=>{await j.click(e.getByTestId(`write-grayscale`)),await A(e.getByTestId(`store-write-result`)).toHaveTextContent(`theme: grayscale`),await A(e.getByTestId(`store-write-result`)).toHaveTextContent(`value: theme-grayscale`)}},q={name:`subscribe`,tags:[`props`],parameters:r({description:{story:`store.subscribe() calls the handler when storage changes in same tab (no initial notify).`}}),decorators:[o(),i({source:l`
                const store = sessionStorageThemeStore(themes, { storageKey: 'theme' })
                return store.subscribe((themeResult) => {
                    console.log('Theme:', themeResult?.theme, themeResult?.value)
                })
            `})],loaders:[()=>(C(P,{storageKey:F}).write(u(P,`grayscale`)),{})],render:()=>{let e=(0,O.useMemo)(()=>C(P,{storageKey:F}),[]),[t,n]=(0,O.useState)(void 0);(0,O.useEffect)(()=>e.subscribe(n),[e]);let r=t?.theme??`current`;return(0,k.jsxs)(`div`,{className:`flex flex-col gap-4`,children:[(0,k.jsxs)(`div`,{className:`flex flex-wrap gap-2`,children:[(0,k.jsx)(v,{"data-testid":`write-high-contrast`,onPress:()=>e.write(u(P,`high-contrast`)),children:`write('high-contrast')`}),(0,k.jsx)(v,{"data-testid":`write-current`,onPress:()=>e.write(u(P,`current`)),children:`write('current')`})]}),(0,k.jsx)(b,{title:`store.subscribe() receives`,"data-testid":`store-subscribe-result`,result:u(P,r)})]})},play:async({canvas:e})=>{await j.click(e.getByTestId(`write-high-contrast`)),await M(()=>A(e.getByTestId(`store-subscribe-result`)).toHaveTextContent(`high-contrast`)),await j.click(e.getByTestId(`write-current`)),await M(()=>A(e.getByTestId(`store-subscribe-result`)).toHaveTextContent(`current`))}},J={name:`subscribe: only when themeEntry changes`,tags:[`props`],parameters:r({description:{story:`The handler is only invoked when the resolved themeEntry changes. Writing the same theme again does not trigger the handler.`}}),decorators:[o(),i({source:l`
                const store = sessionStorageThemeStore(themes, { storageKey: 'theme' })
                store.subscribe((entry) => {
                    invocationCount++
                    setObserved(entry)
                })
                store.write(themeEntry(themes, 'grayscale')) // handler runs
                store.write(themeEntry(themes, 'grayscale')) // handler NOT run (same theme)
            `})],loaders:[()=>(window.sessionStorage.removeItem(F),{})],render:()=>{let e=(0,O.useMemo)(()=>C(P,{storageKey:F}),[]),[t,n]=(0,O.useState)(0),[r,i]=(0,O.useState)(null);(0,O.useEffect)(()=>e.subscribe(e=>{n(e=>e+1),i(e)}),[e]);let o=r?.theme??`(none)`;return(0,k.jsxs)(`div`,{className:`flex flex-col gap-4`,"data-testid":`subscribe-only-when-theme-changes`,children:[(0,k.jsx)(a,{title:`Handler invocations`,appearance:`output`,children:(0,k.jsx)(`pre`,{"data-testid":`invocation-count`,className:`font-mono`,children:t})}),(0,k.jsx)(a,{title:`Observed theme`,appearance:`output`,children:(0,k.jsx)(`pre`,{"data-testid":`observed-theme`,className:`font-mono`,children:o})}),(0,k.jsxs)(`div`,{className:`flex flex-wrap gap-2`,children:[(0,k.jsx)(v,{"data-testid":`write-grayscale-twice`,onPress:()=>{e.write(u(P,`grayscale`)),e.write(u(P,`grayscale`))},children:`write(grayscale) twice`}),(0,k.jsx)(v,{"data-testid":`write-high-contrast`,onPress:()=>e.write(u(P,`high-contrast`)),children:`write(high-contrast)`})]})]})},play:async({canvas:e})=>{await A(e.getByTestId(`invocation-count`)).toHaveTextContent(`0`),await j.click(e.getByTestId(`write-grayscale-twice`)),await M(()=>A(e.getByTestId(`invocation-count`)).toHaveTextContent(`1`)),await A(e.getByTestId(`observed-theme`)).toHaveTextContent(`grayscale`)}},Y={name:`subscribe: unsubscribe`,tags:[`props`],parameters:r({description:{story:`After calling the function returned by subscribe(), further write() calls do not invoke the handler.`}}),decorators:[o(),i({source:l`
                const store = sessionStorageThemeStore(themes, { storageKey: 'theme' })
                const unsubscribe = store.subscribe((theme) => console.log(theme))
                store.write(themeEntry(themes, 'grayscale'))
                unsubscribe()
                store.write(themeEntry(themes, 'current')) // handler not called
            `})],loaders:[()=>(window.sessionStorage.removeItem(F),{})],render:()=>{let e=(0,O.useMemo)(()=>C(P,{storageKey:F}),[]),[t,n]=(0,O.useState)(void 0),r=(0,O.useRef)(null);(0,O.useEffect)(()=>{if(!r.current)return r.current=e.subscribe(n),()=>{r.current?.(),r.current=null}},[e]);let i=t?.theme??`current`;return(0,k.jsxs)(`div`,{className:`flex flex-col gap-4`,children:[(0,k.jsxs)(`div`,{className:`flex flex-wrap gap-2`,children:[(0,k.jsx)(v,{"data-testid":`write-grayscale`,onPress:()=>e.write(u(P,`grayscale`)),children:`write('grayscale')`}),(0,k.jsx)(v,{"data-testid":`write-current`,onPress:()=>e.write(u(P,`current`)),children:`write('current')`}),(0,k.jsx)(v,{"data-testid":`unsubscribe`,onPress:()=>{r.current?.(),r.current=null},children:`unsubscribe()`})]}),(0,k.jsx)(b,{title:`store.subscribe() receives (frozen after unsubscribe)`,"data-testid":`store-subscribe-result`,result:u(P,i)})]})},play:async({canvas:e})=>{await j.click(e.getByTestId(`write-grayscale`)),await M(()=>A(e.getByTestId(`store-subscribe-result`)).toHaveTextContent(`grayscale`)),await j.click(e.getByTestId(`unsubscribe`)),await j.click(e.getByTestId(`write-current`)),await A(e.getByTestId(`store-subscribe-result`)).toHaveTextContent(`grayscale`)}},X={tags:[`source`],parameters:r({source:{code:T}}),decorators:[i()]},I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
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
}`,...I.parameters?.docs?.source}}},R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`{
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
}`,...R.parameters?.docs?.source}}},z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`{
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
}`,...z.parameters?.docs?.source}}},V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`{
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
}`,...V.parameters?.docs?.source}}},U.parameters={...U.parameters,docs:{...U.parameters?.docs,source:{originalSource:`{
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
}`,...U.parameters?.docs?.source}}},W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`{
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
}`,...W.parameters?.docs?.source}}},G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`{
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
}`,...G.parameters?.docs?.source}}},K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`{
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
}`,...K.parameters?.docs?.source}}},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
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
}`,...q.parameters?.docs?.source}}},J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`{
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
}`,...J.parameters?.docs?.source}}},Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`{
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
}`,...Y.parameters?.docs?.source}}},X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`{
  tags: ['source'],
  parameters: defineDocsParam({
    source: {
      code: source
    }
  }),
  decorators: [showSource()]
}`,...X.parameters?.docs?.source}}},Z=[`Playground`,`ParseOption`,`StorageKey`,`ThemeMapStringValue`,`ThemeMapArrayValues`,`Read`,`ReadWhenEmpty`,`WriteStory`,`Subscribe`,`SubscribeOnlyWhenThemeChanges`,`SubscribeUnsubscribe`,`Source`]})))()}Q();export{R as ParseOption,I as Playground,W as Read,G as ReadWhenEmpty,X as Source,z as StorageKey,q as Subscribe,J as SubscribeOnlyWhenThemeChanges,Y as SubscribeUnsubscribe,U as ThemeMapArrayValues,V as ThemeMapStringValue,K as WriteStory,Z as __namedExportsOrder,N as default};