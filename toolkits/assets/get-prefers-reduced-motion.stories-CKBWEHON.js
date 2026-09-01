import{j as e,S as s,w as a,s as c,d}from"./iframe-BpXj-3b1.js";import{g as u}from"./get-prefers-reduced-motion-D4GvVdcy.js";import"./preload-helper-PPVm8Dsz.js";import"./get-media-feature-value-D3vhnjdc.js";const i=`import { getMediaFeatureValue } from '../_internal/media/get-media-feature-value.ts'
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
`,h={title:"reduced-motion/getPrefersReducedMotion",tags:["func","version:3.5"],parameters:d({description:{component:'A utility function that returns the current preferred reduced motion setting. It can be "no-preference" or "reduce". Unlike `getPrefersColorScheme`, `no-preference` is a real state and is returned as such, not collapsed into a default.'}}),render:()=>e.jsx(e.Fragment,{})},r={tags:["use-case"],parameters:d({source:{code:'getPrefersReducedMotion(): "no-preference" | "reduce"'}}),decorators:[a({content:e.jsxs("div",{className:"space-y-2",children:[e.jsxs("p",{children:[e.jsx("code",{children:"getPrefersReducedMotion()"})," reads the current"," ",e.jsx("code",{children:"prefers-reduced-motion"})," value."]}),e.jsxs("p",{children:["Accepts optional ",e.jsx("code",{children:"defaultReducedMotion"})," (default ",e.jsx("code",{children:"'no-preference'"}),") returned when ",e.jsx("code",{children:"matchMedia"})," is unavailable (e.g. SSR)."]}),e.jsxs("p",{children:["Use this when you need a one-off read of the user's reduced motion preference (e.g. for initial render or non-reactive logic). For reactive updates when the preference changes, use ",e.jsx("code",{children:"observePrefersReducedMotion"})," instead."]})]})}),c()],render:()=>{const n=u();return e.jsxs(s,{title:"Current Reduced Motion Preference (prefers-reduced-motion)",appearance:"output",children:["Your system is currently set to: ",e.jsx("strong",{children:n})]})}},o={name:"defaultReducedMotion",tags:["props"],parameters:d({source:{code:"getPrefersReducedMotion('reduce'): 'no-preference' | 'reduce'"}}),decorators:[a({content:e.jsx("div",{className:"space-y-2",children:e.jsxs("p",{children:[e.jsx("code",{children:"getPrefersReducedMotion('reduce')"})," returns ",e.jsx("code",{children:"'reduce'"})," when"," ",e.jsx("code",{children:"matchMedia"})," is unavailable (SSR, test env). In the browser, it returns the real system preference."]})})}),c()],render:()=>{const n=u("reduce");return e.jsxs(s,{title:"With defaultReducedMotion: 'reduce'",appearance:"output",children:["Your system is currently set to: ",e.jsx("strong",{children:n})]})}},t={tags:["source"],parameters:d({source:{code:i}}),decorators:[c()]};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
}`,...r.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
}`,...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  tags: ['source'],
  parameters: defineDocsParam({
    source: {
      code
    }
  }),
  decorators: [showSource()]
}`,...t.parameters?.docs?.source}}};const g=["BasicUsage","WithDefaultReducedMotion","Source"];export{r as BasicUsage,t as Source,o as WithDefaultReducedMotion,g as __namedExportsOrder,h as default};
