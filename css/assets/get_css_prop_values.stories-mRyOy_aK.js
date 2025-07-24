import{j as n}from"./iframe-CKVYuos1.js";import{s as h}from"./show_doc_source-DVUKVyw5.js";import{d as c}from"./define_docs_param-lmgaBKCF.js";import{a as x,d as P}from"./dedent-CN-vuQb3.js";import{g as l}from"./get-css-prop-values-MM-2vHZ3.js";const{expect:s}=__STORYBOOK_MODULE_TEST__,B={title:"utils/getCSSPropValues",tags:["code-only","new","version:1.0.0"],decorators:[h()],render:()=>n.jsx(n.Fragment,{})},t={parameters:c({description:{story:"can be used to get a single value"},source:{code:"getCSSPropValues('--color-gray-100')"}}),play:()=>{const[e]=l("--color-gray-100");s(e).toBe("oklch(96.7% 0.003 264.542)")}},r={parameters:c({description:{story:"gets css prop values from document body"},source:{code:"getCSSPropValues('--color-white', '--color-gray-100')"}}),play(){const[e,a]=l("--color-white","--color-gray-100");s(e).toBe("#fff"),s(a).toBe("oklch(96.7% 0.003 264.542)")}},o={parameters:c({description:{story:"can specify which element to get the property from"},source:{code:P`const element = canvas.getByTestId('subject')

            getCSSPropValues(element, '--text-red-100')`}}),render(){return n.jsx("div",{"data-testid":"subject",style:x({"--text-red-100":"red"})})},play({canvas:e}){const a=e.getByTestId("subject");s(l(a,"--text-red-100")).toEqual(["red"])}};var p,d,i;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
}`,...(i=(d=t.parameters)==null?void 0:d.docs)==null?void 0:i.source}}};var u,m,g;r.parameters={...r.parameters,docs:{...(u=r.parameters)==null?void 0:u.docs,source:{originalSource:`{
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
}`,...(g=(m=r.parameters)==null?void 0:m.docs)==null?void 0:g.source}}};var y,S,f;o.parameters={...o.parameters,docs:{...(y=o.parameters)==null?void 0:y.docs,source:{originalSource:`{
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
}`,...(f=(S=o.parameters)==null?void 0:S.docs)==null?void 0:f.source}}};const b=["SingleValue","MultipleValues","WithElement"];export{r as MultipleValues,t as SingleValue,o as WithElement,b as __namedExportsOrder,B as default};
