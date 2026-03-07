import{j as n,d as l,w as v,s as h,r as o}from"./iframe-CWQnDVRD.js";import{d as p}from"./dedent-BuYMbVyj.js";import{o as y}from"./observe-attribute-CZKLLp6I.js";import{L as f}from"./log-panel-PopOnI37.js";import"./preload-helper-PPVm8Dsz.js";const w=`/**
 * Observes attributes changes on an element and calls corresponding handlers.
 *
 * @param handlers - An object mapping attribute names to handler functions.
 * @param element - The element to observe (accepts null e.g. from refs). Defaults to \`document.documentElement\`.
 * @returns An unsubscribe function to stop observing. Returns a no-op function in SSR environments.
 *
 * @example
 * \`\`\`ts
 * const unsubscribe = observeAttributes({
 *   'data-theme': (value) => console.log(\`Theme changed to: \${value}\`),
 *   'class': (value) => console.log(\`class changed to: \${value}\`)
 * });
 *
 * // Later, to stop observing:
 * unsubscribe();
 * \`\`\`
 */
export function observeAttributes<T extends string>(
	handlers: Record<string, (value: T | null) => void>,
	element?: Element | null | undefined
): () => void {
	/* c8 ignore start */
	if (typeof document === 'undefined') {
		return () => {}
	}
	/* c8 ignore end */
	element = element ?? document.documentElement
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
		attributeFilter: Object.keys(handlers)
	})
	return () => observer.disconnect()
}
`,{expect:r,userEvent:c}=__STORYBOOK_MODULE_TEST__,D={title:"attributes/observeAttributes",tags:["func","version:3.0"],parameters:l({description:{component:"Observes attribute changes on an element and calls corresponding handlers."}}),argTypes:{element:{control:!1}},render:()=>n.jsx(n.Fragment,{})},i={parameters:l({description:{story:"Observes a single attribute change on the document root element."},source:{code:p`
                const unsubscribe = observeAttributes({
                    'data-theme': (value) => { ... },
                })
                // cleanup
                unsubscribe()
            `}}),decorators:[v(),h()],render:()=>{const[e,t]=o.useState([]);return o.useEffect(()=>y({"data-theme":a=>{t(s=>[...s,`data-theme: ${a}`])}}),[]),n.jsxs(n.Fragment,{children:[n.jsx("div",{className:"flex flex-wrap gap-2 mb-4",children:n.jsx(g,{attribute:"data-theme"})}),n.jsx(f,{title:"Attribute Changes:",log:e})]})},play:async({canvas:e})=>{const t=e.getByRole("button",{name:"Toggle data-theme"});await c.click(t),await c.click(t),await r(e.getByText("data-theme: test-value")).toBeInTheDocument(),await r(e.getByText("data-theme: null")).toBeInTheDocument()}},m={parameters:l({description:{story:"Observes multiple attributes simultaneously."},source:{code:p`
                const unsubscribe = observeAttributes({
                    'data-theme': (value) => { ... },
                    'aria-label': (value) => { ... },
                })
                // cleanup
                unsubscribe()
            `}}),decorators:[v(),h()],render:()=>{const[e,t]=o.useState([]);return o.useEffect(()=>y({"data-theme":a=>{t(s=>[...s,`data-theme: ${a}`])},"aria-label":a=>{t(s=>[...s,`aria-label: ${a}`])}}),[]),n.jsxs("div",{className:"font-sans",children:[n.jsxs("div",{className:"flex flex-wrap gap-2 mb-4",children:[n.jsx(g,{attribute:"data-theme"}),n.jsx(g,{attribute:"aria-label"})]}),n.jsx(f,{title:"Attribute Changes:",log:e})]})},play:async({canvas:e,step:t})=>{const a=e.getByRole("button",{name:"Toggle data-theme"});await t("data-theme",async()=>{await c.click(a),await r(e.getByText("data-theme: test-value")).toBeInTheDocument(),await c.click(a),await r(e.getByText("data-theme: null")).toBeInTheDocument()}),await t("aria-label",async()=>{const s=e.getByRole("button",{name:"Toggle aria-label"});await c.click(s),await c.click(s),await r(e.getByText("aria-label: test-value")).toBeInTheDocument(),await r(e.getByText("aria-label: null")).toBeInTheDocument()})}},d={parameters:l({description:{story:"Observes attribute changes on a custom element instead of the document root."},source:{code:p`
                const unsubscribe = observeAttributes(
                    {
                        'data-anything': (value) => { ... },
                    },
                    customElementRef.current,
                )
                // cleanup
                unsubscribe()
            `}}),decorators:[v(),h()],render:()=>{const[e,t]=o.useState([]),a=o.useRef(null);return o.useEffect(()=>{if(a.current)return y({"data-anything":s=>{t(u=>[...u,`data-anything: ${s}`])}},a.current)},[a]),n.jsxs("div",{className:"font-sans",children:[n.jsx("div",{className:"flex flex-wrap gap-2 mb-4",children:n.jsx(g,{attribute:"data-anything",ref:a})}),n.jsx("div",{ref:a,className:"p-4 border border-gray-300 mb-4",children:"Custom Element to observe"}),n.jsx(f,{title:"Attribute Changes:",log:e})]})},play:async({canvas:e})=>{const t=e.getByRole("button",{name:"Toggle data-anything"}),a=e.getByText("Custom Element to observe");await c.click(t),await r(e.getByText("data-anything: test-value")).toBeInTheDocument();const s=a.getAttribute("data-anything");await r(s).toBe("test-value"),await c.click(t),await r(e.getByText("data-anything: null")).toBeInTheDocument();const u=a.getAttribute("data-anything");await r(u).toBeNull()}},g=o.forwardRef(({attribute:e},t)=>{const a=o.useCallback(s=>{const u=(t&&"current"in t?t.current:null)??document.documentElement,x=u.getAttribute(s)?null:"test-value";x===null?u.removeAttribute(s):u.setAttribute(s,x)},[t]);return n.jsxs("button",{className:"bg-cyan-700 text-white px-4 py-2 rounded-md shadow-md active:bg-cyan-800",onClick:()=>a(e),children:["Toggle ",e]},e)}),b={tags:["source"],parameters:l({source:{code:w}}),decorators:[h()]};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  parameters: defineDocsParam({
    description: {
      story: 'Observes a single attribute change on the document root element.'
    },
    source: {
      code: dedent\`
                const unsubscribe = observeAttributes({
                    'data-theme': (value) => { ... },
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
      return observeAttributes({
        'data-theme': value => {
          setLog(prev => [...prev, \`data-theme: \${value}\`]);
        }
      });
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
}`,...i.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  parameters: defineDocsParam({
    description: {
      story: 'Observes multiple attributes simultaneously.'
    },
    source: {
      code: dedent\`
                const unsubscribe = observeAttributes({
                    'data-theme': (value) => { ... },
                    'aria-label': (value) => { ... },
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
      return observeAttributes({
        'data-theme': value => {
          setLog(prev => [...prev, \`data-theme: \${value}\`]);
        },
        'aria-label': value => {
          setLog(prev => [...prev, \`aria-label: \${value}\`]);
        }
      });
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
                const unsubscribe = observeAttributes(
                    {
                        'data-anything': (value) => { ... },
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
      return observeAttributes({
        'data-anything': value => {
          setLog(prev => [...prev, \`data-anything: \${value}\`]);
        }
      }, customElementRef.current);
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
  decorators: [showSource()]
}`,...b.parameters?.docs?.source}}};const j=["BasicUsage","MultipleAttributes","CustomElement","Source"];export{i as BasicUsage,d as CustomElement,m as MultipleAttributes,b as Source,j as __namedExportsOrder,D as default};
