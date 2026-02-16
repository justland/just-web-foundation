import{j as e,w as t,s as o,d as i,S as d,c as l}from"./iframe-C-RZD5H3.js";import{d as c}from"./dedent-BuYMbVyj.js";import"./preload-helper-PPVm8Dsz.js";const v={title:"class-name/clsx",tags:["version:next"],render:()=>e.jsx(e.Fragment,{})},s={decorators:[t({content:e.jsx(e.Fragment,{children:e.jsxs("p",{children:["Re-export of the"," ",e.jsx("code",{children:e.jsx("a",{href:"https://github.com/lukeed/clsx",target:"_blank",rel:"noopener noreferrer",children:"clsx"})})," ","package, adjusted to work better in ESM environments. Use it to construct"," ",e.jsx("code",{children:"className"})," strings conditionally from strings, objects, and arrays."]})})}),o({placement:"before",source:c`function clsx(...inputs: ClassValue[]): string`})]},r={tags:["use-case"],parameters:i({description:{story:"Combine multiple class name strings. Falsy values are ignored."}}),decorators:[t(),o({placement:"before",source:c`clsx('base', 'active', 'rounded')`})],render(){return e.jsx(d,{appearance:"output",children:e.jsxs("div",{children:["Result: ",e.jsx("code",{children:l("base","active","rounded")})]})})}},a={name:"conditional classes",tags:["use-case"],parameters:i({description:{story:"Use objects for conditional classes: keys are class names, values are conditions. Only truthy values are included."}}),decorators:[t(),o({placement:"before",source:c`clsx('btn', {
        'btn-active': isActive,
        'btn-disabled': isDisabled,
    })`})],render(){return e.jsx(d,{appearance:"output",children:e.jsxs("div",{children:["Result:"," ",e.jsx("code",{children:l("btn",{"btn-active":!0,"btn-disabled":!1})})]})})}},n={name:"mixed inputs",tags:["use-case"],parameters:i({description:{story:"clsx accepts strings, objects, and arrays. Falsy entries are filtered out."}}),decorators:[t(),o({placement:"before",source:c`clsx('base', ['a', null, 'b'], { active: true, hidden: false })`})],render(){return e.jsx(d,{appearance:"output",children:e.jsxs("div",{children:["Result: ",e.jsx("code",{children:l("base",["a",null,"b"],{active:!0,hidden:!1})})]})})}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
  }), showDocSource({
    placement: 'before',
    source: dedent\`function clsx(...inputs: ClassValue[]): string\`
  })]
}`,...s.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  tags: ['use-case'],
  parameters: defineDocsParam({
    description: {
      story: 'Combine multiple class name strings. Falsy values are ignored.'
    }
  }),
  decorators: [withStoryCard(), showDocSource({
    placement: 'before',
    source: dedent\`clsx('base', 'active', 'rounded')\`
  })],
  render() {
    return <StoryCard appearance="output">
                <div>
                    Result: <code>{clsx('base', 'active', 'rounded')}</code>
                </div>
            </StoryCard>;
  }
}`,...r.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  name: 'conditional classes',
  tags: ['use-case'],
  parameters: defineDocsParam({
    description: {
      story: 'Use objects for conditional classes: keys are class names, values are conditions. Only truthy values are included.'
    }
  }),
  decorators: [withStoryCard(), showDocSource({
    placement: 'before',
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
}`,...a.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  name: 'mixed inputs',
  tags: ['use-case'],
  parameters: defineDocsParam({
    description: {
      story: 'clsx accepts strings, objects, and arrays. Falsy entries are filtered out.'
    }
  }),
  decorators: [withStoryCard(), showDocSource({
    placement: 'before',
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
}`,...n.parameters?.docs?.source}}};const h=["Overview","BasicUsage","ConditionalClasses","MixedInputs"];export{r as BasicUsage,a as ConditionalClasses,n as MixedInputs,s as Overview,h as __namedExportsOrder,v as default};
