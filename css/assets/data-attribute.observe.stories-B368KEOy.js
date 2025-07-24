import{r as l,j as s}from"./iframe-CKVYuos1.js";import{d as g}from"./define_docs_param-lmgaBKCF.js";import{o as b}from"./attribute-BU07dUZA.js";import{L as h}from"./log-panel-BNB6yPiP.js";import{T as d}from"./toggle-attribute-button-B1h-2pgD.js";import"./globals.ctx-DOXvZQDb.js";const{expect:o,userEvent:c}=__STORYBOOK_MODULE_TEST__,N={title:"utils/observeDataAttribute",tags:["autodocs","new","version:1.0.0"]},m={parameters:g({description:{story:"Observes a single data-* attribute change on the document root element."}}),render:()=>{const[e,t]=l.useState([]);return l.useEffect(()=>{const a=b({"data-theme":r=>{t(n=>[...n,`data-theme: ${r}`])}});return()=>a.disconnect()},[]),s.jsxs("div",{className:"font-sans",children:[s.jsx("div",{className:"flex flex-wrap gap-2 mb-4",children:s.jsx(d,{attribute:"data-theme"})}),s.jsx(h,{title:"Attribute Changes:",log:e})]})},play:async({canvas:e})=>{const t=e.getByRole("button",{name:"Toggle data-theme"});await c.click(t),await c.click(t),await o(e.getByText("data-theme: test-value")).toBeInTheDocument(),await o(e.getByText("data-theme: null")).toBeInTheDocument()}},i={parameters:g({description:{story:"Observes multiple attributes simultaneously."}}),render:()=>{const[e,t]=l.useState([]);return l.useEffect(()=>{const a=b({"data-theme":r=>{t(n=>[...n,`data-theme: ${r}`])},"data-color-scheme":r=>{t(n=>[...n,`data-color-scheme: ${r}`])}});return()=>a.disconnect()},[]),s.jsxs("div",{className:"font-sans",children:[s.jsxs("div",{className:"flex flex-wrap gap-2 mb-4",children:[s.jsx(d,{attribute:"data-theme"}),s.jsx(d,{attribute:"data-color-scheme"})]}),s.jsx(h,{title:"Attribute Changes:",log:e})]})},play:async({canvas:e})=>{const t=e.getByRole("button",{name:"Toggle data-theme"});await c.click(t),await c.click(t),await o(e.getByText("data-theme: test-value")).toBeInTheDocument(),await o(e.getByText("data-theme: null")).toBeInTheDocument();const a=e.getByRole("button",{name:"Toggle data-color-scheme"});await c.click(a),await c.click(a),await o(e.getByText("data-color-scheme: test-value")).toBeInTheDocument(),await o(e.getByText("data-color-scheme: null")).toBeInTheDocument()}},u={args:{attributes:["data-theme"],element:"custom"},parameters:g({description:{story:"Observes attribute changes on a custom element instead of the document root."}}),render:()=>{const[e,t]=l.useState([]),a=l.useRef(null);return l.useEffect(()=>{if(!a.current)return;const r=b({"data-theme":n=>{t(D=>[...D,`data-theme: ${n}`])}},a.current);return()=>r.disconnect()},[a]),s.jsxs("div",{className:"font-sans",children:[s.jsx("div",{className:"flex flex-wrap gap-2 mb-4",children:s.jsx(d,{attribute:"data-theme",ref:a})}),s.jsx("div",{ref:a,className:"p-4 border border-gray-300 mb-4",children:"Custom Element to observe"}),s.jsx(h,{title:"Attribute Changes:",log:e})]})},play:async({canvas:e})=>{const t=e.getByRole("button",{name:"Toggle data-theme"}),a=e.getByText("Custom Element to observe");await c.click(t),await o(e.getByText("data-theme: test-value")).toBeInTheDocument();const r=a.getAttribute("data-theme");await o(r).toBe("test-value"),await c.click(t),await o(e.getByText("data-theme: null")).toBeInTheDocument();const n=a.getAttribute("data-theme");await o(n).toBeNull()}};var v,p,x;m.parameters={...m.parameters,docs:{...(v=m.parameters)==null?void 0:v.docs,source:{originalSource:`{
  parameters: defineDocsParam({
    description: {
      story: 'Observes a single data-* attribute change on the document root element.'
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
}`,...(x=(p=m.parameters)==null?void 0:p.docs)==null?void 0:x.source}}};var T,f,B;i.parameters={...i.parameters,docs:{...(T=i.parameters)==null?void 0:T.docs,source:{originalSource:`{
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
    canvas
  }) => {
    const btn = canvas.getByRole('button', {
      name: 'Toggle data-theme'
    });
    await userEvent.click(btn);
    await userEvent.click(btn);
    await expect(canvas.getByText('data-theme: test-value')).toBeInTheDocument();
    await expect(canvas.getByText('data-theme: null')).toBeInTheDocument();
    const btn2 = canvas.getByRole('button', {
      name: 'Toggle data-color-scheme'
    });
    await userEvent.click(btn2);
    await userEvent.click(btn2);
    await expect(canvas.getByText('data-color-scheme: test-value')).toBeInTheDocument();
    await expect(canvas.getByText('data-color-scheme: null')).toBeInTheDocument();
  }
}`,...(B=(f=i.parameters)==null?void 0:f.docs)==null?void 0:B.source}}};var y,w,E;u.parameters={...u.parameters,docs:{...(y=u.parameters)==null?void 0:y.docs,source:{originalSource:`{
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
}`,...(E=(w=u.parameters)==null?void 0:w.docs)==null?void 0:E.source}}};const C=["BasicUsage","MultipleAttributes","CustomElement"];export{m as BasicUsage,u as CustomElement,i as MultipleAttributes,C as __namedExportsOrder,N as default};
