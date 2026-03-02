import{j as t,d as u,w as h,s as m,S as _,r as i}from"./iframe-BS47E7d3.js";import{d as g}from"./dedent-BuYMbVyj.js";import{t as c}from"./theme-entry-D4S_RAMB.js";import{l}from"./local-storage-theme-store-DEFWor3J.js";import{B as y}from"./button-BqAxTSlJ.js";import{T as w}from"./theme-result-card-CHsb_TNs.js";import{T as N}from"./theme-store-demo-oUAkYvvT.js";import"./preload-helper-PPVm8Dsz.js";import"./dummy-theme-store-DcCfgetv.js";import"./parse-stored-theme-Dj4VCwi6.js";const Y=`import { dummyThemeStore } from '../../../testing/theme/dummy-theme-store.ts'
import { parseStoredTheme } from '../../_utils/parse-stored-theme.ts'
import { themeEntry } from '../../theme-entry.ts'
import type { ThemeEntry } from '../../theme-entry.types.ts'
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
	options: { storageKey: string }
) {
	const { storageKey } = options

	if (typeof window === 'undefined' || !window.localStorage) {
		return dummyThemeStore satisfies ThemeStore<Themes>
	}

	const handlers = new Set<(theme: ThemeEntry<Themes> | undefined) => void>()
	let lastNotifiedKey: keyof Themes | undefined = read()?.theme ?? undefined

	function read() {
		const stored = window.localStorage.getItem(storageKey)
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
					window.localStorage.removeItem(storageKey)
				} else {
					window.localStorage.setItem(storageKey, JSON.stringify(entry))
				}
				notify()
			} catch {
				// Ignore quota or other errors
			}
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
`,{expect:a,userEvent:p,waitFor:T}=__STORYBOOK_MODULE_TEST__,q={title:"theme/theme-store/localStorageThemeStore",tags:["func","version:1.0"],parameters:u({description:{component:"Theme store backed by localStorage. Persists across sessions; cross-tab sync via StorageEvent. Bakes themes at creation."}}),render:()=>t.jsx(t.Fragment,{})},r={current:"theme-current",next:"theme-next",grayscale:"theme-grayscale","high-contrast":"theme-high-contrast"},n="theme-ls-demo",v={tags:["playground"],parameters:u({description:{story:"Interactive demo: Read theme, write themes via buttons, and observe subscribe updates."}}),decorators:[h(),m({source:g`
                const store = localStorageThemeStore(themes, { storageKey: 'app-theme' })
                <ThemeStoreDemo2 store={store} themes={themes} />
            `})],loaders:[()=>(window.localStorage.removeItem(n),{})],render:()=>{const e=l(r,{storageKey:n});return t.jsx(N,{store:e,themes:r})},play:async({canvas:e})=>{await p.click(e.getByTestId("theme-store-demo-btn-write-grayscale")),await T(()=>a(e.getByTestId("theme-store-demo-observe")).toHaveTextContent("grayscale")),await a(e.getByTestId("theme-store-demo-observe")).toHaveTextContent("theme-grayscale")}},S={name:"storageKey",tags:["use-case","props"],decorators:[h({content:t.jsxs("p",{children:["Pass ",t.jsx("code",{children:"options.storageKey"})," to determine the localStorage key used for persistence."]})}),m({source:g`
                const store = localStorageThemeStore(themes, { storageKey: 'app-theme' })
            `})],loaders:[()=>(l(r,{storageKey:n}).write(c(r,"current")),{})],render:()=>{const s=l(r,{storageKey:n}).read();return t.jsxs("div",{className:"flex flex-col gap-4",children:[t.jsx(_,{title:"localStorage key",appearance:"output",children:t.jsx("code",{children:n})}),t.jsx(w,{title:"store.read() result","data-testid":"store-read-result",result:s??{theme:"current",value:r.current}})]})},play:async({canvas:e})=>{await a(e.getByTestId("store-read-result")).toHaveTextContent("theme: current"),await a(e.getByTestId("store-read-result")).toHaveTextContent("value: theme-current")}},H="theme-ls-thememap",b={name:"themes: string value",tags:["use-case","props"],parameters:u({description:{story:"themes values can be a single string per theme."}}),decorators:[h({content:t.jsx("p",{children:"Each theme maps to one string value."})}),m({source:g`
                const themes = {
                    current: 'theme-current',
                    grayscale: 'theme-grayscale',
                    'high-contrast': 'theme-high-contrast'
                } as const

                const store = localStorageThemeStore(themes, { storageKey: 'theme' })
            `})],loaders:[()=>{window.localStorage.removeItem(H);const e=l(r,{storageKey:H});return e.write(c(r,"current")),{store:e}}],render:(e,{loaded:{store:s}})=>{const d=s.read();return t.jsx("div",{className:"flex flex-col gap-4",children:t.jsx(w,{title:"store.read() result","data-testid":"store-read-result",result:d??{theme:"current",value:r.current}})})},play:async({canvas:e})=>{await a(e.getByTestId("store-read-result")).toHaveTextContent("theme: current"),await a(e.getByTestId("store-read-result")).toHaveTextContent("value: theme-current")}},O={current:"theme-current",grayscale:["theme-grayscale","app:bg-gray-100"],"high-contrast":"theme-high-contrast"},f={name:"themes: array values",tags:["use-case","props"],parameters:u({description:{story:"themes values can be string[]. Stored and retrieved value is the full array."}}),decorators:[h({content:t.jsxs("p",{children:["Each theme can map to ",t.jsx("code",{children:"string[]"}),". ",t.jsx("code",{children:"ThemeResult.value"})," persists the full array."]})}),m({source:g`
                const themes = {
                    current: 'theme-current',
                    grayscale: ['theme-grayscale', 'app:bg-gray-100'],
                    'high-contrast': 'theme-high-contrast'
                } as const

                const store = localStorageThemeStore(themes, { storageKey: 'theme' })
            `})],loaders:[()=>{window.localStorage.removeItem(H);const e=l(O,{storageKey:H});return e.write(c(O,"grayscale")),{store:e}}],render:(e,{loaded:{store:s}})=>{const d=s.read();return t.jsx("div",{className:"flex flex-col gap-4",children:t.jsx(w,{title:"store.read() result","data-testid":"store-read-result",result:d??{theme:"grayscale",value:O.grayscale}})})},play:async({canvas:e})=>{await a(e.getByTestId("store-read-result")).toHaveTextContent("theme: grayscale"),await a(e.getByTestId("store-read-result")).toHaveTextContent("value: [theme-grayscale, app:bg-gray-100]")}},x={name:"read",tags:["props"],parameters:u({description:{story:"store.read() reads the current theme from localStorage."}}),decorators:[h(),m({source:g`
                const store = localStorageThemeStore(themes, { storageKey: 'theme' })
                const result = store.read()
            `})],loaders:[()=>(l(r,{storageKey:n}).write(c(r,"grayscale")),{})],render:()=>{const s=l(r,{storageKey:n}).read();return t.jsx(w,{title:"store.read() result","data-testid":"store-read-result",result:s??{theme:"grayscale",value:r.grayscale}})},play:async({canvas:e})=>{await a(e.getByTestId("store-read-result")).toHaveTextContent("theme: grayscale"),await a(e.getByTestId("store-read-result")).toHaveTextContent("value: theme-grayscale")}},E={name:"read: undefined",tags:["props"],parameters:u({description:{story:"When nothing is stored at the key, store.read() returns undefined."}}),decorators:[h(),m({source:g`
                const store = localStorageThemeStore(themes, { storageKey: 'theme-get' })
                const theme = store.read() // undefined when empty
            `})],loaders:[()=>(window.localStorage.removeItem(n),{})],render:()=>{const s=l(r,{storageKey:n}).read();return t.jsx(w,{title:"store.read() result","data-testid":"store-read-result",result:s!==void 0?s:{theme:void 0,value:void 0}})},play:async({canvas:e})=>{await a(e.getByTestId("store-read-result")).toHaveTextContent("(undefined)")}},K={tags:["props"],parameters:u({description:{story:"store.write() persists the theme to localStorage."}}),decorators:[h(),m({source:g`
                const store = localStorageThemeStore(themes, { storageKey: 'theme' })
                store.write(themeEntry(themes, 'high-contrast'))
            `})],loaders:[()=>(window.localStorage.removeItem(n),{})],render:()=>{const e=l(r,{storageKey:n}),[s,d]=i.useState(()=>e.read()?.theme??null);return t.jsxs("div",{className:"flex flex-col gap-4",children:[t.jsx("div",{className:"flex flex-wrap gap-2",children:Object.keys(r).map(o=>t.jsxs(y,{"data-testid":`write-${o}`,onPress:()=>{e.write(c(r,o)),d(o)},children:["write(",o,")"]},o))}),t.jsx(w,{title:"store.read() after write","data-testid":"store-write-result",result:s?{theme:s,value:r[s]}:{theme:"current",value:r.current}})]})},play:async({canvas:e})=>{await p.click(e.getByTestId("write-grayscale")),await a(e.getByTestId("store-write-result")).toHaveTextContent("theme: grayscale"),await a(e.getByTestId("store-write-result")).toHaveTextContent("value: theme-grayscale")}},C={name:"subscribe",tags:["props"],parameters:u({description:{story:"store.subscribe() calls the handler when storage changes (same-tab or cross-tab) (no initial notify)."}}),decorators:[h(),m({source:g`
                const store = localStorageThemeStore(themes, { storageKey: 'theme' })
                return store.subscribe((themeResult) => {
                    console.log('Theme:', themeResult?.theme, themeResult?.value)
                })
            `})],loaders:[()=>(l(r,{storageKey:n}).write(c(r,"grayscale")),{})],render:()=>{const e=i.useMemo(()=>l(r,{storageKey:n}),[]),[s,d]=i.useState(void 0);i.useEffect(()=>e.subscribe(d),[e]);const o=s?.theme??"current";return t.jsxs("div",{className:"flex flex-col gap-4",children:[t.jsxs("div",{className:"flex flex-wrap gap-2",children:[t.jsx(y,{"data-testid":"write-high-contrast",onPress:()=>e.write(c(r,"high-contrast")),children:"write('high-contrast')"}),t.jsx(y,{"data-testid":"write-current",onPress:()=>e.write(c(r,"current")),children:"write('current')"})]}),t.jsx(w,{title:"store.subscribe() receives","data-testid":"store-subscribe-result",result:c(r,o)})]})},play:async({canvas:e})=>{await p.click(e.getByTestId("write-high-contrast")),await T(()=>a(e.getByTestId("store-subscribe-result")).toHaveTextContent("high-contrast")),await p.click(e.getByTestId("write-current")),await T(()=>a(e.getByTestId("store-subscribe-result")).toHaveTextContent("current"))}},I={name:"subscribe: only when themeEntry changes",tags:["props"],parameters:u({description:{story:"The handler is only invoked when the resolved themeEntry changes. Writing the same theme again does not trigger the handler."}}),decorators:[h(),m({source:g`
                const store = localStorageThemeStore(themes, { storageKey: 'theme' })
                store.subscribe((entry) => {
                    invocationCount++
                    setObserved(entry)
                })
                store.write(themeEntry(themes, 'grayscale')) // handler runs
                store.write(themeEntry(themes, 'grayscale')) // handler NOT run (same theme)
            `})],loaders:[()=>(window.localStorage.removeItem(n),{})],render:()=>{const e=i.useMemo(()=>l(r,{storageKey:n}),[]),[s,d]=i.useState(0),[o,j]=i.useState(null);i.useEffect(()=>e.subscribe(P=>{d(A=>A+1),j(P)}),[e]);const k=o?.theme??"(none)";return t.jsxs("div",{className:"flex flex-col gap-4","data-testid":"subscribe-only-when-theme-changes",children:[t.jsx(_,{title:"Handler invocations",appearance:"output",children:t.jsx("pre",{"data-testid":"invocation-count",className:"font-mono",children:s})}),t.jsx(_,{title:"Observed theme",appearance:"output",children:t.jsx("pre",{"data-testid":"observed-theme",className:"font-mono",children:k})}),t.jsxs("div",{className:"flex flex-wrap gap-2",children:[t.jsx(y,{"data-testid":"write-grayscale-twice",onPress:()=>{e.write(c(r,"grayscale")),e.write(c(r,"grayscale"))},children:"write(grayscale) twice"}),t.jsx(y,{"data-testid":"write-high-contrast",onPress:()=>e.write(c(r,"high-contrast")),children:"write(high-contrast)"})]})]})},play:async({canvas:e})=>{await a(e.getByTestId("invocation-count")).toHaveTextContent("0"),await p.click(e.getByTestId("write-grayscale-twice")),await T(()=>a(e.getByTestId("invocation-count")).toHaveTextContent("1")),await a(e.getByTestId("observed-theme")).toHaveTextContent("grayscale")}},B={name:"subscribe: unsubscribe",tags:["props"],parameters:u({description:{story:"After calling the function returned by subscribe(), further write() calls do not invoke the handler."}}),decorators:[h(),m({source:g`
                const store = localStorageThemeStore(themes, { storageKey: 'theme' })
                const unsubscribe = store.subscribe((theme) => console.log(theme))
                store.write(themeEntry(themes, 'grayscale'))
                unsubscribe()
                store.write(themeResult('current', themes)) // handler not called
            `})],loaders:[()=>(window.localStorage.removeItem(n),{})],render:()=>{const e=i.useMemo(()=>l(r,{storageKey:n}),[]),[s,d]=i.useState(void 0),o=i.useRef(null);i.useEffect(()=>{if(!o.current)return o.current=e.subscribe(d),()=>{o.current?.(),o.current=null}},[e]);const j=s?.theme??"current";return t.jsxs("div",{className:"flex flex-col gap-4",children:[t.jsxs("div",{className:"flex flex-wrap gap-2",children:[t.jsx(y,{"data-testid":"write-grayscale",onPress:()=>e.write(c(r,"grayscale")),children:"write('grayscale')"}),t.jsx(y,{"data-testid":"write-current",onPress:()=>e.write(c(r,"current")),children:"write('current')"}),t.jsx(y,{"data-testid":"unsubscribe",onPress:()=>{o.current?.(),o.current=null},children:"unsubscribe()"})]}),t.jsx(w,{title:"store.subscribe() receives (frozen after unsubscribe)","data-testid":"store-subscribe-result",result:c(r,j)})]})},play:async({canvas:e})=>{await p.click(e.getByTestId("write-grayscale")),await T(()=>a(e.getByTestId("store-subscribe-result")).toHaveTextContent("grayscale")),await p.click(e.getByTestId("unsubscribe")),await p.click(e.getByTestId("write-current")),await a(e.getByTestId("store-subscribe-result")).toHaveTextContent("grayscale")}},R={tags:["source"],parameters:u({source:{code:Y}}),decorators:[m()]};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
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
}`,...v.parameters?.docs?.source}}};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  name: 'storageKey',
  tags: ['use-case', 'props'],
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
}`,...S.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
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
}`,...b.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
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
}`,...f.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
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
}`,...x.parameters?.docs?.source}}};E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
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
}`,...E.parameters?.docs?.source}}};K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`{
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
}`,...K.parameters?.docs?.source}}};C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
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
}`,...C.parameters?.docs?.source}}};I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
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
}`,...I.parameters?.docs?.source}}};B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
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
}`,...B.parameters?.docs?.source}}};R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`{
  tags: ['source'],
  parameters: defineDocsParam({
    source: {
      code: source
    }
  }),
  decorators: [showSource()]
}`,...R.parameters?.docs?.source}}};const J=["Playground","StorageKey","ThemeMapStringValue","ThemeMapArrayValues","Read","ReadWhenEmpty","Write","Subscribe","SubscribeOnlyWhenThemeChanges","SubscribeUnsubscribe","Source"];export{v as Playground,x as Read,E as ReadWhenEmpty,R as Source,S as StorageKey,C as Subscribe,I as SubscribeOnlyWhenThemeChanges,B as SubscribeUnsubscribe,f as ThemeMapArrayValues,b as ThemeMapStringValue,K as Write,J as __namedExportsOrder,q as default};
