import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{a as t}from"./chunk-W22LQPXL-BSpKiHdn.js";import{a as n,c as r,l as i,s as a}from"./iframe-lHA9G3CN.js";import{n as o,t as s}from"./dedent-DQaCLeUO.js";var c;function l(){return(l=e((()=>{c=`/**
 * A value of the CSS \`color-scheme\` property.
 *
 * Unlike \`ColorScheme\`, which holds the two values of the \`prefers-color-scheme\` media feature,
 * this lists the values you write to the property:
 *
 * - \`normal\`: use the page color scheme (the \`<meta name="color-scheme">\` tag), or light without one.
 * - \`light\` / \`dark\`: render only in that scheme.
 * - \`light dark\` / \`dark light\`: support both, and follow the user's preference.
 * - \`only light\` / \`only dark\`: render only in that scheme, and forbid the browser from auto-darkening.
 *   Browsers serialize these as \`light only\` / \`dark only\`, so both orders are listed.
 *
 * Per {@link https://drafts.csswg.org/css-color-adjust-1/#color-scheme-prop CSS Color Adjustment Level 1 § color-scheme}.
 */
export type ColorSchemePropertyValue =
	| 'normal'
	| 'light'
	| 'dark'
	| 'light dark'
	| 'dark light'
	| 'only light'
	| 'only dark'
	| 'light only'
	| 'dark only'
`})))()}var u,d,f,p,m;function h(){return(h=e((()=>{a(),o(),l(),u=t(),d={title:`color-scheme/ColorSchemePropertyValue`,tags:[`type`,`version:4.1`],render:()=>(0,u.jsx)(u.Fragment,{})},f={tags:[`source`],parameters:n({source:{code:c}}),decorators:[i({content:(0,u.jsxs)(`p`,{children:[(0,u.jsx)(`code`,{children:`ColorSchemePropertyValue`}),` lists the values of the CSS`,` `,(0,u.jsx)(`code`,{children:`color-scheme`}),` property. It is wider than `,(0,u.jsx)(`code`,{children:`ColorScheme`}),`, which holds the two values of the `,(0,u.jsx)(`code`,{children:`prefers-color-scheme`}),` media feature. See`,` `,(0,u.jsx)(`a`,{href:`https://drafts.csswg.org/css-color-adjust-1/#color-scheme-prop`,target:`_blank`,rel:`noopener noreferrer`,children:`CSS Color Adjustment Level 1 § color-scheme`}),`.`]})}),r()]},p={tags:[`use-case`],parameters:n({source:{code:s`
                import type { ColorSchemePropertyValue } from '@just-web/toolkits'

                const colorSchemes: Record<string, ColorSchemePropertyValue> = {
                    system: 'light dark',
                    print: 'only light'
                }
                element.style.colorScheme = colorSchemes[theme]
            `}}),decorators:[i({content:(0,u.jsxs)(`p`,{children:[`Use it to type a value you write to `,(0,u.jsx)(`code`,{children:`color-scheme`}),`, such as a map from theme keys to schemes.`]})}),r()]},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  tags: ['source'],
  parameters: defineDocsParam({
    source: {
      code: source
    }
  }),
  decorators: [withStoryCard({
    content: <p>
                    <code>ColorSchemePropertyValue</code> lists the values of the CSS{' '}
                    <code>color-scheme</code> property. It is wider than <code>ColorScheme</code>, which holds
                    the two values of the <code>prefers-color-scheme</code> media feature. See{' '}
                    <a href="https://drafts.csswg.org/css-color-adjust-1/#color-scheme-prop" target="_blank" rel="noopener noreferrer">
                        CSS Color Adjustment Level 1 § color-scheme
                    </a>
                    .
                </p>
  }), showSource()]
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  tags: ['use-case'],
  parameters: defineDocsParam({
    source: {
      code: dedent\`
                import type { ColorSchemePropertyValue } from '@just-web/toolkits'

                const colorSchemes: Record<string, ColorSchemePropertyValue> = {
                    system: 'light dark',
                    print: 'only light'
                }
                element.style.colorScheme = colorSchemes[theme]
            \`
    }
  }),
  decorators: [withStoryCard({
    content: <p>
                    Use it to type a value you write to <code>color-scheme</code>, such as a map from theme
                    keys to schemes.
                </p>
  }), showSource()]
}`,...p.parameters?.docs?.source}}},m=[`Specification`,`BasicUsage`]})))()}h();export{p as BasicUsage,f as Specification,m as __namedExportsOrder,d as default};