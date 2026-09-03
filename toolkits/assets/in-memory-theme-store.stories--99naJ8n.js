import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./react-B6tGW3fj.js";import{a as n}from"./chunk-W22LQPXL-BSpKiHdn.js";import{a as r,c as i,i as a,l as o,s}from"./iframe-Dhw67M0q.js";import{n as c,t as l}from"./dedent-DQaCLeUO.js";import{n as u}from"./theme-entry-Cs_OPpJC.js";import{n as d,t as f}from"./in-memory-theme-store-CJ-IHEDk.js";import{n as p,t as m}from"./button-Cd599w8f.js";import{n as h,t as g}from"./theme-result-card-DLpbfmZr.js";import{n as _,t as v}from"./theme-store-demo-BMuLlMoM.js";var y;function b(){return(b=e((()=>{y=`import { themeEntry } from '../../theme-entry.ts'
import type { ThemeEntry } from '../../theme-entry.types.ts'
import type { ThemeMap } from '../../theme-map.types.ts'
import type { ThemeStore } from '../theme-store.types.ts'

/**
 * In-memory theme store. Transient state; no persistence.
 *
 * Bakes themes at creation. Validates theme keys on write; read/write use theme keys
 * and build ThemeEntry from the themes map, consistent with other stores.
 *
 * @param themes - Record mapping theme keys to values (for validation and entry construction)
 * @returns ThemeStore
 *
 * @example
 * \`\`\`ts
 * const themes = { current: 'theme-current', grayscale: 'theme-grayscale' } as const
 * const store = inMemoryThemeStore(themes)
 * store.read() // undefined when empty
 * store.write(themeEntry(themes, 'grayscale'))
 * store.subscribe((themeResult) => {})
 * \`\`\`
 */
