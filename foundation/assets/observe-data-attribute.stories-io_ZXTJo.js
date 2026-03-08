import{j as n,d as m,w as B,s as p,r as u}from"./iframe-Sd4Xj9SC.js";import{d as f}from"./dedent-BuYMbVyj.js";import{o as y}from"./observe-data-attribute-ioQK7DCF.js";import{t as b}from"./theme-entry-D4S_RAMB.js";import{d as x}from"./data-attribute-theme-store-Buf9c4Ks.js";import{B as r}from"./button-BFgGKzfU.js";import{L as w}from"./log-panel-BuY-T_SW.js";import"./preload-helper-PPVm8Dsz.js";import"./observe-attribute-CZKLLp6I.js";import"./write-data-attribute-C1LlvwO1.js";import"./get-data-attribute-Bl9c_7h4.js";import"./get-attribute-BI4biMNS.js";import"./resolve-theme-map-value-CsrxdXA7.js";import"./findKey-D_Zca1Sl.js";import"./resolve-class-name-BWUmKjOI.js";const D=`import { observeAttributes } from './observe-attribute.ts'

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
`,{expect:o,userEvent:c}=__STORYBOOK_MODULE_TEST__,l={"test-value":"test-value"},T=x(l,{attributeName:"data-theme"}),S=x(l,{attributeName:"data-color-scheme"}),U={title:"attributes/observeDataAttributes",tags:["func","version:3.0"],parameters:m({description:{component:"Observes changes to `data-*` attributes on an element and calls corresponding handlers."}}),argTypes:{element:{control:!1}},render:()=>n.jsx(n.Fragment,{})},d={parameters:m({description:{story:"Observes a single data-* attribute change on the document root element."},source:{code:f`
                const unsubscribe = observeDataAttributes({
                    'data-theme': (value) => setLog((prev) => [...prev, \`data-theme: \${value}\`]),
                })
                // cleanup
                unsubscribe()
            `}}),decorators:[B(),p()],render:()=>{const[e,s]=u.useState([]);return u.useEffect(()=>y({"data-theme":t=>{s(a=>[...a,`data-theme: ${t}`])}}),[]),n.jsxs("div",{className:"font-sans",children:[n.jsxs("div",{className:"flex flex-wrap gap-2 mb-4",children:[n.jsx(r,{onPress:()=>T.write(b(l,"test-value")),children:"test-value"}),n.jsx(r,{onPress:()=>document.documentElement.removeAttribute("data-theme"),children:"Clear"})]}),n.jsx(w,{title:"Attribute Changes:",log:e})]})},play:async({canvas:e})=>{const s=e.getByRole("button",{name:"test-value"}),t=e.getByRole("button",{name:"Clear"});await c.click(s),await o(e.getByText("data-theme: test-value")).toBeInTheDocument(),await c.click(t),await o(e.getByText("data-theme: null")).toBeInTheDocument()}},i={parameters:m({description:{story:"Observes multiple data-* attributes simultaneously."},source:{code:f`
                const unsubscribe = observeDataAttributes({
                    'data-theme': (value) => setLog((prev) => [...prev, \`data-theme: \${value}\`]),
                    'data-color-scheme': (value) => setLog((prev) => [...prev, \`data-color-scheme: \${value}\`]),
                })
                // cleanup
                unsubscribe()
            `}}),decorators:[B(),p()],render:()=>{const[e,s]=u.useState([]);return u.useEffect(()=>y({"data-theme":t=>{s(a=>[...a,`data-theme: ${t}`])},"data-color-scheme":t=>{s(a=>[...a,`data-color-scheme: ${t}`])}}),[]),n.jsxs("div",{className:"font-sans",children:[n.jsxs("div",{className:"flex flex-wrap gap-2 mb-4",children:[n.jsx(r,{onPress:()=>T.write(b(l,"test-value")),children:"Set data-theme"}),n.jsx(r,{onPress:()=>document.documentElement.removeAttribute("data-theme"),children:"Clear data-theme"}),n.jsx(r,{onPress:()=>S.write(b(l,"test-value")),children:"Set data-color-scheme"}),n.jsx(r,{onPress:()=>document.documentElement.removeAttribute("data-color-scheme"),children:"Clear data-color-scheme"})]}),n.jsx(w,{title:"Attribute Changes:",log:e})]})},play:async({canvas:e,step:s})=>{await s("data-theme",async()=>{const t=e.getByRole("button",{name:"Set data-theme"}),a=e.getByRole("button",{name:"Clear data-theme"});await c.click(t),await o(e.getByText("data-theme: test-value")).toBeInTheDocument(),await c.click(a),await o(e.getByText("data-theme: null")).toBeInTheDocument()}),await s("data-color-scheme",async()=>{const t=e.getByRole("button",{name:"Set data-color-scheme"}),a=e.getByRole("button",{name:"Clear data-color-scheme"});await c.click(t),await o(e.getByText("data-color-scheme: test-value")).toBeInTheDocument(),await c.click(a),await o(e.getByText("data-color-scheme: null")).toBeInTheDocument()})}},h={parameters:m({description:{story:"Observes data-* attribute changes on a custom element instead of the document root."},source:{code:f`
                const unsubscribe = observeDataAttributes(
                    {
                        'data-theme': (value) => setLog((prev) => [...prev, \`data-theme: \${value}\`]),
                    },
                    customElementRef.current,
                )

                // cleanup
                unsubscribe()
            `}}),decorators:[B(),p()],render:()=>{const[e,s]=u.useState([]),t=u.useRef(null);return u.useEffect(()=>{if(t.current)return y({"data-theme":a=>{s(g=>[...g,`data-theme: ${a}`])}},t.current)},[t]),n.jsxs("div",{className:"font-sans",children:[n.jsxs("div",{className:"flex flex-wrap gap-2 mb-4",children:[n.jsx(r,{onPress:()=>{const a=t.current??document.documentElement;x(l,{attributeName:"data-theme",element:a}).write(b(l,"test-value"))},children:"test-value"}),n.jsx(r,{onPress:()=>{(t.current??document.documentElement).removeAttribute("data-theme")},children:"Clear"})]}),n.jsx("div",{ref:t,className:"p-4 border border-gray-300 mb-4",children:"Custom Element to observe"}),n.jsx(w,{title:"Attribute Changes:",log:e})]})},play:async({canvas:e})=>{const s=e.getByRole("button",{name:"test-value"}),t=e.getByRole("button",{name:"Clear"}),a=e.getByText("Custom Element to observe");await c.click(s),await o(e.getByText("data-theme: test-value")).toBeInTheDocument();const g=a.getAttribute("data-theme");await o(g).toBe("test-value"),await c.click(t),await o(e.getByText("data-theme: null")).toBeInTheDocument();const E=a.getAttribute("data-theme");await o(E).toBeNull()}},v={tags:["source"],parameters:m({source:{code:D}}),decorators:[p()]};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
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
}`,...d.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
}`,...i.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
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
}`,...h.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  tags: ['source'],
  parameters: defineDocsParam({
    source: {
      code
    }
  }),
  decorators: [showSource()]
}`,...v.parameters?.docs?.source}}};const F=["BasicUsage","MultipleAttributes","CustomElement","Source"];export{d as BasicUsage,h as CustomElement,i as MultipleAttributes,v as Source,F as __namedExportsOrder,U as default};
