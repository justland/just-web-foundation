import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{a as t,i as n,o as r,r as i}from"./iframe-BDaPsrZE.js";import{n as a}from"./resolve-class-name-d6i3jFEp.js";import{r as o}from"./dist--pxey9Hb.js";import{t as s}from"./jsx-dev-runtime-DpMrmGJR.js";var c,l,u,d,f,p,m,h;function g(){return(g=e((()=>{n(),o(),c=s(),l=`/home/runner/work/just-web-foundation/just-web-foundation/libs/css/src/utils/resolve-class-name.stories.tsx`,u={title:`utils/resolveClassName`,tags:[`autodocs`,`version:0.8`],parameters:i({description:{component:`A utility function to resolve class names from state, supporting both string and function-based className resolution.`}})},d={name:`className: string`,tags:[`props`],parameters:i({description:{story:`Resolves className when provided as a string. Combines defaultClassName with the provided className.`}}),decorators:[r(),t()],render(){return(0,c.jsxDEV)(`div`,{children:[`Result: `,a({defaultClassName:`base-class`},`additional-class`)]},void 0,!0,{fileName:l,lineNumber:25,columnNumber:12},this)}},f={name:`className: function`,tags:[`props`],parameters:i({description:{story:`Resolves className when provided as a function. The function receives the state and returns the className. Note: When using a function, it returns only the function result (not combined with defaultClassName).`}}),decorators:[r(),t()],render(){return(0,c.jsxDEV)(`div`,{children:a({defaultClassName:`base-class`,isActive:!0,count:5},e=>e.isActive?`active-class`:`inactive-class`)},void 0,!1,{fileName:l,lineNumber:40,columnNumber:12},this)}},p={name:`className: undefined`,tags:[`props`],parameters:i({description:{story:`Returns only the defaultClassName when className is undefined.`}}),decorators:[r(),t()],render(){return(0,c.jsxDEV)(`div`,{children:a({defaultClassName:`base-class`},void 0)},void 0,!1,{fileName:l,lineNumber:59,columnNumber:12},this)}},m={name:`className: function returns undefined`,tags:[`props`],parameters:i({description:{story:`When className is a function that returns undefined, it uses the defaultClassName only.`}}),decorators:[r(),t()],render(){return(0,c.jsxDEV)(`div`,{children:a({defaultClassName:`base-class`,shouldShow:!1},e=>e.shouldShow?`visible-class`:void 0)===void 0?`(undefined)`:`(not undefined)`},void 0,!1,{fileName:l,lineNumber:74,columnNumber:12},this)}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  name: 'className: string',
  tags: ['props'],
  parameters: defineDocsParam({
    description: {
      story: 'Resolves className when provided as a string. Combines defaultClassName with the provided className.'
    }
  }),
  decorators: [withStoryCard(), showSource()],
  render() {
    return <div>Result: {resolveClassName({
        defaultClassName: 'base-class'
      }, 'additional-class')}</div>;
  }
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  name: 'className: function',
  tags: ['props'],
  parameters: defineDocsParam({
    description: {
      story: 'Resolves className when provided as a function. The function receives the state and returns the className. Note: When using a function, it returns only the function result (not combined with defaultClassName).'
    }
  }),
  decorators: [withStoryCard(), showSource()],
  render() {
    return <div>
                {resolveClassName({
        defaultClassName: 'base-class',
        isActive: true,
        count: 5
      }, s => s.isActive ? 'active-class' : 'inactive-class')}
            </div>;
  }
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  name: 'className: undefined',
  tags: ['props'],
  parameters: defineDocsParam({
    description: {
      story: 'Returns only the defaultClassName when className is undefined.'
    }
  }),
  decorators: [withStoryCard(), showSource()],
  render() {
    return <div>{resolveClassName({
        defaultClassName: 'base-class'
      }, undefined)}</div>;
  }
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  name: 'className: function returns undefined',
  tags: ['props'],
  parameters: defineDocsParam({
    description: {
      story: 'When className is a function that returns undefined, it uses the defaultClassName only.'
    }
  }),
  decorators: [withStoryCard(), showSource()],
  render() {
    return <div>
                {resolveClassName({
        defaultClassName: 'base-class',
        shouldShow: false
      }, s => s.shouldShow ? 'visible-class' : undefined) === undefined ? '(undefined)' : '(not undefined)'}
            </div>;
  }
}`,...m.parameters?.docs?.source}}},h=[`ClassNameString`,`ClassNameFunction`,`UndefinedClassName`,`FunctionReturnsUndefined`]})))()}g();export{f as ClassNameFunction,d as ClassNameString,m as FunctionReturnsUndefined,p as UndefinedClassName,h as __namedExportsOrder,u as default};