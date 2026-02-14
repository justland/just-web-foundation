import{d as v,r as o,j as a}from"./iframe-BF-XYDqv.js";import{o as p}from"./observe-attribute-DyUhIkyT.js";import{L as b}from"./log-panel-wkHOAXjT.js";import{T as g}from"./toggle-attribute-button-CkGGq015.js";import"./preload-helper-PPVm8Dsz.js";const{expect:r,userEvent:n}=__STORYBOOK_MODULE_TEST__,B={title:"testing/ToggleAttributeButton",tags:["autodocs","version:next"],component:g},i={parameters:v({description:{story:"Toggles an attribute on document.documentElement when no ref is provided. Cycles through values then removes the attribute."}}),args:{attribute:"data-demo",values:["test-value"]},render:()=>{const[e,t]=o.useState([]);return o.useEffect(()=>{const s=p({"data-demo":c=>{t(l=>[...l,`data-demo: ${c}`])}});return()=>s.disconnect()},[]),a.jsxs("div",{className:"font-sans space-y-4",children:[a.jsx("div",{className:"flex flex-wrap gap-2",children:a.jsx(g,{attribute:"data-demo",values:["test-value"]})}),a.jsx(b,{title:"Attribute changes (on document):",log:e})]})},play:async({canvas:e})=>{const t=e.getByRole("button",{name:"Toggle data-demo"});await n.click(t),await r(e.getByText("data-demo: test-value")).toBeInTheDocument(),await n.click(t),await r(e.getByText("data-demo: null")).toBeInTheDocument()}},u={parameters:v({description:{story:"Cycles through custom values (e.g. light → dark → removed) when values prop is provided."}}),args:{attribute:"data-theme",values:["light","dark"]},render:e=>{const[t,s]=o.useState([]);return o.useEffect(()=>{const c=p({"data-theme":l=>{s(m=>[...m,`data-theme: ${l}`])}});return()=>c.disconnect()},[]),a.jsxs("div",{className:"font-sans space-y-4",children:[a.jsx("div",{className:"flex flex-wrap gap-2",children:a.jsx(g,{...e})}),a.jsx(b,{title:"Attribute changes:",log:t})]})},play:async({canvas:e})=>{const t=e.getByRole("button",{name:"Toggle data-theme"});await n.click(t),await r(e.getByText("data-theme: light")).toBeInTheDocument(),await n.click(t),await r(e.getByText("data-theme: dark")).toBeInTheDocument(),await n.click(t),await r(e.getByText("data-theme: null")).toBeInTheDocument()}},d={name:"with ref target",parameters:v({description:{story:"When a ref is passed, the attribute is toggled on the ref target element instead of document.documentElement."}}),args:{attribute:"data-state",values:["test-value"]},render:()=>{const[e,t]=o.useState([]),s=o.useRef(null);return o.useEffect(()=>{if(!s.current)return;const c=p({"data-state":l=>{t(m=>[...m,`data-state: ${l}`])}},s.current);return()=>c.disconnect()},[]),a.jsxs("div",{className:"font-sans space-y-4",children:[a.jsx("div",{className:"flex flex-wrap gap-2",children:a.jsx(g,{attribute:"data-state",ref:s})}),a.jsx("div",{ref:s,className:"p-4 border-2 border-neutral-300 rounded bg-neutral-50 dark:bg-neutral-900",children:"Target element (attribute toggles here)"}),a.jsx(b,{title:"Attribute changes (on target element):",log:e})]})},play:async({canvas:e})=>{const t=e.getByRole("button",{name:"Toggle data-state"}),s=e.getByText("Target element (attribute toggles here)");await n.click(t),await r(e.getByText("data-state: test-value")).toBeInTheDocument(),await r(s.getAttribute("data-state")).toBe("test-value"),await n.click(t),await r(e.getByText("data-state: null")).toBeInTheDocument(),await r(s.getAttribute("data-state")).toBeNull()}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  parameters: defineDocsParam({
    description: {
      story: 'Toggles an attribute on document.documentElement when no ref is provided. Cycles through values then removes the attribute.'
    }
  }),
  args: {
    attribute: 'data-demo',
    values: ['test-value']
  },
  render: () => {
    const [log, setLog] = useState<string[]>([]);
    useEffect(() => {
      const observer = observeAttributes({
        'data-demo': value => {
          setLog(prev => [...prev, \`data-demo: \${value}\`]);
        }
      });
      return () => observer.disconnect();
    }, []);
    return <div className="font-sans space-y-4">
                <div className="flex flex-wrap gap-2">
                    <ToggleAttributeButton attribute="data-demo" values={['test-value']} />
                </div>
                <LogPanel title="Attribute changes (on document):" log={log} />
            </div>;
  },
  play: async ({
    canvas
  }) => {
    const btn = canvas.getByRole('button', {
      name: 'Toggle data-demo'
    });
    await userEvent.click(btn);
    await expect(canvas.getByText('data-demo: test-value')).toBeInTheDocument();
    await userEvent.click(btn);
    await expect(canvas.getByText('data-demo: null')).toBeInTheDocument();
  }
}`,...i.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  parameters: defineDocsParam({
    description: {
      story: 'Cycles through custom values (e.g. light → dark → removed) when values prop is provided.'
    }
  }),
  args: {
    attribute: 'data-theme',
    values: ['light', 'dark']
  },
  render: args => {
    const [log, setLog] = useState<string[]>([]);
    useEffect(() => {
      const observer = observeAttributes({
        'data-theme': value => {
          setLog(prev => [...prev, \`data-theme: \${value}\`]);
        }
      });
      return () => observer.disconnect();
    }, []);
    return <div className="font-sans space-y-4">
                <div className="flex flex-wrap gap-2">
                    <ToggleAttributeButton {...args} />
                </div>
                <LogPanel title="Attribute changes:" log={log} />
            </div>;
  },
  play: async ({
    canvas
  }) => {
    const btn = canvas.getByRole('button', {
      name: 'Toggle data-theme'
    });
    await userEvent.click(btn);
    await expect(canvas.getByText('data-theme: light')).toBeInTheDocument();
    await userEvent.click(btn);
    await expect(canvas.getByText('data-theme: dark')).toBeInTheDocument();
    await userEvent.click(btn);
    await expect(canvas.getByText('data-theme: null')).toBeInTheDocument();
  }
}`,...u.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  name: 'with ref target',
  parameters: defineDocsParam({
    description: {
      story: 'When a ref is passed, the attribute is toggled on the ref target element instead of document.documentElement.'
    }
  }),
  args: {
    attribute: 'data-state',
    values: ['test-value']
  },
  render: () => {
    const [log, setLog] = useState<string[]>([]);
    const targetRef = useRef<HTMLDivElement>(null);
    useEffect(() => {
      if (!targetRef.current) return;
      const observer = observeAttributes({
        'data-state': value => {
          setLog(prev => [...prev, \`data-state: \${value}\`]);
        }
      }, targetRef.current);
      return () => observer.disconnect();
    }, []);
    return <div className="font-sans space-y-4">
                <div className="flex flex-wrap gap-2">
                    <ToggleAttributeButton attribute="data-state" ref={targetRef} />
                </div>
                <div ref={targetRef} className="p-4 border-2 border-neutral-300 rounded bg-neutral-50 dark:bg-neutral-900">
                    Target element (attribute toggles here)
                </div>
                <LogPanel title="Attribute changes (on target element):" log={log} />
            </div>;
  },
  play: async ({
    canvas
  }) => {
    const btn = canvas.getByRole('button', {
      name: 'Toggle data-state'
    });
    const element = canvas.getByText('Target element (attribute toggles here)');
    await userEvent.click(btn);
    await expect(canvas.getByText('data-state: test-value')).toBeInTheDocument();
    await expect(element.getAttribute('data-state')).toBe('test-value');
    await userEvent.click(btn);
    await expect(canvas.getByText('data-state: null')).toBeInTheDocument();
    await expect(element.getAttribute('data-state')).toBeNull();
  }
}`,...d.parameters?.docs?.source}}};const w=["BasicUsage","WithCustomValues","WithRefTarget"];export{i as BasicUsage,u as WithCustomValues,d as WithRefTarget,w as __namedExportsOrder,B as default};
