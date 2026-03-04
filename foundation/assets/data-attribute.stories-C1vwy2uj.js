import{j as t,d as l,w as i,s as d,r as v,S as g}from"./iframe-BxNitTYh.js";import{d as c}from"./dedent-BuYMbVyj.js";import{t as m}from"./theme-entry-D4S_RAMB.js";import{r as h,w as p,a as O,p as k,s as W}from"./write-data-attribute-BLSisclh.js";import{B as F}from"./button-Dmry2tFF.js";import{T as y}from"./theme-result-card-DZhtloet.js";import{T as V}from"./theme-store-demo-BrhZDazs.js";import"./preload-helper-PPVm8Dsz.js";import"./get-data-attribute-Bl9c_7h4.js";import"./get-attribute-BI4biMNS.js";import"./observe-data-attribute-CrIGpGqK.js";import"./observe-attribute-DJMrXwPX.js";import"./resolve-theme-map-value-CsrxdXA7.js";import"./findKey-D_Zca1Sl.js";import"./resolve-class-name-CuBBgxub.js";import"./append-id-Vsg144gU.js";const{expect:n,userEvent:L,waitFor:M}=__STORYBOOK_MODULE_TEST__,ue={title:"theme/data-attribute",tags:["func","version:1.0"],parameters:l({description:{component:"Low-level functions for reading and writing theme via data attributes: readDataAttribute, writeDataAttribute, subscribeDataAttribute, parseDataAttribute, stringifyDataAttribute."}}),render:()=>t.jsx(t.Fragment,{})},a={current:"theme-current",next:"theme-next",grayscale:"theme-grayscale","high-contrast":"theme-high-contrast"},r="data-theme";function K(e=document.documentElement,o=r){return{read:()=>h(a,o,{element:e}),write:s=>p(a,o,s,{element:e}),subscribe:s=>O(a,o,s,{element:e})}}const f={tags:["playground"],parameters:l({description:{story:"Interactive demo: readDataAttribute, writeDataAttribute, subscribeDataAttribute used together."}}),decorators:[i(),d({source:c`
                const store = {
                  read: () => readDataAttribute(themes, 'data-theme', { element }),
                  write: (entry) => writeDataAttribute(themes, 'data-theme', entry, { element }),
                  subscribe: (handler) => subscribeDataAttribute(themes, 'data-theme', handler, { element })
                }
                <ThemeStoreDemo store={store} themes={themes} />
            `})],render:()=>{const e=K();return t.jsx(V,{store:e,themes:a})},play:async({canvas:e})=>{await L.click(e.getByTestId("theme-store-demo-btn-write-grayscale")),await M(()=>n(e.getByTestId("theme-store-demo-observe")).toHaveTextContent("grayscale")),await n(e.getByTestId("theme-store-demo-observe")).toHaveTextContent("theme-grayscale")}},x={name:"readDataAttribute",tags:["props"],parameters:l({description:{story:"readDataAttribute(themes, attributeName, { element }) reads the current theme from the element data attribute."}}),decorators:[i(),d({source:c`
                const result = readDataAttribute(themes, 'data-theme', { element })
            `})],loaders:[()=>(p(a,r,m(a,"grayscale")),{})],render:()=>{const e=h(a,r);return t.jsx(y,{title:"readDataAttribute() result","data-testid":"store-read-result",result:e??{theme:"grayscale",value:a.grayscale}})},play:async({canvas:e})=>{await n(e.getByTestId("store-read-result")).toHaveTextContent("theme: grayscale"),await n(e.getByTestId("store-read-result")).toHaveTextContent("value: theme-grayscale")}},w={name:"readDataAttribute: undefined when no theme",tags:["props"],parameters:l({description:{story:"When no theme attribute value is present, readDataAttribute returns undefined."}}),decorators:[i(),d({source:c`
                const result = readDataAttribute(themes, 'data-theme', { element })
                // undefined when no theme
            `})],loaders:[()=>(typeof document<"u"&&document.documentElement.removeAttribute(r),{})],render:()=>{const e=h(a,r);return t.jsx(y,{title:"readDataAttribute() result","data-testid":"store-read-result",result:e!==void 0?e:{theme:void 0,value:void 0}})},play:async({canvas:e})=>{await n(e.getByTestId("store-read-result")).toHaveTextContent("(undefined)")}},A={name:"writeDataAttribute",tags:["props"],parameters:l({description:{story:"writeDataAttribute(themes, attributeName, entry, { element }) applies the theme value to the element data attribute."}}),decorators:[i(),d({source:c`
                writeDataAttribute(themes, 'data-theme', themeEntry(themes, 'grayscale'), { element })
            `})],render:()=>{const[e,o]=v.useState(()=>h(a,r)?.theme??null);return t.jsxs("div",{className:"flex flex-col gap-4",children:[t.jsx("div",{className:"flex flex-wrap gap-2",children:Object.keys(a).map(s=>t.jsxs(F,{"data-testid":`write-${s}`,onPress:()=>{p(a,r,m(a,s)),o(s)},children:["write(",s,")"]},s))}),t.jsx(y,{title:"readDataAttribute() after write","data-testid":"store-write-result",result:e?{theme:e,value:a[e]}:{theme:"current",value:a.current}})]})},play:async({canvas:e})=>{await L.click(e.getByTestId("write-grayscale")),await n(e.getByTestId("store-write-result")).toHaveTextContent("theme: grayscale"),await n(e.getByTestId("store-write-result")).toHaveTextContent("value: theme-grayscale")}},D={name:"subscribeDataAttribute",tags:["props"],parameters:l({description:{story:"subscribeDataAttribute(themes, attributeName, handler, { element }) calls the handler when the data attribute changes (no initial notify)."}}),decorators:[i(),d({source:c`
                subscribeDataAttribute(themes, 'data-theme', (themeResult) => {
                    console.log('Theme:', themeResult?.theme, themeResult?.value)
                }, { element })
            `})],render:()=>{const[e,o]=v.useState(void 0);v.useEffect(()=>O(a,r,o),[]);const s=e?.theme??"current";return t.jsxs("div",{className:"flex flex-col gap-4",children:[t.jsx("div",{className:"flex flex-wrap gap-2",children:Object.keys(a).map(u=>t.jsxs(F,{"data-testid":`write-${u}`,onPress:()=>p(a,r,m(a,u)),children:["write(",u,")"]},u))}),t.jsx(y,{title:"subscribeDataAttribute() receives","data-testid":"store-subscribe-result",result:m(a,s)})]})},play:async({canvas:e})=>{await L.click(e.getByTestId("write-high-contrast")),await M(()=>n(e.getByTestId("store-subscribe-result")).toHaveTextContent("high-contrast"))}},T={name:"parseDataAttribute",tags:["props"],parameters:l({description:{story:"Pure function: parseDataAttribute(themes, value, options?) parses a data attribute value string into a ThemeEntry. Uses first token when separator is space (default)."}}),decorators:[i(),d({source:c`
                const result = parseDataAttribute(themes, 'theme-current other-value')
                // { theme: 'current', value: 'theme-current' }
            `})],render:()=>{const e=k(a,"theme-current other-value");return t.jsxs("div",{className:"flex flex-col gap-4",children:[t.jsx(g,{title:"Input",appearance:"output",children:t.jsx("code",{"data-testid":"parse-input",children:"theme-current other-value"})}),t.jsx(y,{title:"parseDataAttribute() result","data-testid":"parse-result",result:e??{theme:"current",value:a.current}})]})},play:async({canvas:e})=>{await n(e.getByTestId("parse-result")).toHaveTextContent("theme: current"),await n(e.getByTestId("parse-result")).toHaveTextContent("value: theme-current")}},C={name:"stringifyDataAttribute",tags:["props"],parameters:l({description:{story:"Pure function: stringifyDataAttribute(themes, existing, entry, options?) produces attribute value. Removes theme tokens from existing, adds entry value (first only for arrays)."}}),decorators:[i(),d({source:c`
                const result = stringifyDataAttribute(themes, 'app-layout theme-current', themeEntry(themes, 'grayscale'))
                // 'app-layout theme-grayscale'
            `})],render:()=>{const e=W(a,"app-layout theme-current",m(a,"grayscale"));return t.jsxs("div",{className:"flex flex-col gap-4",children:[t.jsx(g,{title:"Input",appearance:"output",children:t.jsx("code",{"data-testid":"stringify-input",children:"themes, 'app-layout theme-current', themeEntry(themes, 'grayscale')"})}),t.jsx(g,{title:"stringifyDataAttribute() result",appearance:"output",children:t.jsx("code",{"data-testid":"stringify-result",children:e})})]})},play:async({canvas:e})=>{await n(e.getByTestId("stringify-result")).toHaveTextContent("app-layout"),await n(e.getByTestId("stringify-result")).toHaveTextContent("theme-grayscale")}},S={name:"element: html (default)",tags:["use-case","props"],decorators:[i({content:t.jsxs("p",{children:["Reads from ",t.jsx("code",{children:"document.documentElement"})," (html) by default when"," ",t.jsx("code",{children:"options.element"})," is not specified."]})}),d({source:c`
                readDataAttribute(themes, 'data-theme')
                writeDataAttribute(themes, 'data-theme', themeEntry(themes, 'current'))
            `})],loaders:[()=>(p(a,r,m(a,"current")),{})],render:()=>{const e=h(a,r);return t.jsxs("div",{className:"flex flex-col gap-4",children:[t.jsx(g,{title:"html[data-theme]",appearance:"output",children:t.jsx("code",{children:typeof document<"u"?document.documentElement.getAttribute(r)??"(empty)":""})}),t.jsx(y,{title:"readDataAttribute() result","data-testid":"store-read-result",result:e??{theme:"current",value:a.current}})]})},play:async({canvas:e})=>{await n(e.getByTestId("store-read-result")).toHaveTextContent("theme: current"),await n(e.getByTestId("store-read-result")).toHaveTextContent("value: theme-current")}},E={name:"element: body",tags:["use-case","props"],decorators:[i({content:t.jsxs("p",{children:["Reads from ",t.jsx("code",{children:"document.body"})," when passing it in ",t.jsx("code",{children:"options.element"}),"."]})}),d({source:c`
                readDataAttribute(themes, 'data-theme', { element: document.body })
                writeDataAttribute(themes, 'data-theme', themeEntry(themes, 'high-contrast'), { element: document.body })
            `})],loaders:[()=>(p(a,r,m(a,"high-contrast"),{element:document.body}),{})],render:()=>{const e=h(a,r,{element:document.body});return t.jsxs("div",{className:"flex flex-col gap-4",children:[t.jsx(g,{title:"body[data-theme]",appearance:"output",children:t.jsx("code",{children:typeof document<"u"?document.body.getAttribute(r)??"(empty)":""})}),t.jsx(y,{title:"readDataAttribute() result","data-testid":"store-read-result",result:e??{theme:"high-contrast",value:a["high-contrast"]}})]})},play:async({canvas:e})=>{await n(e.getByTestId("store-read-result")).toHaveTextContent("theme: high-contrast"),await n(e.getByTestId("store-read-result")).toHaveTextContent("value: theme-high-contrast")}},j={name:"element: custom element",tags:["props"],decorators:[i({content:t.jsxs("p",{children:["Theme is applied to a custom element via data attribute by passing it in"," ",t.jsx("code",{children:"options.element"}),"."]})}),d({source:c`
                readDataAttribute(themes, 'data-theme', { element: targetElement })
                writeDataAttribute(themes, 'data-theme', themeEntry(themes, 'grayscale'), { element: targetElement })
            `})],render:()=>{const e=v.useRef(null),[o,s]=v.useState(!1);v.useLayoutEffect(()=>{const b=e.current;b&&(p(a,r,m(a,"grayscale"),{element:b}),s(!0))},[]);const u=e.current?h(a,r,{element:e.current}):null;return t.jsxs("div",{className:"flex flex-col gap-2",children:[t.jsx("div",{ref:e,id:"target","data-testid":"target-element",className:"rounded border border-gray-300 p-4",children:"Target element (theme data attribute is observed here)"}),o?t.jsxs(t.Fragment,{children:[t.jsx(g,{title:"target[data-theme]",appearance:"output",children:t.jsx("code",{children:e.current?.getAttribute(r)??"(empty)"})}),t.jsx(y,{title:"readDataAttribute() result","data-testid":"store-read-result",result:u??{theme:"grayscale",value:a.grayscale}})]}):t.jsx("p",{children:"Loading…"})]})},play:async({canvas:e})=>{await n(e.getByTestId("store-read-result")).toHaveTextContent("theme: grayscale"),await n(e.getByTestId("store-read-result")).toHaveTextContent("value: theme-grayscale")}},B={name:"themes: string value",tags:["use-case","props"],parameters:l({description:{story:"themes values can be a single string per theme."}}),decorators:[i({content:t.jsx("p",{children:"Each theme maps to one string value (attribute value)."})}),d({source:c`
                const themes = {
                    current: 'theme-current',
                    grayscale: 'theme-grayscale',
                    'high-contrast': 'theme-high-contrast'
                } as const

                readDataAttribute(themes, 'data-theme')
            `})],loaders:[()=>(p(a,r,m(a,"current")),{})],render:()=>{const e=h(a,r);return t.jsxs("div",{className:"flex flex-col gap-4",children:[t.jsx(g,{title:"html[data-theme]",appearance:"output",children:t.jsx("code",{children:typeof document<"u"?document.documentElement.getAttribute(r)??"(none)":""})}),t.jsx(y,{title:"readDataAttribute() result","data-testid":"store-read-result",result:e??{theme:"current",value:a.current}})]})},play:async({canvas:e})=>{await n(e.getByTestId("store-read-result")).toHaveTextContent("theme: current"),await n(e.getByTestId("store-read-result")).toHaveTextContent("value: theme-current")}},I={current:"theme-current",grayscale:["theme-grayscale","app:bg-gray-100"],"high-contrast":"theme-high-contrast"},N={name:"themes: array values",tags:["use-case","props"],parameters:l({description:{story:"themes values can be string[]. writeDataAttribute uses only the first value for the attribute."}}),decorators:[i({content:t.jsxs("p",{children:["With ",t.jsx("code",{children:"string[]"})," values, only the first value is used for the data attribute."," ",t.jsx("code",{children:"ThemeResult.value"})," remains the full array."]})}),d({source:c`
                const themes = {
                    current: 'theme-current',
                    grayscale: ['theme-grayscale', 'app:bg-gray-100'],
                    'high-contrast': 'theme-high-contrast'
                } as const

                readDataAttribute(themes, 'data-theme')
                writeDataAttribute(themes, 'data-theme', themeEntry(themes, 'grayscale'))
            `})],loaders:[()=>(p(I,r,m(I,"grayscale")),{})],render:()=>{const e=h(I,r);return t.jsxs("div",{className:"flex flex-col gap-4",children:[t.jsx(g,{title:"html[data-theme]",appearance:"output",children:t.jsx("code",{children:typeof document<"u"?document.documentElement.getAttribute(r)??"(none)":""})}),t.jsx(y,{title:"readDataAttribute() result","data-testid":"store-read-result",result:e??{theme:"grayscale",value:I.grayscale}})]})},play:async({canvas:e})=>{await n(e.getByTestId("store-read-result")).toHaveTextContent("theme: grayscale"),await n(e.getByTestId("store-read-result")).toHaveTextContent("value: [theme-grayscale, app:bg-gray-100]")}},P=",";function _(e,o,s){return{read:()=>h(e,o,{element:s,parse:(u,b)=>k(u,b,{separator:P})}),write:u=>p(e,o,u,{element:s,stringify:(b,H,$)=>W(b,H,$,{separator:P})}),subscribe:u=>O(e,o,u,{element:s,parse:(b,H)=>k(b,H,{separator:P})})}}const R={name:"separator: comma",tags:["use-case","props"],parameters:l({description:{story:"Curry parseDataAttribute and stringifyDataAttribute with separator for comma-separated values. Read uses first value; write removes theme tokens and adds new one."}}),decorators:[i({content:t.jsxs("p",{children:["Curry ",t.jsx("code",{children:"parseDataAttribute"})," and ",t.jsx("code",{children:"stringifyDataAttribute"})," with"," ",t.jsx("code",{children:"options.separator = ','"})," for comma-separated attribute values."]})}),d({source:c`
                readDataAttribute(themes, 'data-theme', {
                    element: target,
                    parse: (t, v) => parseDataAttribute(t, v, { separator: ',' })
                })
                writeDataAttribute(themes, 'data-theme', entry, {
                    element: target,
                    stringify: (t, x, e) => stringifyDataAttribute(t, x, e, { separator: ',' })
                })
            `})],render:()=>{const[e,o]=v.useState(null);return v.useLayoutEffect(()=>{const s=document.getElementById("comma-target");if(!s)return;s.setAttribute(r,"theme-current");const u=_(a,r,s);o(u)},[]),t.jsxs("div",{className:"flex flex-col gap-4",children:[t.jsx("div",{id:"comma-target","data-testid":"comma-target",className:"rounded border border-gray-300 p-4",children:"Target element (data-theme uses comma-separated values)"}),e&&t.jsxs(t.Fragment,{children:[t.jsx(g,{title:"target[data-theme]",appearance:"output",children:t.jsx("code",{"data-testid":"comma-attr-value",children:typeof document<"u"?document.getElementById("comma-target")?.getAttribute(r)??"(empty)":""})}),t.jsx(V,{store:e,themes:a,setThemeKeys:["current","grayscale","high-contrast"],"data-testid":"comma-demo"})]})]})},play:async({canvas:e})=>{const o=document.getElementById("comma-target");if(!o)return;const s=_(a,r,o);o.setAttribute(r,"theme-current"),s.write(m(a,"grayscale")),await M(()=>{const u=o.getAttribute(r)??"";n(u).toContain("theme-grayscale")}),await n(e.getByTestId("comma-demo-observe")).toHaveTextContent("grayscale")}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
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
}`,...f.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
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
}`,...x.parameters?.docs?.source}}};w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
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
}`,...w.parameters?.docs?.source}}};A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
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
}`,...A.parameters?.docs?.source}}};D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
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
}`,...D.parameters?.docs?.source}}};T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
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
}`,...T.parameters?.docs?.source}}};C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
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
}`,...C.parameters?.docs?.source}}};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
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
}`,...S.parameters?.docs?.source}}};E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
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
}`,...E.parameters?.docs?.source}}};j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
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
}`,...j.parameters?.docs?.source}}};B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
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
}`,...B.parameters?.docs?.source}}};N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
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
}`,...N.parameters?.docs?.source}}};R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`{
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
}`,...R.parameters?.docs?.source}}};const ie=["Playground","Read","ReadWhenEmpty","Write","Subscribe","ParseDataAttribute","StringifyDataAttribute","ElementDefault","ElementBody","ElementCustom","ThemeMapStringValue","ThemeMapArrayValues","SeparatorOption"];export{E as ElementBody,j as ElementCustom,S as ElementDefault,T as ParseDataAttribute,f as Playground,x as Read,w as ReadWhenEmpty,R as SeparatorOption,C as StringifyDataAttribute,D as Subscribe,N as ThemeMapArrayValues,B as ThemeMapStringValue,A as Write,ie as __namedExportsOrder,ue as default};
