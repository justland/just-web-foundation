import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./react-B6tGW3fj.js";import{a as n}from"./chunk-W22LQPXL-BSpKiHdn.js";import{a as r,c as i,l as a,s as o}from"./iframe-Dhw67M0q.js";import{n as s,t as c}from"./dedent-DQaCLeUO.js";import{n as l}from"./theme-entry-Cs_OPpJC.js";import{i as u,n as d,r as f}from"./write-web-storage-DxlFQNl5.js";import{n as p,t as m}from"./button-Cd599w8f.js";import{n as h,t as g}from"./theme-result-card-DLpbfmZr.js";var _,v,y,b,x,S,C,w,T,E,D,O,k,A;function j(){return(j=e((()=>{f(),o(),s(),_=t(),p(),h(),v=n(),{expect:y,userEvent:b}=__STORYBOOK_MODULE_TEST__,x={title:`theme/web-storage`,tags:[`func`,`version:2.0`],parameters:r({description:{component:`Generic low-level functions for reading and writing theme via any Storage (localStorage or sessionStorage): readWebStorage, writeWebStorage. Requires options.storage.`}}),render:()=>(0,v.jsx)(v.Fragment,{})},S={current:`theme-current`,next:`theme-next`,grayscale:`theme-grayscale`,"high-contrast":`theme-high-contrast`},C=`theme-ws-func-demo`,w=`theme-ws-func-local`,T=`theme-ws-func-session`,E={name:`readWebStorage`,tags:[`props`],parameters:r({description:{story:`readWebStorage(themes, storageKey, { storage }) reads the current theme from the given Storage.`}}),decorators:[a(),i({source:c`
                const result = readWebStorage(themes, storageKey, {
                  storage: window.localStorage
                })
            `})],loaders:[()=>(d(S,C,l(S,`grayscale`),{storage:window.localStorage}),{})],render:()=>{let e=u(S,C,{storage:window.localStorage});return(0,v.jsx)(g,{title:`readWebStorage() result`,"data-testid":`store-read-result`,result:e??{theme:`grayscale`,value:S.grayscale}})},play:async({canvas:e})=>{await y(e.getByTestId(`store-read-result`)).toHaveTextContent(`theme: grayscale`),await y(e.getByTestId(`store-read-result`)).toHaveTextContent(`value: theme-grayscale`)}},D={name:`readWebStorage: undefined when empty`,tags:[`props`],parameters:r({description:{story:`When nothing is stored at the key, readWebStorage returns undefined.`}}),decorators:[a(),i({source:c`
                const result = readWebStorage(themes, storageKey, { storage: window.localStorage })
                // undefined when empty
            `})],loaders:[()=>(window.localStorage.removeItem(C),{})],render:()=>{let e=u(S,C,{storage:window.localStorage});return(0,v.jsx)(g,{title:`readWebStorage() result`,"data-testid":`store-read-result`,result:e===void 0?{theme:void 0,value:void 0}:e})},play:async({canvas:e})=>{await y(e.getByTestId(`store-read-result`)).toHaveTextContent(`(undefined)`)}},O={name:`writeWebStorage`,tags:[`props`],parameters:r({description:{story:`writeWebStorage(themes, storageKey, entry, { storage }) persists the theme to the given Storage.`}}),decorators:[a(),i({source:c`
                writeWebStorage(themes, storageKey, themeEntry(themes, 'grayscale'), {
                  storage: window.localStorage
                })
            `})],loaders:[()=>(window.localStorage.removeItem(C),{})],render:()=>{let[e,t]=(0,_.useState)(()=>u(S,C,{storage:window.localStorage})?.theme??null);return(0,v.jsxs)(`div`,{className:`flex flex-col gap-4`,children:[(0,v.jsx)(`div`,{className:`flex flex-wrap gap-2`,children:Object.keys(S).map(e=>(0,v.jsxs)(m,{"data-testid":`write-${e}`,onPress:()=>{d(S,C,l(S,e),{storage:window.localStorage}),t(e)},children:[`write(`,e,`)`]},e))}),(0,v.jsx)(g,{title:`readWebStorage() after write`,"data-testid":`store-write-result`,result:e?{theme:e,value:S[e]}:{theme:`current`,value:S.current}})]})},play:async({canvas:e})=>{await b.click(e.getByTestId(`write-grayscale`)),await y(e.getByTestId(`store-write-result`)).toHaveTextContent(`theme: grayscale`),await y(e.getByTestId(`store-write-result`)).toHaveTextContent(`value: theme-grayscale`)}},k={name:`storage: localStorage vs sessionStorage`,tags:[`use-case`,`props`],parameters:r({description:{story:`Pass options.storage to target localStorage or sessionStorage. Each Storage is independent.`}}),decorators:[a({content:(0,v.jsxs)(`p`,{children:[(0,v.jsx)(`code`,{children:`readWebStorage`}),` and `,(0,v.jsx)(`code`,{children:`writeWebStorage`}),` require`,` `,(0,v.jsx)(`code`,{children:`options.storage`}),` (e.g. `,(0,v.jsx)(`code`,{children:`window.localStorage`}),` or`,` `,(0,v.jsx)(`code`,{children:`window.sessionStorage`}),`). Used by readLocalStorage/writeLocalStorage and readSessionStorage/writeSessionStorage.`]})}),i({source:c`
                // localStorage
                readWebStorage(themes, key, { storage: window.localStorage })
                writeWebStorage(themes, key, entry, { storage: window.localStorage })

                // sessionStorage
                readWebStorage(themes, key, { storage: window.sessionStorage })
                writeWebStorage(themes, key, entry, { storage: window.sessionStorage })
            `})],loaders:[()=>(window.localStorage.removeItem(w),window.sessionStorage.removeItem(T),d(S,w,l(S,`current`),{storage:window.localStorage}),d(S,T,l(S,`grayscale`),{storage:window.sessionStorage}),{})],render:()=>{let e=u(S,w,{storage:window.localStorage}),t=u(S,T,{storage:window.sessionStorage});return(0,v.jsxs)(`div`,{className:`flex flex-col gap-4`,children:[(0,v.jsx)(g,{title:`localStorage`,"data-testid":`local-result`,result:e??{theme:`current`,value:S.current}}),(0,v.jsx)(g,{title:`sessionStorage`,"data-testid":`session-result`,result:t??{theme:`grayscale`,value:S.grayscale}})]})},play:async({canvas:e})=>{await y(e.getByTestId(`local-result`)).toHaveTextContent(`theme: current`),await y(e.getByTestId(`session-result`)).toHaveTextContent(`theme: grayscale`)}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  name: 'readWebStorage',
  tags: ['props'],
  parameters: defineDocsParam({
    description: {
      story: 'readWebStorage(themes, storageKey, { storage }) reads the current theme from the given Storage.'
    }
  }),
  decorators: [withStoryCard(), showSource({
    source: dedent\`
                const result = readWebStorage(themes, storageKey, {
                  storage: window.localStorage
                })
            \`
  })],
  loaders: [() => {
    writeWebStorage(themes, STORAGE_KEY, themeEntry(themes, 'grayscale'), {
      storage: window.localStorage
    });
    return {};
  }],
  render: () => {
    const result = readWebStorage(themes, STORAGE_KEY, {
      storage: window.localStorage
    });
    return <ThemeResultCard title="readWebStorage() result" data-testid="store-read-result" result={result ?? {
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
}`,...E.parameters?.docs?.source}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  name: 'readWebStorage: undefined when empty',
  tags: ['props'],
  parameters: defineDocsParam({
    description: {
      story: 'When nothing is stored at the key, readWebStorage returns undefined.'
    }
  }),
  decorators: [withStoryCard(), showSource({
    source: dedent\`
                const result = readWebStorage(themes, storageKey, { storage: window.localStorage })
                // undefined when empty
            \`
  })],
  loaders: [() => {
    window.localStorage.removeItem(STORAGE_KEY);
    return {};
  }],
  render: () => {
    const result = readWebStorage(themes, STORAGE_KEY, {
      storage: window.localStorage
    });
    return <ThemeResultCard title="readWebStorage() result" data-testid="store-read-result" result={result !== undefined ? result : {
      theme: undefined,
      value: undefined
    }} />;
  },
  play: async ({
    canvas
  }) => {
    await expect(canvas.getByTestId('store-read-result')).toHaveTextContent('(undefined)');
  }
}`,...D.parameters?.docs?.source}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  name: 'writeWebStorage',
  tags: ['props'],
  parameters: defineDocsParam({
    description: {
      story: 'writeWebStorage(themes, storageKey, entry, { storage }) persists the theme to the given Storage.'
    }
  }),
  decorators: [withStoryCard(), showSource({
    source: dedent\`
                writeWebStorage(themes, storageKey, themeEntry(themes, 'grayscale'), {
                  storage: window.localStorage
                })
            \`
  })],
  loaders: [() => {
    window.localStorage.removeItem(STORAGE_KEY);
    return {};
  }],
  render: () => {
    const [currentTheme, setCurrentTheme] = useState<ExampleTheme | null>(() => {
      const r = readWebStorage(themes, STORAGE_KEY, {
        storage: window.localStorage
      });
      return r?.theme ?? null;
    });
    return <div className="flex flex-col gap-4">
                <div className="flex flex-wrap gap-2">
                    {(Object.keys(themes) as ExampleTheme[]).map(theme => <Button key={theme} data-testid={\`write-\${theme}\`} onPress={() => {
          writeWebStorage(themes, STORAGE_KEY, themeEntry(themes, theme), {
            storage: window.localStorage
          });
          setCurrentTheme(theme);
        }}>
                            write({theme})
                        </Button>)}
                </div>
                <ThemeResultCard title="readWebStorage() after write" data-testid="store-write-result" result={currentTheme ? {
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
}`,...O.parameters?.docs?.source}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  name: 'storage: localStorage vs sessionStorage',
  tags: ['use-case', 'props'],
  parameters: defineDocsParam({
    description: {
      story: 'Pass options.storage to target localStorage or sessionStorage. Each Storage is independent.'
    }
  }),
  decorators: [withStoryCard({
    content: <p>
                    <code>readWebStorage</code> and <code>writeWebStorage</code> require{' '}
                    <code>options.storage</code> (e.g. <code>window.localStorage</code> or{' '}
                    <code>window.sessionStorage</code>). Used by readLocalStorage/writeLocalStorage and
                    readSessionStorage/writeSessionStorage.
                </p>
  }), showSource({
    source: dedent\`
                // localStorage
                readWebStorage(themes, key, { storage: window.localStorage })
                writeWebStorage(themes, key, entry, { storage: window.localStorage })

                // sessionStorage
                readWebStorage(themes, key, { storage: window.sessionStorage })
                writeWebStorage(themes, key, entry, { storage: window.sessionStorage })
            \`
  })],
  loaders: [() => {
    window.localStorage.removeItem(STORAGE_KEY_LOCAL);
    window.sessionStorage.removeItem(STORAGE_KEY_SESSION);
    writeWebStorage(themes, STORAGE_KEY_LOCAL, themeEntry(themes, 'current'), {
      storage: window.localStorage
    });
    writeWebStorage(themes, STORAGE_KEY_SESSION, themeEntry(themes, 'grayscale'), {
      storage: window.sessionStorage
    });
    return {};
  }],
  render: () => {
    const localResult = readWebStorage(themes, STORAGE_KEY_LOCAL, {
      storage: window.localStorage
    });
    const sessionResult = readWebStorage(themes, STORAGE_KEY_SESSION, {
      storage: window.sessionStorage
    });
    return <div className="flex flex-col gap-4">
                <ThemeResultCard title="localStorage" data-testid="local-result" result={localResult ?? {
        theme: 'current',
        value: themes.current
      }} />
                <ThemeResultCard title="sessionStorage" data-testid="session-result" result={sessionResult ?? {
        theme: 'grayscale',
        value: themes.grayscale
      }} />
            </div>;
  },
  play: async ({
    canvas
  }) => {
    await expect(canvas.getByTestId('local-result')).toHaveTextContent('theme: current');
    await expect(canvas.getByTestId('session-result')).toHaveTextContent('theme: grayscale');
  }
}`,...k.parameters?.docs?.source}}},A=[`Read`,`ReadWhenEmpty`,`Write`,`StorageOption`]})))()}j();export{E as Read,D as ReadWhenEmpty,k as StorageOption,O as Write,A as __namedExportsOrder,x as default};