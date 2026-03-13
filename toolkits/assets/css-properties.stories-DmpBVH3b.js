import{j as e,w as o,s as n,d as p}from"./iframe-C3RwOtVD.js";import{d as a}from"./dedent-BuYMbVyj.js";import"./preload-helper-PPVm8Dsz.js";const c=new Proxy({},{get(i,m,l){return d=>d}}),u=`import type { Properties } from 'csstype'

declare module 'csstype' {
	// biome-ignore lint/correctness/noUnusedVariables: TLength and TTime are used in the extended Properties type
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
 *
 * Note that \`React.CSSProperties\` (using \`csstype\`) is augmented so you can use it directly without this type.
 */
export interface CSSProperties<TLength = string | number, TTime = string & {}>
	extends Properties<TLength, TTime>,
		CustomProperties {}
`,{expect:S}=__STORYBOOK_MODULE_TEST__,h={title:"style/CSSProperties",tags:["type","version:1.0","!test"],render:()=>e.jsx(e.Fragment,{})},t={tags:["source"],parameters:p({source:{code:u}}),decorators:[o({content:e.jsxs(e.Fragment,{children:[e.jsxs("p",{children:[e.jsx("code",{children:"CSSProperties"})," widens CSS properties to support custom properties. Standard properties accept string or number values; custom properties (",e.jsx("code",{children:"--*"}),") accept string values."]}),e.jsxs("p",{children:[e.jsx("code",{children:"React.CSSProperties"})," (using ",e.jsx("code",{children:"csstype"}),") is augmented with custom properties, so you can use it directly without this type."]})]})}),n()]},r={tags:["use-case"],parameters:p({source:{code:a`let style: CSSProperties = {
                color: 'red',
                '--custom-property': '10px',
            }
            `}}),decorators:[o({content:e.jsxs("p",{children:["Use standard properties and custom properties with the ",e.jsx("code",{children:"--"})," prefix."]})}),n()]},s={name:"Accepts React.CSSProperties",tags:["unit"],decorators:[o({content:e.jsxs("p",{children:[e.jsx("code",{children:"CSSProperties"})," accepts ",e.jsx("code",{children:"React.CSSProperties"}),"."]})}),n({source:a`const reactStyle: ReactCSSProperties = { backgroundColor: 'olive' }
            const justStyle: CSSProperties = reactStyle
        `})],play:async()=>{c.canAssign(!0),c.canAssign(!0),await S(["backgroundColor","--custom-property"]).toEqual(["backgroundColor","--custom-property"])}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  tags: ['source'],
  parameters: defineDocsParam({
    source: {
      code: source
    }
  }),
  decorators: [withStoryCard({
    content: <>
                    <p>
                        <code>CSSProperties</code> widens CSS properties to support custom properties. Standard
                        properties accept string or number values; custom properties (<code>--*</code>) accept
                        string values.
                    </p>
                    <p>
                        <code>React.CSSProperties</code> (using <code>csstype</code>) is augmented with custom
                        properties, so you can use it directly without this type.
                    </p>
                </>
  }), showSource()]
}`,...t.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
}`,...r.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
}`,...s.parameters?.docs?.source}}};const P=["Specification","SupportCustomProperties","AcceptsReactCSSProperties"];export{s as AcceptsReactCSSProperties,t as Specification,r as SupportCustomProperties,P as __namedExportsOrder,h as default};
