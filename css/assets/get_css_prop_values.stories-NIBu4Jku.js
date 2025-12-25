import{j as n,s as p,d as c}from"./iframe-rqCsvcYE.js";import{a as d,d as i}from"./dedent-BEojnTFe.js";import{g as l}from"./get-css-prop-values-MM-2vHZ3.js";import"./preload-helper-PPVm8Dsz.js";const{expect:s}=__STORYBOOK_MODULE_TEST__,S={title:"utils/getCSSPropValues",tags:["code-only","new","version:1.0.0"],decorators:[p()],render:()=>n.jsx(n.Fragment,{})},t={parameters:c({description:{story:"can be used to get a single value"},source:{code:"getCSSPropValues('--color-gray-100')"}}),play:()=>{const[e]=l("--color-gray-100");s(e).toBe("oklch(96.7% 0.003 264.542)")}},r={parameters:c({description:{story:"gets css prop values from document body"},source:{code:"getCSSPropValues('--color-white', '--color-gray-100')"}}),play(){const[e,a]=l("--color-white","--color-gray-100");s(e).toBe("#fff"),s(a).toBe("oklch(96.7% 0.003 264.542)")}},o={parameters:c({description:{story:"can specify which element to get the property from"},source:{code:i`const element = canvas.getByTestId('subject')

            getCSSPropValues(element, '--text-red-100')`}}),render(){return n.jsx("div",{"data-testid":"subject",style:d({"--text-red-100":"red"})})},play({canvas:e}){const a=e.getByTestId("subject");s(l(a,"--text-red-100")).toEqual(["red"])}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
}`,...t.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
}`,...r.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
}`,...o.parameters?.docs?.source}}};const f=["SingleValue","MultipleValues","WithElement"];export{r as MultipleValues,t as SingleValue,o as WithElement,f as __namedExportsOrder,S as default};
