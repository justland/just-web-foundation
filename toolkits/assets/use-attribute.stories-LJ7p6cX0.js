import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./react-B6tGW3fj.js";import{a as n}from"./chunk-W22LQPXL-BSpKiHdn.js";import{a as r,c as i,i as a,l as o,s}from"./iframe-BJVp8-w1.js";import{n as c,t as l}from"./dedent-DQaCLeUO.js";import{n as u,t as d}from"./button-BlO48FDB.js";import{h as f,t as p}from"./react-BIf6FuzT.js";var m;function h(){return(h=e((()=>{m=`import { useCallback, useEffect, useState } from 'react'
import { observeAttributes } from '../../attributes/observe-attribute.ts'

/**
 * React hook that returns the current value of an attribute on a target element
 * and a setter to update it. Stays in sync when the attribute changes (e.g. from elsewhere).
 *
 * @param attributeName - The attribute to observe (e.g. \`'class'\`, \`'data-theme'\`).
 * @param element - The element to observe (accepts null e.g. from refs). Defaults to \`document.documentElement\` when omitted.
 * @returns Tuple of [value, setValue]. Pass null or undefined to setValue to remove the attribute.
 *
 * @example
 * \`\`\`tsx
 * const [className, setClassName] = useAttribute('class')
 * const [theme, setTheme] = useAttribute('data-theme', myElement)
 * setTheme('dark')
 * setClassName(undefined) // removes class attribute
 * \`\`\`
 */
