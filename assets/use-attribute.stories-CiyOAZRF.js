import{r as h,j as t,d as l,w as g,s as b,S as y}from"./iframe-6R7iObMn.js";import{d as x}from"./dedent-BuYMbVyj.js";import{o as w}from"./observe-attribute-DJMrXwPX.js";import{B as n}from"./button-2D35iakA.js";import"./preload-helper-PPVm8Dsz.js";function f(e,a=typeof document<"u"?document.documentElement:void 0){const[o,u]=h.useState(()=>a?.getAttribute(e)??null);return h.useEffect(()=>{if(!a)return;u(a.getAttribute(e));const i=w({[e]:T=>{u(T)}},a);return()=>i.disconnect()},[a,e]),[o,h.useCallback(i=>{a&&(i===null?a.removeAttribute(e):a.setAttribute(e,i))},[a,e])]}const E=`import { useCallback, useEffect, useState } from 'react'
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
		: undefined
): [string | null, (value: string | null) => void] {
	const [value, setValueState] = useState<string | null>(
		() => element?.getAttribute(attributeName) ?? null
	)

	useEffect(() => {
		if (!element) return

		setValueState(element.getAttribute(attributeName))

		const observer = observeAttributes(
			{
				[attributeName]: (next) => {
					setValueState(next)
				}
			},
			element
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
		[element, attributeName]
	)

	return [value, setValue]
}
`,{expect:s,userEvent:r}=__STORYBOOK_MODULE_TEST__,R={title:"react/hooks/useAttribute",tags:["func","version:1.0"],parameters:l({description:{component:"React hook that returns the current value of an attribute on a target element and a setter to update it. Stays in sync when the attribute changes elsewhere."}}),render:()=>t.jsx(t.Fragment,{})},c="data-theme",d={parameters:l({description:{story:"Observe and set an attribute on document.documentElement. Pass null to setValue to remove the attribute."},source:{code:x`
                const [value, setValue] = useAttribute('data-theme')
                setValue('dark')
                setValue(null) // removes attribute
            `}}),decorators:[g(),b()],render:()=>{const[e,a]=f(c);return t.jsxs("div",{className:"flex flex-col gap-4 font-sans",children:[t.jsxs("div",{className:"flex flex-wrap gap-2",children:[t.jsx(n,{onPress:()=>a("light"),children:"Set light"}),t.jsx(n,{onPress:()=>a("dark"),children:"Set dark"}),t.jsx(n,{onPress:()=>a(null),children:"Remove"})]}),t.jsx(y,{title:t.jsxs(t.Fragment,{children:["Current ",t.jsx("code",{children:c})]}),appearance:"output",children:t.jsx("pre",{"data-testid":"current-value",className:"font-mono",children:e??"(not set)"})})]})},play:async({canvas:e,step:a})=>{await a("Set light",async()=>{await r.click(e.getByRole("button",{name:"Set light"})),await s(e.getByTestId("current-value")).toHaveTextContent("light")}),await a("Set dark",async()=>{await r.click(e.getByRole("button",{name:"Set dark"})),await s(e.getByTestId("current-value")).toHaveTextContent("dark")}),await a("Remove",async()=>{await r.click(e.getByRole("button",{name:"Remove"})),await s(e.getByTestId("current-value")).toHaveTextContent("(not set)")})}},m={parameters:l({description:{story:"Observe and set an attribute on a specific element by passing it as the second argument."},source:{code:x`
                const [element, setElement] = useState<HTMLDivElement | null>(null)
                const [value, setValue] = useAttribute('data-foo', element ?? undefined)
                return <div ref={setElement}>...</div>
            `}}),decorators:[g(),b()],render:()=>{const[e,a]=h.useState(null),[o,u]=f("data-foo",e??void 0);return t.jsxs("div",{className:"flex flex-col gap-4 font-sans",children:[t.jsx("div",{ref:a,className:"rounded border border-gray-300 p-4","data-testid":"target-element",children:"Target element (data-foo is observed here)"}),t.jsxs("div",{className:"flex flex-wrap gap-2",children:[t.jsx(n,{onPress:()=>u("a"),children:'Set to "a"'}),t.jsx(n,{onPress:()=>u("b"),children:'Set to "b"'}),t.jsx(n,{onPress:()=>u(null),children:"Remove"})]}),t.jsx(y,{title:t.jsxs(t.Fragment,{children:["Current ",t.jsx("code",{children:"data-foo"})," on target"]}),appearance:"output",children:t.jsx("pre",{"data-testid":"current-value",className:"font-mono",children:o??"(not set)"})})]})},play:async({canvas:e,step:a})=>{await a("Set to a",async()=>{await r.click(e.getByRole("button",{name:'Set to "a"'})),await s(e.getByTestId("current-value")).toHaveTextContent("a")}),await a("Remove",async()=>{await r.click(e.getByRole("button",{name:"Remove"})),await s(e.getByTestId("current-value")).toHaveTextContent("(not set)")})}},v={parameters:l({description:{story:"The hook stays in sync when the attribute is changed outside of setValue (e.g. by another component or direct DOM mutation)."},source:{code:x`
                const [value] = useAttribute('data-theme')
                // When something else does element.setAttribute('data-theme', 'x'),
                // value updates to 'x' automatically
            `}}),decorators:[g(),b()],render:()=>{const[e]=f(c),a=()=>{const o=document.documentElement.getAttribute(c)==="synced"?null:"synced";o===null?document.documentElement.removeAttribute(c):document.documentElement.setAttribute(c,o)};return t.jsxs("div",{className:"flex flex-col gap-4 font-sans",children:[t.jsx(n,{onPress:a,children:"Toggle via setAttribute (external)"}),t.jsxs(y,{appearance:"output",children:[t.jsx("p",{className:"mb-2",children:"Hook value (updates when attribute changes elsewhere):"}),t.jsx("pre",{"data-testid":"current-value",className:"font-mono",children:e??"(not set)"})]})]})},play:async({canvas:e})=>{const a=e.getByRole("button",{name:/Toggle via setAttribute/});await r.click(a),await s(e.getByTestId("current-value")).toHaveTextContent("synced"),await r.click(a),await s(e.getByTestId("current-value")).toHaveTextContent("(not set)")}},p={tags:["source"],parameters:l({source:{code:E}}),decorators:[b()]};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
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
}`,...d.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
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
}`,...m.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
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
}`,...v.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  tags: ['source'],
  parameters: defineDocsParam({
    source: {
      code
    }
  }),
  decorators: [showSource()]
}`,...p.parameters?.docs?.source}}};const N=["BasicUsage","CustomElement","SyncFromElsewhere","Source"];export{d as BasicUsage,m as CustomElement,p as Source,v as SyncFromElsewhere,N as __namedExportsOrder,R as default};
