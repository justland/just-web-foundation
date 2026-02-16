import{d as i,w as o,s as t,j as e,S as c}from"./iframe-DoDTZ-f0.js";import{d as l}from"./dedent-BuYMbVyj.js";import{r as d}from"./resolve-class-name-_7C_ES8F.js";import"./preload-helper-PPVm8Dsz.js";const h={title:"class-name/resolveClassName",tags:["func","version:next"],parameters:i({description:{component:"A utility function to resolve class names from render props, supporting both string and function-based className resolution."}})},s={name:"className: string",tags:["props"],parameters:i({description:{story:"Resolves className when provided as a string. Combines className with the provided className."}}),decorators:[o(),t({placement:"before",source:l`
        resolveClassName({ className: 'base-class' }, 'additional-class')
        `})],render(){return e.jsx(c,{appearance:"output",children:d({className:"base-class"},"additional-class")})}},a={name:"className: function",tags:["props"],parameters:i({description:{story:"Resolves className when provided as a function. The function receives the render props and returns the className. Note: When using a function, it returns only the function result (not combined with className)."}}),decorators:[o(),t({placement:"before",source:l`
        resolveClassName({ className: 'base-class', isActive: true, count: 5 }, (s) =>
            s.isActive ? 'active-class' : 'inactive-class',
        )
        `})],render(){return e.jsx(c,{appearance:"output",children:d({className:"base-class",isActive:!0,count:5},m=>m.isActive?"active-class":"inactive-class")})}},n={name:"className: undefined",tags:["props"],decorators:[o({content:e.jsx(e.Fragment,{children:e.jsxs("p",{children:["When ",e.jsx("code",{children:"className"})," is ",e.jsx("code",{children:"undefined"}),", it returns the"," ",e.jsx("code",{children:"className"})," property from the ",e.jsx("code",{children:"renderProps"}),"."]})})}),t({placement:"before",source:l`resolveClassName({ className: 'base-class' }, undefined)`})],render(){return e.jsx(c,{appearance:"output",children:d({className:"base-class"},void 0)})}},r={name:"className: function returns undefined",tags:["props"],decorators:[o({content:e.jsxs("p",{children:["When ",e.jsx("code",{children:"className"})," is a function that returns ",e.jsx("code",{children:"undefined"}),", it returns"," ",e.jsx("code",{children:"undefined"}),"."]})}),t({placement:"before",source:"resolveClassName({ className: 'base-class' }, () => undefined)"})],render(){return e.jsx(c,{appearance:"output",children:d({className:"base-class"},()=>{})===void 0?"(undefined)":"(not undefined)"})}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  name: 'className: string',
  tags: ['props'],
  parameters: defineDocsParam({
    description: {
      story: 'Resolves className when provided as a string. Combines className with the provided className.'
    }
  }),
  decorators: [withStoryCard(), showDocSource({
    placement: 'before',
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
}`,...s.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  name: 'className: function',
  tags: ['props'],
  parameters: defineDocsParam({
    description: {
      story: 'Resolves className when provided as a function. The function receives the render props and returns the className. Note: When using a function, it returns only the function result (not combined with className).'
    }
  }),
  decorators: [withStoryCard(), showDocSource({
    placement: 'before',
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
}`,...a.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  name: 'className: undefined',
  tags: ['props'],
  decorators: [withStoryCard({
    content: <>
                    <p>
                        When <code>className</code> is <code>undefined</code>, it returns the{' '}
                        <code>className</code> property from the <code>renderProps</code>.
                    </p>
                </>
  }), showDocSource({
    placement: 'before',
    source: dedent\`resolveClassName({ className: 'base-class' }, undefined)\`
  })],
  render() {
    return <StoryCard appearance="output">
                {resolveClassName({
        className: 'base-class'
      }, undefined)}
            </StoryCard>;
  }
}`,...n.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  name: 'className: function returns undefined',
  tags: ['props'],
  decorators: [withStoryCard({
    content: <p>
                    When <code>className</code> is a function that returns <code>undefined</code>, it returns{' '}
                    <code>undefined</code>.
                </p>
  }), showDocSource({
    placement: 'before',
    source: \`resolveClassName({ className: 'base-class' }, () => undefined)\`
  })],
  render() {
    return <StoryCard appearance="output">
                {resolveClassName({
        className: 'base-class'
      }, () => undefined) === undefined ? '(undefined)' : '(not undefined)'}
            </StoryCard>;
  }
}`,...r.parameters?.docs?.source}}};const v=["ClassNameString","ClassNameFunction","UndefinedClassName","FunctionReturnsUndefined"];export{a as ClassNameFunction,s as ClassNameString,r as FunctionReturnsUndefined,n as UndefinedClassName,v as __namedExportsOrder,h as default};
