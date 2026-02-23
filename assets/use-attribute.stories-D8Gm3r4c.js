import{j as e,d as u,w as h,s as v,S as b,r as y}from"./iframe-DpiIn1Pa.js";import{d as g}from"./dedent-BuYMbVyj.js";import{u as x}from"./use-attribute-av9Vq1Nf.js";import{B as n}from"./button-DwHF6N6V.js";import"./preload-helper-PPVm8Dsz.js";import"./observe-attribute-DJMrXwPX.js";import"./resolve-class-name-ma8rMboq.js";const f=`import { useCallback, useEffect, useState } from 'react'
import { observeAttributes } from '../../attributes/observe-attribute.ts'

/**
 * React hook that returns the current value of an attribute on a target element
 * and a setter to update it. Stays in sync when the attribute changes (e.g. from elsewhere).
 *
 * @param attributeName - The attribute to observe (e.g. \`'class'\`, \`'data-theme'\`).
 * @param element - The element to observe. Defaults to \`document.documentElement\` when omitted.
 * @returns Tuple of [value, setValue]. Pass null to setValue to remove the attribute.
 *
 * @example
 * \`\`\`tsx
 * const [className, setClassName] = useAttribute('class')
 * const [theme, setTheme] = useAttribute('data-theme', myElement)
 * setTheme('dark')
 * setClassName(null) // removes class attribute
 * \`\`\`
 */
export function useAttribute(
	attributeName: string,
	element: Element | undefined = typeof document !== 'undefined'
		? document.documentElement
		: undefined,
): [string | null, (value: string | null) => void] {
	const [value, setValueState] = useState<string | null>(
		() => element?.getAttribute(attributeName) ?? null,
	)

	useEffect(() => {
		if (!element) return

		setValueState(element.getAttribute(attributeName))

		const observer = observeAttributes(
			{
				[attributeName]: (next) => {
					setValueState(next)
				},
			},
			element,
		)
		return () => observer.disconnect()
	}, [element, attributeName])

	const setValue = useCallback(
		(next: string | null) => {
			if (!element) return
			if (next === null) {
				element.removeAttribute(attributeName)
			} else {
				element.setAttribute(attributeName, next)
			}
		},
		[element, attributeName],
	)

	return [value, setValue]
}
`,{expect:s,userEvent:r}=__STORYBOOK_MODULE_TEST__,k={title:"react/hooks/useAttribute",tags:["func","version:next"],parameters:u({description:{component:"React hook that returns the current value of an attribute on a target element and a setter to update it. Stays in sync when the attribute changes elsewhere."}}),render:()=>e.jsx(e.Fragment,{})},o="data-theme",c={parameters:u({description:{story:"Observe and set an attribute on document.documentElement. Pass null to setValue to remove the attribute."},source:{code:g`
                const [value, setValue] = useAttribute('data-theme')
                setValue('dark')
                setValue(null) // removes attribute
            `}}),decorators:[h(),v()],render:()=>{const[t,a]=x(o);return e.jsxs("div",{className:"flex flex-col gap-4 font-sans",children:[e.jsxs("div",{className:"flex flex-wrap gap-2",children:[e.jsx(n,{onPress:()=>a("light"),children:"Set light"}),e.jsx(n,{onPress:()=>a("dark"),children:"Set dark"}),e.jsx(n,{onPress:()=>a(null),children:"Remove"})]}),e.jsx(b,{title:e.jsxs(e.Fragment,{children:["Current ",e.jsx("code",{children:o})]}),appearance:"output",children:e.jsx("pre",{"data-testid":"current-value",className:"font-mono",children:t??"(not set)"})})]})},play:async({canvas:t,step:a})=>{await a("Set light",async()=>{await r.click(t.getByRole("button",{name:"Set light"})),await s(t.getByTestId("current-value")).toHaveTextContent("light")}),await a("Set dark",async()=>{await r.click(t.getByRole("button",{name:"Set dark"})),await s(t.getByTestId("current-value")).toHaveTextContent("dark")}),await a("Remove",async()=>{await r.click(t.getByRole("button",{name:"Remove"})),await s(t.getByTestId("current-value")).toHaveTextContent("(not set)")})}},i={parameters:u({description:{story:"Observe and set an attribute on a specific element by passing it as the second argument."},source:{code:g`
                const [element, setElement] = useState<HTMLDivElement | null>(null)
                const [value, setValue] = useAttribute('data-foo', element ?? undefined)
                return <div ref={setElement}>...</div>
            `}}),decorators:[h(),v()],render:()=>{const[t,a]=y.useState(null),[l,p]=x("data-foo",t??void 0);return e.jsxs("div",{className:"flex flex-col gap-4 font-sans",children:[e.jsx("div",{ref:a,className:"rounded border border-gray-300 p-4","data-testid":"target-element",children:"Target element (data-foo is observed here)"}),e.jsxs("div",{className:"flex flex-wrap gap-2",children:[e.jsx(n,{onPress:()=>p("a"),children:'Set to "a"'}),e.jsx(n,{onPress:()=>p("b"),children:'Set to "b"'}),e.jsx(n,{onPress:()=>p(null),children:"Remove"})]}),e.jsx(b,{title:e.jsxs(e.Fragment,{children:["Current ",e.jsx("code",{children:"data-foo"})," on target"]}),appearance:"output",children:e.jsx("pre",{"data-testid":"current-value",className:"font-mono",children:l??"(not set)"})})]})},play:async({canvas:t,step:a})=>{await a("Set to a",async()=>{await r.click(t.getByRole("button",{name:'Set to "a"'})),await s(t.getByTestId("current-value")).toHaveTextContent("a")}),await a("Remove",async()=>{await r.click(t.getByRole("button",{name:"Remove"})),await s(t.getByTestId("current-value")).toHaveTextContent("(not set)")})}},d={parameters:u({description:{story:"The hook stays in sync when the attribute is changed outside of setValue (e.g. by another component or direct DOM mutation)."},source:{code:g`
                const [value] = useAttribute('data-theme')
                // When something else does element.setAttribute('data-theme', 'x'),
                // value updates to 'x' automatically
            `}}),decorators:[h(),v()],render:()=>{const[t]=x(o),a=()=>{const l=document.documentElement.getAttribute(o)==="synced"?null:"synced";l===null?document.documentElement.removeAttribute(o):document.documentElement.setAttribute(o,l)};return e.jsxs("div",{className:"flex flex-col gap-4 font-sans",children:[e.jsx(n,{onPress:a,children:"Toggle via setAttribute (external)"}),e.jsxs(b,{appearance:"output",children:[e.jsx("p",{className:"mb-2",children:"Hook value (updates when attribute changes elsewhere):"}),e.jsx("pre",{"data-testid":"current-value",className:"font-mono",children:t??"(not set)"})]})]})},play:async({canvas:t})=>{const a=t.getByRole("button",{name:/Toggle via setAttribute/});await r.click(a),await s(t.getByTestId("current-value")).toHaveTextContent("synced"),await r.click(a),await s(t.getByTestId("current-value")).toHaveTextContent("(not set)")}},m={tags:["source"],parameters:u({source:{code:f}}),decorators:[v()]};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
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
}`,...c.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
}`,...i.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
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
}`,...d.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  tags: ['source'],
  parameters: defineDocsParam({
    source: {
      code
    }
  }),
  decorators: [showSource()]
}`,...m.parameters?.docs?.source}}};const C=["BasicUsage","CustomElement","SyncFromElsewhere","Source"];export{c as BasicUsage,i as CustomElement,m as Source,d as SyncFromElsewhere,C as __namedExportsOrder,k as default};
