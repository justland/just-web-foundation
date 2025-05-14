import{j as s}from"./jsx-runtime-Cf8x2fCZ.js";import{u as n,e as r}from"./index-Ba_wKnRg.js";import{r as i}from"./index-tvICUrOf.js";import{o as m}from"./data-attribute-DHS3S8Jq.js";import{L as d}from"./log-panel-CxuVPIAx.js";import{T as g}from"./toggle-attribute-button-DukOkvN5.js";import"./index-yBjzXJbu.js";import"./data-attribute-CxYa4EAQ.js";import"./globals.ctx-DOXvZQDb.js";import"./attribute-BU07dUZA.js";import"./findKey-D_Zca1Sl.js";const $={title:"theme/observeThemeByDataAttributes",tags:["autodocs","new","version:1.0.0"]},c={render:()=>{const[t,e]=i.useState([]);return i.useEffect(()=>{const a=m({attributeName:"data-theme",themes:{light:"light",dark:"dark"},handler:l=>e(o=>[...o,`data-theme: ${l===null?"(null)":l}`])});return()=>a.disconnect()},[]),s.jsxs("div",{className:"font-sans",children:[s.jsx("div",{className:"flex flex-wrap gap-2 mb-4",children:s.jsx(g,{attribute:"data-theme",values:["light","dark"]})}),s.jsx(d,{title:"Attribute Changes:",log:t})]})},play:async({canvas:t,step:e})=>{const a=t.getByRole("button",{name:"Toggle data-theme"});await e("null -> light",async()=>{await n.click(a),await r(t.getByText("data-theme: light")).toBeInTheDocument()}),await e("light -> dark",async()=>{await n.click(a),await r(t.getByText("data-theme: dark")).toBeInTheDocument()}),await e("dark -> null",async()=>{await n.click(a),await r(t.getByText("data-theme: (null)")).toBeInTheDocument()})}},h={render:()=>{const[t,e]=i.useState([]);return i.useEffect(()=>{const a=m({themes:{light:"light-theme",dark:"dark-theme"},handler:l=>e(o=>[...o,`data-theme: ${l===null?"(null)":l}`]),attributeName:"data-theme"});return()=>a.disconnect()},[]),s.jsxs("div",{className:"font-sans",children:[s.jsx("div",{className:"flex flex-wrap gap-2 mb-4",children:s.jsx(g,{attribute:"data-theme",values:["light-theme","dark-theme"]})}),s.jsx(d,{title:"Attribute Changes:",log:t})]})},play:async({canvas:t,step:e})=>{const a=t.getByRole("button",{name:"Toggle data-theme"});await e("null -> light",async()=>{await n.click(a),await r(t.getByText("data-theme: light")).toBeInTheDocument()}),await e("light -> dark",async()=>{await n.click(a),await r(t.getByText("data-theme: dark")).toBeInTheDocument()}),await e("dark -> null",async()=>{await n.click(a),await r(t.getByText("data-theme: (null)")).toBeInTheDocument()})}},u={render:()=>{const[t,e]=i.useState([]);return i.useEffect(()=>{const a=m({themes:{light:"light",dark:"dark"},handler:l=>e(o=>[...o,`data-theme: ${l===null?"(null)":l}`]),defaultTheme:"light",attributeName:"data-theme"});return()=>a.disconnect()},[]),s.jsxs("div",{className:"font-sans",children:[s.jsx("div",{className:"flex flex-wrap gap-2 mb-4",children:s.jsx(g,{attribute:"data-theme",values:["light","dark"]})}),s.jsx(d,{title:"Attribute Changes:",log:t})]})},play:async({canvas:t,step:e})=>{const a=t.getByRole("button",{name:"Toggle data-theme"});await e("null -> light",async()=>{await n.click(a),await r(t.getByText("data-theme: light")).toBeInTheDocument()}),await e("light -> dark",async()=>{await n.click(a),await r(t.getByText("data-theme: dark")).toBeInTheDocument()}),await e("dark -> light (default)",async()=>{await n.click(a),await r(t.getAllByText("data-theme: light").length).toBe(2)})}};var b,p,v;c.parameters={...c.parameters,docs:{...(b=c.parameters)==null?void 0:b.docs,source:{originalSource:`{
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
}`,...(v=(p=c.parameters)==null?void 0:p.docs)==null?void 0:v.source}}};var w,y,x;h.parameters={...h.parameters,docs:{...(w=h.parameters)==null?void 0:w.docs,source:{originalSource:`{
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
}`,...(x=(y=h.parameters)==null?void 0:y.docs)==null?void 0:x.source}}};var k,T,B;u.parameters={...u.parameters,docs:{...(k=u.parameters)==null?void 0:k.docs,source:{originalSource:`{
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
}`,...(B=(T=u.parameters)==null?void 0:T.docs)==null?void 0:B.source}}};const P=["BasicUsage","WithDifferentAttributeValues","WithDefaultTheme"];export{c as BasicUsage,u as WithDefaultTheme,h as WithDifferentAttributeValues,P as __namedExportsOrder,$ as default};
