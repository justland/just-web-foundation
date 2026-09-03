import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{a as t}from"./chunk-W22LQPXL-BSpKiHdn.js";import{a as n,c as r,i,l as a,s as o}from"./iframe-Dhw67M0q.js";import{n as s,t as c}from"./dedent-DQaCLeUO.js";import{n as l}from"./resolve-style-B9XOyYid.js";import{t as u}from"./src-C4_MMlM4.js";var d,f,p,m,h,g,_;function v(){return(v=e((()=>{u(),o(),s(),d=t(),f={title:`style/resolveStyle`,tags:[`func`,`version:1.0`],parameters:n({description:{component:`A utility function to resolve style from render props, supporting both object and function-based style resolution.`}})},p={name:`style: object`,tags:[`props`],parameters:n({description:{story:`Resolves style when provided as an object. Merges style with the provided style (override wins).`}}),decorators:[a(),r({source:c`
        resolveStyle({ style: { padding: '0.5rem', color: 'red' } }, { fontWeight: 'bold' })
        `})],render(){let e=l({style:{padding:`0.5rem`,color:`red`}},{fontWeight:`bold`});return(0,d.jsx)(i,{appearance:`output`,children:(0,d.jsx)(`pre`,{children:JSON.stringify(e,null,2)})})}},m={name:`style: function`,tags:[`props`],parameters:n({description:{story:`Resolves style when provided as a function. The function receives the render props and returns the style.`}}),decorators:[a(),r({source:c`
        resolveStyle({ style: { padding: '0.5rem' }, isActive: true }, (s) =>
            s.isActive ? { ...s.style, color: 'green' } : s.style,
        )
        `})],render(){let e=l({style:{padding:`0.5rem`},isActive:!0},e=>e.isActive?{...e.style,color:`green`}:e.style);return(0,d.jsx)(i,{appearance:`output`,children:(0,d.jsx)(`pre`,{children:JSON.stringify(e,null,2)})})}},h={name:`style: undefined`,tags:[`props`],decorators:[a({content:(0,d.jsx)(d.Fragment,{children:(0,d.jsxs)(`p`,{children:[`When `,(0,d.jsx)(`code`,{children:`style`}),` is `,(0,d.jsx)(`code`,{children:`undefined`}),`, it returns the `,(0,d.jsx)(`code`,{children:`style`}),` `,`property from the `,(0,d.jsx)(`code`,{children:`renderProps`}),`.`]})})}),r({source:c`resolveStyle({ style: { padding: '0.5rem' } }, undefined)`})],render(){let e=l({style:{padding:`0.5rem`}},void 0);return(0,d.jsx)(i,{appearance:`output`,children:(0,d.jsx)(`pre`,{children:JSON.stringify(e,null,2)})})}},g={name:`style: function returns undefined`,tags:[`props`],decorators:[a({content:(0,d.jsxs)(`p`,{children:[`When `,(0,d.jsx)(`code`,{children:`style`}),` is a function that returns `,(0,d.jsx)(`code`,{children:`undefined`}),`, it returns`,` `,(0,d.jsx)(`code`,{children:`undefined`}),`.`]})}),r({source:`resolveStyle({ style: { padding: '0.5rem' } }, () => undefined)`})],render(){let e=l({style:{padding:`0.5rem`}},()=>void 0);return(0,d.jsx)(i,{appearance:`output`,children:e===void 0?`(undefined)`:`(not undefined)`})}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
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
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
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
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
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
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
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
}`,...g.parameters?.docs?.source}}},_=[`StyleObject`,`StyleFunction`,`UndefinedStyle`,`FunctionReturnsUndefined`]})))()}v();export{g as FunctionReturnsUndefined,m as StyleFunction,p as StyleObject,h as UndefinedStyle,_ as __namedExportsOrder,f as default};