export function useAttribute(
	attributeName: string,
	element: Element | null | undefined = typeof document !== 'undefined'
		? document.documentElement
		: undefined
): [string | undefined, (value: string | null | undefined) => void] {
	const [value, setValueState] = useState<string | undefined>(
		() => element?.getAttribute(attributeName) ?? undefined
	)

	useEffect(() => {
		if (!element) return

		setValueState(element.getAttribute(attributeName) ?? undefined)

		return observeAttributes(
			{
				[attributeName]: (next) => {
					setValueState(next ?? undefined)
				}
			},
			element
		)
	}, [element, attributeName])

	const setValue = useCallback(
		(next: string | null | undefined) => {
			if (!element) return
			if (next == null) {
				element.removeAttribute(attributeName)
			} else {
				element.setAttribute(attributeName, next)
			}
		},
		[element, attributeName]
	)

	return [value, setValue]
}
`})))()}var g,_,v,y,b,x,S,C,w,T,E;function D(){return(D=e((()=>{p(),s(),c(),g=t(),u(),h(),_=n(),{expect:v,userEvent:y}=__STORYBOOK_MODULE_TEST__,b={title:`react/hooks/useAttribute`,tags:[`func`,`version:2.1`],parameters:r({description:{component:`React hook that returns the current value of an attribute on a target element and a setter to update it. Stays in sync when the attribute changes elsewhere.`}}),render:()=>(0,_.jsx)(_.Fragment,{})},x=`data-theme`,S={parameters:r({description:{story:`Observe and set an attribute on document.documentElement. Pass null to setValue to remove the attribute.`},source:{code:l`
                const [value, setValue] = useAttribute('data-theme')
                setValue('dark')
                setValue(null) // removes attribute
            `}}),decorators:[o(),i()],render:()=>{let[e,t]=f(x);return(0,_.jsxs)(`div`,{className:`flex flex-col gap-4 font-sans`,children:[(0,_.jsxs)(`div`,{className:`flex flex-wrap gap-2`,children:[(0,_.jsx)(d,{onPress:()=>t(`light`),children:`Set light`}),(0,_.jsx)(d,{onPress:()=>t(`dark`),children:`Set dark`}),(0,_.jsx)(d,{onPress:()=>t(null),children:`Remove`})]}),(0,_.jsx)(a,{title:(0,_.jsxs)(_.Fragment,{children:[`Current `,(0,_.jsx)(`code`,{children:x})]}),appearance:`output`,children:(0,_.jsx)(`pre`,{"data-testid":`current-value`,className:`font-mono`,children:e??`(not set)`})})]})},play:async({canvas:e,step:t})=>{await t(`Set light`,async()=>{await y.click(e.getByRole(`button`,{name:`Set light`})),await v(e.getByTestId(`current-value`)).toHaveTextContent(`light`)}),await t(`Set dark`,async()=>{await y.click(e.getByRole(`button`,{name:`Set dark`})),await v(e.getByTestId(`current-value`)).toHaveTextContent(`dark`)}),await t(`Remove`,async()=>{await y.click(e.getByRole(`button`,{name:`Remove`})),await v(e.getByTestId(`current-value`)).toHaveTextContent(`(not set)`)})}},C={parameters:r({description:{story:`Observe and set an attribute on a specific element by passing it as the second argument.`},source:{code:l`
                const [element, setElement] = useState<HTMLDivElement | null>(null)
                const [value, setValue] = useAttribute('data-foo', element ?? undefined)
                return <div ref={setElement}>...</div>
            `}}),decorators:[o(),i()],render:()=>{let[e,t]=(0,g.useState)(null),[n,r]=f(`data-foo`,e??void 0);return(0,_.jsxs)(`div`,{className:`flex flex-col gap-4 font-sans`,children:[(0,_.jsx)(`div`,{ref:t,className:`rounded border border-gray-300 p-4`,"data-testid":`target-element`,children:`Target element (data-foo is observed here)`}),(0,_.jsxs)(`div`,{className:`flex flex-wrap gap-2`,children:[(0,_.jsx)(d,{onPress:()=>r(`a`),children:`Set to "a"`}),(0,_.jsx)(d,{onPress:()=>r(`b`),children:`Set to "b"`}),(0,_.jsx)(d,{onPress:()=>r(null),children:`Remove`})]}),(0,_.jsx)(a,{title:(0,_.jsxs)(_.Fragment,{children:[`Current `,(0,_.jsx)(`code`,{children:`data-foo`}),` on target`]}),appearance:`output`,children:(0,_.jsx)(`pre`,{"data-testid":`current-value`,className:`font-mono`,children:n??`(not set)`})})]})},play:async({canvas:e,step:t})=>{await t(`Set to a`,async()=>{await y.click(e.getByRole(`button`,{name:`Set to "a"`})),await v(e.getByTestId(`current-value`)).toHaveTextContent(`a`)}),await t(`Remove`,async()=>{await y.click(e.getByRole(`button`,{name:`Remove`})),await v(e.getByTestId(`current-value`)).toHaveTextContent(`(not set)`)})}},w={parameters:r({description:{story:`The hook stays in sync when the attribute is changed outside of setValue (e.g. by another component or direct DOM mutation).`},source:{code:l`
                const [value] = useAttribute('data-theme')
                // When something else does element.setAttribute('data-theme', 'x'),
                // value updates to 'x' automatically
            `}}),decorators:[o(),i()],render:()=>{let[e]=f(x);return(0,_.jsxs)(`div`,{className:`flex flex-col gap-4 font-sans`,children:[(0,_.jsx)(d,{onPress:()=>{let e=document.documentElement.getAttribute(x)===`synced`?null:`synced`;e===null?document.documentElement.removeAttribute(x):document.documentElement.setAttribute(x,e)},children:`Toggle via setAttribute (external)`}),(0,_.jsxs)(a,{appearance:`output`,children:[(0,_.jsx)(`p`,{className:`mb-2`,children:`Hook value (updates when attribute changes elsewhere):`}),(0,_.jsx)(`pre`,{"data-testid":`current-value`,className:`font-mono`,children:e??`(not set)`})]})]})},play:async({canvas:e})=>{let t=e.getByRole(`button`,{name:/Toggle via setAttribute/});await y.click(t),await v(e.getByTestId(`current-value`)).toHaveTextContent(`synced`),await y.click(t),await v(e.getByTestId(`current-value`)).toHaveTextContent(`(not set)`)}},T={tags:[`source`],parameters:r({source:{code:m}}),decorators:[i()]},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  parameters: defineDocsParam({
    description: {
      story: 'Observe and set an attribute on document.documentElement. Pass null to setValue to remove the attribute.'
    },
    source: {
      code: dedent\`
                const [value, setValue] = useAttribute('data-theme')
                setValue('dark')
                setValue(null) // removes attribute
            \`
    }
  }),
  decorators: [withStoryCard(), showSource()],
  render: () => {
    const [dataTheme, setDataTheme] = useAttribute(ATTRIBUTE_NAME);
    return <div className="flex flex-col gap-4 font-sans">
                <div className="flex flex-wrap gap-2">
                    <Button onPress={() => setDataTheme('light')}>Set light</Button>
                    <Button onPress={() => setDataTheme('dark')}>Set dark</Button>
                    <Button onPress={() => setDataTheme(null)}>Remove</Button>
                </div>
                <StoryCard title={<>
                            Current <code>{ATTRIBUTE_NAME}</code>
                        </>} appearance="output">
                    <pre data-testid="current-value" className="font-mono">
                        {dataTheme ?? '(not set)'}
                    </pre>
                </StoryCard>
            </div>;
  },
  play: async ({
    canvas,
    step
  }) => {
    await step('Set light', async () => {
      await userEvent.click(canvas.getByRole('button', {
        name: 'Set light'
      }));
      await expect(canvas.getByTestId('current-value')).toHaveTextContent('light');
    });
    await step('Set dark', async () => {
      await userEvent.click(canvas.getByRole('button', {
        name: 'Set dark'
      }));
      await expect(canvas.getByTestId('current-value')).toHaveTextContent('dark');
    });
    await step('Remove', async () => {
      await userEvent.click(canvas.getByRole('button', {
        name: 'Remove'
      }));
      await expect(canvas.getByTestId('current-value')).toHaveTextContent('(not set)');
    });
  }
}`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  parameters: defineDocsParam({
    description: {
      story: 'Observe and set an attribute on a specific element by passing it as the second argument.'
    },
    source: {
      code: dedent\`
                const [element, setElement] = useState<HTMLDivElement | null>(null)
                const [value, setValue] = useAttribute('data-foo', element ?? undefined)
                return <div ref={setElement}>...</div>
            \`
    }
  }),
  decorators: [withStoryCard(), showSource()],
  render: () => {
    const [element, setElement] = useState<HTMLDivElement | null>(null);
    const [dataFoo, setDataFoo] = useAttribute('data-foo', element ?? undefined);
    return <div className="flex flex-col gap-4 font-sans">
                <div ref={setElement} className="rounded border border-gray-300 p-4" data-testid="target-element">
                    Target element (data-foo is observed here)
                </div>
                <div className="flex flex-wrap gap-2">
                    <Button onPress={() => setDataFoo('a')}>Set to "a"</Button>
                    <Button onPress={() => setDataFoo('b')}>Set to "b"</Button>
                    <Button onPress={() => setDataFoo(null)}>Remove</Button>
                </div>
                <StoryCard title={<>
                            Current <code>data-foo</code> on target
                        </>} appearance="output">
                    <pre data-testid="current-value" className="font-mono">
                        {dataFoo ?? '(not set)'}
                    </pre>
                </StoryCard>
            </div>;
  },
  play: async ({
    canvas,
    step
  }) => {
    await step('Set to a', async () => {
      await userEvent.click(canvas.getByRole('button', {
        name: 'Set to "a"'
      }));
      await expect(canvas.getByTestId('current-value')).toHaveTextContent('a');
    });
    await step('Remove', async () => {
      await userEvent.click(canvas.getByRole('button', {
        name: 'Remove'
      }));
      await expect(canvas.getByTestId('current-value')).toHaveTextContent('(not set)');
    });
  }
}`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  parameters: defineDocsParam({
    description: {
      story: 'The hook stays in sync when the attribute is changed outside of setValue (e.g. by another component or direct DOM mutation).'
    },
    source: {
      code: dedent\`
                const [value] = useAttribute('data-theme')
                // When something else does element.setAttribute('data-theme', 'x'),
                // value updates to 'x' automatically
            \`
    }
  }),
  decorators: [withStoryCard(), showSource()],
  render: () => {
    const [dataTheme] = useAttribute(ATTRIBUTE_NAME);
    const setExternally = () => {
      const next = document.documentElement.getAttribute(ATTRIBUTE_NAME) === 'synced' ? null : 'synced';
      if (next === null) {
        document.documentElement.removeAttribute(ATTRIBUTE_NAME);
      } else {
        document.documentElement.setAttribute(ATTRIBUTE_NAME, next);
      }
    };
    return <div className="flex flex-col gap-4 font-sans">
                <Button onPress={setExternally}>Toggle via setAttribute (external)</Button>
                <StoryCard appearance="output">
                    <p className="mb-2">Hook value (updates when attribute changes elsewhere):</p>
                    <pre data-testid="current-value" className="font-mono">
                        {dataTheme ?? '(not set)'}
                    </pre>
                </StoryCard>
            </div>;
  },
  play: async ({
    canvas
  }) => {
    const btn = canvas.getByRole('button', {
      name: /Toggle via setAttribute/
    });
    await userEvent.click(btn);
    await expect(canvas.getByTestId('current-value')).toHaveTextContent('synced');
    await userEvent.click(btn);
    await expect(canvas.getByTestId('current-value')).toHaveTextContent('(not set)');
  }
}`,...w.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  tags: ['source'],
  parameters: defineDocsParam({
    source: {
      code
    }
  }),
  decorators: [showSource()]
}`,...T.parameters?.docs?.source}}},E=[`BasicUsage`,`CustomElement`,`SyncFromElsewhere`,`Source`]})))()}D();export{S as BasicUsage,C as CustomElement,T as Source,w as SyncFromElsewhere,E as __namedExportsOrder,b as default};