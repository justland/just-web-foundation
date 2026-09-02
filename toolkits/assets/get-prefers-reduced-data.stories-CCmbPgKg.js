import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{a as t}from"./chunk-W22LQPXL-BSpKiHdn.js";import{a as n,c as r,i,l as a,s as o}from"./iframe-C-caXvtV.js";import{t as s}from"./get-prefers-reduced-data-DZfa2Afo.js";import{t as c}from"./src-RbTQJPcv.js";var l;function u(){return(u=e((()=>{l=`import { getMediaFeatureValue } from '../_internal/media/get-media-feature-value.ts'
import type { ReducedData } from './reduced-data.types.ts'
import { reducedDataValues } from './reduced-data.values.ts'

/**
 * Gets the current reduced data preference.
 *
 * Per {@link https://drafts.csswg.org/mediaqueries-5/#prefers-reduced-data Media Queries Level 5},
 * the \`prefers-reduced-data\` media feature has two valid values. Unlike \`prefers-color-scheme\`,
 * \`'no-preference'\` is a real state and is returned as such.
 *
 * When \`matchMedia\` is unavailable (e.g. SSR), returns \`defaultReducedData\`.
 *
 * @param defaultReducedData - Fallback when \`matchMedia\` is unavailable (default: \`'no-preference'\`)
 * @returns 'no-preference' or 'reduce'
 */
export function getPrefersReducedData(
	defaultReducedData: ReducedData = 'no-preference'
): ReducedData {
	return getMediaFeatureValue('prefers-reduced-data', reducedDataValues, defaultReducedData)
}
`})))()}var d,f,p,m,h,g;function _(){return(_=e((()=>{c(),o(),u(),d=t(),f={title:`reduced-data/getPrefersReducedData`,tags:[`func`,`version:3.5`],parameters:n({description:{component:'A utility function that returns the current preferred reduced data setting. It can be "no-preference" or "reduce". Unlike `getPrefersColorScheme`, `no-preference` is a real state and is returned as such, not collapsed into a default.'}}),render:()=>(0,d.jsx)(d.Fragment,{})},p={tags:[`use-case`],parameters:n({source:{code:`getPrefersReducedData(): "no-preference" | "reduce"`}}),decorators:[a({content:(0,d.jsxs)(`div`,{className:`space-y-2`,children:[(0,d.jsxs)(`p`,{children:[(0,d.jsx)(`code`,{children:`getPrefersReducedData()`}),` reads the current `,(0,d.jsx)(`code`,{children:`prefers-reduced-data`}),` `,`value.`]}),(0,d.jsxs)(`p`,{children:[`Accepts optional `,(0,d.jsx)(`code`,{children:`defaultReducedData`}),` (default `,(0,d.jsx)(`code`,{children:`'no-preference'`}),`) returned when `,(0,d.jsx)(`code`,{children:`matchMedia`}),` is unavailable (e.g. SSR).`]}),(0,d.jsxs)(`p`,{children:[`Use this when you need a one-off read of the user's reduced data preference (e.g. for initial render or non-reactive logic). For reactive updates when the preference changes, use `,(0,d.jsx)(`code`,{children:`observePrefersReducedData`}),` instead.`]})]})}),r()],render:()=>{let e=s();return(0,d.jsxs)(i,{title:`Current Reduced Data Preference (prefers-reduced-data)`,appearance:`output`,children:[`Your system is currently set to: `,(0,d.jsx)(`strong`,{children:e})]})}},m={name:`defaultReducedData`,tags:[`props`],parameters:n({source:{code:`getPrefersReducedData('reduce'): 'no-preference' | 'reduce'`}}),decorators:[a({content:(0,d.jsx)(`div`,{className:`space-y-2`,children:(0,d.jsxs)(`p`,{children:[(0,d.jsx)(`code`,{children:`getPrefersReducedData('reduce')`}),` returns `,(0,d.jsx)(`code`,{children:`'reduce'`}),` when`,` `,(0,d.jsx)(`code`,{children:`matchMedia`}),` is unavailable (SSR, test env). In the browser, it returns the real system preference.`]})})}),r()],render:()=>{let e=s(`reduce`);return(0,d.jsxs)(i,{title:`With defaultReducedData: 'reduce'`,appearance:`output`,children:[`Your system is currently set to: `,(0,d.jsx)(`strong`,{children:e})]})}},h={tags:[`source`],parameters:n({source:{code:l}}),decorators:[r()]},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  tags: ['use-case'],
  parameters: defineDocsParam({
    source: {
      code: 'getPrefersReducedData(): "no-preference" | "reduce"'
    }
  }),
  decorators: [withStoryCard({
    content: <div className="space-y-2">
                    <p>
                        <code>getPrefersReducedData()</code> reads the current <code>prefers-reduced-data</code>{' '}
                        value.
                    </p>
                    <p>
                        Accepts optional <code>defaultReducedData</code> (default <code>'no-preference'</code>)
                        returned when <code>matchMedia</code> is unavailable (e.g. SSR).
                    </p>
                    <p>
                        Use this when you need a one-off read of the user's reduced data preference (e.g. for
                        initial render or non-reactive logic). For reactive updates when the preference changes,
                        use <code>observePrefersReducedData</code> instead.
                    </p>
                </div>
  }), showSource()],
  render: () => {
    const reducedData = getPrefersReducedData();
    return <StoryCard title="Current Reduced Data Preference (prefers-reduced-data)" appearance="output">
                Your system is currently set to: <strong>{reducedData}</strong>
            </StoryCard>;
  }
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  name: 'defaultReducedData',
  tags: ['props'],
  parameters: defineDocsParam({
    source: {
      code: "getPrefersReducedData('reduce'): 'no-preference' | 'reduce'"
    }
  }),
  decorators: [withStoryCard({
    content: <div className="space-y-2">
                    <p>
                        <code>getPrefersReducedData('reduce')</code> returns <code>'reduce'</code> when{' '}
                        <code>matchMedia</code> is unavailable (SSR, test env). In the browser, it returns the
                        real system preference.
                    </p>
                </div>
  }), showSource()],
  render: () => {
    const reducedData = getPrefersReducedData('reduce');
    return <StoryCard title="With defaultReducedData: 'reduce'" appearance="output">
                Your system is currently set to: <strong>{reducedData}</strong>
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
}`,...h.parameters?.docs?.source}}},g=[`BasicUsage`,`WithDefaultReducedData`,`Source`]})))()}_();export{p as BasicUsage,h as Source,m as WithDefaultReducedData,g as __namedExportsOrder,f as default};