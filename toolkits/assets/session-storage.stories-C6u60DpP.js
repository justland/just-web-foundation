import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./react-B6tGW3fj.js";import{a as n}from"./chunk-W22LQPXL-BSpKiHdn.js";import{a as r,c as i,i as a,l as o,s}from"./iframe-C-caXvtV.js";import{n as c,t as l}from"./dedent-DQaCLeUO.js";import{n as u}from"./theme-entry-Cs_OPpJC.js";import{i as d,n as f,r as p,t as m}from"./write-session-storage-B6yacOdK.js";import{n as h,t as g}from"./button-BQi9n5XX.js";import{n as _,t as v}from"./theme-result-card-CJBN2MES.js";import{n as y,t as b}from"./theme-store-demo-Bb76mXKJ.js";function x(e){return{read:()=>d(O,e),write:t=>f(O,e,t),subscribe:void 0}}function S(e,t){let n;try{n=t?JSON.parse(t):void 0}catch{return}if(!n?.theme||typeof n.theme!=`string`||!(n.theme in e))return;let r=n.theme;return{theme:r,value:e[r]}}var C,w,T,E,D,O,k,A,j,M,N,P,F,I,L,R,z,B,V;function H(){return(H=e((()=>{p(),m(),s(),c(),C=t(),h(),_(),y(),w=n(),{expect:T,userEvent:E}=__STORYBOOK_MODULE_TEST__,D={title:`theme/session-storage`,tags:[`func`,`version:2.0`],parameters:r({description:{component:`Low-level functions for reading and writing theme via sessionStorage: readSessionStorage, writeSessionStorage. Persists per tab. No subscribe at function level.`}}),render:()=>(0,w.jsx)(w.Fragment,{})},O={current:`theme-current`,next:`theme-next`,grayscale:`theme-grayscale`,"high-contrast":`theme-high-contrast`},k=`theme-ss-func-demo`,A={tags:[`playground`],parameters:r({description:{story:`Interactive demo: readSessionStorage, writeSessionStorage. No subscribe at function level.`}}),decorators:[o(),i({source:l`
                const store = {
                  read: () => readSessionStorage(themes, storageKey),
                  write: (entry) => writeSessionStorage(themes, storageKey, entry),
                  subscribe: undefined
                }
                <ThemeStoreDemo store={store} themes={themes} />
            `})],loaders:[()=>(window.sessionStorage.removeItem(k),{})],render:()=>{let e=x(k);return(0,w.jsx)(b,{store:e,themes:O})},play:async({canvas:e})=>{await E.click(e.getByTestId(`theme-store-demo-btn-write-grayscale`)),await E.click(e.getByTestId(`theme-store-demo-btn-read`)),await T(e.getByTestId(`theme-store-demo-read`)).toHaveTextContent(`grayscale`)}},j={name:`readSessionStorage`,tags:[`props`],parameters:r({description:{story:`readSessionStorage(themes, storageKey, options?) reads the current theme from sessionStorage.`}}),decorators:[o(),i({source:l`
                const result = readSessionStorage(themes, storageKey)
            `})],loaders:[()=>(f(O,k,u(O,`grayscale`)),{})],render:()=>{let e=d(O,k);return(0,w.jsx)(v,{title:`readSessionStorage() result`,"data-testid":`store-read-result`,result:e??{theme:`grayscale`,value:O.grayscale}})},play:async({canvas:e})=>{await T(e.getByTestId(`store-read-result`)).toHaveTextContent(`theme: grayscale`),await T(e.getByTestId(`store-read-result`)).toHaveTextContent(`value: theme-grayscale`)}},M={name:`readSessionStorage: undefined when empty`,tags:[`props`],parameters:r({description:{story:`When nothing is stored at the key, readSessionStorage returns undefined.`}}),decorators:[o(),i({source:l`
                const result = readSessionStorage(themes, storageKey)
                // undefined when empty
            `})],loaders:[()=>(window.sessionStorage.removeItem(k),{})],render:()=>{let e=d(O,k);return(0,w.jsx)(v,{title:`readSessionStorage() result`,"data-testid":`store-read-result`,result:e===void 0?{theme:void 0,value:void 0}:e})},play:async({canvas:e})=>{await T(e.getByTestId(`store-read-result`)).toHaveTextContent(`(undefined)`)}},N={name:`writeSessionStorage`,tags:[`props`],parameters:r({description:{story:`writeSessionStorage(themes, storageKey, entry) persists the theme to sessionStorage.`}}),decorators:[o(),i({source:l`
                writeSessionStorage(themes, storageKey, themeEntry(themes, 'high-contrast'))
            `})],loaders:[()=>(window.sessionStorage.removeItem(k),{})],render:()=>{let[e,t]=(0,C.useState)(()=>d(O,k)?.theme??null);return(0,w.jsxs)(`div`,{className:`flex flex-col gap-4`,children:[(0,w.jsx)(`div`,{className:`flex flex-wrap gap-2`,children:Object.keys(O).map(e=>(0,w.jsxs)(g,{"data-testid":`write-${e}`,onPress:()=>{f(O,k,u(O,e)),t(e)},children:[`write(`,e,`)`]},e))}),(0,w.jsx)(v,{title:`readSessionStorage() after write`,"data-testid":`store-write-result`,result:e?{theme:e,value:O[e]}:{theme:`current`,value:O.current}})]})},play:async({canvas:e})=>{await E.click(e.getByTestId(`write-grayscale`)),await T(e.getByTestId(`store-write-result`)).toHaveTextContent(`theme: grayscale`),await T(e.getByTestId(`store-write-result`)).toHaveTextContent(`value: theme-grayscale`)}},P=`theme-ss-func-parse`,F={name:`options.parse`,tags:[`props`,`use-case`],parameters:r({description:{story:`The options.parse allows you to provide a custom parse function. Use it when migrating from legacy formats.`}}),decorators:[o({content:(0,w.jsxs)(`p`,{children:[`Pre-seeded sessionStorage with legacy format `,(0,w.jsx)(`code`,{children:`{ theme: "grayscale" }`}),` (no value).`]})}),i({source:l`
                const result = readSessionStorage(themes, storageKey, { parse: customParse })
            `})],loaders:[()=>(window.sessionStorage.setItem(P,JSON.stringify({theme:`grayscale`})),{})],render:()=>{let e=d(O,P,{parse:S});return(0,w.jsx)(`div`,{className:`flex flex-col gap-4`,children:(0,w.jsx)(v,{title:`readSessionStorage() with custom parse`,"data-testid":`store-read-result`,result:e??{theme:`grayscale`,value:O.grayscale}})})},play:async({canvas:e})=>{await T(e.getByTestId(`store-read-result`)).toHaveTextContent(`theme: grayscale`),await T(e.getByTestId(`store-read-result`)).toHaveTextContent(`value: theme-grayscale`)}},I={name:`storageKey`,tags:[`props`],decorators:[o({content:(0,w.jsxs)(`p`,{children:[`Pass `,(0,w.jsx)(`code`,{children:`storageKey`}),` to determine the sessionStorage key used for persistence.`]})}),i({source:l`
                readSessionStorage(themes, storageKey)
                writeSessionStorage(themes, storageKey, themeEntry(themes, 'current'))
            `})],loaders:[()=>(f(O,k,u(O,`current`)),{})],render:()=>{let e=d(O,k);return(0,w.jsxs)(`div`,{className:`flex flex-col gap-4`,children:[(0,w.jsx)(a,{title:`sessionStorage key`,appearance:`output`,children:(0,w.jsx)(`code`,{children:k})}),(0,w.jsx)(v,{title:`readSessionStorage() result`,"data-testid":`store-read-result`,result:e??{theme:`current`,value:O.current}})]})},play:async({canvas:e})=>{await T(e.getByTestId(`store-read-result`)).toHaveTextContent(`theme: current`),await T(e.getByTestId(`store-read-result`)).toHaveTextContent(`value: theme-current`)}},L=`theme-ss-func-thememap`,R={name:`themes: string value`,tags:[`props`],parameters:r({description:{story:`themes values can be a single string per theme.`}}),decorators:[o({content:(0,w.jsx)(`p`,{children:`Each theme maps to one string value.`})}),i({source:l`
                readSessionStorage(themes, storageKey)
                writeSessionStorage(themes, storageKey, themeEntry(themes, 'current'))
            `})],loaders:[()=>(window.sessionStorage.removeItem(L),f(O,L,u(O,`current`)),{})],render:()=>{let e=d(O,L);return(0,w.jsx)(`div`,{className:`flex flex-col gap-4`,children:(0,w.jsx)(v,{title:`readSessionStorage() result`,"data-testid":`store-read-result`,result:e??{theme:`current`,value:O.current}})})},play:async({canvas:e})=>{await T(e.getByTestId(`store-read-result`)).toHaveTextContent(`theme: current`),await T(e.getByTestId(`store-read-result`)).toHaveTextContent(`value: theme-current`)}},z={current:`theme-current`,grayscale:[`theme-grayscale`,`app:bg-gray-100`],"high-contrast":`theme-high-contrast`},B={name:`themes: array values`,tags:[`props`],parameters:r({description:{story:`themes values can be string[]. Stored and retrieved value is the full array.`}}),decorators:[o({content:(0,w.jsxs)(`p`,{children:[`Each theme can map to `,(0,w.jsx)(`code`,{children:`string[]`}),`. `,(0,w.jsx)(`code`,{children:`ThemeResult.value`}),` persists the full array.`]})}),i({source:l`
                const themes = {
                    current: 'theme-current',
                    grayscale: ['theme-grayscale', 'app:bg-gray-100'],
                    'high-contrast': 'theme-high-contrast'
                } as const

                readSessionStorage(themes, storageKey)
                writeSessionStorage(themes, storageKey, themeEntry(themes, 'grayscale'))
            `})],loaders:[()=>(window.sessionStorage.removeItem(L),f(z,L,u(z,`grayscale`)),{})],render:()=>{let e=d(z,L);return(0,w.jsx)(`div`,{className:`flex flex-col gap-4`,children:(0,w.jsx)(v,{title:`readSessionStorage() result`,"data-testid":`store-read-result`,result:e??{theme:`grayscale`,value:z.grayscale}})})},play:async({canvas:e})=>{await T(e.getByTestId(`store-read-result`)).toHaveTextContent(`theme: grayscale`),await T(e.getByTestId(`store-read-result`)).toHaveTextContent(`value: [theme-grayscale, app:bg-gray-100]`)}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  tags: ['playground'],
  parameters: defineDocsParam({
    description: {
      story: 'Interactive demo: readSessionStorage, writeSessionStorage. No subscribe at function level.'
    }
  }),
  decorators: [withStoryCard(), showSource({
    source: dedent\`
                const store = {
                  read: () => readSessionStorage(themes, storageKey),
                  write: (entry) => writeSessionStorage(themes, storageKey, entry),
                  subscribe: undefined
                }
                <ThemeStoreDemo store={store} themes={themes} />
            \`
  })],
  loaders: [() => {
    window.sessionStorage.removeItem(STORAGE_KEY);
    return {};
  }],
  render: () => {
    const store = createSessionStorageStore(STORAGE_KEY);
    return <ThemeStoreDemo store={store} themes={themes} />;
  },
  play: async ({
    canvas
  }) => {
    await userEvent.click(canvas.getByTestId('theme-store-demo-btn-write-grayscale'));
    await userEvent.click(canvas.getByTestId('theme-store-demo-btn-read'));
    await expect(canvas.getByTestId('theme-store-demo-read')).toHaveTextContent('grayscale');
  }
}`,...A.parameters?.docs?.source}}},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  name: 'readSessionStorage',
  tags: ['props'],
  parameters: defineDocsParam({
    description: {
      story: 'readSessionStorage(themes, storageKey, options?) reads the current theme from sessionStorage.'
    }
  }),
  decorators: [withStoryCard(), showSource({
    source: dedent\`
                const result = readSessionStorage(themes, storageKey)
            \`
  })],
  loaders: [() => {
    writeSessionStorage(themes, STORAGE_KEY, themeEntry(themes, 'grayscale'));
    return {};
  }],
  render: () => {
    const result = readSessionStorage(themes, STORAGE_KEY);
    return <ThemeResultCard title="readSessionStorage() result" data-testid="store-read-result" result={result ?? {
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
}`,...j.parameters?.docs?.source}}},M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
  name: 'readSessionStorage: undefined when empty',
  tags: ['props'],
  parameters: defineDocsParam({
    description: {
      story: 'When nothing is stored at the key, readSessionStorage returns undefined.'
    }
  }),
  decorators: [withStoryCard(), showSource({
    source: dedent\`
                const result = readSessionStorage(themes, storageKey)
                // undefined when empty
            \`
  })],
  loaders: [() => {
    window.sessionStorage.removeItem(STORAGE_KEY);
    return {};
  }],
  render: () => {
    const result = readSessionStorage(themes, STORAGE_KEY);
    return <ThemeResultCard title="readSessionStorage() result" data-testid="store-read-result" result={result !== undefined ? result : {
      theme: undefined,
      value: undefined
    }} />;
  },
  play: async ({
    canvas
  }) => {
    await expect(canvas.getByTestId('store-read-result')).toHaveTextContent('(undefined)');
  }
}`,...M.parameters?.docs?.source}}},N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
  name: 'writeSessionStorage',
  tags: ['props'],
  parameters: defineDocsParam({
    description: {
      story: 'writeSessionStorage(themes, storageKey, entry) persists the theme to sessionStorage.'
    }
  }),
  decorators: [withStoryCard(), showSource({
    source: dedent\`
                writeSessionStorage(themes, storageKey, themeEntry(themes, 'high-contrast'))
            \`
  })],
  loaders: [() => {
    window.sessionStorage.removeItem(STORAGE_KEY);
    return {};
  }],
  render: () => {
    const [currentTheme, setCurrentTheme] = useState<ExampleTheme | null>(() => {
      const r = readSessionStorage(themes, STORAGE_KEY);
      return r?.theme ?? null;
    });
    return <div className="flex flex-col gap-4">
                <div className="flex flex-wrap gap-2">
                    {(Object.keys(themes) as ExampleTheme[]).map(theme => <Button key={theme} data-testid={\`write-\${theme}\`} onPress={() => {
          writeSessionStorage(themes, STORAGE_KEY, themeEntry(themes, theme));
          setCurrentTheme(theme);
        }}>
                            write({theme})
                        </Button>)}
                </div>
                <ThemeResultCard title="readSessionStorage() after write" data-testid="store-write-result" result={currentTheme ? {
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
}`,...N.parameters?.docs?.source}}},F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
  name: 'options.parse',
  tags: ['props', 'use-case'],
  parameters: defineDocsParam({
    description: {
      story: 'The options.parse allows you to provide a custom parse function. Use it when migrating from legacy formats.'
    }
  }),
  decorators: [withStoryCard({
    content: <p>
                    Pre-seeded sessionStorage with legacy format <code>{\`{ theme: "grayscale" }\`}</code> (no
                    value).
                </p>
  }), showSource({
    source: dedent\`
                const result = readSessionStorage(themes, storageKey, { parse: customParse })
            \`
  })],
  loaders: [() => {
    window.sessionStorage.setItem(STORAGE_KEY_PARSE, JSON.stringify({
      theme: 'grayscale'
    }));
    return {};
  }],
  render: () => {
    const result = readSessionStorage(themes, STORAGE_KEY_PARSE, {
      parse: customParseLegacy
    });
    return <div className="flex flex-col gap-4">
                <ThemeResultCard title="readSessionStorage() with custom parse" data-testid="store-read-result" result={result ?? {
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
}`,...F.parameters?.docs?.source}}},I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
  name: 'storageKey',
  tags: ['props'],
  decorators: [withStoryCard({
    content: <p>
                    Pass <code>storageKey</code> to determine the sessionStorage key used for persistence.
                </p>
  }), showSource({
    source: dedent\`
                readSessionStorage(themes, storageKey)
                writeSessionStorage(themes, storageKey, themeEntry(themes, 'current'))
            \`
  })],
  loaders: [() => {
    writeSessionStorage(themes, STORAGE_KEY, themeEntry(themes, 'current'));
    return {};
  }],
  render: () => {
    const result = readSessionStorage(themes, STORAGE_KEY);
    return <div className="flex flex-col gap-4">
                <StoryCard title="sessionStorage key" appearance="output">
                    <code>{STORAGE_KEY}</code>
                </StoryCard>
                <ThemeResultCard title="readSessionStorage() result" data-testid="store-read-result" result={result ?? {
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
}`,...I.parameters?.docs?.source}}},R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`{
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
                readSessionStorage(themes, storageKey)
                writeSessionStorage(themes, storageKey, themeEntry(themes, 'current'))
            \`
  })],
  loaders: [() => {
    window.sessionStorage.removeItem(THEMEMAP_STORAGE_KEY);
    writeSessionStorage(themes, THEMEMAP_STORAGE_KEY, themeEntry(themes, 'current'));
    return {};
  }],
  render: () => {
    const result = readSessionStorage(themes, THEMEMAP_STORAGE_KEY);
    return <div className="flex flex-col gap-4">
                <ThemeResultCard title="readSessionStorage() result" data-testid="store-read-result" result={result ?? {
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
}`,...R.parameters?.docs?.source}}},B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
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

                readSessionStorage(themes, storageKey)
                writeSessionStorage(themes, storageKey, themeEntry(themes, 'grayscale'))
            \`
  })],
  loaders: [() => {
    window.sessionStorage.removeItem(THEMEMAP_STORAGE_KEY);
    writeSessionStorage(themesArray, THEMEMAP_STORAGE_KEY, themeEntry(themesArray, 'grayscale'));
    return {};
  }],
  render: () => {
    const result = readSessionStorage(themesArray, THEMEMAP_STORAGE_KEY);
    return <div className="flex flex-col gap-4">
                <ThemeResultCard title="readSessionStorage() result" data-testid="store-read-result" result={result ?? {
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
}`,...B.parameters?.docs?.source}}},V=[`Playground`,`Read`,`ReadWhenEmpty`,`Write`,`ParseOption`,`StorageKey`,`ThemeMapStringValue`,`ThemeMapArrayValues`]})))()}H();export{F as ParseOption,A as Playground,j as Read,M as ReadWhenEmpty,I as StorageKey,B as ThemeMapArrayValues,R as ThemeMapStringValue,N as Write,V as __namedExportsOrder,D as default};