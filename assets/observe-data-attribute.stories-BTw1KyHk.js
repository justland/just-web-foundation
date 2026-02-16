import{j as a,d as u,s as h,w as g,r as l}from"./iframe-DoDTZ-f0.js";import{d as p}from"./dedent-BuYMbVyj.js";import{o as f}from"./observe-data-attribute-C-q0IQD-.js";import{L as x}from"./log-panel-CTYaAn3_.js";import{T as b}from"./toggle-attribute-button-8bdP_74Y.js";import"./preload-helper-PPVm8Dsz.js";import"./observe-attribute-DyUhIkyT.js";const w=`import { observeAttributes } from './observe-attribute.ts'

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
	element?: Element | undefined,
) {
	return observeAttributes(handlers, element)
}
`,{expect:o,userEvent:c}=__STORYBOOK_MODULE_TEST__,R={title:"attributes/observeDataAttributes",tags:["func","version:next"],parameters:u({description:{component:"Observes changes to `data-*` attributes on an element and calls corresponding handlers."}}),argTypes:{element:{control:!1}},render:()=>a.jsx(a.Fragment,{})},m={tags:["source"],parameters:u({source:{code:w}}),decorators:[h()]},i={parameters:u({description:{story:"Observes a single data-* attribute change on the document root element."},source:{code:p`
                const observer = observeDataAttributes({
                    'data-theme': (value) => setLog((prev) => [...prev, \`data-theme: \${value}\`]),
                })
                // cleanup
                observer.disconnect()
            `}}),decorators:[g(),h({placement:"before"})],render:()=>{const[e,n]=l.useState([]);return l.useEffect(()=>{const t=f({"data-theme":s=>{n(r=>[...r,`data-theme: ${s}`])}});return()=>t.disconnect()},[]),a.jsxs("div",{className:"font-sans",children:[a.jsx("div",{className:"flex flex-wrap gap-2 mb-4",children:a.jsx(b,{attribute:"data-theme"})}),a.jsx(x,{title:"Attribute Changes:",log:e})]})},play:async({canvas:e})=>{const n=e.getByRole("button",{name:"Toggle data-theme"});await c.click(n),await c.click(n),await o(e.getByText("data-theme: test-value")).toBeInTheDocument(),await o(e.getByText("data-theme: null")).toBeInTheDocument()}},d={parameters:u({description:{story:"Observes multiple data-* attributes simultaneously."},source:{code:p`
                const observer = observeDataAttributes({
                    'data-theme': (value) => setLog((prev) => [...prev, \`data-theme: \${value}\`]),
                    'data-color-scheme': (value) => setLog((prev) => [...prev, \`data-color-scheme: \${value}\`]),
                })
                // cleanup
                observer.disconnect()
            `}}),decorators:[g(),h({placement:"before"})],render:()=>{const[e,n]=l.useState([]);return l.useEffect(()=>{const t=f({"data-theme":s=>{n(r=>[...r,`data-theme: ${s}`])},"data-color-scheme":s=>{n(r=>[...r,`data-color-scheme: ${s}`])}});return()=>t.disconnect()},[]),a.jsxs("div",{className:"font-sans",children:[a.jsxs("div",{className:"flex flex-wrap gap-2 mb-4",children:[a.jsx(b,{attribute:"data-theme"}),a.jsx(b,{attribute:"data-color-scheme"})]}),a.jsx(x,{title:"Attribute Changes:",log:e})]})},play:async({canvas:e,step:n})=>{await n("data-theme",async()=>{const t=e.getByRole("button",{name:"Toggle data-theme"});await c.click(t),await c.click(t),await o(e.getByText("data-theme: test-value")).toBeInTheDocument(),await o(e.getByText("data-theme: null")).toBeInTheDocument()}),await n("data-color-scheme",async()=>{const t=e.getByRole("button",{name:"Toggle data-color-scheme"});await c.click(t),await c.click(t),await o(e.getByText("data-color-scheme: test-value")).toBeInTheDocument(),await o(e.getByText("data-color-scheme: null")).toBeInTheDocument()})}},v={parameters:u({description:{story:"Observes data-* attribute changes on a custom element instead of the document root."},source:{code:p`
                const observer = observeDataAttributes(
                    {
                        'data-theme': (value) => setLog((prev) => [...prev, \`data-theme: \${value}\`]),
                    },
                    customElementRef.current,
                )

                // cleanup
                observer.disconnect()
            `}}),decorators:[g(),h({placement:"before"})],render:()=>{const[e,n]=l.useState([]),t=l.useRef(null);return l.useEffect(()=>{if(!t.current)return;const s=f({"data-theme":r=>{n(T=>[...T,`data-theme: ${r}`])}},t.current);return()=>s.disconnect()},[t]),a.jsxs("div",{className:"font-sans",children:[a.jsx("div",{className:"flex flex-wrap gap-2 mb-4",children:a.jsx(b,{attribute:"data-theme",ref:t})}),a.jsx("div",{ref:t,className:"p-4 border border-gray-300 mb-4",children:"Custom Element to observe"}),a.jsx(x,{title:"Attribute Changes:",log:e})]})},play:async({canvas:e})=>{const n=e.getByRole("button",{name:"Toggle data-theme"}),t=e.getByText("Custom Element to observe");await c.click(n),await o(e.getByText("data-theme: test-value")).toBeInTheDocument();const s=t.getAttribute("data-theme");await o(s).toBe("test-value"),await c.click(n),await o(e.getByText("data-theme: null")).toBeInTheDocument();const r=t.getAttribute("data-theme");await o(r).toBeNull()}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  tags: ['source'],
  parameters: defineDocsParam({
    source: {
      code
    }
  }),
  decorators: [showDocSource()]
}`,...m.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
  decorators: [withStoryCard(), showDocSource({
    placement: 'before'
  })],
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
                    <ToggleAttributeButton attribute="data-theme" />
                </div>
                <LogPanel title="Attribute Changes:" log={log} />
            </div>;
  },
  play: async ({
    canvas
  }) => {
    const btn = canvas.getByRole('button', {
      name: 'Toggle data-theme'
    });
    await userEvent.click(btn);
    await userEvent.click(btn);
    await expect(canvas.getByText('data-theme: test-value')).toBeInTheDocument();
    await expect(canvas.getByText('data-theme: null')).toBeInTheDocument();
  }
}`,...i.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
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
  decorators: [withStoryCard(), showDocSource({
    placement: 'before'
  })],
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
                    <ToggleAttributeButton attribute="data-theme" />
                    <ToggleAttributeButton attribute="data-color-scheme" />
                </div>
                <LogPanel title="Attribute Changes:" log={log} />
            </div>;
  },
  play: async ({
    canvas,
    step
  }) => {
    await step('data-theme', async () => {
      const btn = canvas.getByRole('button', {
        name: 'Toggle data-theme'
      });
      await userEvent.click(btn);
      await userEvent.click(btn);
      await expect(canvas.getByText('data-theme: test-value')).toBeInTheDocument();
      await expect(canvas.getByText('data-theme: null')).toBeInTheDocument();
    });
    await step('data-color-scheme', async () => {
      const btn2 = canvas.getByRole('button', {
        name: 'Toggle data-color-scheme'
      });
      await userEvent.click(btn2);
      await userEvent.click(btn2);
      await expect(canvas.getByText('data-color-scheme: test-value')).toBeInTheDocument();
      await expect(canvas.getByText('data-color-scheme: null')).toBeInTheDocument();
    });
  }
}`,...d.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
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
  decorators: [withStoryCard(), showDocSource({
    placement: 'before'
  })],
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
                    <ToggleAttributeButton attribute="data-theme" ref={customElementRef} />
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
    const btn = canvas.getByRole('button', {
      name: 'Toggle data-theme'
    });
    const element = canvas.getByText('Custom Element to observe');
    await userEvent.click(btn);
    await expect(canvas.getByText('data-theme: test-value')).toBeInTheDocument();
    const dataTheme = element.getAttribute('data-theme');
    await expect(dataTheme).toBe('test-value');
    await userEvent.click(btn);
    await expect(canvas.getByText('data-theme: null')).toBeInTheDocument();
    const dataTheme2 = element.getAttribute('data-theme');
    await expect(dataTheme2).toBeNull();
  }
}`,...v.parameters?.docs?.source}}};const $=["Source","BasicUsage","MultipleAttributes","CustomElement"];export{i as BasicUsage,v as CustomElement,d as MultipleAttributes,m as Source,$ as __namedExportsOrder,R as default};
