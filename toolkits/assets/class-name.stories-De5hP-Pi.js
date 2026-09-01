import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./react-B6tGW3fj.js";import{a as n}from"./chunk-W22LQPXL-BSpKiHdn.js";import{a as r,c as i,i as a,l as o,s}from"./iframe-BJVp8-w1.js";import{n as c,t as l}from"./dedent-DQaCLeUO.js";import{n as u}from"./theme-entry-Cs_OPpJC.js";import{a as d,c as f,i as p,l as m,n as h,o as g,r as _,s as v,t as y,u as b}from"./write-class-name-U1dRCADn.js";import{n as x,t as S}from"./button-BlO48FDB.js";import{n as C,t as w}from"./theme-result-card-DmTK1KKZ.js";import{n as T,t as E}from"./theme-store-demo-CxcbzR8_.js";function D(e=document.documentElement){return{read:()=>f(P,{element:e}),write:t=>h(P,t,{element:e}),subscribe:t=>p(P,t,{element:e})}}var O,k,A,j,M,N,P,F,I,L,R,z,B,V,H,U,W,G,K,q,J,Y;function X(){return(X=e((()=>{m(),v(),d(),_(),y(),s(),c(),O=t(),x(),C(),T(),k=n(),{expect:A,userEvent:j,waitFor:M}=__STORYBOOK_MODULE_TEST__,N={title:`theme/class-name`,tags:[`func`,`version:2.0`],parameters:r({description:{component:`Low-level functions for reading and writing theme via element class names: readClassName, writeClassName, subscribeClassName, parseClassName, stringifyClassName.`}}),render:()=>(0,k.jsx)(k.Fragment,{})},P={current:`theme-current`,next:`theme-next`,grayscale:`theme-grayscale`,"high-contrast":`theme-high-contrast`},F={tags:[`playground`],parameters:r({description:{story:`Interactive demo: readClassName, writeClassName, subscribeClassName used together.`}}),decorators:[o(),i({source:l`
                const store = {
                  read: () => readClassName(themes, { element }),
                  write: (entry) => writeClassName(themes, entry, { element }),
                  subscribe: (handler) => subscribeClassName(themes, handler, { element })
                }
                <ThemeStoreDemo store={store} themes={themes} />
            `})],render:()=>{let e=D();return(0,k.jsx)(E,{store:e,themes:P})},play:async({canvas:e})=>{await j.click(e.getByTestId(`theme-store-demo-btn-write-grayscale`)),await M(()=>A(e.getByTestId(`theme-store-demo-observe`)).toHaveTextContent(`grayscale`)),await A(e.getByTestId(`theme-store-demo-observe`)).toHaveTextContent(`theme-grayscale`)}},I={name:`readClassName`,tags:[`props`],parameters:r({description:{story:`readClassName(themes, { element }) reads the current theme from the element class names.`}}),decorators:[o(),i({source:l`
                const result = readClassName(themes, { element })
            `})],loaders:[()=>(h(P,u(P,`grayscale`)),{})],render:()=>{let e=f(P);return(0,k.jsx)(w,{title:`readClassName() result`,"data-testid":`store-read-result`,result:e??{theme:`grayscale`,value:P.grayscale}})},play:async({canvas:e})=>{await A(e.getByTestId(`store-read-result`)).toHaveTextContent(`theme: grayscale`),await A(e.getByTestId(`store-read-result`)).toHaveTextContent(`value: theme-grayscale`)}},L={name:`readClassName: undefined when no theme`,tags:[`props`],parameters:r({description:{story:`When no theme class is present, readClassName returns undefined.`}}),decorators:[o(),i({source:l`
                const result = readClassName(themes, { element })
                // undefined when no theme class
            `})],loaders:[()=>(typeof document<`u`&&(document.documentElement.className=`other-class`),{})],render:()=>{let e=f(P);return(0,k.jsx)(w,{title:`readClassName() result`,"data-testid":`store-read-result`,result:e===void 0?{theme:void 0,value:void 0}:e})},play:async({canvas:e})=>{await A(e.getByTestId(`store-read-result`)).toHaveTextContent(`(undefined)`)}},R={name:`writeClassName`,tags:[`props`],parameters:r({description:{story:`writeClassName(themes, entry, { element }) applies the theme class to the element.`}}),decorators:[o(),i({source:l`
                writeClassName(themes, themeEntry(themes, 'grayscale'), { element })
            `})],render:()=>{let[e,t]=(0,O.useState)(()=>f(P)?.theme??null);return(0,k.jsxs)(`div`,{className:`flex flex-col gap-4`,children:[(0,k.jsx)(`div`,{className:`flex flex-wrap gap-2`,children:Object.keys(P).map(e=>(0,k.jsxs)(S,{"data-testid":`write-${e}`,onPress:()=>{h(P,u(P,e)),t(e)},children:[`write(`,e,`)`]},e))}),(0,k.jsx)(w,{title:`readClassName() after write`,"data-testid":`store-write-result`,result:e?{theme:e,value:P[e]}:{theme:`current`,value:P.current}})]})},play:async({canvas:e})=>{await j.click(e.getByTestId(`write-grayscale`)),await A(e.getByTestId(`store-write-result`)).toHaveTextContent(`theme: grayscale`),await A(e.getByTestId(`store-write-result`)).toHaveTextContent(`value: theme-grayscale`)}},z={name:`subscribeClassName`,tags:[`props`],parameters:r({description:{story:`subscribeClassName(themes, handler, { element }) calls the handler when the class attribute changes (no initial notify).`}}),decorators:[o(),i({source:l`
                subscribeClassName(themes, (themeResult) => {
                    console.log('Theme:', themeResult?.theme, themeResult?.value)
                }, { element })
            `})],render:()=>{let[e,t]=(0,O.useState)(void 0);(0,O.useEffect)(()=>p(P,t),[]);let n=e?.theme??`current`;return(0,k.jsxs)(`div`,{className:`flex flex-col gap-4`,children:[(0,k.jsx)(`div`,{className:`flex flex-wrap gap-2`,children:Object.keys(P).map(e=>(0,k.jsxs)(S,{"data-testid":`write-${e}`,onPress:()=>h(P,u(P,e)),children:[`write(`,e,`)`]},e))}),(0,k.jsx)(w,{title:`subscribeClassName() receives`,"data-testid":`store-subscribe-result`,result:u(P,n)})]})},play:async({canvas:e})=>{await j.click(e.getByTestId(`write-high-contrast`)),await M(()=>A(e.getByTestId(`store-subscribe-result`)).toHaveTextContent(`high-contrast`))}},B={name:`parseClassName`,tags:[`props`],parameters:r({description:{story:`Pure function: parseClassName(themes, className) parses a class name string into a ThemeEntry.`}}),decorators:[o(),i({source:l`
                const result = parseClassName(themes, 'theme-current other-class')
                // { theme: 'current', value: 'theme-current' }
            `})],render:()=>{let e=b(P,`theme-current other-class`);return(0,k.jsxs)(`div`,{className:`flex flex-col gap-4`,children:[(0,k.jsx)(a,{title:`Input`,appearance:`output`,children:(0,k.jsx)(`code`,{"data-testid":`parse-input`,children:`theme-current other-class`})}),(0,k.jsx)(w,{title:`parseClassName() result`,"data-testid":`parse-result`,result:e??{theme:`current`,value:P.current}})]})},play:async({canvas:e})=>{await A(e.getByTestId(`parse-result`)).toHaveTextContent(`theme: current`),await A(e.getByTestId(`parse-result`)).toHaveTextContent(`value: theme-current`)}},V={name:`stringifyClassName`,tags:[`props`],parameters:r({description:{story:`Pure function: stringifyClassName(themes, existing, entry) produces class attribute value. Removes theme classes from existing, adds entry classes.`}}),decorators:[o(),i({source:l`
                const result = stringifyClassName(themes, 'app-layout theme-current', themeEntry(themes, 'grayscale'))
                // 'app-layout theme-grayscale'
            `})],render:()=>{let e=g(P,`app-layout theme-current`,u(P,`grayscale`));return(0,k.jsxs)(`div`,{className:`flex flex-col gap-4`,children:[(0,k.jsx)(a,{title:`Input`,appearance:`output`,children:(0,k.jsx)(`code`,{"data-testid":`stringify-input`,children:`themes, 'app-layout theme-current', themeEntry(themes, 'grayscale')`})}),(0,k.jsx)(a,{title:`stringifyClassName() result`,appearance:`output`,children:(0,k.jsx)(`code`,{"data-testid":`stringify-result`,children:e})})]})},play:async({canvas:e})=>{await A(e.getByTestId(`stringify-result`)).toHaveTextContent(`app-layout`),await A(e.getByTestId(`stringify-result`)).toHaveTextContent(`theme-grayscale`)}},H={name:`element: html (default)`,tags:[`use-case`,`props`],decorators:[o({content:(0,k.jsxs)(`p`,{children:[`Reads from `,(0,k.jsx)(`code`,{children:`document.documentElement`}),` (html) by default when`,` `,(0,k.jsx)(`code`,{children:`options.element`}),` is not specified.`]})}),i({source:l`
                readClassName(themes)
                writeClassName(themes, themeEntry(themes, 'current'))
            `})],loaders:[()=>(h(P,u(P,`current`)),{})],render:()=>{let e=f(P);return(0,k.jsxs)(`div`,{className:`flex flex-col gap-4`,children:[(0,k.jsx)(a,{title:`html.className`,appearance:`output`,children:(0,k.jsx)(`code`,{children:typeof document<`u`?document.documentElement.className:``})}),(0,k.jsx)(w,{title:`readClassName() result`,"data-testid":`store-read-result`,result:e??{theme:`current`,value:P.current}})]})},play:async({canvas:e})=>{await A(e.getByTestId(`store-read-result`)).toHaveTextContent(`theme: current`),await A(e.getByTestId(`store-read-result`)).toHaveTextContent(`value: theme-current`)}},U={name:`element: body`,tags:[`use-case`,`props`],decorators:[o({content:(0,k.jsxs)(`p`,{children:[`Reads from `,(0,k.jsx)(`code`,{children:`document.body`}),` when passing it in `,(0,k.jsx)(`code`,{children:`options.element`}),`.`]})}),i({source:l`
                readClassName(themes, { element: document.body })
                writeClassName(themes, themeEntry(themes, 'high-contrast'), { element: document.body })
            `})],loaders:[()=>(h(P,u(P,`high-contrast`),{element:document.body}),{})],render:()=>{let e=f(P,{element:document.body});return(0,k.jsxs)(`div`,{className:`flex flex-col gap-4`,children:[(0,k.jsx)(a,{title:`body.className`,appearance:`output`,children:(0,k.jsx)(`code`,{children:typeof document<`u`?document.body.className:``})}),(0,k.jsx)(w,{title:`readClassName() result`,"data-testid":`store-read-result`,result:e??{theme:`high-contrast`,value:P[`high-contrast`]}})]})},play:async({canvas:e})=>{await A(e.getByTestId(`store-read-result`)).toHaveTextContent(`theme: high-contrast`),await A(e.getByTestId(`store-read-result`)).toHaveTextContent(`value: theme-high-contrast`)}},W={name:`element: custom element`,tags:[`props`],decorators:[o({content:(0,k.jsxs)(`p`,{children:[`Theme is applied to a custom element by passing it in `,(0,k.jsx)(`code`,{children:`options.element`}),`.`]})}),i({source:l`
                readClassName(themes, { element: targetElement })
                writeClassName(themes, themeEntry(themes, 'grayscale'), { element: targetElement })
            `})],render:()=>{let e=(0,O.useRef)(null),[t,n]=(0,O.useState)(!1);(0,O.useLayoutEffect)(()=>{let t=e.current;t&&(h(P,u(P,`grayscale`),{element:t}),n(!0))},[]);let r=e.current?f(P,{element:e.current}):null;return(0,k.jsxs)(`div`,{className:`flex flex-col gap-2`,children:[(0,k.jsx)(`div`,{ref:e,id:`target`,"data-testid":`target-element`,className:`rounded border border-gray-300 p-4`,children:`Target element (theme class is observed here)`}),t?(0,k.jsxs)(k.Fragment,{children:[(0,k.jsx)(a,{title:`target.className`,appearance:`output`,children:(0,k.jsx)(`code`,{children:e.current?.className})}),(0,k.jsx)(w,{title:`readClassName() result`,"data-testid":`store-read-result`,result:r??{theme:`grayscale`,value:P.grayscale}})]}):(0,k.jsx)(`p`,{children:`Loading…`})]})},play:async({canvas:e})=>{await A(e.getByTestId(`store-read-result`)).toHaveTextContent(`theme: grayscale`),await A(e.getByTestId(`store-read-result`)).toHaveTextContent(`value: theme-grayscale`)}},G={name:`themes: string value`,tags:[`use-case`,`props`],parameters:r({description:{story:`themes values can be a single string per theme.`}}),decorators:[o({content:(0,k.jsx)(`p`,{children:`Each theme maps to one string value (one class name).`})}),i({source:l`
                const themes = {
                    current: 'theme-current',
                    grayscale: 'theme-grayscale',
                    'high-contrast': 'theme-high-contrast'
                } as const

                readClassName(themes)
            `})],loaders:[()=>(h(P,u(P,`current`)),{})],render:()=>{let e=f(P);return(0,k.jsxs)(`div`,{className:`flex flex-col gap-4`,children:[(0,k.jsx)(a,{title:`html.className`,appearance:`output`,children:(0,k.jsx)(`code`,{children:typeof document<`u`?document.documentElement.className:``})}),(0,k.jsx)(w,{title:`readClassName() result`,"data-testid":`store-read-result`,result:e??{theme:`current`,value:P.current}})]})},play:async({canvas:e})=>{await A(e.getByTestId(`store-read-result`)).toHaveTextContent(`theme: current`),await A(e.getByTestId(`store-read-result`)).toHaveTextContent(`value: theme-current`)}},K={current:`theme-current`,grayscale:[`theme-grayscale`,`app:bg-gray-100`],"high-contrast":`theme-high-contrast`},q={name:`themes: array values`,tags:[`use-case`,`props`],parameters:r({description:{story:`themes values can be string[] for multiple CSS classes. All classes are applied to the element.`}}),decorators:[o({content:(0,k.jsxs)(`p`,{children:[`Each theme can map to multiple class names. Setting `,(0,k.jsx)(`code`,{children:`grayscale`}),` adds both`,` `,(0,k.jsx)(`code`,{children:`theme-grayscale`}),` and `,(0,k.jsx)(`code`,{children:`app:bg-gray-100`}),` to the element.`]})}),i({source:l`
                const themes = {
                    current: 'theme-current',
                    grayscale: ['theme-grayscale', 'app:bg-gray-100'],
                    'high-contrast': 'theme-high-contrast'
                } as const

                readClassName(themes)
                writeClassName(themes, themeEntry(themes, 'grayscale'))
            `})],loaders:[()=>(h(K,u(K,`grayscale`)),{})],render:()=>{let e=f(K);return(0,k.jsxs)(`div`,{className:`flex flex-col gap-4`,children:[(0,k.jsx)(a,{title:`html.className`,appearance:`output`,children:(0,k.jsx)(`code`,{children:typeof document<`u`?document.documentElement.className:``})}),(0,k.jsx)(w,{title:`readClassName() result`,"data-testid":`store-read-result`,result:e??{theme:`grayscale`,value:K.grayscale}})]})},play:async({canvas:e})=>{await A(e.getByTestId(`store-read-result`)).toHaveTextContent(`theme: grayscale`),await A(e.getByTestId(`store-read-result`)).toHaveTextContent(`value: [theme-grayscale, app:bg-gray-100]`)}},J={name:`subscribeClassName: only when themeEntry changes`,tags:[`props`],parameters:r({description:{story:`The handler is only invoked when the resolved themeEntry changes. Adding non-theme classes does not trigger the handler.`}}),decorators:[o(),i({source:l`
                subscribeClassName(themes, (entry) => {
                    invocationCount++
                    setObserved(entry)
                }, { element: targetElement })
                // Adding element.classList.add('app-other') does NOT invoke handler
                // writeClassName(themes, themeEntry(themes, 'grayscale')) DOES invoke when theme changes
            `})],render:()=>{let e=(0,O.useRef)(null),[t,n]=(0,O.useState)(0),[r,i]=(0,O.useState)(null);(0,O.useLayoutEffect)(()=>{let t=e.current;if(!t)return;let r=p(P,e=>{n(e=>e+1),i(e)},{element:t});return h(P,u(P,`grayscale`),{element:t}),r},[]);let o=r?.theme??`(none)`;return(0,k.jsxs)(`div`,{className:`flex flex-col gap-4`,"data-testid":`subscribe-only-when-theme-changes`,children:[(0,k.jsx)(`div`,{ref:e,"data-testid":`target-element`,className:`rounded border border-gray-300 p-2`,children:`Target element`}),(0,k.jsx)(a,{title:`Handler invocations`,appearance:`output`,children:(0,k.jsx)(`pre`,{"data-testid":`invocation-count`,className:`font-mono`,children:t})}),(0,k.jsx)(a,{title:`Observed theme`,appearance:`output`,children:(0,k.jsx)(`pre`,{"data-testid":`observed-theme`,className:`font-mono`,children:o})}),(0,k.jsxs)(`div`,{className:`flex flex-wrap gap-2`,children:[(0,k.jsx)(S,{"data-testid":`add-non-theme-class`,onPress:()=>e.current?.classList.add(`app-other`),children:`Add non-theme class`}),(0,k.jsx)(S,{"data-testid":`change-to-high-contrast`,onPress:()=>h(P,u(P,`high-contrast`),{element:e.current}),children:`Change to high-contrast`}),(0,k.jsx)(S,{"data-testid":`change-to-current`,onPress:()=>h(P,u(P,`current`),{element:e.current}),children:`Change to current`})]})]})},play:async({canvas:e})=>{await A(e.getByTestId(`invocation-count`)).toHaveTextContent(`1`),await A(e.getByTestId(`observed-theme`)).toHaveTextContent(`grayscale`),await j.click(e.getByTestId(`change-to-high-contrast`)),await M(()=>A(e.getByTestId(`invocation-count`)).toHaveTextContent(`2`)),await A(e.getByTestId(`observed-theme`)).toHaveTextContent(`high-contrast`)}},F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
  tags: ['playground'],
  parameters: defineDocsParam({
    description: {
      story: 'Interactive demo: readClassName, writeClassName, subscribeClassName used together.'
    }
  }),
  decorators: [withStoryCard(), showSource({
    source: dedent\`
                const store = {
                  read: () => readClassName(themes, { element }),
                  write: (entry) => writeClassName(themes, entry, { element }),
                  subscribe: (handler) => subscribeClassName(themes, handler, { element })
                }
                <ThemeStoreDemo store={store} themes={themes} />
            \`
  })],
  render: () => {
    const store = createClassNameStore();
    return <ThemeStoreDemo store={store} themes={themes} />;
  },
  play: async ({
    canvas
  }) => {
    await userEvent.click(canvas.getByTestId('theme-store-demo-btn-write-grayscale'));
    await waitFor(() => expect(canvas.getByTestId('theme-store-demo-observe')).toHaveTextContent('grayscale'));
    await expect(canvas.getByTestId('theme-store-demo-observe')).toHaveTextContent('theme-grayscale');
  }
}`,...F.parameters?.docs?.source}}},I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
  name: 'readClassName',
  tags: ['props'],
  parameters: defineDocsParam({
    description: {
      story: 'readClassName(themes, { element }) reads the current theme from the element class names.'
    }
  }),
  decorators: [withStoryCard(), showSource({
    source: dedent\`
                const result = readClassName(themes, { element })
            \`
  })],
  loaders: [() => {
    writeClassName(themes, themeEntry(themes, 'grayscale'));
    return {};
  }],
  render: () => {
    const result = readClassName(themes);
    return <ThemeResultCard title="readClassName() result" data-testid="store-read-result" result={result ?? {
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
}`,...I.parameters?.docs?.source}}},L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`{
  name: 'readClassName: undefined when no theme',
  tags: ['props'],
  parameters: defineDocsParam({
    description: {
      story: 'When no theme class is present, readClassName returns undefined.'
    }
  }),
  decorators: [withStoryCard(), showSource({
    source: dedent\`
                const result = readClassName(themes, { element })
                // undefined when no theme class
            \`
  })],
  loaders: [() => {
    if (typeof document !== 'undefined') {
      document.documentElement.className = 'other-class';
    }
    return {};
  }],
  render: () => {
    const result = readClassName(themes);
    return <ThemeResultCard title="readClassName() result" data-testid="store-read-result" result={result !== undefined ? result : {
      theme: undefined,
      value: undefined
    }} />;
  },
  play: async ({
    canvas
  }) => {
    await expect(canvas.getByTestId('store-read-result')).toHaveTextContent('(undefined)');
  }
}`,...L.parameters?.docs?.source}}},R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`{
  name: 'writeClassName',
  tags: ['props'],
  parameters: defineDocsParam({
    description: {
      story: 'writeClassName(themes, entry, { element }) applies the theme class to the element.'
    }
  }),
  decorators: [withStoryCard(), showSource({
    source: dedent\`
                writeClassName(themes, themeEntry(themes, 'grayscale'), { element })
            \`
  })],
  render: () => {
    const [currentTheme, setCurrentTheme] = useState<ExampleTheme | null>(() => {
      const r = readClassName(themes);
      return r?.theme ?? null;
    });
    return <div className="flex flex-col gap-4">
                <div className="flex flex-wrap gap-2">
                    {(Object.keys(themes) as ExampleTheme[]).map(theme => <Button key={theme} data-testid={\`write-\${theme}\`} onPress={() => {
          writeClassName(themes, themeEntry(themes, theme));
          setCurrentTheme(theme);
        }}>
                            write({theme})
                        </Button>)}
                </div>
                <ThemeResultCard title="readClassName() after write" data-testid="store-write-result" result={currentTheme ? {
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
}`,...R.parameters?.docs?.source}}},z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`{
  name: 'subscribeClassName',
  tags: ['props'],
  parameters: defineDocsParam({
    description: {
      story: 'subscribeClassName(themes, handler, { element }) calls the handler when the class attribute changes (no initial notify).'
    }
  }),
  decorators: [withStoryCard(), showSource({
    source: dedent\`
                subscribeClassName(themes, (themeResult) => {
                    console.log('Theme:', themeResult?.theme, themeResult?.value)
                }, { element })
            \`
  })],
  render: () => {
    const [result, setResult] = useState<ThemeEntry<typeof themes> | undefined | null>(undefined);
    useEffect(() => {
      return subscribeClassName(themes, setResult);
    }, []);
    const displayTheme = result?.theme ?? 'current';
    return <div className="flex flex-col gap-4">
                <div className="flex flex-wrap gap-2">
                    {(Object.keys(themes) as ExampleTheme[]).map(theme => <Button key={theme} data-testid={\`write-\${theme}\`} onPress={() => writeClassName(themes, themeEntry(themes, theme))}>
                            write({theme})
                        </Button>)}
                </div>
                <ThemeResultCard title="subscribeClassName() receives" data-testid="store-subscribe-result" result={themeEntry(themes, displayTheme)} />
            </div>;
  },
  play: async ({
    canvas
  }) => {
    await userEvent.click(canvas.getByTestId('write-high-contrast'));
    await waitFor(() => expect(canvas.getByTestId('store-subscribe-result')).toHaveTextContent('high-contrast'));
  }
}`,...z.parameters?.docs?.source}}},B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
  name: 'parseClassName',
  tags: ['props'],
  parameters: defineDocsParam({
    description: {
      story: 'Pure function: parseClassName(themes, className) parses a class name string into a ThemeEntry.'
    }
  }),
  decorators: [withStoryCard(), showSource({
    source: dedent\`
                const result = parseClassName(themes, 'theme-current other-class')
                // { theme: 'current', value: 'theme-current' }
            \`
  })],
  render: () => {
    const result = parseClassName(themes, 'theme-current other-class');
    return <div className="flex flex-col gap-4">
                <StoryCard title="Input" appearance="output">
                    <code data-testid="parse-input">theme-current other-class</code>
                </StoryCard>
                <ThemeResultCard title="parseClassName() result" data-testid="parse-result" result={result ?? {
        theme: 'current',
        value: themes.current
      }} />
            </div>;
  },
  play: async ({
    canvas
  }) => {
    await expect(canvas.getByTestId('parse-result')).toHaveTextContent('theme: current');
    await expect(canvas.getByTestId('parse-result')).toHaveTextContent('value: theme-current');
  }
}`,...B.parameters?.docs?.source}}},V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`{
  name: 'stringifyClassName',
  tags: ['props'],
  parameters: defineDocsParam({
    description: {
      story: 'Pure function: stringifyClassName(themes, existing, entry) produces class attribute value. Removes theme classes from existing, adds entry classes.'
    }
  }),
  decorators: [withStoryCard(), showSource({
    source: dedent\`
                const result = stringifyClassName(themes, 'app-layout theme-current', themeEntry(themes, 'grayscale'))
                // 'app-layout theme-grayscale'
            \`
  })],
  render: () => {
    const result = stringifyClassName(themes, 'app-layout theme-current', themeEntry(themes, 'grayscale'));
    return <div className="flex flex-col gap-4">
                <StoryCard title="Input" appearance="output">
                    <code data-testid="stringify-input">
                        themes, &apos;app-layout theme-current&apos;, themeEntry(themes, &apos;grayscale&apos;)
                    </code>
                </StoryCard>
                <StoryCard title="stringifyClassName() result" appearance="output">
                    <code data-testid="stringify-result">{result}</code>
                </StoryCard>
            </div>;
  },
  play: async ({
    canvas
  }) => {
    await expect(canvas.getByTestId('stringify-result')).toHaveTextContent('app-layout');
    await expect(canvas.getByTestId('stringify-result')).toHaveTextContent('theme-grayscale');
  }
}`,...V.parameters?.docs?.source}}},H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`{
  name: 'element: html (default)',
  tags: ['use-case', 'props'],
  decorators: [withStoryCard({
    content: <p>
                    Reads from <code>document.documentElement</code> (html) by default when{' '}
                    <code>options.element</code> is not specified.
                </p>
  }), showSource({
    source: dedent\`
                readClassName(themes)
                writeClassName(themes, themeEntry(themes, 'current'))
            \`
  })],
  loaders: [() => {
    writeClassName(themes, themeEntry(themes, 'current'));
    return {};
  }],
  render: () => {
    const result = readClassName(themes);
    return <div className="flex flex-col gap-4">
                <StoryCard title="html.className" appearance="output">
                    <code>{typeof document !== 'undefined' ? document.documentElement.className : ''}</code>
                </StoryCard>
                <ThemeResultCard title="readClassName() result" data-testid="store-read-result" result={result ?? {
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
}`,...H.parameters?.docs?.source}}},U.parameters={...U.parameters,docs:{...U.parameters?.docs,source:{originalSource:`{
  name: 'element: body',
  tags: ['use-case', 'props'],
  decorators: [withStoryCard({
    content: <p>
                    Reads from <code>document.body</code> when passing it in <code>options.element</code>.
                </p>
  }), showSource({
    source: dedent\`
                readClassName(themes, { element: document.body })
                writeClassName(themes, themeEntry(themes, 'high-contrast'), { element: document.body })
            \`
  })],
  loaders: [() => {
    writeClassName(themes, themeEntry(themes, 'high-contrast'), {
      element: document.body
    });
    return {};
  }],
  render: () => {
    const result = readClassName(themes, {
      element: document.body
    });
    return <div className="flex flex-col gap-4">
                <StoryCard title="body.className" appearance="output">
                    <code>{typeof document !== 'undefined' ? document.body.className : ''}</code>
                </StoryCard>
                <ThemeResultCard title="readClassName() result" data-testid="store-read-result" result={result ?? {
        theme: 'high-contrast',
        value: themes['high-contrast']
      }} />
            </div>;
  },
  play: async ({
    canvas
  }) => {
    await expect(canvas.getByTestId('store-read-result')).toHaveTextContent('theme: high-contrast');
    await expect(canvas.getByTestId('store-read-result')).toHaveTextContent('value: theme-high-contrast');
  }
}`,...U.parameters?.docs?.source}}},W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`{
  name: 'element: custom element',
  tags: ['props'],
  decorators: [withStoryCard({
    content: <p>
                    Theme is applied to a custom element by passing it in <code>options.element</code>.
                </p>
  }), showSource({
    source: dedent\`
                readClassName(themes, { element: targetElement })
                writeClassName(themes, themeEntry(themes, 'grayscale'), { element: targetElement })
            \`
  })],
  render: () => {
    const targetRef = useRef<HTMLDivElement | null>(null);
    const [mounted, setMounted] = useState(false);
    useLayoutEffect(() => {
      const el = targetRef.current;
      if (!el) return;
      writeClassName(themes, themeEntry(themes, 'grayscale'), {
        element: el
      });
      setMounted(true);
    }, []);
    const result = targetRef.current ? readClassName(themes, {
      element: targetRef.current
    }) : null;
    return <div className="flex flex-col gap-2">
                <div ref={targetRef} id="target" data-testid="target-element" className="rounded border border-gray-300 p-4">
                    Target element (theme class is observed here)
                </div>
                {mounted ? <>
                        <StoryCard title="target.className" appearance="output">
                            <code>{targetRef.current?.className}</code>
                        </StoryCard>
                        <ThemeResultCard title="readClassName() result" data-testid="store-read-result" result={result ?? {
          theme: 'grayscale',
          value: themes.grayscale
        }} />
                    </> : <p>Loading…</p>}
            </div>;
  },
  play: async ({
    canvas
  }) => {
    await expect(canvas.getByTestId('store-read-result')).toHaveTextContent('theme: grayscale');
    await expect(canvas.getByTestId('store-read-result')).toHaveTextContent('value: theme-grayscale');
  }
}`,...W.parameters?.docs?.source}}},G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`{
  name: 'themes: string value',
  tags: ['use-case', 'props'],
  parameters: defineDocsParam({
    description: {
      story: 'themes values can be a single string per theme.'
    }
  }),
  decorators: [withStoryCard({
    content: <p>Each theme maps to one string value (one class name).</p>
  }), showSource({
    source: dedent\`
                const themes = {
                    current: 'theme-current',
                    grayscale: 'theme-grayscale',
                    'high-contrast': 'theme-high-contrast'
                } as const

                readClassName(themes)
            \`
  })],
  loaders: [() => {
    writeClassName(themes, themeEntry(themes, 'current'));
    return {};
  }],
  render: () => {
    const result = readClassName(themes);
    return <div className="flex flex-col gap-4">
                <StoryCard title="html.className" appearance="output">
                    <code>{typeof document !== 'undefined' ? document.documentElement.className : ''}</code>
                </StoryCard>
                <ThemeResultCard title="readClassName() result" data-testid="store-read-result" result={result ?? {
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
}`,...G.parameters?.docs?.source}}},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
  name: 'themes: array values',
  tags: ['use-case', 'props'],
  parameters: defineDocsParam({
    description: {
      story: 'themes values can be string[] for multiple CSS classes. All classes are applied to the element.'
    }
  }),
  decorators: [withStoryCard({
    content: <p>
                    Each theme can map to multiple class names. Setting <code>grayscale</code> adds both{' '}
                    <code>theme-grayscale</code> and <code>app:bg-gray-100</code> to the element.
                </p>
  }), showSource({
    source: dedent\`
                const themes = {
                    current: 'theme-current',
                    grayscale: ['theme-grayscale', 'app:bg-gray-100'],
                    'high-contrast': 'theme-high-contrast'
                } as const

                readClassName(themes)
                writeClassName(themes, themeEntry(themes, 'grayscale'))
            \`
  })],
  loaders: [() => {
    writeClassName(themesArray, themeEntry(themesArray, 'grayscale'));
    return {};
  }],
  render: () => {
    const result = readClassName(themesArray);
    return <div className="flex flex-col gap-4">
                <StoryCard title="html.className" appearance="output">
                    <code>{typeof document !== 'undefined' ? document.documentElement.className : ''}</code>
                </StoryCard>
                <ThemeResultCard title="readClassName() result" data-testid="store-read-result" result={result ?? {
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
}`,...q.parameters?.docs?.source}}},J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`{
  name: 'subscribeClassName: only when themeEntry changes',
  tags: ['props'],
  parameters: defineDocsParam({
    description: {
      story: 'The handler is only invoked when the resolved themeEntry changes. Adding non-theme classes does not trigger the handler.'
    }
  }),
  decorators: [withStoryCard(), showSource({
    source: dedent\`
                subscribeClassName(themes, (entry) => {
                    invocationCount++
                    setObserved(entry)
                }, { element: targetElement })
                // Adding element.classList.add('app-other') does NOT invoke handler
                // writeClassName(themes, themeEntry(themes, 'grayscale')) DOES invoke when theme changes
            \`
  })],
  render: () => {
    const targetRef = useRef<HTMLDivElement | null>(null);
    const [invocationCount, setInvocationCount] = useState(0);
    const [observed, setObserved] = useState<ThemeEntry<typeof themes> | undefined | null>(null);
    useLayoutEffect(() => {
      const el = targetRef.current;
      if (!el) return;
      const unSub = subscribeClassName(themes, entry => {
        setInvocationCount(c => c + 1);
        setObserved(entry);
      }, {
        element: el
      });
      writeClassName(themes, themeEntry(themes, 'grayscale'), {
        element: el
      });
      return unSub;
    }, []);
    const displayTheme = observed?.theme ?? '(none)';
    return <div className="flex flex-col gap-4" data-testid="subscribe-only-when-theme-changes">
                <div ref={targetRef} data-testid="target-element" className="rounded border border-gray-300 p-2">
                    Target element
                </div>
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
                    <Button data-testid="add-non-theme-class" onPress={() => targetRef.current?.classList.add('app-other')}>
                        Add non-theme class
                    </Button>
                    <Button data-testid="change-to-high-contrast" onPress={() => writeClassName(themes, themeEntry(themes, 'high-contrast'), {
          element: targetRef.current!
        })}>
                        Change to high-contrast
                    </Button>
                    <Button data-testid="change-to-current" onPress={() => writeClassName(themes, themeEntry(themes, 'current'), {
          element: targetRef.current!
        })}>
                        Change to current
                    </Button>
                </div>
            </div>;
  },
  play: async ({
    canvas
  }) => {
    await expect(canvas.getByTestId('invocation-count')).toHaveTextContent('1');
    await expect(canvas.getByTestId('observed-theme')).toHaveTextContent('grayscale');
    await userEvent.click(canvas.getByTestId('change-to-high-contrast'));
    await waitFor(() => expect(canvas.getByTestId('invocation-count')).toHaveTextContent('2'));
    await expect(canvas.getByTestId('observed-theme')).toHaveTextContent('high-contrast');
  }
}`,...J.parameters?.docs?.source}}},Y=[`Playground`,`Read`,`ReadWhenEmpty`,`Write`,`Subscribe`,`ParseClassName`,`StringifyClassName`,`ElementDefault`,`ElementBody`,`ElementCustom`,`ThemeMapStringValue`,`ThemeMapArrayValues`,`SubscribeOnlyWhenThemeChanges`]})))()}X();export{U as ElementBody,W as ElementCustom,H as ElementDefault,B as ParseClassName,F as Playground,I as Read,L as ReadWhenEmpty,V as StringifyClassName,z as Subscribe,J as SubscribeOnlyWhenThemeChanges,q as ThemeMapArrayValues,G as ThemeMapStringValue,R as Write,Y as __namedExportsOrder,N as default};