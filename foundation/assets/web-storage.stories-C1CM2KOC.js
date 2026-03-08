import{j as r,d as l,w,s as h,r as x}from"./iframe-Sd4Xj9SC.js";import{d as y}from"./dedent-BuYMbVyj.js";import{t as u}from"./theme-entry-D4S_RAMB.js";import{r as n,w as S}from"./write-web-storage-H7mtIjJa.js";import{B as E}from"./button-BFgGKzfU.js";import{T as d}from"./theme-result-card-5t3626kf.js";import"./preload-helper-PPVm8Dsz.js";import"./parse-stored-theme-Dsx2RsUi.js";import"./resolve-theme-map-value-CsrxdXA7.js";import"./resolve-class-name-BWUmKjOI.js";import"./append-id-Vsg144gU.js";const{expect:o,userEvent:W}=__STORYBOOK_MODULE_TEST__,G={title:"theme/web-storage",tags:["func","version:2.0"],parameters:l({description:{component:"Generic low-level functions for reading and writing theme via any Storage (localStorage or sessionStorage): readWebStorage, writeWebStorage. Requires options.storage."}}),render:()=>r.jsx(r.Fragment,{})},t={current:"theme-current",next:"theme-next",grayscale:"theme-grayscale","high-contrast":"theme-high-contrast"},a="theme-ws-func-demo",v="theme-ws-func-local",T="theme-ws-func-session",i={name:"readWebStorage",tags:["props"],parameters:l({description:{story:"readWebStorage(themes, storageKey, { storage }) reads the current theme from the given Storage."}}),decorators:[w(),h({source:y`
                const result = readWebStorage(themes, storageKey, {
                  storage: window.localStorage
                })
            `})],loaders:[()=>(S(t,a,u(t,"grayscale"),{storage:window.localStorage}),{})],render:()=>{const e=n(t,a,{storage:window.localStorage});return r.jsx(d,{title:"readWebStorage() result","data-testid":"store-read-result",result:e??{theme:"grayscale",value:t.grayscale}})},play:async({canvas:e})=>{await o(e.getByTestId("store-read-result")).toHaveTextContent("theme: grayscale"),await o(e.getByTestId("store-read-result")).toHaveTextContent("value: theme-grayscale")}},c={name:"readWebStorage: undefined when empty",tags:["props"],parameters:l({description:{story:"When nothing is stored at the key, readWebStorage returns undefined."}}),decorators:[w(),h({source:y`
                const result = readWebStorage(themes, storageKey, { storage: window.localStorage })
                // undefined when empty
            `})],loaders:[()=>(window.localStorage.removeItem(a),{})],render:()=>{const e=n(t,a,{storage:window.localStorage});return r.jsx(d,{title:"readWebStorage() result","data-testid":"store-read-result",result:e!==void 0?e:{theme:void 0,value:void 0}})},play:async({canvas:e})=>{await o(e.getByTestId("store-read-result")).toHaveTextContent("(undefined)")}},g={name:"writeWebStorage",tags:["props"],parameters:l({description:{story:"writeWebStorage(themes, storageKey, entry, { storage }) persists the theme to the given Storage."}}),decorators:[w(),h({source:y`
                writeWebStorage(themes, storageKey, themeEntry(themes, 'grayscale'), {
                  storage: window.localStorage
                })
            `})],loaders:[()=>(window.localStorage.removeItem(a),{})],render:()=>{const[e,p]=x.useState(()=>n(t,a,{storage:window.localStorage})?.theme??null);return r.jsxs("div",{className:"flex flex-col gap-4",children:[r.jsx("div",{className:"flex flex-wrap gap-2",children:Object.keys(t).map(s=>r.jsxs(E,{"data-testid":`write-${s}`,onPress:()=>{S(t,a,u(t,s),{storage:window.localStorage}),p(s)},children:["write(",s,")"]},s))}),r.jsx(d,{title:"readWebStorage() after write","data-testid":"store-write-result",result:e?{theme:e,value:t[e]}:{theme:"current",value:t.current}})]})},play:async({canvas:e})=>{await W.click(e.getByTestId("write-grayscale")),await o(e.getByTestId("store-write-result")).toHaveTextContent("theme: grayscale"),await o(e.getByTestId("store-write-result")).toHaveTextContent("value: theme-grayscale")}},m={name:"storage: localStorage vs sessionStorage",tags:["use-case","props"],parameters:l({description:{story:"Pass options.storage to target localStorage or sessionStorage. Each Storage is independent."}}),decorators:[w({content:r.jsxs("p",{children:[r.jsx("code",{children:"readWebStorage"})," and ",r.jsx("code",{children:"writeWebStorage"})," require"," ",r.jsx("code",{children:"options.storage"})," (e.g. ",r.jsx("code",{children:"window.localStorage"})," or"," ",r.jsx("code",{children:"window.sessionStorage"}),"). Used by readLocalStorage/writeLocalStorage and readSessionStorage/writeSessionStorage."]})}),h({source:y`
                // localStorage
                readWebStorage(themes, key, { storage: window.localStorage })
                writeWebStorage(themes, key, entry, { storage: window.localStorage })

                // sessionStorage
                readWebStorage(themes, key, { storage: window.sessionStorage })
                writeWebStorage(themes, key, entry, { storage: window.sessionStorage })
            `})],loaders:[()=>(window.localStorage.removeItem(v),window.sessionStorage.removeItem(T),S(t,v,u(t,"current"),{storage:window.localStorage}),S(t,T,u(t,"grayscale"),{storage:window.sessionStorage}),{})],render:()=>{const e=n(t,v,{storage:window.localStorage}),p=n(t,T,{storage:window.sessionStorage});return r.jsxs("div",{className:"flex flex-col gap-4",children:[r.jsx(d,{title:"localStorage","data-testid":"local-result",result:e??{theme:"current",value:t.current}}),r.jsx(d,{title:"sessionStorage","data-testid":"session-result",result:p??{theme:"grayscale",value:t.grayscale}})]})},play:async({canvas:e})=>{await o(e.getByTestId("local-result")).toHaveTextContent("theme: current"),await o(e.getByTestId("session-result")).toHaveTextContent("theme: grayscale")}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
}`,...i.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
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
}`,...c.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
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
}`,...g.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
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
}`,...m.parameters?.docs?.source}}};const Y=["Read","ReadWhenEmpty","Write","StorageOption"];export{i as Read,c as ReadWhenEmpty,m as StorageOption,g as Write,Y as __namedExportsOrder,G as default};
