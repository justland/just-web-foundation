import{j as e,w as o,s as n,d as p}from"./iframe-Pea2t46H.js";import{d as a}from"./dedent-BuYMbVyj.js";import{t as c}from"./test_type-B2D-ob_P.js";import"./preload-helper-PPVm8Dsz.js";const i=`import type { Properties } from 'csstype'

/** Custom CSS properties (variables) with \`--\` prefix. */
type CustomProperties = { [k: \`--\${string}\`]: string }

/**
 * Widens CSS properties to support custom properties.
 * Allows for string or number values for standard properties,
 * and string values for custom properties with '--' prefix.
 * Defined as a union so plain Properties (e.g. from React) are assignable.
 */
export type CSSProperties<TLength = string | number, TTime = string & {}> =
	| Properties<TLength, TTime>
	| (Properties<TLength, TTime> & CustomProperties)
`,l={title:"style/CSSProperties",tags:["type","version:next","!test"],render:()=>e.jsx(e.Fragment,{})},r={tags:["source"],parameters:p({source:{code:i}}),decorators:[o({content:e.jsxs("p",{children:[e.jsx("code",{children:"CSSProperties"})," extends CSS properties to support custom properties (",e.jsx("code",{children:"--*"}),")."]})}),n()]},t={tags:["use-case"],parameters:p({source:{code:a`let style: CSSProperties = {
                color: 'red',
                '--custom-property': '10px',
            }
            `}}),decorators:[o({content:e.jsxs("p",{children:["Use standard properties and custom properties with the ",e.jsx("code",{children:"--"})," prefix."]})}),n()]},s={name:"Accepts React.CSSProperties",tags:["unit"],decorators:[o({content:e.jsxs("p",{children:[e.jsx("code",{children:"CSSProperties"})," accepts ",e.jsx("code",{children:"React.CSSProperties"}),"."]})}),n({source:a`const reactStyle: ReactCSSProperties = { backgroundColor: 'olive' }
            const justStyle: CSSProperties = reactStyle
        `})],render:()=>(c.canAssign(!0),c.canAssign(!0),e.jsx("div",{}))};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
  }), showSource()]
}`,...r.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
  }), showSource()]
}`,...t.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  name: 'Accepts React.CSSProperties',
  tags: ['unit'],
  decorators: [withStoryCard({
    content: <p>
                    <code>CSSProperties</code> accepts <code>React.CSSProperties</code>.
                </p>
  }), showSource({
    source: dedent\`const reactStyle: ReactCSSProperties = { backgroundColor: 'olive' }
            const justStyle: CSSProperties = reactStyle
        \`
  })],
  render: () => {
    const reactStyle: ReactCSSProperties = {
      backgroundColor: 'olive'
    };
    const justStyle: CSSProperties = reactStyle;
    testType.canAssign<typeof justStyle, typeof reactStyle>(true);
    testType.canAssign<typeof reactStyle, typeof justStyle>(true);
    return <div />;
  }
}`,...s.parameters?.docs?.source}}};const C=["Specification","SupportCustomProperties","AcceptsReactCSSProperties"];export{s as AcceptsReactCSSProperties,r as Specification,t as SupportCustomProperties,C as __namedExportsOrder,l as default};
