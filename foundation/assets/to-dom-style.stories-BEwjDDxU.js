import{j as e,d as b,w as o,s as f,r as y}from"./iframe-Pea2t46H.js";import{t as s}from"./to-dom-style-DZVOeG1x.js";import"./preload-helper-PPVm8Dsz.js";const x=`import type { CSSProperties } from './css-properties.ts'

/**
 * Converts React-style CSS properties to DOM style properties.
 * This function handles both standard CSS properties and custom properties,
 * ensuring proper formatting for DOM style application.
 *
 * @param style - React-style CSS properties object
 * @returns DOM style properties object
 *
 * @example
 * \`\`\`ts
 * const domStyle = toDomStyle({
 *   backgroundColor: 'red',
 *   '--custom-color': '#ff0000'
 * })
 * if (domStyle && element.style) {
 *   for (const [key, value] of Object.entries(domStyle)) {
 *     element.style.setProperty(key, value)
 *   }
 * }
 * \`\`\`
 */
export function toDomStyle(style: CSSProperties | undefined) {
	if (style === undefined) return undefined

	const result: Record<string, string | null> = {}

	for (const [key, value] of Object.entries(style)) {
		result[
			key.startsWith('--') ? key : key.replace(/[A-Z]/g, (match) => \`-\${match.toLowerCase()}\`)
		] = value
	}

	return result
}
`,v={title:"style/toDomStyle",tags:["func","version:next"],parameters:b({description:{component:"Converts React-style CSS properties to DOM style properties (camelCase → kebab-case). Handles standard and custom properties (--*)."}}),render:()=>e.jsx(e.Fragment,{})};function n({style:t,domStyle:r,title:S}){const a=y.useRef(null);return y.useEffect(()=>{a.current&&r&&requestAnimationFrame(()=>{if(a.current)for(const[h,g]of Object.entries(r))a.current.style.setProperty(h,g)})},[r]),e.jsxs("div",{className:"m-4 p-4 border border-gray-300 rounded",children:[e.jsx("h3",{className:"m-0 mb-4",children:S}),e.jsxs("div",{className:"flex gap-4 items-start",children:[e.jsxs("div",{className:"flex-1",children:[e.jsx("h4",{className:"m-0 mb-2 text-sm",children:"Input (React-style):"}),e.jsx("pre",{className:"bg-gray-100 dark:bg-gray-900 p-2 rounded text-xs m-0 overflow-auto",children:JSON.stringify(t,null,2)})]}),e.jsxs("div",{className:"flex-1",children:[e.jsx("h4",{className:"m-0 mb-2 text-sm",children:"Output (DOM-style):"}),e.jsx("pre",{className:"bg-gray-100 dark:bg-gray-900 p-2 rounded text-xs m-0 overflow-auto",children:JSON.stringify(r,null,2)})]})]}),e.jsxs("div",{children:[e.jsx("h4",{className:"m-0 mb-2 text-sm",children:"Visual Result:"}),e.jsx("div",{ref:a,className:"demo-element",children:"Sample Element"})]})]})}const c={name:"Basic usage",decorators:[o({content:e.jsxs("p",{children:["Given a React-style CSS object, returns a DOM-style object suitable for use with"," ",e.jsx("code",{children:"element.style.setProperty(key, value)"})," or similar."]})})],render(){const t={backgroundColor:"lightblue",color:"darkblue",padding:"1rem",borderRadius:"8px"},r=s(t);return e.jsx(n,{style:t,domStyle:r,title:"React-style → DOM style"})}},d={name:"CamelCase to kebab-case",decorators:[o({content:e.jsxs("p",{children:["Standard CSS property keys are converted from React camelCase to DOM kebab-case (e.g."," ",e.jsx("code",{children:"backgroundColor"})," → ",e.jsx("code",{children:"background-color"}),")."]})})],render(){const t={backgroundColor:"lightgreen",fontSize:"1.2rem",fontWeight:"bold",marginTop:"0.5rem",paddingLeft:"1rem"},r=s(t);return e.jsx(n,{style:t,domStyle:r,title:"CamelCase keys become kebab-case in output"})}},l={name:"Custom properties preserved",decorators:[o({content:e.jsxs("p",{children:["Keys that start with ",e.jsx("code",{children:"--"})," are custom properties; they are left unchanged and not converted to kebab-case."]})})],render(){const t={"--primary-color":"#ff6b6b","--secondary-color":"#4ecdc4","--border-width":"3px",backgroundColor:"var(--primary-color)",borderColor:"var(--secondary-color)",borderWidth:"var(--border-width)",borderStyle:"solid",padding:"1rem",color:"white"},r=s(t);return e.jsx(n,{style:t,domStyle:r,title:"--* keys unchanged; standard keys still converted"})}},i={name:"Mixed standard and custom",decorators:[o({content:e.jsx("p",{children:"A single style object can contain both standard properties (converted to kebab-case) and custom properties (kept as-is)."})})],render(){const t={"--theme-color":"#9c88ff","--spacing":"1.5rem",backgroundColor:"var(--theme-color)",padding:"var(--spacing)",borderRadius:"12px",fontSize:"1.1rem",fontWeight:"600",color:"white",boxShadow:"0 4px 8px rgba(0,0,0,0.1)"},r=s(t);return e.jsx(n,{style:t,domStyle:r,title:"One object: standard + custom properties"})}},m={name:"Undefined input",tags:["unit"],decorators:[o({content:e.jsxs("p",{children:["When the style argument is ",e.jsx("code",{children:"undefined"}),", the function returns"," ",e.jsx("code",{children:"undefined"})," (no object)."]})})],render(){const t=s(void 0);return e.jsx(n,{style:void 0,domStyle:t,title:"Input: undefined → Output: undefined"})}},p={name:"Empty object",tags:["unit"],decorators:[o({content:e.jsxs("p",{children:["When the style argument is an empty object ",e.jsx("code",{children:"{}"}),", the function returns an empty object."]})})],render(){const t={},r=s(t);return e.jsx(n,{style:t,domStyle:r,title:"Input: {} → Output: {}"})}},u={tags:["source"],parameters:b({source:{code:x}}),decorators:[f()]};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  name: 'Basic usage',
  decorators: [withStoryCard({
    content: <p>
                    Given a React-style CSS object, returns a DOM-style object suitable for use with{' '}
                    <code>element.style.setProperty(key, value)</code> or similar.
                </p>
  })],
  render() {
    const style: CSSProperties = {
      backgroundColor: 'lightblue',
      color: 'darkblue',
      padding: '1rem',
      borderRadius: '8px'
    };
    const domStyle = toDomStyle(style);
    return <StyleDemo style={style} domStyle={domStyle} title="React-style → DOM style" />;
  }
}`,...c.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  name: 'CamelCase to kebab-case',
  decorators: [withStoryCard({
    content: <p>
                    Standard CSS property keys are converted from React camelCase to DOM kebab-case (e.g.{' '}
                    <code>backgroundColor</code> → <code>background-color</code>).
                </p>
  })],
  render() {
    const style: CSSProperties = {
      backgroundColor: 'lightgreen',
      fontSize: '1.2rem',
      fontWeight: 'bold',
      marginTop: '0.5rem',
      paddingLeft: '1rem'
    };
    const domStyle = toDomStyle(style);
    return <StyleDemo style={style} domStyle={domStyle} title="CamelCase keys become kebab-case in output" />;
  }
}`,...d.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  name: 'Custom properties preserved',
  decorators: [withStoryCard({
    content: <p>
                    Keys that start with <code>--</code> are custom properties; they are left unchanged and
                    not converted to kebab-case.
                </p>
  })],
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
    const domStyle = toDomStyle(style);
    return <StyleDemo style={style} domStyle={domStyle} title="--* keys unchanged; standard keys still converted" />;
  }
}`,...l.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  name: 'Mixed standard and custom',
  decorators: [withStoryCard({
    content: <p>
                    A single style object can contain both standard properties (converted to kebab-case) and
                    custom properties (kept as-is).
                </p>
  })],
  render() {
    const style: CSSProperties = {
      '--theme-color': '#9c88ff',
      '--spacing': '1.5rem',
      backgroundColor: 'var(--theme-color)',
      padding: 'var(--spacing)',
      borderRadius: '12px',
      fontSize: '1.1rem',
      fontWeight: '600',
      color: 'white',
      boxShadow: '0 4px 8px rgba(0,0,0,0.1)'
    };
    const domStyle = toDomStyle(style);
    return <StyleDemo style={style} domStyle={domStyle} title="One object: standard + custom properties" />;
  }
}`,...i.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  name: 'Undefined input',
  tags: ['unit'],
  decorators: [withStoryCard({
    content: <p>
                    When the style argument is <code>undefined</code>, the function returns{' '}
                    <code>undefined</code> (no object).
                </p>
  })],
  render() {
    const domStyle = toDomStyle(undefined);
    return <StyleDemo style={undefined} domStyle={domStyle} title="Input: undefined → Output: undefined" />;
  }
}`,...m.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  name: 'Empty object',
  tags: ['unit'],
  decorators: [withStoryCard({
    content: <p>
                    When the style argument is an empty object <code>{'{}'}</code>, the function returns an
                    empty object.
                </p>
  })],
  render() {
    const style: CSSProperties = {};
    const domStyle = toDomStyle(style);
    return <StyleDemo style={style} domStyle={domStyle} title="Input: {} → Output: {}" />;
  }
}`,...p.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  tags: ['source'],
  parameters: defineDocsParam({
    source: {
      code: source
    }
  }),
  decorators: [showSource()]
}`,...u.parameters?.docs?.source}}};const D=["BasicUsage","CamelCaseToKebabCase","CustomPropertiesPreserved","StandardAndCustomInOneObject","UndefinedInput","EmptyObject","Source"];export{c as BasicUsage,d as CamelCaseToKebabCase,l as CustomPropertiesPreserved,p as EmptyObject,u as Source,i as StandardAndCustomInOneObject,m as UndefinedInput,D as __namedExportsOrder,v as default};
