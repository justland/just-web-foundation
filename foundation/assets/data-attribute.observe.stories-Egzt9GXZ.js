import{r as i,j as s}from"./iframe-CAUFuzF-.js";import{o as d}from"./data-attribute-CbOnTKor.js";import{L as g}from"./log-panel-DeyGwh2C.js";import{T as b}from"./toggle-attribute-button-BE9ueP-Q.js";import"./preload-helper-PPVm8Dsz.js";import"./get-data-attribute--jGldh73.js";import"./get-attribute-CF0SoFc6.js";import"./observe-data-attribute-C-q0IQD-.js";import"./observe-attribute-DyUhIkyT.js";import"./findKey-D_Zca1Sl.js";const{expect:l,userEvent:r}=__STORYBOOK_MODULE_TEST__,A={title:"theme/observeThemeByDataAttributes",tags:["autodocs","new","version:0.5"]},c={render:()=>{const[t,e]=i.useState([]);return i.useEffect(()=>{const a=d({attributeName:"data-theme",themes:{light:"light",dark:"dark"},handler:n=>e(o=>[...o,`data-theme: ${n===null?"(null)":n}`])});return()=>a.disconnect()},[]),s.jsxs("div",{className:"font-sans",children:[s.jsx("div",{className:"flex flex-wrap gap-2 mb-4",children:s.jsx(b,{attribute:"data-theme",values:["light","dark"]})}),s.jsx(g,{title:"Attribute Changes:",log:t})]})},play:async({canvas:t,step:e})=>{const a=t.getByRole("button",{name:"Toggle data-theme"});await e("null -> light",async()=>{await r.click(a),await l(t.getByText("data-theme: light")).toBeInTheDocument()}),await e("light -> dark",async()=>{await r.click(a),await l(t.getByText("data-theme: dark")).toBeInTheDocument()}),await e("dark -> null",async()=>{await r.click(a),await l(t.getByText("data-theme: (null)")).toBeInTheDocument()})}},u={render:()=>{const[t,e]=i.useState([]);return i.useEffect(()=>{const a=d({themes:{light:"light-theme",dark:"dark-theme"},handler:n=>e(o=>[...o,`data-theme: ${n===null?"(null)":n}`]),attributeName:"data-theme"});return()=>a.disconnect()},[]),s.jsxs("div",{className:"font-sans",children:[s.jsx("div",{className:"flex flex-wrap gap-2 mb-4",children:s.jsx(b,{attribute:"data-theme",values:["light-theme","dark-theme"]})}),s.jsx(g,{title:"Attribute Changes:",log:t})]})},play:async({canvas:t,step:e})=>{const a=t.getByRole("button",{name:"Toggle data-theme"});await e("null -> light",async()=>{await r.click(a),await l(t.getByText("data-theme: light")).toBeInTheDocument()}),await e("light -> dark",async()=>{await r.click(a),await l(t.getByText("data-theme: dark")).toBeInTheDocument()}),await e("dark -> null",async()=>{await r.click(a),await l(t.getByText("data-theme: (null)")).toBeInTheDocument()})}},h={name:"With defaultTheme",render:()=>{const[t,e]=i.useState([]);return i.useEffect(()=>{const a=d({themes:{light:"light",dark:"dark"},handler:n=>e(o=>[...o,`data-theme: ${n===null?"(null)":n}`]),defaultTheme:"light",attributeName:"data-theme"});return()=>a.disconnect()},[]),s.jsxs("div",{className:"font-sans",children:[s.jsx("div",{className:"flex flex-wrap gap-2 mb-4",children:s.jsx(b,{attribute:"data-theme",values:["light","dark"]})}),s.jsx(g,{title:"Attribute Changes:",log:t})]})},play:async({canvas:t,step:e})=>{const a=t.getByRole("button",{name:"Toggle data-theme"});await e("null -> light",async()=>{await r.click(a),await l(t.getByText("data-theme: light")).toBeInTheDocument()}),await e("light -> dark",async()=>{await r.click(a),await l(t.getByText("data-theme: dark")).toBeInTheDocument()}),await e("dark -> light (default)",async()=>{await r.click(a),await l(t.getAllByText("data-theme: light").length).toBe(2)})}},m={name:"With allowCustom",render:()=>{const[t,e]=i.useState([]);return i.useEffect(()=>{const a=d({themes:{light:"light",dark:"dark"},handler:n=>e(o=>[...o,`data-theme: ${n===null?"(null)":n}`]),allowCustom:!0,attributeName:"data-theme"});return()=>a.disconnect()},[]),s.jsxs("div",{className:"font-sans",children:[s.jsx("div",{className:"flex flex-wrap gap-2 mb-4",children:s.jsx(b,{attribute:"data-theme",values:["light","custom"]})}),s.jsx(g,{title:"Attribute Changes:",log:t})]})},play:async({canvas:t,step:e})=>{const a=t.getByRole("button",{name:"Toggle data-theme"});await e("null -> light",async()=>{await r.click(a),await l(t.getByText("data-theme: light")).toBeInTheDocument()}),await e("light -> custom",async()=>{await r.click(a),await l(t.getByText("data-theme: custom")).toBeInTheDocument()})}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
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
}`,...c.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
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
}`,...u.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
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
}`,...h.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
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
}`,...m.parameters?.docs?.source}}};const E=["BasicUsage","WithDifferentAttributeValues","WithDefaultTheme","WithAllowCustom"];export{c as BasicUsage,m as WithAllowCustom,h as WithDefaultTheme,u as WithDifferentAttributeValues,E as __namedExportsOrder,A as default};
