import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{a as t}from"./chunk-W22LQPXL-BSpKiHdn.js";import{a as n,c as r,i,l as a,s as o}from"./iframe-C-caXvtV.js";import{n as s,t as c}from"./dedent-DQaCLeUO.js";import{n as l}from"./resolve-class-name-Mar5l2Dl.js";import{t as u}from"./src-RbTQJPcv.js";var d,f,p,m,h,g,_;function v(){return(v=e((()=>{u(),o(),s(),d=t(),f={title:`class-name/resolveClassName`,tags:[`func`,`version:1.0`],parameters:n({description:{component:`A utility function to resolve class names from render props, supporting both string and function-based className resolution.`}})},p={name:`className: string`,tags:[`props`],parameters:n({description:{story:`Resolves className when provided as a string. Combines className with the provided className.`}}),decorators:[a(),r({source:c`
        resolveClassName({ className: 'base-class' }, 'additional-class')
        `})],render(){return(0,d.jsx)(i,{appearance:`output`,children:l({className:`base-class`},`additional-class`)})}},m={name:`className: function`,tags:[`props`],parameters:n({description:{story:`Resolves className when provided as a function. The function receives the render props and returns the className. Note: When using a function, it returns only the function result (not combined with className).`}}),decorators:[a(),r({source:c`
        resolveClassName({ className: 'base-class', isActive: true, count: 5 }, (s) =>
            s.isActive ? 'active-class' : 'inactive-class',
        )
        `})],render(){return(0,d.jsx)(i,{appearance:`output`,children:l({className:`base-class`,isActive:!0,count:5},e=>e.isActive?`active-class`:`inactive-class`)})}},h={name:`className: undefined`,tags:[`props`],decorators:[a({content:(0,d.jsx)(d.Fragment,{children:(0,d.jsxs)(`p`,{children:[`When `,(0,d.jsx)(`code`,{children:`className`}),` is `,(0,d.jsx)(`code`,{children:`undefined`}),`, it returns the`,` `,(0,d.jsx)(`code`,{children:`className`}),` property from the `,(0,d.jsx)(`code`,{children:`renderProps`}),`.`]})})}),r({source:c`resolveClassName({ className: 'base-class' }, undefined)`})],render(){return(0,d.jsx)(i,{appearance:`output`,children:l({className:`base-class`},void 0)})}},g={name:`className: function returns undefined`,tags:[`props`],decorators:[a({content:(0,d.jsxs)(`p`,{children:[`When `,(0,d.jsx)(`code`,{children:`className`}),` is a function that returns `,(0,d.jsx)(`code`,{children:`undefined`}),`, it returns`,` `,(0,d.jsx)(`code`,{children:`undefined`}),`.`]})}),r({source:`resolveClassName({ className: 'base-class' }, () => undefined)`})],render(){return(0,d.jsx)(i,{appearance:`output`,children:l({className:`base-class`},()=>void 0)===void 0?`(undefined)`:`(not undefined)`})}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  name: 'className: string',
  tags: ['props'],
  parameters: defineDocsParam({
    description: {
      story: 'Resolves className when provided as a string. Combines className with the provided className.'
    }
  }),
  decorators: [withStoryCard(), showSource({
    source: dedent\`
        resolveClassName({ className: 'base-class' }, 'additional-class')
        \`
  })],
  render() {
    return <StoryCard appearance="output">
                {resolveClassName({
        className: 'base-class'
      }, 'additional-class')}
            </StoryCard>;
  }
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  name: 'className: function',
  tags: ['props'],
  parameters: defineDocsParam({
    description: {
      story: 'Resolves className when provided as a function. The function receives the render props and returns the className. Note: When using a function, it returns only the function result (not combined with className).'
    }
  }),
  decorators: [withStoryCard(), showSource({
    source: dedent\`
        resolveClassName({ className: 'base-class', isActive: true, count: 5 }, (s) =>
            s.isActive ? 'active-class' : 'inactive-class',
        )
        \`
  })],
  render() {
    return <StoryCard appearance="output">
                {resolveClassName({
        className: 'base-class',
        isActive: true,
        count: 5
      }, s => s.isActive ? 'active-class' : 'inactive-class')}
            </StoryCard>;
  }
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  name: 'className: undefined',
  tags: ['props'],
  decorators: [withStoryCard({
    content: <>
                    <p>
                        When <code>className</code> is <code>undefined</code>, it returns the{' '}
                        <code>className</code> property from the <code>renderProps</code>.
                    </p>
                </>
  }), showSource({
    source: dedent\`resolveClassName({ className: 'base-class' }, undefined)\`
  })],
  render() {
    return <StoryCard appearance="output">
                {resolveClassName({
        className: 'base-class'
      }, undefined)}
            </StoryCard>;
  }
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  name: 'className: function returns undefined',
  tags: ['props'],
  decorators: [withStoryCard({
    content: <p>
                    When <code>className</code> is a function that returns <code>undefined</code>, it returns{' '}
                    <code>undefined</code>.
                </p>
  }), showSource({
    source: \`resolveClassName({ className: 'base-class' }, () => undefined)\`
  })],
  render() {
    return <StoryCard appearance="output">
                {resolveClassName({
        className: 'base-class'
      }, () => undefined) === undefined ? '(undefined)' : '(not undefined)'}
            </StoryCard>;
  }
}`,...g.parameters?.docs?.source}}},_=[`ClassNameString`,`ClassNameFunction`,`UndefinedClassName`,`FunctionReturnsUndefined`]})))()}v();export{m as ClassNameFunction,p as ClassNameString,g as FunctionReturnsUndefined,h as UndefinedClassName,_ as __namedExportsOrder,f as default};