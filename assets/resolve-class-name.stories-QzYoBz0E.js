import{j as t}from"./jsx-dev-runtime-DF-ftqEI.js";import{d as e,w as o,s as i}from"./iframe-J5HJxcgX.js";import{r as d}from"./resolve-class-name-BeQeRuGi.js";import"./preload-helper-PPVm8Dsz.js";const p={title:"utils/resolveClassName",tags:["autodocs","version:next"],parameters:e({description:{component:"A utility function to resolve class names from state, supporting both string and function-based className resolution."}})},s={name:"className: string",tags:["props"],parameters:e({description:{story:"Resolves className when provided as a string. Combines defaultClassName with the provided className."}}),decorators:[o(),i()],render(){return t.jsxDEV("div",{children:["Result: ",d({defaultClassName:"base-class"},"additional-class")]},void 0,!0,{fileName:"/home/runner/work/just-web-foundation/just-web-foundation/libs/css/src/utils/resolve-class-name.stories.tsx",lineNumber:25,columnNumber:12},this)}},a={name:"className: function",tags:["props"],parameters:e({description:{story:"Resolves className when provided as a function. The function receives the state and returns the className. Note: When using a function, it returns only the function result (not combined with defaultClassName)."}}),decorators:[o(),i()],render(){return t.jsxDEV("div",{children:d({defaultClassName:"base-class",isActive:!0,count:5},l=>l.isActive?"active-class":"inactive-class")},void 0,!1,{fileName:"/home/runner/work/just-web-foundation/just-web-foundation/libs/css/src/utils/resolve-class-name.stories.tsx",lineNumber:40,columnNumber:12},this)}},n={name:"className: undefined",tags:["props"],parameters:e({description:{story:"Returns only the defaultClassName when className is undefined."}}),decorators:[o(),i()],render(){return t.jsxDEV("div",{children:d({defaultClassName:"base-class"},void 0)},void 0,!1,{fileName:"/home/runner/work/just-web-foundation/just-web-foundation/libs/css/src/utils/resolve-class-name.stories.tsx",lineNumber:59,columnNumber:12},this)}},r={name:"className: function returns undefined",tags:["props"],parameters:e({description:{story:"When className is a function that returns undefined, it uses the defaultClassName only."}}),decorators:[o(),i()],render(){return t.jsxDEV("div",{children:d({defaultClassName:"base-class",shouldShow:!1},l=>l.shouldShow?"visible-class":void 0)===void 0?"(undefined)":"(not undefined)"},void 0,!1,{fileName:"/home/runner/work/just-web-foundation/just-web-foundation/libs/css/src/utils/resolve-class-name.stories.tsx",lineNumber:74,columnNumber:12},this)}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
}`,...r.parameters?.docs?.source}}};const N=["ClassNameString","ClassNameFunction","UndefinedClassName","FunctionReturnsUndefined"];export{a as ClassNameFunction,s as ClassNameString,r as FunctionReturnsUndefined,n as UndefinedClassName,N as __namedExportsOrder,p as default};
