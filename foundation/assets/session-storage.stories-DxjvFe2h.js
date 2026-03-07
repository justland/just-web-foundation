import{j as t,d as n,w as i,s as c,r as _,S as A}from"./iframe-CWQnDVRD.js";import{d}from"./dedent-BuYMbVyj.js";import{t as y}from"./theme-entry-D4S_RAMB.js";import{r as m,w as h}from"./write-session-storage-CmPsdO-d.js";import{B}from"./button-DkrWu6B2.js";import{T as l}from"./theme-result-card-nJPzGwi5.js";import{T as H}from"./theme-store-demo-EQbQa_M6.js";import"./preload-helper-PPVm8Dsz.js";import"./write-web-storage-H7mtIjJa.js";import"./parse-stored-theme-Dsx2RsUi.js";import"./resolve-theme-map-value-CsrxdXA7.js";import"./resolve-class-name-BJKDzybK.js";import"./append-id-Vsg144gU.js";const{expect:s,userEvent:C}=__STORYBOOK_MODULE_TEST__,$={title:"theme/session-storage",tags:["func","version:2.0"],parameters:n({description:{component:"Low-level functions for reading and writing theme via sessionStorage: readSessionStorage, writeSessionStorage. Persists per tab. No subscribe at function level."}}),render:()=>t.jsx(t.Fragment,{})},r={current:"theme-current",next:"theme-next",grayscale:"theme-grayscale","high-contrast":"theme-high-contrast"},o="theme-ss-func-demo";function O(e){return{read:()=>m(r,e),write:u=>h(r,e,u),subscribe:void 0}}const S={tags:["playground"],parameters:n({description:{story:"Interactive demo: readSessionStorage, writeSessionStorage. No subscribe at function level."}}),decorators:[i(),c({source:d`
                const store = {
                  read: () => readSessionStorage(themes, storageKey),
                  write: (entry) => writeSessionStorage(themes, storageKey, entry),
                  subscribe: undefined
                }
                <ThemeStoreDemo store={store} themes={themes} />
            `})],loaders:[()=>(window.sessionStorage.removeItem(o),{})],render:()=>{const e=O(o);return t.jsx(H,{store:e,themes:r})},play:async({canvas:e})=>{await C.click(e.getByTestId("theme-store-demo-btn-write-grayscale")),await C.click(e.getByTestId("theme-store-demo-btn-read")),await s(e.getByTestId("theme-store-demo-read")).toHaveTextContent("grayscale")}},p={name:"readSessionStorage",tags:["props"],parameters:n({description:{story:"readSessionStorage(themes, storageKey, options?) reads the current theme from sessionStorage."}}),decorators:[i(),c({source:d`
                const result = readSessionStorage(themes, storageKey)
            `})],loaders:[()=>(h(r,o,y(r,"grayscale")),{})],render:()=>{const e=m(r,o);return t.jsx(l,{title:"readSessionStorage() result","data-testid":"store-read-result",result:e??{theme:"grayscale",value:r.grayscale}})},play:async({canvas:e})=>{await s(e.getByTestId("store-read-result")).toHaveTextContent("theme: grayscale"),await s(e.getByTestId("store-read-result")).toHaveTextContent("value: theme-grayscale")}},v={name:"readSessionStorage: undefined when empty",tags:["props"],parameters:n({description:{story:"When nothing is stored at the key, readSessionStorage returns undefined."}}),decorators:[i(),c({source:d`
                const result = readSessionStorage(themes, storageKey)
                // undefined when empty
            `})],loaders:[()=>(window.sessionStorage.removeItem(o),{})],render:()=>{const e=m(r,o);return t.jsx(l,{title:"readSessionStorage() result","data-testid":"store-read-result",result:e!==void 0?e:{theme:void 0,value:void 0}})},play:async({canvas:e})=>{await s(e.getByTestId("store-read-result")).toHaveTextContent("(undefined)")}},w={name:"writeSessionStorage",tags:["props"],parameters:n({description:{story:"writeSessionStorage(themes, storageKey, entry) persists the theme to sessionStorage."}}),decorators:[i(),c({source:d`
                writeSessionStorage(themes, storageKey, themeEntry(themes, 'high-contrast'))
            `})],loaders:[()=>(window.sessionStorage.removeItem(o),{})],render:()=>{const[e,u]=_.useState(()=>m(r,o)?.theme??null);return t.jsxs("div",{className:"flex flex-col gap-4",children:[t.jsx("div",{className:"flex flex-wrap gap-2",children:Object.keys(r).map(a=>t.jsxs(B,{"data-testid":`write-${a}`,onPress:()=>{h(r,o,y(r,a)),u(a)},children:["write(",a,")"]},a))}),t.jsx(l,{title:"readSessionStorage() after write","data-testid":"store-write-result",result:e?{theme:e,value:r[e]}:{theme:"current",value:r.current}})]})},play:async({canvas:e})=>{await C.click(e.getByTestId("write-grayscale")),await s(e.getByTestId("store-write-result")).toHaveTextContent("theme: grayscale"),await s(e.getByTestId("store-write-result")).toHaveTextContent("value: theme-grayscale")}},R="theme-ss-func-parse";function P(e,u){let a;try{a=u?JSON.parse(u):void 0}catch{return}if(!a?.theme||typeof a.theme!="string"||!(a.theme in e))return;const I=a.theme;return{theme:I,value:e[I]}}const T={name:"options.parse",tags:["props","use-case"],parameters:n({description:{story:"The options.parse allows you to provide a custom parse function. Use it when migrating from legacy formats."}}),decorators:[i({content:t.jsxs("p",{children:["Pre-seeded sessionStorage with legacy format ",t.jsx("code",{children:'{ theme: "grayscale" }'})," (no value)."]})}),c({source:d`
                const result = readSessionStorage(themes, storageKey, { parse: customParse })
            `})],loaders:[()=>(window.sessionStorage.setItem(R,JSON.stringify({theme:"grayscale"})),{})],render:()=>{const e=m(r,R,{parse:P});return t.jsx("div",{className:"flex flex-col gap-4",children:t.jsx(l,{title:"readSessionStorage() with custom parse","data-testid":"store-read-result",result:e??{theme:"grayscale",value:r.grayscale}})})},play:async({canvas:e})=>{await s(e.getByTestId("store-read-result")).toHaveTextContent("theme: grayscale"),await s(e.getByTestId("store-read-result")).toHaveTextContent("value: theme-grayscale")}},x={name:"storageKey",tags:["props"],decorators:[i({content:t.jsxs("p",{children:["Pass ",t.jsx("code",{children:"storageKey"})," to determine the sessionStorage key used for persistence."]})}),c({source:d`
                readSessionStorage(themes, storageKey)
                writeSessionStorage(themes, storageKey, themeEntry(themes, 'current'))
            `})],loaders:[()=>(h(r,o,y(r,"current")),{})],render:()=>{const e=m(r,o);return t.jsxs("div",{className:"flex flex-col gap-4",children:[t.jsx(A,{title:"sessionStorage key",appearance:"output",children:t.jsx("code",{children:o})}),t.jsx(l,{title:"readSessionStorage() result","data-testid":"store-read-result",result:e??{theme:"current",value:r.current}})]})},play:async({canvas:e})=>{await s(e.getByTestId("store-read-result")).toHaveTextContent("theme: current"),await s(e.getByTestId("store-read-result")).toHaveTextContent("value: theme-current")}},g="theme-ss-func-thememap",E={name:"themes: string value",tags:["props"],parameters:n({description:{story:"themes values can be a single string per theme."}}),decorators:[i({content:t.jsx("p",{children:"Each theme maps to one string value."})}),c({source:d`
                readSessionStorage(themes, storageKey)
                writeSessionStorage(themes, storageKey, themeEntry(themes, 'current'))
            `})],loaders:[()=>(window.sessionStorage.removeItem(g),h(r,g,y(r,"current")),{})],render:()=>{const e=m(r,g);return t.jsx("div",{className:"flex flex-col gap-4",children:t.jsx(l,{title:"readSessionStorage() result","data-testid":"store-read-result",result:e??{theme:"current",value:r.current}})})},play:async({canvas:e})=>{await s(e.getByTestId("store-read-result")).toHaveTextContent("theme: current"),await s(e.getByTestId("store-read-result")).toHaveTextContent("value: theme-current")}},f={current:"theme-current",grayscale:["theme-grayscale","app:bg-gray-100"],"high-contrast":"theme-high-contrast"},K={name:"themes: array values",tags:["props"],parameters:n({description:{story:"themes values can be string[]. Stored and retrieved value is the full array."}}),decorators:[i({content:t.jsxs("p",{children:["Each theme can map to ",t.jsx("code",{children:"string[]"}),". ",t.jsx("code",{children:"ThemeResult.value"})," persists the full array."]})}),c({source:d`
                const themes = {
                    current: 'theme-current',
                    grayscale: ['theme-grayscale', 'app:bg-gray-100'],
                    'high-contrast': 'theme-high-contrast'
                } as const

                readSessionStorage(themes, storageKey)
                writeSessionStorage(themes, storageKey, themeEntry(themes, 'grayscale'))
            `})],loaders:[()=>(window.sessionStorage.removeItem(g),h(f,g,y(f,"grayscale")),{})],render:()=>{const e=m(f,g);return t.jsx("div",{className:"flex flex-col gap-4",children:t.jsx(l,{title:"readSessionStorage() result","data-testid":"store-read-result",result:e??{theme:"grayscale",value:f.grayscale}})})},play:async({canvas:e})=>{await s(e.getByTestId("store-read-result")).toHaveTextContent("theme: grayscale"),await s(e.getByTestId("store-read-result")).toHaveTextContent("value: [theme-grayscale, app:bg-gray-100]")}};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
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
}`,...S.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
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
}`,...p.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
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
}`,...v.parameters?.docs?.source}}};w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
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
}`,...w.parameters?.docs?.source}}};T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
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
}`,...T.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
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
}`,...x.parameters?.docs?.source}}};E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
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
}`,...K.parameters?.docs?.source}}};const F=["Playground","Read","ReadWhenEmpty","Write","ParseOption","StorageKey","ThemeMapStringValue","ThemeMapArrayValues"];export{T as ParseOption,S as Playground,p as Read,v as ReadWhenEmpty,x as StorageKey,K as ThemeMapArrayValues,E as ThemeMapStringValue,w as Write,F as __namedExportsOrder,$ as default};
