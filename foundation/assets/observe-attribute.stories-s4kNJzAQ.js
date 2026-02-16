import{j as a,d as i,w as h,s as v,r as c}from"./iframe-bxlfbbSl.js";import{d as p}from"./dedent-BuYMbVyj.js";import{o as y}from"./observe-attribute-DyUhIkyT.js";import{L as f}from"./log-panel-L2db_Wx0.js";import"./preload-helper-PPVm8Dsz.js";const T=`/**
 * Observes attributes changes on an element and calls corresponding handlers.
 *
 * @param handlers - An object mapping attribute names to handler functions.
 * @param element - The element to observe. Defaults to \`document.documentElement\`.
 * @returns {MutationObserver} The observer instance, which can be used to disconnect the observer.
 *
 * @example
 * \`\`\`ts
 * const observer = observeAttributes({
 *   'data-theme': (attr, value) => console.log(\`Theme changed to: \${value}\`),
 *   'class': (attr, value) => console.log(\`class changed to: \${value}\`)
 * });
 *
 * // Later, to stop observing:
 * observer.disconnect();
 * \`\`\`
 */
export function observeAttributes<T extends string>(
	handlers: Record<string, (value: T | null) => void>,
	element: Element | undefined = globalThis.document.documentElement,
) {
	const observer = new MutationObserver((mutations) => {
		for (const mutation of mutations) {
			const attribute = mutation.attributeName
			if (!attribute) continue
			const value = element.getAttribute(attribute) as T | null
			handlers[attribute]?.(value)
		}
	})
	observer.observe(element, {
		attributes: true,
		attributeFilter: Object.keys(handlers),
	})
	return observer
}
`,{expect:o,userEvent:l}=__STORYBOOK_MODULE_TEST__,S={title:"attributes/observeAttributes",tags:["func","version:next"],parameters:i({description:{component:"Observes attribute changes on an element and calls corresponding handlers."}}),argTypes:{element:{control:!1}},render:()=>a.jsx(a.Fragment,{})},u={parameters:i({description:{story:"Observes a single attribute change on the document root element."},source:{code:p`
                const observer = observeAttributes({
                    'data-theme': (value) => { ... },
                })
                // cleanup
                observer.disconnect()
            `}}),decorators:[h(),v({placement:"before"})],render:()=>{const[e,t]=c.useState([]);return c.useEffect(()=>{const n=y({"data-theme":r=>{t(s=>[...s,`data-theme: ${r}`])}});return()=>n.disconnect()},[]),a.jsxs(a.Fragment,{children:[a.jsx("div",{className:"flex flex-wrap gap-2 mb-4",children:a.jsx(g,{attribute:"data-theme"})}),a.jsx(f,{title:"Attribute Changes:",log:e})]})},play:async({canvas:e})=>{const t=e.getByRole("button",{name:"Toggle data-theme"});await l.click(t),await l.click(t),await o(e.getByText("data-theme: test-value")).toBeInTheDocument(),await o(e.getByText("data-theme: null")).toBeInTheDocument()}},m={parameters:i({description:{story:"Observes multiple attributes simultaneously."},source:{code:p`
                const observer = observeAttributes({
                    'data-theme': (value) => { ... },
                    'aria-label': (value) => { ... },
                })
                // cleanup
                observer.disconnect()
            `}}),decorators:[h(),v({placement:"before"})],render:()=>{const[e,t]=c.useState([]);return c.useEffect(()=>{const n=y({"data-theme":r=>{t(s=>[...s,`data-theme: ${r}`])},"aria-label":r=>{t(s=>[...s,`aria-label: ${r}`])}});return()=>n.disconnect()},[]),a.jsxs("div",{className:"font-sans",children:[a.jsxs("div",{className:"flex flex-wrap gap-2 mb-4",children:[a.jsx(g,{attribute:"data-theme"}),a.jsx(g,{attribute:"aria-label"})]}),a.jsx(f,{title:"Attribute Changes:",log:e})]})},play:async({canvas:e,step:t})=>{const n=e.getByRole("button",{name:"Toggle data-theme"});await t("data-theme",async()=>{await l.click(n),await o(e.getByText("data-theme: test-value")).toBeInTheDocument(),await l.click(n),await o(e.getByText("data-theme: null")).toBeInTheDocument()}),await t("aria-label",async()=>{const r=e.getByRole("button",{name:"Toggle aria-label"});await l.click(r),await l.click(r),await o(e.getByText("aria-label: test-value")).toBeInTheDocument(),await o(e.getByText("aria-label: null")).toBeInTheDocument()})}},d={parameters:i({description:{story:"Observes attribute changes on a custom element instead of the document root."},source:{code:p`
                const observer = observeAttributes(
                    {
                        'data-anything': (value) => { ... },
                    },
                    customElementRef.current,
                )
                // cleanup
                observer.disconnect()
            `}}),decorators:[h(),v({placement:"before"})],render:()=>{const[e,t]=c.useState([]),n=c.useRef(null);return c.useEffect(()=>{if(!n.current)return;const r=y({"data-anything":s=>{t(x=>[...x,`data-anything: ${s}`])}},n.current);return()=>r.disconnect()},[n]),a.jsxs("div",{className:"font-sans",children:[a.jsx("div",{className:"flex flex-wrap gap-2 mb-4",children:a.jsx(g,{attribute:"data-anything",ref:n})}),a.jsx("div",{ref:n,className:"p-4 border border-gray-300 mb-4",children:"Custom Element to observe"}),a.jsx(f,{title:"Attribute Changes:",log:e})]})},play:async({canvas:e})=>{const t=e.getByRole("button",{name:"Toggle data-anything"}),n=e.getByText("Custom Element to observe");await l.click(t),await o(e.getByText("data-anything: test-value")).toBeInTheDocument();const r=n.getAttribute("data-anything");await o(r).toBe("test-value"),await l.click(t),await o(e.getByText("data-anything: null")).toBeInTheDocument();const s=n.getAttribute("data-anything");await o(s).toBeNull()}},g=c.forwardRef(({attribute:e},t)=>{const n=c.useCallback(r=>{const s=(t&&"current"in t?t.current:null)??document.documentElement,w=s.getAttribute(r)?null:"test-value";w===null?s.removeAttribute(r):s.setAttribute(r,w)},[t]);return a.jsxs("button",{className:"bg-cyan-700 text-white px-4 py-2 rounded-md shadow-md active:bg-cyan-800",onClick:()=>n(e),children:["Toggle ",e]},e)}),b={tags:["source"],parameters:i({source:{code:T}}),decorators:[v()]};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  parameters: defineDocsParam({
    description: {
      story: 'Observes a single attribute change on the document root element.'
    },
    source: {
      code: dedent\`
                const observer = observeAttributes({
                    'data-theme': (value) => { ... },
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
      const observer = observeAttributes({
        'data-theme': value => {
          setLog(prev => [...prev, \`data-theme: \${value}\`]);
        }
      });
      return () => observer.disconnect();
    }, []);
    return <>
                <div className="flex flex-wrap gap-2 mb-4">
                    <ToggleButton attribute="data-theme" />
                </div>
                <LogPanel title="Attribute Changes:" log={log} />
            </>;
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
}`,...u.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  parameters: defineDocsParam({
    description: {
      story: 'Observes multiple attributes simultaneously.'
    },
    source: {
      code: dedent\`
                const observer = observeAttributes({
                    'data-theme': (value) => { ... },
                    'aria-label': (value) => { ... },
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
      const observer = observeAttributes({
        'data-theme': value => {
          setLog(prev => [...prev, \`data-theme: \${value}\`]);
        },
        'aria-label': value => {
          setLog(prev => [...prev, \`aria-label: \${value}\`]);
        }
      });
      return () => observer.disconnect();
    }, []);
    return <div className="font-sans">
                <div className="flex flex-wrap gap-2 mb-4">
                    <ToggleButton attribute="data-theme" />
                    <ToggleButton attribute="aria-label" />
                </div>
                <LogPanel title="Attribute Changes:" log={log} />
            </div>;
  },
  play: async ({
    canvas,
    step
  }) => {
    const btn = canvas.getByRole('button', {
      name: 'Toggle data-theme'
    });
    await step('data-theme', async () => {
      await userEvent.click(btn);
      await expect(canvas.getByText('data-theme: test-value')).toBeInTheDocument();
      await userEvent.click(btn);
      await expect(canvas.getByText('data-theme: null')).toBeInTheDocument();
    });
    await step('aria-label', async () => {
      const btn2 = canvas.getByRole('button', {
        name: 'Toggle aria-label'
      });
      await userEvent.click(btn2);
      await userEvent.click(btn2);
      await expect(canvas.getByText('aria-label: test-value')).toBeInTheDocument();
      await expect(canvas.getByText('aria-label: null')).toBeInTheDocument();
    });
  }
}`,...m.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  parameters: defineDocsParam({
    description: {
      story: 'Observes attribute changes on a custom element instead of the document root.'
    },
    source: {
      code: dedent\`
                const observer = observeAttributes(
                    {
                        'data-anything': (value) => { ... },
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
      const observer = observeAttributes({
        'data-anything': value => {
          setLog(prev => [...prev, \`data-anything: \${value}\`]);
        }
      }, customElementRef.current);
      return () => observer.disconnect();
    }, [customElementRef]);
    return <div className="font-sans">
                <div className="flex flex-wrap gap-2 mb-4">
                    <ToggleButton attribute="data-anything" ref={customElementRef} />
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
      name: 'Toggle data-anything'
    });
    const element = canvas.getByText('Custom Element to observe');
    await userEvent.click(btn);
    await expect(canvas.getByText('data-anything: test-value')).toBeInTheDocument();
    const dataAnything = element.getAttribute('data-anything');
    await expect(dataAnything).toBe('test-value');
    await userEvent.click(btn);
    await expect(canvas.getByText('data-anything: null')).toBeInTheDocument();
    const dataAnything2 = element.getAttribute('data-anything');
    await expect(dataAnything2).toBeNull();
  }
}`,...d.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  tags: ['source'],
  parameters: defineDocsParam({
    source: {
      code
    }
  }),
  decorators: [showDocSource()]
}`,...b.parameters?.docs?.source}}};const j=["BasicUsage","MultipleAttributes","CustomElement","Source"];export{u as BasicUsage,d as CustomElement,m as MultipleAttributes,b as Source,j as __namedExportsOrder,S as default};
