import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{t}from"./react-pByjoP3I.js";import{i as n,r}from"./iframe-kL2xsVFS.js";import{n as i,t as a,x as o}from"./jsx-dev-runtime-BnL7LjSC.js";import{n as s,t as c}from"./log-panel-DWXMnUtn.js";import{n as l,t as u}from"./toggle-attribute-button-DCp5tGkC.js";var d,f,p,m,h,g,_,v,y,b;function x(){return(x=e((()=>{n(),d=t(),i(),s(),l(),f=a(),{expect:p,userEvent:m}=__STORYBOOK_MODULE_TEST__,h=`/home/runner/work/just-web-foundation/just-web-foundation/libs/css/src/utils/data-attribute.observe.stories.tsx`,g={title:`utils/observeDataAttribute`,tags:[`autodocs`,`version:0.1`]},_={parameters:r({description:{story:`Observes a single data-* attribute change on the document root element.`}}),render:()=>{let[e,t]=(0,d.useState)([]);return(0,d.useEffect)(()=>{let e=o({"data-theme":e=>{t(t=>[...t,`data-theme: ${e}`])}});return()=>e.disconnect()},[]),(0,f.jsxDEV)(`div`,{className:`font-sans`,children:[(0,f.jsxDEV)(`div`,{className:`flex flex-wrap gap-2 mb-4`,children:(0,f.jsxDEV)(u,{attribute:`data-theme`},void 0,!1,{fileName:h,lineNumber:37,columnNumber:6},void 0)},void 0,!1,{fileName:h,lineNumber:36,columnNumber:5},void 0),(0,f.jsxDEV)(c,{title:`Attribute Changes:`,log:e},void 0,!1,{fileName:h,lineNumber:39,columnNumber:5},void 0)]},void 0,!0,{fileName:h,lineNumber:35,columnNumber:4},void 0)},play:async({canvas:e})=>{let t=e.getByRole(`button`,{name:`Toggle data-theme`});await m.click(t),await m.click(t),await p(e.getByText(`data-theme: test-value`)).toBeInTheDocument(),await p(e.getByText(`data-theme: null`)).toBeInTheDocument()}},v={parameters:r({description:{story:`Observes multiple attributes simultaneously.`}}),render:()=>{let[e,t]=(0,d.useState)([]);return(0,d.useEffect)(()=>{let e=o({"data-theme":e=>{t(t=>[...t,`data-theme: ${e}`])},"data-color-scheme":e=>{t(t=>[...t,`data-color-scheme: ${e}`])}});return()=>e.disconnect()},[]),(0,f.jsxDEV)(`div`,{className:`font-sans`,children:[(0,f.jsxDEV)(`div`,{className:`flex flex-wrap gap-2 mb-4`,children:[(0,f.jsxDEV)(u,{attribute:`data-theme`},void 0,!1,{fileName:h,lineNumber:76,columnNumber:6},void 0),(0,f.jsxDEV)(u,{attribute:`data-color-scheme`},void 0,!1,{fileName:h,lineNumber:77,columnNumber:6},void 0)]},void 0,!0,{fileName:h,lineNumber:75,columnNumber:5},void 0),(0,f.jsxDEV)(c,{title:`Attribute Changes:`,log:e},void 0,!1,{fileName:h,lineNumber:79,columnNumber:5},void 0)]},void 0,!0,{fileName:h,lineNumber:74,columnNumber:4},void 0)},play:async({canvas:e})=>{let t=e.getByRole(`button`,{name:`Toggle data-theme`});await m.click(t),await m.click(t),await p(e.getByText(`data-theme: test-value`)).toBeInTheDocument(),await p(e.getByText(`data-theme: null`)).toBeInTheDocument();let n=e.getByRole(`button`,{name:`Toggle data-color-scheme`});await m.click(n),await m.click(n),await p(e.getByText(`data-color-scheme: test-value`)).toBeInTheDocument(),await p(e.getByText(`data-color-scheme: null`)).toBeInTheDocument()}},y={args:{attributes:[`data-theme`],element:`custom`},parameters:r({description:{story:`Observes attribute changes on a custom element instead of the document root.`}}),render:()=>{let[e,t]=(0,d.useState)([]),n=(0,d.useRef)(null);return(0,d.useEffect)(()=>{if(!n.current)return;let e=o({"data-theme":e=>{t(t=>[...t,`data-theme: ${e}`])}},n.current);return()=>e.disconnect()},[n]),(0,f.jsxDEV)(`div`,{className:`font-sans`,children:[(0,f.jsxDEV)(`div`,{className:`flex flex-wrap gap-2 mb-4`,children:(0,f.jsxDEV)(u,{attribute:`data-theme`,ref:n},void 0,!1,{fileName:h,lineNumber:128,columnNumber:6},void 0)},void 0,!1,{fileName:h,lineNumber:127,columnNumber:5},void 0),(0,f.jsxDEV)(`div`,{ref:n,className:`p-4 border border-gray-300 mb-4`,children:`Custom Element to observe`},void 0,!1,{fileName:h,lineNumber:130,columnNumber:5},void 0),(0,f.jsxDEV)(c,{title:`Attribute Changes:`,log:e},void 0,!1,{fileName:h,lineNumber:133,columnNumber:5},void 0)]},void 0,!0,{fileName:h,lineNumber:126,columnNumber:4},void 0)},play:async({canvas:e})=>{let t=e.getByRole(`button`,{name:`Toggle data-theme`}),n=e.getByText(`Custom Element to observe`);await m.click(t),await p(e.getByText(`data-theme: test-value`)).toBeInTheDocument();let r=n.getAttribute(`data-theme`);await p(r).toBe(`test-value`),await m.click(t),await p(e.getByText(`data-theme: null`)).toBeInTheDocument();let i=n.getAttribute(`data-theme`);await p(i).toBeNull()}},b=[`BasicUsage`,`MultipleAttributes`,`CustomElement`],_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
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
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
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
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
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
}`,...y.parameters?.docs?.source}}}})))()}x();export{_ as BasicUsage,y as CustomElement,v as MultipleAttributes,b as __namedExportsOrder,g as default};