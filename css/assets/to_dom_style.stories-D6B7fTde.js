import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./react-B6tGW3fj.js";import{n}from"./to_dom_style-CyPapLuM.js";import{r}from"./dist-CJMrBJtm.js";import{t as i}from"./jsx-dev-runtime-DpMrmGJR.js";var a,o,s,c,l,u,d,f,p,m,h,g;function _(){return(_=e((()=>{a=t(),r(),o=i(),s=`/home/runner/work/just-web-foundation/just-web-foundation/libs/css/src/properties/to_dom_style.stories.tsx`,c={title:`CSS Properties/toDOMStyle`,tags:[`new`,`version:0.4`]},l=({style:e,title:t})=>{let r=n(e),i=(0,a.useRef)(null);return(0,a.useEffect)(()=>{i.current&&r&&requestAnimationFrame(()=>{if(i.current)for(let[e,t]of Object.entries(r))i.current.style.setProperty(e,t)})},[r]),(0,o.jsxDEV)(`div`,{className:`m-4 p-4 border border-gray-300 rounded`,children:[(0,o.jsxDEV)(`h3`,{className:`m-0 mb-4`,children:t},void 0,!1,{fileName:s,lineNumber:32,columnNumber:13},void 0),(0,o.jsxDEV)(`div`,{className:`flex gap-4 items-start`,children:[(0,o.jsxDEV)(`div`,{className:`flex-1`,children:[(0,o.jsxDEV)(`h4`,{className:`m-0 mb-2 text-sm`,children:`Input (React-style):`},void 0,!1,{fileName:s,lineNumber:35,columnNumber:21},void 0),(0,o.jsxDEV)(`pre`,{className:`bg-gray-100 dark:bg-gray-900 p-2 rounded text-xs m-0 overflow-auto`,children:JSON.stringify(e,null,2)},void 0,!1,{fileName:s,lineNumber:36,columnNumber:21},void 0)]},void 0,!0,{fileName:s,lineNumber:34,columnNumber:17},void 0),(0,o.jsxDEV)(`div`,{className:`flex-1`,children:[(0,o.jsxDEV)(`h4`,{className:`m-0 mb-2 text-sm`,children:`Output (DOM-style):`},void 0,!1,{fileName:s,lineNumber:41,columnNumber:21},void 0),(0,o.jsxDEV)(`pre`,{className:`bg-gray-100 dark:bg-gray-900 p-2 rounded text-xs m-0 overflow-auto`,children:JSON.stringify(r,null,2)},void 0,!1,{fileName:s,lineNumber:42,columnNumber:21},void 0)]},void 0,!0,{fileName:s,lineNumber:40,columnNumber:17},void 0)]},void 0,!0,{fileName:s,lineNumber:33,columnNumber:13},void 0),(0,o.jsxDEV)(`div`,{className:`flex-1`,children:[(0,o.jsxDEV)(`h4`,{className:`m-0 mb-2 text-sm`,children:`Visual Result:`},void 0,!1,{fileName:s,lineNumber:48,columnNumber:17},void 0),(0,o.jsxDEV)(`div`,{ref:i,className:`demo-element`,children:`Sample Element`},void 0,!1,{fileName:s,lineNumber:49,columnNumber:17},void 0)]},void 0,!0,{fileName:s,lineNumber:47,columnNumber:13},void 0)]},void 0,!0,{fileName:s,lineNumber:31,columnNumber:10},void 0)},u={render(){return(0,o.jsxDEV)(l,{style:{backgroundColor:`lightblue`,color:`darkblue`,padding:`1rem`,borderRadius:`8px`},title:`Basic CSS Properties`},void 0,!1,{fileName:s,lineNumber:63,columnNumber:12},this)}},d={render(){return(0,o.jsxDEV)(l,{style:{backgroundColor:`lightgreen`,fontSize:`1.2rem`,fontWeight:`bold`,textAlign:`center`,marginTop:`0.5rem`,paddingLeft:`1rem`},title:`CamelCase to kebab-case Conversion`},void 0,!1,{fileName:s,lineNumber:76,columnNumber:12},this)}},f={render(){return(0,o.jsxDEV)(l,{style:{"--primary-color":`#ff6b6b`,"--secondary-color":`#4ecdc4`,"--border-width":`3px`,backgroundColor:`var(--primary-color)`,borderColor:`var(--secondary-color)`,borderWidth:`var(--border-width)`,borderStyle:`solid`,padding:`1rem`,color:`white`},title:`Custom CSS Properties (CSS Variables)`},void 0,!1,{fileName:s,lineNumber:92,columnNumber:12},this)}},p={render(){return(0,o.jsxDEV)(l,{style:{"--theme-color":`#9c88ff`,"--spacing":`1.5rem`,backgroundColor:`var(--theme-color)`,padding:`var(--spacing)`,borderRadius:`12px`,fontSize:`1.1rem`,fontWeight:`600`,textAlign:`center`,color:`white`,boxShadow:`0 4px 8px rgba(0,0,0,0.1)`},title:`Mixed Standard and Custom Properties`},void 0,!1,{fileName:s,lineNumber:109,columnNumber:12},this)}},m={render(){return(0,o.jsxDEV)(l,{style:void 0,title:`Undefined Input`},void 0,!1,{fileName:s,lineNumber:114,columnNumber:12},this)}},h={render(){return(0,o.jsxDEV)(l,{style:{},title:`Empty Style Object`},void 0,!1,{fileName:s,lineNumber:119,columnNumber:12},this)}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render() {
    const style: Properties = {
      backgroundColor: 'lightblue',
      color: 'darkblue',
      padding: '1rem',
      borderRadius: '8px'
    };
    return <DemoComponent style={style} title="Basic CSS Properties" />;
  }
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render() {
    const style: Properties = {
      backgroundColor: 'lightgreen',
      fontSize: '1.2rem',
      fontWeight: 'bold',
      textAlign: 'center',
      marginTop: '0.5rem',
      paddingLeft: '1rem'
    };
    return <DemoComponent style={style} title="CamelCase to kebab-case Conversion" />;
  }
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  render() {
    const style: Properties = {
      '--primary-color': '#ff6b6b',
      '--secondary-color': '#4ecdc4',
      '--border-width': '3px',
      backgroundColor: 'var(--primary-color)',
      borderColor: 'var(--secondary-color)',
      borderWidth: 'var(--border-width)',
      borderStyle: 'solid',
      padding: '1rem',
      color: 'white'
    };
    return <DemoComponent style={style} title="Custom CSS Properties (CSS Variables)" />;
  }
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render() {
    const style: Properties = {
      '--theme-color': '#9c88ff',
      '--spacing': '1.5rem',
      backgroundColor: 'var(--theme-color)',
      padding: 'var(--spacing)',
      borderRadius: '12px',
      fontSize: '1.1rem',
      fontWeight: '600',
      textAlign: 'center',
      color: 'white',
      boxShadow: '0 4px 8px rgba(0,0,0,0.1)'
    };
    return <DemoComponent style={style} title="Mixed Standard and Custom Properties" />;
  }
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render() {
    return <DemoComponent style={undefined} title="Undefined Input" />;
  }
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render() {
    return <DemoComponent style={{}} title="Empty Style Object" />;
  }
}`,...h.parameters?.docs?.source}}},g=[`BasicUsage`,`CamelCaseConversion`,`CustomProperties`,`MixedProperties`,`UndefinedInput`,`EmptyObject`]})))()}_();export{u as BasicUsage,d as CamelCaseConversion,f as CustomProperties,h as EmptyObject,p as MixedProperties,m as UndefinedInput,g as __namedExportsOrder,c as default};