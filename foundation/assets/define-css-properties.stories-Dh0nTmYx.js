import{j as e,d as n,w as c,s as i,S as a}from"./iframe-CLeheNnJ.js";import{d as s}from"./dedent-BuYMbVyj.js";import{d as p}from"./define-css-properties-Dh8E5HRZ.js";import"./preload-helper-PPVm8Dsz.js";const d=`import type { CSSProperties } from './css-properties.ts'

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
	style: CSSProperties<TLength, TTime>,
) {
	return style as CSSProperties
}
`,{expect:S}=__STORYBOOK_MODULE_TEST__,y={title:"style/defineCSSProperties",tags:["func","version:next"],parameters:n({description:{component:"Helper function to define CSS properties with type checking, including custom properties (--*)."}}),render:()=>e.jsx(e.Fragment,{})},r={tags:["source"],parameters:n({source:{code:d}}),decorators:[c({content:e.jsxs("p",{children:[e.jsx("code",{children:"defineCSSProperties"})," is a helper function to define ",e.jsx("code",{children:"CSSProperties"})]})}),i()]},o={tags:["use-case"],parameters:n({source:{code:s`const style = defineCSSProperties({
                color: 'red',
                fontSize: '16px',
                '--custom-property': '10px'
            })`}}),decorators:[c({content:e.jsxs("p",{children:["A helper function to define ",e.jsx("code",{children:"CSSProperties"})," with custom properties."]})}),i({placement:"before",source:s`const style = defineCSSProperties({
                color: 'red',
                fontSize: '16px',
                '--custom-property': '10px'
            })`})],render(){const t=p({color:"red",fontSize:"16px","--custom-property":"10px"});return e.jsx(a,{appearance:"output",children:JSON.stringify(t,null,2)})},play:async()=>{const t=p({color:"red",fontSize:"16px","--custom-property":"10px"});await S(t).toEqual({color:"red",fontSize:"16px","--custom-property":"10px"})}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
  }), showDocSource()]
}`,...r.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
  }), showDocSource({
    placement: 'before',
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
}`,...o.parameters?.docs?.source}}};const x=["Specification","WithCustomProperties"];export{r as Specification,o as WithCustomProperties,x as __namedExportsOrder,y as default};
