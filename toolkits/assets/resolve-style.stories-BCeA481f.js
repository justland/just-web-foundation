import{j as e,S as d,w as i,s as c,d as u}from"./iframe-BpXj-3b1.js";import{r as a}from"./resolve-style-E-lGkuMe.js";import{d as p}from"./dedent-D4JfOF0A.js";import"./preload-helper-PPVm8Dsz.js";const S={title:"style/resolveStyle",tags:["func","version:1.0"],parameters:u({description:{component:"A utility function to resolve style from render props, supporting both object and function-based style resolution."}})},r={name:"style: object",tags:["props"],parameters:u({description:{story:"Resolves style when provided as an object. Merges style with the provided style (override wins)."}}),decorators:[i(),c({source:p`
        resolveStyle({ style: { padding: '0.5rem', color: 'red' } }, { fontWeight: 'bold' })
        `})],render(){const n=a({style:{padding:"0.5rem",color:"red"}},{fontWeight:"bold"});return e.jsx(d,{appearance:"output",children:e.jsx("pre",{children:JSON.stringify(n,null,2)})})}},t={name:"style: function",tags:["props"],parameters:u({description:{story:"Resolves style when provided as a function. The function receives the render props and returns the style."}}),decorators:[i(),c({source:p`
        resolveStyle({ style: { padding: '0.5rem' }, isActive: true }, (s) =>
            s.isActive ? { ...s.style, color: 'green' } : s.style,
        )
        `})],render(){const n=a({style:{padding:"0.5rem"},isActive:!0},l=>l.isActive?{...l.style,color:"green"}:l.style);return e.jsx(d,{appearance:"output",children:e.jsx("pre",{children:JSON.stringify(n,null,2)})})}},s={name:"style: undefined",tags:["props"],decorators:[i({content:e.jsx(e.Fragment,{children:e.jsxs("p",{children:["When ",e.jsx("code",{children:"style"})," is ",e.jsx("code",{children:"undefined"}),", it returns the ",e.jsx("code",{children:"style"})," ","property from the ",e.jsx("code",{children:"renderProps"}),"."]})})}),c({source:p`resolveStyle({ style: { padding: '0.5rem' } }, undefined)`})],render(){const n=a({style:{padding:"0.5rem"}},void 0);return e.jsx(d,{appearance:"output",children:e.jsx("pre",{children:JSON.stringify(n,null,2)})})}},o={name:"style: function returns undefined",tags:["props"],decorators:[i({content:e.jsxs("p",{children:["When ",e.jsx("code",{children:"style"})," is a function that returns ",e.jsx("code",{children:"undefined"}),", it returns"," ",e.jsx("code",{children:"undefined"}),"."]})}),c({source:"resolveStyle({ style: { padding: '0.5rem' } }, () => undefined)"})],render(){const n=a({style:{padding:"0.5rem"}},()=>{});return e.jsx(d,{appearance:"output",children:n===void 0?"(undefined)":"(not undefined)"})}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  name: 'style: object',
  tags: ['props'],
  parameters: defineDocsParam({
    description: {
      story: 'Resolves style when provided as an object. Merges style with the provided style (override wins).'
    }
  }),
  decorators: [withStoryCard(), showSource({
    source: dedent\`
        resolveStyle({ style: { padding: '0.5rem', color: 'red' } }, { fontWeight: 'bold' })
        \`
  })],
  render() {
    const result = resolveStyle({
      style: {
        padding: '0.5rem',
        color: 'red'
      }
    }, {
      fontWeight: 'bold'
    });
    return <StoryCard appearance="output">
                <pre>{JSON.stringify(result, null, 2)}</pre>
            </StoryCard>;
  }
}`,...r.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  name: 'style: function',
  tags: ['props'],
  parameters: defineDocsParam({
    description: {
      story: 'Resolves style when provided as a function. The function receives the render props and returns the style.'
    }
  }),
  decorators: [withStoryCard(), showSource({
    source: dedent\`
        resolveStyle({ style: { padding: '0.5rem' }, isActive: true }, (s) =>
            s.isActive ? { ...s.style, color: 'green' } : s.style,
        )
        \`
  })],
  render() {
    const result = resolveStyle({
      style: {
        padding: '0.5rem'
      },
      isActive: true
    }, s => s.isActive ? {
      ...s.style,
      color: 'green'
    } : s.style);
    return <StoryCard appearance="output">
                <pre>{JSON.stringify(result, null, 2)}</pre>
            </StoryCard>;
  }
}`,...t.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  name: 'style: undefined',
  tags: ['props'],
  decorators: [withStoryCard({
    content: <>
                    <p>
                        When <code>style</code> is <code>undefined</code>, it returns the <code>style</code>{' '}
                        property from the <code>renderProps</code>.
                    </p>
                </>
  }), showSource({
    source: dedent\`resolveStyle({ style: { padding: '0.5rem' } }, undefined)\`
  })],
  render() {
    const result = resolveStyle({
      style: {
        padding: '0.5rem'
      }
    }, undefined);
    return <StoryCard appearance="output">
                <pre>{JSON.stringify(result, null, 2)}</pre>
            </StoryCard>;
  }
}`,...s.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  name: 'style: function returns undefined',
  tags: ['props'],
  decorators: [withStoryCard({
    content: <p>
                    When <code>style</code> is a function that returns <code>undefined</code>, it returns{' '}
                    <code>undefined</code>.
                </p>
  }), showSource({
    source: \`resolveStyle({ style: { padding: '0.5rem' } }, () => undefined)\`
  })],
  render() {
    const result = resolveStyle({
      style: {
        padding: '0.5rem'
      }
    }, () => undefined);
    return <StoryCard appearance="output">
                {result === undefined ? '(undefined)' : '(not undefined)'}
            </StoryCard>;
  }
}`,...o.parameters?.docs?.source}}};const g=["StyleObject","StyleFunction","UndefinedStyle","FunctionReturnsUndefined"];export{o as FunctionReturnsUndefined,t as StyleFunction,r as StyleObject,s as UndefinedStyle,g as __namedExportsOrder,S as default};
