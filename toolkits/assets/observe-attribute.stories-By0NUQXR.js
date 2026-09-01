import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./react-B6tGW3fj.js";import{a as n}from"./chunk-W22LQPXL-BSpKiHdn.js";import{a as r,c as i,l as a,s as o}from"./iframe-BJVp8-w1.js";import{n as s,t as c}from"./dedent-DQaCLeUO.js";import{n as l}from"./observe-attribute-By6RQqt_.js";import{t as u}from"./src-X3K_eC4I.js";import{n as d,t as f}from"./log-panel-DXf5uPG8.js";var p;function m(){return(m=e((()=>{p=`/**
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
`})))()}var h,g,_,v,y,b,x,S,C,w,T;function E(){return(E=e((()=>{u(),o(),s(),h=t(),d(),m(),g=n(),{expect:_,userEvent:v}=__STORYBOOK_MODULE_TEST__,y={title:`attributes/observeAttributes`,tags:[`func`,`version:3.0`],parameters:r({description:{component:`Observes attribute changes on an element and calls corresponding handlers.`}}),argTypes:{element:{control:!1}},render:()=>(0,g.jsx)(g.Fragment,{})},b={parameters:r({description:{story:`Observes a single attribute change on the document root element.`},source:{code:c`
                const unsubscribe = observeAttributes({
                    'data-theme': (value) => { ... },
                })
                // cleanup
                unsubscribe()
            `}}),decorators:[a(),i()],render:()=>{let[e,t]=(0,h.useState)([]);return(0,h.useEffect)(()=>l({"data-theme":e=>{t(t=>[...t,`data-theme: ${e}`])}}),[]),(0,g.jsxs)(g.Fragment,{children:[(0,g.jsx)(`div`,{className:`flex flex-wrap gap-2 mb-4`,children:(0,g.jsx)(C,{attribute:`data-theme`})}),(0,g.jsx)(f,{title:`Attribute Changes:`,log:e})]})},play:async({canvas:e})=>{let t=e.getByRole(`button`,{name:`Toggle data-theme`});await v.click(t),await v.click(t),await _(e.getByText(`data-theme: test-value`)).toBeInTheDocument(),await _(e.getByText(`data-theme: null`)).toBeInTheDocument()}},x={parameters:r({description:{story:`Observes multiple attributes simultaneously.`},source:{code:c`
                const unsubscribe = observeAttributes({
                    'data-theme': (value) => { ... },
                    'aria-label': (value) => { ... },
                })
                // cleanup
                unsubscribe()
            `}}),decorators:[a(),i()],render:()=>{let[e,t]=(0,h.useState)([]);return(0,h.useEffect)(()=>l({"data-theme":e=>{t(t=>[...t,`data-theme: ${e}`])},"aria-label":e=>{t(t=>[...t,`aria-label: ${e}`])}}),[]),(0,g.jsxs)(`div`,{className:`font-sans`,children:[(0,g.jsxs)(`div`,{className:`flex flex-wrap gap-2 mb-4`,children:[(0,g.jsx)(C,{attribute:`data-theme`}),(0,g.jsx)(C,{attribute:`aria-label`})]}),(0,g.jsx)(f,{title:`Attribute Changes:`,log:e})]})},play:async({canvas:e,step:t})=>{let n=e.getByRole(`button`,{name:`Toggle data-theme`});await t(`data-theme`,async()=>{await v.click(n),await _(e.getByText(`data-theme: test-value`)).toBeInTheDocument(),await v.click(n),await _(e.getByText(`data-theme: null`)).toBeInTheDocument()}),await t(`aria-label`,async()=>{let t=e.getByRole(`button`,{name:`Toggle aria-label`});await v.click(t),await v.click(t),await _(e.getByText(`aria-label: test-value`)).toBeInTheDocument(),await _(e.getByText(`aria-label: null`)).toBeInTheDocument()})}},S={parameters:r({description:{story:`Observes attribute changes on a custom element instead of the document root.`},source:{code:c`
                const unsubscribe = observeAttributes(
                    {
                        'data-anything': (value) => { ... },
                    },
                    customElementRef.current,
                )
                // cleanup
                unsubscribe()
            `}}),decorators:[a(),i()],render:()=>{let[e,t]=(0,h.useState)([]),n=(0,h.useRef)(null);return(0,h.useEffect)(()=>{if(n.current)return l({"data-anything":e=>{t(t=>[...t,`data-anything: ${e}`])}},n.current)},[n]),(0,g.jsxs)(`div`,{className:`font-sans`,children:[(0,g.jsx)(`div`,{className:`flex flex-wrap gap-2 mb-4`,children:(0,g.jsx)(C,{attribute:`data-anything`,ref:n})}),(0,g.jsx)(`div`,{ref:n,className:`p-4 border border-gray-300 mb-4`,children:`Custom Element to observe`}),(0,g.jsx)(f,{title:`Attribute Changes:`,log:e})]})},play:async({canvas:e})=>{let t=e.getByRole(`button`,{name:`Toggle data-anything`}),n=e.getByText(`Custom Element to observe`);await v.click(t),await _(e.getByText(`data-anything: test-value`)).toBeInTheDocument();let r=n.getAttribute(`data-anything`);await _(r).toBe(`test-value`),await v.click(t),await _(e.getByText(`data-anything: null`)).toBeInTheDocument();let i=n.getAttribute(`data-anything`);await _(i).toBeNull()}},C=(0,h.forwardRef)(({attribute:e},t)=>{let n=(0,h.useCallback)(e=>{let n=(t&&`current`in t?t.current:null)??document.documentElement,r=n.getAttribute(e)?null:`test-value`;r===null?n.removeAttribute(e):n.setAttribute(e,r)},[t]);return(0,g.jsxs)(`button`,{className:`bg-cyan-700 text-white px-4 py-2 rounded-md shadow-md active:bg-cyan-800`,onClick:()=>n(e),children:[`Toggle `,e]},e)}),w={tags:[`source`],parameters:r({source:{code:p}}),decorators:[i()]},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
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
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
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
}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
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
}`,...S.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  tags: ['source'],
  parameters: defineDocsParam({
    source: {
      code
    }
  }),
  decorators: [showSource()]
}`,...w.parameters?.docs?.source}}},T=[`BasicUsage`,`MultipleAttributes`,`CustomElement`,`Source`]})))()}E();export{b as BasicUsage,S as CustomElement,x as MultipleAttributes,w as Source,T as __namedExportsOrder,y as default};