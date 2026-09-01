import{j as e,S as t,w as o,s as c,d as i}from"./iframe-BpXj-3b1.js";import{r as d}from"./resolve-class-name-CqQ4XPfR.js";import{d as l}from"./dedent-D4JfOF0A.js";import"./preload-helper-PPVm8Dsz.js";const f={title:"class-name/resolveClassName",tags:["func","version:1.0"],parameters:i({description:{component:"A utility function to resolve class names from render props, supporting both string and function-based className resolution."}})},s={name:"className: string",tags:["props"],parameters:i({description:{story:"Resolves className when provided as a string. Combines className with the provided className."}}),decorators:[o(),c({source:l`
        resolveClassName({ className: 'base-class' }, 'additional-class')
        `})],render(){return e.jsx(t,{appearance:"output",children:d({className:"base-class"},"additional-class")})}},a={name:"className: function",tags:["props"],parameters:i({description:{story:"Resolves className when provided as a function. The function receives the render props and returns the className. Note: When using a function, it returns only the function result (not combined with className)."}}),decorators:[o(),c({source:l`
        resolveClassName({ className: 'base-class', isActive: true, count: 5 }, (s) =>
            s.isActive ? 'active-class' : 'inactive-class',
        )
        `})],render(){return e.jsx(t,{appearance:"output",children:d({className:"base-class",isActive:!0,count:5},u=>u.isActive?"active-class":"inactive-class")})}},n={name:"className: undefined",tags:["props"],decorators:[o({content:e.jsx(e.Fragment,{children:e.jsxs("p",{children:["When ",e.jsx("code",{children:"className"})," is ",e.jsx("code",{children:"undefined"}),", it returns the"," ",e.jsx("code",{children:"className"})," property from the ",e.jsx("code",{children:"renderProps"}),"."]})})}),c({source:l`resolveClassName({ className: 'base-class' }, undefined)`})],render(){return e.jsx(t,{appearance:"output",children:d({className:"base-class"},void 0)})}},r={name:"className: function returns undefined",tags:["props"],decorators:[o({content:e.jsxs("p",{children:["When ",e.jsx("code",{children:"className"})," is a function that returns ",e.jsx("code",{children:"undefined"}),", it returns"," ",e.jsx("code",{children:"undefined"}),"."]})}),c({source:"resolveClassName({ className: 'base-class' }, () => undefined)"})],render(){return e.jsx(t,{appearance:"output",children:d({className:"base-class"},()=>{})===void 0?"(undefined)":"(not undefined)"})}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
}`,...s.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
}`,...n.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
}`,...r.parameters?.docs?.source}}};const v=["ClassNameString","ClassNameFunction","UndefinedClassName","FunctionReturnsUndefined"];export{a as ClassNameFunction,s as ClassNameString,r as FunctionReturnsUndefined,n as UndefinedClassName,v as __namedExportsOrder,f as default};
