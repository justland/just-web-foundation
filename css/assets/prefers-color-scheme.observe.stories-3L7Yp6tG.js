import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{t}from"./react-pByjoP3I.js";import{i as n,r}from"./iframe-kL2xsVFS.js";import{c as i,n as a,o,t as s}from"./jsx-dev-runtime-BnL7LjSC.js";var c,l,u,d,f,p;function m(){return(m=e((()=>{n(),c=t(),a(),l=s(),u=`/home/runner/work/just-web-foundation/just-web-foundation/libs/css/src/utils/prefers-color-scheme.observe.stories.tsx`,d={title:`utils/observePrefersColorScheme`,tags:[`autodocs`,`version:0.1`],parameters:r({description:{component:`A utility function that observes system color scheme preferences and triggers callbacks when changes occur.`}})},f={parameters:r({description:{story:"This demo shows how the `observePrefersColorScheme` function responds to system color scheme changes. Change your system theme to see it in action."}}),render:()=>{let[e,t]=(0,c.useState)(null);return(0,c.useEffect)(()=>(t(o(`light`,`dark`)),i({light:e=>t(e),dark:e=>t(e)})),[]),(0,l.jsxDEV)(`div`,{style:{padding:`2rem`,backgroundColor:e===`dark`?`#333`:`#fff`,color:e===`dark`?`#fff`:`#333`,borderRadius:`8px`,transition:`all 0.3s ease`},children:[(0,l.jsxDEV)(`h2`,{children:`Current Color Scheme Preference (prefers-color-scheme)`},void 0,!1,{fileName:u,lineNumber:50,columnNumber:5},void 0),(0,l.jsxDEV)(`p`,{children:[`Your system is currently set to: `,(0,l.jsxDEV)(`strong`,{children:e},void 0,!1,{fileName:u,lineNumber:52,columnNumber:39},void 0),` mode`]},void 0,!0,{fileName:u,lineNumber:51,columnNumber:5},void 0),(0,l.jsxDEV)(`p`,{children:`Try changing your system's color scheme to see this update!`},void 0,!1,{fileName:u,lineNumber:54,columnNumber:5},void 0)]},void 0,!0,{fileName:u,lineNumber:41,columnNumber:4},void 0)}},p=[`BasicUsage`],f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
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
}`,...f.parameters?.docs?.source}}}})))()}m();export{f as BasicUsage,p as __namedExportsOrder,d as default};