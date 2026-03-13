import{j as t,d as i,w as m,s as u,S as k,r as h}from"./iframe-BzC63Mz9.js";import{d as l}from"./dedent-BuYMbVyj.js";import{t as c}from"./theme-entry-D4S_RAMB.js";import{i as d}from"./in-memory-theme-store-CtdmAzEM.js";import{B as g}from"./button-DUo1iKrE.js";import{T as y}from"./theme-result-card-Ou7vx_hj.js";import{T as j}from"./theme-store-demo-CFaskXn6.js";import"./preload-helper-PPVm8Dsz.js";import"./resolve-class-name-BPOFdAhp.js";import"./append-id-Vsg144gU.js";const H=`import { themeEntry } from '../../theme-entry.ts'
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
`,{expect:a,userEvent:p,waitFor:I}=__STORYBOOK_MODULE_TEST__,z={title:"theme/theme-store/inMemoryThemeStore",tags:["func","version:1.0"],parameters:i({description:{component:"In-memory theme store. Transient state; no persistence. Bakes themes at creation; read/write/subscribe use theme keys only."}}),render:()=>t.jsx(t.Fragment,{})},r={current:"theme-current",next:"theme-next",grayscale:"theme-grayscale","high-contrast":"theme-high-contrast"},T={tags:["playground"],parameters:i({description:{story:"Interactive demo: Read theme, write themes via buttons, and observe subscribe updates."}}),decorators:[m(),u({source:l`
                const store = inMemoryThemeStore(themes)
                <ThemeStoreDemo2 store={store} themes={themes} />
            `})],render:()=>{const e=d(r);return t.jsx(j,{store:e,themes:r})},play:async({canvas:e})=>{await p.click(e.getByTestId("theme-store-demo-btn-write-grayscale")),await I(()=>a(e.getByTestId("theme-store-demo-observe")).toHaveTextContent("grayscale")),await a(e.getByTestId("theme-store-demo-observe")).toHaveTextContent("theme-grayscale")}},w={name:"Themes type param",tags:["use-case","props"],decorators:[m({content:t.jsxs("p",{children:["Pass ",t.jsx("code",{children:"Themes"})," as the type parameter to define valid theme keys and their values."]})}),u({source:l`
                const store = inMemoryThemeStore(themes)
                store.write(themeResult('current', themes))
            `})],loaders:[()=>{const e=d(r);return e.write(c(r,"current")),{store:e}}],render:(e,{loaded:{store:s}})=>{const o=s.read();return t.jsx("div",{className:"flex flex-col gap-4",children:t.jsx(k,{title:"store.read() after write",appearance:"output",children:t.jsx(y,{title:"store.read() result","data-testid":"store-read-result",result:o??{theme:"current",value:r.current}})})})},play:async({canvas:e})=>{await a(e.getByTestId("store-read-result")).toHaveTextContent("theme: current"),await a(e.getByTestId("store-read-result")).toHaveTextContent("value: theme-current")}},v={name:"themes: string value",tags:["use-case","props"],parameters:i({description:{story:"themes values can be a single string per theme."}}),decorators:[m({content:t.jsx("p",{children:"Each theme maps to one string value."})}),u({source:l`
                const themes = {
                    current: 'theme-current',
                    grayscale: 'theme-grayscale',
                    'high-contrast': 'theme-high-contrast'
                } as const

                const store = inMemoryThemeStore(themes)
            `})],loaders:[()=>{const e=d(r);return e.write(c(r,"current")),{store:e}}],render:(e,{loaded:{store:s}})=>{const o=s.read();return t.jsx("div",{className:"flex flex-col gap-4",children:t.jsx(y,{title:"store.read() result","data-testid":"store-read-result",result:o??{theme:"current",value:r.current}})})},play:async({canvas:e})=>{await a(e.getByTestId("store-read-result")).toHaveTextContent("theme: current"),await a(e.getByTestId("store-read-result")).toHaveTextContent("value: theme-current")}},E={current:"theme-current",grayscale:["theme-grayscale","app:bg-gray-100"],"high-contrast":"theme-high-contrast"},f={name:"themes: array values",tags:["use-case","props"],parameters:i({description:{story:"themes values can be string[] for multiple tokens. ThemeResult.value stores the full array."}}),decorators:[m({content:t.jsxs("p",{children:["Each theme can map to ",t.jsx("code",{children:"string[]"}),". ",t.jsx("code",{children:"ThemeResult.value"})," is the full array."]})}),u({source:l`
                const themes = {
                    current: 'theme-current',
                    grayscale: ['theme-grayscale', 'app:bg-gray-100'],
                    'high-contrast': 'theme-high-contrast'
                } as const

                const store = inMemoryThemeStore(themes)
            `})],loaders:[()=>{const e=d(E);return e.write(c(E,"grayscale")),{store:e}}],render:(e,{loaded:{store:s}})=>{const o=s.read();return t.jsx("div",{className:"flex flex-col gap-4",children:t.jsx(y,{title:"store.read() result","data-testid":"store-read-result",result:o??{theme:"grayscale",value:E.grayscale}})})},play:async({canvas:e})=>{await a(e.getByTestId("store-read-result")).toHaveTextContent("theme: grayscale"),await a(e.getByTestId("store-read-result")).toHaveTextContent("value: [theme-grayscale, app:bg-gray-100]")}},b={name:"read",tags:["props"],parameters:i({description:{story:"store.read() reads the current theme from in-memory state."}}),decorators:[m(),u({source:l`
                const store = inMemoryThemeStore(themes)
                store.write(themeResult('grayscale', themes))
                const result = store.read()
            `})],loaders:[()=>{const e=d(r);return e.write(c(r,"grayscale")),{store:e}}],render:(e,{loaded:{store:s}})=>{const o=s.read();return t.jsx(y,{title:"store.read() result","data-testid":"store-read-result",result:o??{theme:"grayscale",value:r.grayscale}})},play:async({canvas:e})=>{await a(e.getByTestId("store-read-result")).toHaveTextContent("theme: grayscale"),await a(e.getByTestId("store-read-result")).toHaveTextContent("value: theme-grayscale")}},x={name:"read: undefined",tags:["props"],parameters:i({description:{story:"When no theme has been written, store.read() returns undefined."}}),decorators:[m(),u({source:l`
                const store = inMemoryThemeStore(themes)
                const theme = store.read() // undefined when empty
            `})],render:()=>{const s=d(r).read();return t.jsx(y,{title:"store.read() result","data-testid":"store-read-result",result:s!==void 0?s:{theme:void 0,value:void 0}})},play:async({canvas:e})=>{await a(e.getByTestId("store-read-result")).toHaveTextContent("(undefined)")}},S={name:"write",tags:["props"],parameters:i({description:{story:"store.write() updates the in-memory theme and notifies subscribers."}}),decorators:[m(),u({source:l`
                const store = inMemoryThemeStore(themes)
                store.write(themeResult('high-contrast', themes))
            `})],render:()=>{const e=d(r),[s,o]=h.useState(()=>e.read()?.theme);return t.jsxs("div",{className:"flex flex-col gap-4",children:[t.jsx("div",{className:"flex flex-wrap gap-2",children:Object.keys(r).map(n=>t.jsxs(g,{"data-testid":`write-${n}`,onClick:()=>{e.write(c(r,n)),o(n)},children:["write(",n,")"]},n))}),t.jsx(y,{title:"store.read() after write","data-testid":"store-write-result",result:s?{theme:s,value:r[s]}:{theme:"current",value:r.current}})]})},play:async({canvas:e})=>{await p.click(e.getByTestId("write-grayscale")),await a(e.getByTestId("store-write-result")).toHaveTextContent("theme: grayscale"),await a(e.getByTestId("store-write-result")).toHaveTextContent("value: theme-grayscale")}},C={name:"subscribe",tags:["props"],parameters:i({description:{story:"store.subscribe() calls the handler when write() is called (no initial notify)."}}),decorators:[m(),u({source:l`
                const store = inMemoryThemeStore(themes)
                return store.subscribe((themeResult) => {
                    console.log('Theme:', themeResult?.theme, themeResult?.value)
                })
            `})],render:()=>{const e=h.useMemo(()=>d(r),[r]),[s,o]=h.useState(void 0);h.useEffect(()=>e.subscribe(o),[e]);const n=s?.theme??"current";return t.jsxs("div",{className:"flex flex-col gap-4",children:[t.jsxs("div",{className:"flex flex-wrap gap-2",children:[t.jsx(g,{"data-testid":"write-high-contrast",onClick:()=>e.write(c(r,"high-contrast")),children:"write('high-contrast')"}),t.jsx(g,{"data-testid":"write-current",onClick:()=>e.write(c(r,"current")),children:"write('current')"})]}),t.jsx(y,{title:"store.subscribe() receives","data-testid":"store-subscribe-result",result:c(r,n)})]})},play:async({canvas:e})=>{await p.click(e.getByTestId("write-high-contrast")),await I(()=>a(e.getByTestId("store-subscribe-result")).toHaveTextContent("high-contrast")),await p.click(e.getByTestId("write-current")),await I(()=>a(e.getByTestId("store-subscribe-result")).toHaveTextContent("current"))}},B={name:"subscribe: unsubscribe",tags:["props"],parameters:i({description:{story:"After calling the function returned by subscribe(), further write() calls do not invoke the handler."}}),decorators:[m(),u({source:l`
                const store = inMemoryThemeStore(themes)
                const unsubscribe = store.subscribe((theme) => console.log(theme))
                store.write(themeResult('grayscale', themes))
                unsubscribe()
                store.write(themeResult('current', themes)) // handler not called
            `})],render:()=>{const e=h.useMemo(()=>d(r),[r]),[s,o]=h.useState(void 0),n=h.useRef(null);h.useEffect(()=>{if(!n.current)return n.current=e.subscribe(o),()=>{n.current?.(),n.current=null}},[e]);const M=s?.theme??"current";return t.jsxs("div",{className:"flex flex-col gap-4",children:[t.jsxs("div",{className:"flex flex-wrap gap-2",children:[t.jsx(g,{"data-testid":"write-grayscale",onClick:()=>e.write(c(r,"grayscale")),children:"write('grayscale')"}),t.jsx(g,{"data-testid":"write-current",onClick:()=>e.write(c(r,"current")),children:"write('current')"}),t.jsx(g,{"data-testid":"unsubscribe",onClick:()=>{n.current?.(),n.current=null},children:"unsubscribe()"})]}),t.jsx(y,{title:"store.subscribe() receives (frozen after unsubscribe)","data-testid":"store-subscribe-result",result:c(r,M)})]})},play:async({canvas:e})=>{await p.click(e.getByTestId("write-grayscale")),await I(()=>a(e.getByTestId("store-subscribe-result")).toHaveTextContent("grayscale")),await p.click(e.getByTestId("unsubscribe")),await p.click(e.getByTestId("write-current")),await a(e.getByTestId("store-subscribe-result")).toHaveTextContent("grayscale")}},R={tags:["source"],parameters:i({source:{code:H}}),decorators:[u()]};T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
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
}`,...T.parameters?.docs?.source}}};w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
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
}`,...w.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
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
}`,...v.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
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
}`,...f.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
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
}`,...b.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
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
}`,...x.parameters?.docs?.source}}};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
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
}`,...S.parameters?.docs?.source}}};C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
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
}`,...C.parameters?.docs?.source}}};B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
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
}`,...B.parameters?.docs?.source}}};R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`{
  tags: ['source'],
  parameters: defineDocsParam({
    source: {
      code: source
    }
  }),
  decorators: [showSource()]
}`,...R.parameters?.docs?.source}}};const $=["Playground","ThemeMapOption","ThemeMapStringValue","ThemeMapArrayValues","Read","ReadWhenEmpty","WriteStory","Subscribe","SubscribeUnsubscribe","Source"];export{T as Playground,b as Read,x as ReadWhenEmpty,R as Source,C as Subscribe,B as SubscribeUnsubscribe,f as ThemeMapArrayValues,w as ThemeMapOption,v as ThemeMapStringValue,S as WriteStory,$ as __namedExportsOrder,z as default};
