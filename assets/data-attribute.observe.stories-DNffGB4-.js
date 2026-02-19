import{j as s}from"./jsx-dev-runtime-DF-ftqEI.js";import{d as b,r as i}from"./iframe-BRbKEAca.js";import{o as f}from"./attribute-jmTmRs65.js";import{L as v}from"./log-panel-C04tfzEM.js";import{T as d}from"./toggle-attribute-button-DntalEOu.js";import"./preload-helper-PPVm8Dsz.js";import"./globals.ctx-DOXvZQDb.js";const{expect:o,userEvent:u}=__STORYBOOK_MODULE_TEST__,y={title:"utils/observeDataAttribute",tags:["autodocs","version:0.1"]},l={parameters:b({description:{story:"Observes a single data-* attribute change on the document root element."}}),render:()=>{const[e,t]=i.useState([]);return i.useEffect(()=>{const a=f({"data-theme":n=>{t(r=>[...r,`data-theme: ${n}`])}});return()=>a.disconnect()},[]),s.jsxDEV("div",{className:"font-sans",children:[s.jsxDEV("div",{className:"flex flex-wrap gap-2 mb-4",children:s.jsxDEV(d,{attribute:"data-theme"},void 0,!1,{fileName:"/home/runner/work/just-web-foundation/just-web-foundation/libs/css/src/utils/data-attribute.observe.stories.tsx",lineNumber:31,columnNumber:21},void 0)},void 0,!1,{fileName:"/home/runner/work/just-web-foundation/just-web-foundation/libs/css/src/utils/data-attribute.observe.stories.tsx",lineNumber:30,columnNumber:17},void 0),s.jsxDEV(v,{title:"Attribute Changes:",log:e},void 0,!1,{fileName:"/home/runner/work/just-web-foundation/just-web-foundation/libs/css/src/utils/data-attribute.observe.stories.tsx",lineNumber:33,columnNumber:17},void 0)]},void 0,!0,{fileName:"/home/runner/work/just-web-foundation/just-web-foundation/libs/css/src/utils/data-attribute.observe.stories.tsx",lineNumber:29,columnNumber:12},void 0)},play:async({canvas:e})=>{const t=e.getByRole("button",{name:"Toggle data-theme"});await u.click(t),await u.click(t),await o(e.getByText("data-theme: test-value")).toBeInTheDocument(),await o(e.getByText("data-theme: null")).toBeInTheDocument()}},c={parameters:b({description:{story:"Observes multiple attributes simultaneously."}}),render:()=>{const[e,t]=i.useState([]);return i.useEffect(()=>{const a=f({"data-theme":n=>{t(r=>[...r,`data-theme: ${n}`])},"data-color-scheme":n=>{t(r=>[...r,`data-color-scheme: ${n}`])}});return()=>a.disconnect()},[]),s.jsxDEV("div",{className:"font-sans",children:[s.jsxDEV("div",{className:"flex flex-wrap gap-2 mb-4",children:[s.jsxDEV(d,{attribute:"data-theme"},void 0,!1,{fileName:"/home/runner/work/just-web-foundation/just-web-foundation/libs/css/src/utils/data-attribute.observe.stories.tsx",lineNumber:69,columnNumber:21},void 0),s.jsxDEV(d,{attribute:"data-color-scheme"},void 0,!1,{fileName:"/home/runner/work/just-web-foundation/just-web-foundation/libs/css/src/utils/data-attribute.observe.stories.tsx",lineNumber:70,columnNumber:21},void 0)]},void 0,!0,{fileName:"/home/runner/work/just-web-foundation/just-web-foundation/libs/css/src/utils/data-attribute.observe.stories.tsx",lineNumber:68,columnNumber:17},void 0),s.jsxDEV(v,{title:"Attribute Changes:",log:e},void 0,!1,{fileName:"/home/runner/work/just-web-foundation/just-web-foundation/libs/css/src/utils/data-attribute.observe.stories.tsx",lineNumber:72,columnNumber:17},void 0)]},void 0,!0,{fileName:"/home/runner/work/just-web-foundation/just-web-foundation/libs/css/src/utils/data-attribute.observe.stories.tsx",lineNumber:67,columnNumber:12},void 0)},play:async({canvas:e})=>{const t=e.getByRole("button",{name:"Toggle data-theme"});await u.click(t),await u.click(t),await o(e.getByText("data-theme: test-value")).toBeInTheDocument(),await o(e.getByText("data-theme: null")).toBeInTheDocument();const a=e.getByRole("button",{name:"Toggle data-color-scheme"});await u.click(a),await u.click(a),await o(e.getByText("data-color-scheme: test-value")).toBeInTheDocument(),await o(e.getByText("data-color-scheme: null")).toBeInTheDocument()}},m={args:{attributes:["data-theme"],element:"custom"},parameters:b({description:{story:"Observes attribute changes on a custom element instead of the document root."}}),render:()=>{const[e,t]=i.useState([]),a=i.useRef(null);return i.useEffect(()=>{if(!a.current)return;const n=f({"data-theme":r=>{t(g=>[...g,`data-theme: ${r}`])}},a.current);return()=>n.disconnect()},[a]),s.jsxDEV("div",{className:"font-sans",children:[s.jsxDEV("div",{className:"flex flex-wrap gap-2 mb-4",children:s.jsxDEV(d,{attribute:"data-theme",ref:a},void 0,!1,{fileName:"/home/runner/work/just-web-foundation/just-web-foundation/libs/css/src/utils/data-attribute.observe.stories.tsx",lineNumber:118,columnNumber:21},void 0)},void 0,!1,{fileName:"/home/runner/work/just-web-foundation/just-web-foundation/libs/css/src/utils/data-attribute.observe.stories.tsx",lineNumber:117,columnNumber:17},void 0),s.jsxDEV("div",{ref:a,className:"p-4 border border-gray-300 mb-4",children:"Custom Element to observe"},void 0,!1,{fileName:"/home/runner/work/just-web-foundation/just-web-foundation/libs/css/src/utils/data-attribute.observe.stories.tsx",lineNumber:120,columnNumber:17},void 0),s.jsxDEV(v,{title:"Attribute Changes:",log:e},void 0,!1,{fileName:"/home/runner/work/just-web-foundation/just-web-foundation/libs/css/src/utils/data-attribute.observe.stories.tsx",lineNumber:123,columnNumber:17},void 0)]},void 0,!0,{fileName:"/home/runner/work/just-web-foundation/just-web-foundation/libs/css/src/utils/data-attribute.observe.stories.tsx",lineNumber:116,columnNumber:12},void 0)},play:async({canvas:e})=>{const t=e.getByRole("button",{name:"Toggle data-theme"}),a=e.getByText("Custom Element to observe");await u.click(t),await o(e.getByText("data-theme: test-value")).toBeInTheDocument();const n=a.getAttribute("data-theme");await o(n).toBe("test-value"),await u.click(t),await o(e.getByText("data-theme: null")).toBeInTheDocument();const r=a.getAttribute("data-theme");await o(r).toBeNull()}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
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
}`,...m.parameters?.docs?.source}}};const E=["BasicUsage","MultipleAttributes","CustomElement"];export{l as BasicUsage,m as CustomElement,c as MultipleAttributes,E as __namedExportsOrder,y as default};
