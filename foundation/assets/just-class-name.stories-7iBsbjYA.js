import{j as e,d as a,w as o,s as r,m as c,x as i,y as d}from"./iframe-C-RZD5H3.js";import{c as l}from"./index-Cbpv4Dt2.js";import"./preload-helper-PPVm8Dsz.js";import"./get-attribute-CF0SoFc6.js";import"./get-data-attribute--jGldh73.js";import"./observe-attribute-DyUhIkyT.js";import"./observe-data-attribute-C-q0IQD-.js";import"./resolve-class-name-BeQeRuGi.js";import"./prefers-color-scheme-CSMMlMsB.js";import"./globals.ctx-DOXvZQDb.js";import"./css-properties-Dh8E5HRZ.js";import"./get-css-prop-values-MM-2vHZ3.js";import"./to-dom-style-DZVOeG1x.js";import"./class-name-DJrTHtyi.js";import"./findKey-D_Zca1Sl.js";import"./data-attribute-CbOnTKor.js";import"./px-2-num-BC4tP6kO.js";import"./px-2-rem-CXClvWoR.js";import"./rem-2-px-Bx8XZIkD.js";const m=`import type { JustClassName } from '@just-web/toolkits'
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
`,p=`import type { JustClassName } from '@just-web/toolkits'
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
`,u=`import type { AnyRecord } from 'type-plus'

/**
 * A \`className\` type that can be static or computed from component state.
 *
 * Use this when a component accepts \`className\` that may be:
 *
 * - A **function** – receives current state (including existing \`className\`) and returns the resolved class string or \`undefined\`.
 * - A **string** – used as-is and merged with any existing \`className\` in state.
 * - **undefined** – no additional classes; only \`state.className\` is used.
 *
 * @typeParam States - Record type for component state. Resolvers receive \`States\` merged with \`{ className?: string }\`.
 */
export type JustClassName<States extends AnyRecord = AnyRecord> =
	| ((state: States & { className?: string | undefined }) => string | undefined)
	| string
	| undefined
`,I={title:"class-name/JustClassName",tags:["type","version:next"],parameters:a({description:{component:"`JustClassName` extends the basic `className` type with a callback to invert the flow on control. This allows the consumer to fully control the resulting `className`."}}),render:()=>e.jsx(e.Fragment,{})},n={tags:["source","!test"],parameters:a({source:{code:u}}),decorators:[o({content:e.jsxs(e.Fragment,{children:[e.jsxs("p",{children:[e.jsx("code",{children:"JustClassName"})," extends the basic ",e.jsx("code",{children:"className"})," type with a callback to invert the flow on control. This allows the consumer to fully control the resulting"," ",e.jsx("code",{children:"className"}),"."]}),e.jsxs("p",{children:["In the callback, the function receives the full state object with the"," ",e.jsx("code",{children:"className"})," property, which contains the base ",e.jsx("code",{children:"className"})," produced by the component."]}),e.jsxs("p",{children:["The consumer can append, amend, or override the ",e.jsx("code",{children:"className"})," based on the state."]}),e.jsxs("p",{children:["Comparing to ",e.jsx("code",{children:"JustClassNameProps"}),", ",e.jsx("code",{children:"JustClassName"})," can be used on any props, allowing you to control the API of your component."]})]})}),r({placement:"before"})]},t={tags:["use-case","editor","!test"],parameters:a({description:{story:"Using `JustClassName` without a type parameter: state is `AnyRecord & { className?: string }`. Accepts string, function, or undefined."},source:{code:m}}),decorators:[o({content:e.jsxs(e.Fragment,{children:[e.jsxs("p",{children:["For non-interactive component, you can use ",e.jsx("code",{children:"JustClassName"})," without specifying the type parameter."]}),e.jsxs("p",{children:["The function form receives"," ",e.jsx("code",{children:"state: AnyRecord & { className?: string | undefined }"})]}),e.jsxs("p",{children:["The ",e.jsx("code",{children:"className"})," contains the base class name produced by the component."]}),e.jsxs("p",{children:["You can append or amend the ",e.jsx("code",{children:"className"})," by returning a string based off of it."]}),e.jsx("p",{children:"You can also return a completely new class name by returning different value."})]})}),r({placement:"before"})],play(){}};c(t,{availableImports:{"@just-web/toolkits":l,"@repobuddy/storybook":d,react:i},defaultEditorOptions:{},code:t.parameters?.docs?.source?.code});const s={tags:["use-case","editor","!test"],parameters:a({description:{story:"Using `JustClassName<States>` with a type parameter: the function receives typed state (`States & { className?: string | undefined }`), enabling autocomplete and type checking for custom state fields."},source:{code:p}}),decorators:[o({content:e.jsxs(e.Fragment,{children:[e.jsxs("p",{children:["When using ",e.jsx("code",{children:"JustClassName<States>"})," with a type parameter, the function form receives ",e.jsxs("code",{children:["state: States & ","{ className?: string | undefined }"]})]}),e.jsx("p",{children:"You can use it to customize the class name based on the state."})]})}),r({placement:"before"})],play(){}};c(s,{availableImports:{"@repobuddy/storybook":d,"@just-web/toolkits":l,react:i},code:s.parameters?.docs?.source?.code});n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  tags: ['source', '!test'],
  parameters: defineDocsParam({
    source: {
      code: source
    }
  }),
  decorators: [withStoryCard({
    content: <>
                    <p>
                        <code>JustClassName</code> extends the basic <code>className</code> type with a callback
                        to invert the flow on control. This allows the consumer to fully control the resulting{' '}
                        <code>className</code>.
                    </p>
                    <p>
                        In the callback, the function receives the full state object with the{' '}
                        <code>className</code> property, which contains the base <code>className</code> produced
                        by the component.
                    </p>
                    <p>
                        The consumer can append, amend, or override the <code>className</code> based on the
                        state.
                    </p>
                    <p>
                        Comparing to <code>JustClassNameProps</code>, <code>JustClassName</code> can be used on
                        any props, allowing you to control the API of your component.
                    </p>
                </>
  }), showDocSource({
    placement: 'before'
  })]
}`,...n.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  tags: ['use-case', 'editor', '!test'],
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
                        For non-interactive component, you can use <code>JustClassName</code> without specifying
                        the type parameter.
                    </p>
                    <p>
                        The function form receives{' '}
                        <code>{'state: AnyRecord & { className?: string | undefined }'}</code>
                    </p>
                    <p>
                        The <code>className</code> contains the base class name produced by the component.
                    </p>
                    <p>
                        You can append or amend the <code>className</code> by returning a string based off of
                        it.
                    </p>
                    <p>You can also return a completely new class name by returning different value.</p>
                </>
  }), showDocSource({
    placement: 'before'
  })],
  play() {}
}`,...t.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  tags: ['use-case', 'editor', '!test'],
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
                        When using <code>JustClassName&lt;States&gt;</code> with a type parameter, the function
                        form receives <code>state: States & {'{ className?: string | undefined }'}</code>
                    </p>
                    <p>You can use it to customize the class name based on the state.</p>
                </>
  }), showDocSource({
    placement: 'before'
  })],
  play() {}
}`,...s.parameters?.docs?.source}}};const F=["Specification","NonInteractiveComponent","InteractiveComponent"];export{s as InteractiveComponent,t as NonInteractiveComponent,n as Specification,F as __namedExportsOrder,I as default};