export function inMemoryThemeStore<Themes extends ThemeMap>(themes: Themes) {
	let value: keyof Themes | undefined | null
	const listeners = new Set<(v: ThemeEntry<Themes> | undefined) => void>()

	function read(): ThemeEntry<Themes> | undefined {
		if (value === undefined || value === null) return undefined
		return themeEntry(themes, value)
	}

	return {
		read,
		write(entry) {
			if (entry == null) {
				if (value === undefined || value === null) return
				value = undefined
				for (const fn of listeners) fn(undefined)
				return
			}
			if (!(entry.theme in themes)) return
			if (value === entry.theme) return
			value = entry.theme
			for (const fn of listeners) fn(themeEntry(themes, entry.theme))
		},
		subscribe(handler) {
			listeners.add(handler)
			return () => {
				listeners.delete(handler)
			}
		}
	} satisfies ThemeStore<Themes>
}
`})))()}var x,S,C,w,T,E,D,O,k,A,j,M,N,P,F,I,L,R,z;function B(){return(B=e((()=>{d(),s(),c(),x=t(),p(),h(),_(),b(),S=n(),{expect:C,userEvent:w,waitFor:T}=__STORYBOOK_MODULE_TEST__,E={title:`theme/theme-store/inMemoryThemeStore`,tags:[`func`,`version:1.0`],parameters:r({description:{component:`In-memory theme store. Transient state; no persistence. Bakes themes at creation; read/write/subscribe use theme keys only.`}}),render:()=>(0,S.jsx)(S.Fragment,{})},D={current:`theme-current`,next:`theme-next`,grayscale:`theme-grayscale`,"high-contrast":`theme-high-contrast`},O={tags:[`playground`],parameters:r({description:{story:`Interactive demo: Read theme, write themes via buttons, and observe subscribe updates.`}}),decorators:[o(),i({source:l`
                const store = inMemoryThemeStore(themes)
                <ThemeStoreDemo2 store={store} themes={themes} />
            `})],render:()=>{let e=f(D);return(0,S.jsx)(v,{store:e,themes:D})},play:async({canvas:e})=>{await w.click(e.getByTestId(`theme-store-demo-btn-write-grayscale`)),await T(()=>C(e.getByTestId(`theme-store-demo-observe`)).toHaveTextContent(`grayscale`)),await C(e.getByTestId(`theme-store-demo-observe`)).toHaveTextContent(`theme-grayscale`)}},k={name:`Themes type param`,tags:[`use-case`,`props`],decorators:[o({content:(0,S.jsxs)(`p`,{children:[`Pass `,(0,S.jsx)(`code`,{children:`Themes`}),` as the type parameter to define valid theme keys and their values.`]})}),i({source:l`
                const store = inMemoryThemeStore(themes)
                store.write(themeResult('current', themes))
            `})],loaders:[()=>{let e=f(D);return e.write(u(D,`current`)),{store:e}}],render:(e,{loaded:{store:t}})=>{let n=t.read();return(0,S.jsx)(`div`,{className:`flex flex-col gap-4`,children:(0,S.jsx)(a,{title:`store.read() after write`,appearance:`output`,children:(0,S.jsx)(g,{title:`store.read() result`,"data-testid":`store-read-result`,result:n??{theme:`current`,value:D.current}})})})},play:async({canvas:e})=>{await C(e.getByTestId(`store-read-result`)).toHaveTextContent(`theme: current`),await C(e.getByTestId(`store-read-result`)).toHaveTextContent(`value: theme-current`)}},A={name:`themes: string value`,tags:[`use-case`,`props`],parameters:r({description:{story:`themes values can be a single string per theme.`}}),decorators:[o({content:(0,S.jsx)(`p`,{children:`Each theme maps to one string value.`})}),i({source:l`
                const themes = {
                    current: 'theme-current',
                    grayscale: 'theme-grayscale',
                    'high-contrast': 'theme-high-contrast'
                } as const

                const store = inMemoryThemeStore(themes)
            `})],loaders:[()=>{let e=f(D);return e.write(u(D,`current`)),{store:e}}],render:(e,{loaded:{store:t}})=>{let n=t.read();return(0,S.jsx)(`div`,{className:`flex flex-col gap-4`,children:(0,S.jsx)(g,{title:`store.read() result`,"data-testid":`store-read-result`,result:n??{theme:`current`,value:D.current}})})},play:async({canvas:e})=>{await C(e.getByTestId(`store-read-result`)).toHaveTextContent(`theme: current`),await C(e.getByTestId(`store-read-result`)).toHaveTextContent(`value: theme-current`)}},j={current:`theme-current`,grayscale:[`theme-grayscale`,`app:bg-gray-100`],"high-contrast":`theme-high-contrast`},M={name:`themes: array values`,tags:[`use-case`,`props`],parameters:r({description:{story:`themes values can be string[] for multiple tokens. ThemeResult.value stores the full array.`}}),decorators:[o({content:(0,S.jsxs)(`p`,{children:[`Each theme can map to `,(0,S.jsx)(`code`,{children:`string[]`}),`. `,(0,S.jsx)(`code`,{children:`ThemeResult.value`}),` is the full array.`]})}),i({source:l`
                const themes = {
                    current: 'theme-current',
                    grayscale: ['theme-grayscale', 'app:bg-gray-100'],
                    'high-contrast': 'theme-high-contrast'
                } as const

                const store = inMemoryThemeStore(themes)
            `})],loaders:[()=>{let e=f(j);return e.write(u(j,`grayscale`)),{store:e}}],render:(e,{loaded:{store:t}})=>{let n=t.read();return(0,S.jsx)(`div`,{className:`flex flex-col gap-4`,children:(0,S.jsx)(g,{title:`store.read() result`,"data-testid":`store-read-result`,result:n??{theme:`grayscale`,value:j.grayscale}})})},play:async({canvas:e})=>{await C(e.getByTestId(`store-read-result`)).toHaveTextContent(`theme: grayscale`),await C(e.getByTestId(`store-read-result`)).toHaveTextContent(`value: [theme-grayscale, app:bg-gray-100]`)}},N={name:`read`,tags:[`props`],parameters:r({description:{story:`store.read() reads the current theme from in-memory state.`}}),decorators:[o(),i({source:l`
                const store = inMemoryThemeStore(themes)
                store.write(themeResult('grayscale', themes))
                const result = store.read()
            `})],loaders:[()=>{let e=f(D);return e.write(u(D,`grayscale`)),{store:e}}],render:(e,{loaded:{store:t}})=>{let n=t.read();return(0,S.jsx)(g,{title:`store.read() result`,"data-testid":`store-read-result`,result:n??{theme:`grayscale`,value:D.grayscale}})},play:async({canvas:e})=>{await C(e.getByTestId(`store-read-result`)).toHaveTextContent(`theme: grayscale`),await C(e.getByTestId(`store-read-result`)).toHaveTextContent(`value: theme-grayscale`)}},P={name:`read: undefined`,tags:[`props`],parameters:r({description:{story:`When no theme has been written, store.read() returns undefined.`}}),decorators:[o(),i({source:l`
                const store = inMemoryThemeStore(themes)
                const theme = store.read() // undefined when empty
            `})],render:()=>{let e=f(D).read();return(0,S.jsx)(g,{title:`store.read() result`,"data-testid":`store-read-result`,result:e===void 0?{theme:void 0,value:void 0}:e})},play:async({canvas:e})=>{await C(e.getByTestId(`store-read-result`)).toHaveTextContent(`(undefined)`)}},F={name:`write`,tags:[`props`],parameters:r({description:{story:`store.write() updates the in-memory theme and notifies subscribers.`}}),decorators:[o(),i({source:l`
                const store = inMemoryThemeStore(themes)
                store.write(themeResult('high-contrast', themes))
            `})],render:()=>{let e=f(D),[t,n]=(0,x.useState)(()=>e.read()?.theme);return(0,S.jsxs)(`div`,{className:`flex flex-col gap-4`,children:[(0,S.jsx)(`div`,{className:`flex flex-wrap gap-2`,children:Object.keys(D).map(t=>(0,S.jsxs)(m,{"data-testid":`write-${t}`,onClick:()=>{e.write(u(D,t)),n(t)},children:[`write(`,t,`)`]},t))}),(0,S.jsx)(g,{title:`store.read() after write`,"data-testid":`store-write-result`,result:t?{theme:t,value:D[t]}:{theme:`current`,value:D.current}})]})},play:async({canvas:e})=>{await w.click(e.getByTestId(`write-grayscale`)),await C(e.getByTestId(`store-write-result`)).toHaveTextContent(`theme: grayscale`),await C(e.getByTestId(`store-write-result`)).toHaveTextContent(`value: theme-grayscale`)}},I={name:`subscribe`,tags:[`props`],parameters:r({description:{story:`store.subscribe() calls the handler when write() is called (no initial notify).`}}),decorators:[o(),i({source:l`
                const store = inMemoryThemeStore(themes)
                return store.subscribe((themeResult) => {
                    console.log('Theme:', themeResult?.theme, themeResult?.value)
                })
            `})],render:()=>{let e=(0,x.useMemo)(()=>f(D),[D]),[t,n]=(0,x.useState)(void 0);(0,x.useEffect)(()=>e.subscribe(n),[e]);let r=t?.theme??`current`;return(0,S.jsxs)(`div`,{className:`flex flex-col gap-4`,children:[(0,S.jsxs)(`div`,{className:`flex flex-wrap gap-2`,children:[(0,S.jsx)(m,{"data-testid":`write-high-contrast`,onClick:()=>e.write(u(D,`high-contrast`)),children:`write('high-contrast')`}),(0,S.jsx)(m,{"data-testid":`write-current`,onClick:()=>e.write(u(D,`current`)),children:`write('current')`})]}),(0,S.jsx)(g,{title:`store.subscribe() receives`,"data-testid":`store-subscribe-result`,result:u(D,r)})]})},play:async({canvas:e})=>{await w.click(e.getByTestId(`write-high-contrast`)),await T(()=>C(e.getByTestId(`store-subscribe-result`)).toHaveTextContent(`high-contrast`)),await w.click(e.getByTestId(`write-current`)),await T(()=>C(e.getByTestId(`store-subscribe-result`)).toHaveTextContent(`current`))}},L={name:`subscribe: unsubscribe`,tags:[`props`],parameters:r({description:{story:`After calling the function returned by subscribe(), further write() calls do not invoke the handler.`}}),decorators:[o(),i({source:l`
                const store = inMemoryThemeStore(themes)
                const unsubscribe = store.subscribe((theme) => console.log(theme))
                store.write(themeResult('grayscale', themes))
                unsubscribe()
                store.write(themeResult('current', themes)) // handler not called
            `})],render:()=>{let e=(0,x.useMemo)(()=>f(D),[D]),[t,n]=(0,x.useState)(void 0),r=(0,x.useRef)(null);(0,x.useEffect)(()=>{if(!r.current)return r.current=e.subscribe(n),()=>{r.current?.(),r.current=null}},[e]);let i=t?.theme??`current`;return(0,S.jsxs)(`div`,{className:`flex flex-col gap-4`,children:[(0,S.jsxs)(`div`,{className:`flex flex-wrap gap-2`,children:[(0,S.jsx)(m,{"data-testid":`write-grayscale`,onClick:()=>e.write(u(D,`grayscale`)),children:`write('grayscale')`}),(0,S.jsx)(m,{"data-testid":`write-current`,onClick:()=>e.write(u(D,`current`)),children:`write('current')`}),(0,S.jsx)(m,{"data-testid":`unsubscribe`,onClick:()=>{r.current?.(),r.current=null},children:`unsubscribe()`})]}),(0,S.jsx)(g,{title:`store.subscribe() receives (frozen after unsubscribe)`,"data-testid":`store-subscribe-result`,result:u(D,i)})]})},play:async({canvas:e})=>{await w.click(e.getByTestId(`write-grayscale`)),await T(()=>C(e.getByTestId(`store-subscribe-result`)).toHaveTextContent(`grayscale`)),await w.click(e.getByTestId(`unsubscribe`)),await w.click(e.getByTestId(`write-current`)),await C(e.getByTestId(`store-subscribe-result`)).toHaveTextContent(`grayscale`)}},R={tags:[`source`],parameters:r({source:{code:y}}),decorators:[i()]},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  tags: ['playground'],
  parameters: defineDocsParam({
    description: {
      story: 'Interactive demo: Read theme, write themes via buttons, and observe subscribe updates.'
    }
  }),
  decorators: [withStoryCard(), showSource({
    source: dedent\`
                const store = inMemoryThemeStore(themes)
                <ThemeStoreDemo2 store={store} themes={themes} />
            \`
  })],
  render: () => {
    const store = inMemoryThemeStore(themes);
    return <ThemeStoreDemo store={store} themes={themes} />;
  },
  play: async ({
    canvas
  }) => {
    await userEvent.click(canvas.getByTestId('theme-store-demo-btn-write-grayscale'));
    await waitFor(() => expect(canvas.getByTestId('theme-store-demo-observe')).toHaveTextContent('grayscale'));
    await expect(canvas.getByTestId('theme-store-demo-observe')).toHaveTextContent('theme-grayscale');
  }
}`,...O.parameters?.docs?.source}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  name: 'Themes type param',
  tags: ['use-case', 'props'],
  decorators: [withStoryCard({
    content: <p>
                    Pass <code>Themes</code> as the type parameter to define valid theme keys and their
                    values.
                </p>
  }), showSource({
    source: dedent\`
                const store = inMemoryThemeStore(themes)
                store.write(themeResult('current', themes))
            \`
  })],
  loaders: [() => {
    const store = inMemoryThemeStore(themes);
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
                <StoryCard title="store.read() after write" appearance="output">
                    <ThemeResultCard title="store.read() result" data-testid="store-read-result" result={result ?? {
          theme: 'current',
          value: themes.current
        }} />
                </StoryCard>
            </div>;
  },
  play: async ({
    canvas
  }) => {
    await expect(canvas.getByTestId('store-read-result')).toHaveTextContent('theme: current');
    await expect(canvas.getByTestId('store-read-result')).toHaveTextContent('value: theme-current');
  }
}`,...k.parameters?.docs?.source}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
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

                const store = inMemoryThemeStore(themes)
            \`
  })],
  loaders: [() => {
    const store = inMemoryThemeStore(themes);
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
}`,...A.parameters?.docs?.source}}},M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
  name: 'themes: array values',
  tags: ['use-case', 'props'],
  parameters: defineDocsParam({
    description: {
      story: 'themes values can be string[] for multiple tokens. ThemeResult.value stores the full array.'
    }
  }),
  decorators: [withStoryCard({
    content: <p>
                    Each theme can map to <code>string[]</code>. <code>ThemeResult.value</code> is the full
                    array.
                </p>
  }), showSource({
    source: dedent\`
                const themes = {
                    current: 'theme-current',
                    grayscale: ['theme-grayscale', 'app:bg-gray-100'],
                    'high-contrast': 'theme-high-contrast'
                } as const

                const store = inMemoryThemeStore(themes)
            \`
  })],
  loaders: [() => {
    const store = inMemoryThemeStore(themesArray);
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
}`,...M.parameters?.docs?.source}}},N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
  name: 'read',
  tags: ['props'],
  parameters: defineDocsParam({
    description: {
      story: 'store.read() reads the current theme from in-memory state.'
    }
  }),
  decorators: [withStoryCard(), showSource({
    source: dedent\`
                const store = inMemoryThemeStore(themes)
                store.write(themeResult('grayscale', themes))
                const result = store.read()
            \`
  })],
  loaders: [() => {
    const store = inMemoryThemeStore(themes);
    store.write(themeEntry(themes, 'grayscale'));
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
}`,...N.parameters?.docs?.source}}},P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
  name: 'read: undefined',
  tags: ['props'],
  parameters: defineDocsParam({
    description: {
      story: 'When no theme has been written, store.read() returns undefined.'
    }
  }),
  decorators: [withStoryCard(), showSource({
    source: dedent\`
                const store = inMemoryThemeStore(themes)
                const theme = store.read() // undefined when empty
            \`
  })],
  render: () => {
    const store = inMemoryThemeStore(themes);
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
}`,...P.parameters?.docs?.source}}},F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
  name: 'write',
  tags: ['props'],
  parameters: defineDocsParam({
    description: {
      story: 'store.write() updates the in-memory theme and notifies subscribers.'
    }
  }),
  decorators: [withStoryCard(), showSource({
    source: dedent\`
                const store = inMemoryThemeStore(themes)
                store.write(themeResult('high-contrast', themes))
            \`
  })],
  render: () => {
    const store = inMemoryThemeStore(themes);
    const [currentTheme, setCurrentTheme] = useState<ExampleTheme | undefined>(() => {
      const r = store.read();
      return r?.theme;
    });
    return <div className="flex flex-col gap-4">
                <div className="flex flex-wrap gap-2">
                    {(Object.keys(themes) as ExampleTheme[]).map(theme => <Button key={theme} data-testid={\`write-\${theme}\`} onClick={() => {
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
}`,...F.parameters?.docs?.source}}},I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
  name: 'subscribe',
  tags: ['props'],
  parameters: defineDocsParam({
    description: {
      story: 'store.subscribe() calls the handler when write() is called (no initial notify).'
    }
  }),
  decorators: [withStoryCard(), showSource({
    source: dedent\`
                const store = inMemoryThemeStore(themes)
                return store.subscribe((themeResult) => {
                    console.log('Theme:', themeResult?.theme, themeResult?.value)
                })
            \`
  })],
  render: () => {
    const store = useMemo(() => inMemoryThemeStore(themes), [themes]);
    const [result, setResult] = useState<ThemeEntry<typeof themes> | undefined | null>(undefined);
    useEffect(() => {
      return store.subscribe(setResult);
    }, [store]);
    const displayTheme = result?.theme ?? 'current';
    return <div className="flex flex-col gap-4">
                <div className="flex flex-wrap gap-2">
                    <Button data-testid="write-high-contrast" onClick={() => store.write(themeEntry(themes, 'high-contrast'))}>
                        write('high-contrast')
                    </Button>
                    <Button data-testid="write-current" onClick={() => store.write(themeEntry(themes, 'current'))}>
                        write('current')
                    </Button>
                </div>
                <ThemeResultCard title="store.subscribe() receives" data-testid="store-subscribe-result" result={themeEntry(themes, displayTheme)} />
            </div>;
  },
  play: async ({
    canvas
  }) => {
    // No initial notify; handler fires on first write
    await userEvent.click(canvas.getByTestId('write-high-contrast'));
    await waitFor(() => expect(canvas.getByTestId('store-subscribe-result')).toHaveTextContent('high-contrast'));
    await userEvent.click(canvas.getByTestId('write-current'));
    await waitFor(() => expect(canvas.getByTestId('store-subscribe-result')).toHaveTextContent('current'));
  }
}`,...I.parameters?.docs?.source}}},L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`{
  name: 'subscribe: unsubscribe',
  tags: ['props'],
  parameters: defineDocsParam({
    description: {
      story: 'After calling the function returned by subscribe(), further write() calls do not invoke the handler.'
    }
  }),
  decorators: [withStoryCard(), showSource({
    source: dedent\`
                const store = inMemoryThemeStore(themes)
                const unsubscribe = store.subscribe((theme) => console.log(theme))
                store.write(themeResult('grayscale', themes))
                unsubscribe()
                store.write(themeResult('current', themes)) // handler not called
            \`
  })],
  render: () => {
    const store = useMemo(() => inMemoryThemeStore(themes), [themes]);
    const [result, setResult] = useState<ThemeEntry<typeof themes> | undefined | null>(undefined);
    const unSubRef = useRef<(() => void) | null>(null);
    useEffect(() => {
      if (unSubRef.current) return;
      unSubRef.current = store.subscribe!(setResult);
      return () => {
        unSubRef.current?.();
        unSubRef.current = null;
      };
    }, [store]);
    const displayTheme = result?.theme ?? 'current';
    return <div className="flex flex-col gap-4">
                <div className="flex flex-wrap gap-2">
                    <Button data-testid="write-grayscale" onClick={() => store.write(themeEntry(themes, 'grayscale'))}>
                        write('grayscale')
                    </Button>
                    <Button data-testid="write-current" onClick={() => store.write(themeEntry(themes, 'current'))}>
                        write('current')
                    </Button>
                    <Button data-testid="unsubscribe" onClick={() => {
          unSubRef.current?.();
          unSubRef.current = null;
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
}`,...L.parameters?.docs?.source}}},R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`{
  tags: ['source'],
  parameters: defineDocsParam({
    source: {
      code: source
    }
  }),
  decorators: [showSource()]
}`,...R.parameters?.docs?.source}}},z=[`Playground`,`ThemeMapOption`,`ThemeMapStringValue`,`ThemeMapArrayValues`,`Read`,`ReadWhenEmpty`,`WriteStory`,`Subscribe`,`SubscribeUnsubscribe`,`Source`]})))()}B();export{O as Playground,N as Read,P as ReadWhenEmpty,R as Source,I as Subscribe,L as SubscribeUnsubscribe,M as ThemeMapArrayValues,k as ThemeMapOption,A as ThemeMapStringValue,F as WriteStory,z as __namedExportsOrder,E as default};