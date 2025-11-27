import{j as e}from"./iframe-B_KEKWeW.js";import{r as c}from"./rem_2_px-Bx8XZIkD.js";import"./preload-helper-Dp1pzeXC.js";const I={title:"convertors/rem2px",tags:["version:0.6"],parameters:{layout:"centered"}},r={render(){const n=[{input:1,expected:"16.0000"},{input:2,expected:"32.0000"},{input:.5,expected:"8.0000"},{input:1.5,expected:"24.0000"}];return e.jsxs("div",{className:"space-y-4",children:[e.jsx("h3",{className:"text-lg font-semibold",children:"Basic Usage (default base: 16px)"}),e.jsx("div",{className:"space-y-2",children:n.map(({input:s,expected:a})=>e.jsxs("div",{className:"flex items-center space-x-4 p-2 bg-gray-50 dark:bg-gray-800 rounded",children:[e.jsxs("code",{className:"text-sm",children:["rem2px(",s,")"]}),e.jsx("span",{children:"→"}),e.jsxs("code",{className:"text-sm font-mono",children:[c(s),"px"]}),e.jsxs("span",{className:"text-gray-500 text-sm",children:["(expected: ",a,"px)"]})]},s))})]})}},p={render(){const n=[{input:"1rem",expected:"16.0000"},{input:"2rem",expected:"32.0000"},{input:"1.5",expected:"24.0000"},{input:"0.5313rem",expected:"8.5008"}];return e.jsxs("div",{className:"space-y-4",children:[e.jsx("h3",{className:"text-lg font-semibold",children:"String Input"}),e.jsx("div",{className:"space-y-2",children:n.map(({input:s,expected:a})=>e.jsxs("div",{className:"flex items-center space-x-4 p-2 bg-gray-50 dark:bg-gray-800 rounded",children:[e.jsxs("code",{className:"text-sm",children:["rem2px('",s,"')"]}),e.jsx("span",{children:"→"}),e.jsxs("code",{className:"text-sm font-mono",children:[c(s),"px"]}),e.jsxs("span",{className:"text-gray-500 text-sm",children:["(expected: ",a,"px)"]})]},s))})]})}},i={render(){const n=[{input:1,base:20,expected:"20.0000"},{input:2,base:20,expected:"40.0000"},{input:.5,base:20,expected:"10.0000"},{input:1.5,base:20,expected:"30.0000"}];return e.jsxs("div",{className:"space-y-4",children:[e.jsx("h3",{className:"text-lg font-semibold",children:"Custom Base (20px)"}),e.jsx("div",{className:"space-y-2",children:n.map(({input:s,base:a,expected:t})=>e.jsxs("div",{className:"flex items-center space-x-4 p-2 bg-gray-50 dark:bg-gray-800 rounded",children:[e.jsx("code",{className:"text-sm",children:`rem2px(${s}, { base: ${a} })`}),e.jsx("span",{children:"→"}),e.jsxs("code",{className:"text-sm font-mono",children:[c(s,{base:a}),"px"]}),e.jsxs("span",{className:"text-gray-500 text-sm",children:["(expected: ",t,"px)"]})]},s))})]})}},d={render(){const s=[0,1,2,3,4,6];return e.jsxs("div",{className:"space-y-4",children:[e.jsx("h3",{className:"text-lg font-semibold",children:"Custom Precision (0.8125rem × 16px)"}),e.jsx("div",{className:"space-y-2",children:s.map(a=>e.jsxs("div",{className:"flex items-center space-x-4 p-2 bg-gray-50 dark:bg-gray-800 rounded",children:[e.jsx("code",{className:"text-sm",children:`rem2px(${.8125}, { precision: ${a} })`}),e.jsx("span",{children:"→"}),e.jsxs("code",{className:"text-sm font-mono",children:[c(.8125,{precision:a}),"px"]})]},a))})]})}},m={render(){const n=[{input:1,base:18,precision:2},{input:1.5,base:18,precision:3},{input:"2rem",base:18,precision:1},{input:.5,base:18,precision:0}];return e.jsxs("div",{className:"space-y-4",children:[e.jsx("h3",{className:"text-lg font-semibold",children:"Custom Base and Precision"}),e.jsx("div",{className:"space-y-2",children:n.map(({input:s,base:a,precision:t})=>e.jsxs("div",{className:"flex items-center space-x-4 p-2 bg-gray-50 dark:bg-gray-800 rounded",children:[e.jsx("code",{className:"text-sm",children:`rem2px(${typeof s=="string"?`'${s}'`:s}, { base: ${a}, precision: ${t} })`}),e.jsx("span",{children:"→"}),e.jsxs("code",{className:"text-sm font-mono",children:[c(s,{base:a,precision:t}),"px"]})]},`${s}-${a}-${t}`))})]})}};var o,x,l;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
  render() {
    const examples = [{
      input: 1,
      expected: '16.0000'
    }, {
      input: 2,
      expected: '32.0000'
    }, {
      input: 0.5,
      expected: '8.0000'
    }, {
      input: 1.5,
      expected: '24.0000'
    }];
    return <div className="space-y-4">
                <h3 className="text-lg font-semibold">Basic Usage (default base: 16px)</h3>
                <div className="space-y-2">
                    {examples.map(({
          input,
          expected
        }) => <div key={input} className="flex items-center space-x-4 p-2 bg-gray-50 dark:bg-gray-800 rounded">
                            <code className="text-sm">rem2px({input})</code>
                            <span>→</span>
                            <code className="text-sm font-mono">{rem2px(input)}px</code>
                            <span className="text-gray-500 text-sm">(expected: {expected}px)</span>
                        </div>)}
                </div>
            </div>;
  }
}`,...(l=(x=r.parameters)==null?void 0:x.docs)==null?void 0:l.source}}};var u,g,N;p.parameters={...p.parameters,docs:{...(u=p.parameters)==null?void 0:u.docs,source:{originalSource:`{
  render() {
    const examples = [{
      input: '1rem',
      expected: '16.0000'
    }, {
      input: '2rem',
      expected: '32.0000'
    }, {
      input: '1.5',
      expected: '24.0000'
    }, {
      input: '0.5313rem',
      expected: '8.5008'
    }];
    return <div className="space-y-4">
                <h3 className="text-lg font-semibold">String Input</h3>
                <div className="space-y-2">
                    {examples.map(({
          input,
          expected
        }) => <div key={input} className="flex items-center space-x-4 p-2 bg-gray-50 dark:bg-gray-800 rounded">
                            <code className="text-sm">rem2px('{input}')</code>
                            <span>→</span>
                            <code className="text-sm font-mono">{rem2px(input)}px</code>
                            <span className="text-gray-500 text-sm">(expected: {expected}px)</span>
                        </div>)}
                </div>
            </div>;
  }
}`,...(N=(g=p.parameters)==null?void 0:g.docs)==null?void 0:N.source}}};var b,y,h;i.parameters={...i.parameters,docs:{...(b=i.parameters)==null?void 0:b.docs,source:{originalSource:`{
  render() {
    const examples = [{
      input: 1,
      base: 20,
      expected: '20.0000'
    }, {
      input: 2,
      base: 20,
      expected: '40.0000'
    }, {
      input: 0.5,
      base: 20,
      expected: '10.0000'
    }, {
      input: 1.5,
      base: 20,
      expected: '30.0000'
    }];
    return <div className="space-y-4">
                <h3 className="text-lg font-semibold">Custom Base (20px)</h3>
                <div className="space-y-2">
                    {examples.map(({
          input,
          base,
          expected
        }) => <div key={input} className="flex items-center space-x-4 p-2 bg-gray-50 dark:bg-gray-800 rounded">
                            <code className="text-sm">{\`rem2px(\${input}, { base: \${base} })\`}</code>
                            <span>→</span>
                            <code className="text-sm font-mono">{rem2px(input, {
              base
            })}px</code>
                            <span className="text-gray-500 text-sm">(expected: {expected}px)</span>
                        </div>)}
                </div>
            </div>;
  }
}`,...(h=(y=i.parameters)==null?void 0:y.docs)==null?void 0:h.source}}};var v,j,f;d.parameters={...d.parameters,docs:{...(v=d.parameters)==null?void 0:v.docs,source:{originalSource:`{
  render() {
    const input = 0.8125;
    const precisions = [0, 1, 2, 3, 4, 6];
    return <div className="space-y-4">
                <h3 className="text-lg font-semibold">Custom Precision (0.8125rem × 16px)</h3>
                <div className="space-y-2">
                    {precisions.map(precision => <div key={precision} className="flex items-center space-x-4 p-2 bg-gray-50 dark:bg-gray-800 rounded">
                            <code className="text-sm">{\`rem2px(\${input}, { precision: \${precision} })\`}</code>
                            <span>→</span>
                            <code className="text-sm font-mono">{rem2px(input, {
              precision
            })}px</code>
                        </div>)}
                </div>
            </div>;
  }
}`,...(f=(j=d.parameters)==null?void 0:j.docs)==null?void 0:f.source}}};var $,k,B;m.parameters={...m.parameters,docs:{...($=m.parameters)==null?void 0:$.docs,source:{originalSource:`{
  render() {
    const examples = [{
      input: 1,
      base: 18,
      precision: 2
    }, {
      input: 1.5,
      base: 18,
      precision: 3
    }, {
      input: '2rem',
      base: 18,
      precision: 1
    }, {
      input: 0.5,
      base: 18,
      precision: 0
    }];
    return <div className="space-y-4">
                <h3 className="text-lg font-semibold">Custom Base and Precision</h3>
                <div className="space-y-2">
                    {examples.map(({
          input,
          base,
          precision
        }) => <div key={\`\${input}-\${base}-\${precision}\`} className="flex items-center space-x-4 p-2 bg-gray-50 dark:bg-gray-800 rounded">
                            <code className="text-sm">
                                {\`rem2px(\${typeof input === 'string' ? \`'\${input}'\` : input}, { base: \${base}, precision: \${precision} })\`}
                            </code>
                            <span>→</span>
                            <code className="text-sm font-mono">{rem2px(input, {
              base,
              precision
            })}px</code>
                        </div>)}
                </div>
            </div>;
  }
}`,...(B=(k=m.parameters)==null?void 0:k.docs)==null?void 0:B.source}}};const U=["BasicUsage","StringInput","CustomBase","CustomPrecision","AllOptions"];export{m as AllOptions,r as BasicUsage,i as CustomBase,d as CustomPrecision,p as StringInput,U as __namedExportsOrder,I as default};
