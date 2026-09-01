import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{a as t}from"./chunk-W22LQPXL-BSpKiHdn.js";import{a as n,c as r,i,l as a,s as o}from"./iframe-BJVp8-w1.js";import{n as s,t as c}from"./dedent-DQaCLeUO.js";import{t as l}from"./define-css-properties-w_xcTR4a.js";import{t as u}from"./src-X3K_eC4I.js";var d;function f(){return(f=e((()=>{d=`import type { CSSProperties } from './css-properties.ts'

/**
 * Defines CSS properties including custom properties.
 * This function is used to properly type CSS properties when defining styles,
 * especially when using CSS custom properties (variables).
 *
 * @param style - CSS properties object that can include both standard and custom properties
 * @returns The same style object with proper typing
 *
 * @example
 * \`\`\`ts
 * defineCSSProperties({
 *   color: 'red',
 *   '--custom-color': '#ff0000'
 * })
 * \`\`\`
 */
export function defineCSSProperties<TLength = 0 | (string & {}), TTime = string & {}>(
	style: CSSProperties<TLength, TTime>
) {
	return style as CSSProperties
}
`})))()}var p,m,h,g,_,v;function y(){return(y=e((()=>{u(),o(),s(),f(),p=t(),{expect:m}=__STORYBOOK_MODULE_TEST__,h={title:`style/defineCSSProperties`,tags:[`func`,`version:1.0`],parameters:n({description:{component:`Helper function to define CSS properties with type checking, including custom properties (--*).`}}),render:()=>(0,p.jsx)(p.Fragment,{})},g={tags:[`source`],parameters:n({source:{code:d}}),decorators:[a({content:(0,p.jsxs)(`p`,{children:[(0,p.jsx)(`code`,{children:`defineCSSProperties`}),` is a helper function to define `,(0,p.jsx)(`code`,{children:`CSSProperties`})]})}),r()]},_={tags:[`use-case`],parameters:n({source:{code:c`const style = defineCSSProperties({
                color: 'red',
                fontSize: '16px',
                '--custom-property': '10px'
            })`}}),decorators:[a({content:(0,p.jsxs)(`p`,{children:[`A helper function to define `,(0,p.jsx)(`code`,{children:`CSSProperties`}),` with custom properties.`]})}),r({source:c`const style = defineCSSProperties({
                color: 'red',
                fontSize: '16px',
                '--custom-property': '10px'
            })`})],render(){let e=l({color:`red`,fontSize:`16px`,"--custom-property":`10px`});return(0,p.jsx)(i,{appearance:`output`,children:JSON.stringify(e,null,2)})},play:async()=>{let e=l({color:`red`,fontSize:`16px`,"--custom-property":`10px`});await m(e).toEqual({color:`red`,fontSize:`16px`,"--custom-property":`10px`})}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  tags: ['source'],
  parameters: defineDocsParam({
    source: {
      code: source
    }
  }),
  decorators: [withStoryCard({
    content: <p>
                    <code>defineCSSProperties</code> is a helper function to define <code>CSSProperties</code>
                </p>
  }), showSource()]
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  tags: ['use-case'],
  parameters: defineDocsParam({
    source: {
      code: dedent\`const style = defineCSSProperties({
                color: 'red',
                fontSize: '16px',
                '--custom-property': '10px'
            })\`
    }
  }),
  decorators: [withStoryCard({
    content: <p>
                    A helper function to define <code>CSSProperties</code> with custom properties.
                </p>
  }), showSource({
    source: dedent\`const style = defineCSSProperties({
                color: 'red',
                fontSize: '16px',
                '--custom-property': '10px'
            })\`
  })],
  render() {
    const style = defineCSSProperties({
      color: 'red',
      fontSize: '16px',
      '--custom-property': '10px'
    });
    return <StoryCard appearance="output">{JSON.stringify(style, null, 2)}</StoryCard>;
  },
  play: async () => {
    const style = defineCSSProperties({
      color: 'red',
      fontSize: '16px',
      '--custom-property': '10px'
    });
    await expect(style).toEqual({
      color: 'red',
      fontSize: '16px',
      '--custom-property': '10px'
    });
  }
}`,..._.parameters?.docs?.source}}},v=[`Specification`,`WithCustomProperties`]})))()}y();export{g as Specification,_ as WithCustomProperties,v as __namedExportsOrder,h as default};