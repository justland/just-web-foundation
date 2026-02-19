import{d as u,w as s,s as c,j as e,S as i}from"./iframe-BRbKEAca.js";import{d as p}from"./dedent-BuYMbVyj.js";import{r as a}from"./resolve-children-D-TiWTsk.js";import"./preload-helper-PPVm8Dsz.js";const C={title:"children/resolveChildren",tags:["func","version:next"],parameters:u({description:{component:"A utility function to resolve children from render props, supporting both static and function-based children resolution."}})},n={name:"children: static",tags:["props"],parameters:u({description:{story:"Resolves children when provided as a static value. The provided value is used as the children."}}),decorators:[s(),c({placement:"before",source:"resolveChildren({ children: 'Default' }, 'Override content')"})],render(){const r=a({children:"Default"},"Override content");return e.jsx(i,{appearance:"output",children:e.jsxs("div",{children:["Result: ",r]})})}},t={name:"children: function",tags:["props"],parameters:u({description:{story:"Resolves children when provided as a function. The function receives the render props and returns the children."}}),decorators:[s(),c({placement:"before",source:p`
        resolveChildren({ children: 'Default', count: 42 }, (rp) => \`Computed: \${rp.count}\`)
        `})],render(){const r=a({children:"Default",count:42},l=>`Computed: ${l.count}`);return e.jsx(i,{appearance:"output",children:e.jsxs("div",{children:["Result: ",r]})})}},d={name:"children: undefined",tags:["props"],decorators:[s({content:e.jsx(e.Fragment,{children:e.jsxs("p",{children:["When ",e.jsx("code",{children:"children"})," is ",e.jsx("code",{children:"undefined"}),", it returns the"," ",e.jsx("code",{children:"children"})," property from the ",e.jsx("code",{children:"renderProps"}),"."]})})}),c({placement:"before",source:"resolveChildren({ children: 'From render props' }, undefined)"})],render(){const r=a({children:"From render props"},void 0);return e.jsx(i,{appearance:"output",children:e.jsxs("div",{children:["Result: ",r]})})}},o={name:"children: function returns undefined",tags:["props"],decorators:[s({content:e.jsxs("p",{children:["When ",e.jsx("code",{children:"children"})," is a function that returns ",e.jsx("code",{children:"undefined"}),", it returns"," ",e.jsx("code",{children:"undefined"}),"."]})}),c({placement:"before",source:"resolveChildren({ children: 'Default' }, () => undefined)"})],render(){const r=a({children:"Default"},()=>{});return e.jsx(i,{appearance:"output",children:r===void 0?"(undefined)":"(not undefined)"})}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  name: 'children: static',
  tags: ['props'],
  parameters: defineDocsParam({
    description: {
      story: 'Resolves children when provided as a static value. The provided value is used as the children.'
    }
  }),
  decorators: [withStoryCard(), showDocSource({
    placement: 'before',
    source: \`resolveChildren({ children: 'Default' }, 'Override content')\`
  })],
  render() {
    const result = resolveChildren({
      children: 'Default'
    }, 'Override content');
    return <StoryCard appearance="output">
                <div>Result: {result}</div>
            </StoryCard>;
  }
}`,...n.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  name: 'children: function',
  tags: ['props'],
  parameters: defineDocsParam({
    description: {
      story: 'Resolves children when provided as a function. The function receives the render props and returns the children.'
    }
  }),
  decorators: [withStoryCard(), showDocSource({
    placement: 'before',
    source: dedent\`
        resolveChildren({ children: 'Default', count: 42 }, (rp) => \\\`Computed: \\\${rp.count}\\\`)
        \`
  })],
  render() {
    const result = resolveChildren({
      children: 'Default',
      count: 42
    }, rp => \`Computed: \${rp.count}\`);
    return <StoryCard appearance="output">
                <div>Result: {result}</div>
            </StoryCard>;
  }
}`,...t.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  name: 'children: undefined',
  tags: ['props'],
  decorators: [withStoryCard({
    content: <>
                    <p>
                        When <code>children</code> is <code>undefined</code>, it returns the{' '}
                        <code>children</code> property from the <code>renderProps</code>.
                    </p>
                </>
  }), showDocSource({
    placement: 'before',
    source: \`resolveChildren({ children: 'From render props' }, undefined)\`
  })],
  render() {
    const result = resolveChildren({
      children: 'From render props'
    }, undefined);
    return <StoryCard appearance="output">
                <div>Result: {result}</div>
            </StoryCard>;
  }
}`,...d.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  name: 'children: function returns undefined',
  tags: ['props'],
  decorators: [withStoryCard({
    content: <p>
                    When <code>children</code> is a function that returns <code>undefined</code>, it returns{' '}
                    <code>undefined</code>.
                </p>
  }), showDocSource({
    placement: 'before',
    source: \`resolveChildren({ children: 'Default' }, () => undefined)\`
  })],
  render() {
    const result = resolveChildren({
      children: 'Default'
    }, () => undefined);
    return <StoryCard appearance="output">
                {result === undefined ? '(undefined)' : '(not undefined)'}
            </StoryCard>;
  }
}`,...o.parameters?.docs?.source}}};const S=["StaticChildren","ChildrenFunction","UndefinedChildren","FunctionReturnsUndefined"];export{t as ChildrenFunction,o as FunctionReturnsUndefined,n as StaticChildren,d as UndefinedChildren,S as __namedExportsOrder,C as default};
