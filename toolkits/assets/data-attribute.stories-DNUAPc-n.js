import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./react-B6tGW3fj.js";import{a as n}from"./chunk-W22LQPXL-BSpKiHdn.js";import{a as r,c as i,i as a,l as o,s}from"./iframe-DFQ_z_Nq.js";import{n as c,t as l}from"./dedent-DQaCLeUO.js";import{n as u}from"./theme-entry-Cs_OPpJC.js";import{a as d,c as f,i as p,l as m,n as h,o as g,r as _,s as v,t as y,u as b}from"./write-data-attribute-C8NT32Vv.js";import{n as x,t as S}from"./button-CSoc4Dgk.js";import{n as C,t as w}from"./theme-result-card-I-1cNXBY.js";import{n as T,t as E}from"./theme-store-demo-CpR1fkgT.js";function D(e=document.documentElement,t=I){return{read:()=>f(F,t,{element:e}),write:n=>h(F,t,n,{element:e}),subscribe:n=>p(F,t,n,{element:e})}}function O(e,t,n){return{read:()=>f(e,t,{element:n,parse:(e,t)=>b(e,t,{separator:X})}),write:r=>h(e,t,r,{element:n,stringify:(e,t,n)=>g(e,t,n,{separator:X})}),subscribe:r=>p(e,t,r,{element:n,parse:(e,t)=>b(e,t,{separator:X})})}}var k,A,j,M,N,P,F,I,L,R,z,B,V,H,U,W,G,K,q,J,Y,X,Z,Q;function $(){return($=e((()=>{m(),v(),d(),_(),y(),s(),c(),k=t(),x(),C(),T(),A=n(),{expect:j,userEvent:M,waitFor:N}=__STORYBOOK_MODULE_TEST__,P={title:`theme/data-attribute`,tags:[`func`,`version:2.0`],parameters:r({description:{component:`Low-level functions for reading and writing theme via data attributes: readDataAttribute, writeDataAttribute, subscribeDataAttribute, parseDataAttribute, stringifyDataAttribute.`}}),render:()=>(0,A.jsx)(A.Fragment,{})},F={current:`theme-current`,next:`theme-next`,grayscale:`theme-grayscale`,"high-contrast":`theme-high-contrast`},I=`data-theme`,L={tags:[`playground`],parameters:r({description:{story:`Interactive demo: readDataAttribute, writeDataAttribute, subscribeDataAttribute used together.`}}),decorators:[o(),i({source:l`
                const store = {
                  read: () => readDataAttribute(themes, 'data-theme', { element }),
                  write: (entry) => writeDataAttribute(themes, 'data-theme', entry, { element }),
                  subscribe: (handler) => subscribeDataAttribute(themes, 'data-theme', handler, { element })
                }
                <ThemeStoreDemo store={store} themes={themes} />
            `})],render:()=>{let e=D();return(0,A.jsx)(E,{store:e,themes:F})},play:async({canvas:e})=>{await M.click(e.getByTestId(`theme-store-demo-btn-write-grayscale`)),await N(()=>j(e.getByTestId(`theme-store-demo-observe`)).toHaveTextContent(`grayscale`)),await j(e.getByTestId(`theme-store-demo-observe`)).toHaveTextContent(`theme-grayscale`)}},R={name:`readDataAttribute`,tags:[`props`],parameters:r({description:{story:`readDataAttribute(themes, attributeName, { element }) reads the current theme from the element data attribute.`}}),decorators:[o(),i({source:l`
                const result = readDataAttribute(themes, 'data-theme', { element })
            `})],loaders:[()=>(h(F,I,u(F,`grayscale`)),{})],render:()=>{let e=f(F,I);return(0,A.jsx)(w,{title:`readDataAttribute() result`,"data-testid":`store-read-result`,result:e??{theme:`grayscale`,value:F.grayscale}})},play:async({canvas:e})=>{await j(e.getByTestId(`store-read-result`)).toHaveTextContent(`theme: grayscale`),await j(e.getByTestId(`store-read-result`)).toHaveTextContent(`value: theme-grayscale`)}},z={name:`readDataAttribute: undefined when no theme`,tags:[`props`],parameters:r({description:{story:`When no theme attribute value is present, readDataAttribute returns undefined.`}}),decorators:[o(),i({source:l`
                const result = readDataAttribute(themes, 'data-theme', { element })
                // undefined when no theme
            `})],loaders:[()=>(typeof document<`u`&&document.documentElement.removeAttribute(I),{})],render:()=>{let e=f(F,I);return(0,A.jsx)(w,{title:`readDataAttribute() result`,"data-testid":`store-read-result`,result:e===void 0?{theme:void 0,value:void 0}:e})},play:async({canvas:e})=>{await j(e.getByTestId(`store-read-result`)).toHaveTextContent(`(undefined)`)}},B={name:`writeDataAttribute`,tags:[`props`],parameters:r({description:{story:`writeDataAttribute(themes, attributeName, entry, { element }) applies the theme value to the element data attribute.`}}),decorators:[o(),i({source:l`
                writeDataAttribute(themes, 'data-theme', themeEntry(themes, 'grayscale'), { element })
            `})],render:()=>{let[e,t]=(0,k.useState)(()=>f(F,I)?.theme??null);return(0,A.jsxs)(`div`,{className:`flex flex-col gap-4`,children:[(0,A.jsx)(`div`,{className:`flex flex-wrap gap-2`,children:Object.keys(F).map(e=>(0,A.jsxs)(S,{"data-testid":`write-${e}`,onPress:()=>{h(F,I,u(F,e)),t(e)},children:[`write(`,e,`)`]},e))}),(0,A.jsx)(w,{title:`readDataAttribute() after write`,"data-testid":`store-write-result`,result:e?{theme:e,value:F[e]}:{theme:`current`,value:F.current}})]})},play:async({canvas:e})=>{await M.click(e.getByTestId(`write-grayscale`)),await j(e.getByTestId(`store-write-result`)).toHaveTextContent(`theme: grayscale`),await j(e.getByTestId(`store-write-result`)).toHaveTextContent(`value: theme-grayscale`)}},V={name:`subscribeDataAttribute`,tags:[`props`],parameters:r({description:{story:`subscribeDataAttribute(themes, attributeName, handler, { element }) calls the handler when the data attribute changes (no initial notify).`}}),decorators:[o(),i({source:l`
                subscribeDataAttribute(themes, 'data-theme', (themeResult) => {
                    console.log('Theme:', themeResult?.theme, themeResult?.value)
                }, { element })
            `})],render:()=>{let[e,t]=(0,k.useState)(void 0);(0,k.useEffect)(()=>p(F,I,t),[]);let n=e?.theme??`current`;return(0,A.jsxs)(`div`,{className:`flex flex-col gap-4`,children:[(0,A.jsx)(`div`,{className:`flex flex-wrap gap-2`,children:Object.keys(F).map(e=>(0,A.jsxs)(S,{"data-testid":`write-${e}`,onPress:()=>h(F,I,u(F,e)),children:[`write(`,e,`)`]},e))}),(0,A.jsx)(w,{title:`subscribeDataAttribute() receives`,"data-testid":`store-subscribe-result`,result:u(F,n)})]})},play:async({canvas:e})=>{await M.click(e.getByTestId(`write-high-contrast`)),await N(()=>j(e.getByTestId(`store-subscribe-result`)).toHaveTextContent(`high-contrast`))}},H={name:`parseDataAttribute`,tags:[`props`],parameters:r({description:{story:`Pure function: parseDataAttribute(themes, value, options?) parses a data attribute value string into a ThemeEntry. Uses first token when separator is space (default).`}}),decorators:[o(),i({source:l`
                const result = parseDataAttribute(themes, 'theme-current other-value')
                // { theme: 'current', value: 'theme-current' }
            `})],render:()=>{let e=b(F,`theme-current other-value`);return(0,A.jsxs)(`div`,{className:`flex flex-col gap-4`,children:[(0,A.jsx)(a,{title:`Input`,appearance:`output`,children:(0,A.jsx)(`code`,{"data-testid":`parse-input`,children:`theme-current other-value`})}),(0,A.jsx)(w,{title:`parseDataAttribute() result`,"data-testid":`parse-result`,result:e??{theme:`current`,value:F.current}})]})},play:async({canvas:e})=>{await j(e.getByTestId(`parse-result`)).toHaveTextContent(`theme: current`),await j(e.getByTestId(`parse-result`)).toHaveTextContent(`value: theme-current`)}},U={name:`stringifyDataAttribute`,tags:[`props`],parameters:r({description:{story:`Pure function: stringifyDataAttribute(themes, existing, entry, options?) produces attribute value. Removes theme tokens from existing, adds entry value (first only for arrays).`}}),decorators:[o(),i({source:l`
                const result = stringifyDataAttribute(themes, 'app-layout theme-current', themeEntry(themes, 'grayscale'))
                // 'app-layout theme-grayscale'
            `})],render:()=>{let e=g(F,`app-layout theme-current`,u(F,`grayscale`));return(0,A.jsxs)(`div`,{className:`flex flex-col gap-4`,children:[(0,A.jsx)(a,{title:`Input`,appearance:`output`,children:(0,A.jsx)(`code`,{"data-testid":`stringify-input`,children:`themes, 'app-layout theme-current', themeEntry(themes, 'grayscale')`})}),(0,A.jsx)(a,{title:`stringifyDataAttribute() result`,appearance:`output`,children:(0,A.jsx)(`code`,{"data-testid":`stringify-result`,children:e})})]})},play:async({canvas:e})=>{await j(e.getByTestId(`stringify-result`)).toHaveTextContent(`app-layout`),await j(e.getByTestId(`stringify-result`)).toHaveTextContent(`theme-grayscale`)}},W={name:`element: html (default)`,tags:[`use-case`,`props`],decorators:[o({content:(0,A.jsxs)(`p`,{children:[`Reads from `,(0,A.jsx)(`code`,{children:`document.documentElement`}),` (html) by default when`,` `,(0,A.jsx)(`code`,{children:`options.element`}),` is not specified.`]})}),i({source:l`
                readDataAttribute(themes, 'data-theme')
                writeDataAttribute(themes, 'data-theme', themeEntry(themes, 'current'))
            `})],loaders:[()=>(h(F,I,u(F,`current`)),{})],render:()=>{let e=f(F,I);return(0,A.jsxs)(`div`,{className:`flex flex-col gap-4`,children:[(0,A.jsx)(a,{title:`html[data-theme]`,appearance:`output`,children:(0,A.jsx)(`code`,{children:typeof document<`u`?document.documentElement.getAttribute(I)??`(empty)`:``})}),(0,A.jsx)(w,{title:`readDataAttribute() result`,"data-testid":`store-read-result`,result:e??{theme:`current`,value:F.current}})]})},play:async({canvas:e})=>{await j(e.getByTestId(`store-read-result`)).toHaveTextContent(`theme: current`),await j(e.getByTestId(`store-read-result`)).toHaveTextContent(`value: theme-current`)}},G={name:`element: body`,tags:[`use-case`,`props`],decorators:[o({content:(0,A.jsxs)(`p`,{children:[`Reads from `,(0,A.jsx)(`code`,{children:`document.body`}),` when passing it in `,(0,A.jsx)(`code`,{children:`options.element`}),`.`]})}),i({source:l`
                readDataAttribute(themes, 'data-theme', { element: document.body })
                writeDataAttribute(themes, 'data-theme', themeEntry(themes, 'high-contrast'), { element: document.body })
            `})],loaders:[()=>(h(F,I,u(F,`high-contrast`),{element:document.body}),{})],render:()=>{let e=f(F,I,{element:document.body});return(0,A.jsxs)(`div`,{className:`flex flex-col gap-4`,children:[(0,A.jsx)(a,{title:`body[data-theme]`,appearance:`output`,children:(0,A.jsx)(`code`,{children:typeof document<`u`?document.body.getAttribute(I)??`(empty)`:``})}),(0,A.jsx)(w,{title:`readDataAttribute() result`,"data-testid":`store-read-result`,result:e??{theme:`high-contrast`,value:F[`high-contrast`]}})]})},play:async({canvas:e})=>{await j(e.getByTestId(`store-read-result`)).toHaveTextContent(`theme: high-contrast`),await j(e.getByTestId(`store-read-result`)).toHaveTextContent(`value: theme-high-contrast`)}},K={name:`element: custom element`,tags:[`props`],decorators:[o({content:(0,A.jsxs)(`p`,{children:[`Theme is applied to a custom element via data attribute by passing it in`,` `,(0,A.jsx)(`code`,{children:`options.element`}),`.`]})}),i({source:l`
                readDataAttribute(themes, 'data-theme', { element: targetElement })
                writeDataAttribute(themes, 'data-theme', themeEntry(themes, 'grayscale'), { element: targetElement })
            `})],render:()=>{let e=(0,k.useRef)(null),[t,n]=(0,k.useState)(!1);(0,k.useLayoutEffect)(()=>{let t=e.current;t&&(h(F,I,u(F,`grayscale`),{element:t}),n(!0))},[]);let r=e.current?f(F,I,{element:e.current}):null;return(0,A.jsxs)(`div`,{className:`flex flex-col gap-2`,children:[(0,A.jsx)(`div`,{ref:e,id:`target`,"data-testid":`target-element`,className:`rounded border border-gray-300 p-4`,children:`Target element (theme data attribute is observed here)`}),t?(0,A.jsxs)(A.Fragment,{children:[(0,A.jsx)(a,{title:`target[data-theme]`,appearance:`output`,children:(0,A.jsx)(`code`,{children:e.current?.getAttribute(I)??`(empty)`})}),(0,A.jsx)(w,{title:`readDataAttribute() result`,"data-testid":`store-read-result`,result:r??{theme:`grayscale`,value:F.grayscale}})]}):(0,A.jsx)(`p`,{children:`Loading…`})]})},play:async({canvas:e})=>{await j(e.getByTestId(`store-read-result`)).toHaveTextContent(`theme: grayscale`),await j(e.getByTestId(`store-read-result`)).toHaveTextContent(`value: theme-grayscale`)}},q={name:`themes: string value`,tags:[`use-case`,`props`],parameters:r({description:{story:`themes values can be a single string per theme.`}}),decorators:[o({content:(0,A.jsx)(`p`,{children:`Each theme maps to one string value (attribute value).`})}),i({source:l`
                const themes = {
                    current: 'theme-current',
                    grayscale: 'theme-grayscale',
                    'high-contrast': 'theme-high-contrast'
                } as const

                readDataAttribute(themes, 'data-theme')
            `})],loaders:[()=>(h(F,I,u(F,`current`)),{})],render:()=>{let e=f(F,I);return(0,A.jsxs)(`div`,{className:`flex flex-col gap-4`,children:[(0,A.jsx)(a,{title:`html[data-theme]`,appearance:`output`,children:(0,A.jsx)(`code`,{children:typeof document<`u`?document.documentElement.getAttribute(I)??`(none)`:``})}),(0,A.jsx)(w,{title:`readDataAttribute() result`,"data-testid":`store-read-result`,result:e??{theme:`current`,value:F.current}})]})},play:async({canvas:e})=>{await j(e.getByTestId(`store-read-result`)).toHaveTextContent(`theme: current`),await j(e.getByTestId(`store-read-result`)).toHaveTextContent(`value: theme-current`)}},J={current:`theme-current`,grayscale:[`theme-grayscale`,`app:bg-gray-100`],"high-contrast":`theme-high-contrast`},Y={name:`themes: array values`,tags:[`use-case`,`props`],parameters:r({description:{story:`themes values can be string[]. writeDataAttribute uses only the first value for the attribute.`}}),decorators:[o({content:(0,A.jsxs)(`p`,{children:[`With `,(0,A.jsx)(`code`,{children:`string[]`}),` values, only the first value is used for the data attribute.`,` `,(0,A.jsx)(`code`,{children:`ThemeResult.value`}),` remains the full array.`]})}),i({source:l`
                const themes = {
                    current: 'theme-current',
                    grayscale: ['theme-grayscale', 'app:bg-gray-100'],
                    'high-contrast': 'theme-high-contrast'
                } as const

                readDataAttribute(themes, 'data-theme')
                writeDataAttribute(themes, 'data-theme', themeEntry(themes, 'grayscale'))
            `})],loaders:[()=>(h(J,I,u(J,`grayscale`)),{})],render:()=>{let e=f(J,I);return(0,A.jsxs)(`div`,{className:`flex flex-col gap-4`,children:[(0,A.jsx)(a,{title:`html[data-theme]`,appearance:`output`,children:(0,A.jsx)(`code`,{children:typeof document<`u`?document.documentElement.getAttribute(I)??`(none)`:``})}),(0,A.jsx)(w,{title:`readDataAttribute() result`,"data-testid":`store-read-result`,result:e??{theme:`grayscale`,value:J.grayscale}})]})},play:async({canvas:e})=>{await j(e.getByTestId(`store-read-result`)).toHaveTextContent(`theme: grayscale`),await j(e.getByTestId(`store-read-result`)).toHaveTextContent(`value: [theme-grayscale, app:bg-gray-100]`)}},X=`,`,Z={name:`separator: comma`,tags:[`use-case`,`props`],parameters:r({description:{story:`Curry parseDataAttribute and stringifyDataAttribute with separator for comma-separated values. Read uses first value; write removes theme tokens and adds new one.`}}),decorators:[o({content:(0,A.jsxs)(`p`,{children:[`Curry `,(0,A.jsx)(`code`,{children:`parseDataAttribute`}),` and `,(0,A.jsx)(`code`,{children:`stringifyDataAttribute`}),` with`,` `,(0,A.jsx)(`code`,{children:`options.separator = ','`}),` for comma-separated attribute values.`]})}),i({source:l`
                readDataAttribute(themes, 'data-theme', {
                    element: target,
                    parse: (t, v) => parseDataAttribute(t, v, { separator: ',' })
                })
                writeDataAttribute(themes, 'data-theme', entry, {
                    element: target,
                    stringify: (t, x, e) => stringifyDataAttribute(t, x, e, { separator: ',' })
                })
            `})],render:()=>{let[e,t]=(0,k.useState)(null);return(0,k.useLayoutEffect)(()=>{let e=document.getElementById(`comma-target`);if(!e)return;e.setAttribute(I,`theme-current`);let n=O(F,I,e);t(n)},[]),(0,A.jsxs)(`div`,{className:`flex flex-col gap-4`,children:[(0,A.jsx)(`div`,{id:`comma-target`,"data-testid":`comma-target`,className:`rounded border border-gray-300 p-4`,children:`Target element (data-theme uses comma-separated values)`}),e&&(0,A.jsxs)(A.Fragment,{children:[(0,A.jsx)(a,{title:`target[data-theme]`,appearance:`output`,children:(0,A.jsx)(`code`,{"data-testid":`comma-attr-value`,children:typeof document<`u`?document.getElementById(`comma-target`)?.getAttribute(I)??`(empty)`:``})}),(0,A.jsx)(E,{store:e,themes:F,setThemeKeys:[`current`,`grayscale`,`high-contrast`],"data-testid":`comma-demo`})]})]})},play:async({canvas:e})=>{let t=document.getElementById(`comma-target`);if(!t)return;let n=O(F,I,t);t.setAttribute(I,`theme-current`),n.write(u(F,`grayscale`)),await N(()=>{let e=t.getAttribute(I)??``;j(e).toContain(`theme-grayscale`)}),await j(e.getByTestId(`comma-demo-observe`)).toHaveTextContent(`grayscale`)}},L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`{
  tags: ['playground'],
  parameters: defineDocsParam({
    description: {
      story: 'Interactive demo: readDataAttribute, writeDataAttribute, subscribeDataAttribute used together.'
    }
  }),
  decorators: [withStoryCard(), showSource({
    source: dedent\`
                const store = {
                  read: () => readDataAttribute(themes, 'data-theme', { element }),
                  write: (entry) => writeDataAttribute(themes, 'data-theme', entry, { element }),
                  subscribe: (handler) => subscribeDataAttribute(themes, 'data-theme', handler, { element })
                }
                <ThemeStoreDemo store={store} themes={themes} />
            \`
  })],
  render: () => {
    const store = createDataAttributeStore();
    return <ThemeStoreDemo store={store} themes={themes} />;
  },
  play: async ({
    canvas
  }) => {
    await userEvent.click(canvas.getByTestId('theme-store-demo-btn-write-grayscale'));
    await waitFor(() => expect(canvas.getByTestId('theme-store-demo-observe')).toHaveTextContent('grayscale'));
    await expect(canvas.getByTestId('theme-store-demo-observe')).toHaveTextContent('theme-grayscale');
  }
}`,...L.parameters?.docs?.source}}},R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`{
  name: 'readDataAttribute',
  tags: ['props'],
  parameters: defineDocsParam({
    description: {
      story: 'readDataAttribute(themes, attributeName, { element }) reads the current theme from the element data attribute.'
    }
  }),
  decorators: [withStoryCard(), showSource({
    source: dedent\`
                const result = readDataAttribute(themes, 'data-theme', { element })
            \`
  })],
  loaders: [() => {
    writeDataAttribute(themes, attributeName, themeEntry(themes, 'grayscale'));
    return {};
  }],
  render: () => {
    const result = readDataAttribute(themes, attributeName);
    return <ThemeResultCard title="readDataAttribute() result" data-testid="store-read-result" result={result ?? {
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
}`,...R.parameters?.docs?.source}}},z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`{
  name: 'readDataAttribute: undefined when no theme',
  tags: ['props'],
  parameters: defineDocsParam({
    description: {
      story: 'When no theme attribute value is present, readDataAttribute returns undefined.'
    }
  }),
  decorators: [withStoryCard(), showSource({
    source: dedent\`
                const result = readDataAttribute(themes, 'data-theme', { element })
                // undefined when no theme
            \`
  })],
  loaders: [() => {
    if (typeof document !== 'undefined') {
      document.documentElement.removeAttribute(attributeName);
    }
    return {};
  }],
  render: () => {
    const result = readDataAttribute(themes, attributeName);
    return <ThemeResultCard title="readDataAttribute() result" data-testid="store-read-result" result={result !== undefined ? result : {
      theme: undefined,
      value: undefined
    }} />;
  },
  play: async ({
    canvas
  }) => {
    await expect(canvas.getByTestId('store-read-result')).toHaveTextContent('(undefined)');
  }
}`,...z.parameters?.docs?.source}}},B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
  name: 'writeDataAttribute',
  tags: ['props'],
  parameters: defineDocsParam({
    description: {
      story: 'writeDataAttribute(themes, attributeName, entry, { element }) applies the theme value to the element data attribute.'
    }
  }),
  decorators: [withStoryCard(), showSource({
    source: dedent\`
                writeDataAttribute(themes, 'data-theme', themeEntry(themes, 'grayscale'), { element })
            \`
  })],
  render: () => {
    const [currentTheme, setCurrentTheme] = useState<ExampleTheme | null>(() => {
      const r = readDataAttribute(themes, attributeName);
      return r?.theme ?? null;
    });
    return <div className="flex flex-col gap-4">
                <div className="flex flex-wrap gap-2">
                    {(Object.keys(themes) as ExampleTheme[]).map(theme => <Button key={theme} data-testid={\`write-\${theme}\`} onPress={() => {
          writeDataAttribute(themes, attributeName, themeEntry(themes, theme));
          setCurrentTheme(theme);
        }}>
                            write({theme})
                        </Button>)}
                </div>
                <ThemeResultCard title="readDataAttribute() after write" data-testid="store-write-result" result={currentTheme ? {
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
}`,...B.parameters?.docs?.source}}},V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`{
  name: 'subscribeDataAttribute',
  tags: ['props'],
  parameters: defineDocsParam({
    description: {
      story: 'subscribeDataAttribute(themes, attributeName, handler, { element }) calls the handler when the data attribute changes (no initial notify).'
    }
  }),
  decorators: [withStoryCard(), showSource({
    source: dedent\`
                subscribeDataAttribute(themes, 'data-theme', (themeResult) => {
                    console.log('Theme:', themeResult?.theme, themeResult?.value)
                }, { element })
            \`
  })],
  render: () => {
    const [result, setResult] = useState<ThemeEntry<typeof themes> | undefined | null>(undefined);
    useEffect(() => {
      return subscribeDataAttribute(themes, attributeName, setResult);
    }, []);
    const displayTheme = result?.theme ?? 'current';
    return <div className="flex flex-col gap-4">
                <div className="flex flex-wrap gap-2">
                    {(Object.keys(themes) as ExampleTheme[]).map(theme => <Button key={theme} data-testid={\`write-\${theme}\`} onPress={() => writeDataAttribute(themes, attributeName, themeEntry(themes, theme))}>
                            write({theme})
                        </Button>)}
                </div>
                <ThemeResultCard title="subscribeDataAttribute() receives" data-testid="store-subscribe-result" result={themeEntry(themes, displayTheme)} />
            </div>;
  },
  play: async ({
    canvas
  }) => {
    await userEvent.click(canvas.getByTestId('write-high-contrast'));
    await waitFor(() => expect(canvas.getByTestId('store-subscribe-result')).toHaveTextContent('high-contrast'));
  }
}`,...V.parameters?.docs?.source}}},H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`{
  name: 'parseDataAttribute',
  tags: ['props'],
  parameters: defineDocsParam({
    description: {
      story: 'Pure function: parseDataAttribute(themes, value, options?) parses a data attribute value string into a ThemeEntry. Uses first token when separator is space (default).'
    }
  }),
  decorators: [withStoryCard(), showSource({
    source: dedent\`
                const result = parseDataAttribute(themes, 'theme-current other-value')
                // { theme: 'current', value: 'theme-current' }
            \`
  })],
  render: () => {
    const result = parseDataAttribute(themes, 'theme-current other-value');
    return <div className="flex flex-col gap-4">
                <StoryCard title="Input" appearance="output">
                    <code data-testid="parse-input">theme-current other-value</code>
                </StoryCard>
                <ThemeResultCard title="parseDataAttribute() result" data-testid="parse-result" result={result ?? {
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
}`,...H.parameters?.docs?.source}}},U.parameters={...U.parameters,docs:{...U.parameters?.docs,source:{originalSource:`{
  name: 'stringifyDataAttribute',
  tags: ['props'],
  parameters: defineDocsParam({
    description: {
      story: 'Pure function: stringifyDataAttribute(themes, existing, entry, options?) produces attribute value. Removes theme tokens from existing, adds entry value (first only for arrays).'
    }
  }),
  decorators: [withStoryCard(), showSource({
    source: dedent\`
                const result = stringifyDataAttribute(themes, 'app-layout theme-current', themeEntry(themes, 'grayscale'))
                // 'app-layout theme-grayscale'
            \`
  })],
  render: () => {
    const result = stringifyDataAttribute(themes, 'app-layout theme-current', themeEntry(themes, 'grayscale'));
    return <div className="flex flex-col gap-4">
                <StoryCard title="Input" appearance="output">
                    <code data-testid="stringify-input">
                        themes, &apos;app-layout theme-current&apos;, themeEntry(themes, &apos;grayscale&apos;)
                    </code>
                </StoryCard>
                <StoryCard title="stringifyDataAttribute() result" appearance="output">
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
}`,...U.parameters?.docs?.source}}},W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`{
  name: 'element: html (default)',
  tags: ['use-case', 'props'],
  decorators: [withStoryCard({
    content: <p>
                    Reads from <code>document.documentElement</code> (html) by default when{' '}
                    <code>options.element</code> is not specified.
                </p>
  }), showSource({
    source: dedent\`
                readDataAttribute(themes, 'data-theme')
                writeDataAttribute(themes, 'data-theme', themeEntry(themes, 'current'))
            \`
  })],
  loaders: [() => {
    writeDataAttribute(themes, attributeName, themeEntry(themes, 'current'));
    return {};
  }],
  render: () => {
    const result = readDataAttribute(themes, attributeName);
    return <div className="flex flex-col gap-4">
                <StoryCard title="html[data-theme]" appearance="output">
                    <code>
                        {typeof document !== 'undefined' ? document.documentElement.getAttribute(attributeName) ?? '(empty)' : ''}
                    </code>
                </StoryCard>
                <ThemeResultCard title="readDataAttribute() result" data-testid="store-read-result" result={result ?? {
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
}`,...W.parameters?.docs?.source}}},G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`{
  name: 'element: body',
  tags: ['use-case', 'props'],
  decorators: [withStoryCard({
    content: <p>
                    Reads from <code>document.body</code> when passing it in <code>options.element</code>.
                </p>
  }), showSource({
    source: dedent\`
                readDataAttribute(themes, 'data-theme', { element: document.body })
                writeDataAttribute(themes, 'data-theme', themeEntry(themes, 'high-contrast'), { element: document.body })
            \`
  })],
  loaders: [() => {
    writeDataAttribute(themes, attributeName, themeEntry(themes, 'high-contrast'), {
      element: document.body
    });
    return {};
  }],
  render: () => {
    const result = readDataAttribute(themes, attributeName, {
      element: document.body
    });
    return <div className="flex flex-col gap-4">
                <StoryCard title="body[data-theme]" appearance="output">
                    <code>
                        {typeof document !== 'undefined' ? document.body.getAttribute(attributeName) ?? '(empty)' : ''}
                    </code>
                </StoryCard>
                <ThemeResultCard title="readDataAttribute() result" data-testid="store-read-result" result={result ?? {
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
}`,...G.parameters?.docs?.source}}},K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`{
  name: 'element: custom element',
  tags: ['props'],
  decorators: [withStoryCard({
    content: <p>
                    Theme is applied to a custom element via data attribute by passing it in{' '}
                    <code>options.element</code>.
                </p>
  }), showSource({
    source: dedent\`
                readDataAttribute(themes, 'data-theme', { element: targetElement })
                writeDataAttribute(themes, 'data-theme', themeEntry(themes, 'grayscale'), { element: targetElement })
            \`
  })],
  render: () => {
    const targetRef = useRef<HTMLDivElement | null>(null);
    const [mounted, setMounted] = useState(false);
    useLayoutEffect(() => {
      const el = targetRef.current;
      if (!el) return;
      writeDataAttribute(themes, attributeName, themeEntry(themes, 'grayscale'), {
        element: el
      });
      setMounted(true);
    }, []);
    const result = targetRef.current ? readDataAttribute(themes, attributeName, {
      element: targetRef.current
    }) : null;
    return <div className="flex flex-col gap-2">
                <div ref={targetRef} id="target" data-testid="target-element" className="rounded border border-gray-300 p-4">
                    Target element (theme data attribute is observed here)
                </div>
                {mounted ? <>
                        <StoryCard title="target[data-theme]" appearance="output">
                            <code>{targetRef.current?.getAttribute(attributeName) ?? '(empty)'}</code>
                        </StoryCard>
                        <ThemeResultCard title="readDataAttribute() result" data-testid="store-read-result" result={result ?? {
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
}`,...K.parameters?.docs?.source}}},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
  name: 'themes: string value',
  tags: ['use-case', 'props'],
  parameters: defineDocsParam({
    description: {
      story: 'themes values can be a single string per theme.'
    }
  }),
  decorators: [withStoryCard({
    content: <p>Each theme maps to one string value (attribute value).</p>
  }), showSource({
    source: dedent\`
                const themes = {
                    current: 'theme-current',
                    grayscale: 'theme-grayscale',
                    'high-contrast': 'theme-high-contrast'
                } as const

                readDataAttribute(themes, 'data-theme')
            \`
  })],
  loaders: [() => {
    writeDataAttribute(themes, attributeName, themeEntry(themes, 'current'));
    return {};
  }],
  render: () => {
    const result = readDataAttribute(themes, attributeName);
    return <div className="flex flex-col gap-4">
                <StoryCard title="html[data-theme]" appearance="output">
                    <code>
                        {typeof document !== 'undefined' ? document.documentElement.getAttribute(attributeName) ?? '(none)' : ''}
                    </code>
                </StoryCard>
                <ThemeResultCard title="readDataAttribute() result" data-testid="store-read-result" result={result ?? {
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
}`,...q.parameters?.docs?.source}}},Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`{
  name: 'themes: array values',
  tags: ['use-case', 'props'],
  parameters: defineDocsParam({
    description: {
      story: 'themes values can be string[]. writeDataAttribute uses only the first value for the attribute.'
    }
  }),
  decorators: [withStoryCard({
    content: <p>
                    With <code>string[]</code> values, only the first value is used for the data attribute.{' '}
                    <code>ThemeResult.value</code> remains the full array.
                </p>
  }), showSource({
    source: dedent\`
                const themes = {
                    current: 'theme-current',
                    grayscale: ['theme-grayscale', 'app:bg-gray-100'],
                    'high-contrast': 'theme-high-contrast'
                } as const

                readDataAttribute(themes, 'data-theme')
                writeDataAttribute(themes, 'data-theme', themeEntry(themes, 'grayscale'))
            \`
  })],
  loaders: [() => {
    writeDataAttribute(themesArray, attributeName, themeEntry(themesArray, 'grayscale'));
    return {};
  }],
  render: () => {
    const result = readDataAttribute(themesArray, attributeName);
    return <div className="flex flex-col gap-4">
                <StoryCard title="html[data-theme]" appearance="output">
                    <code>
                        {typeof document !== 'undefined' ? document.documentElement.getAttribute(attributeName) ?? '(none)' : ''}
                    </code>
                </StoryCard>
                <ThemeResultCard title="readDataAttribute() result" data-testid="store-read-result" result={result ?? {
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
}`,...Y.parameters?.docs?.source}}},Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`{
  name: 'separator: comma',
  tags: ['use-case', 'props'],
  parameters: defineDocsParam({
    description: {
      story: 'Curry parseDataAttribute and stringifyDataAttribute with separator for comma-separated values. Read uses first value; write removes theme tokens and adds new one.'
    }
  }),
  decorators: [withStoryCard({
    content: <p>
                    Curry <code>parseDataAttribute</code> and <code>stringifyDataAttribute</code> with{' '}
                    <code>options.separator = &apos;,&apos;</code> for comma-separated attribute values.
                </p>
  }), showSource({
    source: dedent\`
                readDataAttribute(themes, 'data-theme', {
                    element: target,
                    parse: (t, v) => parseDataAttribute(t, v, { separator: ',' })
                })
                writeDataAttribute(themes, 'data-theme', entry, {
                    element: target,
                    stringify: (t, x, e) => stringifyDataAttribute(t, x, e, { separator: ',' })
                })
            \`
  })],
  render: () => {
    const [store, setStore] = useState<ReturnType<typeof createCommaSeparatedStore<typeof themes>> | null>(null);
    useLayoutEffect(() => {
      const el = document.getElementById('comma-target');
      if (!el) return;
      el.setAttribute(attributeName, 'theme-current');
      const s = createCommaSeparatedStore(themes, attributeName, el);
      setStore(s);
    }, []);
    return <div className="flex flex-col gap-4">
                <div id="comma-target" data-testid="comma-target" className="rounded border border-gray-300 p-4">
                    Target element (data-theme uses comma-separated values)
                </div>
                {store && <>
                        <StoryCard title="target[data-theme]" appearance="output">
                            <code data-testid="comma-attr-value">
                                {typeof document !== 'undefined' ? document.getElementById('comma-target')?.getAttribute(attributeName) ?? '(empty)' : ''}
                            </code>
                        </StoryCard>
                        <ThemeStoreDemo store={store} themes={themes} setThemeKeys={['current', 'grayscale', 'high-contrast']} data-testid="comma-demo" />
                    </>}
            </div>;
  },
  play: async ({
    canvas
  }) => {
    const target = document.getElementById('comma-target');
    if (!target) return;
    const store = createCommaSeparatedStore(themes, attributeName, target);
    target.setAttribute(attributeName, 'theme-current');
    store.write(themeEntry(themes, 'grayscale'));
    await waitFor(() => {
      const attrValue = target.getAttribute(attributeName) ?? '';
      expect(attrValue).toContain('theme-grayscale');
    });
    await expect(canvas.getByTestId('comma-demo-observe')).toHaveTextContent('grayscale');
  }
}`,...Z.parameters?.docs?.source}}},Q=[`Playground`,`Read`,`ReadWhenEmpty`,`Write`,`Subscribe`,`ParseDataAttribute`,`StringifyDataAttribute`,`ElementDefault`,`ElementBody`,`ElementCustom`,`ThemeMapStringValue`,`ThemeMapArrayValues`,`SeparatorOption`]})))()}$();export{G as ElementBody,K as ElementCustom,W as ElementDefault,H as ParseDataAttribute,L as Playground,R as Read,z as ReadWhenEmpty,Z as SeparatorOption,U as StringifyDataAttribute,V as Subscribe,Y as ThemeMapArrayValues,q as ThemeMapStringValue,B as Write,Q as __namedExportsOrder,P as default};