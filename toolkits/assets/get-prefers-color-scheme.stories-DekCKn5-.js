import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{a as t}from"./chunk-W22LQPXL-BSpKiHdn.js";import{a as n,c as r,i,l as a,s as o}from"./iframe-DFQ_z_Nq.js";import{t as s}from"./get-prefers-color-scheme-BYJ-yK6c.js";import{t as c}from"./src-BVeczmcL.js";var l;function u(){return(u=e((()=>{l=`import { getMediaFeatureValue } from '../_internal/media/get-media-feature-value.ts'
import type { ColorScheme } from './color-scheme.types.ts'
import { colorSchemeValues } from './color-scheme.values.ts'

/**
 * Gets the current preferred color scheme.
 * It can only be 'light' or 'dark'.
 *
 * Per {@link https://drafts.csswg.org/mediaqueries-5/#prefers-color-scheme Media Queries Level 5},
 * the \`prefers-color-scheme\` media feature has only two valid values. Even if the browser
 * preference is 'auto'/'device', it will return 'light' or 'dark'.
 *
 * When \`matchMedia\` is unavailable (e.g. SSR), returns \`defaultColorScheme\`.
 *
 * @param defaultColorScheme - Fallback when \`matchMedia\` is unavailable (default: \`'light'\`)
 * @returns 'light' or 'dark'
 */
export function getPrefersColorScheme(defaultColorScheme: ColorScheme = 'light'): ColorScheme {
	if (typeof matchMedia === 'undefined') return defaultColorScheme
	return getMediaFeatureValue('prefers-color-scheme', colorSchemeValues, 'dark')
}
`})))()}var d,f,p,m,h,g;function _(){return(_=e((()=>{c(),o(),u(),d=t(),f={title:`color-scheme/getPrefersColorScheme`,tags:[`func`,`version:1.0`],parameters:n({description:{component:`A utility function that returns the current preferred color scheme. It can only be "light" or "dark". Note: even when the browser theme is set to "System" (e.g. in Chrome settings), the browser still resolves this to either "light" or "dark" based on the OS preference—it never returns "system" or "no-preference".`}}),render:()=>(0,d.jsx)(d.Fragment,{})},p={tags:[`use-case`],parameters:n({source:{code:`getPrefersColorScheme(): "light" | "dark"`}}),decorators:[a({content:(0,d.jsxs)(`div`,{className:`space-y-2`,children:[(0,d.jsxs)(`p`,{children:[(0,d.jsx)(`code`,{children:`getPrefersColorScheme()`}),` reads the current `,(0,d.jsx)(`code`,{children:`prefers-color-scheme`}),` `,`value.`]}),(0,d.jsxs)(`p`,{children:[`Accepts optional `,(0,d.jsx)(`code`,{children:`defaultColorScheme`}),` (default `,(0,d.jsx)(`code`,{children:`'light'`}),`) returned when `,(0,d.jsx)(`code`,{children:`matchMedia`}),` is unavailable (e.g. SSR).`]}),(0,d.jsxs)(`p`,{children:[`Use this when you need a one-off read of the user's color scheme (e.g. for initial render or non-reactive logic). For reactive updates when the preference changes, use`,` `,(0,d.jsx)(`code`,{children:`observePrefersColorScheme`}),` instead.`]})]})}),r()],render:()=>{let e=s();return(0,d.jsxs)(i,{title:`Current Color Scheme Preference (prefers-color-scheme)`,appearance:`output`,children:[`Your system is currently set to: `,(0,d.jsx)(`strong`,{children:e}),` mode`]})}},m={name:`defaultColorScheme`,tags:[`props`],parameters:n({source:{code:`getPrefersColorScheme('dark'): 'light' | 'dark'`}}),decorators:[a({content:(0,d.jsx)(`div`,{className:`space-y-2`,children:(0,d.jsxs)(`p`,{children:[(0,d.jsx)(`code`,{children:`getPrefersColorScheme('dark')`}),` returns `,(0,d.jsx)(`code`,{children:`'dark'`}),` when`,` `,(0,d.jsx)(`code`,{children:`matchMedia`}),` is unavailable (SSR, test env). In the browser, it returns the real system preference.`]})})}),r()],render:()=>{let e=s(`dark`);return(0,d.jsxs)(i,{title:`With defaultColorScheme: 'dark'`,appearance:`output`,children:[`Your system is currently set to: `,(0,d.jsx)(`strong`,{children:e}),` mode`]})}},h={tags:[`source`],parameters:n({source:{code:l}}),decorators:[r()]},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  tags: ['use-case'],
  parameters: defineDocsParam({
    source: {
      code: 'getPrefersColorScheme(): "light" | "dark"'
    }
  }),
  decorators: [withStoryCard({
    content: <div className="space-y-2">
                    <p>
                        <code>getPrefersColorScheme()</code> reads the current <code>prefers-color-scheme</code>{' '}
                        value.
                    </p>
                    <p>
                        Accepts optional <code>defaultColorScheme</code> (default <code>'light'</code>) returned
                        when <code>matchMedia</code> is unavailable (e.g. SSR).
                    </p>
                    <p>
                        Use this when you need a one-off read of the user's color scheme (e.g. for initial
                        render or non-reactive logic). For reactive updates when the preference changes, use{' '}
                        <code>observePrefersColorScheme</code> instead.
                    </p>
                </div>
  }), showSource()],
  render: () => {
    const scheme = getPrefersColorScheme();
    return <StoryCard title="Current Color Scheme Preference (prefers-color-scheme)" appearance="output">
                Your system is currently set to: <strong>{scheme}</strong> mode
            </StoryCard>;
  }
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  name: 'defaultColorScheme',
  tags: ['props'],
  parameters: defineDocsParam({
    source: {
      code: "getPrefersColorScheme('dark'): 'light' | 'dark'"
    }
  }),
  decorators: [withStoryCard({
    content: <div className="space-y-2">
                    <p>
                        <code>getPrefersColorScheme('dark')</code> returns <code>'dark'</code> when{' '}
                        <code>matchMedia</code> is unavailable (SSR, test env). In the browser, it returns the
                        real system preference.
                    </p>
                </div>
  }), showSource()],
  render: () => {
    const scheme = getPrefersColorScheme('dark');
    return <StoryCard title="With defaultColorScheme: 'dark'" appearance="output">
                Your system is currently set to: <strong>{scheme}</strong> mode
            </StoryCard>;
  }
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  tags: ['source'],
  parameters: defineDocsParam({
    source: {
      code
    }
  }),
  decorators: [showSource()]
}`,...h.parameters?.docs?.source}}},g=[`BasicUsage`,`WithDefaultColorScheme`,`Source`]})))()}_();export{p as BasicUsage,h as Source,m as WithDefaultColorScheme,g as __namedExportsOrder,f as default};