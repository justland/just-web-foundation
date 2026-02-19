import{j as r,d as n,w as s,s as c,S as d,r as y}from"./iframe-BRbKEAca.js";import{d as S}from"./dedent-BuYMbVyj.js";import{d as f}from"./define-css-properties-Dh8E5HRZ.js";import{g as a}from"./get-css-variable-value-B4-Axp-e.js";import"./preload-helper-PPVm8Dsz.js";const b=`import type { CreateTuple } from 'type-plus'

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
`,{expect:o}=__STORYBOOK_MODULE_TEST__,j={title:"style/getCSSVariableValue",tags:["func","version:next"],parameters:n({description:{component:"A utility function to retrieve CSS custom property values from an element or document body."}}),render:()=>r.jsx(r.Fragment,{})},i={tags:["source"],parameters:n({source:{code:b}}),decorators:[s({content:r.jsxs("p",{children:[r.jsx("code",{children:"getCSSVariableValue"})," retrieves CSS custom property values from an element or"," ",r.jsx("code",{children:"document.body"}),"."]})}),c()]},l={name:"single variable",tags:["use-case"],parameters:n({description:{story:"Gets a single CSS variable value from document body when given one property name."}}),decorators:[s(),c({placement:"before",source:S`getCSSVariableValue('--color-gray-100')`})],render(){const[e]=a("--color-gray-100");return r.jsx(d,{appearance:"output",children:r.jsx("pre",{children:JSON.stringify([e])})})},play:async()=>{const[e]=a("--color-gray-100");await o(e).toBe("oklch(96.7% 0.003 264.542)")}},p={name:"multiple variables",tags:["use-case"],parameters:n({description:{story:"Gets multiple CSS variable values from document body."}}),decorators:[s(),c({placement:"before",source:S`getCSSVariableValue('--color-white', '--color-gray-100')`})],render(){const[e,t]=a("--color-white","--color-gray-100");return r.jsx(d,{appearance:"output",children:r.jsx("pre",{children:JSON.stringify([e,t])})})},play:async()=>{const[e,t]=a("--color-white","--color-gray-100");await o(e).toBe("#fff"),await o(t).toBe("oklch(96.7% 0.003 264.542)")}};function h(){const e=y.useRef(null),[t,g]=y.useState(null);return y.useEffect(()=>{e.current&&g(a(e.current,"--text-red-100"))},[]),r.jsxs(r.Fragment,{children:[r.jsx("div",{ref:e,"data-testid":"subject",style:f({"--text-red-100":"red"})}),r.jsx(d,{appearance:"output",children:r.jsx("pre",{children:t===null?"...":JSON.stringify(t)})})]})}const u={name:"from element",tags:["use-case"],parameters:n({description:{story:"Gets CSS variable values from a specific element when passed as the first argument."}}),decorators:[s(),c({placement:"before",source:S`const element = canvas.getByTestId('subject')
getCSSVariableValue(element, '--text-red-100')`})],render:()=>r.jsx(h,{}),play:async({canvas:e})=>{const t=e.getByTestId("subject");await o(a(t,"--text-red-100")).toEqual(["red"])}},m={name:"when variable does not exist",tags:["unit"],parameters:n({description:{story:"Returns empty string for each requested variable that is not defined."}}),decorators:[s(),c({placement:"before",source:S`getCSSVariableValue('--nonexistent-var')`})],render(){const[e]=a("--nonexistent-var");return r.jsx(d,{appearance:"output",children:r.jsx("pre",{children:JSON.stringify([e])})})},play:async()=>{const[e]=a("--nonexistent-var");await o(e).toBe("")}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
  }), showDocSource()]
}`,...i.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  name: 'single variable',
  tags: ['use-case'],
  parameters: defineDocsParam({
    description: {
      story: 'Gets a single CSS variable value from document body when given one property name.'
    }
  }),
  decorators: [withStoryCard(), showDocSource({
    placement: 'before',
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
}`,...l.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  name: 'multiple variables',
  tags: ['use-case'],
  parameters: defineDocsParam({
    description: {
      story: 'Gets multiple CSS variable values from document body.'
    }
  }),
  decorators: [withStoryCard(), showDocSource({
    placement: 'before',
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
}`,...p.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  name: 'from element',
  tags: ['use-case'],
  parameters: defineDocsParam({
    description: {
      story: 'Gets CSS variable values from a specific element when passed as the first argument.'
    }
  }),
  decorators: [withStoryCard(), showDocSource({
    placement: 'before',
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
}`,...u.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  name: 'when variable does not exist',
  tags: ['unit'],
  parameters: defineDocsParam({
    description: {
      story: 'Returns empty string for each requested variable that is not defined.'
    }
  }),
  decorators: [withStoryCard(), showDocSource({
    placement: 'before',
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
}`,...m.parameters?.docs?.source}}};const D=["Specification","SingleVariable","MultipleVariables","FromElement","VariableDoesNotExist"];export{u as FromElement,p as MultipleVariables,l as SingleVariable,i as Specification,m as VariableDoesNotExist,D as __namedExportsOrder,j as default};
