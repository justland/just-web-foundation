import{j as e}from"./jsx-runtime-Cf8x2fCZ.js";import{t as D}from"./to_dom_style-DZVOeG1x.js";import"./index-yBjzXJbu.js";const U={title:"CSS Properties/toDOMStyle",tags:["new","version:1.0"]},o=({style:r,title:O})=>{const l=D(r);return e.jsxs("div",{className:"m-4 p-4 border border-gray-300 rounded",children:[e.jsx("h3",{className:"m-0 mb-4",children:O}),e.jsxs("div",{className:"flex gap-4 items-start",children:[e.jsxs("div",{className:"flex-1",children:[e.jsx("h4",{className:"m-0 mb-2 text-sm",children:"Input (React-style):"}),e.jsx("pre",{className:"bg-gray-100 p-2 rounded text-xs m-0 overflow-auto",children:JSON.stringify(r,null,2)})]}),e.jsxs("div",{className:"flex-1",children:[e.jsx("h4",{className:"m-0 mb-2 text-sm",children:"Output (DOM-style):"}),e.jsx("pre",{className:"bg-gray-100 p-2 rounded text-xs m-0 overflow-auto",children:JSON.stringify(l,null,2)})]})]}),e.jsxs("div",{className:"flex-1",children:[e.jsx("h4",{className:"m-0 mb-2 text-sm",children:"Visual Result:"}),e.jsx("div",{style:l,className:"demo-element",children:"Sample Element"})]})]})},t={render(){const r={backgroundColor:"lightblue",color:"darkblue",padding:"1rem",borderRadius:"8px"};return e.jsx(o,{style:r,title:"Basic CSS Properties"})}},s={render(){const r={backgroundColor:"lightgreen",fontSize:"1.2rem",fontWeight:"bold",textAlign:"center",marginTop:"0.5rem",paddingLeft:"1rem"};return e.jsx(o,{style:r,title:"CamelCase to kebab-case Conversion"})}},a={render(){const r={"--primary-color":"#ff6b6b","--secondary-color":"#4ecdc4","--border-width":"3px",backgroundColor:"var(--primary-color)",borderColor:"var(--secondary-color)",borderWidth:"var(--border-width)",borderStyle:"solid",padding:"1rem",color:"white"};return e.jsx(o,{style:r,title:"Custom CSS Properties (CSS Variables)"})}},n={render(){const r={"--theme-color":"#9c88ff","--spacing":"1.5rem",backgroundColor:"var(--theme-color)",padding:"var(--spacing)",borderRadius:"12px",fontSize:"1.1rem",fontWeight:"600",textAlign:"center",color:"white",boxShadow:"0 4px 8px rgba(0,0,0,0.1)"};return e.jsx(o,{style:r,title:"Mixed Standard and Custom Properties"})}},d={render(){return e.jsx(o,{style:void 0,title:"Undefined Input"})}},i={render(){return e.jsx(o,{style:{},title:"Empty Style Object"})}};var c,m,p;t.parameters={...t.parameters,docs:{...(c=t.parameters)==null?void 0:c.docs,source:{originalSource:`{
  render() {
    const style: CSSProperties = {
      backgroundColor: 'lightblue',
      color: 'darkblue',
      padding: '1rem',
      borderRadius: '8px'
    };
    return <DemoComponent style={style} title="Basic CSS Properties" />;
  }
}`,...(p=(m=t.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};var u,g,b;s.parameters={...s.parameters,docs:{...(u=s.parameters)==null?void 0:u.docs,source:{originalSource:`{
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
}`,...(b=(g=s.parameters)==null?void 0:g.docs)==null?void 0:b.source}}};var x,y,C;a.parameters={...a.parameters,docs:{...(x=a.parameters)==null?void 0:x.docs,source:{originalSource:`{
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
}`,...(C=(y=a.parameters)==null?void 0:y.docs)==null?void 0:C.source}}};var S,h,f;n.parameters={...n.parameters,docs:{...(S=n.parameters)==null?void 0:S.docs,source:{originalSource:`{
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
}`,...(f=(h=n.parameters)==null?void 0:h.docs)==null?void 0:f.source}}};var j,v,P;d.parameters={...d.parameters,docs:{...(j=d.parameters)==null?void 0:j.docs,source:{originalSource:`{
  render() {
    return <DemoComponent style={undefined} title="Undefined Input" />;
  }
}`,...(P=(v=d.parameters)==null?void 0:v.docs)==null?void 0:P.source}}};var N,w,k;i.parameters={...i.parameters,docs:{...(N=i.parameters)==null?void 0:N.docs,source:{originalSource:`{
  render() {
    return <DemoComponent style={{}} title="Empty Style Object" />;
  }
}`,...(k=(w=i.parameters)==null?void 0:w.docs)==null?void 0:k.source}}};const W=["BasicUsage","CamelCaseConversion","CustomProperties","MixedProperties","UndefinedInput","EmptyObject"];export{t as BasicUsage,s as CamelCaseConversion,a as CustomProperties,i as EmptyObject,n as MixedProperties,d as UndefinedInput,W as __namedExportsOrder,U as default};
