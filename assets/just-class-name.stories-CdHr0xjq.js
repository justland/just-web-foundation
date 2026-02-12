import{j as e,d as n,w as o,s as r,u as c,v as i}from"./iframe-DzxfLDSr.js";import{m as d}from"./index-COsJgdk1.js";import{c as m}from"./index-CP2wypEn.js";import"./preload-helper-PPVm8Dsz.js";import"./get-attribute-CF0SoFc6.js";import"./get-data-attribute--jGldh73.js";import"./observe-attribute-DyUhIkyT.js";import"./observe-data-attribute-C-q0IQD-.js";import"./resolve-class-name-Do2ucap8.js";import"./prefers-color-scheme-CSMMlMsB.js";import"./globals.ctx-AnFbK9hv.js";import"./css-properties-Dh8E5HRZ.js";import"./get-css-prop-values-Cr55G-ev.js";import"./to-dom-style-DZVOeG1x.js";import"./class-name-DJrTHtyi.js";import"./findKey-BZZwGHNT.js";import"./data-attribute-CbOnTKor.js";import"./px-2-num-BC4tP6kO.js";import"./px-2-rem-CXClvWoR.js";import"./rem-2-px-Bx8XZIkD.js";const p=`import type { JustClassName } from '@just-web/toolkits'
import { StoryCard } from '@repobuddy/storybook'

// By default JustClassName = string | ((state) => string | undefined) | undefined
// State is AnyRecord & { className?: string }
const stringClassName: JustClassName = 'text-blue-600'
const functionClassName: JustClassName = (state) => (state.className ? 'with-base' : undefined)
const undefinedClassName: JustClassName = undefined

export default () => {
	return (
		<StoryCard appearance="output">
			<div>String: {stringClassName}</div>
			<div>Function: {functionClassName({ className: 'base' })}</div>
			<div>Undefined: {undefinedClassName === undefined ? '(undefined)' : ''}</div>
		</StoryCard>
	)
}
`,u=`import type { AnyRecord } from 'type-plus'

/**
 * A type that represents a class name that can be a function or a string.
 */
export type JustClassName<States extends AnyRecord = AnyRecord> =
	| ((state: States & { className?: string | undefined }) => string | undefined)
	| string
	| undefined
`,l=`import type { JustClassName } from '@just-web/toolkits'
import { StoryCard } from '@repobuddy/storybook'

interface ButtonStates {
	isDisabled?: boolean | undefined
	isPressed?: boolean | undefined
}

// With type param: function receives typed state (ButtonStates & { className?: string })
const classNameWhenDisabled: JustClassName<ButtonStates> = (state) =>
	state.isDisabled ? \`\${state.className ?? ''} opacity-50 cursor-not-allowed\` : state.className

const classNameWhenActive: JustClassName<ButtonStates> = (state) =>
	state.isPressed ? \`\${state.className ?? ''} ring-2 ring-blue-500\` : state.className

export default () => {
	const state: ButtonStates = { isDisabled: true, isPressed: true }
	return (
		<StoryCard appearance="output">
			<div>without className: {classNameWhenDisabled(state)}</div>
			<div>with className: {classNameWhenActive({ ...state, className: 'btn' })}</div>
		</StoryCard>
	)
}
`,U={title:"class-name/JustClassName",tags:["type","version:next","autodocs"],parameters:n({description:{component:"Type for a class name that can be a string, a function `(state: States & { className? }) => string | undefined`, or undefined. Use with `resolveClassName()` to resolve the final class string."}}),render:()=>e.jsx(e.Fragment,{})},t={tags:["!test","editor"],parameters:n({description:{story:"Using `JustClassName` without a type parameter: state is `AnyRecord & { className?: string }`. Accepts string, function, or undefined."},source:{code:p}}),decorators:[o({content:e.jsx(e.Fragment,{children:e.jsxs("p",{children:[e.jsx("code",{children:"JustClassName"})," accepts string, function, or undefined."]})})}),r({placement:"before"})],play(){}};d(t,{availableImports:{"@just-web/toolkits":m,"@repobuddy/storybook":i,react:c},defaultEditorOptions:{},code:t.parameters?.docs?.source?.code});const s={tags:["!test","editor"],parameters:n({description:{story:"Using `JustClassName<States>` with a type parameter: the function receives typed state (`States & { className?: string | undefined }`), enabling autocomplete and type checking for custom state fields."},source:{code:l}}),decorators:[o({content:e.jsxs(e.Fragment,{children:[e.jsxs("p",{children:["When using ",e.jsx("code",{children:"JustClassName<States>"})," with a type parameter,"]}),e.jsxs("p",{children:["the function form receives ",e.jsxs("code",{children:["state: States & ","{ className?: string | undefined }"]})]}),e.jsx("p",{children:"You can use it to customize the class name based on the state."})]})}),r({placement:"before"})],play(){}};d(s,{availableImports:{"@repobuddy/storybook":i,"@just-web/toolkits":m,react:c},code:s.parameters?.docs?.source?.code});const a={tags:["!test","source"],parameters:n({source:{code:u}}),decorators:[r({placement:"before"})]};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  tags: ['!test', 'editor'],
  parameters: defineDocsParam({
    description: {
      story: 'Using \`JustClassName\` without a type parameter: state is \`AnyRecord & { className?: string }\`. Accepts string, function, or undefined.'
    },
    source: {
      code: codeDefault
    }
  }),
  decorators: [withStoryCard({
    content: <>
                    <p>
                        <code>JustClassName</code> accepts string, function, or undefined.
                    </p>
                </>
  }), showDocSource({
    placement: 'before'
  })],
  play() {}
}`,...t.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  tags: ['!test', 'editor'],
  parameters: defineDocsParam({
    description: {
      story: 'Using \`JustClassName<States>\` with a type parameter: the function receives typed state (\`States & { className?: string | undefined }\`), enabling autocomplete and type checking for custom state fields.'
    },
    source: {
      code: codeTyped
    }
  }),
  decorators: [withStoryCard({
    content: <>
                    <p>
                        When using <code>JustClassName&lt;States&gt;</code> with a type parameter,
                    </p>
                    <p>
                        the function form receives <code>state: States & {'{ className?: string | undefined }'}</code>
                    </p>
                    <p>You can use it to customize the class name based on the state.</p>
                </>
  }), showDocSource({
    placement: 'before'
  })],
  play() {}
}`,...s.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  tags: ['!test', 'source'],
  parameters: defineDocsParam({
    source: {
      code: source
    }
  }),
  decorators: [showDocSource({
    placement: 'before'
  })]
}`,...a.parameters?.docs?.source}}};const T=["BasicUsage","WithTypeParam","Source"];export{t as BasicUsage,a as Source,s as WithTypeParam,T as __namedExportsOrder,U as default};
