import{j as e,r as m}from"./iframe-D5rBLWIn.js";import{t as b}from"./to_dom_style-DZVOeG1x.js";import"./preload-helper-PPVm8Dsz.js";const S={title:"CSS Properties/toDOMStyle",tags:["new","version:1.0"]},t=({style:r,title:p})=>{const o=b(r),s=m.useRef(null);return m.useEffect(()=>{s.current&&o&&requestAnimationFrame(()=>{if(s.current)for(const[u,g]of Object.entries(o))s.current.style.setProperty(u,g)})},[o]),e.jsxs("div",{className:"m-4 p-4 border border-gray-300 rounded",children:[e.jsx("h3",{className:"m-0 mb-4",children:p}),e.jsxs("div",{className:"flex gap-4 items-start",children:[e.jsxs("div",{className:"flex-1",children:[e.jsx("h4",{className:"m-0 mb-2 text-sm",children:"Input (React-style):"}),e.jsx("pre",{className:"bg-gray-100 dark:bg-gray-900 p-2 rounded text-xs m-0 overflow-auto",children:JSON.stringify(r,null,2)})]}),e.jsxs("div",{className:"flex-1",children:[e.jsx("h4",{className:"m-0 mb-2 text-sm",children:"Output (DOM-style):"}),e.jsx("pre",{className:"bg-gray-100 dark:bg-gray-900 p-2 rounded text-xs m-0 overflow-auto",children:JSON.stringify(o,null,2)})]})]}),e.jsxs("div",{className:"flex-1",children:[e.jsx("h4",{className:"m-0 mb-2 text-sm",children:"Visual Result:"}),e.jsx("div",{ref:s,className:"demo-element",children:"Sample Element"})]})]})},a={render(){const r={backgroundColor:"lightblue",color:"darkblue",padding:"1rem",borderRadius:"8px"};return e.jsx(t,{style:r,title:"Basic CSS Properties"})}},n={render(){const r={backgroundColor:"lightgreen",fontSize:"1.2rem",fontWeight:"bold",textAlign:"center",marginTop:"0.5rem",paddingLeft:"1rem"};return e.jsx(t,{style:r,title:"CamelCase to kebab-case Conversion"})}},d={render(){const r={"--primary-color":"#ff6b6b","--secondary-color":"#4ecdc4","--border-width":"3px",backgroundColor:"var(--primary-color)",borderColor:"var(--secondary-color)",borderWidth:"var(--border-width)",borderStyle:"solid",padding:"1rem",color:"white"};return e.jsx(t,{style:r,title:"Custom CSS Properties (CSS Variables)"})}},i={render(){const r={"--theme-color":"#9c88ff","--spacing":"1.5rem",backgroundColor:"var(--theme-color)",padding:"var(--spacing)",borderRadius:"12px",fontSize:"1.1rem",fontWeight:"600",textAlign:"center",color:"white",boxShadow:"0 4px 8px rgba(0,0,0,0.1)"};return e.jsx(t,{style:r,title:"Mixed Standard and Custom Properties"})}},l={render(){return e.jsx(t,{style:void 0,title:"Undefined Input"})}},c={render(){return e.jsx(t,{style:{},title:"Empty Style Object"})}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  render() {
    const style: CSSProperties = {
      backgroundColor: 'lightblue',
      color: 'darkblue',
      padding: '1rem',
      borderRadius: '8px'
    };
    return <DemoComponent style={style} title="Basic CSS Properties" />;
  }
}`,...a.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render() {
    const style: CSSProperties = {
      backgroundColor: 'lightgreen',
      fontSize: '1.2rem',
      fontWeight: 'bold',
      textAlign: 'center',
      marginTop: '0.5rem',
      paddingLeft: '1rem'
    };
    return <DemoComponent style={style} title="CamelCase to kebab-case Conversion" />;
  }
}`,...n.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render() {
    const style: CSSProperties = {
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
}`,...d.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render() {
    const style: CSSProperties = {
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
}`,...i.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render() {
    return <DemoComponent style={undefined} title="Undefined Input" />;
  }
}`,...l.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render() {
    return <DemoComponent style={{}} title="Empty Style Object" />;
  }
}`,...c.parameters?.docs?.source}}};const f=["BasicUsage","CamelCaseConversion","CustomProperties","MixedProperties","UndefinedInput","EmptyObject"];export{a as BasicUsage,n as CamelCaseConversion,d as CustomProperties,c as EmptyObject,i as MixedProperties,l as UndefinedInput,f as __namedExportsOrder,S as default};
