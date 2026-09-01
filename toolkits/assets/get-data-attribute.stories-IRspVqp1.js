import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{a as t}from"./chunk-W22LQPXL-BSpKiHdn.js";import{a as n,c as r,i,l as a,s as o}from"./iframe-BJVp8-w1.js";import{n as s,t as c}from"./dedent-DQaCLeUO.js";import{t as l}from"./get-data-attribute-DQ3kIIr3.js";import{t as u}from"./src-X3K_eC4I.js";var d;function f(){return(f=e((()=>{d=`import type { DataAttribute } from './data-attribute.ts'
import { getAttribute } from './get-attribute.ts'

/**
 * Gets the value of a data attribute from an element.
 *
 * @param qualifiedName - The name of the data attribute to get
 * @param element - The element to get the data attribute from (accepts null e.g. from refs). Defaults to \`document.documentElement\`
 * @returns The data attribute value, or null if the attribute doesn't exist
 *
 * @example
 */
export function getDataAttribute(
	qualifiedName: DataAttribute,
	element?: Element | null | undefined
) {
	return getAttribute(qualifiedName, element)
}
`})))()}var p,m,h,g,_,v,y;function b(){return(b=e((()=>{u(),o(),s(),f(),p=t(),m={title:`attributes/getDataAttribute`,tags:[`func`,`version:1.0`],parameters:n({description:{component:"A utility function to get `data-*` attribute values from DOM element"}}),argTypes:{qualifiedName:{control:`text`},element:{control:!1}},args:{qualifiedName:`data-subject`},render:()=>(0,p.jsx)(p.Fragment,{})},h={parameters:n({description:{story:`By default, gets the value of a data attribute from document root`},source:{code:c`
                document.documentElement.setAttribute('data-theme', 'some value')
                console.log(getDataAttribute('data-theme'))
            `}}),loaders:[({args:{qualifiedName:e}})=>{document.documentElement.setAttribute(e,`some value`)}],decorators:[a(),r()],render(e){let t=l(e.qualifiedName);return(0,p.jsx)(i,{appearance:`output`,children:(0,p.jsx)(`pre`,{children:JSON.stringify(t,null,2)})})}},g={args:{qualifiedName:`data-custom`},parameters:n({description:{story:`Gets a data attribute value from a specific element`},source:{code:c`
                const element = document.createElement('div')
                element.setAttribute(qualifiedName, 'test-value')
                const value = getDataAttribute(qualifiedName, element)
            `}}),decorators:[a(),r()],render(e){let t=document.createElement(`div`);t.setAttribute(e.qualifiedName,`test-value`);let n=l(e.qualifiedName,t);return(0,p.jsx)(i,{appearance:`output`,children:(0,p.jsx)(`pre`,{children:JSON.stringify(n,null,2)})})}},_={tags:[`unit`],args:{qualifiedName:`data-not-exist`},parameters:n({description:{story:`Returns null when trying to get a non-existent data attribute`},source:{code:c`
                console.log(getDataAttribute('data-not-exist'))
            `}}),decorators:[a(),r()],render(e){let t=l(e.qualifiedName);return(0,p.jsx)(i,{appearance:`output`,children:(0,p.jsx)(`pre`,{children:JSON.stringify(t,null,2)})})}},v={tags:[`source`],parameters:n({source:{code:d}}),decorators:[r()]},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
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
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
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
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
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
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  tags: ['source'],
  parameters: defineDocsParam({
    source: {
      code
    }
  }),
  decorators: [showSource()]
}`,...v.parameters?.docs?.source}}},y=[`FromDocumentRoot`,`FromSpecificElement`,`NonExistentAttribute`,`Source`]})))()}b();export{h as FromDocumentRoot,g as FromSpecificElement,_ as NonExistentAttribute,v as Source,y as __namedExportsOrder,m as default};