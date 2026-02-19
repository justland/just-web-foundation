import{j as e,w as t,s,d as n}from"./iframe-BRbKEAca.js";import{d as p}from"./dedent-BuYMbVyj.js";import"./preload-helper-PPVm8Dsz.js";const c=`import type { Properties } from 'csstype'

/**
 * Extends CSS properties to include custom properties.
 * Allows for string or number values for standard properties,
 * and string values for custom properties with '--' prefix.
 */
export interface CSSProperties<TLength = 0 | (string & {}), TTime = string & {}>
	extends Properties<TLength, TTime> {
	[k: \`--\${string}\`]: string
}
`,m={title:"style/CSSProperties",tags:["type","version:next","!test"],render:()=>e.jsx(e.Fragment,{})},r={tags:["source"],parameters:n({source:{code:c}}),decorators:[t({content:e.jsxs("p",{children:[e.jsx("code",{children:"CSSProperties"})," extends CSS properties to support custom properties (",e.jsx("code",{children:"--*"}),")."]})}),s()]},o={tags:["use-case"],parameters:n({source:{code:p`let style: CSSProperties = {
                color: 'red',
                '--custom-property': '10px',
            }
            `}}),decorators:[t({content:e.jsxs("p",{children:["Use standard properties and custom properties with the ",e.jsx("code",{children:"--"})," prefix."]})}),s({placement:"before"})]};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  tags: ['source'],
  parameters: defineDocsParam({
    source: {
      code: source
    }
  }),
  decorators: [withStoryCard({
    content: <p>
                    <code>CSSProperties</code> extends CSS properties to support custom properties (
                    <code>--*</code>).
                </p>
  }), showDocSource()]
}`,...r.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  tags: ['use-case'],
  parameters: defineDocsParam({
    source: {
      code: dedent\`let style: CSSProperties = {
                color: 'red',
                '--custom-property': '10px',
            }
            \`
    }
  }),
  decorators: [withStoryCard({
    content: <p>
                    Use standard properties and custom properties with the <code>--</code> prefix.
                </p>
  }), showDocSource({
    placement: 'before'
  })]
}`,...o.parameters?.docs?.source}}};const u=["Specification","SupportCustomProperties"];export{r as Specification,o as SupportCustomProperties,u as __namedExportsOrder,m as default};
