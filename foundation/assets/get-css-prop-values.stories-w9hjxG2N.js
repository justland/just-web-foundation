import{j as s,s as d,d as c,S as p}from"./iframe-BfM-9P5l.js";import{d as i}from"./dedent-BuYMbVyj.js";import{d as u}from"./css-properties-Dh8E5HRZ.js";import{g as l}from"./get-css-prop-values-MM-2vHZ3.js";import"./preload-helper-PPVm8Dsz.js";const{expect:a}=__STORYBOOK_MODULE_TEST__,h={title:"utils/getCSSPropValues",tags:["code-only","version:0.1"],decorators:[d()],render:()=>s.jsx(s.Fragment,{})},r={parameters:c({description:{story:"can be used to get a single value"},source:{code:"getCSSPropValues('--color-gray-100')"}}),render:()=>s.jsx(p,{className:"text-black",children:"Hello"}),play:()=>{const[e]=l("--color-gray-100");a(e).toBe("oklch(96.7% 0.003 264.542)")}},t={parameters:c({description:{story:"gets css prop values from document body"},source:{code:"getCSSPropValues('--color-white', '--color-gray-100')"}}),play(){const[e,n]=l("--color-white","--color-gray-100");a(e).toBe("#fff"),a(n).toBe("oklch(96.7% 0.003 264.542)")}},o={parameters:c({description:{story:"can specify which element to get the property from"},source:{code:i`const element = canvas.getByTestId('subject')

            getCSSPropValues(element, '--text-red-100')`}}),render(){return s.jsx("div",{"data-testid":"subject",style:u({"--text-red-100":"red"})})},play({canvas:e}){const n=e.getByTestId("subject");a(l(n,"--text-red-100")).toEqual(["red"])}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  parameters: defineDocsParam({
    description: {
      story: 'can be used to get a single value'
    },
    source: {
      code: \`getCSSPropValues('--color-gray-100')\`
    }
  }),
  render: () => <StoryCard className="text-black">Hello</StoryCard>,
  play: () => {
    const [gray100] = getCSSPropValues('--color-gray-100');
    expect(gray100).toBe('oklch(96.7% 0.003 264.542)');
  }
}`,...r.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
}`,...t.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
}`,...o.parameters?.docs?.source}}};const x=["SingleValue","MultipleValues","WithElement"];export{t as MultipleValues,r as SingleValue,o as WithElement,x as __namedExportsOrder,h as default};
