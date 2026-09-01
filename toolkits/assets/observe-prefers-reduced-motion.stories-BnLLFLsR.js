import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./react-B6tGW3fj.js";import{a as n}from"./chunk-W22LQPXL-BSpKiHdn.js";import{a as r,c as i,i as a,l as o,s}from"./iframe-BJVp8-w1.js";import{t as c}from"./get-prefers-reduced-motion-BX7HN6AR.js";import{n as l}from"./observe-prefers-reduced-motion-Boun_zRj.js";import{t as u}from"./src-X3K_eC4I.js";var d;function f(){return(f=e((()=>{d=`import { observeMediaFeatureValue } from '../_internal/media/observe-media-feature-value.ts'
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
`})))()}var p,m,h,g,_,v;function y(){return(y=e((()=>{u(),s(),p=t(),f(),m=n(),h={title:`reduced-motion/observePrefersReducedMotion`,tags:[`func`,`version:3.5`],parameters:r({description:{component:'A utility function that observes system reduced motion preferences and triggers callbacks when changes occur. Reports "no-preference" or "reduce" as reported by the `prefers-reduced-motion` media feature.'}}),render:()=>(0,m.jsx)(m.Fragment,{})},g={tags:[`use-case`],parameters:r({description:{story:"Observe `prefers-reduced-motion` changes."},source:{code:`observePrefersReducedMotion((value) => { ... }): () => void`}}),decorators:[o({content:(0,m.jsxs)(`div`,{className:`space-y-2`,children:[(0,m.jsxs)(`p`,{children:[(0,m.jsx)(`code`,{children:`observePrefersReducedMotion(callback)`}),` subscribes to`,` `,(0,m.jsx)(`code`,{children:`prefers-reduced-motion`}),` changes and runs your callback when the preference changes.`]}),(0,m.jsxs)(`p`,{children:[`Use this when you need reactive updates (e.g. UI that follows the system reduced motion preference). For a one-off read, use `,(0,m.jsx)(`code`,{children:`getPrefersReducedMotion`}),` instead.`]}),(0,m.jsx)(`p`,{children:`You should call the returned cleanup function to stop observing when you no longer need it.`})]})}),i()],render:()=>{let[e,t]=(0,p.useState)(c());return(0,p.useEffect)(()=>l(t),[]),(0,m.jsxs)(a,{title:`Current Reduced Motion Preference (prefers-reduced-motion)`,appearance:`output`,children:[`Your system is currently set to: `,(0,m.jsx)(`strong`,{children:e})]})}},_={tags:[`source`],parameters:r({source:{code:d}}),decorators:[i()]},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
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
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  tags: ['source'],
  parameters: defineDocsParam({
    source: {
      code
    }
  }),
  decorators: [showSource()]
}`,..._.parameters?.docs?.source}}},v=[`BasicUsage`,`Source`]})))()}y();export{g as BasicUsage,_ as Source,v as __namedExportsOrder,h as default};