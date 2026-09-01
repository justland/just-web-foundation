import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{a as t}from"./chunk-W22LQPXL-BSpKiHdn.js";import{a as n,c as r,i,l as a,s as o}from"./iframe-DFQ_z_Nq.js";import{t as s}from"./get-prefers-reduced-transparency-B388vs1F.js";import{t as c}from"./src-BVeczmcL.js";var l;function u(){return(u=e((()=>{l=`import { getMediaFeatureValue } from '../_internal/media/get-media-feature-value.ts'
import type { ReducedTransparency } from './reduced-transparency.types.ts'
import { reducedTransparencyValues } from './reduced-transparency.values.ts'

/**
 * Gets the current reduced transparency preference.
 *
 * Per {@link https://drafts.csswg.org/mediaqueries-5/#prefers-reduced-transparency Media Queries Level 5},
 * the \`prefers-reduced-transparency\` media feature has two valid values. Unlike \`prefers-color-scheme\`,
 * \`'no-preference'\` is a real state and is returned as such.
 *
 * When \`matchMedia\` is unavailable (e.g. SSR), returns \`defaultReducedTransparency\`.
 *
 * @param defaultReducedTransparency - Fallback when \`matchMedia\` is unavailable (default: \`'no-preference'\`)
 * @returns 'no-preference' or 'reduce'
 */
export function getPrefersReducedTransparency(
	defaultReducedTransparency: ReducedTransparency = 'no-preference'
): ReducedTransparency {
	return getMediaFeatureValue(
		'prefers-reduced-transparency',
		reducedTransparencyValues,
		defaultReducedTransparency
	)
}
`})))()}var d,f,p,m,h,g;function _(){return(_=e((()=>{c(),o(),u(),d=t(),f={title:`reduced-transparency/getPrefersReducedTransparency`,tags:[`func`,`version:3.5`],parameters:n({description:{component:'A utility function that returns the current preferred reduced transparency setting. It can be "no-preference" or "reduce". Unlike `getPrefersColorScheme`, `no-preference` is a real state and is returned as such, not collapsed into a default.'}}),render:()=>(0,d.jsx)(d.Fragment,{})},p={tags:[`use-case`],parameters:n({source:{code:`getPrefersReducedTransparency(): "no-preference" | "reduce"`}}),decorators:[a({content:(0,d.jsxs)(`div`,{className:`space-y-2`,children:[(0,d.jsxs)(`p`,{children:[(0,d.jsx)(`code`,{children:`getPrefersReducedTransparency()`}),` reads the current`,` `,(0,d.jsx)(`code`,{children:`prefers-reduced-transparency`}),` value.`]}),(0,d.jsxs)(`p`,{children:[`Accepts optional `,(0,d.jsx)(`code`,{children:`defaultReducedTransparency`}),` (default`,` `,(0,d.jsx)(`code`,{children:`'no-preference'`}),`) returned when `,(0,d.jsx)(`code`,{children:`matchMedia`}),` is unavailable (e.g. SSR).`]}),(0,d.jsxs)(`p`,{children:[`Use this when you need a one-off read of the user's reduced transparency preference (e.g. for initial render or non-reactive logic). For reactive updates when the preference changes, use `,(0,d.jsx)(`code`,{children:`observePrefersReducedTransparency`}),` instead.`]})]})}),r()],render:()=>{let e=s();return(0,d.jsxs)(i,{title:`Current Reduced Transparency Preference (prefers-reduced-transparency)`,appearance:`output`,children:[`Your system is currently set to: `,(0,d.jsx)(`strong`,{children:e})]})}},m={name:`defaultReducedTransparency`,tags:[`props`],parameters:n({source:{code:`getPrefersReducedTransparency('reduce'): 'no-preference' | 'reduce'`}}),decorators:[a({content:(0,d.jsx)(`div`,{className:`space-y-2`,children:(0,d.jsxs)(`p`,{children:[(0,d.jsx)(`code`,{children:`getPrefersReducedTransparency('reduce')`}),` returns `,(0,d.jsx)(`code`,{children:`'reduce'`}),` when`,` `,(0,d.jsx)(`code`,{children:`matchMedia`}),` is unavailable (SSR, test env). In the browser, it returns the real system preference.`]})})}),r()],render:()=>{let e=s(`reduce`);return(0,d.jsxs)(i,{title:`With defaultReducedTransparency: 'reduce'`,appearance:`output`,children:[`Your system is currently set to: `,(0,d.jsx)(`strong`,{children:e})]})}},h={tags:[`source`],parameters:n({source:{code:l}}),decorators:[r()]},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  tags: ['use-case'],
  parameters: defineDocsParam({
    source: {
      code: 'getPrefersReducedTransparency(): "no-preference" | "reduce"'
    }
  }),
  decorators: [withStoryCard({
    content: <div className="space-y-2">
                    <p>
                        <code>getPrefersReducedTransparency()</code> reads the current{' '}
                        <code>prefers-reduced-transparency</code> value.
                    </p>
                    <p>
                        Accepts optional <code>defaultReducedTransparency</code> (default{' '}
                        <code>'no-preference'</code>) returned when <code>matchMedia</code> is unavailable (e.g.
                        SSR).
                    </p>
                    <p>
                        Use this when you need a one-off read of the user's reduced transparency preference
                        (e.g. for initial render or non-reactive logic). For reactive updates when the
                        preference changes, use <code>observePrefersReducedTransparency</code> instead.
                    </p>
                </div>
  }), showSource()],
  render: () => {
    const reducedTransparency = getPrefersReducedTransparency();
    return <StoryCard title="Current Reduced Transparency Preference (prefers-reduced-transparency)" appearance="output">
                Your system is currently set to: <strong>{reducedTransparency}</strong>
            </StoryCard>;
  }
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  name: 'defaultReducedTransparency',
  tags: ['props'],
  parameters: defineDocsParam({
    source: {
      code: "getPrefersReducedTransparency('reduce'): 'no-preference' | 'reduce'"
    }
  }),
  decorators: [withStoryCard({
    content: <div className="space-y-2">
                    <p>
                        <code>getPrefersReducedTransparency('reduce')</code> returns <code>'reduce'</code> when{' '}
                        <code>matchMedia</code> is unavailable (SSR, test env). In the browser, it returns the
                        real system preference.
                    </p>
                </div>
  }), showSource()],
  render: () => {
    const reducedTransparency = getPrefersReducedTransparency('reduce');
    return <StoryCard title="With defaultReducedTransparency: 'reduce'" appearance="output">
                Your system is currently set to: <strong>{reducedTransparency}</strong>
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
}`,...h.parameters?.docs?.source}}},g=[`BasicUsage`,`WithDefaultReducedTransparency`,`Source`]})))()}_();export{p as BasicUsage,h as Source,m as WithDefaultReducedTransparency,g as __namedExportsOrder,f as default};