import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{a as t}from"./chunk-W22LQPXL-BSpKiHdn.js";import{a as n,c as r,i,l as a,s as o}from"./iframe-BJVp8-w1.js";import{n as s,t as c}from"./dedent-DQaCLeUO.js";import{n as l}from"./resolve-children-DgiY_Icx.js";import{t as u}from"./src-X3K_eC4I.js";var d,f,p,m,h,g,_;function v(){return(v=e((()=>{u(),o(),s(),d=t(),f={title:`children/resolveChildren`,tags:[`func`,`version:1.0`],parameters:n({description:{component:`A utility function to resolve children from render props, supporting both static and function-based children resolution.`}})},p={name:`children: static`,tags:[`props`],parameters:n({description:{story:`Resolves children when provided as a static value. The provided value is used as the children.`}}),decorators:[a(),r({source:`resolveChildren({ children: 'Default' }, 'Override content')`})],render(){let e=l({children:`Default`},`Override content`);return(0,d.jsx)(i,{appearance:`output`,children:(0,d.jsxs)(`div`,{children:[`Result: `,e]})})}},m={name:`children: function`,tags:[`props`],parameters:n({description:{story:`Resolves children when provided as a function. The function receives the render props and returns the children.`}}),decorators:[a(),r({source:c`
        resolveChildren({ children: 'Default', count: 42 }, (rp) => \`Computed: \${rp.count}\`)
        `})],render(){let e=l({children:`Default`,count:42},e=>`Computed: ${e.count}`);return(0,d.jsx)(i,{appearance:`output`,children:(0,d.jsxs)(`div`,{children:[`Result: `,e]})})}},h={name:`children: undefined`,tags:[`props`],decorators:[a({content:(0,d.jsx)(d.Fragment,{children:(0,d.jsxs)(`p`,{children:[`When `,(0,d.jsx)(`code`,{children:`children`}),` is `,(0,d.jsx)(`code`,{children:`undefined`}),`, it returns the`,` `,(0,d.jsx)(`code`,{children:`children`}),` property from the `,(0,d.jsx)(`code`,{children:`renderProps`}),`.`]})})}),r({source:`resolveChildren({ children: 'From render props' }, undefined)`})],render(){let e=l({children:`From render props`},void 0);return(0,d.jsx)(i,{appearance:`output`,children:(0,d.jsxs)(`div`,{children:[`Result: `,e]})})}},g={name:`children: function returns undefined`,tags:[`props`],decorators:[a({content:(0,d.jsxs)(`p`,{children:[`When `,(0,d.jsx)(`code`,{children:`children`}),` is a function that returns `,(0,d.jsx)(`code`,{children:`undefined`}),`, it returns`,` `,(0,d.jsx)(`code`,{children:`undefined`}),`.`]})}),r({source:`resolveChildren({ children: 'Default' }, () => undefined)`})],render(){let e=l({children:`Default`},()=>void 0);return(0,d.jsx)(i,{appearance:`output`,children:e===void 0?`(undefined)`:`(not undefined)`})}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  name: 'children: static',
  tags: ['props'],
  parameters: defineDocsParam({
    description: {
      story: 'Resolves children when provided as a static value. The provided value is used as the children.'
    }
  }),
  decorators: [withStoryCard(), showSource({
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
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  name: 'children: function',
  tags: ['props'],
  parameters: defineDocsParam({
    description: {
      story: 'Resolves children when provided as a function. The function receives the render props and returns the children.'
    }
  }),
  decorators: [withStoryCard(), showSource({
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
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  name: 'children: undefined',
  tags: ['props'],
  decorators: [withStoryCard({
    content: <>
                    <p>
                        When <code>children</code> is <code>undefined</code>, it returns the{' '}
                        <code>children</code> property from the <code>renderProps</code>.
                    </p>
                </>
  }), showSource({
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
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  name: 'children: function returns undefined',
  tags: ['props'],
  decorators: [withStoryCard({
    content: <p>
                    When <code>children</code> is a function that returns <code>undefined</code>, it returns{' '}
                    <code>undefined</code>.
                </p>
  }), showSource({
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
}`,...g.parameters?.docs?.source}}},_=[`StaticChildren`,`ChildrenFunction`,`UndefinedChildren`,`FunctionReturnsUndefined`]})))()}v();export{m as ChildrenFunction,g as FunctionReturnsUndefined,p as StaticChildren,h as UndefinedChildren,_ as __namedExportsOrder,f as default};