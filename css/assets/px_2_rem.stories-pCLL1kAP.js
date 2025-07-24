import{j as e}from"./iframe-CKVYuos1.js";import{p as c}from"./px_2_rem-CXClvWoR.js";const P={title:"convertors/px2rem",tags:["version:0.6"],parameters:{layout:"centered"}},r={tags:["snapshot"],render(){const n=[{input:16,expected:"1.0000"},{input:32,expected:"2.0000"},{input:8,expected:"0.5000"},{input:24,expected:"1.5000"}];return e.jsxs("div",{className:"space-y-4",children:[e.jsx("h3",{className:"text-lg font-semibold",children:"Basic Usage (default base: 16px)"}),e.jsx("div",{className:"space-y-2",children:n.map(({input:s,expected:a})=>e.jsxs("div",{className:"flex items-center space-x-4 p-2 bg-gray-50 dark:bg-gray-800 rounded",children:[e.jsxs("code",{className:"text-sm",children:["px2rem(",s,")"]}),e.jsx("span",{children:"→"}),e.jsxs("code",{className:"text-sm font-mono",children:[c(s),"rem"]}),e.jsxs("span",{className:"text-gray-500 text-sm",children:["(expected: ",a,"rem)"]})]},s))})]})}},p={render(){const n=[{input:"16px",expected:"1.0000"},{input:"32px",expected:"2.0000"},{input:"24",expected:"1.5000"},{input:"8.5px",expected:"0.5313"}];return e.jsxs("div",{className:"space-y-4",children:[e.jsx("h3",{className:"text-lg font-semibold",children:"String Input"}),e.jsx("div",{className:"space-y-2",children:n.map(({input:s,expected:a})=>e.jsxs("div",{className:"flex items-center space-x-4 p-2 bg-gray-50 dark:bg-gray-800 rounded",children:[e.jsxs("code",{className:"text-sm",children:["px2rem('",s,"')"]}),e.jsx("span",{children:"→"}),e.jsxs("code",{className:"text-sm font-mono",children:[c(s),"rem"]}),e.jsxs("span",{className:"text-gray-500 text-sm",children:["(expected: ",a,"rem)"]})]},s))})]})}},i={render(){const n=[{input:20,base:20,expected:"1.0000"},{input:40,base:20,expected:"2.0000"},{input:10,base:20,expected:"0.5000"},{input:30,base:20,expected:"1.5000"}];return e.jsxs("div",{className:"space-y-4",children:[e.jsx("h3",{className:"text-lg font-semibold",children:"Custom Base (20px)"}),e.jsx("div",{className:"space-y-2",children:n.map(({input:s,base:a,expected:t})=>e.jsxs("div",{className:"flex items-center space-x-4 p-2 bg-gray-50 dark:bg-gray-800 rounded",children:[e.jsx("code",{className:"text-sm",children:`px2rem(${s}, { base: ${a} })`}),e.jsx("span",{children:"→"}),e.jsxs("code",{className:"text-sm font-mono",children:[c(s,{base:a}),"rem"]}),e.jsxs("span",{className:"text-gray-500 text-sm",children:["(expected: ",t,"rem)"]})]},s))})]})}},d={render(){const s=[0,1,2,3,4,6];return e.jsxs("div",{className:"space-y-4",children:[e.jsx("h3",{className:"text-lg font-semibold",children:"Custom Precision (13px ÷ 16px)"}),e.jsx("div",{className:"space-y-2",children:s.map(a=>e.jsxs("div",{className:"flex items-center space-x-4 p-2 bg-gray-50 dark:bg-gray-800 rounded",children:[e.jsx("code",{className:"text-sm",children:`px2rem(13, { precision: ${a} })`}),e.jsx("span",{children:"→"}),e.jsxs("code",{className:"text-sm font-mono",children:[c(13,{precision:a}),"rem"]})]},a))})]})}},m={render(){const n=[{input:18,base:18,precision:2},{input:27,base:18,precision:3},{input:"36px",base:18,precision:1},{input:9,base:18,precision:0}];return e.jsxs("div",{className:"space-y-4",children:[e.jsx("h3",{className:"text-lg font-semibold",children:"Custom Base and Precision"}),e.jsx("div",{className:"space-y-2",children:n.map(({input:s,base:a,precision:t})=>e.jsxs("div",{className:"flex items-center space-x-4 p-2 bg-gray-50 dark:bg-gray-800 rounded",children:[e.jsx("code",{className:"text-sm",children:`px2rem(${typeof s=="string"?`'${s}'`:s}, { base: ${a}, precision: ${t} })`}),e.jsx("span",{children:"→"}),e.jsxs("code",{className:"text-sm font-mono",children:[c(s,{base:a,precision:t}),"rem"]})]},`${s}-${a}-${t}`))})]})}};var o,x,l;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
  tags: ['snapshot'],
  render() {
    const examples = [{
      input: 16,
      expected: '1.0000'
    }, {
      input: 32,
      expected: '2.0000'
    }, {
      input: 8,
      expected: '0.5000'
    }, {
      input: 24,
      expected: '1.5000'
    }];
    return <div className="space-y-4">
                <h3 className="text-lg font-semibold">Basic Usage (default base: 16px)</h3>
                <div className="space-y-2">
                    {examples.map(({
          input,
          expected
        }) => <div key={input} className="flex items-center space-x-4 p-2 bg-gray-50 dark:bg-gray-800 rounded">
                            <code className="text-sm">px2rem({input})</code>
                            <span>→</span>
                            <code className="text-sm font-mono">{px2rem(input)}rem</code>
                            <span className="text-gray-500 text-sm">(expected: {expected}rem)</span>
                        </div>)}
                </div>
            </div>;
  }
}`,...(l=(x=r.parameters)==null?void 0:x.docs)==null?void 0:l.source}}};var u,g,N;p.parameters={...p.parameters,docs:{...(u=p.parameters)==null?void 0:u.docs,source:{originalSource:`{
  render() {
    const examples = [{
      input: '16px',
      expected: '1.0000'
    }, {
      input: '32px',
      expected: '2.0000'
    }, {
      input: '24',
      expected: '1.5000'
    }, {
      input: '8.5px',
      expected: '0.5313'
    }];
    return <div className="space-y-4">
                <h3 className="text-lg font-semibold">String Input</h3>
                <div className="space-y-2">
                    {examples.map(({
          input,
          expected
        }) => <div key={input} className="flex items-center space-x-4 p-2 bg-gray-50 dark:bg-gray-800 rounded">
                            <code className="text-sm">px2rem('{input}')</code>
                            <span>→</span>
                            <code className="text-sm font-mono">{px2rem(input)}rem</code>
                            <span className="text-gray-500 text-sm">(expected: {expected}rem)</span>
                        </div>)}
                </div>
            </div>;
  }
}`,...(N=(g=p.parameters)==null?void 0:g.docs)==null?void 0:N.source}}};var b,h,y;i.parameters={...i.parameters,docs:{...(b=i.parameters)==null?void 0:b.docs,source:{originalSource:`{
  render() {
    const examples = [{
      input: 20,
      base: 20,
      expected: '1.0000'
    }, {
      input: 40,
      base: 20,
      expected: '2.0000'
    }, {
      input: 10,
      base: 20,
      expected: '0.5000'
    }, {
      input: 30,
      base: 20,
      expected: '1.5000'
    }];
    return <div className="space-y-4">
                <h3 className="text-lg font-semibold">Custom Base (20px)</h3>
                <div className="space-y-2">
                    {examples.map(({
          input,
          base,
          expected
        }) => <div key={input} className="flex items-center space-x-4 p-2 bg-gray-50 dark:bg-gray-800 rounded">
                            <code className="text-sm">{\`px2rem(\${input}, { base: \${base} })\`}</code>
                            <span>→</span>
                            <code className="text-sm font-mono">{px2rem(input, {
              base
            })}rem</code>
                            <span className="text-gray-500 text-sm">(expected: {expected}rem)</span>
                        </div>)}
                </div>
            </div>;
  }
}`,...(y=(h=i.parameters)==null?void 0:h.docs)==null?void 0:y.source}}};var v,j,f;d.parameters={...d.parameters,docs:{...(v=d.parameters)==null?void 0:v.docs,source:{originalSource:`{
  render() {
    const input = 13;
    const precisions = [0, 1, 2, 3, 4, 6];
    return <div className="space-y-4">
                <h3 className="text-lg font-semibold">Custom Precision (13px ÷ 16px)</h3>
                <div className="space-y-2">
                    {precisions.map(precision => <div key={precision} className="flex items-center space-x-4 p-2 bg-gray-50 dark:bg-gray-800 rounded">
                            <code className="text-sm">{\`px2rem(\${input}, { precision: \${precision} })\`}</code>
                            <span>→</span>
                            <code className="text-sm font-mono">{px2rem(input, {
              precision
            })}rem</code>
                        </div>)}
                </div>
            </div>;
  }
}`,...(f=(j=d.parameters)==null?void 0:j.docs)==null?void 0:f.source}}};var $,k,B;m.parameters={...m.parameters,docs:{...($=m.parameters)==null?void 0:$.docs,source:{originalSource:`{
  render() {
    const examples = [{
      input: 18,
      base: 18,
      precision: 2
    }, {
      input: 27,
      base: 18,
      precision: 3
    }, {
      input: '36px',
      base: 18,
      precision: 1
    }, {
      input: 9,
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
                                {\`px2rem(\${typeof input === 'string' ? \`'\${input}'\` : input}, { base: \${base}, precision: \${precision} })\`}
                            </code>
                            <span>→</span>
                            <code className="text-sm font-mono">{px2rem(input, {
              base,
              precision
            })}rem</code>
                        </div>)}
                </div>
            </div>;
  }
}`,...(B=(k=m.parameters)==null?void 0:k.docs)==null?void 0:B.source}}};const I=["BasicUsage","StringInput","CustomBase","CustomPrecision","AllOptions"];export{m as AllOptions,r as BasicUsage,i as CustomBase,d as CustomPrecision,p as StringInput,I as __namedExportsOrder,P as default};
