import{j as t,d as r,w as c,s as i,S as m}from"./iframe-DzxfLDSr.js";import{d}from"./dedent-BuYMbVyj.js";import{g as l}from"./get-attribute-CF0SoFc6.js";import"./preload-helper-PPVm8Dsz.js";const f=`/**
 * Gets the value of an attribute from an element.
 *
 * @param qualifiedName - The name of the attribute to get
 * @param element - The element to get the attribute from. Defaults to \`document.documentElement\`
 * @returns The attribute value cast to type T, or null if the attribute doesn't exist
 *
 * @example
 * \`\`\`ts
 * // Get theme from document root
 * const theme = getAttribute('data-theme')
 *
 * // Get data-testid from a specific element
 * const testId = getAttribute('data-testid', element)
 * \`\`\`
 */
export function getAttribute<T extends string>(
	qualifiedName: T,
	element: Element | undefined = globalThis.document.documentElement,
) {
	return element?.getAttribute(qualifiedName)
}
`,N={title:"attributes/getAttribute",tags:["func","version:next"],parameters:r({description:{component:"A utility function to get attribute values from DOM element"}}),argTypes:{qualifiedName:{control:"text"},element:{control:!1}},args:{qualifiedName:"data-subject"},render:()=>t.jsx(t.Fragment,{})},a={parameters:r({description:{story:"By default, gets the value of an attribute from document root"},source:{code:d`
                document.documentElement.setAttribute('data-theme', 'some value')
                console.log(getAttribute('data-theme'))
                `}}),loaders:[({args:{qualifiedName:e}})=>{document.documentElement.setAttribute(e,"some value")}],decorators:[c(),i({placement:"before"})],render(e){const n=l(e.qualifiedName);return t.jsx(m,{appearance:"output",children:t.jsx("pre",{children:JSON.stringify(n,null,2)})})}},o={args:{qualifiedName:"data-custom"},parameters:r({description:{story:"Gets an attribute value from a specific element"},source:{code:d`
                const element = document.createElement('div')
                element.setAttribute(qualifiedName, 'test-value')
                const value = getAttribute(qualifiedName, element)
            `}}),decorators:[c(),i({placement:"before"})],render(e){const n=document.createElement("div");n.setAttribute(e.qualifiedName,"test-value");const p=l(e.qualifiedName,n);return t.jsx(m,{appearance:"output",children:t.jsx("pre",{children:JSON.stringify(p,null,2)})})}},s={tags:["unit"],args:{qualifiedName:"data-not-exist"},parameters:r({description:{story:"Returns null when trying to get a non-existent attribute"},source:{code:d`
                console.log(getAttribute('data-not-exist'))
            `}}),decorators:[c(),i({placement:"before"})],render(e){const n=l(e.qualifiedName);return t.jsx(m,{appearance:"output",children:t.jsx("pre",{children:JSON.stringify(n,null,2)})})}},u={tags:["source"],parameters:r({source:{code:f}}),decorators:[i()]};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  parameters: defineDocsParam({
    description: {
      story: 'By default, gets the value of an attribute from document root'
    },
    source: {
      code: dedent\`
                document.documentElement.setAttribute('data-theme', 'some value')
                console.log(getAttribute('data-theme'))
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
  decorators: [withStoryCard(), showDocSource({
    placement: 'before'
  })],
  render(props) {
    const value = getAttribute(props.qualifiedName);
    return <StoryCard appearance="output">
                <pre>{JSON.stringify(value, null, 2)}</pre>
            </StoryCard>;
  }
}`,...a.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    qualifiedName: 'data-custom'
  },
  parameters: defineDocsParam({
    description: {
      story: 'Gets an attribute value from a specific element'
    },
    source: {
      code: dedent\`
                const element = document.createElement('div')
                element.setAttribute(qualifiedName, 'test-value')
                const value = getAttribute(qualifiedName, element)
            \`
    }
  }),
  decorators: [withStoryCard(), showDocSource({
    placement: 'before'
  })],
  render(props) {
    const element = document.createElement('div');
    element.setAttribute(props.qualifiedName, 'test-value');
    const value = getAttribute(props.qualifiedName, element);
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
      story: 'Returns null when trying to get a non-existent attribute'
    },
    source: {
      code: dedent\`
                console.log(getAttribute('data-not-exist'))
            \`
    }
  }),
  decorators: [withStoryCard(), showDocSource({
    placement: 'before'
  })],
  render(props) {
    const value = getAttribute(props.qualifiedName);
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
  decorators: [showDocSource()]
}`,...u.parameters?.docs?.source}}};const S=["FromDocumentRoot","FromSpecificElement","NonExistentAttribute","Source"];export{a as FromDocumentRoot,o as FromSpecificElement,s as NonExistentAttribute,u as Source,S as __namedExportsOrder,N as default};
