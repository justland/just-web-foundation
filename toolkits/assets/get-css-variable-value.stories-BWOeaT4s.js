import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./react-B6tGW3fj.js";import{a as n}from"./chunk-W22LQPXL-BSpKiHdn.js";import{a as r,c as i,i as a,l as o,s}from"./iframe-BJVp8-w1.js";import{n as c,t as l}from"./dedent-DQaCLeUO.js";import{t as u}from"./define-css-properties-w_xcTR4a.js";import{t as d}from"./get-css-variable-value-Dhr1Rk0v.js";import{t as f}from"./src-X3K_eC4I.js";var p;function m(){return(m=e((()=>{p=`import type { CreateTuple } from 'type-plus'

/**
 * Retrieves CSS custom property values from the specified element.
 *
 * @param element - The HTML element to get property values from
 * @param props - CSS custom property names to retrieve, must be in the format \`--property-name\`
 * @returns Array of property values corresponding to the requested custom properties
 */
export function getCSSVariableValue<Props extends Array<\`--\${string}\`>>(
	element: HTMLElement,
	...props: Props
): CreateTuple<Props['length'], string>
/**
 * Retrieves CSS custom property values from \`document.body\`.
 *
 * @param props - CSS custom property names to retrieve, must be in the format \`--property-name\`
 * @returns Array of property values corresponding to the requested custom properties
 */
export function getCSSVariableValue<Props extends Array<\`--\${string}\`>>(
	...props: Props
): CreateTuple<Props['length'], string>
export function getCSSVariableValue<Props extends Array<\`--\${string}\`>>(
	element: unknown,
	...props: Props
) {
	if (typeof element === 'string') {
		return getCSSVariableValue(globalThis.document.body, element as \`--\${string}\`, ...props)
	}
	const style = globalThis.getComputedStyle(element as HTMLElement)
	return props.map((v) => style.getPropertyValue(v)) as any
}
`})))()}function h(){let e=(0,g.useRef)(null),[t,n]=(0,g.useState)(null);return(0,g.useEffect)(()=>{e.current&&n(d(e.current,`--text-red-100`))},[]),(0,_.jsxs)(_.Fragment,{children:[(0,_.jsx)(`div`,{ref:e,"data-testid":`subject`,style:u({"--text-red-100":`red`})}),(0,_.jsx)(a,{appearance:`output`,children:(0,_.jsx)(`pre`,{children:t===null?`...`:JSON.stringify(t)})})]})}var g,_,v,y,b,x,S,C,w,T;function E(){return(E=e((()=>{f(),s(),c(),g=t(),m(),_=n(),{expect:v}=__STORYBOOK_MODULE_TEST__,y={title:`style/getCSSVariableValue`,tags:[`func`,`version:1.0`],parameters:r({description:{component:`A utility function to retrieve CSS custom property values from an element or document body.`}}),render:()=>(0,_.jsx)(_.Fragment,{})},b={tags:[`source`],parameters:r({source:{code:p}}),decorators:[o({content:(0,_.jsxs)(`p`,{children:[(0,_.jsx)(`code`,{children:`getCSSVariableValue`}),` retrieves CSS custom property values from an element or`,` `,(0,_.jsx)(`code`,{children:`document.body`}),`.`]})}),i()]},x={name:`single variable`,tags:[`use-case`],parameters:r({description:{story:`Gets a single CSS variable value from document body when given one property name.`}}),decorators:[o(),i({source:l`getCSSVariableValue('--color-gray-100')`})],render(){let[e]=d(`--color-gray-100`);return(0,_.jsx)(a,{appearance:`output`,children:(0,_.jsx)(`pre`,{children:JSON.stringify([e])})})},play:async()=>{let[e]=d(`--color-gray-100`);await v(e).toBe(`oklch(96.7% 0.003 264.542)`)}},S={name:`multiple variables`,tags:[`use-case`],parameters:r({description:{story:`Gets multiple CSS variable values from document body.`}}),decorators:[o(),i({source:l`getCSSVariableValue('--color-white', '--color-gray-100')`})],render(){let[e,t]=d(`--color-white`,`--color-gray-100`);return(0,_.jsx)(a,{appearance:`output`,children:(0,_.jsx)(`pre`,{children:JSON.stringify([e,t])})})},play:async()=>{let[e,t]=d(`--color-white`,`--color-gray-100`);await v(e).toBe(`#fff`),await v(t).toBe(`oklch(96.7% 0.003 264.542)`)}},C={name:`from element`,tags:[`use-case`],parameters:r({description:{story:`Gets CSS variable values from a specific element when passed as the first argument.`}}),decorators:[o(),i({source:l`const element = canvas.getByTestId('subject')
getCSSVariableValue(element, '--text-red-100')`})],render:()=>(0,_.jsx)(h,{}),play:async({canvas:e})=>{let t=e.getByTestId(`subject`);await v(d(t,`--text-red-100`)).toEqual([`red`])}},w={name:`when variable does not exist`,tags:[`unit`],parameters:r({description:{story:`Returns empty string for each requested variable that is not defined.`}}),decorators:[o(),i({source:l`getCSSVariableValue('--nonexistent-var')`})],render(){let[e]=d(`--nonexistent-var`);return(0,_.jsx)(a,{appearance:`output`,children:(0,_.jsx)(`pre`,{children:JSON.stringify([e])})})},play:async()=>{let[e]=d(`--nonexistent-var`);await v(e).toBe(``)}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  tags: ['source'],
  parameters: defineDocsParam({
    source: {
      code: source
    }
  }),
  decorators: [withStoryCard({
    content: <p>
                    <code>getCSSVariableValue</code> retrieves CSS custom property values from an element or{' '}
                    <code>document.body</code>.
                </p>
  }), showSource()]
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  name: 'single variable',
  tags: ['use-case'],
  parameters: defineDocsParam({
    description: {
      story: 'Gets a single CSS variable value from document body when given one property name.'
    }
  }),
  decorators: [withStoryCard(), showSource({
    source: dedent\`getCSSVariableValue('--color-gray-100')\`
  })],
  render() {
    const [gray100] = getCSSVariableValue('--color-gray-100');
    return <StoryCard appearance="output">
                <pre>{JSON.stringify([gray100])}</pre>
            </StoryCard>;
  },
  play: async () => {
    const [gray100] = getCSSVariableValue('--color-gray-100');
    await expect(gray100).toBe('oklch(96.7% 0.003 264.542)');
  }
}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  name: 'multiple variables',
  tags: ['use-case'],
  parameters: defineDocsParam({
    description: {
      story: 'Gets multiple CSS variable values from document body.'
    }
  }),
  decorators: [withStoryCard(), showSource({
    source: dedent\`getCSSVariableValue('--color-white', '--color-gray-100')\`
  })],
  render() {
    const [white, gray100] = getCSSVariableValue('--color-white', '--color-gray-100');
    return <StoryCard appearance="output">
                <pre>{JSON.stringify([white, gray100])}</pre>
            </StoryCard>;
  },
  play: async () => {
    const [white, gray100] = getCSSVariableValue('--color-white', '--color-gray-100');
    await expect(white).toBe('#fff');
    await expect(gray100).toBe('oklch(96.7% 0.003 264.542)');
  }
}`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  name: 'from element',
  tags: ['use-case'],
  parameters: defineDocsParam({
    description: {
      story: 'Gets CSS variable values from a specific element when passed as the first argument.'
    }
  }),
  decorators: [withStoryCard(), showSource({
    source: dedent\`const element = canvas.getByTestId('subject')
getCSSVariableValue(element, '--text-red-100')\`
  })],
  render: () => <WithElementDemo />,
  play: async ({
    canvas
  }) => {
    const element = canvas.getByTestId('subject');
    await expect(getCSSVariableValue(element, '--text-red-100')).toEqual(['red']);
  }
}`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  name: 'when variable does not exist',
  tags: ['unit'],
  parameters: defineDocsParam({
    description: {
      story: 'Returns empty string for each requested variable that is not defined.'
    }
  }),
  decorators: [withStoryCard(), showSource({
    source: dedent\`getCSSVariableValue('--nonexistent-var')\`
  })],
  render() {
    const [value] = getCSSVariableValue('--nonexistent-var');
    return <StoryCard appearance="output">
                <pre>{JSON.stringify([value])}</pre>
            </StoryCard>;
  },
  play: async () => {
    const [value] = getCSSVariableValue('--nonexistent-var');
    await expect(value).toBe('');
  }
}`,...w.parameters?.docs?.source}}},T=[`Specification`,`SingleVariable`,`MultipleVariables`,`FromElement`,`VariableDoesNotExist`]})))()}E();export{C as FromElement,S as MultipleVariables,x as SingleVariable,b as Specification,w as VariableDoesNotExist,T as __namedExportsOrder,y as default};