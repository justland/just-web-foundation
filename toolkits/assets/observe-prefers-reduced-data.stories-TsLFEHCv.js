import{j as e,d as s,w as n,s as d,r as t,S as u}from"./iframe-BF2V-t9M.js";import{g as p}from"./get-prefers-reduced-data-Cqj8l0v_.js";import{o as i}from"./observe-prefers-reduced-data-B__XwK7s.js";import"./preload-helper-PPVm8Dsz.js";import"./get-media-feature-value-D3vhnjdc.js";import"./observe-media-feature-value--S6jnvF8.js";const l=`import { observeMediaFeatureValue } from '../_internal/media/observe-media-feature-value.ts'
import type { ReducedData } from './reduced-data.types.ts'
import { reducedDataValues } from './reduced-data.values.ts'

/**
 * Observes system reduced data preference changes and calls the handler when they occur.
 *
 * @param handler - A function that is called when the reduced data preference changes
 * @returns A cleanup function that removes all event listeners
 *
 * @example
 * \`\`\`ts
 * const cleanup = observePrefersReducedData((value) => console.log('ReducedData changed to:', value))
 *
 * // Later, to stop observing:
 * cleanup()
 * \`\`\`
 */
export function observePrefersReducedData(handler: (value: ReducedData) => void) {
	return observeMediaFeatureValue('prefers-reduced-data', reducedDataValues, handler)
}
`,D={title:"reduced-data/observePrefersReducedData",tags:["func","version:3.5"],parameters:s({description:{component:'A utility function that observes system reduced data preferences and triggers callbacks when changes occur. Reports "no-preference" or "reduce" as reported by the `prefers-reduced-data` media feature.'}}),render:()=>e.jsx(e.Fragment,{})},r={tags:["use-case"],parameters:s({description:{story:"Observe `prefers-reduced-data` changes."},source:{code:"observePrefersReducedData((value) => { ... }): () => void"}}),decorators:[n({content:e.jsxs("div",{className:"space-y-2",children:[e.jsxs("p",{children:[e.jsx("code",{children:"observePrefersReducedData(callback)"})," subscribes to"," ",e.jsx("code",{children:"prefers-reduced-data"})," changes and runs your callback when the preference changes."]}),e.jsxs("p",{children:["Use this when you need reactive updates (e.g. UI that follows the system reduced data preference). For a one-off read, use ",e.jsx("code",{children:"getPrefersReducedData"})," instead."]}),e.jsx("p",{children:"You should call the returned cleanup function to stop observing when you no longer need it."})]})}),d()],render:()=>{const[c,o]=t.useState(p());return t.useEffect(()=>i(o),[]),e.jsxs(u,{title:"Current Reduced Data Preference (prefers-reduced-data)",appearance:"output",children:["Your system is currently set to: ",e.jsx("strong",{children:c})]})}},a={tags:["source"],parameters:s({source:{code:l}}),decorators:[d()]};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  tags: ['use-case'],
  parameters: defineDocsParam({
    description: {
      story: 'Observe \`prefers-reduced-data\` changes.'
    },
    source: {
      code: 'observePrefersReducedData((value) => { ... }): () => void'
    }
  }),
  decorators: [withStoryCard({
    content: <div className="space-y-2">
                    <p>
                        <code>observePrefersReducedData(callback)</code> subscribes to{' '}
                        <code>prefers-reduced-data</code> changes and runs your callback when the preference
                        changes.
                    </p>
                    <p>
                        Use this when you need reactive updates (e.g. UI that follows the system reduced data
                        preference). For a one-off read, use <code>getPrefersReducedData</code> instead.
                    </p>
                    <p>
                        You should call the returned cleanup function to stop observing when you no longer need
                        it.
                    </p>
                </div>
  }), showSource()],
  render: () => {
    const [reducedData, setReducedData] = useState(getPrefersReducedData());
    useEffect(() => observePrefersReducedData(setReducedData), []);
    return <StoryCard title="Current Reduced Data Preference (prefers-reduced-data)" appearance="output">
                Your system is currently set to: <strong>{reducedData}</strong>
            </StoryCard>;
  }
}`,...r.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  tags: ['source'],
  parameters: defineDocsParam({
    source: {
      code
    }
  }),
  decorators: [showSource()]
}`,...a.parameters?.docs?.source}}};const y=["BasicUsage","Source"];export{r as BasicUsage,a as Source,y as __namedExportsOrder,D as default};
