import{j as t,d,w as y,s as g,r as m}from"./iframe-D_6mvhRd.js";import{d as f}from"./dedent-BuYMbVyj.js";import{o as x}from"./observe-data-attribute-CrIGpGqK.js";import{t as p}from"./theme-entry-D4S_RAMB.js";import{d as w}from"./data-attribute-theme-store-BgARxre3.js";import{B as c}from"./button-BvxDy0Ld.js";import{L as T}from"./log-panel-DLxjI2cP.js";import"./preload-helper-PPVm8Dsz.js";import"./observe-attribute-DJMrXwPX.js";import"./get-data-attribute-Bl9c_7h4.js";import"./get-attribute-BI4biMNS.js";import"./resolve-theme-map-value-6BKppRxh.js";import"./findKey-D_Zca1Sl.js";import"./resolve-class-name-1fsVhyj2.js";const D=`import { observeAttributes } from './observe-attribute.ts'

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
	element?: Element | undefined
) {
	return observeAttributes(handlers, element)
}
`,{expect:o,userEvent:l}=__STORYBOOK_MODULE_TEST__,u={"test-value":"test-value"},E=w(u,{attributeName:"data-theme"}),S=w(u,{attributeName:"data-color-scheme"}),K={title:"attributes/observeDataAttributes",tags:["func","version:1.0"],parameters:d({description:{component:"Observes changes to `data-*` attributes on an element and calls corresponding handlers."}}),argTypes:{element:{control:!1}},render:()=>t.jsx(t.Fragment,{})},i={parameters:d({description:{story:"Observes a single data-* attribute change on the document root element."},source:{code:f`
                const observer = observeDataAttributes({
                    'data-theme': (value) => setLog((prev) => [...prev, \`data-theme: \${value}\`]),
                })
                // cleanup
                observer.disconnect()
            `}}),decorators:[y(),g()],render:()=>{const[e,s]=m.useState([]);return m.useEffect(()=>{const n=x({"data-theme":a=>{s(r=>[...r,`data-theme: ${a}`])}});return()=>n.disconnect()},[]),t.jsxs("div",{className:"font-sans",children:[t.jsxs("div",{className:"flex flex-wrap gap-2 mb-4",children:[t.jsx(c,{onPress:()=>E.write(p(u,"test-value")),children:"test-value"}),t.jsx(c,{onPress:()=>document.documentElement.removeAttribute("data-theme"),children:"Clear"})]}),t.jsx(T,{title:"Attribute Changes:",log:e})]})},play:async({canvas:e})=>{const s=e.getByRole("button",{name:"test-value"}),n=e.getByRole("button",{name:"Clear"});await l.click(s),await o(e.getByText("data-theme: test-value")).toBeInTheDocument(),await l.click(n),await o(e.getByText("data-theme: null")).toBeInTheDocument()}},v={parameters:d({description:{story:"Observes multiple data-* attributes simultaneously."},source:{code:f`
                const observer = observeDataAttributes({
                    'data-theme': (value) => setLog((prev) => [...prev, \`data-theme: \${value}\`]),
                    'data-color-scheme': (value) => setLog((prev) => [...prev, \`data-color-scheme: \${value}\`]),
                })
                // cleanup
                observer.disconnect()
            `}}),decorators:[y(),g()],render:()=>{const[e,s]=m.useState([]);return m.useEffect(()=>{const n=x({"data-theme":a=>{s(r=>[...r,`data-theme: ${a}`])},"data-color-scheme":a=>{s(r=>[...r,`data-color-scheme: ${a}`])}});return()=>n.disconnect()},[]),t.jsxs("div",{className:"font-sans",children:[t.jsxs("div",{className:"flex flex-wrap gap-2 mb-4",children:[t.jsx(c,{onPress:()=>E.write(p(u,"test-value")),children:"Set data-theme"}),t.jsx(c,{onPress:()=>document.documentElement.removeAttribute("data-theme"),children:"Clear data-theme"}),t.jsx(c,{onPress:()=>S.write(p(u,"test-value")),children:"Set data-color-scheme"}),t.jsx(c,{onPress:()=>document.documentElement.removeAttribute("data-color-scheme"),children:"Clear data-color-scheme"})]}),t.jsx(T,{title:"Attribute Changes:",log:e})]})},play:async({canvas:e,step:s})=>{await s("data-theme",async()=>{const n=e.getByRole("button",{name:"Set data-theme"}),a=e.getByRole("button",{name:"Clear data-theme"});await l.click(n),await o(e.getByText("data-theme: test-value")).toBeInTheDocument(),await l.click(a),await o(e.getByText("data-theme: null")).toBeInTheDocument()}),await s("data-color-scheme",async()=>{const n=e.getByRole("button",{name:"Set data-color-scheme"}),a=e.getByRole("button",{name:"Clear data-color-scheme"});await l.click(n),await o(e.getByText("data-color-scheme: test-value")).toBeInTheDocument(),await l.click(a),await o(e.getByText("data-color-scheme: null")).toBeInTheDocument()})}},h={parameters:d({description:{story:"Observes data-* attribute changes on a custom element instead of the document root."},source:{code:f`
                const observer = observeDataAttributes(
                    {
                        'data-theme': (value) => setLog((prev) => [...prev, \`data-theme: \${value}\`]),
                    },
                    customElementRef.current,
                )

                // cleanup
                observer.disconnect()
            `}}),decorators:[y(),g()],render:()=>{const[e,s]=m.useState([]),n=m.useRef(null);return m.useEffect(()=>{if(!n.current)return;const a=x({"data-theme":r=>{s(B=>[...B,`data-theme: ${r}`])}},n.current);return()=>a.disconnect()},[n]),t.jsxs("div",{className:"font-sans",children:[t.jsxs("div",{className:"flex flex-wrap gap-2 mb-4",children:[t.jsx(c,{onPress:()=>{const a=n.current??document.documentElement;w(u,{attributeName:"data-theme",element:a}).write(p(u,"test-value"))},children:"test-value"}),t.jsx(c,{onPress:()=>{(n.current??document.documentElement).removeAttribute("data-theme")},children:"Clear"})]}),t.jsx("div",{ref:n,className:"p-4 border border-gray-300 mb-4",children:"Custom Element to observe"}),t.jsx(T,{title:"Attribute Changes:",log:e})]})},play:async({canvas:e})=>{const s=e.getByRole("button",{name:"test-value"}),n=e.getByRole("button",{name:"Clear"}),a=e.getByText("Custom Element to observe");await l.click(s),await o(e.getByText("data-theme: test-value")).toBeInTheDocument();const r=a.getAttribute("data-theme");await o(r).toBe("test-value"),await l.click(n),await o(e.getByText("data-theme: null")).toBeInTheDocument();const B=a.getAttribute("data-theme");await o(B).toBeNull()}},b={tags:["source"],parameters:d({source:{code:D}}),decorators:[g()]};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
}`,...i.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
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
}`,...v.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
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
}`,...h.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  tags: ['source'],
  parameters: defineDocsParam({
    source: {
      code
    }
  }),
  decorators: [showSource()]
}`,...b.parameters?.docs?.source}}};const U=["BasicUsage","MultipleAttributes","CustomElement","Source"];export{i as BasicUsage,h as CustomElement,v as MultipleAttributes,b as Source,U as __namedExportsOrder,K as default};
