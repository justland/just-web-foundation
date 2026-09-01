import{j as e,d,w as n,s,S as o}from"./iframe-BF2V-t9M.js";import{g as u}from"./get-prefers-reduced-data-Cqj8l0v_.js";import"./preload-helper-PPVm8Dsz.js";import"./get-media-feature-value-D3vhnjdc.js";const i=`import { getMediaFeatureValue } from '../_internal/media/get-media-feature-value.ts'
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
`,m={title:"reduced-data/getPrefersReducedData",tags:["func","version:3.5"],parameters:d({description:{component:'A utility function that returns the current preferred reduced data setting. It can be "no-preference" or "reduce". Unlike `getPrefersColorScheme`, `no-preference` is a real state and is returned as such, not collapsed into a default.'}}),render:()=>e.jsx(e.Fragment,{})},r={tags:["use-case"],parameters:d({source:{code:'getPrefersReducedData(): "no-preference" | "reduce"'}}),decorators:[n({content:e.jsxs("div",{className:"space-y-2",children:[e.jsxs("p",{children:[e.jsx("code",{children:"getPrefersReducedData()"})," reads the current ",e.jsx("code",{children:"prefers-reduced-data"})," ","value."]}),e.jsxs("p",{children:["Accepts optional ",e.jsx("code",{children:"defaultReducedData"})," (default ",e.jsx("code",{children:"'no-preference'"}),") returned when ",e.jsx("code",{children:"matchMedia"})," is unavailable (e.g. SSR)."]}),e.jsxs("p",{children:["Use this when you need a one-off read of the user's reduced data preference (e.g. for initial render or non-reactive logic). For reactive updates when the preference changes, use ",e.jsx("code",{children:"observePrefersReducedData"})," instead."]})]})}),s()],render:()=>{const c=u();return e.jsxs(o,{title:"Current Reduced Data Preference (prefers-reduced-data)",appearance:"output",children:["Your system is currently set to: ",e.jsx("strong",{children:c})]})}},a={name:"defaultReducedData",tags:["props"],parameters:d({source:{code:"getPrefersReducedData('reduce'): 'no-preference' | 'reduce'"}}),decorators:[n({content:e.jsx("div",{className:"space-y-2",children:e.jsxs("p",{children:[e.jsx("code",{children:"getPrefersReducedData('reduce')"})," returns ",e.jsx("code",{children:"'reduce'"})," when"," ",e.jsx("code",{children:"matchMedia"})," is unavailable (SSR, test env). In the browser, it returns the real system preference."]})})}),s()],render:()=>{const c=u("reduce");return e.jsxs(o,{title:"With defaultReducedData: 'reduce'",appearance:"output",children:["Your system is currently set to: ",e.jsx("strong",{children:c})]})}},t={tags:["source"],parameters:d({source:{code:i}}),decorators:[s()]};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
}`,...r.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
}`,...a.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  tags: ['source'],
  parameters: defineDocsParam({
    source: {
      code
    }
  }),
  decorators: [showSource()]
}`,...t.parameters?.docs?.source}}};const g=["BasicUsage","WithDefaultReducedData","Source"];export{r as BasicUsage,t as Source,a as WithDefaultReducedData,g as __namedExportsOrder,m as default};
