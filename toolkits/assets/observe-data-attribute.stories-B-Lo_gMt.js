import{j as a,d as i,w as B,s as y,r as u}from"./iframe-iPCJU1fP.js";import{o as w}from"./observe-data-attribute-ioQK7DCF.js";import{t as d}from"./theme-entry-D4S_RAMB.js";import{d as x}from"./data-attribute-theme-store-Buf9c4Ks.js";import{d as T}from"./dedent-BuYMbVyj.js";import{B as c}from"./button-DDGFppnV.js";import{L as f}from"./log-panel-zHmwbDZY.js";import"./preload-helper-PPVm8Dsz.js";import"./observe-attribute-CZKLLp6I.js";import"./write-data-attribute-C1LlvwO1.js";import"./get-data-attribute-Bl9c_7h4.js";import"./get-attribute-BI4biMNS.js";import"./resolve-theme-map-value-CsrxdXA7.js";import"./findKey-D_Zca1Sl.js";import"./resolve-class-name-BQzT_ya6.js";const A=`import { observeAttributes } from './observe-attribute.ts'

/**
 * Observes changes to \`data-*\` attributes on an element and calls corresponding handlers.
 *
 * @param handlers - An object mapping \`data-*\` attribute names to handler functions.
 * @param element - The element to observe (accepts null e.g. from refs). Defaults to \`document.documentElement\`
 * @returns An unsubscribe function to stop observing. Returns a no-op function in SSR environments.
 *
 * @example
 * \`\`\`ts
 * const unsubscribe = observeDataAttributes({
 *   'data-theme': (value) => console.log(\`Theme changed to: \${value}\`),
 *   'data-mode': (value) => console.log(\`Mode changed to: \${value}\`)
 * });
 *
 * // Later, to stop observing:
 * unsubscribe();
 * \`\`\`
 */
export function observeDataAttributes<T extends string, K extends \`data-\${string}\`>(
	handlers: Record<K, (value: T | null) => void>,
	element?: Element | null | undefined
) {
	return observeAttributes(handlers, element)
}
`,{expect:o,userEvent:r}=__STORYBOOK_MODULE_TEST__,m={"test-value":"test-value"},E=x(m,{attributeName:"data-theme"}),D=x(m,{attributeName:"data-color-scheme"}),K={title:"attributes/observeDataAttributes",tags:["func","version:3.0"],parameters:i({description:{component:"Observes changes to `data-*` attributes on an element and calls corresponding handlers."}}),argTypes:{element:{control:!1}},render:()=>a.jsx(a.Fragment,{})},h={parameters:i({description:{story:"Observes a single data-* attribute change on the document root element."},source:{code:T`
                const unsubscribe = observeDataAttributes({
                    'data-theme': (value) => setLog((prev) => [...prev, \`data-theme: \${value}\`]),
                })
                // cleanup
                unsubscribe()
            `}}),decorators:[B(),y()],render:()=>{const[e,s]=u.useState([]);return u.useEffect(()=>w({"data-theme":t=>{s(n=>[...n,`data-theme: ${t}`])}}),[]),a.jsxs("div",{className:"font-sans",children:[a.jsxs("div",{className:"flex flex-wrap gap-2 mb-4",children:[a.jsx(c,{onPress:()=>E.write(d(m,"test-value")),children:"test-value"}),a.jsx(c,{onPress:()=>document.documentElement.removeAttribute("data-theme"),children:"Clear"})]}),a.jsx(f,{title:"Attribute Changes:",log:e})]})},play:async({canvas:e})=>{const s=e.getByRole("button",{name:"test-value"}),t=e.getByRole("button",{name:"Clear"});await r.click(s),await o(e.getByText("data-theme: test-value")).toBeInTheDocument(),await r.click(t),await o(e.getByText("data-theme: null")).toBeInTheDocument()}},v={parameters:i({description:{story:"Observes multiple data-* attributes simultaneously."},source:{code:T`
                const unsubscribe = observeDataAttributes({
                    'data-theme': (value) => setLog((prev) => [...prev, \`data-theme: \${value}\`]),
                    'data-color-scheme': (value) => setLog((prev) => [...prev, \`data-color-scheme: \${value}\`]),
                })
                // cleanup
                unsubscribe()
            `}}),decorators:[B(),y()],render:()=>{const[e,s]=u.useState([]);return u.useEffect(()=>w({"data-theme":t=>{s(n=>[...n,`data-theme: ${t}`])},"data-color-scheme":t=>{s(n=>[...n,`data-color-scheme: ${t}`])}}),[]),a.jsxs("div",{className:"font-sans",children:[a.jsxs("div",{className:"flex flex-wrap gap-2 mb-4",children:[a.jsx(c,{onPress:()=>E.write(d(m,"test-value")),children:"Set data-theme"}),a.jsx(c,{onPress:()=>document.documentElement.removeAttribute("data-theme"),children:"Clear data-theme"}),a.jsx(c,{onPress:()=>D.write(d(m,"test-value")),children:"Set data-color-scheme"}),a.jsx(c,{onPress:()=>document.documentElement.removeAttribute("data-color-scheme"),children:"Clear data-color-scheme"})]}),a.jsx(f,{title:"Attribute Changes:",log:e})]})},play:async({canvas:e,step:s})=>{await s("data-theme",async()=>{const t=e.getByRole("button",{name:"Set data-theme"}),n=e.getByRole("button",{name:"Clear data-theme"});await r.click(t),await o(e.getByText("data-theme: test-value")).toBeInTheDocument(),await r.click(n),await o(e.getByText("data-theme: null")).toBeInTheDocument()}),await s("data-color-scheme",async()=>{const t=e.getByRole("button",{name:"Set data-color-scheme"}),n=e.getByRole("button",{name:"Clear data-color-scheme"});await r.click(t),await o(e.getByText("data-color-scheme: test-value")).toBeInTheDocument(),await r.click(n),await o(e.getByText("data-color-scheme: null")).toBeInTheDocument()})}},g={parameters:i({description:{story:"Observes data-* attribute changes on a custom element instead of the document root."},source:{code:T`
                const unsubscribe = observeDataAttributes(
                    {
                        'data-theme': (value) => setLog((prev) => [...prev, \`data-theme: \${value}\`]),
                    },
                    customElementRef.current,
                )

                // cleanup
                unsubscribe()
            `}}),decorators:[B(),y()],render:()=>{const[e,s]=u.useState([]),t=u.useRef(null);return u.useEffect(()=>{if(t.current)return w({"data-theme":n=>{s(l=>[...l,`data-theme: ${n}`])}},t.current)},[t]),a.jsxs("div",{className:"font-sans",children:[a.jsxs("div",{className:"flex flex-wrap gap-2 mb-4",children:[a.jsx(c,{onPress:()=>{const n=t.current??document.documentElement;x(m,{attributeName:"data-theme",element:n}).write(d(m,"test-value"))},children:"test-value"}),a.jsx(c,{onPress:()=>{(t.current??document.documentElement).removeAttribute("data-theme")},children:"Clear"})]}),a.jsx("div",{ref:t,className:"p-4 border border-gray-300 mb-4",children:"Custom Element to observe"}),a.jsx(f,{title:"Attribute Changes:",log:e})]})},play:async({canvas:e})=>{const s=e.getByRole("button",{name:"test-value"}),t=e.getByRole("button",{name:"Clear"}),n=e.getByText("Custom Element to observe");await r.click(s),await o(e.getByText("data-theme: test-value")).toBeInTheDocument();const l=n.getAttribute("data-theme");await o(l).toBe("test-value"),await r.click(t),await o(e.getByText("data-theme: null")).toBeInTheDocument();const S=n.getAttribute("data-theme");await o(S).toBeNull()}},b={parameters:i({description:{story:"Verifies that the callback is fired only once per attribute change, not multiple times."}}),decorators:[B()],render:()=>{const[e,s]=u.useState([]);return u.useEffect(()=>w({"data-theme":t=>{s(n=>[...n,`data-theme: ${t}`])}}),[]),a.jsxs("div",{className:"font-sans",children:[a.jsxs("div",{className:"flex flex-wrap gap-2 mb-4",children:[a.jsx(c,{onPress:()=>E.write(d(m,"test-value")),children:"Set test-value"}),a.jsx(c,{onPress:()=>document.documentElement.removeAttribute("data-theme"),children:"Clear"})]}),a.jsx(f,{title:"Attribute Changes:",log:e})]})},play:async({canvas:e,step:s})=>{const t=e.getByRole("button",{name:"Set test-value"}),n=e.getByRole("button",{name:"Clear"});await s("callback fires once when value changes",async()=>{await r.click(t),await o(e.getByText("data-theme: test-value")).toBeInTheDocument();const l=e.getAllByText(/^data-theme:/);await o(l).toHaveLength(1)}),await s("callback fires once when value is cleared",async()=>{await r.click(n),await o(e.getByText("data-theme: null")).toBeInTheDocument();const l=e.getAllByText(/^data-theme:/);await o(l).toHaveLength(2)}),await s("callback fires once when value is set again",async()=>{await r.click(t);const l=e.getAllByText(/^data-theme:/);await o(l).toHaveLength(3)})}},p={tags:["source"],parameters:i({source:{code:A}}),decorators:[y()]};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  parameters: defineDocsParam({
    description: {
      story: 'Observes a single data-* attribute change on the document root element.'
    },
    source: {
      code: dedent\`
                const unsubscribe = observeDataAttributes({
                    'data-theme': (value) => setLog((prev) => [...prev, \\\`data-theme: \\\${value}\\\`]),
                })
                // cleanup
                unsubscribe()
            \`
    }
  }),
  decorators: [withStoryCard(), showSource()],
  render: () => {
    const [log, setLog] = useState<string[]>([]);
    useEffect(() => {
      return observeDataAttributes({
        'data-theme': value => {
          setLog(prev => [...prev, \`data-theme: \${value}\`]);
        }
      });
    }, []);
    return <div className="font-sans">
                <div className="flex flex-wrap gap-2 mb-4">
                    <Button onPress={() => testValueDataThemeStore.write(themeEntry(testValueThemes, 'test-value'))}>
                        test-value
                    </Button>
                    <Button onPress={() => document.documentElement.removeAttribute('data-theme')}>
                        Clear
                    </Button>
                </div>
                <LogPanel title="Attribute Changes:" log={log} />
            </div>;
  },
  play: async ({
    canvas
  }) => {
    const setBtn = canvas.getByRole('button', {
      name: 'test-value'
    });
    const clearBtn = canvas.getByRole('button', {
      name: 'Clear'
    });
    await userEvent.click(setBtn);
    await expect(canvas.getByText('data-theme: test-value')).toBeInTheDocument();
    await userEvent.click(clearBtn);
    await expect(canvas.getByText('data-theme: null')).toBeInTheDocument();
  }
}`,...h.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  parameters: defineDocsParam({
    description: {
      story: 'Observes multiple data-* attributes simultaneously.'
    },
    source: {
      code: dedent\`
                const unsubscribe = observeDataAttributes({
                    'data-theme': (value) => setLog((prev) => [...prev, \\\`data-theme: \\\${value}\\\`]),
                    'data-color-scheme': (value) => setLog((prev) => [...prev, \\\`data-color-scheme: \\\${value}\\\`]),
                })
                // cleanup
                unsubscribe()
            \`
    }
  }),
  decorators: [withStoryCard(), showSource()],
  render: () => {
    const [log, setLog] = useState<string[]>([]);
    useEffect(() => {
      return observeDataAttributes({
        'data-theme': value => {
          setLog(prev => [...prev, \`data-theme: \${value}\`]);
        },
        'data-color-scheme': value => {
          setLog(prev => [...prev, \`data-color-scheme: \${value}\`]);
        }
      });
    }, []);
    return <div className="font-sans">
                <div className="flex flex-wrap gap-2 mb-4">
                    <Button onPress={() => testValueDataThemeStore.write(themeEntry(testValueThemes, 'test-value'))}>
                        Set data-theme
                    </Button>
                    <Button onPress={() => document.documentElement.removeAttribute('data-theme')}>
                        Clear data-theme
                    </Button>
                    <Button onPress={() => testValueDataColorSchemeStore.write(themeEntry(testValueThemes, 'test-value'))}>
                        Set data-color-scheme
                    </Button>
                    <Button onPress={() => document.documentElement.removeAttribute('data-color-scheme')}>
                        Clear data-color-scheme
                    </Button>
                </div>
                <LogPanel title="Attribute Changes:" log={log} />
            </div>;
  },
  play: async ({
    canvas,
    step
  }) => {
    await step('data-theme', async () => {
      const setBtn = canvas.getByRole('button', {
        name: 'Set data-theme'
      });
      const clearBtn = canvas.getByRole('button', {
        name: 'Clear data-theme'
      });
      await userEvent.click(setBtn);
      await expect(canvas.getByText('data-theme: test-value')).toBeInTheDocument();
      await userEvent.click(clearBtn);
      await expect(canvas.getByText('data-theme: null')).toBeInTheDocument();
    });
    await step('data-color-scheme', async () => {
      const setBtn = canvas.getByRole('button', {
        name: 'Set data-color-scheme'
      });
      const clearBtn = canvas.getByRole('button', {
        name: 'Clear data-color-scheme'
      });
      await userEvent.click(setBtn);
      await expect(canvas.getByText('data-color-scheme: test-value')).toBeInTheDocument();
      await userEvent.click(clearBtn);
      await expect(canvas.getByText('data-color-scheme: null')).toBeInTheDocument();
    });
  }
}`,...v.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  parameters: defineDocsParam({
    description: {
      story: 'Observes data-* attribute changes on a custom element instead of the document root.'
    },
    source: {
      code: dedent\`
                const unsubscribe = observeDataAttributes(
                    {
                        'data-theme': (value) => setLog((prev) => [...prev, \\\`data-theme: \\\${value}\\\`]),
                    },
                    customElementRef.current,
                )

                // cleanup
                unsubscribe()
            \`
    }
  }),
  decorators: [withStoryCard(), showSource()],
  render: () => {
    const [log, setLog] = useState<string[]>([]);
    const customElementRef = useRef<HTMLDivElement>(null);
    useEffect(() => {
      if (!customElementRef.current) return;
      return observeDataAttributes({
        'data-theme': value => {
          setLog(prev => [...prev, \`data-theme: \${value}\`]);
        }
      }, customElementRef.current);
    }, [customElementRef]);
    return <div className="font-sans">
                <div className="flex flex-wrap gap-2 mb-4">
                    <Button onPress={() => {
          const el = customElementRef.current ?? document.documentElement;
          dataAttributeThemeStore(testValueThemes, {
            attributeName: 'data-theme',
            element: el
          }).write(themeEntry(testValueThemes, 'test-value'));
        }}>
                        test-value
                    </Button>
                    <Button onPress={() => {
          ;
          (customElementRef.current ?? document.documentElement).removeAttribute('data-theme');
        }}>
                        Clear
                    </Button>
                </div>
                <div ref={customElementRef} className="p-4 border border-gray-300 mb-4">
                    Custom Element to observe
                </div>
                <LogPanel title="Attribute Changes:" log={log} />
            </div>;
  },
  play: async ({
    canvas
  }) => {
    const setBtn = canvas.getByRole('button', {
      name: 'test-value'
    });
    const clearBtn = canvas.getByRole('button', {
      name: 'Clear'
    });
    const element = canvas.getByText('Custom Element to observe');
    await userEvent.click(setBtn);
    await expect(canvas.getByText('data-theme: test-value')).toBeInTheDocument();
    const dataTheme = element.getAttribute('data-theme');
    await expect(dataTheme).toBe('test-value');
    await userEvent.click(clearBtn);
    await expect(canvas.getByText('data-theme: null')).toBeInTheDocument();
    const dataTheme2 = element.getAttribute('data-theme');
    await expect(dataTheme2).toBeNull();
  }
}`,...g.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  parameters: defineDocsParam({
    description: {
      story: 'Verifies that the callback is fired only once per attribute change, not multiple times.'
    }
  }),
  decorators: [withStoryCard()],
  render: () => {
    const [log, setLog] = useState<string[]>([]);
    useEffect(() => {
      return observeDataAttributes({
        'data-theme': value => {
          setLog(prev => [...prev, \`data-theme: \${value}\`]);
        }
      });
    }, []);
    return <div className="font-sans">
                <div className="flex flex-wrap gap-2 mb-4">
                    <Button onPress={() => testValueDataThemeStore.write(themeEntry(testValueThemes, 'test-value'))}>
                        Set test-value
                    </Button>
                    <Button onPress={() => document.documentElement.removeAttribute('data-theme')}>
                        Clear
                    </Button>
                </div>
                <LogPanel title="Attribute Changes:" log={log} />
            </div>;
  },
  play: async ({
    canvas,
    step
  }) => {
    const setBtn = canvas.getByRole('button', {
      name: 'Set test-value'
    });
    const clearBtn = canvas.getByRole('button', {
      name: 'Clear'
    });
    await step('callback fires once when value changes', async () => {
      await userEvent.click(setBtn);
      await expect(canvas.getByText('data-theme: test-value')).toBeInTheDocument();
      const logItems = canvas.getAllByText(/^data-theme:/);
      await expect(logItems).toHaveLength(1);
    });
    await step('callback fires once when value is cleared', async () => {
      await userEvent.click(clearBtn);
      await expect(canvas.getByText('data-theme: null')).toBeInTheDocument();
      const logItems = canvas.getAllByText(/^data-theme:/);
      await expect(logItems).toHaveLength(2);
    });
    await step('callback fires once when value is set again', async () => {
      await userEvent.click(setBtn);
      const logItems = canvas.getAllByText(/^data-theme:/);
      await expect(logItems).toHaveLength(3);
    });
  }
}`,...b.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  tags: ['source'],
  parameters: defineDocsParam({
    source: {
      code
    }
  }),
  decorators: [showSource()]
}`,...p.parameters?.docs?.source}}};const U=["BasicUsage","MultipleAttributes","CustomElement","CallbackFiredOncePerChange","Source"];export{h as BasicUsage,b as CallbackFiredOncePerChange,g as CustomElement,v as MultipleAttributes,p as Source,U as __namedExportsOrder,K as default};
