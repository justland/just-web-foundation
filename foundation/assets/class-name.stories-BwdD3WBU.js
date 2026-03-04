import{j as t,d as u,w as n,s as o,r as i,S as h}from"./iframe-BfstSRl9.js";import{d as l}from"./dedent-BuYMbVyj.js";import{r as y,w as m,a as k,p as F,s as V}from"./write-class-name-DpbjNSsg.js";import{t as r}from"./theme-entry-D4S_RAMB.js";import{B as C}from"./button-CnRfsOuR.js";import{T as p}from"./theme-result-card-ZBE0ua8g.js";import{T as $}from"./theme-store-demo-rg07-YKB.js";import"./preload-helper-PPVm8Dsz.js";import"./observe-attribute-DJMrXwPX.js";import"./resolve-theme-map-value-CsrxdXA7.js";import"./findKey-D_Zca1Sl.js";import"./resolve-class-name-CvdOUndO.js";import"./append-id-Vsg144gU.js";const{expect:a,userEvent:D,waitFor:A}=__STORYBOOK_MODULE_TEST__,re={title:"theme/class-name",tags:["func","version:1.0"],parameters:u({description:{component:"Low-level functions for reading and writing theme via element class names: readClassName, writeClassName, subscribeClassName, parseClassName, stringifyClassName."}}),render:()=>t.jsx(t.Fragment,{})},s={current:"theme-current",next:"theme-next",grayscale:"theme-grayscale","high-contrast":"theme-high-contrast"};function K(e=document.documentElement){return{read:()=>y(s,{element:e}),write:d=>m(s,d,{element:e}),subscribe:d=>k(s,d,{element:e})}}const x={tags:["playground"],parameters:u({description:{story:"Interactive demo: readClassName, writeClassName, subscribeClassName used together."}}),decorators:[n(),o({source:l`
                const store = {
                  read: () => readClassName(themes, { element }),
                  write: (entry) => writeClassName(themes, entry, { element }),
                  subscribe: (handler) => subscribeClassName(themes, handler, { element })
                }
                <ThemeStoreDemo store={store} themes={themes} />
            `})],render:()=>{const e=K();return t.jsx($,{store:e,themes:s})},play:async({canvas:e})=>{await D.click(e.getByTestId("theme-store-demo-btn-write-grayscale")),await A(()=>a(e.getByTestId("theme-store-demo-observe")).toHaveTextContent("grayscale")),await a(e.getByTestId("theme-store-demo-observe")).toHaveTextContent("theme-grayscale")}},f={name:"readClassName",tags:["props"],parameters:u({description:{story:"readClassName(themes, { element }) reads the current theme from the element class names."}}),decorators:[n(),o({source:l`
                const result = readClassName(themes, { element })
            `})],loaders:[()=>(m(s,r(s,"grayscale")),{})],render:()=>{const e=y(s);return t.jsx(p,{title:"readClassName() result","data-testid":"store-read-result",result:e??{theme:"grayscale",value:s.grayscale}})},play:async({canvas:e})=>{await a(e.getByTestId("store-read-result")).toHaveTextContent("theme: grayscale"),await a(e.getByTestId("store-read-result")).toHaveTextContent("value: theme-grayscale")}},N={name:"readClassName: undefined when no theme",tags:["props"],parameters:u({description:{story:"When no theme class is present, readClassName returns undefined."}}),decorators:[n(),o({source:l`
                const result = readClassName(themes, { element })
                // undefined when no theme class
            `})],loaders:[()=>(typeof document<"u"&&(document.documentElement.className="other-class"),{})],render:()=>{const e=y(s);return t.jsx(p,{title:"readClassName() result","data-testid":"store-read-result",result:e!==void 0?e:{theme:void 0,value:void 0}})},play:async({canvas:e})=>{await a(e.getByTestId("store-read-result")).toHaveTextContent("(undefined)")}},w={name:"writeClassName",tags:["props"],parameters:u({description:{story:"writeClassName(themes, entry, { element }) applies the theme class to the element."}}),decorators:[n(),o({source:l`
                writeClassName(themes, themeEntry(themes, 'grayscale'), { element })
            `})],render:()=>{const[e,d]=i.useState(()=>y(s)?.theme??null);return t.jsxs("div",{className:"flex flex-col gap-4",children:[t.jsx("div",{className:"flex flex-wrap gap-2",children:Object.keys(s).map(c=>t.jsxs(C,{"data-testid":`write-${c}`,onPress:()=>{m(s,r(s,c)),d(c)},children:["write(",c,")"]},c))}),t.jsx(p,{title:"readClassName() after write","data-testid":"store-write-result",result:e?{theme:e,value:s[e]}:{theme:"current",value:s.current}})]})},play:async({canvas:e})=>{await D.click(e.getByTestId("write-grayscale")),await a(e.getByTestId("store-write-result")).toHaveTextContent("theme: grayscale"),await a(e.getByTestId("store-write-result")).toHaveTextContent("value: theme-grayscale")}},T={name:"subscribeClassName",tags:["props"],parameters:u({description:{story:"subscribeClassName(themes, handler, { element }) calls the handler when the class attribute changes (no initial notify)."}}),decorators:[n(),o({source:l`
                subscribeClassName(themes, (themeResult) => {
                    console.log('Theme:', themeResult?.theme, themeResult?.value)
                }, { element })
            `})],render:()=>{const[e,d]=i.useState(void 0);i.useEffect(()=>k(s,d),[]);const c=e?.theme??"current";return t.jsxs("div",{className:"flex flex-col gap-4",children:[t.jsx("div",{className:"flex flex-wrap gap-2",children:Object.keys(s).map(g=>t.jsxs(C,{"data-testid":`write-${g}`,onPress:()=>m(s,r(s,g)),children:["write(",g,")"]},g))}),t.jsx(p,{title:"subscribeClassName() receives","data-testid":"store-subscribe-result",result:r(s,c)})]})},play:async({canvas:e})=>{await D.click(e.getByTestId("write-high-contrast")),await A(()=>a(e.getByTestId("store-subscribe-result")).toHaveTextContent("high-contrast"))}},b={name:"parseClassName",tags:["props"],parameters:u({description:{story:"Pure function: parseClassName(themes, className) parses a class name string into a ThemeEntry."}}),decorators:[n(),o({source:l`
                const result = parseClassName(themes, 'theme-current other-class')
                // { theme: 'current', value: 'theme-current' }
            `})],render:()=>{const e=F(s,"theme-current other-class");return t.jsxs("div",{className:"flex flex-col gap-4",children:[t.jsx(h,{title:"Input",appearance:"output",children:t.jsx("code",{"data-testid":"parse-input",children:"theme-current other-class"})}),t.jsx(p,{title:"parseClassName() result","data-testid":"parse-result",result:e??{theme:"current",value:s.current}})]})},play:async({canvas:e})=>{await a(e.getByTestId("parse-result")).toHaveTextContent("theme: current"),await a(e.getByTestId("parse-result")).toHaveTextContent("value: theme-current")}},S={name:"stringifyClassName",tags:["props"],parameters:u({description:{story:"Pure function: stringifyClassName(themes, existing, entry) produces class attribute value. Removes theme classes from existing, adds entry classes."}}),decorators:[n(),o({source:l`
                const result = stringifyClassName(themes, 'app-layout theme-current', themeEntry(themes, 'grayscale'))
                // 'app-layout theme-grayscale'
            `})],render:()=>{const e=V(s,"app-layout theme-current",r(s,"grayscale"));return t.jsxs("div",{className:"flex flex-col gap-4",children:[t.jsx(h,{title:"Input",appearance:"output",children:t.jsx("code",{"data-testid":"stringify-input",children:"themes, 'app-layout theme-current', themeEntry(themes, 'grayscale')"})}),t.jsx(h,{title:"stringifyClassName() result",appearance:"output",children:t.jsx("code",{"data-testid":"stringify-result",children:e})})]})},play:async({canvas:e})=>{await a(e.getByTestId("stringify-result")).toHaveTextContent("app-layout"),await a(e.getByTestId("stringify-result")).toHaveTextContent("theme-grayscale")}},E={name:"element: html (default)",tags:["use-case","props"],decorators:[n({content:t.jsxs("p",{children:["Reads from ",t.jsx("code",{children:"document.documentElement"})," (html) by default when"," ",t.jsx("code",{children:"options.element"})," is not specified."]})}),o({source:l`
                readClassName(themes)
                writeClassName(themes, themeEntry(themes, 'current'))
            `})],loaders:[()=>(m(s,r(s,"current")),{})],render:()=>{const e=y(s);return t.jsxs("div",{className:"flex flex-col gap-4",children:[t.jsx(h,{title:"html.className",appearance:"output",children:t.jsx("code",{children:typeof document<"u"?document.documentElement.className:""})}),t.jsx(p,{title:"readClassName() result","data-testid":"store-read-result",result:e??{theme:"current",value:s.current}})]})},play:async({canvas:e})=>{await a(e.getByTestId("store-read-result")).toHaveTextContent("theme: current"),await a(e.getByTestId("store-read-result")).toHaveTextContent("value: theme-current")}},B={name:"element: body",tags:["use-case","props"],decorators:[n({content:t.jsxs("p",{children:["Reads from ",t.jsx("code",{children:"document.body"})," when passing it in ",t.jsx("code",{children:"options.element"}),"."]})}),o({source:l`
                readClassName(themes, { element: document.body })
                writeClassName(themes, themeEntry(themes, 'high-contrast'), { element: document.body })
            `})],loaders:[()=>(m(s,r(s,"high-contrast"),{element:document.body}),{})],render:()=>{const e=y(s,{element:document.body});return t.jsxs("div",{className:"flex flex-col gap-4",children:[t.jsx(h,{title:"body.className",appearance:"output",children:t.jsx("code",{children:typeof document<"u"?document.body.className:""})}),t.jsx(p,{title:"readClassName() result","data-testid":"store-read-result",result:e??{theme:"high-contrast",value:s["high-contrast"]}})]})},play:async({canvas:e})=>{await a(e.getByTestId("store-read-result")).toHaveTextContent("theme: high-contrast"),await a(e.getByTestId("store-read-result")).toHaveTextContent("value: theme-high-contrast")}},j={name:"element: custom element",tags:["props"],decorators:[n({content:t.jsxs("p",{children:["Theme is applied to a custom element by passing it in ",t.jsx("code",{children:"options.element"}),"."]})}),o({source:l`
                readClassName(themes, { element: targetElement })
                writeClassName(themes, themeEntry(themes, 'grayscale'), { element: targetElement })
            `})],render:()=>{const e=i.useRef(null),[d,c]=i.useState(!1);i.useLayoutEffect(()=>{const v=e.current;v&&(m(s,r(s,"grayscale"),{element:v}),c(!0))},[]);const g=e.current?y(s,{element:e.current}):null;return t.jsxs("div",{className:"flex flex-col gap-2",children:[t.jsx("div",{ref:e,id:"target","data-testid":"target-element",className:"rounded border border-gray-300 p-4",children:"Target element (theme class is observed here)"}),d?t.jsxs(t.Fragment,{children:[t.jsx(h,{title:"target.className",appearance:"output",children:t.jsx("code",{children:e.current?.className})}),t.jsx(p,{title:"readClassName() result","data-testid":"store-read-result",result:g??{theme:"grayscale",value:s.grayscale}})]}):t.jsx("p",{children:"Loading…"})]})},play:async({canvas:e})=>{await a(e.getByTestId("store-read-result")).toHaveTextContent("theme: grayscale"),await a(e.getByTestId("store-read-result")).toHaveTextContent("value: theme-grayscale")}},I={name:"themes: string value",tags:["use-case","props"],parameters:u({description:{story:"themes values can be a single string per theme."}}),decorators:[n({content:t.jsx("p",{children:"Each theme maps to one string value (one class name)."})}),o({source:l`
                const themes = {
                    current: 'theme-current',
                    grayscale: 'theme-grayscale',
                    'high-contrast': 'theme-high-contrast'
                } as const

                readClassName(themes)
            `})],loaders:[()=>(m(s,r(s,"current")),{})],render:()=>{const e=y(s);return t.jsxs("div",{className:"flex flex-col gap-4",children:[t.jsx(h,{title:"html.className",appearance:"output",children:t.jsx("code",{children:typeof document<"u"?document.documentElement.className:""})}),t.jsx(p,{title:"readClassName() result","data-testid":"store-read-result",result:e??{theme:"current",value:s.current}})]})},play:async({canvas:e})=>{await a(e.getByTestId("store-read-result")).toHaveTextContent("theme: current"),await a(e.getByTestId("store-read-result")).toHaveTextContent("value: theme-current")}},H={current:"theme-current",grayscale:["theme-grayscale","app:bg-gray-100"],"high-contrast":"theme-high-contrast"},R={name:"themes: array values",tags:["use-case","props"],parameters:u({description:{story:"themes values can be string[] for multiple CSS classes. All classes are applied to the element."}}),decorators:[n({content:t.jsxs("p",{children:["Each theme can map to multiple class names. Setting ",t.jsx("code",{children:"grayscale"})," adds both"," ",t.jsx("code",{children:"theme-grayscale"})," and ",t.jsx("code",{children:"app:bg-gray-100"})," to the element."]})}),o({source:l`
                const themes = {
                    current: 'theme-current',
                    grayscale: ['theme-grayscale', 'app:bg-gray-100'],
                    'high-contrast': 'theme-high-contrast'
                } as const

                readClassName(themes)
                writeClassName(themes, themeEntry(themes, 'grayscale'))
            `})],loaders:[()=>(m(H,r(H,"grayscale")),{})],render:()=>{const e=y(H);return t.jsxs("div",{className:"flex flex-col gap-4",children:[t.jsx(h,{title:"html.className",appearance:"output",children:t.jsx("code",{children:typeof document<"u"?document.documentElement.className:""})}),t.jsx(p,{title:"readClassName() result","data-testid":"store-read-result",result:e??{theme:"grayscale",value:H.grayscale}})]})},play:async({canvas:e})=>{await a(e.getByTestId("store-read-result")).toHaveTextContent("theme: grayscale"),await a(e.getByTestId("store-read-result")).toHaveTextContent("value: [theme-grayscale, app:bg-gray-100]")}},P={name:"subscribeClassName: only when themeEntry changes",tags:["props"],parameters:u({description:{story:"The handler is only invoked when the resolved themeEntry changes. Adding non-theme classes does not trigger the handler."}}),decorators:[n(),o({source:l`
                subscribeClassName(themes, (entry) => {
                    invocationCount++
                    setObserved(entry)
                }, { element: targetElement })
                // Adding element.classList.add('app-other') does NOT invoke handler
                // writeClassName(themes, themeEntry(themes, 'grayscale')) DOES invoke when theme changes
            `})],render:()=>{const e=i.useRef(null),[d,c]=i.useState(0),[g,v]=i.useState(null);i.useLayoutEffect(()=>{const O=e.current;if(!O)return;const M=k(s,W=>{c(_=>_+1),v(W)},{element:O});return m(s,r(s,"grayscale"),{element:O}),M},[]);const L=g?.theme??"(none)";return t.jsxs("div",{className:"flex flex-col gap-4","data-testid":"subscribe-only-when-theme-changes",children:[t.jsx("div",{ref:e,"data-testid":"target-element",className:"rounded border border-gray-300 p-2",children:"Target element"}),t.jsx(h,{title:"Handler invocations",appearance:"output",children:t.jsx("pre",{"data-testid":"invocation-count",className:"font-mono",children:d})}),t.jsx(h,{title:"Observed theme",appearance:"output",children:t.jsx("pre",{"data-testid":"observed-theme",className:"font-mono",children:L})}),t.jsxs("div",{className:"flex flex-wrap gap-2",children:[t.jsx(C,{"data-testid":"add-non-theme-class",onPress:()=>e.current?.classList.add("app-other"),children:"Add non-theme class"}),t.jsx(C,{"data-testid":"change-to-high-contrast",onPress:()=>m(s,r(s,"high-contrast"),{element:e.current}),children:"Change to high-contrast"}),t.jsx(C,{"data-testid":"change-to-current",onPress:()=>m(s,r(s,"current"),{element:e.current}),children:"Change to current"})]})]})},play:async({canvas:e})=>{await a(e.getByTestId("invocation-count")).toHaveTextContent("1"),await a(e.getByTestId("observed-theme")).toHaveTextContent("grayscale"),await D.click(e.getByTestId("change-to-high-contrast")),await A(()=>a(e.getByTestId("invocation-count")).toHaveTextContent("2")),await a(e.getByTestId("observed-theme")).toHaveTextContent("high-contrast")}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
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
}`,...x.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
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
}`,...f.parameters?.docs?.source}}};N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
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
}`,...N.parameters?.docs?.source}}};w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
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
}`,...w.parameters?.docs?.source}}};T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
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
}`,...T.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
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
}`,...b.parameters?.docs?.source}}};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
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
}`,...S.parameters?.docs?.source}}};E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
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
}`,...E.parameters?.docs?.source}}};B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
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
}`,...B.parameters?.docs?.source}}};j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
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
}`,...j.parameters?.docs?.source}}};I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
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
}`,...I.parameters?.docs?.source}}};R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`{
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
}`,...R.parameters?.docs?.source}}};P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
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
}`,...P.parameters?.docs?.source}}};const ne=["Playground","Read","ReadWhenEmpty","Write","Subscribe","ParseClassName","StringifyClassName","ElementDefault","ElementBody","ElementCustom","ThemeMapStringValue","ThemeMapArrayValues","SubscribeOnlyWhenThemeChanges"];export{B as ElementBody,j as ElementCustom,E as ElementDefault,b as ParseClassName,x as Playground,f as Read,N as ReadWhenEmpty,S as StringifyClassName,T as Subscribe,P as SubscribeOnlyWhenThemeChanges,R as ThemeMapArrayValues,I as ThemeMapStringValue,w as Write,ne as __namedExportsOrder,re as default};
