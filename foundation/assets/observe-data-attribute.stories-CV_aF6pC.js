import{j as t,d as u,w as x,s as g,r as l}from"./iframe-Pea2t46H.js";import{d as y}from"./dedent-BuYMbVyj.js";import{o as f}from"./data-attribute-theme-store-Zjn-v2eS.js";import{s as b}from"./set-theme-by-data-attribute-BjtqI3I8.js";import{B as c}from"./button-DdV3GaD2.js";import{L as T}from"./log-panel-BIFxpnVs.js";import"./preload-helper-PPVm8Dsz.js";import"./get-data-attribute-Bl9c_7h4.js";import"./get-attribute-BI4biMNS.js";import"./observe-attribute-DJMrXwPX.js";import"./findKey-D_Zca1Sl.js";import"./resolve-class-name-CdAgLf4m.js";const w=`import { observeAttributes } from './observe-attribute.ts'

/**
 * Observes changes to \`data-*\` attributes on an element and calls corresponding handlers.
 *
 * @param options - Configuration options
 * @param options.handlers - An object mapping \`data-*\` attribute names to handler functions.
 * @param options.element - The element to observe. Defaults to \`document.documentElement\`
 * @returns {MutationObserver} The observer instance, which can be used to disconnect the observer
 *
 * @example
 * \`\`\`ts
 * const observer = observeDataAttributes({
 *   handlers: {
 *     'data-theme': (value) => console.log(\`Theme changed to: \${value}\`),
 *     'data-mode': (value) => console.log(\`Mode changed to: \${value}\`)
 *   }
 * });
 *
 * // Later, to stop observing:
 * observer.disconnect();
 * \`\`\`
 */
export function observeDataAttributes<T extends string, K extends \`data-\${string}\`>(
	handlers: Record<K, (value: T | null) => void>,
	element?: Element | null | undefined,
) {
	return observeAttributes(handlers, element)
}
`,{expect:o,userEvent:m}=__STORYBOOK_MODULE_TEST__,p={"test-value":"test-value"},I={title:"attributes/observeDataAttributes",tags:["func","version:next"],parameters:u({description:{component:"Observes changes to `data-*` attributes on an element and calls corresponding handlers."}}),argTypes:{element:{control:!1}},render:()=>t.jsx(t.Fragment,{})},d={parameters:u({description:{story:"Observes a single data-* attribute change on the document root element."},source:{code:y`
                const observer = observeDataAttributes({
                    'data-theme': (value) => setLog((prev) => [...prev, \`data-theme: \${value}\`]),
                })
                // cleanup
                observer.disconnect()
            `}}),decorators:[x(),g()],render:()=>{const[e,s]=l.useState([]);return l.useEffect(()=>{const n=f({"data-theme":a=>{s(r=>[...r,`data-theme: ${a}`])}});return()=>n.disconnect()},[]),t.jsxs("div",{className:"font-sans",children:[t.jsxs("div",{className:"flex flex-wrap gap-2 mb-4",children:[t.jsx(c,{onPress:()=>b({attributeName:"data-theme",themes:p,theme:"test-value"}),children:"test-value"}),t.jsx(c,{onPress:()=>document.documentElement.removeAttribute("data-theme"),children:"Clear"})]}),t.jsx(T,{title:"Attribute Changes:",log:e})]})},play:async({canvas:e})=>{const s=e.getByRole("button",{name:"test-value"}),n=e.getByRole("button",{name:"Clear"});await m.click(s),await o(e.getByText("data-theme: test-value")).toBeInTheDocument(),await m.click(n),await o(e.getByText("data-theme: null")).toBeInTheDocument()}},i={parameters:u({description:{story:"Observes multiple data-* attributes simultaneously."},source:{code:y`
                const observer = observeDataAttributes({
                    'data-theme': (value) => setLog((prev) => [...prev, \`data-theme: \${value}\`]),
                    'data-color-scheme': (value) => setLog((prev) => [...prev, \`data-color-scheme: \${value}\`]),
                })
                // cleanup
                observer.disconnect()
            `}}),decorators:[x(),g()],render:()=>{const[e,s]=l.useState([]);return l.useEffect(()=>{const n=f({"data-theme":a=>{s(r=>[...r,`data-theme: ${a}`])},"data-color-scheme":a=>{s(r=>[...r,`data-color-scheme: ${a}`])}});return()=>n.disconnect()},[]),t.jsxs("div",{className:"font-sans",children:[t.jsxs("div",{className:"flex flex-wrap gap-2 mb-4",children:[t.jsx(c,{onPress:()=>b({attributeName:"data-theme",themes:p,theme:"test-value"}),children:"Set data-theme"}),t.jsx(c,{onPress:()=>document.documentElement.removeAttribute("data-theme"),children:"Clear data-theme"}),t.jsx(c,{onPress:()=>b({attributeName:"data-color-scheme",themes:p,theme:"test-value"}),children:"Set data-color-scheme"}),t.jsx(c,{onPress:()=>document.documentElement.removeAttribute("data-color-scheme"),children:"Clear data-color-scheme"})]}),t.jsx(T,{title:"Attribute Changes:",log:e})]})},play:async({canvas:e,step:s})=>{await s("data-theme",async()=>{const n=e.getByRole("button",{name:"Set data-theme"}),a=e.getByRole("button",{name:"Clear data-theme"});await m.click(n),await o(e.getByText("data-theme: test-value")).toBeInTheDocument(),await m.click(a),await o(e.getByText("data-theme: null")).toBeInTheDocument()}),await s("data-color-scheme",async()=>{const n=e.getByRole("button",{name:"Set data-color-scheme"}),a=e.getByRole("button",{name:"Clear data-color-scheme"});await m.click(n),await o(e.getByText("data-color-scheme: test-value")).toBeInTheDocument(),await m.click(a),await o(e.getByText("data-color-scheme: null")).toBeInTheDocument()})}},h={parameters:u({description:{story:"Observes data-* attribute changes on a custom element instead of the document root."},source:{code:y`
                const observer = observeDataAttributes(
                    {
                        'data-theme': (value) => setLog((prev) => [...prev, \`data-theme: \${value}\`]),
                    },
                    customElementRef.current,
                )

                // cleanup
                observer.disconnect()
            `}}),decorators:[x(),g()],render:()=>{const[e,s]=l.useState([]),n=l.useRef(null);return l.useEffect(()=>{if(!n.current)return;const a=f({"data-theme":r=>{s(B=>[...B,`data-theme: ${r}`])}},n.current);return()=>a.disconnect()},[n]),t.jsxs("div",{className:"font-sans",children:[t.jsxs("div",{className:"flex flex-wrap gap-2 mb-4",children:[t.jsx(c,{onPress:()=>{const a=n.current??document.documentElement;b({attributeName:"data-theme",themes:p,theme:"test-value",element:a})},children:"test-value"}),t.jsx(c,{onPress:()=>{(n.current??document.documentElement).removeAttribute("data-theme")},children:"Clear"})]}),t.jsx("div",{ref:n,className:"p-4 border border-gray-300 mb-4",children:"Custom Element to observe"}),t.jsx(T,{title:"Attribute Changes:",log:e})]})},play:async({canvas:e})=>{const s=e.getByRole("button",{name:"test-value"}),n=e.getByRole("button",{name:"Clear"}),a=e.getByText("Custom Element to observe");await m.click(s),await o(e.getByText("data-theme: test-value")).toBeInTheDocument();const r=a.getAttribute("data-theme");await o(r).toBe("test-value"),await m.click(n),await o(e.getByText("data-theme: null")).toBeInTheDocument();const B=a.getAttribute("data-theme");await o(B).toBeNull()}},v={tags:["source"],parameters:u({source:{code:w}}),decorators:[g()]};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  parameters: defineDocsParam({
    description: {
      story: 'Observes a single data-* attribute change on the document root element.'
    },
    source: {
      code: dedent\`
                const observer = observeDataAttributes({
                    'data-theme': (value) => setLog((prev) => [...prev, \\\`data-theme: \\\${value}\\\`]),
                })
                // cleanup
                observer.disconnect()
            \`
    }
  }),
  decorators: [withStoryCard(), showSource()],
  render: () => {
    const [log, setLog] = useState<string[]>([]);
    useEffect(() => {
      const observer = observeDataAttributes({
        'data-theme': value => {
          setLog(prev => [...prev, \`data-theme: \${value}\`]);
        }
      });
      return () => observer.disconnect();
    }, []);
    return <div className="font-sans">
                <div className="flex flex-wrap gap-2 mb-4">
                    <Button onPress={() => setThemeByDataAttribute({
          attributeName: 'data-theme',
          themes: testValueThemes,
          theme: 'test-value'
        })}>
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
                const observer = observeDataAttributes({
                    'data-theme': (value) => setLog((prev) => [...prev, \\\`data-theme: \\\${value}\\\`]),
                    'data-color-scheme': (value) => setLog((prev) => [...prev, \\\`data-color-scheme: \\\${value}\\\`]),
                })
                // cleanup
                observer.disconnect()
            \`
    }
  }),
  decorators: [withStoryCard(), showSource()],
  render: () => {
    const [log, setLog] = useState<string[]>([]);
    useEffect(() => {
      const observer = observeDataAttributes({
        'data-theme': value => {
          setLog(prev => [...prev, \`data-theme: \${value}\`]);
        },
        'data-color-scheme': value => {
          setLog(prev => [...prev, \`data-color-scheme: \${value}\`]);
        }
      });
      return () => observer.disconnect();
    }, []);
    return <div className="font-sans">
                <div className="flex flex-wrap gap-2 mb-4">
                    <Button onPress={() => setThemeByDataAttribute({
          attributeName: 'data-theme',
          themes: testValueThemes,
          theme: 'test-value'
        })}>
                        Set data-theme
                    </Button>
                    <Button onPress={() => document.documentElement.removeAttribute('data-theme')}>
                        Clear data-theme
                    </Button>
                    <Button onPress={() => setThemeByDataAttribute({
          attributeName: 'data-color-scheme',
          themes: testValueThemes,
          theme: 'test-value'
        })}>
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
                const observer = observeDataAttributes(
                    {
                        'data-theme': (value) => setLog((prev) => [...prev, \\\`data-theme: \\\${value}\\\`]),
                    },
                    customElementRef.current,
                )

                // cleanup
                observer.disconnect()
            \`
    }
  }),
  decorators: [withStoryCard(), showSource()],
  render: () => {
    const [log, setLog] = useState<string[]>([]);
    const customElementRef = useRef<HTMLDivElement>(null);
    useEffect(() => {
      if (!customElementRef.current) return;
      const observer = observeDataAttributes({
        'data-theme': value => {
          setLog(prev => [...prev, \`data-theme: \${value}\`]);
        }
      }, customElementRef.current);
      return () => observer.disconnect();
    }, [customElementRef]);
    return <div className="font-sans">
                <div className="flex flex-wrap gap-2 mb-4">
                    <Button onPress={() => {
          const el = customElementRef.current ?? document.documentElement;
          setThemeByDataAttribute({
            attributeName: 'data-theme',
            themes: testValueThemes,
            theme: 'test-value',
            element: el
          });
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
}`,...v.parameters?.docs?.source}}};const O=["BasicUsage","MultipleAttributes","CustomElement","Source"];export{d as BasicUsage,h as CustomElement,i as MultipleAttributes,v as Source,O as __namedExportsOrder,I as default};
