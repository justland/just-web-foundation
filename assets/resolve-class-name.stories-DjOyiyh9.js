import{d as e,w as t,s as o,j as i}from"./iframe-DzxfLDSr.js";import{r as d}from"./resolve-class-name-Do2ucap8.js";import"./preload-helper-PPVm8Dsz.js";const p={title:"utils/resolveClassName",tags:["autodocs","version:next"],parameters:e({description:{component:"A utility function to resolve class names from state, supporting both string and function-based className resolution."}})},s={name:"className: string",tags:["props"],parameters:e({description:{story:"Resolves className when provided as a string. Combines defaultClassName with the provided className."}}),decorators:[t(),o()],render(){return i.jsxs("div",{children:["Result: ",d({defaultClassName:"base-class"},"additional-class")]})}},a={name:"className: function",tags:["props"],parameters:e({description:{story:"Resolves className when provided as a function. The function receives the state and returns the className. Note: When using a function, it returns only the function result (not combined with defaultClassName)."}}),decorators:[t(),o()],render(){return i.jsx("div",{children:d({defaultClassName:"base-class",isActive:!0,count:5},c=>c.isActive?"active-class":"inactive-class")})}},n={name:"className: undefined",tags:["props"],parameters:e({description:{story:"Returns only the defaultClassName when className is undefined."}}),decorators:[t(),o()],render(){return i.jsx("div",{children:d({defaultClassName:"base-class"},void 0)})}},r={name:"className: function returns undefined",tags:["props"],parameters:e({description:{story:"When className is a function that returns undefined, it uses the defaultClassName only."}}),decorators:[t(),o()],render(){return i.jsx("div",{children:d({defaultClassName:"base-class",shouldShow:!1},c=>c.shouldShow?"visible-class":void 0)===void 0?"(undefined)":"(not undefined)"})}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  name: 'className: string',
  tags: ['props'],
  parameters: defineDocsParam({
    description: {
      story: 'Resolves className when provided as a string. Combines defaultClassName with the provided className.'
    }
  }),
  decorators: [withStoryCard(), showDocSource()],
  render() {
    return <div>Result: {resolveClassName({
        defaultClassName: 'base-class'
      }, 'additional-class')}</div>;
  }
}`,...s.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  name: 'className: function',
  tags: ['props'],
  parameters: defineDocsParam({
    description: {
      story: 'Resolves className when provided as a function. The function receives the state and returns the className. Note: When using a function, it returns only the function result (not combined with defaultClassName).'
    }
  }),
  decorators: [withStoryCard(), showDocSource()],
  render() {
    return <div>
                {resolveClassName({
        defaultClassName: 'base-class',
        isActive: true,
        count: 5
      }, s => s.isActive ? 'active-class' : 'inactive-class')}
            </div>;
  }
}`,...a.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  name: 'className: undefined',
  tags: ['props'],
  parameters: defineDocsParam({
    description: {
      story: 'Returns only the defaultClassName when className is undefined.'
    }
  }),
  decorators: [withStoryCard(), showDocSource()],
  render() {
    return <div>{resolveClassName({
        defaultClassName: 'base-class'
      }, undefined)}</div>;
  }
}`,...n.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  name: 'className: function returns undefined',
  tags: ['props'],
  parameters: defineDocsParam({
    description: {
      story: 'When className is a function that returns undefined, it uses the defaultClassName only.'
    }
  }),
  decorators: [withStoryCard(), showDocSource()],
  render() {
    return <div>
                {resolveClassName({
        defaultClassName: 'base-class',
        shouldShow: false
      }, s => s.shouldShow ? 'visible-class' : undefined) === undefined ? '(undefined)' : '(not undefined)'}
            </div>;
  }
}`,...r.parameters?.docs?.source}}};const f=["ClassNameString","ClassNameFunction","UndefinedClassName","FunctionReturnsUndefined"];export{a as ClassNameFunction,s as ClassNameString,r as FunctionReturnsUndefined,n as UndefinedClassName,f as __namedExportsOrder,p as default};
