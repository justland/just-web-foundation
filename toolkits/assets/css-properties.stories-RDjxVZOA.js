import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{a as t}from"./chunk-W22LQPXL-BSpKiHdn.js";import{a as n,c as r,l as i,s as a}from"./iframe-DFQ_z_Nq.js";import{n as o,t as s}from"./dedent-DQaCLeUO.js";var c;function l(){return(l=e((()=>{c=new Proxy({},{get(e,t,n){return e=>e}})})))()}var u;function d(){return(d=e((()=>{u=`import type { Properties } from 'csstype'

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
 *
 * Note that \`React.CSSProperties\` (using \`csstype\`) is augmented so you can use it directly without this type.
 */
export interface CSSProperties<TLength = string | number, TTime = string & {}>
	extends Properties<TLength, TTime>,
		CustomProperties {}
`})))()}var f,p,m,h,g,_,v;function y(){return(y=e((()=>{a(),o(),l(),d(),f=t(),{expect:p}=__STORYBOOK_MODULE_TEST__,m={title:`style/CSSProperties`,tags:[`type`,`version:1.0`,`!test`],render:()=>(0,f.jsx)(f.Fragment,{})},h={tags:[`source`],parameters:n({source:{code:u}}),decorators:[i({content:(0,f.jsxs)(f.Fragment,{children:[(0,f.jsxs)(`p`,{children:[(0,f.jsx)(`code`,{children:`CSSProperties`}),` widens CSS properties to support custom properties. Standard properties accept string or number values; custom properties (`,(0,f.jsx)(`code`,{children:`--*`}),`) accept string values.`]}),(0,f.jsxs)(`p`,{children:[(0,f.jsx)(`code`,{children:`React.CSSProperties`}),` (using `,(0,f.jsx)(`code`,{children:`csstype`}),`) is augmented with custom properties, so you can use it directly without this type.`]})]})}),r()]},g={tags:[`use-case`],parameters:n({source:{code:s`let style: CSSProperties = {
                color: 'red',
                '--custom-property': '10px',
            }
            `}}),decorators:[i({content:(0,f.jsxs)(`p`,{children:[`Use standard properties and custom properties with the `,(0,f.jsx)(`code`,{children:`--`}),` prefix.`]})}),r()]},_={name:`Accepts React.CSSProperties`,tags:[`unit`],decorators:[i({content:(0,f.jsxs)(`p`,{children:[(0,f.jsx)(`code`,{children:`CSSProperties`}),` accepts `,(0,f.jsx)(`code`,{children:`React.CSSProperties`}),`.`]})}),r({source:s`const reactStyle: ReactCSSProperties = { backgroundColor: 'olive' }
            const justStyle: CSSProperties = reactStyle
        `})],play:async()=>{c.canAssign(!0),c.canAssign(!0),await p([`backgroundColor`,`--custom-property`]).toEqual([`backgroundColor`,`--custom-property`])}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
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
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
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
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
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
}`,..._.parameters?.docs?.source}}},v=[`Specification`,`SupportCustomProperties`,`AcceptsReactCSSProperties`]})))()}y();export{_ as AcceptsReactCSSProperties,h as Specification,g as SupportCustomProperties,v as __namedExportsOrder,m as default};