import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{a as t}from"./chunk-W22LQPXL-BSpKiHdn.js";import{a as n,c as r,i,l as a,s as o}from"./iframe-DFQ_z_Nq.js";import{t as s}from"./get-prefers-contrast-CHsL4OQM.js";import{t as c}from"./src-BVeczmcL.js";var l;function u(){return(u=e((()=>{l=`import { getMediaFeatureValue } from '../_internal/media/get-media-feature-value.ts'
import type { Contrast } from './contrast.types.ts'
import { contrastValues } from './contrast.values.ts'

/**
 * Gets the current contrast preference.
 *
 * Per {@link https://drafts.csswg.org/mediaqueries-5/#prefers-contrast Media Queries Level 5},
 * the \`prefers-contrast\` media feature has four valid values. Unlike \`prefers-color-scheme\`,
 * \`'no-preference'\` is a real state and is returned as such.
 *
 * When \`matchMedia\` is unavailable (e.g. SSR), returns \`defaultContrast\`.
 *
 * @param defaultContrast - Fallback when \`matchMedia\` is unavailable (default: \`'no-preference'\`)
 * @returns 'no-preference', 'less', 'more' or 'custom'
 */
export function getPrefersContrast(defaultContrast: Contrast = 'no-preference'): Contrast {
	return getMediaFeatureValue('prefers-contrast', contrastValues, defaultContrast)
}
`})))()}var d,f,p,m,h,g;function _(){return(_=e((()=>{c(),o(),u(),d=t(),f={title:`contrast/getPrefersContrast`,tags:[`func`,`version:3.5`],parameters:n({description:{component:'A utility function that returns the current preferred contrast. It can be "no-preference", "less", "more" or "custom". Unlike `getPrefersColorScheme`, `no-preference` is a real state and is returned as such, not collapsed into a default.'}}),render:()=>(0,d.jsx)(d.Fragment,{})},p={tags:[`use-case`],parameters:n({source:{code:`getPrefersContrast(): "no-preference" | "less" | "more" | "custom"`}}),decorators:[a({content:(0,d.jsxs)(`div`,{className:`space-y-2`,children:[(0,d.jsxs)(`p`,{children:[(0,d.jsx)(`code`,{children:`getPrefersContrast()`}),` reads the current `,(0,d.jsx)(`code`,{children:`prefers-contrast`}),` value.`]}),(0,d.jsxs)(`p`,{children:[`Accepts optional `,(0,d.jsx)(`code`,{children:`defaultContrast`}),` (default `,(0,d.jsx)(`code`,{children:`'no-preference'`}),`) returned when `,(0,d.jsx)(`code`,{children:`matchMedia`}),` is unavailable (e.g. SSR).`]}),(0,d.jsxs)(`p`,{children:[`Use this when you need a one-off read of the user's contrast preference (e.g. for initial render or non-reactive logic). For reactive updates when the preference changes, use `,(0,d.jsx)(`code`,{children:`observePrefersContrast`}),` instead.`]})]})}),r()],render:()=>{let e=s();return(0,d.jsxs)(i,{title:`Current Contrast Preference (prefers-contrast)`,appearance:`output`,children:[`Your system is currently set to: `,(0,d.jsx)(`strong`,{children:e})]})}},m={name:`defaultContrast`,tags:[`props`],parameters:n({source:{code:`getPrefersContrast('more'): 'no-preference' | 'less' | 'more' | 'custom'`}}),decorators:[a({content:(0,d.jsx)(`div`,{className:`space-y-2`,children:(0,d.jsxs)(`p`,{children:[(0,d.jsx)(`code`,{children:`getPrefersContrast('more')`}),` returns `,(0,d.jsx)(`code`,{children:`'more'`}),` when`,` `,(0,d.jsx)(`code`,{children:`matchMedia`}),` is unavailable (SSR, test env). In the browser, it returns the real system preference.`]})})}),r()],render:()=>{let e=s(`more`);return(0,d.jsxs)(i,{title:`With defaultContrast: 'more'`,appearance:`output`,children:[`Your system is currently set to: `,(0,d.jsx)(`strong`,{children:e})]})}},h={tags:[`source`],parameters:n({source:{code:l}}),decorators:[r()]},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  tags: ['use-case'],
  parameters: defineDocsParam({
    source: {
      code: 'getPrefersContrast(): "no-preference" | "less" | "more" | "custom"'
    }
  }),
  decorators: [withStoryCard({
    content: <div className="space-y-2">
                    <p>
                        <code>getPrefersContrast()</code> reads the current <code>prefers-contrast</code> value.
                    </p>
                    <p>
                        Accepts optional <code>defaultContrast</code> (default <code>'no-preference'</code>)
                        returned when <code>matchMedia</code> is unavailable (e.g. SSR).
                    </p>
                    <p>
                        Use this when you need a one-off read of the user's contrast preference (e.g. for
                        initial render or non-reactive logic). For reactive updates when the preference changes,
                        use <code>observePrefersContrast</code> instead.
                    </p>
                </div>
  }), showSource()],
  render: () => {
    const contrast = getPrefersContrast();
    return <StoryCard title="Current Contrast Preference (prefers-contrast)" appearance="output">
                Your system is currently set to: <strong>{contrast}</strong>
            </StoryCard>;
  }
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  name: 'defaultContrast',
  tags: ['props'],
  parameters: defineDocsParam({
    source: {
      code: "getPrefersContrast('more'): 'no-preference' | 'less' | 'more' | 'custom'"
    }
  }),
  decorators: [withStoryCard({
    content: <div className="space-y-2">
                    <p>
                        <code>getPrefersContrast('more')</code> returns <code>'more'</code> when{' '}
                        <code>matchMedia</code> is unavailable (SSR, test env). In the browser, it returns the
                        real system preference.
                    </p>
                </div>
  }), showSource()],
  render: () => {
    const contrast = getPrefersContrast('more');
    return <StoryCard title="With defaultContrast: 'more'" appearance="output">
                Your system is currently set to: <strong>{contrast}</strong>
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
}`,...h.parameters?.docs?.source}}},g=[`BasicUsage`,`WithDefaultContrast`,`Source`]})))()}_();export{p as BasicUsage,h as Source,m as WithDefaultContrast,g as __namedExportsOrder,f as default};