import{r as l,j as s}from"./iframe-CKVYuos1.js";import{o as h}from"./class-name-k9bs-u1H.js";import{L as u}from"./log-panel-BNB6yPiP.js";import{T as m}from"./toggle-attribute-button-B1h-2pgD.js";import"./globals.ctx-DOXvZQDb.js";import"./attribute-BU07dUZA.js";import"./findKey-D_Zca1Sl.js";const{expect:n,userEvent:i}=__STORYBOOK_MODULE_TEST__,A={title:"theme/observeThemeByClassName",tags:["autodocs","new","version:1.0.0"]},o={render:()=>{const[e,t]=l.useState([]);return l.useEffect(()=>{const a=h({themes:{light:"light",dark:"dark"},handler:r=>t(c=>[...c,`theme: ${r===void 0?"(undefined)":r}`])});return()=>a.disconnect()},[]),s.jsxs("div",{className:"font-sans",children:[s.jsx("div",{className:"flex flex-wrap gap-2 mb-4",children:s.jsx(m,{attribute:"class",values:["light","dark"]})}),s.jsx(u,{title:"Attribute Changes:",log:e})]})},play:async({canvas:e,step:t})=>{const a=e.getByRole("button",{name:"Toggle class"});await t("undefined -> light",async()=>{await i.click(a),await n(e.getByText("theme: light")).toBeInTheDocument()}),await t("light -> dark",async()=>{await i.click(a),await n(e.getByText("theme: dark")).toBeInTheDocument()}),await t("dark -> undefined",async()=>{await i.click(a),await n(e.getByText("theme: (undefined)")).toBeInTheDocument()})}},g={render:()=>{const[e,t]=l.useState([]);return l.useEffect(()=>{const a=h({themes:{light:"light-theme",dark:"dark-theme"},handler:r=>t(c=>[...c,`theme: ${r===void 0?"(undefined)":r}`])});return()=>a.disconnect()},[]),s.jsxs("div",{className:"font-sans",children:[s.jsx("div",{className:"flex flex-wrap gap-2 mb-4",children:s.jsx(m,{attribute:"class",values:["light-theme","dark-theme"]})}),s.jsx(u,{title:"Attribute Changes:",log:e})]})},play:async({canvas:e,step:t})=>{const a=e.getByRole("button",{name:"Toggle class"});await t("undefined -> light",async()=>{await i.click(a),await n(e.getByText("theme: light")).toBeInTheDocument()}),await t("light -> dark",async()=>{await i.click(a),await n(e.getByText("theme: dark")).toBeInTheDocument()}),await t("dark -> undefined",async()=>{await i.click(a),await n(e.getByText("theme: (undefined)")).toBeInTheDocument()})}},d={render:()=>{const[e,t]=l.useState([]);return l.useEffect(()=>{const a=h({themes:{light:"light",dark:"dark"},handler:r=>t(c=>[...c,`theme: ${r}`]),defaultTheme:"light"});return()=>a.disconnect()},[]),s.jsxs("div",{className:"font-sans",children:[s.jsx("div",{className:"flex flex-wrap gap-2 mb-4",children:s.jsx(m,{attribute:"class",values:["light","dark"]})}),s.jsx(u,{title:"Attribute Changes:",log:e})]})},play:async({canvas:e,step:t})=>{const a=e.getByRole("button",{name:"Toggle class"});await t("null -> light",async()=>{await i.click(a),await n(e.getByText("theme: light")).toBeInTheDocument()}),await t("light -> dark",async()=>{await i.click(a),await n(e.getByText("theme: dark")).toBeInTheDocument()}),await t("dark -> light (default)",async()=>{await i.click(a),await n(e.getAllByText("theme: light").length).toBe(2)})}};var v,f,p;o.parameters={...o.parameters,docs:{...(v=o.parameters)==null?void 0:v.docs,source:{originalSource:`{
  render: () => {
    const [log, setLog] = useState<string[]>([]);
    useEffect(() => {
      const observer = observeThemeByClassName({
        themes: {
          light: 'light',
          dark: 'dark'
        },
        handler: value => setLog(prev => [...prev, \`theme: \${value === undefined ? '(undefined)' : value}\`])
      });
      return () => observer.disconnect();
    }, []);
    return <div className="font-sans">
                <div className="flex flex-wrap gap-2 mb-4">
                    <ToggleAttributeButton attribute="class" values={['light', 'dark']} />
                </div>
                <LogPanel title="Attribute Changes:" log={log} />
            </div>;
  },
  play: async ({
    canvas,
    step
  }) => {
    const btn = canvas.getByRole('button', {
      name: 'Toggle class'
    });
    await step('undefined -> light', async () => {
      await userEvent.click(btn);
      await expect(canvas.getByText('theme: light')).toBeInTheDocument();
    });
    await step('light -> dark', async () => {
      await userEvent.click(btn);
      await expect(canvas.getByText('theme: dark')).toBeInTheDocument();
    });
    await step('dark -> undefined', async () => {
      await userEvent.click(btn);
      await expect(canvas.getByText('theme: (undefined)')).toBeInTheDocument();
    });
  }
}`,...(p=(f=o.parameters)==null?void 0:f.docs)==null?void 0:p.source}}};var w,b,y;g.parameters={...g.parameters,docs:{...(w=g.parameters)==null?void 0:w.docs,source:{originalSource:`{
  render: () => {
    const [log, setLog] = useState<string[]>([]);
    useEffect(() => {
      const observer = observeThemeByClassName({
        themes: {
          light: 'light-theme',
          dark: 'dark-theme'
        },
        handler: value => setLog(prev => [...prev, \`theme: \${value === undefined ? '(undefined)' : value}\`])
      });
      return () => observer.disconnect();
    }, []);
    return <div className="font-sans">
                <div className="flex flex-wrap gap-2 mb-4">
                    <ToggleAttributeButton attribute="class" values={['light-theme', 'dark-theme']} />
                </div>
                <LogPanel title="Attribute Changes:" log={log} />
            </div>;
  },
  play: async ({
    canvas,
    step
  }) => {
    const btn = canvas.getByRole('button', {
      name: 'Toggle class'
    });
    await step('undefined -> light', async () => {
      await userEvent.click(btn);
      await expect(canvas.getByText('theme: light')).toBeInTheDocument();
    });
    await step('light -> dark', async () => {
      await userEvent.click(btn);
      await expect(canvas.getByText('theme: dark')).toBeInTheDocument();
    });
    await step('dark -> undefined', async () => {
      await userEvent.click(btn);
      await expect(canvas.getByText('theme: (undefined)')).toBeInTheDocument();
    });
  }
}`,...(y=(b=g.parameters)==null?void 0:b.docs)==null?void 0:y.source}}};var x,T,k;d.parameters={...d.parameters,docs:{...(x=d.parameters)==null?void 0:x.docs,source:{originalSource:`{
  render: () => {
    const [log, setLog] = useState<string[]>([]);
    useEffect(() => {
      const observer = observeThemeByClassName({
        themes: {
          light: 'light',
          dark: 'dark'
        },
        handler: value => setLog(prev => [...prev, \`theme: \${value}\`]),
        defaultTheme: 'light'
      });
      return () => observer.disconnect();
    }, []);
    return <div className="font-sans">
                <div className="flex flex-wrap gap-2 mb-4">
                    <ToggleAttributeButton attribute="class" values={['light', 'dark']} />
                </div>
                <LogPanel title="Attribute Changes:" log={log} />
            </div>;
  },
  play: async ({
    canvas,
    step
  }) => {
    const btn = canvas.getByRole('button', {
      name: 'Toggle class'
    });
    await step('null -> light', async () => {
      await userEvent.click(btn);
      await expect(canvas.getByText('theme: light')).toBeInTheDocument();
    });
    await step('light -> dark', async () => {
      await userEvent.click(btn);
      await expect(canvas.getByText('theme: dark')).toBeInTheDocument();
    });
    await step('dark -> light (default)', async () => {
      await userEvent.click(btn);
      await expect(canvas.getAllByText('theme: light').length).toBe(2);
    });
  }
}`,...(k=(T=d.parameters)==null?void 0:T.docs)==null?void 0:k.source}}};const C=["BasicUsage","WithDifferentAttributeValues","WithDefaultTheme"];export{o as BasicUsage,d as WithDefaultTheme,g as WithDifferentAttributeValues,C as __namedExportsOrder,A as default};
