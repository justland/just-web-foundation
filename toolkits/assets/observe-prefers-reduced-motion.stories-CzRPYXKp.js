import{j as e,d as s,w as a,s as n,r as t,S as u}from"./iframe-BF2V-t9M.js";import{g as i}from"./get-prefers-reduced-motion-D4GvVdcy.js";import{o as p}from"./observe-prefers-reduced-motion-Bpm1Rvjy.js";import"./preload-helper-PPVm8Dsz.js";import"./get-media-feature-value-D3vhnjdc.js";import"./observe-media-feature-value--S6jnvF8.js";const l=`import { observeMediaFeatureValue } from '../_internal/media/observe-media-feature-value.ts'
import type { ReducedMotion } from './reduced-motion.types.ts'
import { reducedMotionValues } from './reduced-motion.values.ts'

/**
 * Observes system reduced motion preference changes and calls the handler when they occur.
 *
 * @param handler - A function that is called when the reduced motion preference changes
 * @returns A cleanup function that removes all event listeners
 *
 * @example
 * \`\`\`ts
 * const cleanup = observePrefersReducedMotion((value) => console.log('ReducedMotion changed to:', value))
 *
 * // Later, to stop observing:
 * cleanup()
 * \`\`\`
 */
export function observePrefersReducedMotion(handler: (value: ReducedMotion) => void) {
	return observeMediaFeatureValue('prefers-reduced-motion', reducedMotionValues, handler)
}
`,y={title:"reduced-motion/observePrefersReducedMotion",tags:["func","version:3.5"],parameters:s({description:{component:'A utility function that observes system reduced motion preferences and triggers callbacks when changes occur. Reports "no-preference" or "reduce" as reported by the `prefers-reduced-motion` media feature.'}}),render:()=>e.jsx(e.Fragment,{})},r={tags:["use-case"],parameters:s({description:{story:"Observe `prefers-reduced-motion` changes."},source:{code:"observePrefersReducedMotion((value) => { ... }): () => void"}}),decorators:[a({content:e.jsxs("div",{className:"space-y-2",children:[e.jsxs("p",{children:[e.jsx("code",{children:"observePrefersReducedMotion(callback)"})," subscribes to"," ",e.jsx("code",{children:"prefers-reduced-motion"})," changes and runs your callback when the preference changes."]}),e.jsxs("p",{children:["Use this when you need reactive updates (e.g. UI that follows the system reduced motion preference). For a one-off read, use ",e.jsx("code",{children:"getPrefersReducedMotion"})," instead."]}),e.jsx("p",{children:"You should call the returned cleanup function to stop observing when you no longer need it."})]})}),n()],render:()=>{const[c,d]=t.useState(i());return t.useEffect(()=>p(d),[]),e.jsxs(u,{title:"Current Reduced Motion Preference (prefers-reduced-motion)",appearance:"output",children:["Your system is currently set to: ",e.jsx("strong",{children:c})]})}},o={tags:["source"],parameters:s({source:{code:l}}),decorators:[n()]};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  tags: ['use-case'],
  parameters: defineDocsParam({
    description: {
      story: 'Observe \`prefers-reduced-motion\` changes.'
    },
    source: {
      code: 'observePrefersReducedMotion((value) => { ... }): () => void'
    }
  }),
  decorators: [withStoryCard({
    content: <div className="space-y-2">
                    <p>
                        <code>observePrefersReducedMotion(callback)</code> subscribes to{' '}
                        <code>prefers-reduced-motion</code> changes and runs your callback when the preference
                        changes.
                    </p>
                    <p>
                        Use this when you need reactive updates (e.g. UI that follows the system reduced motion
                        preference). For a one-off read, use <code>getPrefersReducedMotion</code> instead.
                    </p>
                    <p>
                        You should call the returned cleanup function to stop observing when you no longer need
                        it.
                    </p>
                </div>
  }), showSource()],
  render: () => {
    const [reducedMotion, setReducedMotion] = useState(getPrefersReducedMotion());
    useEffect(() => observePrefersReducedMotion(setReducedMotion), []);
    return <StoryCard title="Current Reduced Motion Preference (prefers-reduced-motion)" appearance="output">
                Your system is currently set to: <strong>{reducedMotion}</strong>
            </StoryCard>;
  }
}`,...r.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  tags: ['source'],
  parameters: defineDocsParam({
    source: {
      code
    }
  }),
  decorators: [showSource()]
}`,...o.parameters?.docs?.source}}};const M=["BasicUsage","Source"];export{r as BasicUsage,o as Source,M as __namedExportsOrder,y as default};
