import{j as a}from"./jsx-dev-runtime-DF-ftqEI.js";import{s as i,d as c}from"./iframe-DMM-er1z.js";import{d}from"./dedent-BuYMbVyj.js";import{d as u}from"./css_properties-Dh8E5HRZ.js";import{g as l}from"./get-css-prop-values-MM-2vHZ3.js";import"./preload-helper-PPVm8Dsz.js";const{expect:s}=__STORYBOOK_MODULE_TEST__,h={title:"utils/getCSSPropValues",tags:["code-only","version:0.1"],decorators:[i()],render:()=>a.jsxDEV(a.Fragment,{},void 0,!1,{fileName:"/home/runner/work/just-web-foundation/just-web-foundation/libs/css/src/utils/get_css_prop_values.stories.tsx",lineNumber:10,columnNumber:17},void 0)},t={parameters:c({description:{story:"can be used to get a single value"},source:{code:"getCSSPropValues('--color-gray-100')"}}),play:()=>{const[e]=l("--color-gray-100");s(e).toBe("oklch(96.7% 0.003 264.542)")}},r={parameters:c({description:{story:"gets css prop values from document body"},source:{code:"getCSSPropValues('--color-white', '--color-gray-100')"}}),play(){const[e,n]=l("--color-white","--color-gray-100");s(e).toBe("#fff"),s(n).toBe("oklch(96.7% 0.003 264.542)")}},o={parameters:c({description:{story:"can specify which element to get the property from"},source:{code:d`const element = canvas.getByTestId('subject')

            getCSSPropValues(element, '--text-red-100')`}}),render(){return a.jsxDEV("div",{"data-testid":"subject",style:u({"--text-red-100":"red"})},void 0,!1,{fileName:"/home/runner/work/just-web-foundation/just-web-foundation/libs/css/src/utils/get_css_prop_values.stories.tsx",lineNumber:53,columnNumber:12},this)},play({canvas:e}){const n=e.getByTestId("subject");s(l(n,"--text-red-100")).toEqual(["red"])}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
}`,...o.parameters?.docs?.source}}};const b=["SingleValue","MultipleValues","WithElement"];export{r as MultipleValues,t as SingleValue,o as WithElement,b as __namedExportsOrder,h as default};
