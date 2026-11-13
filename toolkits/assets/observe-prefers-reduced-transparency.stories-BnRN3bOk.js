import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{t}from"./react-pByjoP3I.js";import{a as n}from"./chunk-W22LQPXL-4bVy5MKV.js";import{a as r,c as i,i as a,l as o,s}from"./iframe-CnM9wt1N.js";import{A as c,j as l,t as u}from"./src-BbT8NQzf.js";var d;function f(){return(f=e((()=>{d=`import { observeMediaFeatureValue } from '../_internal/media/observe-media-feature-value.ts'
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
`})))()}var p,m,h,g,_,v;function y(){return(y=e((()=>{u(),s(),p=t(),f(),m=n(),h={title:`reduced-transparency/observePrefersReducedTransparency`,tags:[`func`,`version:3.5`],parameters:r({description:{component:'A utility function that observes system reduced transparency preferences and triggers callbacks when changes occur. Reports "no-preference" or "reduce" as reported by the `prefers-reduced-transparency` media feature.'}}),render:()=>(0,m.jsx)(m.Fragment,{})},g={tags:[`use-case`],parameters:r({description:{story:"Observe `prefers-reduced-transparency` changes."},source:{code:`observePrefersReducedTransparency((value) => { ... }): () => void`}}),decorators:[o({content:(0,m.jsxs)(`div`,{className:`space-y-2`,children:[(0,m.jsxs)(`p`,{children:[(0,m.jsx)(`code`,{children:`observePrefersReducedTransparency(callback)`}),` subscribes to`,` `,(0,m.jsx)(`code`,{children:`prefers-reduced-transparency`}),` changes and runs your callback when the preference changes.`]}),(0,m.jsxs)(`p`,{children:[`Use this when you need reactive updates (e.g. UI that follows the system reduced transparency preference). For a one-off read, use`,` `,(0,m.jsx)(`code`,{children:`getPrefersReducedTransparency`}),` instead.`]}),(0,m.jsx)(`p`,{children:`You should call the returned cleanup function to stop observing when you no longer need it.`})]})}),i()],render:()=>{let[e,t]=(0,p.useState)(l());return(0,p.useEffect)(()=>c(t),[]),(0,m.jsxs)(a,{title:`Current Reduced Transparency Preference (prefers-reduced-transparency)`,appearance:`output`,children:[`Your system is currently set to: `,(0,m.jsx)(`strong`,{children:e})]})}},_={tags:[`source`],parameters:r({source:{code:d}}),decorators:[i()]},v=[`BasicUsage`,`Source`],g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
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
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  tags: ['source'],
  parameters: defineDocsParam({
    source: {
      code
    }
  }),
  decorators: [showSource()]
}`,..._.parameters?.docs?.source}}}})))()}y();export{g as BasicUsage,_ as Source,v as __namedExportsOrder,h as default};