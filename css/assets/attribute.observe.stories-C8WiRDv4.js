import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./react-B6tGW3fj.js";import{i as n,r}from"./iframe-BDaPsrZE.js";import{r as i}from"./attribute-D1JpzU2R.js";import{r as a}from"./dist--pxey9Hb.js";import{t as o}from"./jsx-dev-runtime-DpMrmGJR.js";import{n as s,t as c}from"./log-panel-B2zMZsCA.js";var l,u,d,f,p,m,h,g,_,v,y;function b(){return(b=e((()=>{n(),l=t(),a(),s(),u=o(),{expect:d,userEvent:f}=__STORYBOOK_MODULE_TEST__,p=`/home/runner/work/just-web-foundation/just-web-foundation/libs/css/src/utils/attribute.observe.stories.tsx`,m={title:`utils/observeAttributes`,tags:[`autodocs`,`version:0.5`]},h={parameters:r({description:{story:`Observes a single attribute change on the document root element.`}}),render:()=>{let[e,t]=(0,l.useState)([]);return(0,l.useEffect)(()=>{let e=i({"data-theme":e=>{t(t=>[...t,`data-theme: ${e}`])}});return()=>e.disconnect()},[]),(0,u.jsxDEV)(`div`,{className:`font-sans`,children:[(0,u.jsxDEV)(`div`,{className:`flex flex-wrap gap-2 mb-4`,children:(0,u.jsxDEV)(v,{attribute:`data-theme`},void 0,!1,{fileName:p,lineNumber:30,columnNumber:21},void 0)},void 0,!1,{fileName:p,lineNumber:29,columnNumber:17},void 0),(0,u.jsxDEV)(c,{title:`Attribute Changes:`,log:e},void 0,!1,{fileName:p,lineNumber:32,columnNumber:17},void 0)]},void 0,!0,{fileName:p,lineNumber:28,columnNumber:12},void 0)},play:async({canvas:e})=>{let t=e.getByRole(`button`,{name:`Toggle data-theme`});await f.click(t),await f.click(t),await d(e.getByText(`data-theme: test-value`)).toBeInTheDocument(),await d(e.getByText(`data-theme: null`)).toBeInTheDocument()}},g={parameters:r({description:{story:`Observes multiple attributes simultaneously.`}}),render:()=>{let[e,t]=(0,l.useState)([]);return(0,l.useEffect)(()=>{let e=i({"data-theme":e=>{t(t=>[...t,`data-theme: ${e}`])},"aria-label":e=>{t(t=>[...t,`aria-label: ${e}`])}});return()=>e.disconnect()},[]),(0,u.jsxDEV)(`div`,{className:`font-sans`,children:[(0,u.jsxDEV)(`div`,{className:`flex flex-wrap gap-2 mb-4`,children:[(0,u.jsxDEV)(v,{attribute:`data-theme`},void 0,!1,{fileName:p,lineNumber:68,columnNumber:21},void 0),(0,u.jsxDEV)(v,{attribute:`aria-label`},void 0,!1,{fileName:p,lineNumber:69,columnNumber:21},void 0)]},void 0,!0,{fileName:p,lineNumber:67,columnNumber:17},void 0),(0,u.jsxDEV)(c,{title:`Attribute Changes:`,log:e},void 0,!1,{fileName:p,lineNumber:71,columnNumber:17},void 0)]},void 0,!0,{fileName:p,lineNumber:66,columnNumber:12},void 0)},play:async({canvas:e,step:t})=>{let n=e.getByRole(`button`,{name:`Toggle data-theme`});await t(`data-theme`,async()=>{await f.click(n),await d(e.getByText(`data-theme: test-value`)).toBeInTheDocument(),await f.click(n),await d(e.getByText(`data-theme: null`)).toBeInTheDocument()}),await t(`aria-label`,async()=>{let t=e.getByRole(`button`,{name:`Toggle aria-label`});await f.click(t),await f.click(t),await d(e.getByText(`aria-label: test-value`)).toBeInTheDocument(),await d(e.getByText(`aria-label: null`)).toBeInTheDocument()})}},_={args:{attributes:[`data-theme`],element:`custom`},parameters:r({description:{story:`Observes attribute changes on a custom element instead of the document root.`}}),render:()=>{let[e,t]=(0,l.useState)([]),n=(0,l.useRef)(null);return(0,l.useEffect)(()=>{if(!n.current)return;let e=i({"data-theme":e=>{t(t=>[...t,`data-theme: ${e}`])}},n.current);return()=>e.disconnect()},[n]),(0,u.jsxDEV)(`div`,{className:`font-sans`,children:[(0,u.jsxDEV)(`div`,{className:`flex flex-wrap gap-2 mb-4`,children:(0,u.jsxDEV)(v,{attribute:`data-theme`,ref:n},void 0,!1,{fileName:p,lineNumber:122,columnNumber:21},void 0)},void 0,!1,{fileName:p,lineNumber:121,columnNumber:17},void 0),(0,u.jsxDEV)(`div`,{ref:n,className:`p-4 border border-gray-300 mb-4`,children:`Custom Element to observe`},void 0,!1,{fileName:p,lineNumber:124,columnNumber:17},void 0),(0,u.jsxDEV)(c,{title:`Attribute Changes:`,log:e},void 0,!1,{fileName:p,lineNumber:127,columnNumber:17},void 0)]},void 0,!0,{fileName:p,lineNumber:120,columnNumber:12},void 0)},play:async({canvas:e})=>{let t=e.getByRole(`button`,{name:`Toggle data-theme`}),n=e.getByText(`Custom Element to observe`);await f.click(t),await d(e.getByText(`data-theme: test-value`)).toBeInTheDocument();let r=n.getAttribute(`data-theme`);await d(r).toBe(`test-value`),await f.click(t),await d(e.getByText(`data-theme: null`)).toBeInTheDocument();let i=n.getAttribute(`data-theme`);await d(i).toBeNull()}},v=(0,l.forwardRef)(({attribute:e},t)=>{let n=(0,l.useCallback)(e=>{let n=(t&&`current`in t?t.current:null)??document.documentElement,r=n.getAttribute(e)?null:`test-value`;r===null?n.removeAttribute(e):n.setAttribute(e,r)},[t]);return(0,u.jsxDEV)(`button`,{className:`bg-cyan-700 text-white px-4 py-2 rounded-md shadow-md active:bg-cyan-800`,onClick:()=>n(e),children:[`Toggle `,e]},e,!0,{fileName:p,lineNumber:163,columnNumber:10},void 0)}),h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
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
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
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
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
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
}`,..._.parameters?.docs?.source}}},y=[`BasicUsage`,`MultipleAttributes`,`CustomElement`]})))()}b();export{h as BasicUsage,_ as CustomElement,g as MultipleAttributes,y as __namedExportsOrder,m as default};