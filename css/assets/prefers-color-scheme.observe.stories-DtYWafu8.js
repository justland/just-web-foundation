import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./react-B6tGW3fj.js";import{i as n,r}from"./iframe-8ZVkZNUj.js";import{r as i,t as a}from"./prefers-color-scheme-D3dsnxDn.js";import{r as o}from"./dist-CJMrBJtm.js";import{t as s}from"./jsx-dev-runtime-DpMrmGJR.js";var c,l,u,d,f,p;function m(){return(m=e((()=>{n(),c=t(),o(),l=s(),u=`/home/runner/work/just-web-foundation/just-web-foundation/libs/css/src/utils/prefers-color-scheme.observe.stories.tsx`,d={title:`utils/observePrefersColorScheme`,tags:[`autodocs`,`version:0.1`],parameters:r({description:{component:`A utility function that observes system color scheme preferences and triggers callbacks when changes occur.`}})},f={parameters:r({description:{story:"This demo shows how the `observePrefersColorScheme` function responds to system color scheme changes. Change your system theme to see it in action."}}),render:()=>{let[e,t]=(0,c.useState)(null);return(0,c.useEffect)(()=>(t(a(`light`,`dark`)),i({light:e=>t(e),dark:e=>t(e)})),[]),(0,l.jsxDEV)(`div`,{style:{padding:`2rem`,backgroundColor:e===`dark`?`#333`:`#fff`,color:e===`dark`?`#fff`:`#333`,borderRadius:`8px`,transition:`all 0.3s ease`},children:[(0,l.jsxDEV)(`h2`,{children:`Current Color Scheme Preference (prefers-color-scheme)`},void 0,!1,{fileName:u,lineNumber:38,columnNumber:17},void 0),(0,l.jsxDEV)(`p`,{children:[`Your system is currently set to: `,(0,l.jsxDEV)(`strong`,{children:e},void 0,!1,{fileName:u,lineNumber:40,columnNumber:54},void 0),` mode`]},void 0,!0,{fileName:u,lineNumber:39,columnNumber:17},void 0),(0,l.jsxDEV)(`p`,{children:`Try changing your system's color scheme to see this update!`},void 0,!1,{fileName:u,lineNumber:42,columnNumber:17},void 0)]},void 0,!0,{fileName:u,lineNumber:31,columnNumber:12},void 0)}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
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
}`,...f.parameters?.docs?.source}}},p=[`BasicUsage`]})))()}m();export{f as BasicUsage,p as __namedExportsOrder,d as default};