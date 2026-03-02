import{j as t,d as l,w as g,s as h,S as Y,r as m}from"./iframe-CL66i86X.js";import{d as y}from"./dedent-BuYMbVyj.js";import{t as i}from"./theme-entry-D4S_RAMB.js";import{d as G}from"./dummy-theme-store-DcCfgetv.js";import{p as M}from"./parse-stored-theme-Dj4VCwi6.js";import{B as w}from"./button-BG3LR6CN.js";import{T}from"./theme-result-card-DH1s2_4l.js";import{T as D}from"./theme-store-demo-DgfLnZJE.js";import"./preload-helper-PPVm8Dsz.js";import"./resolve-class-name-CNcK3jLA.js";import"./append-id-Vsg144gU.js";function d(e,s){const{storageKey:c}=s;if(typeof window>"u"||!window.sessionStorage)return G;const a=new Set;let S=b()?.theme??void 0;function b(){const u=window.sessionStorage.getItem(c),p=M(e,u);if(p!==void 0)return i(e,p)}function x(){const u=b(),p=u?.theme??void 0;if(p!==S){S=p;for(const E of a)E(u)}}return{read:b,write(u){try{u===void 0?window.sessionStorage.removeItem(c):window.sessionStorage.setItem(c,JSON.stringify(u)),x()}catch{}},subscribe(u){a.add(u);const p=E=>{E.key===c&&E.storageArea===window.sessionStorage&&x()};return window.addEventListener("storage",p),()=>{a.delete(u),window.removeEventListener("storage",p)}}}}const W=`import { dummyThemeStore } from '../../../testing/theme/dummy-theme-store.ts'
import { parseStoredTheme } from '../../_utils/parse-stored-theme.ts'
import { themeEntry } from '../../theme-entry.ts'
import type { ThemeEntry } from '../../theme-entry.types.ts'
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
	options: { storageKey: string }
) {
	const { storageKey } = options

	if (typeof window === 'undefined' || !window.sessionStorage) {
		return dummyThemeStore satisfies ThemeStore<Themes>
	}

	const handlers = new Set<(theme: ThemeEntry<Themes> | undefined) => void>()
	let lastNotifiedKey: keyof Themes | undefined = read()?.theme ?? undefined

	function read() {
		const stored = window.sessionStorage.getItem(storageKey)
		const theme = parseStoredTheme(themes, stored)
		if (theme === undefined) return undefined
		return themeEntry(themes, theme)
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
`,{expect:o,userEvent:v,waitFor:f}=__STORYBOOK_MODULE_TEST__,ee={title:"theme/theme-store/sessionStorageThemeStore",tags:["func","version:next"],parameters:l({description:{component:"Theme store backed by sessionStorage. Persists per tab. Bakes themes at creation."}}),render:()=>t.jsx(t.Fragment,{})},r={current:"theme-current",next:"theme-next",grayscale:"theme-grayscale","high-contrast":"theme-high-contrast"},n="theme-ss-demo",K={tags:["playground"],parameters:l({description:{story:"Interactive demo: Read theme, write themes via buttons, and observe subscribe updates."}}),decorators:[g(),h({source:y`
                const store = sessionStorageThemeStore(themes, { storageKey: 'app-theme' })
                <ThemeStoreDemo2 store={store} themes={themes} />
            `})],loaders:[()=>(window.sessionStorage.removeItem(n),{})],render:()=>{const e=d(r,{storageKey:n});return t.jsx(D,{store:e,themes:r})},play:async({canvas:e})=>{await v.click(e.getByTestId("theme-store-demo-btn-write-grayscale")),await f(()=>o(e.getByTestId("theme-store-demo-observe")).toHaveTextContent("grayscale")),await o(e.getByTestId("theme-store-demo-observe")).toHaveTextContent("theme-grayscale")}},I={name:"storageKey",tags:["use-case","props"],decorators:[g({content:t.jsxs("p",{children:["Pass ",t.jsx("code",{children:"options.storageKey"})," to determine the sessionStorage key used for persistence per tab."]})}),h({source:y`
                const store = sessionStorageThemeStore(themes, { storageKey: 'app-theme' })
            `})],loaders:[()=>(d(r,{storageKey:n}).write(i(r,"current")),{})],render:()=>{const s=d(r,{storageKey:n}).read();return t.jsxs("div",{className:"flex flex-col gap-4",children:[t.jsx(Y,{title:"sessionStorage key",appearance:"output",children:t.jsx("code",{children:n})}),t.jsx(T,{title:"store.read() result","data-testid":"store-read-result",result:s??{theme:"current",value:r.current}})]})},play:async({canvas:e})=>{await o(e.getByTestId("store-read-result")).toHaveTextContent("theme: current"),await o(e.getByTestId("store-read-result")).toHaveTextContent("value: theme-current")}},P="theme-ss-thememap",C={name:"themes: string value",tags:["use-case","props"],parameters:l({description:{story:"themes values can be a single string per theme."}}),decorators:[g({content:t.jsx("p",{children:"Each theme maps to one string value."})}),h({source:y`
                const themes = {
                    current: 'theme-current',
                    grayscale: 'theme-grayscale',
                    'high-contrast': 'theme-high-contrast'
                } as const

                const store = sessionStorageThemeStore(themes, { storageKey: 'theme' })
            `})],loaders:[()=>{window.sessionStorage.removeItem(P);const e=d(r,{storageKey:P});return e.write(i(r,"current")),{store:e}}],render:(e,{loaded:{store:s}})=>{const c=s.read();return t.jsx("div",{className:"flex flex-col gap-4",children:t.jsx(T,{title:"store.read() result","data-testid":"store-read-result",result:c??{theme:"current",value:r.current}})})},play:async({canvas:e})=>{await o(e.getByTestId("store-read-result")).toHaveTextContent("theme: current"),await o(e.getByTestId("store-read-result")).toHaveTextContent("value: theme-current")}},N={current:"theme-current",grayscale:["theme-grayscale","app:bg-gray-100"],"high-contrast":"theme-high-contrast"},B={name:"themes: array values",tags:["use-case","props"],parameters:l({description:{story:"themes values can be string[]. Stored and retrieved value is the full array."}}),decorators:[g({content:t.jsxs("p",{children:["Each theme can map to ",t.jsx("code",{children:"string[]"}),". ",t.jsx("code",{children:"ThemeResult.value"})," persists the full array."]})}),h({source:y`
                const themes = {
                    current: 'theme-current',
                    grayscale: ['theme-grayscale', 'app:bg-gray-100'],
                    'high-contrast': 'theme-high-contrast'
                } as const

                const store = sessionStorageThemeStore(themes, { storageKey: 'theme' })
            `})],loaders:[()=>{window.sessionStorage.removeItem(P);const e=d(N,{storageKey:P});return e.write(i(N,"grayscale")),{store:e}}],render:(e,{loaded:{store:s}})=>{const c=s.read();return t.jsx("div",{className:"flex flex-col gap-4",children:t.jsx(T,{title:"store.read() result","data-testid":"store-read-result",result:c??{theme:"grayscale",value:N.grayscale}})})},play:async({canvas:e})=>{await o(e.getByTestId("store-read-result")).toHaveTextContent("theme: grayscale"),await o(e.getByTestId("store-read-result")).toHaveTextContent("value: [theme-grayscale, app:bg-gray-100]")}},R={name:"read",tags:["props"],parameters:l({description:{story:"store.read() reads the current theme from sessionStorage."}}),decorators:[g(),h({source:y`
                const store = sessionStorageThemeStore(themes, { storageKey: 'theme' })
                const result = store.read()
            `})],loaders:[()=>(d(r,{storageKey:n}).write(i(r,"grayscale")),{})],render:()=>{const s=d(r,{storageKey:n}).read();return t.jsx(T,{title:"store.read() result","data-testid":"store-read-result",result:s??{theme:"grayscale",value:r.grayscale}})},play:async({canvas:e})=>{await o(e.getByTestId("store-read-result")).toHaveTextContent("theme: grayscale"),await o(e.getByTestId("store-read-result")).toHaveTextContent("value: theme-grayscale")}},H={name:"read: undefined",tags:["props"],parameters:l({description:{story:"When nothing is stored at the key, store.read() returns undefined."}}),decorators:[g(),h({source:y`
                const store = sessionStorageThemeStore(themes, { storageKey: 'theme-get' })
                const theme = store.read() // undefined when empty
            `})],loaders:[()=>(window.sessionStorage.removeItem(n),{})],render:()=>{const s=d(r,{storageKey:n}).read();return t.jsx(T,{title:"store.read() result","data-testid":"store-read-result",result:s!==void 0?s:{theme:void 0,value:void 0}})},play:async({canvas:e})=>{await o(e.getByTestId("store-read-result")).toHaveTextContent("(undefined)")}},j={name:"write",tags:["props"],parameters:l({description:{story:"store.write() persists the theme to sessionStorage (per tab)."}}),decorators:[g(),h({source:y`
                const store = sessionStorageThemeStore(themes, { storageKey: 'theme' })
                store.write(themeEntry(themes, 'high-contrast'))
            `})],loaders:[()=>(window.sessionStorage.removeItem(n),{})],render:()=>{const e=d(r,{storageKey:n}),[s,c]=m.useState(()=>e.read()?.theme??null);return t.jsxs("div",{className:"flex flex-col gap-4",children:[t.jsx("div",{className:"flex flex-wrap gap-2",children:Object.keys(r).map(a=>t.jsxs(w,{"data-testid":`write-${a}`,onPress:()=>{e.write(i(r,a)),c(a)},children:["write(",a,")"]},a))}),t.jsx(T,{title:"store.read() after write","data-testid":"store-write-result",result:s?{theme:s,value:r[s]}:{theme:"current",value:r.current}})]})},play:async({canvas:e})=>{await v.click(e.getByTestId("write-grayscale")),await o(e.getByTestId("store-write-result")).toHaveTextContent("theme: grayscale"),await o(e.getByTestId("store-write-result")).toHaveTextContent("value: theme-grayscale")}},O={name:"subscribe",tags:["props"],parameters:l({description:{story:"store.subscribe() calls the handler when storage changes in same tab (no initial notify)."}}),decorators:[g(),h({source:y`
                const store = sessionStorageThemeStore(themes, { storageKey: 'theme' })
                return store.subscribe((themeResult) => {
                    console.log('Theme:', themeResult?.theme, themeResult?.value)
                })
            `})],loaders:[()=>(d(r,{storageKey:n}).write(i(r,"grayscale")),{})],render:()=>{const e=m.useMemo(()=>d(r,{storageKey:n}),[]),[s,c]=m.useState(void 0);m.useEffect(()=>e.subscribe(c),[e]);const a=s?.theme??"current";return t.jsxs("div",{className:"flex flex-col gap-4",children:[t.jsxs("div",{className:"flex flex-wrap gap-2",children:[t.jsx(w,{"data-testid":"write-high-contrast",onPress:()=>e.write(i(r,"high-contrast")),children:"write('high-contrast')"}),t.jsx(w,{"data-testid":"write-current",onPress:()=>e.write(i(r,"current")),children:"write('current')"})]}),t.jsx(T,{title:"store.subscribe() receives","data-testid":"store-subscribe-result",result:i(r,a)})]})},play:async({canvas:e})=>{await v.click(e.getByTestId("write-high-contrast")),await f(()=>o(e.getByTestId("store-subscribe-result")).toHaveTextContent("high-contrast")),await v.click(e.getByTestId("write-current")),await f(()=>o(e.getByTestId("store-subscribe-result")).toHaveTextContent("current"))}},k={name:"subscribe: only when themeEntry changes",tags:["props"],parameters:l({description:{story:"The handler is only invoked when the resolved themeEntry changes. Writing the same theme again does not trigger the handler."}}),decorators:[g(),h({source:y`
                const store = sessionStorageThemeStore(themes, { storageKey: 'theme' })
                store.subscribe((entry) => {
                    invocationCount++
                    setObserved(entry)
                })
                store.write(themeEntry(themes, 'grayscale')) // handler runs
                store.write(themeEntry(themes, 'grayscale')) // handler NOT run (same theme)
            `})],loaders:[()=>(window.sessionStorage.removeItem(n),{})],render:()=>{const e=m.useMemo(()=>d(r,{storageKey:n}),[]),[s,c]=m.useState(0),[a,S]=m.useState(null);m.useEffect(()=>e.subscribe(x=>{c(u=>u+1),S(x)}),[e]);const b=a?.theme??"(none)";return t.jsxs("div",{className:"flex flex-col gap-4","data-testid":"subscribe-only-when-theme-changes",children:[t.jsx(Y,{title:"Handler invocations",appearance:"output",children:t.jsx("pre",{"data-testid":"invocation-count",className:"font-mono",children:s})}),t.jsx(Y,{title:"Observed theme",appearance:"output",children:t.jsx("pre",{"data-testid":"observed-theme",className:"font-mono",children:b})}),t.jsxs("div",{className:"flex flex-wrap gap-2",children:[t.jsx(w,{"data-testid":"write-grayscale-twice",onPress:()=>{e.write(i(r,"grayscale")),e.write(i(r,"grayscale"))},children:"write(grayscale) twice"}),t.jsx(w,{"data-testid":"write-high-contrast",onPress:()=>e.write(i(r,"high-contrast")),children:"write(high-contrast)"})]})]})},play:async({canvas:e})=>{await o(e.getByTestId("invocation-count")).toHaveTextContent("0"),await v.click(e.getByTestId("write-grayscale-twice")),await f(()=>o(e.getByTestId("invocation-count")).toHaveTextContent("1")),await o(e.getByTestId("observed-theme")).toHaveTextContent("grayscale")}},_={name:"subscribe: unsubscribe",tags:["props"],parameters:l({description:{story:"After calling the function returned by subscribe(), further write() calls do not invoke the handler."}}),decorators:[g(),h({source:y`
                const store = sessionStorageThemeStore(themes, { storageKey: 'theme' })
                const unsubscribe = store.subscribe((theme) => console.log(theme))
                store.write(themeEntry(themes, 'grayscale'))
                unsubscribe()
                store.write(themeEntry(themes, 'current')) // handler not called
            `})],loaders:[()=>(window.sessionStorage.removeItem(n),{})],render:()=>{const e=m.useMemo(()=>d(r,{storageKey:n}),[]),[s,c]=m.useState(void 0),a=m.useRef(null);m.useEffect(()=>{if(!a.current)return a.current=e.subscribe(c),()=>{a.current?.(),a.current=null}},[e]);const S=s?.theme??"current";return t.jsxs("div",{className:"flex flex-col gap-4",children:[t.jsxs("div",{className:"flex flex-wrap gap-2",children:[t.jsx(w,{"data-testid":"write-grayscale",onPress:()=>e.write(i(r,"grayscale")),children:"write('grayscale')"}),t.jsx(w,{"data-testid":"write-current",onPress:()=>e.write(i(r,"current")),children:"write('current')"}),t.jsx(w,{"data-testid":"unsubscribe",onPress:()=>{a.current?.(),a.current=null},children:"unsubscribe()"})]}),t.jsx(T,{title:"store.subscribe() receives (frozen after unsubscribe)","data-testid":"store-subscribe-result",result:i(r,S)})]})},play:async({canvas:e})=>{await v.click(e.getByTestId("write-grayscale")),await f(()=>o(e.getByTestId("store-subscribe-result")).toHaveTextContent("grayscale")),await v.click(e.getByTestId("unsubscribe")),await v.click(e.getByTestId("write-current")),await o(e.getByTestId("store-subscribe-result")).toHaveTextContent("grayscale")}},A={tags:["source"],parameters:l({source:{code:W}}),decorators:[h()]};K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`{
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
}`,...K.parameters?.docs?.source}}};I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
  name: 'storageKey',
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
}`,...I.parameters?.docs?.source}}};C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
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
}`,...C.parameters?.docs?.source}}};B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
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
}`,...B.parameters?.docs?.source}}};R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`{
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
}`,...R.parameters?.docs?.source}}};H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`{
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
}`,...H.parameters?.docs?.source}}};j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
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
}`,...j.parameters?.docs?.source}}};O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
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
}`,...O.parameters?.docs?.source}}};k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
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
}`,...k.parameters?.docs?.source}}};_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
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
}`,..._.parameters?.docs?.source}}};A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  tags: ['source'],
  parameters: defineDocsParam({
    source: {
      code: source
    }
  }),
  decorators: [showSource()]
}`,...A.parameters?.docs?.source}}};const te=["Playground","StorageKey","ThemeMapStringValue","ThemeMapArrayValues","Read","ReadWhenEmpty","WriteStory","Subscribe","SubscribeOnlyWhenThemeChanges","SubscribeUnsubscribe","Source"];export{K as Playground,R as Read,H as ReadWhenEmpty,A as Source,I as StorageKey,O as Subscribe,k as SubscribeOnlyWhenThemeChanges,_ as SubscribeUnsubscribe,B as ThemeMapArrayValues,C as ThemeMapStringValue,j as WriteStory,te as __namedExportsOrder,ee as default};
