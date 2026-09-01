import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{a as t}from"./chunk-W22LQPXL-BSpKiHdn.js";import{a as n,c as r,f as i,i as a,l as o,s}from"./iframe-DFQ_z_Nq.js";import{n as c,t as l}from"./dedent-DQaCLeUO.js";import{t as u}from"./src-BVeczmcL.js";var d,f,p,m,h,g,_;function v(){return(v=e((()=>{u(),s(),c(),d=t(),f={title:`class-name/clsx`,tags:[`func`,`version:1.0`],render:()=>(0,d.jsx)(d.Fragment,{})},p={decorators:[o({content:(0,d.jsx)(d.Fragment,{children:(0,d.jsxs)(`p`,{children:[`Re-export of the`,` `,(0,d.jsx)(`code`,{children:(0,d.jsx)(`a`,{href:`https://github.com/lukeed/clsx`,target:`_blank`,rel:`noopener noreferrer`,children:`clsx`})}),` `,`package, adjusted to work better in ESM environments. Use it to construct`,` `,(0,d.jsx)(`code`,{children:`className`}),` strings conditionally from strings, objects, and arrays.`]})})}),r({source:l`function clsx(...inputs: ClassValue[]): string`})]},m={tags:[`use-case`],parameters:n({description:{story:`Combine multiple class name strings. Falsy values are ignored.`}}),decorators:[o(),r({source:l`clsx('base', 'active', 'rounded')`})],render(){return(0,d.jsx)(a,{appearance:`output`,children:(0,d.jsxs)(`div`,{children:[`Result: `,(0,d.jsx)(`code`,{children:i(`base`,`active`,`rounded`)})]})})}},h={name:`conditional classes`,tags:[`use-case`],parameters:n({description:{story:`Use objects for conditional classes: keys are class names, values are conditions. Only truthy values are included.`}}),decorators:[o(),r({source:l`clsx('btn', {
        'btn-active': isActive,
        'btn-disabled': isDisabled,
    })`})],render(){return(0,d.jsx)(a,{appearance:`output`,children:(0,d.jsxs)(`div`,{children:[`Result:`,` `,(0,d.jsx)(`code`,{children:i(`btn`,{"btn-active":!0,"btn-disabled":!1})})]})})}},g={name:`mixed inputs`,tags:[`use-case`],parameters:n({description:{story:`clsx accepts strings, objects, and arrays. Falsy entries are filtered out.`}}),decorators:[o(),r({source:l`clsx('base', ['a', null, 'b'], { active: true, hidden: false })`})],render(){return(0,d.jsx)(a,{appearance:`output`,children:(0,d.jsxs)(`div`,{children:[`Result: `,(0,d.jsx)(`code`,{children:i(`base`,[`a`,null,`b`],{active:!0,hidden:!1})})]})})}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  decorators: [withStoryCard({
    content: <>
                    <p>
                        Re-export of the{' '}
                        <code>
                            <a href="https://github.com/lukeed/clsx" target="_blank" rel="noopener noreferrer">
                                clsx
                            </a>
                        </code>{' '}
                        package, adjusted to work better in ESM environments. Use it to construct{' '}
                        <code>className</code> strings conditionally from strings, objects, and arrays.
                    </p>
                </>
  }), showSource({
    source: dedent\`function clsx(...inputs: ClassValue[]): string\`
  })]
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  tags: ['use-case'],
  parameters: defineDocsParam({
    description: {
      story: 'Combine multiple class name strings. Falsy values are ignored.'
    }
  }),
  decorators: [withStoryCard(), showSource({
    source: dedent\`clsx('base', 'active', 'rounded')\`
  })],
  render() {
    return <StoryCard appearance="output">
                <div>
                    Result: <code>{clsx('base', 'active', 'rounded')}</code>
                </div>
            </StoryCard>;
  }
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  name: 'conditional classes',
  tags: ['use-case'],
  parameters: defineDocsParam({
    description: {
      story: 'Use objects for conditional classes: keys are class names, values are conditions. Only truthy values are included.'
    }
  }),
  decorators: [withStoryCard(), showSource({
    source: dedent\`clsx('btn', {
        'btn-active': isActive,
        'btn-disabled': isDisabled,
    })\`
  })],
  render() {
    const isActive = true;
    const isDisabled = false;
    return <StoryCard appearance="output">
                <div>
                    Result:{' '}
                    <code>
                        {clsx('btn', {
            'btn-active': isActive,
            'btn-disabled': isDisabled
          })}
                    </code>
                </div>
            </StoryCard>;
  }
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  name: 'mixed inputs',
  tags: ['use-case'],
  parameters: defineDocsParam({
    description: {
      story: 'clsx accepts strings, objects, and arrays. Falsy entries are filtered out.'
    }
  }),
  decorators: [withStoryCard(), showSource({
    source: dedent\`clsx('base', ['a', null, 'b'], { active: true, hidden: false })\`
  })],
  render() {
    return <StoryCard appearance="output">
                <div>
                    Result: <code>{clsx('base', ['a', null, 'b'], {
            active: true,
            hidden: false
          })}</code>
                </div>
            </StoryCard>;
  }
}`,...g.parameters?.docs?.source}}},_=[`Overview`,`BasicUsage`,`ConditionalClasses`,`MixedInputs`]})))()}v();export{m as BasicUsage,h as ConditionalClasses,g as MixedInputs,p as Overview,_ as __namedExportsOrder,f as default};