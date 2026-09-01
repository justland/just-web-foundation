import{j as e,d as c,w as t,s as d,S as o}from"./iframe-BF2V-t9M.js";import{g as u}from"./get-prefers-reduced-transparency-JPUbF0w7.js";import"./preload-helper-PPVm8Dsz.js";import"./get-media-feature-value-D3vhnjdc.js";const p=`import { getMediaFeatureValue } from '../_internal/media/get-media-feature-value.ts'
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
`,h={title:"reduced-transparency/getPrefersReducedTransparency",tags:["func","version:3.5"],parameters:c({description:{component:'A utility function that returns the current preferred reduced transparency setting. It can be "no-preference" or "reduce". Unlike `getPrefersColorScheme`, `no-preference` is a real state and is returned as such, not collapsed into a default.'}}),render:()=>e.jsx(e.Fragment,{})},r={tags:["use-case"],parameters:c({source:{code:'getPrefersReducedTransparency(): "no-preference" | "reduce"'}}),decorators:[t({content:e.jsxs("div",{className:"space-y-2",children:[e.jsxs("p",{children:[e.jsx("code",{children:"getPrefersReducedTransparency()"})," reads the current"," ",e.jsx("code",{children:"prefers-reduced-transparency"})," value."]}),e.jsxs("p",{children:["Accepts optional ",e.jsx("code",{children:"defaultReducedTransparency"})," (default"," ",e.jsx("code",{children:"'no-preference'"}),") returned when ",e.jsx("code",{children:"matchMedia"})," is unavailable (e.g. SSR)."]}),e.jsxs("p",{children:["Use this when you need a one-off read of the user's reduced transparency preference (e.g. for initial render or non-reactive logic). For reactive updates when the preference changes, use ",e.jsx("code",{children:"observePrefersReducedTransparency"})," instead."]})]})}),d()],render:()=>{const s=u();return e.jsxs(o,{title:"Current Reduced Transparency Preference (prefers-reduced-transparency)",appearance:"output",children:["Your system is currently set to: ",e.jsx("strong",{children:s})]})}},a={name:"defaultReducedTransparency",tags:["props"],parameters:c({source:{code:"getPrefersReducedTransparency('reduce'): 'no-preference' | 'reduce'"}}),decorators:[t({content:e.jsx("div",{className:"space-y-2",children:e.jsxs("p",{children:[e.jsx("code",{children:"getPrefersReducedTransparency('reduce')"})," returns ",e.jsx("code",{children:"'reduce'"})," when"," ",e.jsx("code",{children:"matchMedia"})," is unavailable (SSR, test env). In the browser, it returns the real system preference."]})})}),d()],render:()=>{const s=u("reduce");return e.jsxs(o,{title:"With defaultReducedTransparency: 'reduce'",appearance:"output",children:["Your system is currently set to: ",e.jsx("strong",{children:s})]})}},n={tags:["source"],parameters:c({source:{code:p}}),decorators:[d()]};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
}`,...r.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
}`,...a.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  tags: ['source'],
  parameters: defineDocsParam({
    source: {
      code
    }
  }),
  decorators: [showSource()]
}`,...n.parameters?.docs?.source}}};const m=["BasicUsage","WithDefaultReducedTransparency","Source"];export{r as BasicUsage,n as Source,a as WithDefaultReducedTransparency,m as __namedExportsOrder,h as default};
