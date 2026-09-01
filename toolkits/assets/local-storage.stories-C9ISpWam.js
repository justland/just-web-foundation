import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./react-B6tGW3fj.js";import{a as n}from"./chunk-W22LQPXL-BSpKiHdn.js";import{a as r,c as i,i as a,l as o,s}from"./iframe-BJVp8-w1.js";import{n as c,t as l}from"./dedent-DQaCLeUO.js";import{n as u}from"./theme-entry-Cs_OPpJC.js";import{i as d,n as f,r as p,t as m}from"./write-local-storage-DMj-TxM1.js";import{n as h,t as g}from"./button-BlO48FDB.js";import{n as _,t as v}from"./theme-result-card-DmTK1KKZ.js";import{n as y,t as b}from"./theme-store-demo-CxcbzR8_.js";function x(e){return{read:()=>d(O,e),write:t=>f(O,e,t),subscribe:void 0}}function S(e,t){let n;try{n=t?JSON.parse(t):void 0}catch{return}if(!n?.theme||typeof n.theme!=`string`||!(n.theme in e))return;let r=n.theme;return{theme:r,value:e[r]}}var C,w,T,E,D,O,k,A,j,M,N,P,F,I,L,R,z,B,V,H,U,W,G;function K(){return(K=e((()=>{p(),m(),s(),c(),C=t(),h(),_(),y(),w=n(),{expect:T,userEvent:E}=__STORYBOOK_MODULE_TEST__,D={title:`theme/local-storage`,tags:[`func`,`version:2.0`],parameters:r({description:{component:`Low-level functions for reading and writing theme via localStorage: readLocalStorage, writeLocalStorage. No subscribe at function level (store uses StorageEvent).`}}),render:()=>(0,w.jsx)(w.Fragment,{})},O={current:`theme-current`,next:`theme-next`,grayscale:`theme-grayscale`,"high-contrast":`theme-high-contrast`},k=`theme-ls-func-demo`,A={tags:[`playground`],parameters:r({description:{story:`Interactive demo: readLocalStorage, writeLocalStorage. No subscribe (StorageEvent is at store level).`}}),decorators:[o(),i({source:l`
                const store = {
                  read: () => readLocalStorage(themes, storageKey),
                  write: (entry) => writeLocalStorage(themes, storageKey, entry),
                  subscribe: undefined
                }
                <ThemeStoreDemo store={store} themes={themes} />
            `})],loaders:[()=>(window.localStorage.removeItem(k),{})],render:()=>{let e=x(k);return(0,w.jsx)(b,{store:e,themes:O})},play:async({canvas:e})=>{await E.click(e.getByTestId(`theme-store-demo-btn-write-grayscale`)),await E.click(e.getByTestId(`theme-store-demo-btn-read`)),await T(e.getByTestId(`theme-store-demo-read`)).toHaveTextContent(`grayscale`)}},j={name:`readLocalStorage`,tags:[`props`],parameters:r({description:{story:`readLocalStorage(themes, storageKey, options?) reads the current theme from localStorage.`}}),decorators:[o(),i({source:l`
                const result = readLocalStorage(themes, storageKey)
            `})],loaders:[()=>(f(O,k,u(O,`grayscale`)),{})],render:()=>{let e=d(O,k);return(0,w.jsx)(v,{title:`readLocalStorage() result`,"data-testid":`store-read-result`,result:e??{theme:`grayscale`,value:O.grayscale}})},play:async({canvas:e})=>{await T(e.getByTestId(`store-read-result`)).toHaveTextContent(`theme: grayscale`),await T(e.getByTestId(`store-read-result`)).toHaveTextContent(`value: theme-grayscale`)}},M={name:`readLocalStorage: undefined when empty`,tags:[`props`],parameters:r({description:{story:`When nothing is stored at the key, readLocalStorage returns undefined.`}}),decorators:[o(),i({source:l`
                const result = readLocalStorage(themes, storageKey)
                // undefined when empty
            `})],loaders:[()=>(window.localStorage.removeItem(k),{})],render:()=>{let e=d(O,k);return(0,w.jsx)(v,{title:`readLocalStorage() result`,"data-testid":`store-read-result`,result:e===void 0?{theme:void 0,value:void 0}:e})},play:async({canvas:e})=>{await T(e.getByTestId(`store-read-result`)).toHaveTextContent(`(undefined)`)}},N={name:`writeLocalStorage`,tags:[`props`],parameters:r({description:{story:`writeLocalStorage(themes, storageKey, entry) persists the theme to localStorage.`}}),decorators:[o(),i({source:l`
                writeLocalStorage(themes, storageKey, themeEntry(themes, 'high-contrast'))
            `})],loaders:[()=>(window.localStorage.removeItem(k),{})],render:()=>{let[e,t]=(0,C.useState)(()=>d(O,k)?.theme??null);return(0,w.jsxs)(`div`,{className:`flex flex-col gap-4`,children:[(0,w.jsx)(`div`,{className:`flex flex-wrap gap-2`,children:Object.keys(O).map(e=>(0,w.jsxs)(g,{"data-testid":`write-${e}`,onPress:()=>{f(O,k,u(O,e)),t(e)},children:[`write(`,e,`)`]},e))}),(0,w.jsx)(v,{title:`readLocalStorage() after write`,"data-testid":`store-write-result`,result:e?{theme:e,value:O[e]}:{theme:`current`,value:O.current}})]})},play:async({canvas:e})=>{await E.click(e.getByTestId(`write-grayscale`)),await T(e.getByTestId(`store-write-result`)).toHaveTextContent(`theme: grayscale`),await T(e.getByTestId(`store-write-result`)).toHaveTextContent(`value: theme-grayscale`)}},P=`theme-ls-func-validation`,F={name:`Stored Validation: legacy format returns undefined`,tags:[`integration`],parameters:r({description:{story:`Strict validation: when stored JSON has no value field (legacy format), readLocalStorage returns undefined.`}}),decorators:[o({content:(0,w.jsxs)(`p`,{children:[`Pre-seeded localStorage with legacy format `,(0,w.jsx)(`code`,{children:`{ theme: "dark" }`}),` (no value). readLocalStorage returns undefined.`]})}),i({source:l`
                // Legacy storage: { theme: "dark" } - no value field
                // readLocalStorage(themes, key) returns undefined (strict validation)
            `})],loaders:[()=>(window.localStorage.setItem(P,JSON.stringify({theme:`dark`})),{})],render:()=>{let e=d(O,P);return(0,w.jsx)(`div`,{className:`flex flex-col gap-4`,children:(0,w.jsx)(v,{title:`readLocalStorage() result`,"data-testid":`store-read-result`,result:e===void 0?{theme:void 0,value:void 0}:e})})},play:async({canvas:e})=>{await T(e.getByTestId(`store-read-result`)).toHaveTextContent(`(undefined)`)}},I=`theme-ls-func-parse`,L={name:`options.parse`,tags:[`props`,`use-case`],parameters:r({description:{story:`The options.parse allows you to provide a custom parse function. Use it when migrating from legacy formats. This example accepts legacy format { theme } (no value field).`}}),decorators:[o({content:(0,w.jsxs)(`p`,{children:[`Pre-seeded localStorage with legacy format `,(0,w.jsx)(`code`,{children:`{ theme: "grayscale" }`}),` (no value).`]})}),i({source:l`
                const result = readLocalStorage(themes, storageKey, { parse: customParse })
            `})],loaders:[()=>(window.localStorage.setItem(I,JSON.stringify({theme:`grayscale`})),{})],render:()=>{let e=d(O,I,{parse:S});return(0,w.jsx)(`div`,{className:`flex flex-col gap-4`,children:(0,w.jsx)(v,{title:`readLocalStorage() with custom parse`,"data-testid":`store-read-result`,result:e??{theme:`grayscale`,value:O.grayscale}})})},play:async({canvas:e})=>{await T(e.getByTestId(`store-read-result`)).toHaveTextContent(`theme: grayscale`),await T(e.getByTestId(`store-read-result`)).toHaveTextContent(`value: theme-grayscale`)}},R={name:`storageKey`,tags:[`props`],decorators:[o({content:(0,w.jsxs)(`p`,{children:[`Pass `,(0,w.jsx)(`code`,{children:`storageKey`}),` to determine the localStorage key used for persistence.`]})}),i({source:l`
                readLocalStorage(themes, storageKey)
                writeLocalStorage(themes, storageKey, themeEntry(themes, 'current'))
            `})],loaders:[()=>(f(O,k,u(O,`current`)),{})],render:()=>{let e=d(O,k);return(0,w.jsxs)(`div`,{className:`flex flex-col gap-4`,children:[(0,w.jsx)(a,{title:`localStorage key`,appearance:`output`,children:(0,w.jsx)(`code`,{children:k})}),(0,w.jsx)(v,{title:`readLocalStorage() result`,"data-testid":`store-read-result`,result:e??{theme:`current`,value:O.current}})]})},play:async({canvas:e})=>{await T(e.getByTestId(`store-read-result`)).toHaveTextContent(`theme: current`),await T(e.getByTestId(`store-read-result`)).toHaveTextContent(`value: theme-current`)}},z=`theme-ls-func-thememap`,B={name:`themes: string value`,tags:[`props`],parameters:r({description:{story:`themes values can be a single string per theme.`}}),decorators:[o({content:(0,w.jsx)(`p`,{children:`Each theme maps to one string value.`})}),i({source:l`
                readLocalStorage(themes, storageKey)
                writeLocalStorage(themes, storageKey, themeEntry(themes, 'current'))
            `})],loaders:[()=>(window.localStorage.removeItem(z),f(O,z,u(O,`current`)),{})],render:()=>{let e=d(O,z);return(0,w.jsx)(`div`,{className:`flex flex-col gap-4`,children:(0,w.jsx)(v,{title:`readLocalStorage() result`,"data-testid":`store-read-result`,result:e??{theme:`current`,value:O.current}})})},play:async({canvas:e})=>{await T(e.getByTestId(`store-read-result`)).toHaveTextContent(`theme: current`),await T(e.getByTestId(`store-read-result`)).toHaveTextContent(`value: theme-current`)}},V={current:`theme-current`,grayscale:[`theme-grayscale`,`app:bg-gray-100`],"high-contrast":`theme-high-contrast`},H={name:`themes: array values`,tags:[`props`],parameters:r({description:{story:`themes values can be string[]. Stored and retrieved value is the full array.`}}),decorators:[o({content:(0,w.jsxs)(`p`,{children:[`Each theme can map to `,(0,w.jsx)(`code`,{children:`string[]`}),`. `,(0,w.jsx)(`code`,{children:`ThemeResult.value`}),` persists the full array.`]})}),i({source:l`
                const themes = {
                    current: 'theme-current',
                    grayscale: ['theme-grayscale', 'app:bg-gray-100'],
                    'high-contrast': 'theme-high-contrast'
                } as const

                readLocalStorage(themes, storageKey)
                writeLocalStorage(themes, storageKey, themeEntry(themes, 'grayscale'))
            `})],loaders:[()=>(window.localStorage.removeItem(z),f(V,z,u(V,`grayscale`)),{})],render:()=>{let e=d(V,z);return(0,w.jsx)(`div`,{className:`flex flex-col gap-4`,children:(0,w.jsx)(v,{title:`readLocalStorage() result`,"data-testid":`store-read-result`,result:e??{theme:`grayscale`,value:V.grayscale}})})},play:async({canvas:e})=>{await T(e.getByTestId(`store-read-result`)).toHaveTextContent(`theme: grayscale`),await T(e.getByTestId(`store-read-result`)).toHaveTextContent(`value: [theme-grayscale, app:bg-gray-100]`)}},U={light:`theme-light`,dark:{themeValue:`theme-dark`,contrast:`high`}},W={name:`themes: object value`,tags:[`props`],parameters:r({description:{story:`themes values can be { themeValue: string | string[] }. Extra props (e.g. contrast) are preserved when read from storage.`}}),decorators:[o({content:(0,w.jsxs)(`p`,{children:[`Each theme can map to `,(0,w.jsx)(`code`,{children:`{ themeValue, ...extra }`}),`. Stored and retrieved value preserves extra props for user metadata.`]})}),i({source:l`
                const themes = {
                    light: 'theme-light',
                    dark: { themeValue: 'theme-dark', contrast: 'high' }
                } as const

                readLocalStorage(themes, storageKey)
                writeLocalStorage(themes, storageKey, { theme: 'dark', value: themes.dark })
            `})],loaders:[()=>(window.localStorage.removeItem(z),f(U,z,{theme:`dark`,value:{themeValue:`theme-dark`,contrast:`high`}}),{})],render:()=>{let e=d(U,z);return(0,w.jsx)(`div`,{className:`flex flex-col gap-4`,children:(0,w.jsx)(v,{title:`readLocalStorage() result`,"data-testid":`store-read-result`,result:e??{theme:`dark`,value:U.dark}})})},play:async({canvas:e})=>{await T(e.getByTestId(`store-read-result`)).toHaveTextContent(`theme: dark`),await T(e.getByTestId(`store-read-result`)).toHaveTextContent(`theme-dark`),await T(e.getByTestId(`store-read-result`)).toHaveTextContent(`contrast`),await T(e.getByTestId(`store-read-result`)).toHaveTextContent(`high`)}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  tags: ['playground'],
  parameters: defineDocsParam({
    description: {
      story: 'Interactive demo: readLocalStorage, writeLocalStorage. No subscribe (StorageEvent is at store level).'
    }
  }),
  decorators: [withStoryCard(), showSource({
    source: dedent\`
                const store = {
                  read: () => readLocalStorage(themes, storageKey),
                  write: (entry) => writeLocalStorage(themes, storageKey, entry),
                  subscribe: undefined
                }
                <ThemeStoreDemo store={store} themes={themes} />
            \`
  })],
  loaders: [() => {
    window.localStorage.removeItem(STORAGE_KEY);
    return {};
  }],
  render: () => {
    const store = createLocalStorageStore(STORAGE_KEY);
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
  name: 'readLocalStorage',
  tags: ['props'],
  parameters: defineDocsParam({
    description: {
      story: 'readLocalStorage(themes, storageKey, options?) reads the current theme from localStorage.'
    }
  }),
  decorators: [withStoryCard(), showSource({
    source: dedent\`
                const result = readLocalStorage(themes, storageKey)
            \`
  })],
  loaders: [() => {
    writeLocalStorage(themes, STORAGE_KEY, themeEntry(themes, 'grayscale'));
    return {};
  }],
  render: () => {
    const result = readLocalStorage(themes, STORAGE_KEY);
    return <ThemeResultCard title="readLocalStorage() result" data-testid="store-read-result" result={result ?? {
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
  name: 'readLocalStorage: undefined when empty',
  tags: ['props'],
  parameters: defineDocsParam({
    description: {
      story: 'When nothing is stored at the key, readLocalStorage returns undefined.'
    }
  }),
  decorators: [withStoryCard(), showSource({
    source: dedent\`
                const result = readLocalStorage(themes, storageKey)
                // undefined when empty
            \`
  })],
  loaders: [() => {
    window.localStorage.removeItem(STORAGE_KEY);
    return {};
  }],
  render: () => {
    const result = readLocalStorage(themes, STORAGE_KEY);
    return <ThemeResultCard title="readLocalStorage() result" data-testid="store-read-result" result={result !== undefined ? result : {
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
  name: 'writeLocalStorage',
  tags: ['props'],
  parameters: defineDocsParam({
    description: {
      story: 'writeLocalStorage(themes, storageKey, entry) persists the theme to localStorage.'
    }
  }),
  decorators: [withStoryCard(), showSource({
    source: dedent\`
                writeLocalStorage(themes, storageKey, themeEntry(themes, 'high-contrast'))
            \`
  })],
  loaders: [() => {
    window.localStorage.removeItem(STORAGE_KEY);
    return {};
  }],
  render: () => {
    const [currentTheme, setCurrentTheme] = useState<ExampleTheme | null>(() => {
      const r = readLocalStorage(themes, STORAGE_KEY);
      return r?.theme ?? null;
    });
    return <div className="flex flex-col gap-4">
                <div className="flex flex-wrap gap-2">
                    {(Object.keys(themes) as ExampleTheme[]).map(theme => <Button key={theme} data-testid={\`write-\${theme}\`} onPress={() => {
          writeLocalStorage(themes, STORAGE_KEY, themeEntry(themes, theme));
          setCurrentTheme(theme);
        }}>
                            write({theme})
                        </Button>)}
                </div>
                <ThemeResultCard title="readLocalStorage() after write" data-testid="store-write-result" result={currentTheme ? {
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
  name: 'Stored Validation: legacy format returns undefined',
  tags: ['integration'],
  parameters: defineDocsParam({
    description: {
      story: 'Strict validation: when stored JSON has no value field (legacy format), readLocalStorage returns undefined.'
    }
  }),
  decorators: [withStoryCard({
    content: <p>
                    Pre-seeded localStorage with legacy format <code>{\`{ theme: "dark" }\`}</code> (no value).
                    readLocalStorage returns undefined.
                </p>
  }), showSource({
    source: dedent\`
                // Legacy storage: { theme: "dark" } - no value field
                // readLocalStorage(themes, key) returns undefined (strict validation)
            \`
  })],
  loaders: [() => {
    window.localStorage.setItem(STORAGE_KEY_VALIDATION, JSON.stringify({
      theme: 'dark'
    }));
    return {};
  }],
  render: () => {
    const result = readLocalStorage(themes, STORAGE_KEY_VALIDATION);
    return <div className="flex flex-col gap-4">
                <ThemeResultCard title="readLocalStorage() result" data-testid="store-read-result" result={result !== undefined ? result : {
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
}`,...F.parameters?.docs?.source}}},L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`{
  name: 'options.parse',
  tags: ['props', 'use-case'],
  parameters: defineDocsParam({
    description: {
      story: 'The options.parse allows you to provide a custom parse function. Use it when migrating from legacy formats. This example accepts legacy format { theme } (no value field).'
    }
  }),
  decorators: [withStoryCard({
    content: <p>
                    Pre-seeded localStorage with legacy format <code>{\`{ theme: "grayscale" }\`}</code> (no
                    value).
                </p>
  }), showSource({
    source: dedent\`
                const result = readLocalStorage(themes, storageKey, { parse: customParse })
            \`
  })],
  loaders: [() => {
    window.localStorage.setItem(STORAGE_KEY_PARSE, JSON.stringify({
      theme: 'grayscale'
    }));
    return {};
  }],
  render: () => {
    const result = readLocalStorage(themes, STORAGE_KEY_PARSE, {
      parse: customParseLegacy
    });
    return <div className="flex flex-col gap-4">
                <ThemeResultCard title="readLocalStorage() with custom parse" data-testid="store-read-result" result={result ?? {
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
}`,...L.parameters?.docs?.source}}},R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`{
  name: 'storageKey',
  tags: ['props'],
  decorators: [withStoryCard({
    content: <p>
                    Pass <code>storageKey</code> to determine the localStorage key used for persistence.
                </p>
  }), showSource({
    source: dedent\`
                readLocalStorage(themes, storageKey)
                writeLocalStorage(themes, storageKey, themeEntry(themes, 'current'))
            \`
  })],
  loaders: [() => {
    writeLocalStorage(themes, STORAGE_KEY, themeEntry(themes, 'current'));
    return {};
  }],
  render: () => {
    const result = readLocalStorage(themes, STORAGE_KEY);
    return <div className="flex flex-col gap-4">
                <StoryCard title="localStorage key" appearance="output">
                    <code>{STORAGE_KEY}</code>
                </StoryCard>
                <ThemeResultCard title="readLocalStorage() result" data-testid="store-read-result" result={result ?? {
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
                readLocalStorage(themes, storageKey)
                writeLocalStorage(themes, storageKey, themeEntry(themes, 'current'))
            \`
  })],
  loaders: [() => {
    window.localStorage.removeItem(THEMEMAP_STORAGE_KEY);
    writeLocalStorage(themes, THEMEMAP_STORAGE_KEY, themeEntry(themes, 'current'));
    return {};
  }],
  render: () => {
    const result = readLocalStorage(themes, THEMEMAP_STORAGE_KEY);
    return <div className="flex flex-col gap-4">
                <ThemeResultCard title="readLocalStorage() result" data-testid="store-read-result" result={result ?? {
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
}`,...B.parameters?.docs?.source}}},H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`{
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

                readLocalStorage(themes, storageKey)
                writeLocalStorage(themes, storageKey, themeEntry(themes, 'grayscale'))
            \`
  })],
  loaders: [() => {
    window.localStorage.removeItem(THEMEMAP_STORAGE_KEY);
    writeLocalStorage(themesArray, THEMEMAP_STORAGE_KEY, themeEntry(themesArray, 'grayscale'));
    return {};
  }],
  render: () => {
    const result = readLocalStorage(themesArray, THEMEMAP_STORAGE_KEY);
    return <div className="flex flex-col gap-4">
                <ThemeResultCard title="readLocalStorage() result" data-testid="store-read-result" result={result ?? {
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
}`,...H.parameters?.docs?.source}}},W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`{
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

                readLocalStorage(themes, storageKey)
                writeLocalStorage(themes, storageKey, { theme: 'dark', value: themes.dark })
            \`
  })],
  loaders: [() => {
    window.localStorage.removeItem(THEMEMAP_STORAGE_KEY);
    writeLocalStorage(themesObject, THEMEMAP_STORAGE_KEY, {
      theme: 'dark',
      value: {
        themeValue: 'theme-dark',
        contrast: 'high'
      }
    });
    return {};
  }],
  render: () => {
    const result = readLocalStorage(themesObject, THEMEMAP_STORAGE_KEY);
    return <div className="flex flex-col gap-4">
                <ThemeResultCard title="readLocalStorage() result" data-testid="store-read-result" result={result ?? {
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
}`,...W.parameters?.docs?.source}}},G=[`Playground`,`Read`,`ReadWhenEmpty`,`Write`,`StoredValidationShapeMismatch`,`ParseOption`,`StorageKey`,`ThemeMapStringValue`,`ThemeMapArrayValues`,`ThemeMapObjectValue`]})))()}K();export{L as ParseOption,A as Playground,j as Read,M as ReadWhenEmpty,R as StorageKey,F as StoredValidationShapeMismatch,H as ThemeMapArrayValues,W as ThemeMapObjectValue,B as ThemeMapStringValue,N as Write,G as __namedExportsOrder,D as default};