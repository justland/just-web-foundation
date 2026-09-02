import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{a as t}from"./chunk-W22LQPXL-BSpKiHdn.js";import{a as n,c as r,i,l as a,s as o}from"./iframe-C-caXvtV.js";import{t as s}from"./get-prefers-reduced-motion-BX7HN6AR.js";import{t as c}from"./src-RbTQJPcv.js";var l;function u(){return(u=e((()=>{l=`import { getMediaFeatureValue } from '../_internal/media/get-media-feature-value.ts'
import type { ReducedMotion } from './reduced-motion.types.ts'
import { reducedMotionValues } from './reduced-motion.values.ts'

/**
 * Gets the current reduced motion preference.
 *
 * Per {@link https://drafts.csswg.org/mediaqueries-5/#prefers-reduced-motion Media Queries Level 5},
 * the \`prefers-reduced-motion\` media feature has two valid values. Unlike \`prefers-color-scheme\`,
 * \`'no-preference'\` is a real state and is returned as such.
 *
 * When \`matchMedia\` is unavailable (e.g. SSR), returns \`defaultReducedMotion\`.
 *
 * @param defaultReducedMotion - Fallback when \`matchMedia\` is unavailable (default: \`'no-preference'\`)
 * @returns 'no-preference' or 'reduce'
 */
export function getPrefersReducedMotion(
	defaultReducedMotion: ReducedMotion = 'no-preference'
): ReducedMotion {
	return getMediaFeatureValue('prefers-reduced-motion', reducedMotionValues, defaultReducedMotion)
}
`})))()}var d,f,p,m,h,g;function _(){return(_=e((()=>{c(),o(),u(),d=t(),f={title:`reduced-motion/getPrefersReducedMotion`,tags:[`func`,`version:3.5`],parameters:n({description:{component:'A utility function that returns the current preferred reduced motion setting. It can be "no-preference" or "reduce". Unlike `getPrefersColorScheme`, `no-preference` is a real state and is returned as such, not collapsed into a default.'}}),render:()=>(0,d.jsx)(d.Fragment,{})},p={tags:[`use-case`],parameters:n({source:{code:`getPrefersReducedMotion(): "no-preference" | "reduce"`}}),decorators:[a({content:(0,d.jsxs)(`div`,{className:`space-y-2`,children:[(0,d.jsxs)(`p`,{children:[(0,d.jsx)(`code`,{children:`getPrefersReducedMotion()`}),` reads the current`,` `,(0,d.jsx)(`code`,{children:`prefers-reduced-motion`}),` value.`]}),(0,d.jsxs)(`p`,{children:[`Accepts optional `,(0,d.jsx)(`code`,{children:`defaultReducedMotion`}),` (default `,(0,d.jsx)(`code`,{children:`'no-preference'`}),`) returned when `,(0,d.jsx)(`code`,{children:`matchMedia`}),` is unavailable (e.g. SSR).`]}),(0,d.jsxs)(`p`,{children:[`Use this when you need a one-off read of the user's reduced motion preference (e.g. for initial render or non-reactive logic). For reactive updates when the preference changes, use `,(0,d.jsx)(`code`,{children:`observePrefersReducedMotion`}),` instead.`]})]})}),r()],render:()=>{let e=s();return(0,d.jsxs)(i,{title:`Current Reduced Motion Preference (prefers-reduced-motion)`,appearance:`output`,children:[`Your system is currently set to: `,(0,d.jsx)(`strong`,{children:e})]})}},m={name:`defaultReducedMotion`,tags:[`props`],parameters:n({source:{code:`getPrefersReducedMotion('reduce'): 'no-preference' | 'reduce'`}}),decorators:[a({content:(0,d.jsx)(`div`,{className:`space-y-2`,children:(0,d.jsxs)(`p`,{children:[(0,d.jsx)(`code`,{children:`getPrefersReducedMotion('reduce')`}),` returns `,(0,d.jsx)(`code`,{children:`'reduce'`}),` when`,` `,(0,d.jsx)(`code`,{children:`matchMedia`}),` is unavailable (SSR, test env). In the browser, it returns the real system preference.`]})})}),r()],render:()=>{let e=s(`reduce`);return(0,d.jsxs)(i,{title:`With defaultReducedMotion: 'reduce'`,appearance:`output`,children:[`Your system is currently set to: `,(0,d.jsx)(`strong`,{children:e})]})}},h={tags:[`source`],parameters:n({source:{code:l}}),decorators:[r()]},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  tags: ['use-case'],
  parameters: defineDocsParam({
    source: {
      code: 'getPrefersReducedMotion(): "no-preference" | "reduce"'
    }
  }),
  decorators: [withStoryCard({
    content: <div className="space-y-2">
                    <p>
                        <code>getPrefersReducedMotion()</code> reads the current{' '}
                        <code>prefers-reduced-motion</code> value.
                    </p>
                    <p>
                        Accepts optional <code>defaultReducedMotion</code> (default <code>'no-preference'</code>
                        ) returned when <code>matchMedia</code> is unavailable (e.g. SSR).
                    </p>
                    <p>
                        Use this when you need a one-off read of the user's reduced motion preference (e.g. for
                        initial render or non-reactive logic). For reactive updates when the preference changes,
                        use <code>observePrefersReducedMotion</code> instead.
                    </p>
                </div>
  }), showSource()],
  render: () => {
    const reducedMotion = getPrefersReducedMotion();
    return <StoryCard title="Current Reduced Motion Preference (prefers-reduced-motion)" appearance="output">
                Your system is currently set to: <strong>{reducedMotion}</strong>
            </StoryCard>;
  }
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  name: 'defaultReducedMotion',
  tags: ['props'],
  parameters: defineDocsParam({
    source: {
      code: "getPrefersReducedMotion('reduce'): 'no-preference' | 'reduce'"
    }
  }),
  decorators: [withStoryCard({
    content: <div className="space-y-2">
                    <p>
                        <code>getPrefersReducedMotion('reduce')</code> returns <code>'reduce'</code> when{' '}
                        <code>matchMedia</code> is unavailable (SSR, test env). In the browser, it returns the
                        real system preference.
                    </p>
                </div>
  }), showSource()],
  render: () => {
    const reducedMotion = getPrefersReducedMotion('reduce');
    return <StoryCard title="With defaultReducedMotion: 'reduce'" appearance="output">
                Your system is currently set to: <strong>{reducedMotion}</strong>
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
}`,...h.parameters?.docs?.source}}},g=[`BasicUsage`,`WithDefaultReducedMotion`,`Source`]})))()}_();export{p as BasicUsage,h as Source,m as WithDefaultReducedMotion,g as __namedExportsOrder,f as default};