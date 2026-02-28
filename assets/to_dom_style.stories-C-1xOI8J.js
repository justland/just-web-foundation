import{j as e}from"./jsx-dev-runtime-DF-ftqEI.js";import{r as m}from"./iframe-xLflEfzb.js";import{t as f}from"./to_dom_style-DZVOeG1x.js";import"./preload-helper-PPVm8Dsz.js";const h={title:"CSS Properties/toDOMStyle",tags:["new","version:0.4"]},o=({style:r,title:c})=>{const s=f(r),t=m.useRef(null);return m.useEffect(()=>{t.current&&s&&requestAnimationFrame(()=>{if(t.current)for(const[b,p]of Object.entries(s))t.current.style.setProperty(b,p)})},[s]),e.jsxDEV("div",{className:"m-4 p-4 border border-gray-300 rounded",children:[e.jsxDEV("h3",{className:"m-0 mb-4",children:c},void 0,!1,{fileName:"/home/runner/work/just-web-foundation/just-web-foundation/libs/css/src/properties/to_dom_style.stories.tsx",lineNumber:32,columnNumber:13},void 0),e.jsxDEV("div",{className:"flex gap-4 items-start",children:[e.jsxDEV("div",{className:"flex-1",children:[e.jsxDEV("h4",{className:"m-0 mb-2 text-sm",children:"Input (React-style):"},void 0,!1,{fileName:"/home/runner/work/just-web-foundation/just-web-foundation/libs/css/src/properties/to_dom_style.stories.tsx",lineNumber:35,columnNumber:21},void 0),e.jsxDEV("pre",{className:"bg-gray-100 dark:bg-gray-900 p-2 rounded text-xs m-0 overflow-auto",children:JSON.stringify(r,null,2)},void 0,!1,{fileName:"/home/runner/work/just-web-foundation/just-web-foundation/libs/css/src/properties/to_dom_style.stories.tsx",lineNumber:36,columnNumber:21},void 0)]},void 0,!0,{fileName:"/home/runner/work/just-web-foundation/just-web-foundation/libs/css/src/properties/to_dom_style.stories.tsx",lineNumber:34,columnNumber:17},void 0),e.jsxDEV("div",{className:"flex-1",children:[e.jsxDEV("h4",{className:"m-0 mb-2 text-sm",children:"Output (DOM-style):"},void 0,!1,{fileName:"/home/runner/work/just-web-foundation/just-web-foundation/libs/css/src/properties/to_dom_style.stories.tsx",lineNumber:41,columnNumber:21},void 0),e.jsxDEV("pre",{className:"bg-gray-100 dark:bg-gray-900 p-2 rounded text-xs m-0 overflow-auto",children:JSON.stringify(s,null,2)},void 0,!1,{fileName:"/home/runner/work/just-web-foundation/just-web-foundation/libs/css/src/properties/to_dom_style.stories.tsx",lineNumber:42,columnNumber:21},void 0)]},void 0,!0,{fileName:"/home/runner/work/just-web-foundation/just-web-foundation/libs/css/src/properties/to_dom_style.stories.tsx",lineNumber:40,columnNumber:17},void 0)]},void 0,!0,{fileName:"/home/runner/work/just-web-foundation/just-web-foundation/libs/css/src/properties/to_dom_style.stories.tsx",lineNumber:33,columnNumber:13},void 0),e.jsxDEV("div",{className:"flex-1",children:[e.jsxDEV("h4",{className:"m-0 mb-2 text-sm",children:"Visual Result:"},void 0,!1,{fileName:"/home/runner/work/just-web-foundation/just-web-foundation/libs/css/src/properties/to_dom_style.stories.tsx",lineNumber:48,columnNumber:17},void 0),e.jsxDEV("div",{ref:t,className:"demo-element",children:"Sample Element"},void 0,!1,{fileName:"/home/runner/work/just-web-foundation/just-web-foundation/libs/css/src/properties/to_dom_style.stories.tsx",lineNumber:49,columnNumber:17},void 0)]},void 0,!0,{fileName:"/home/runner/work/just-web-foundation/just-web-foundation/libs/css/src/properties/to_dom_style.stories.tsx",lineNumber:47,columnNumber:13},void 0)]},void 0,!0,{fileName:"/home/runner/work/just-web-foundation/just-web-foundation/libs/css/src/properties/to_dom_style.stories.tsx",lineNumber:31,columnNumber:10},void 0)},n={render(){const r={backgroundColor:"lightblue",color:"darkblue",padding:"1rem",borderRadius:"8px"};return e.jsxDEV(o,{style:r,title:"Basic CSS Properties"},void 0,!1,{fileName:"/home/runner/work/just-web-foundation/just-web-foundation/libs/css/src/properties/to_dom_style.stories.tsx",lineNumber:63,columnNumber:12},this)}},i={render(){const r={backgroundColor:"lightgreen",fontSize:"1.2rem",fontWeight:"bold",textAlign:"center",marginTop:"0.5rem",paddingLeft:"1rem"};return e.jsxDEV(o,{style:r,title:"CamelCase to kebab-case Conversion"},void 0,!1,{fileName:"/home/runner/work/just-web-foundation/just-web-foundation/libs/css/src/properties/to_dom_style.stories.tsx",lineNumber:76,columnNumber:12},this)}},a={render(){const r={"--primary-color":"#ff6b6b","--secondary-color":"#4ecdc4","--border-width":"3px",backgroundColor:"var(--primary-color)",borderColor:"var(--secondary-color)",borderWidth:"var(--border-width)",borderStyle:"solid",padding:"1rem",color:"white"};return e.jsxDEV(o,{style:r,title:"Custom CSS Properties (CSS Variables)"},void 0,!1,{fileName:"/home/runner/work/just-web-foundation/just-web-foundation/libs/css/src/properties/to_dom_style.stories.tsx",lineNumber:92,columnNumber:12},this)}},l={render(){const r={"--theme-color":"#9c88ff","--spacing":"1.5rem",backgroundColor:"var(--theme-color)",padding:"var(--spacing)",borderRadius:"12px",fontSize:"1.1rem",fontWeight:"600",textAlign:"center",color:"white",boxShadow:"0 4px 8px rgba(0,0,0,0.1)"};return e.jsxDEV(o,{style:r,title:"Mixed Standard and Custom Properties"},void 0,!1,{fileName:"/home/runner/work/just-web-foundation/just-web-foundation/libs/css/src/properties/to_dom_style.stories.tsx",lineNumber:109,columnNumber:12},this)}},d={render(){return e.jsxDEV(o,{style:void 0,title:"Undefined Input"},void 0,!1,{fileName:"/home/runner/work/just-web-foundation/just-web-foundation/libs/css/src/properties/to_dom_style.stories.tsx",lineNumber:114,columnNumber:12},this)}},u={render(){return e.jsxDEV(o,{style:{},title:"Empty Style Object"},void 0,!1,{fileName:"/home/runner/work/just-web-foundation/just-web-foundation/libs/css/src/properties/to_dom_style.stories.tsx",lineNumber:119,columnNumber:12},this)}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render() {
    const style: Properties = {
      backgroundColor: 'lightblue',
      color: 'darkblue',
      padding: '1rem',
      borderRadius: '8px'
    };
    return <DemoComponent style={style} title="Basic CSS Properties" />;
  }
}`,...n.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
}`,...i.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
}`,...a.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
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
}`,...l.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render() {
    return <DemoComponent style={undefined} title="Undefined Input" />;
  }
}`,...d.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render() {
    return <DemoComponent style={{}} title="Empty Style Object" />;
  }
}`,...u.parameters?.docs?.source}}};const j=["BasicUsage","CamelCaseConversion","CustomProperties","MixedProperties","UndefinedInput","EmptyObject"];export{n as BasicUsage,i as CamelCaseConversion,a as CustomProperties,u as EmptyObject,l as MixedProperties,d as UndefinedInput,j as __namedExportsOrder,h as default};
