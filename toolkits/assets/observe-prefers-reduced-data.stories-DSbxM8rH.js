import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{t}from"./react-pByjoP3I.js";import{a as n}from"./chunk-W22LQPXL-4bVy5MKV.js";import{a as r,c as i,i as a,l as o,s}from"./iframe-CnM9wt1N.js";import{R as c,t as l,z as u}from"./src-BbT8NQzf.js";var d;function f(){return(f=e((()=>{d=`import { observeMediaFeatureValue } from '../_internal/media/observe-media-feature-value.ts'
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
`})))()}var p,m,h,g,_,v;function y(){return(y=e((()=>{l(),s(),p=t(),f(),m=n(),h={title:`reduced-data/observePrefersReducedData`,tags:[`func`,`version:3.5`],parameters:r({description:{component:'A utility function that observes system reduced data preferences and triggers callbacks when changes occur. Reports "no-preference" or "reduce" as reported by the `prefers-reduced-data` media feature.'}}),render:()=>(0,m.jsx)(m.Fragment,{})},g={tags:[`use-case`],parameters:r({description:{story:"Observe `prefers-reduced-data` changes."},source:{code:`observePrefersReducedData((value) => { ... }): () => void`}}),decorators:[o({content:(0,m.jsxs)(`div`,{className:`space-y-2`,children:[(0,m.jsxs)(`p`,{children:[(0,m.jsx)(`code`,{children:`observePrefersReducedData(callback)`}),` subscribes to`,` `,(0,m.jsx)(`code`,{children:`prefers-reduced-data`}),` changes and runs your callback when the preference changes.`]}),(0,m.jsxs)(`p`,{children:[`Use this when you need reactive updates (e.g. UI that follows the system reduced data preference). For a one-off read, use `,(0,m.jsx)(`code`,{children:`getPrefersReducedData`}),` instead.`]}),(0,m.jsx)(`p`,{children:`You should call the returned cleanup function to stop observing when you no longer need it.`})]})}),i()],render:()=>{let[e,t]=(0,p.useState)(u());return(0,p.useEffect)(()=>c(t),[]),(0,m.jsxs)(a,{title:`Current Reduced Data Preference (prefers-reduced-data)`,appearance:`output`,children:[`Your system is currently set to: `,(0,m.jsx)(`strong`,{children:e})]})}},_={tags:[`source`],parameters:r({source:{code:d}}),decorators:[i()]},v=[`BasicUsage`,`Source`],g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
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
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  tags: ['source'],
  parameters: defineDocsParam({
    source: {
      code
    }
  }),
  decorators: [showSource()]
}`,..._.parameters?.docs?.source}}}})))()}y();export{g as BasicUsage,_ as Source,v as __namedExportsOrder,h as default};