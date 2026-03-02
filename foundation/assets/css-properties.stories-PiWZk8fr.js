import{j as e,w as s,s as n,d as p}from"./iframe-CL66i86X.js";import{d as a}from"./dedent-BuYMbVyj.js";import"./preload-helper-PPVm8Dsz.js";const c=new Proxy({},{get(i,m,l){return d=>d}}),S=`import type { Properties } from 'csstype'

declare module 'csstype' {
	interface Properties<TLength = (string & {}) | 0, TTime = string & {}> extends CustomProperties {}
}

/** Custom CSS properties (variables) with \`--\` prefix. */
interface CustomProperties {
	[k: \`--\${string}\`]: string
}

/**
 * Widens CSS properties to support custom properties.
 * Allows for string or number values for standard properties,
 * and string values for custom properties with '--' prefix.
 * Defined as a union so plain Properties (e.g. from React) are assignable.
 */
export interface CSSProperties<TLength = string | number, TTime = string & {}>
	extends Properties<TLength, TTime>,
		CustomProperties {}
`,{expect:u}=__STORYBOOK_MODULE_TEST__,P={title:"style/CSSProperties",tags:["type","version:next","!test"],render:()=>e.jsx(e.Fragment,{})},r={tags:["source"],parameters:p({source:{code:S}}),decorators:[s({content:e.jsxs("p",{children:[e.jsx("code",{children:"CSSProperties"})," extends CSS properties to support custom properties (",e.jsx("code",{children:"--*"}),")."]})}),n()]},t={tags:["use-case"],parameters:p({source:{code:a`let style: CSSProperties = {
                color: 'red',
                '--custom-property': '10px',
            }
            `}}),decorators:[s({content:e.jsxs("p",{children:["Use standard properties and custom properties with the ",e.jsx("code",{children:"--"})," prefix."]})}),n()]},o={name:"Accepts React.CSSProperties",tags:["unit"],decorators:[s({content:e.jsxs("p",{children:[e.jsx("code",{children:"CSSProperties"})," accepts ",e.jsx("code",{children:"React.CSSProperties"}),"."]})}),n({source:a`const reactStyle: ReactCSSProperties = { backgroundColor: 'olive' }
            const justStyle: CSSProperties = reactStyle
        `})],play:async()=>{c.canAssign(!0),c.canAssign(!0),await u(["backgroundColor","--custom-property"]).toEqual(["backgroundColor","--custom-property"])}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
}`,...t.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
  play: async () => {
    const reactStyle: ReactCSSProperties = {
      backgroundColor: 'olive'
    };
    const justStyle: CSSProperties = reactStyle;
    testType.canAssign<typeof justStyle, typeof reactStyle>(true);
    testType.canAssign<typeof reactStyle, typeof justStyle>(true);
    const keys: Array<keyof CSSProperties> = ['backgroundColor', '--custom-property'];
    await expect(keys).toEqual(['backgroundColor', '--custom-property']);
  }
}`,...o.parameters?.docs?.source}}};const x=["Specification","SupportCustomProperties","AcceptsReactCSSProperties"];export{o as AcceptsReactCSSProperties,r as Specification,t as SupportCustomProperties,x as __namedExportsOrder,P as default};
