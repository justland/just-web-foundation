import{r as a,j as e,S as d,w as u,s as c,d as n}from"./iframe-BpXj-3b1.js";import{g as p}from"./get-prefers-reduced-transparency-JPUbF0w7.js";import{o as i}from"./observe-prefers-reduced-transparency-r0yFSKKP.js";import"./preload-helper-PPVm8Dsz.js";import"./get-media-feature-value-D3vhnjdc.js";import"./observe-media-feature-value--S6jnvF8.js";const l=`import { observeMediaFeatureValue } from '../_internal/media/observe-media-feature-value.ts'
import type { ReducedTransparency } from './reduced-transparency.types.ts'
import { reducedTransparencyValues } from './reduced-transparency.values.ts'

/**
 * Observes system reduced transparency preference changes and calls the handler when they occur.
 *
 * @param handler - A function that is called when the reduced transparency preference changes
 * @returns A cleanup function that removes all event listeners
 *
 * @example
 * \`\`\`ts
 * const cleanup = observePrefersReducedTransparency((value) => console.log('ReducedTransparency changed to:', value))
 *
 * // Later, to stop observing:
 * cleanup()
 * \`\`\`
 */
export function observePrefersReducedTransparency(handler: (value: ReducedTransparency) => void) {
	return observeMediaFeatureValue(
		'prefers-reduced-transparency',
		reducedTransparencyValues,
		handler
	)
}
`,b={title:"reduced-transparency/observePrefersReducedTransparency",tags:["func","version:3.5"],parameters:n({description:{component:'A utility function that observes system reduced transparency preferences and triggers callbacks when changes occur. Reports "no-preference" or "reduce" as reported by the `prefers-reduced-transparency` media feature.'}}),render:()=>e.jsx(e.Fragment,{})},r={tags:["use-case"],parameters:n({description:{story:"Observe `prefers-reduced-transparency` changes."},source:{code:"observePrefersReducedTransparency((value) => { ... }): () => void"}}),decorators:[u({content:e.jsxs("div",{className:"space-y-2",children:[e.jsxs("p",{children:[e.jsx("code",{children:"observePrefersReducedTransparency(callback)"})," subscribes to"," ",e.jsx("code",{children:"prefers-reduced-transparency"})," changes and runs your callback when the preference changes."]}),e.jsxs("p",{children:["Use this when you need reactive updates (e.g. UI that follows the system reduced transparency preference). For a one-off read, use"," ",e.jsx("code",{children:"getPrefersReducedTransparency"})," instead."]}),e.jsx("p",{children:"You should call the returned cleanup function to stop observing when you no longer need it."})]})}),c()],render:()=>{const[t,o]=a.useState(p());return a.useEffect(()=>i(o),[]),e.jsxs(d,{title:"Current Reduced Transparency Preference (prefers-reduced-transparency)",appearance:"output",children:["Your system is currently set to: ",e.jsx("strong",{children:t})]})}},s={tags:["source"],parameters:n({source:{code:l}}),decorators:[c()]};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  tags: ['use-case'],
  parameters: defineDocsParam({
    description: {
      story: 'Observe \`prefers-reduced-transparency\` changes.'
    },
    source: {
      code: 'observePrefersReducedTransparency((value) => { ... }): () => void'
    }
  }),
  decorators: [withStoryCard({
    content: <div className="space-y-2">
                    <p>
                        <code>observePrefersReducedTransparency(callback)</code> subscribes to{' '}
                        <code>prefers-reduced-transparency</code> changes and runs your callback when the
                        preference changes.
                    </p>
                    <p>
                        Use this when you need reactive updates (e.g. UI that follows the system reduced
                        transparency preference). For a one-off read, use{' '}
                        <code>getPrefersReducedTransparency</code> instead.
                    </p>
                    <p>
                        You should call the returned cleanup function to stop observing when you no longer need
                        it.
                    </p>
                </div>
  }), showSource()],
  render: () => {
    const [reducedTransparency, setReducedTransparency] = useState(getPrefersReducedTransparency());
    useEffect(() => observePrefersReducedTransparency(setReducedTransparency), []);
    return <StoryCard title="Current Reduced Transparency Preference (prefers-reduced-transparency)" appearance="output">
                Your system is currently set to: <strong>{reducedTransparency}</strong>
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
}`,...s.parameters?.docs?.source}}};const T=["BasicUsage","Source"];export{r as BasicUsage,s as Source,T as __namedExportsOrder,b as default};
