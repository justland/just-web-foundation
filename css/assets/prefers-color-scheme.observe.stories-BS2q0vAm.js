import{r as n,j as e}from"./iframe-B_KEKWeW.js";import{d as i}from"./define_docs_param-lmgaBKCF.js";import{g as h,o as l}from"./prefers-color-scheme-CjDR31Hv.js";import"./preload-helper-Dp1pzeXC.js";import"./globals.ctx-DOXvZQDb.js";const y={title:"utils/observePrefersColorScheme",tags:["autodocs","new","version:1.0.0"],parameters:i({description:{component:"A utility function that observes system color scheme preferences and triggers callbacks when changes occur."}})},r={parameters:i({description:{story:"This demo shows how the `observePrefersColorScheme` function responds to system color scheme changes. Change your system theme to see it in action."}}),render:()=>{const[s,o]=n.useState(null);return n.useEffect(()=>(o(h("light","dark")),l({light:t=>o(t),dark:t=>o(t)})),[]),e.jsxs("div",{style:{padding:"2rem",backgroundColor:s==="dark"?"#333":"#fff",color:s==="dark"?"#fff":"#333",borderRadius:"8px",transition:"all 0.3s ease"},children:[e.jsx("h2",{children:"Current Color Scheme Preference (prefers-color-scheme)"}),e.jsxs("p",{children:["Your system is currently set to: ",e.jsx("strong",{children:s})," mode"]}),e.jsx("p",{children:"Try changing your system's color scheme to see this update!"})]})}};var c,a,m;r.parameters={...r.parameters,docs:{...(c=r.parameters)==null?void 0:c.docs,source:{originalSource:`{
  parameters: defineDocsParam({
    description: {
      story: 'This demo shows how the \`observePrefersColorScheme\` function responds to system color scheme changes. Change your system theme to see it in action.'
    }
  }),
  render: () => {
    const [scheme, setScheme] = useState<'light' | 'dark' | null>(null);
    useEffect(() => {
      setScheme(getPrefersColorTheme('light', 'dark'));
      return observePrefersColorScheme<'light' | 'dark'>({
        light: value => setScheme(value),
        dark: value => setScheme(value)
      });
    }, []);
    return <div style={{
      padding: '2rem',
      backgroundColor: scheme === 'dark' ? '#333' : '#fff',
      color: scheme === 'dark' ? '#fff' : '#333',
      borderRadius: '8px',
      transition: 'all 0.3s ease'
    }}>
                <h2>Current Color Scheme Preference (prefers-color-scheme)</h2>
                <p>
                    Your system is currently set to: <strong>{scheme}</strong> mode
                </p>
                <p>Try changing your system's color scheme to see this update!</p>
            </div>;
  }
}`,...(m=(a=r.parameters)==null?void 0:a.docs)==null?void 0:m.source}}};const C=["BasicUsage"];export{r as BasicUsage,C as __namedExportsOrder,y as default};
