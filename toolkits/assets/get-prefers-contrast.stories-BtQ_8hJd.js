import{j as e,d as a,w as c,s as n,S as d}from"./iframe-BF2V-t9M.js";import{g as i}from"./get-prefers-contrast-DyhaFsxO.js";import"./preload-helper-PPVm8Dsz.js";import"./get-media-feature-value-D3vhnjdc.js";const u=`import { getMediaFeatureValue } from '../_internal/media/get-media-feature-value.ts'
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
`,h={title:"contrast/getPrefersContrast",tags:["func","version:3.5"],parameters:a({description:{component:'A utility function that returns the current preferred contrast. It can be "no-preference", "less", "more" or "custom". Unlike `getPrefersColorScheme`, `no-preference` is a real state and is returned as such, not collapsed into a default.'}}),render:()=>e.jsx(e.Fragment,{})},r={tags:["use-case"],parameters:a({source:{code:'getPrefersContrast(): "no-preference" | "less" | "more" | "custom"'}}),decorators:[c({content:e.jsxs("div",{className:"space-y-2",children:[e.jsxs("p",{children:[e.jsx("code",{children:"getPrefersContrast()"})," reads the current ",e.jsx("code",{children:"prefers-contrast"})," value."]}),e.jsxs("p",{children:["Accepts optional ",e.jsx("code",{children:"defaultContrast"})," (default ",e.jsx("code",{children:"'no-preference'"}),") returned when ",e.jsx("code",{children:"matchMedia"})," is unavailable (e.g. SSR)."]}),e.jsxs("p",{children:["Use this when you need a one-off read of the user's contrast preference (e.g. for initial render or non-reactive logic). For reactive updates when the preference changes, use ",e.jsx("code",{children:"observePrefersContrast"})," instead."]})]})}),n()],render:()=>{const o=i();return e.jsxs(d,{title:"Current Contrast Preference (prefers-contrast)",appearance:"output",children:["Your system is currently set to: ",e.jsx("strong",{children:o})]})}},t={name:"defaultContrast",tags:["props"],parameters:a({source:{code:"getPrefersContrast('more'): 'no-preference' | 'less' | 'more' | 'custom'"}}),decorators:[c({content:e.jsx("div",{className:"space-y-2",children:e.jsxs("p",{children:[e.jsx("code",{children:"getPrefersContrast('more')"})," returns ",e.jsx("code",{children:"'more'"})," when"," ",e.jsx("code",{children:"matchMedia"})," is unavailable (SSR, test env). In the browser, it returns the real system preference."]})})}),n()],render:()=>{const o=i("more");return e.jsxs(d,{title:"With defaultContrast: 'more'",appearance:"output",children:["Your system is currently set to: ",e.jsx("strong",{children:o})]})}},s={tags:["source"],parameters:a({source:{code:u}}),decorators:[n()]};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
}`,...r.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
}`,...t.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  tags: ['source'],
  parameters: defineDocsParam({
    source: {
      code
    }
  }),
  decorators: [showSource()]
}`,...s.parameters?.docs?.source}}};const g=["BasicUsage","WithDefaultContrast","Source"];export{r as BasicUsage,s as Source,t as WithDefaultContrast,g as __namedExportsOrder,h as default};
