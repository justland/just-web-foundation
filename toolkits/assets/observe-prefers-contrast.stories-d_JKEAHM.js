import{j as e,d as t,w as u,s as a,r as o,S as d}from"./iframe-BF2V-t9M.js";import{g as p}from"./get-prefers-contrast-DyhaFsxO.js";import{o as i}from"./observe-prefers-contrast-BeXHHVYn.js";import"./preload-helper-PPVm8Dsz.js";import"./get-media-feature-value-D3vhnjdc.js";import"./observe-media-feature-value--S6jnvF8.js";const l=`import { observeMediaFeatureValue } from '../_internal/media/observe-media-feature-value.ts'
import type { Contrast } from './contrast.types.ts'
import { contrastValues } from './contrast.values.ts'

/**
 * Observes system contrast preference changes and calls the handler when they occur.
 *
 * @param handler - A function that is called when the contrast preference changes
 * @returns A cleanup function that removes all event listeners
 *
 * @example
 * \`\`\`ts
 * const cleanup = observePrefersContrast((value) => console.log('Contrast changed to:', value))
 *
 * // Later, to stop observing:
 * cleanup()
 * \`\`\`
 */
export function observePrefersContrast(handler: (value: Contrast) => void) {
	return observeMediaFeatureValue('prefers-contrast', contrastValues, handler)
}
`,y={title:"contrast/observePrefersContrast",tags:["func","version:3.5"],parameters:t({description:{component:'A utility function that observes system contrast preferences and triggers callbacks when changes occur. Reports "no-preference", "less", "more" or "custom" as reported by the `prefers-contrast` media feature.'}}),render:()=>e.jsx(e.Fragment,{})},r={tags:["use-case"],parameters:t({description:{story:"Observe `prefers-contrast` changes."},source:{code:"observePrefersContrast((value) => { ... }): () => void"}}),decorators:[u({content:e.jsxs("div",{className:"space-y-2",children:[e.jsxs("p",{children:[e.jsx("code",{children:"observePrefersContrast(callback)"})," subscribes to"," ",e.jsx("code",{children:"prefers-contrast"})," changes and runs your callback when the preference changes."]}),e.jsxs("p",{children:["Use this when you need reactive updates (e.g. UI that follows the system contrast preference). For a one-off read, use ",e.jsx("code",{children:"getPrefersContrast"})," instead."]}),e.jsx("p",{children:"You should call the returned cleanup function to stop observing when you no longer need it."})]})}),a()],render:()=>{const[n,c]=o.useState(p());return o.useEffect(()=>i(c),[]),e.jsxs(d,{title:"Current Contrast Preference (prefers-contrast)",appearance:"output",children:["Your system is currently set to: ",e.jsx("strong",{children:n})]})}},s={tags:["source"],parameters:t({source:{code:l}}),decorators:[a()]};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  tags: ['use-case'],
  parameters: defineDocsParam({
    description: {
      story: 'Observe \`prefers-contrast\` changes.'
    },
    source: {
      code: 'observePrefersContrast((value) => { ... }): () => void'
    }
  }),
  decorators: [withStoryCard({
    content: <div className="space-y-2">
                    <p>
                        <code>observePrefersContrast(callback)</code> subscribes to{' '}
                        <code>prefers-contrast</code> changes and runs your callback when the preference
                        changes.
                    </p>
                    <p>
                        Use this when you need reactive updates (e.g. UI that follows the system contrast
                        preference). For a one-off read, use <code>getPrefersContrast</code> instead.
                    </p>
                    <p>
                        You should call the returned cleanup function to stop observing when you no longer need
                        it.
                    </p>
                </div>
  }), showSource()],
  render: () => {
    const [contrast, setContrast] = useState(getPrefersContrast());
    useEffect(() => observePrefersContrast(setContrast), []);
    return <StoryCard title="Current Contrast Preference (prefers-contrast)" appearance="output">
                Your system is currently set to: <strong>{contrast}</strong>
            </StoryCard>;
  }
}`,...r.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  tags: ['source'],
  parameters: defineDocsParam({
    source: {
      code
    }
  }),
  decorators: [showSource()]
}`,...s.parameters?.docs?.source}}};const C=["BasicUsage","Source"];export{r as BasicUsage,s as Source,C as __namedExportsOrder,y as default};
