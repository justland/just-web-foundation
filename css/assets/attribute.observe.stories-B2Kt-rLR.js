import{j as n}from"./jsx-runtime-Cf8x2fCZ.js";import{d as g}from"./define_docs_param-lmgaBKCF.js";import{u as c,e as o}from"./index-Ba_wKnRg.js";import{r as l}from"./index-tvICUrOf.js";import{o as b}from"./attribute-BU07dUZA.js";import{L as h}from"./log-panel-CxuVPIAx.js";import"./index-yBjzXJbu.js";import"./globals.ctx-DOXvZQDb.js";const P={title:"utils/observeAttributes",tags:["autodocs","new","version:1.0.0"]},i={parameters:g({description:{story:"Observes a single attribute change on the document root element."}}),render:()=>{const[e,t]=l.useState([]);return l.useEffect(()=>{const a=b({"data-theme":s=>{t(r=>[...r,`data-theme: ${s}`])}});return()=>a.disconnect()},[]),n.jsxs("div",{className:"font-sans",children:[n.jsx("div",{className:"flex flex-wrap gap-2 mb-4",children:n.jsx(d,{attribute:"data-theme"})}),n.jsx(h,{title:"Attribute Changes:",log:e})]})},play:async({canvas:e})=>{const t=e.getByRole("button",{name:"Toggle data-theme"});await c.click(t),await c.click(t),await o(e.getByText("data-theme: test-value")).toBeInTheDocument(),await o(e.getByText("data-theme: null")).toBeInTheDocument()}},u={parameters:g({description:{story:"Observes multiple attributes simultaneously."}}),render:()=>{const[e,t]=l.useState([]);return l.useEffect(()=>{const a=b({"data-theme":s=>{t(r=>[...r,`data-theme: ${s}`])},"aria-label":s=>{t(r=>[...r,`aria-label: ${s}`])}});return()=>a.disconnect()},[]),n.jsxs("div",{className:"font-sans",children:[n.jsxs("div",{className:"flex flex-wrap gap-2 mb-4",children:[n.jsx(d,{attribute:"data-theme"}),n.jsx(d,{attribute:"aria-label"})]}),n.jsx(h,{title:"Attribute Changes:",log:e})]})},play:async({canvas:e,step:t})=>{const a=e.getByRole("button",{name:"Toggle data-theme"});await t("data-theme",async()=>{await c.click(a),await o(e.getByText("data-theme: test-value")).toBeInTheDocument(),await c.click(a),await o(e.getByText("data-theme: null")).toBeInTheDocument()}),await t("aria-label",async()=>{const s=e.getByRole("button",{name:"Toggle aria-label"});await c.click(s),await c.click(s),await o(e.getByText("aria-label: test-value")).toBeInTheDocument(),await o(e.getByText("aria-label: null")).toBeInTheDocument()})}},m={args:{attributes:["data-theme"],element:"custom"},parameters:g({description:{story:"Observes attribute changes on a custom element instead of the document root."}}),render:()=>{const[e,t]=l.useState([]),a=l.useRef(null);return l.useEffect(()=>{if(!a.current)return;const s=b({"data-theme":r=>{t(v=>[...v,`data-theme: ${r}`])}},a.current);return()=>s.disconnect()},[a]),n.jsxs("div",{className:"font-sans",children:[n.jsx("div",{className:"flex flex-wrap gap-2 mb-4",children:n.jsx(d,{attribute:"data-theme",ref:a})}),n.jsx("div",{ref:a,className:"p-4 border border-gray-300 mb-4",children:"Custom Element to observe"}),n.jsx(h,{title:"Attribute Changes:",log:e})]})},play:async({canvas:e})=>{const t=e.getByRole("button",{name:"Toggle data-theme"}),a=e.getByText("Custom Element to observe");await c.click(t),await o(e.getByText("data-theme: test-value")).toBeInTheDocument();const s=a.getAttribute("data-theme");await o(s).toBe("test-value"),await c.click(t),await o(e.getByText("data-theme: null")).toBeInTheDocument();const r=a.getAttribute("data-theme");await o(r).toBeNull()}},d=l.forwardRef(({attribute:e},t)=>{const a=l.useCallback(s=>{const r=(t&&"current"in t?t.current:null)??document.documentElement,p=r.getAttribute(s)?null:"test-value";p===null?r.removeAttribute(s):r.setAttribute(s,p)},[t]);return n.jsxs("button",{className:"bg-cyan-700 text-white px-4 py-2 rounded-md shadow-md active:bg-cyan-800",onClick:()=>a(e),children:["Toggle ",e]},e)});var x,f,y;i.parameters={...i.parameters,docs:{...(x=i.parameters)==null?void 0:x.docs,source:{originalSource:`{
  parameters: defineDocsParam({
    description: {
      story: 'Observes a single attribute change on the document root element.'
    }
  }),
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
    return <div className="font-sans">
                <div className="flex flex-wrap gap-2 mb-4">
                    <ToggleButton attribute="data-theme" />
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
}`,...(y=(f=i.parameters)==null?void 0:f.docs)==null?void 0:y.source}}};var T,B,w;u.parameters={...u.parameters,docs:{...(T=u.parameters)==null?void 0:T.docs,source:{originalSource:`{
  parameters: defineDocsParam({
    description: {
      story: 'Observes multiple attributes simultaneously.'
    }
  }),
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
}`,...(w=(B=u.parameters)==null?void 0:B.docs)==null?void 0:w.source}}};var E,A,D;m.parameters={...m.parameters,docs:{...(E=m.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {
    attributes: ['data-theme'],
    element: 'custom'
  },
  parameters: defineDocsParam({
    description: {
      story: 'Observes attribute changes on a custom element instead of the document root.'
    }
  }),
  render: () => {
    const [log, setLog] = useState<string[]>([]);
    const customElementRef = useRef<HTMLDivElement>(null);
    useEffect(() => {
      if (!customElementRef.current) return;
      const observer = observeAttributes({
        'data-theme': value => {
          setLog(prev => [...prev, \`data-theme: \${value}\`]);
        }
      }, customElementRef.current);
      return () => observer.disconnect();
    }, [customElementRef]);
    return <div className="font-sans">
                <div className="flex flex-wrap gap-2 mb-4">
                    <ToggleButton attribute="data-theme" ref={customElementRef} />
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
}`,...(D=(A=m.parameters)==null?void 0:A.docs)==null?void 0:D.source}}};const $=["BasicUsage","MultipleAttributes","CustomElement"];export{i as BasicUsage,m as CustomElement,u as MultipleAttributes,$ as __namedExportsOrder,P as default};
