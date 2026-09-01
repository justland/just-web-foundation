import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./react-B6tGW3fj.js";import{a as n}from"./chunk-W22LQPXL-BSpKiHdn.js";import{a as r,c as i,i as a,l as o,s}from"./iframe-BJVp8-w1.js";import{t as c}from"./get-prefers-contrast-CHsL4OQM.js";import{n as l}from"./observe-prefers-contrast-C5CVYmZQ.js";import{t as u}from"./src-X3K_eC4I.js";var d;function f(){return(f=e((()=>{d=`import { observeMediaFeatureValue } from '../_internal/media/observe-media-feature-value.ts'
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
`})))()}var p,m,h,g,_,v;function y(){return(y=e((()=>{u(),s(),p=t(),f(),m=n(),h={title:`contrast/observePrefersContrast`,tags:[`func`,`version:3.5`],parameters:r({description:{component:'A utility function that observes system contrast preferences and triggers callbacks when changes occur. Reports "no-preference", "less", "more" or "custom" as reported by the `prefers-contrast` media feature.'}}),render:()=>(0,m.jsx)(m.Fragment,{})},g={tags:[`use-case`],parameters:r({description:{story:"Observe `prefers-contrast` changes."},source:{code:`observePrefersContrast((value) => { ... }): () => void`}}),decorators:[o({content:(0,m.jsxs)(`div`,{className:`space-y-2`,children:[(0,m.jsxs)(`p`,{children:[(0,m.jsx)(`code`,{children:`observePrefersContrast(callback)`}),` subscribes to`,` `,(0,m.jsx)(`code`,{children:`prefers-contrast`}),` changes and runs your callback when the preference changes.`]}),(0,m.jsxs)(`p`,{children:[`Use this when you need reactive updates (e.g. UI that follows the system contrast preference). For a one-off read, use `,(0,m.jsx)(`code`,{children:`getPrefersContrast`}),` instead.`]}),(0,m.jsx)(`p`,{children:`You should call the returned cleanup function to stop observing when you no longer need it.`})]})}),i()],render:()=>{let[e,t]=(0,p.useState)(c());return(0,p.useEffect)(()=>l(t),[]),(0,m.jsxs)(a,{title:`Current Contrast Preference (prefers-contrast)`,appearance:`output`,children:[`Your system is currently set to: `,(0,m.jsx)(`strong`,{children:e})]})}},_={tags:[`source`],parameters:r({source:{code:d}}),decorators:[i()]},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
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
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  tags: ['source'],
  parameters: defineDocsParam({
    source: {
      code
    }
  }),
  decorators: [showSource()]
}`,..._.parameters?.docs?.source}}},v=[`BasicUsage`,`Source`]})))()}y();export{g as BasicUsage,_ as Source,v as __namedExportsOrder,h as default};