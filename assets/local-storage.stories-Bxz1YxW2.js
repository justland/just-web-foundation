import{j as t,d as n,w as c,s as l,r as B,S as H}from"./iframe-y78tOg11.js";import{d}from"./dedent-BuYMbVyj.js";import{t as p}from"./theme-entry-D4S_RAMB.js";import{r as m,w as h}from"./write-local-storage-CF1YWIKZ.js";import{B as j}from"./button-DtUQWtfd.js";import{T as u}from"./theme-result-card-DM3-FXnE.js";import{T as k}from"./theme-store-demo-CoQn8XpR.js";import"./preload-helper-PPVm8Dsz.js";import"./write-web-storage-DRJlRT-M.js";import"./parse-stored-theme-Dsx2RsUi.js";import"./resolve-theme-map-value-CsrxdXA7.js";const{expect:a,userEvent:A}=__STORYBOOK_MODULE_TEST__,q={title:"theme/local-storage",tags:["func","version:1.0"],parameters:n({description:{component:"Low-level functions for reading and writing theme via localStorage: readLocalStorage, writeLocalStorage. No subscribe at function level (store uses StorageEvent)."}}),render:()=>t.jsx(t.Fragment,{})},r={current:"theme-current",next:"theme-next",grayscale:"theme-grayscale","high-contrast":"theme-high-contrast"},o="theme-ls-func-demo";function P(e){return{read:()=>m(r,e),write:g=>h(r,e,g),subscribe:void 0}}const y={tags:["playground"],parameters:n({description:{story:"Interactive demo: readLocalStorage, writeLocalStorage. No subscribe (StorageEvent is at store level)."}}),decorators:[c(),l({source:d`
                const store = {
                  read: () => readLocalStorage(themes, storageKey),
                  write: (entry) => writeLocalStorage(themes, storageKey, entry),
                  subscribe: undefined
                }
                <ThemeStoreDemo store={store} themes={themes} />
            `})],loaders:[()=>(window.localStorage.removeItem(o),{})],render:()=>{const e=P(o);return t.jsx(k,{store:e,themes:r})},play:async({canvas:e})=>{await A.click(e.getByTestId("theme-store-demo-btn-write-grayscale")),await A.click(e.getByTestId("theme-store-demo-btn-read")),await a(e.getByTestId("theme-store-demo-read")).toHaveTextContent("grayscale")}},S={name:"readLocalStorage",tags:["props"],parameters:n({description:{story:"readLocalStorage(themes, storageKey, options?) reads the current theme from localStorage."}}),decorators:[c(),l({source:d`
                const result = readLocalStorage(themes, storageKey)
            `})],loaders:[()=>(h(r,o,p(r,"grayscale")),{})],render:()=>{const e=m(r,o);return t.jsx(u,{title:"readLocalStorage() result","data-testid":"store-read-result",result:e??{theme:"grayscale",value:r.grayscale}})},play:async({canvas:e})=>{await a(e.getByTestId("store-read-result")).toHaveTextContent("theme: grayscale"),await a(e.getByTestId("store-read-result")).toHaveTextContent("value: theme-grayscale")}},v={name:"readLocalStorage: undefined when empty",tags:["props"],parameters:n({description:{story:"When nothing is stored at the key, readLocalStorage returns undefined."}}),decorators:[c(),l({source:d`
                const result = readLocalStorage(themes, storageKey)
                // undefined when empty
            `})],loaders:[()=>(window.localStorage.removeItem(o),{})],render:()=>{const e=m(r,o);return t.jsx(u,{title:"readLocalStorage() result","data-testid":"store-read-result",result:e!==void 0?e:{theme:void 0,value:void 0}})},play:async({canvas:e})=>{await a(e.getByTestId("store-read-result")).toHaveTextContent("(undefined)")}},w={name:"writeLocalStorage",tags:["props"],parameters:n({description:{story:"writeLocalStorage(themes, storageKey, entry) persists the theme to localStorage."}}),decorators:[c(),l({source:d`
                writeLocalStorage(themes, storageKey, themeEntry(themes, 'high-contrast'))
            `})],loaders:[()=>(window.localStorage.removeItem(o),{})],render:()=>{const[e,g]=B.useState(()=>m(r,o)?.theme??null);return t.jsxs("div",{className:"flex flex-col gap-4",children:[t.jsx("div",{className:"flex flex-wrap gap-2",children:Object.keys(r).map(s=>t.jsxs(j,{"data-testid":`write-${s}`,onPress:()=>{h(r,o,p(r,s)),g(s)},children:["write(",s,")"]},s))}),t.jsx(u,{title:"readLocalStorage() after write","data-testid":"store-write-result",result:e?{theme:e,value:r[e]}:{theme:"current",value:r.current}})]})},play:async({canvas:e})=>{await A.click(e.getByTestId("write-grayscale")),await a(e.getByTestId("store-write-result")).toHaveTextContent("theme: grayscale"),await a(e.getByTestId("store-write-result")).toHaveTextContent("value: theme-grayscale")}},_="theme-ls-func-validation",T={name:"Stored Validation: legacy format returns undefined",tags:["integration"],parameters:n({description:{story:"Strict validation: when stored JSON has no value field (legacy format), readLocalStorage returns undefined."}}),decorators:[c({content:t.jsxs("p",{children:["Pre-seeded localStorage with legacy format ",t.jsx("code",{children:'{ theme: "dark" }'})," (no value). readLocalStorage returns undefined."]})}),l({source:d`
                // Legacy storage: { theme: "dark" } - no value field
                // readLocalStorage(themes, key) returns undefined (strict validation)
            `})],loaders:[()=>(window.localStorage.setItem(_,JSON.stringify({theme:"dark"})),{})],render:()=>{const e=m(r,_);return t.jsx("div",{className:"flex flex-col gap-4",children:t.jsx(u,{title:"readLocalStorage() result","data-testid":"store-read-result",result:e!==void 0?e:{theme:void 0,value:void 0}})})},play:async({canvas:e})=>{await a(e.getByTestId("store-read-result")).toHaveTextContent("(undefined)")}},R="theme-ls-func-parse";function b(e,g){let s;try{s=g?JSON.parse(g):void 0}catch{return}if(!s?.theme||typeof s.theme!="string"||!(s.theme in e))return;const O=s.theme;return{theme:O,value:e[O]}}const x={name:"options.parse",tags:["props","use-case"],parameters:n({description:{story:"The options.parse allows you to provide a custom parse function. Use it when migrating from legacy formats. This example accepts legacy format { theme } (no value field)."}}),decorators:[c({content:t.jsxs("p",{children:["Pre-seeded localStorage with legacy format ",t.jsx("code",{children:'{ theme: "grayscale" }'})," (no value)."]})}),l({source:d`
                const result = readLocalStorage(themes, storageKey, { parse: customParse })
            `})],loaders:[()=>(window.localStorage.setItem(R,JSON.stringify({theme:"grayscale"})),{})],render:()=>{const e=m(r,R,{parse:b});return t.jsx("div",{className:"flex flex-col gap-4",children:t.jsx(u,{title:"readLocalStorage() with custom parse","data-testid":"store-read-result",result:e??{theme:"grayscale",value:r.grayscale}})})},play:async({canvas:e})=>{await a(e.getByTestId("store-read-result")).toHaveTextContent("theme: grayscale"),await a(e.getByTestId("store-read-result")).toHaveTextContent("value: theme-grayscale")}},f={name:"storageKey",tags:["props"],decorators:[c({content:t.jsxs("p",{children:["Pass ",t.jsx("code",{children:"storageKey"})," to determine the localStorage key used for persistence."]})}),l({source:d`
                readLocalStorage(themes, storageKey)
                writeLocalStorage(themes, storageKey, themeEntry(themes, 'current'))
            `})],loaders:[()=>(h(r,o,p(r,"current")),{})],render:()=>{const e=m(r,o);return t.jsxs("div",{className:"flex flex-col gap-4",children:[t.jsx(H,{title:"localStorage key",appearance:"output",children:t.jsx("code",{children:o})}),t.jsx(u,{title:"readLocalStorage() result","data-testid":"store-read-result",result:e??{theme:"current",value:r.current}})]})},play:async({canvas:e})=>{await a(e.getByTestId("store-read-result")).toHaveTextContent("theme: current"),await a(e.getByTestId("store-read-result")).toHaveTextContent("value: theme-current")}},i="theme-ls-func-thememap",E={name:"themes: string value",tags:["props"],parameters:n({description:{story:"themes values can be a single string per theme."}}),decorators:[c({content:t.jsx("p",{children:"Each theme maps to one string value."})}),l({source:d`
                readLocalStorage(themes, storageKey)
                writeLocalStorage(themes, storageKey, themeEntry(themes, 'current'))
            `})],loaders:[()=>(window.localStorage.removeItem(i),h(r,i,p(r,"current")),{})],render:()=>{const e=m(r,i);return t.jsx("div",{className:"flex flex-col gap-4",children:t.jsx(u,{title:"readLocalStorage() result","data-testid":"store-read-result",result:e??{theme:"current",value:r.current}})})},play:async({canvas:e})=>{await a(e.getByTestId("store-read-result")).toHaveTextContent("theme: current"),await a(e.getByTestId("store-read-result")).toHaveTextContent("value: theme-current")}},L={current:"theme-current",grayscale:["theme-grayscale","app:bg-gray-100"],"high-contrast":"theme-high-contrast"},I={name:"themes: array values",tags:["props"],parameters:n({description:{story:"themes values can be string[]. Stored and retrieved value is the full array."}}),decorators:[c({content:t.jsxs("p",{children:["Each theme can map to ",t.jsx("code",{children:"string[]"}),". ",t.jsx("code",{children:"ThemeResult.value"})," persists the full array."]})}),l({source:d`
                const themes = {
                    current: 'theme-current',
                    grayscale: ['theme-grayscale', 'app:bg-gray-100'],
                    'high-contrast': 'theme-high-contrast'
                } as const

                readLocalStorage(themes, storageKey)
                writeLocalStorage(themes, storageKey, themeEntry(themes, 'grayscale'))
            `})],loaders:[()=>(window.localStorage.removeItem(i),h(L,i,p(L,"grayscale")),{})],render:()=>{const e=m(L,i);return t.jsx("div",{className:"flex flex-col gap-4",children:t.jsx(u,{title:"readLocalStorage() result","data-testid":"store-read-result",result:e??{theme:"grayscale",value:L.grayscale}})})},play:async({canvas:e})=>{await a(e.getByTestId("store-read-result")).toHaveTextContent("theme: grayscale"),await a(e.getByTestId("store-read-result")).toHaveTextContent("value: [theme-grayscale, app:bg-gray-100]")}},C={light:"theme-light",dark:{themeValue:"theme-dark",contrast:"high"}},K={name:"themes: object value",tags:["props"],parameters:n({description:{story:"themes values can be { themeValue: string | string[] }. Extra props (e.g. contrast) are preserved when read from storage."}}),decorators:[c({content:t.jsxs("p",{children:["Each theme can map to ",t.jsx("code",{children:"{ themeValue, ...extra }"}),". Stored and retrieved value preserves extra props for user metadata."]})}),l({source:d`
                const themes = {
                    light: 'theme-light',
                    dark: { themeValue: 'theme-dark', contrast: 'high' }
                } as const

                readLocalStorage(themes, storageKey)
                writeLocalStorage(themes, storageKey, { theme: 'dark', value: themes.dark })
            `})],loaders:[()=>(window.localStorage.removeItem(i),h(C,i,{theme:"dark",value:{themeValue:"theme-dark",contrast:"high"}}),{})],render:()=>{const e=m(C,i);return t.jsx("div",{className:"flex flex-col gap-4",children:t.jsx(u,{title:"readLocalStorage() result","data-testid":"store-read-result",result:e??{theme:"dark",value:C.dark}})})},play:async({canvas:e})=>{await a(e.getByTestId("store-read-result")).toHaveTextContent("theme: dark"),await a(e.getByTestId("store-read-result")).toHaveTextContent("theme-dark"),await a(e.getByTestId("store-read-result")).toHaveTextContent("contrast"),await a(e.getByTestId("store-read-result")).toHaveTextContent("high")}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
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
}`,...y.parameters?.docs?.source}}};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
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
}`,...S.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
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
}`,...v.parameters?.docs?.source}}};w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
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
}`,...w.parameters?.docs?.source}}};T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
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
}`,...T.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
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
}`,...x.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
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
}`,...f.parameters?.docs?.source}}};E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
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
}`,...E.parameters?.docs?.source}}};I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
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
}`,...I.parameters?.docs?.source}}};K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`{
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
}`,...K.parameters?.docs?.source}}};const z=["Playground","Read","ReadWhenEmpty","Write","StoredValidationShapeMismatch","ParseOption","StorageKey","ThemeMapStringValue","ThemeMapArrayValues","ThemeMapObjectValue"];export{x as ParseOption,y as Playground,S as Read,v as ReadWhenEmpty,f as StorageKey,T as StoredValidationShapeMismatch,I as ThemeMapArrayValues,K as ThemeMapObjectValue,E as ThemeMapStringValue,w as Write,z as __namedExportsOrder,q as default};
