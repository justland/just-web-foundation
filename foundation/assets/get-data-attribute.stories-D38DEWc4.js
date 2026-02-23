import{j as t,d as r,w as d,s as i,S as m}from"./iframe-Pea2t46H.js";import{d as c}from"./dedent-BuYMbVyj.js";import{g as l}from"./get-data-attribute-Bl9c_7h4.js";import"./preload-helper-PPVm8Dsz.js";import"./get-attribute-BI4biMNS.js";const f=`import type { DataAttribute } from './data-attribute.ts'
import { getAttribute } from './get-attribute.ts'

/**
 * Gets the value of a data attribute from an element.
 *
 * @param qualifiedName - The name of the data attribute to get
 * @param element - The element to get the data attribute from. Defaults to \`document.documentElement\`
 * @returns The data attribute value, or null if the attribute doesn't exist
 *
 * @example
 */
export function getDataAttribute(
	qualifiedName: DataAttribute,
	element?: Element | null | undefined,
) {
	return getAttribute(qualifiedName, element)
}
`,h={title:"attributes/getDataAttribute",tags:["func","version:next"],parameters:r({description:{component:"A utility function to get `data-*` attribute values from DOM element"}}),argTypes:{qualifiedName:{control:"text"},element:{control:!1}},args:{qualifiedName:"data-subject"},render:()=>t.jsx(t.Fragment,{})},n={parameters:r({description:{story:"By default, gets the value of a data attribute from document root"},source:{code:c`
                document.documentElement.setAttribute('data-theme', 'some value')
                console.log(getDataAttribute('data-theme'))
            `}}),loaders:[({args:{qualifiedName:e}})=>{document.documentElement.setAttribute(e,"some value")}],decorators:[d(),i()],render(e){const a=l(e.qualifiedName);return t.jsx(m,{appearance:"output",children:t.jsx("pre",{children:JSON.stringify(a,null,2)})})}},o={args:{qualifiedName:"data-custom"},parameters:r({description:{story:"Gets a data attribute value from a specific element"},source:{code:c`
                const element = document.createElement('div')
                element.setAttribute(qualifiedName, 'test-value')
                const value = getDataAttribute(qualifiedName, element)
            `}}),decorators:[d(),i()],render(e){const a=document.createElement("div");a.setAttribute(e.qualifiedName,"test-value");const p=l(e.qualifiedName,a);return t.jsx(m,{appearance:"output",children:t.jsx("pre",{children:JSON.stringify(p,null,2)})})}},s={tags:["unit"],args:{qualifiedName:"data-not-exist"},parameters:r({description:{story:"Returns null when trying to get a non-existent data attribute"},source:{code:c`
                console.log(getDataAttribute('data-not-exist'))
            `}}),decorators:[d(),i()],render(e){const a=l(e.qualifiedName);return t.jsx(m,{appearance:"output",children:t.jsx("pre",{children:JSON.stringify(a,null,2)})})}},u={tags:["source"],parameters:r({source:{code:f}}),decorators:[i()]};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  parameters: defineDocsParam({
    description: {
      story: 'By default, gets the value of a data attribute from document root'
    },
    source: {
      code: dedent\`
                document.documentElement.setAttribute('data-theme', 'some value')
                console.log(getDataAttribute('data-theme'))
            \`
    }
  }),
  loaders: [({
    args: {
      qualifiedName
    }
  }) => {
    document.documentElement.setAttribute(qualifiedName, 'some value');
  }],
  decorators: [withStoryCard(), showSource()],
  render(props) {
    const value = getDataAttribute(props.qualifiedName);
    return <StoryCard appearance="output">
                <pre>{JSON.stringify(value, null, 2)}</pre>
            </StoryCard>;
  }
}`,...n.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    qualifiedName: 'data-custom'
  },
  parameters: defineDocsParam({
    description: {
      story: 'Gets a data attribute value from a specific element'
    },
    source: {
      code: dedent\`
                const element = document.createElement('div')
                element.setAttribute(qualifiedName, 'test-value')
                const value = getDataAttribute(qualifiedName, element)
            \`
    }
  }),
  decorators: [withStoryCard(), showSource()],
  render(props) {
    const element = document.createElement('div');
    element.setAttribute(props.qualifiedName, 'test-value');
    const value = getDataAttribute(props.qualifiedName, element);
    return <StoryCard appearance="output">
                <pre>{JSON.stringify(value, null, 2)}</pre>
            </StoryCard>;
  }
}`,...o.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  tags: ['unit'],
  args: {
    qualifiedName: 'data-not-exist'
  },
  parameters: defineDocsParam({
    description: {
      story: 'Returns null when trying to get a non-existent data attribute'
    },
    source: {
      code: dedent\`
                console.log(getDataAttribute('data-not-exist'))
            \`
    }
  }),
  decorators: [withStoryCard(), showSource()],
  render(props) {
    const value = getDataAttribute(props.qualifiedName);
    return <StoryCard appearance="output">
                <pre>{JSON.stringify(value, null, 2)}</pre>
            </StoryCard>;
  }
}`,...s.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  tags: ['source'],
  parameters: defineDocsParam({
    source: {
      code
    }
  }),
  decorators: [showSource()]
}`,...u.parameters?.docs?.source}}};const y=["FromDocumentRoot","FromSpecificElement","NonExistentAttribute","Source"];export{n as FromDocumentRoot,o as FromSpecificElement,s as NonExistentAttribute,u as Source,y as __namedExportsOrder,h as default};
