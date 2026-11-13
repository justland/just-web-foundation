import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{t}from"./react-pByjoP3I.js";import{n,p as r,t as i}from"./jsx-dev-runtime-BnL7LjSC.js";import{n as a,t as o}from"./log-panel-DWXMnUtn.js";import{n as s,t as c}from"./toggle-attribute-button-DCp5tGkC.js";var l,u,d,f,p,m,h,g,_,v,y;function b(){return(b=e((()=>{l=t(),n(),a(),s(),u=i(),{expect:d,userEvent:f}=__STORYBOOK_MODULE_TEST__,p=`/home/runner/work/just-web-foundation/just-web-foundation/libs/css/src/theme/data-attribute.observe.stories.tsx`,m={title:`theme/observeThemeByDataAttributes`,tags:[`autodocs`,`new`,`version:0.5`]},h={render:()=>{let[e,t]=(0,l.useState)([]);return(0,l.useEffect)(()=>{let e=r({attributeName:`data-theme`,themes:{light:`light`,dark:`dark`},handler:e=>t(t=>[...t,`data-theme: ${e===null?`(null)`:e}`])});return()=>e.disconnect()},[]),(0,u.jsxDEV)(`div`,{className:`font-sans`,children:[(0,u.jsxDEV)(`div`,{className:`flex flex-wrap gap-2 mb-4`,children:(0,u.jsxDEV)(c,{attribute:`data-theme`,values:[`light`,`dark`]},void 0,!1,{fileName:p,lineNumber:37,columnNumber:6},void 0)},void 0,!1,{fileName:p,lineNumber:36,columnNumber:5},void 0),(0,u.jsxDEV)(o,{title:`Attribute Changes:`,log:e},void 0,!1,{fileName:p,lineNumber:39,columnNumber:5},void 0)]},void 0,!0,{fileName:p,lineNumber:35,columnNumber:4},void 0)},play:async({canvas:e,step:t})=>{let n=e.getByRole(`button`,{name:`Toggle data-theme`});await t(`null -> light`,async()=>{await f.click(n),await d(e.getByText(`data-theme: light`)).toBeInTheDocument()}),await t(`light -> dark`,async()=>{await f.click(n),await d(e.getByText(`data-theme: dark`)).toBeInTheDocument()}),await t(`dark -> null`,async()=>{await f.click(n),await d(e.getByText(`data-theme: (null)`)).toBeInTheDocument()})}},g={render:()=>{let[e,t]=(0,l.useState)([]);return(0,l.useEffect)(()=>{let e=r({themes:{light:`light-theme`,dark:`dark-theme`},handler:e=>t(t=>[...t,`data-theme: ${e===null?`(null)`:e}`]),attributeName:`data-theme`});return()=>e.disconnect()},[]),(0,u.jsxDEV)(`div`,{className:`font-sans`,children:[(0,u.jsxDEV)(`div`,{className:`flex flex-wrap gap-2 mb-4`,children:(0,u.jsxDEV)(c,{attribute:`data-theme`,values:[`light-theme`,`dark-theme`]},void 0,!1,{fileName:p,lineNumber:82,columnNumber:6},void 0)},void 0,!1,{fileName:p,lineNumber:81,columnNumber:5},void 0),(0,u.jsxDEV)(o,{title:`Attribute Changes:`,log:e},void 0,!1,{fileName:p,lineNumber:84,columnNumber:5},void 0)]},void 0,!0,{fileName:p,lineNumber:80,columnNumber:4},void 0)},play:async({canvas:e,step:t})=>{let n=e.getByRole(`button`,{name:`Toggle data-theme`});await t(`null -> light`,async()=>{await f.click(n),await d(e.getByText(`data-theme: light`)).toBeInTheDocument()}),await t(`light -> dark`,async()=>{await f.click(n),await d(e.getByText(`data-theme: dark`)).toBeInTheDocument()}),await t(`dark -> null`,async()=>{await f.click(n),await d(e.getByText(`data-theme: (null)`)).toBeInTheDocument()})}},_={name:`With defaultTheme`,render:()=>{let[e,t]=(0,l.useState)([]);return(0,l.useEffect)(()=>{let e=r({themes:{light:`light`,dark:`dark`},handler:e=>t(t=>[...t,`data-theme: ${e===null?`(null)`:e}`]),defaultTheme:`light`,attributeName:`data-theme`});return()=>e.disconnect()},[]),(0,u.jsxDEV)(`div`,{className:`font-sans`,children:[(0,u.jsxDEV)(`div`,{className:`flex flex-wrap gap-2 mb-4`,children:(0,u.jsxDEV)(c,{attribute:`data-theme`,values:[`light`,`dark`]},void 0,!1,{fileName:p,lineNumber:129,columnNumber:6},void 0)},void 0,!1,{fileName:p,lineNumber:128,columnNumber:5},void 0),(0,u.jsxDEV)(o,{title:`Attribute Changes:`,log:e},void 0,!1,{fileName:p,lineNumber:131,columnNumber:5},void 0)]},void 0,!0,{fileName:p,lineNumber:127,columnNumber:4},void 0)},play:async({canvas:e,step:t})=>{let n=e.getByRole(`button`,{name:`Toggle data-theme`});await t(`null -> light`,async()=>{await f.click(n),await d(e.getByText(`data-theme: light`)).toBeInTheDocument()}),await t(`light -> dark`,async()=>{await f.click(n),await d(e.getByText(`data-theme: dark`)).toBeInTheDocument()}),await t(`dark -> light (default)`,async()=>{await f.click(n),await d(e.getAllByText(`data-theme: light`).length).toBe(2)})}},v={name:`With allowCustom`,render:()=>{let[e,t]=(0,l.useState)([]);return(0,l.useEffect)(()=>{let e=r({themes:{light:`light`,dark:`dark`},handler:e=>t(t=>[...t,`data-theme: ${e===null?`(null)`:e}`]),allowCustom:!0,attributeName:`data-theme`});return()=>e.disconnect()},[]),(0,u.jsxDEV)(`div`,{className:`font-sans`,children:[(0,u.jsxDEV)(`div`,{className:`flex flex-wrap gap-2 mb-4`,children:(0,u.jsxDEV)(c,{attribute:`data-theme`,values:[`light`,`custom`]},void 0,!1,{fileName:p,lineNumber:176,columnNumber:6},void 0)},void 0,!1,{fileName:p,lineNumber:175,columnNumber:5},void 0),(0,u.jsxDEV)(o,{title:`Attribute Changes:`,log:e},void 0,!1,{fileName:p,lineNumber:178,columnNumber:5},void 0)]},void 0,!0,{fileName:p,lineNumber:174,columnNumber:4},void 0)},play:async({canvas:e,step:t})=>{let n=e.getByRole(`button`,{name:`Toggle data-theme`});await t(`null -> light`,async()=>{await f.click(n),await d(e.getByText(`data-theme: light`)).toBeInTheDocument()}),await t(`light -> custom`,async()=>{await f.click(n),await d(e.getByText(`data-theme: custom`)).toBeInTheDocument()})}},y=[`BasicUsage`,`WithDifferentAttributeValues`,`WithDefaultTheme`,`WithAllowCustom`],h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [log, setLog] = useState<string[]>([]);
    useEffect(() => {
      const observer = observeThemeByDataAttributes({
        attributeName: 'data-theme',
        themes: {
          light: 'light',
          dark: 'dark'
        },
        handler: value => setLog(prev => [...prev, \`data-theme: \${value === null ? '(null)' : value}\`])
      });
      return () => observer.disconnect();
    }, []);
    return <div className="font-sans">
                <div className="flex flex-wrap gap-2 mb-4">
                    <ToggleAttributeButton attribute="data-theme" values={['light', 'dark']} />
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
    await step('null -> light', async () => {
      await userEvent.click(btn);
      await expect(canvas.getByText('data-theme: light')).toBeInTheDocument();
    });
    await step('light -> dark', async () => {
      await userEvent.click(btn);
      await expect(canvas.getByText('data-theme: dark')).toBeInTheDocument();
    });
    await step('dark -> null', async () => {
      await userEvent.click(btn);
      await expect(canvas.getByText('data-theme: (null)')).toBeInTheDocument();
    });
  }
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [log, setLog] = useState<string[]>([]);
    useEffect(() => {
      const observer = observeThemeByDataAttributes({
        themes: {
          light: 'light-theme',
          dark: 'dark-theme'
        },
        handler: value => setLog(prev => [...prev, \`data-theme: \${value === null ? '(null)' : value}\`]),
        attributeName: 'data-theme'
      });
      return () => observer.disconnect();
    }, []);
    return <div className="font-sans">
                <div className="flex flex-wrap gap-2 mb-4">
                    <ToggleAttributeButton attribute="data-theme" values={['light-theme', 'dark-theme']} />
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
    await step('null -> light', async () => {
      await userEvent.click(btn);
      await expect(canvas.getByText('data-theme: light')).toBeInTheDocument();
    });
    await step('light -> dark', async () => {
      await userEvent.click(btn);
      await expect(canvas.getByText('data-theme: dark')).toBeInTheDocument();
    });
    await step('dark -> null', async () => {
      await userEvent.click(btn);
      await expect(canvas.getByText('data-theme: (null)')).toBeInTheDocument();
    });
  }
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  name: 'With defaultTheme',
  render: () => {
    const [log, setLog] = useState<string[]>([]);
    useEffect(() => {
      const observer = observeThemeByDataAttributes({
        themes: {
          light: 'light',
          dark: 'dark'
        },
        handler: value => setLog(prev => [...prev, \`data-theme: \${value === null ? '(null)' : value}\`]),
        defaultTheme: 'light',
        attributeName: 'data-theme'
      });
      return () => observer.disconnect();
    }, []);
    return <div className="font-sans">
                <div className="flex flex-wrap gap-2 mb-4">
                    <ToggleAttributeButton attribute="data-theme" values={['light', 'dark']} />
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
    await step('null -> light', async () => {
      await userEvent.click(btn);
      await expect(canvas.getByText('data-theme: light')).toBeInTheDocument();
    });
    await step('light -> dark', async () => {
      await userEvent.click(btn);
      await expect(canvas.getByText('data-theme: dark')).toBeInTheDocument();
    });
    await step('dark -> light (default)', async () => {
      await userEvent.click(btn);
      await expect(canvas.getAllByText('data-theme: light').length).toBe(2);
    });
  }
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  name: 'With allowCustom',
  render: () => {
    const [log, setLog] = useState<string[]>([]);
    useEffect(() => {
      const observer = observeThemeByDataAttributes({
        themes: {
          light: 'light',
          dark: 'dark'
        },
        handler: value => setLog(prev => [...prev, \`data-theme: \${value === null ? '(null)' : value}\`]),
        allowCustom: true,
        attributeName: 'data-theme'
      });
      return () => observer.disconnect();
    }, []);
    return <div className="font-sans">
                <div className="flex flex-wrap gap-2 mb-4">
                    <ToggleAttributeButton attribute="data-theme" values={['light', 'custom']} />
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
    await step('null -> light', async () => {
      await userEvent.click(btn);
      await expect(canvas.getByText('data-theme: light')).toBeInTheDocument();
    });
    await step('light -> custom', async () => {
      await userEvent.click(btn);
      await expect(canvas.getByText('data-theme: custom')).toBeInTheDocument();
    });
  }
}`,...v.parameters?.docs?.source}}}})))()}b();export{h as BasicUsage,v as WithAllowCustom,_ as WithDefaultTheme,g as WithDifferentAttributeValues,y as __namedExportsOrder,m as default};