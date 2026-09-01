import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./react-B6tGW3fj.js";import{a as n}from"./chunk-W22LQPXL-BSpKiHdn.js";import{a as r,c as i,l as a,s as o}from"./iframe-DFQ_z_Nq.js";import{n as s}from"./to-dom-style-CyPapLuM.js";import{t as c}from"./src-BVeczmcL.js";var l;function u(){return(u=e((()=>{l=`import type { CSSProperties } from './css-properties.ts'

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
`})))()}function d({style:e,domStyle:t,title:n}){let r=(0,f.useRef)(null);return(0,f.useEffect)(()=>{r.current&&t&&requestAnimationFrame(()=>{if(r.current)for(let[e,n]of Object.entries(t))r.current.style.setProperty(e,n)})},[t]),(0,p.jsxs)(`div`,{className:`m-4 p-4 border border-gray-300 rounded`,children:[(0,p.jsx)(`h3`,{className:`m-0 mb-4`,children:n}),(0,p.jsxs)(`div`,{className:`flex gap-4 items-start`,children:[(0,p.jsxs)(`div`,{className:`flex-1`,children:[(0,p.jsx)(`h4`,{className:`m-0 mb-2 text-sm`,children:`Input (React-style):`}),(0,p.jsx)(`pre`,{className:`bg-gray-100 dark:bg-gray-900 p-2 rounded text-xs m-0 overflow-auto`,children:JSON.stringify(e,null,2)})]}),(0,p.jsxs)(`div`,{className:`flex-1`,children:[(0,p.jsx)(`h4`,{className:`m-0 mb-2 text-sm`,children:`Output (DOM-style):`}),(0,p.jsx)(`pre`,{className:`bg-gray-100 dark:bg-gray-900 p-2 rounded text-xs m-0 overflow-auto`,children:JSON.stringify(t,null,2)})]})]}),(0,p.jsxs)(`div`,{children:[(0,p.jsx)(`h4`,{className:`m-0 mb-2 text-sm`,children:`Visual Result:`}),(0,p.jsx)(`div`,{ref:r,className:`demo-element`,children:`Sample Element`})]})]})}var f,p,m,h,g,_,v,y,b,x,S;function C(){return(C=e((()=>{c(),o(),f=t(),u(),p=n(),m={title:`style/toDomStyle`,tags:[`func`,`version:1.0`],parameters:r({description:{component:`Converts React-style CSS properties to DOM style properties (camelCase → kebab-case). Handles standard and custom properties (--*).`}}),render:()=>(0,p.jsx)(p.Fragment,{})},h={name:`Basic usage`,decorators:[a({content:(0,p.jsxs)(`p`,{children:[`Given a React-style CSS object, returns a DOM-style object suitable for use with`,` `,(0,p.jsx)(`code`,{children:`element.style.setProperty(key, value)`}),` or similar.`]})})],render(){let e={backgroundColor:`lightblue`,color:`darkblue`,padding:`1rem`,borderRadius:`8px`},t=s(e);return(0,p.jsx)(d,{style:e,domStyle:t,title:`React-style → DOM style`})}},g={name:`CamelCase to kebab-case`,decorators:[a({content:(0,p.jsxs)(`p`,{children:[`Standard CSS property keys are converted from React camelCase to DOM kebab-case (e.g.`,` `,(0,p.jsx)(`code`,{children:`backgroundColor`}),` → `,(0,p.jsx)(`code`,{children:`background-color`}),`).`]})})],render(){let e={backgroundColor:`lightgreen`,fontSize:`1.2rem`,fontWeight:`bold`,marginTop:`0.5rem`,paddingLeft:`1rem`},t=s(e);return(0,p.jsx)(d,{style:e,domStyle:t,title:`CamelCase keys become kebab-case in output`})}},_={name:`Custom properties preserved`,decorators:[a({content:(0,p.jsxs)(`p`,{children:[`Keys that start with `,(0,p.jsx)(`code`,{children:`--`}),` are custom properties; they are left unchanged and not converted to kebab-case.`]})})],render(){let e={"--primary-color":`#ff6b6b`,"--secondary-color":`#4ecdc4`,"--border-width":`3px`,backgroundColor:`var(--primary-color)`,borderColor:`var(--secondary-color)`,borderWidth:`var(--border-width)`,borderStyle:`solid`,padding:`1rem`,color:`white`},t=s(e);return(0,p.jsx)(d,{style:e,domStyle:t,title:`--* keys unchanged; standard keys still converted`})}},v={name:`Mixed standard and custom`,decorators:[a({content:(0,p.jsx)(`p`,{children:`A single style object can contain both standard properties (converted to kebab-case) and custom properties (kept as-is).`})})],render(){let e={"--theme-color":`#9c88ff`,"--spacing":`1.5rem`,backgroundColor:`var(--theme-color)`,padding:`var(--spacing)`,borderRadius:`12px`,fontSize:`1.1rem`,fontWeight:`600`,color:`white`,boxShadow:`0 4px 8px rgba(0,0,0,0.1)`},t=s(e);return(0,p.jsx)(d,{style:e,domStyle:t,title:`One object: standard + custom properties`})}},y={name:`Undefined input`,tags:[`unit`],decorators:[a({content:(0,p.jsxs)(`p`,{children:[`When the style argument is `,(0,p.jsx)(`code`,{children:`undefined`}),`, the function returns`,` `,(0,p.jsx)(`code`,{children:`undefined`}),` (no object).`]})})],render(){let e=s(void 0);return(0,p.jsx)(d,{style:void 0,domStyle:e,title:`Input: undefined → Output: undefined`})}},b={name:`Empty object`,tags:[`unit`],decorators:[a({content:(0,p.jsxs)(`p`,{children:[`When the style argument is an empty object `,(0,p.jsx)(`code`,{children:`{}`}),`, the function returns an empty object.`]})})],render(){let e={},t=s(e);return(0,p.jsx)(d,{style:e,domStyle:t,title:`Input: {} → Output: {}`})}},x={tags:[`source`],parameters:r({source:{code:l}}),decorators:[i()]},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
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
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
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
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
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
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
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
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
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
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
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
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  tags: ['source'],
  parameters: defineDocsParam({
    source: {
      code: source
    }
  }),
  decorators: [showSource()]
}`,...x.parameters?.docs?.source}}},S=[`BasicUsage`,`CamelCaseToKebabCase`,`CustomPropertiesPreserved`,`StandardAndCustomInOneObject`,`UndefinedInput`,`EmptyObject`,`Source`]})))()}C();export{h as BasicUsage,g as CamelCaseToKebabCase,_ as CustomPropertiesPreserved,b as EmptyObject,x as Source,v as StandardAndCustomInOneObject,y as UndefinedInput,S as __namedExportsOrder,m as default};