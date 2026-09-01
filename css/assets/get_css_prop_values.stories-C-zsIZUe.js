import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{a as t,i as n,r}from"./iframe-BDaPsrZE.js";import{t as i}from"./css_properties-w_xcTR4a.js";import{t as a}from"./get-css-prop-values-Dhr1Rk0v.js";import{r as o}from"./dist--pxey9Hb.js";import{t as s}from"./jsx-dev-runtime-DpMrmGJR.js";import{n as c,t as l}from"./dedent-DQaCLeUO.js";var u,d,f,p,m,h,g,_;function v(){return(v=e((()=>{n(),c(),o(),u=s(),{expect:d}=__STORYBOOK_MODULE_TEST__,f=`/home/runner/work/just-web-foundation/just-web-foundation/libs/css/src/utils/get_css_prop_values.stories.tsx`,p={title:`utils/getCSSPropValues`,tags:[`code-only`,`version:0.1`],decorators:[t()],render:()=>(0,u.jsxDEV)(u.Fragment,{},void 0,!1,{fileName:f,lineNumber:10,columnNumber:17},void 0)},m={parameters:r({description:{story:`can be used to get a single value`},source:{code:`getCSSPropValues('--color-gray-100')`}}),play:()=>{let[e]=a(`--color-gray-100`);d(e).toBe(`oklch(96.7% 0.003 264.542)`)}},h={parameters:r({description:{story:`gets css prop values from document body`},source:{code:`getCSSPropValues('--color-white', '--color-gray-100')`}}),play(){let[e,t]=a(`--color-white`,`--color-gray-100`);d(e).toBe(`#fff`),d(t).toBe(`oklch(96.7% 0.003 264.542)`)}},g={parameters:r({description:{story:`can specify which element to get the property from`},source:{code:l`const element = canvas.getByTestId('subject')

            getCSSPropValues(element, '--text-red-100')`}}),render(){return(0,u.jsxDEV)(`div`,{"data-testid":`subject`,style:i({"--text-red-100":`red`})},void 0,!1,{fileName:f,lineNumber:53,columnNumber:12},this)},play({canvas:e}){let t=e.getByTestId(`subject`);d(a(t,`--text-red-100`)).toEqual([`red`])}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
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
}`,...g.parameters?.docs?.source}}},_=[`SingleValue`,`MultipleValues`,`WithElement`]})))()}v();export{h as MultipleValues,m as SingleValue,g as WithElement,_ as __namedExportsOrder,p as default};