import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{a as t}from"./chunk-W22LQPXL-BSpKiHdn.js";import{a as n,c as r,l as i,s as a}from"./iframe-Dhw67M0q.js";import{n as o,t as s}from"./dedent-DQaCLeUO.js";var c;function l(){return(l=e((()=>{c=`import type { Properties } from 'csstype'

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
`})))()}var u,d,f,p,m,h,g;function _(){return(_=e((()=>{a(),o(),l(),u=t(),{expect:d}=__STORYBOOK_MODULE_TEST__,f={title:`style/CSSProperties`,tags:[`type`,`version:1.0`,`!test`],render:()=>(0,u.jsx)(u.Fragment,{})},p={tags:[`source`],parameters:n({source:{code:c}}),decorators:[i({content:(0,u.jsxs)(u.Fragment,{children:[(0,u.jsxs)(`p`,{children:[(0,u.jsx)(`code`,{children:`CSSProperties`}),` widens CSS properties to support custom properties. Standard properties accept string or number values; custom properties (`,(0,u.jsx)(`code`,{children:`--*`}),`) accept string values.`]}),(0,u.jsxs)(`p`,{children:[(0,u.jsx)(`code`,{children:`React.CSSProperties`}),` (using `,(0,u.jsx)(`code`,{children:`csstype`}),`) is augmented with custom properties, so you can use it directly without this type.`]})]})}),r()]},m={tags:[`use-case`],parameters:n({source:{code:s`let style: CSSProperties = {
                color: 'red',
                '--custom-property': '10px',
            }
            `}}),decorators:[i({content:(0,u.jsxs)(`p`,{children:[`Use standard properties and custom properties with the `,(0,u.jsx)(`code`,{children:`--`}),` prefix.`]})}),r()]},h={name:`Accepts React.CSSProperties`,tags:[`unit`],decorators:[i({content:(0,u.jsxs)(`p`,{children:[(0,u.jsx)(`code`,{children:`CSSProperties`}),` accepts `,(0,u.jsx)(`code`,{children:`React.CSSProperties`}),`.`]})}),r({source:s`const reactStyle: ReactCSSProperties = { backgroundColor: 'olive' }
            const justStyle: CSSProperties = reactStyle
        `})],play:async()=>{let e={backgroundColor:`olive`},t=e,n=e,r=t;await d(n).toEqual(r),await d([`backgroundColor`,`--custom-property`]).toEqual([`backgroundColor`,`--custom-property`])}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
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
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
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
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
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

    // Mutual assignability, asserted against the compiler directly. \`testType.canAssign\`
    // cannot express it here: \`CSSProperties\` carries a \`--*\` index signature, and
    // \`CanAssign\` reports \`false\` for it even though the assignments below both compile.
    const justFromReact: CSSProperties = reactStyle;
    const reactFromJust: ReactCSSProperties = justStyle;
    await expect(justFromReact).toEqual(reactFromJust);
    const keys: Array<keyof CSSProperties> = ['backgroundColor', '--custom-property'];
    await expect(keys).toEqual(['backgroundColor', '--custom-property']);
  }
}`,...h.parameters?.docs?.source}}},g=[`Specification`,`SupportCustomProperties`,`AcceptsReactCSSProperties`]})))()}_();export{h as AcceptsReactCSSProperties,p as Specification,m as SupportCustomProperties,g as __namedExportsOrder,f as default};