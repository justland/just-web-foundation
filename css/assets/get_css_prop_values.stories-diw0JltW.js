import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{E as t,l as n,n as r,t as i}from"./jsx-dev-runtime-OV7-16pk.js";import{a,i as o,r as s}from"./iframe-DXs8Rx1E.js";import{n as c,t as l}from"./dedent-Dmnlqj-U.js";var u,d,f,p,m,h,g,_;function v(){return(v=e((()=>{o(),c(),r(),u=i(),{expect:d}=__STORYBOOK_MODULE_TEST__,f=`/home/runner/work/just-web-foundation/just-web-foundation/libs/css/src/utils/get_css_prop_values.stories.tsx`,p={title:`utils/getCSSPropValues`,tags:[`code-only`,`version:0.1`],decorators:[a()],render:()=>(0,u.jsxDEV)(u.Fragment,{},void 0,!1,{fileName:f,lineNumber:11,columnNumber:16},void 0)},m={parameters:s({description:{story:`can be used to get a single value`},source:{code:`getCSSPropValues('--color-gray-100')`}}),play:()=>{let[e]=n(`--color-gray-100`);d(e).toBe(`oklch(96.7% 0.003 264.542)`)}},h={parameters:s({description:{story:`gets css prop values from document body`},source:{code:`getCSSPropValues('--color-white', '--color-gray-100')`}}),play(){let[e,t]=n(`--color-white`,`--color-gray-100`);d(e).toBe(`#fff`),d(t).toBe(`oklch(96.7% 0.003 264.542)`)}},g={parameters:s({description:{story:`can specify which element to get the property from`},source:{code:l`const element = canvas.getByTestId('subject')

            getCSSPropValues(element, '--text-red-100')`}}),render(){return(0,u.jsxDEV)(`div`,{"data-testid":`subject`,style:t({"--text-red-100":`red`})},void 0,!1,{fileName:f,lineNumber:58,columnNumber:4},this)},play({canvas:e}){let t=e.getByTestId(`subject`);d(n(t,`--text-red-100`)).toEqual([`red`])}},_=[`SingleValue`,`MultipleValues`,`WithElement`],m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  parameters: defineDocsParam({
    description: {
      story: 'can be used to get a single value'
    },
    source: {
      code: \`getCSSPropValues('--color-gray-100')\`
    }
  }),
  play: () => {
    const [gray100] = getCSSPropValues('--color-gray-100');
    expect(gray100).toBe('oklch(96.7% 0.003 264.542)');
  }
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  parameters: defineDocsParam({
    description: {
      story: 'gets css prop values from document body'
    },
    source: {
      code: \`getCSSPropValues('--color-white', '--color-gray-100')\`
    }
  }),
  play() {
    const [white, gray100] = getCSSPropValues('--color-white', '--color-gray-100');
    expect(white).toBe('#fff');
    expect(gray100).toBe('oklch(96.7% 0.003 264.542)');
  }
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  parameters: defineDocsParam({
    description: {
      story: 'can specify which element to get the property from'
    },
    source: {
      code: dedent\`const element = canvas.getByTestId('subject')

            getCSSPropValues(element, '--text-red-100')\`
    }
  }),
  render() {
    return <div data-testid="subject" style={defineCSSProperties({
      '--text-red-100': 'red'
    })} />;
  },
  play({
    canvas
  }) {
    const element = canvas.getByTestId('subject');
    expect(getCSSPropValues(element, '--text-red-100')).toEqual(['red']);
  }
}`,...g.parameters?.docs?.source}}}})))()}v();export{h as MultipleValues,m as SingleValue,g as WithElement,_ as __namedExportsOrder,p as default};