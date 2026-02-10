import{j as n}from"./jsx-dev-runtime-DF-ftqEI.js";import{d,r as u}from"./iframe-BqSU7Mhi.js";import{o as f}from"./attribute-jmTmRs65.js";import{L as v}from"./log-panel-C04tfzEM.js";import"./preload-helper-PPVm8Dsz.js";import"./globals.ctx-DOXvZQDb.js";const{expect:r,userEvent:i}=__STORYBOOK_MODULE_TEST__,B={title:"utils/observeAttributes",tags:["autodocs","version:0.5"]},l={parameters:d({description:{story:"Observes a single attribute change on the document root element."}}),render:()=>{const[e,t]=u.useState([]);return u.useEffect(()=>{const a=f({"data-theme":s=>{t(o=>[...o,`data-theme: ${s}`])}});return()=>a.disconnect()},[]),n.jsxDEV("div",{className:"font-sans",children:[n.jsxDEV("div",{className:"flex flex-wrap gap-2 mb-4",children:n.jsxDEV(b,{attribute:"data-theme"},void 0,!1,{fileName:"/home/runner/work/just-web-foundation/just-web-foundation/libs/css/src/utils/attribute.observe.stories.tsx",lineNumber:30,columnNumber:21},void 0)},void 0,!1,{fileName:"/home/runner/work/just-web-foundation/just-web-foundation/libs/css/src/utils/attribute.observe.stories.tsx",lineNumber:29,columnNumber:17},void 0),n.jsxDEV(v,{title:"Attribute Changes:",log:e},void 0,!1,{fileName:"/home/runner/work/just-web-foundation/just-web-foundation/libs/css/src/utils/attribute.observe.stories.tsx",lineNumber:32,columnNumber:17},void 0)]},void 0,!0,{fileName:"/home/runner/work/just-web-foundation/just-web-foundation/libs/css/src/utils/attribute.observe.stories.tsx",lineNumber:28,columnNumber:12},void 0)},play:async({canvas:e})=>{const t=e.getByRole("button",{name:"Toggle data-theme"});await i.click(t),await i.click(t),await r(e.getByText("data-theme: test-value")).toBeInTheDocument(),await r(e.getByText("data-theme: null")).toBeInTheDocument()}},c={parameters:d({description:{story:"Observes multiple attributes simultaneously."}}),render:()=>{const[e,t]=u.useState([]);return u.useEffect(()=>{const a=f({"data-theme":s=>{t(o=>[...o,`data-theme: ${s}`])},"aria-label":s=>{t(o=>[...o,`aria-label: ${s}`])}});return()=>a.disconnect()},[]),n.jsxDEV("div",{className:"font-sans",children:[n.jsxDEV("div",{className:"flex flex-wrap gap-2 mb-4",children:[n.jsxDEV(b,{attribute:"data-theme"},void 0,!1,{fileName:"/home/runner/work/just-web-foundation/just-web-foundation/libs/css/src/utils/attribute.observe.stories.tsx",lineNumber:68,columnNumber:21},void 0),n.jsxDEV(b,{attribute:"aria-label"},void 0,!1,{fileName:"/home/runner/work/just-web-foundation/just-web-foundation/libs/css/src/utils/attribute.observe.stories.tsx",lineNumber:69,columnNumber:21},void 0)]},void 0,!0,{fileName:"/home/runner/work/just-web-foundation/just-web-foundation/libs/css/src/utils/attribute.observe.stories.tsx",lineNumber:67,columnNumber:17},void 0),n.jsxDEV(v,{title:"Attribute Changes:",log:e},void 0,!1,{fileName:"/home/runner/work/just-web-foundation/just-web-foundation/libs/css/src/utils/attribute.observe.stories.tsx",lineNumber:71,columnNumber:17},void 0)]},void 0,!0,{fileName:"/home/runner/work/just-web-foundation/just-web-foundation/libs/css/src/utils/attribute.observe.stories.tsx",lineNumber:66,columnNumber:12},void 0)},play:async({canvas:e,step:t})=>{const a=e.getByRole("button",{name:"Toggle data-theme"});await t("data-theme",async()=>{await i.click(a),await r(e.getByText("data-theme: test-value")).toBeInTheDocument(),await i.click(a),await r(e.getByText("data-theme: null")).toBeInTheDocument()}),await t("aria-label",async()=>{const s=e.getByRole("button",{name:"Toggle aria-label"});await i.click(s),await i.click(s),await r(e.getByText("aria-label: test-value")).toBeInTheDocument(),await r(e.getByText("aria-label: null")).toBeInTheDocument()})}},m={args:{attributes:["data-theme"],element:"custom"},parameters:d({description:{story:"Observes attribute changes on a custom element instead of the document root."}}),render:()=>{const[e,t]=u.useState([]),a=u.useRef(null);return u.useEffect(()=>{if(!a.current)return;const s=f({"data-theme":o=>{t(g=>[...g,`data-theme: ${o}`])}},a.current);return()=>s.disconnect()},[a]),n.jsxDEV("div",{className:"font-sans",children:[n.jsxDEV("div",{className:"flex flex-wrap gap-2 mb-4",children:n.jsxDEV(b,{attribute:"data-theme",ref:a},void 0,!1,{fileName:"/home/runner/work/just-web-foundation/just-web-foundation/libs/css/src/utils/attribute.observe.stories.tsx",lineNumber:122,columnNumber:21},void 0)},void 0,!1,{fileName:"/home/runner/work/just-web-foundation/just-web-foundation/libs/css/src/utils/attribute.observe.stories.tsx",lineNumber:121,columnNumber:17},void 0),n.jsxDEV("div",{ref:a,className:"p-4 border border-gray-300 mb-4",children:"Custom Element to observe"},void 0,!1,{fileName:"/home/runner/work/just-web-foundation/just-web-foundation/libs/css/src/utils/attribute.observe.stories.tsx",lineNumber:124,columnNumber:17},void 0),n.jsxDEV(v,{title:"Attribute Changes:",log:e},void 0,!1,{fileName:"/home/runner/work/just-web-foundation/just-web-foundation/libs/css/src/utils/attribute.observe.stories.tsx",lineNumber:127,columnNumber:17},void 0)]},void 0,!0,{fileName:"/home/runner/work/just-web-foundation/just-web-foundation/libs/css/src/utils/attribute.observe.stories.tsx",lineNumber:120,columnNumber:12},void 0)},play:async({canvas:e})=>{const t=e.getByRole("button",{name:"Toggle data-theme"}),a=e.getByText("Custom Element to observe");await i.click(t),await r(e.getByText("data-theme: test-value")).toBeInTheDocument();const s=a.getAttribute("data-theme");await r(s).toBe("test-value"),await i.click(t),await r(e.getByText("data-theme: null")).toBeInTheDocument();const o=a.getAttribute("data-theme");await r(o).toBeNull()}},b=u.forwardRef(({attribute:e},t)=>{const a=u.useCallback(s=>{const o=(t&&"current"in t?t.current:null)??document.documentElement,h=o.getAttribute(s)?null:"test-value";h===null?o.removeAttribute(s):o.setAttribute(s,h)},[t]);return n.jsxDEV("button",{className:"bg-cyan-700 text-white px-4 py-2 rounded-md shadow-md active:bg-cyan-800",onClick:()=>a(e),children:["Toggle ",e]},e,!0,{fileName:"/home/runner/work/just-web-foundation/just-web-foundation/libs/css/src/utils/attribute.observe.stories.tsx",lineNumber:163,columnNumber:10},void 0)});l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
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
}`,...l.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
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
}`,...c.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
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
}`,...m.parameters?.docs?.source}}};const E=["BasicUsage","MultipleAttributes","CustomElement"];export{l as BasicUsage,m as CustomElement,c as MultipleAttributes,E as __namedExportsOrder,B as default};
