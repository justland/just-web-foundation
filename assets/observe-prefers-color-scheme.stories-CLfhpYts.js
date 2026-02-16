import{d as n,r as t,j as e}from"./iframe-DoDTZ-f0.js";import{g as a,o as m}from"./prefers-color-scheme-CSMMlMsB.js";import"./preload-helper-PPVm8Dsz.js";import"./globals.ctx-AnFbK9hv.js";const u={title:"color-scheme/observePrefersColorScheme",tags:["autodocs","version:0.1"],parameters:n({description:{component:"A utility function that observes system color scheme preferences and triggers callbacks when changes occur."}})},r={parameters:n({description:{story:"This demo shows how the `observePrefersColorScheme` function responds to system color scheme changes. Change your system theme to see it in action."}}),render:()=>{const[s,o]=t.useState(null);return t.useEffect(()=>(o(a("light","dark")),m(c=>o(c))),[]),e.jsxs("div",{style:{padding:"2rem",backgroundColor:s==="dark"?"#333":"#fff",color:s==="dark"?"#fff":"#333",borderRadius:"8px",transition:"all 0.3s ease"},children:[e.jsx("h2",{children:"Current Color Scheme Preference (prefers-color-scheme)"}),e.jsxs("p",{children:["Your system is currently set to: ",e.jsx("strong",{children:s})," mode"]}),e.jsx("p",{children:"Try changing your system's or browser's color scheme to see this update!"})]})}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  parameters: defineDocsParam({
    description: {
      story: 'This demo shows how the \`observePrefersColorScheme\` function responds to system color scheme changes. Change your system theme to see it in action.'
    }
  }),
  render: () => {
    const [scheme, setScheme] = useState<'light' | 'dark' | null>(null);
    useEffect(() => {
      setScheme(getPrefersColorTheme('light', 'dark'));
      return observePrefersColorScheme(value => setScheme(value));
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
                <p>Try changing your system's or browser's color scheme to see this update!</p>
            </div>;
  }
}`,...r.parameters?.docs?.source}}};const f=["BasicUsage"];export{r as BasicUsage,f as __namedExportsOrder,u as default};
