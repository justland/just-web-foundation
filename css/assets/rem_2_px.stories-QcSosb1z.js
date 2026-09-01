import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t}from"./rem_2_px-DpeXsgKz.js";import{r as n}from"./dist-CJMrBJtm.js";import{t as r}from"./jsx-dev-runtime-DpMrmGJR.js";var i,a,o,s,c,l,u,d,f;function p(){return(p=e((()=>{n(),i=r(),a=`/home/runner/work/just-web-foundation/just-web-foundation/libs/css/src/convertors/rem_2_px.stories.tsx`,o={title:`convertors/rem2px`,tags:[`version:0.6`],parameters:{layout:`centered`}},s={render(){return(0,i.jsxDEV)(`div`,{className:`space-y-4`,children:[(0,i.jsxDEV)(`h3`,{className:`text-lg font-semibold`,children:`Basic Usage (default base: 16px)`},void 0,!1,{fileName:a,lineNumber:28,columnNumber:17},this),(0,i.jsxDEV)(`div`,{className:`space-y-2`,children:[{input:1,expected:`16.0000`},{input:2,expected:`32.0000`},{input:.5,expected:`8.0000`},{input:1.5,expected:`24.0000`}].map(({input:e,expected:n})=>(0,i.jsxDEV)(`div`,{className:`flex items-center space-x-4 p-2 bg-gray-50 dark:bg-gray-800 rounded`,children:[(0,i.jsxDEV)(`code`,{className:`text-sm`,children:[`rem2px(`,e,`)`]},void 0,!0,{fileName:a,lineNumber:34,columnNumber:29},this),(0,i.jsxDEV)(`span`,{children:`→`},void 0,!1,{fileName:a,lineNumber:35,columnNumber:29},this),(0,i.jsxDEV)(`code`,{className:`text-sm font-mono`,children:[t(e),`px`]},void 0,!0,{fileName:a,lineNumber:36,columnNumber:29},this),(0,i.jsxDEV)(`span`,{className:`text-gray-500 text-sm`,children:[`(expected: `,n,`px)`]},void 0,!0,{fileName:a,lineNumber:37,columnNumber:29},this)]},e,!0,{fileName:a,lineNumber:33,columnNumber:15},this))},void 0,!1,{fileName:a,lineNumber:29,columnNumber:17},this)]},void 0,!0,{fileName:a,lineNumber:27,columnNumber:12},this)}},c={render(){return(0,i.jsxDEV)(`div`,{className:`space-y-4`,children:[(0,i.jsxDEV)(`h3`,{className:`text-lg font-semibold`,children:`String Input`},void 0,!1,{fileName:a,lineNumber:59,columnNumber:17},this),(0,i.jsxDEV)(`div`,{className:`space-y-2`,children:[{input:`1rem`,expected:`16.0000`},{input:`2rem`,expected:`32.0000`},{input:`1.5`,expected:`24.0000`},{input:`0.5313rem`,expected:`8.5008`}].map(({input:e,expected:n})=>(0,i.jsxDEV)(`div`,{className:`flex items-center space-x-4 p-2 bg-gray-50 dark:bg-gray-800 rounded`,children:[(0,i.jsxDEV)(`code`,{className:`text-sm`,children:[`rem2px('`,e,`')`]},void 0,!0,{fileName:a,lineNumber:65,columnNumber:29},this),(0,i.jsxDEV)(`span`,{children:`→`},void 0,!1,{fileName:a,lineNumber:66,columnNumber:29},this),(0,i.jsxDEV)(`code`,{className:`text-sm font-mono`,children:[t(e),`px`]},void 0,!0,{fileName:a,lineNumber:67,columnNumber:29},this),(0,i.jsxDEV)(`span`,{className:`text-gray-500 text-sm`,children:[`(expected: `,n,`px)`]},void 0,!0,{fileName:a,lineNumber:68,columnNumber:29},this)]},e,!0,{fileName:a,lineNumber:64,columnNumber:15},this))},void 0,!1,{fileName:a,lineNumber:60,columnNumber:17},this)]},void 0,!0,{fileName:a,lineNumber:58,columnNumber:12},this)}},l={render(){return(0,i.jsxDEV)(`div`,{className:`space-y-4`,children:[(0,i.jsxDEV)(`h3`,{className:`text-lg font-semibold`,children:`Custom Base (20px)`},void 0,!1,{fileName:a,lineNumber:94,columnNumber:17},this),(0,i.jsxDEV)(`div`,{className:`space-y-2`,children:[{input:1,base:20,expected:`20.0000`},{input:2,base:20,expected:`40.0000`},{input:.5,base:20,expected:`10.0000`},{input:1.5,base:20,expected:`30.0000`}].map(({input:e,base:n,expected:r})=>(0,i.jsxDEV)(`div`,{className:`flex items-center space-x-4 p-2 bg-gray-50 dark:bg-gray-800 rounded`,children:[(0,i.jsxDEV)(`code`,{className:`text-sm`,children:`rem2px(${e}, { base: ${n} })`},void 0,!1,{fileName:a,lineNumber:101,columnNumber:29},this),(0,i.jsxDEV)(`span`,{children:`→`},void 0,!1,{fileName:a,lineNumber:102,columnNumber:29},this),(0,i.jsxDEV)(`code`,{className:`text-sm font-mono`,children:[t(e,{base:n}),`px`]},void 0,!0,{fileName:a,lineNumber:103,columnNumber:29},this),(0,i.jsxDEV)(`span`,{className:`text-gray-500 text-sm`,children:[`(expected: `,r,`px)`]},void 0,!0,{fileName:a,lineNumber:106,columnNumber:29},this)]},e,!0,{fileName:a,lineNumber:100,columnNumber:15},this))},void 0,!1,{fileName:a,lineNumber:95,columnNumber:17},this)]},void 0,!0,{fileName:a,lineNumber:93,columnNumber:12},this)}},u={render(){let e=.8125;return(0,i.jsxDEV)(`div`,{className:`space-y-4`,children:[(0,i.jsxDEV)(`h3`,{className:`text-lg font-semibold`,children:`Custom Precision (0.8125rem × 16px)`},void 0,!1,{fileName:a,lineNumber:117,columnNumber:17},this),(0,i.jsxDEV)(`div`,{className:`space-y-2`,children:[0,1,2,3,4,6].map(n=>(0,i.jsxDEV)(`div`,{className:`flex items-center space-x-4 p-2 bg-gray-50 dark:bg-gray-800 rounded`,children:[(0,i.jsxDEV)(`code`,{className:`text-sm`,children:`rem2px(${e}, { precision: ${n} })`},void 0,!1,{fileName:a,lineNumber:120,columnNumber:29},this),(0,i.jsxDEV)(`span`,{children:`→`},void 0,!1,{fileName:a,lineNumber:121,columnNumber:29},this),(0,i.jsxDEV)(`code`,{className:`text-sm font-mono`,children:[t(e,{precision:n}),`px`]},void 0,!0,{fileName:a,lineNumber:122,columnNumber:29},this)]},n,!0,{fileName:a,lineNumber:119,columnNumber:50},this))},void 0,!1,{fileName:a,lineNumber:118,columnNumber:17},this)]},void 0,!0,{fileName:a,lineNumber:116,columnNumber:12},this)}},d={render(){return(0,i.jsxDEV)(`div`,{className:`space-y-4`,children:[(0,i.jsxDEV)(`h3`,{className:`text-lg font-semibold`,children:`Custom Base and Precision`},void 0,!1,{fileName:a,lineNumber:150,columnNumber:17},this),(0,i.jsxDEV)(`div`,{className:`space-y-2`,children:[{input:1,base:18,precision:2},{input:1.5,base:18,precision:3},{input:`2rem`,base:18,precision:1},{input:.5,base:18,precision:0}].map(({input:e,base:n,precision:r})=>(0,i.jsxDEV)(`div`,{className:`flex items-center space-x-4 p-2 bg-gray-50 dark:bg-gray-800 rounded`,children:[(0,i.jsxDEV)(`code`,{className:`text-sm`,children:`rem2px(${typeof e==`string`?`'${e}'`:e}, { base: ${n}, precision: ${r} })`},void 0,!1,{fileName:a,lineNumber:157,columnNumber:29},this),(0,i.jsxDEV)(`span`,{children:`→`},void 0,!1,{fileName:a,lineNumber:160,columnNumber:29},this),(0,i.jsxDEV)(`code`,{className:`text-sm font-mono`,children:[t(e,{base:n,precision:r}),`px`]},void 0,!0,{fileName:a,lineNumber:161,columnNumber:29},this)]},`${e}-${n}-${r}`,!0,{fileName:a,lineNumber:156,columnNumber:15},this))},void 0,!1,{fileName:a,lineNumber:151,columnNumber:17},this)]},void 0,!0,{fileName:a,lineNumber:149,columnNumber:12},this)}},s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
}`,...s.parameters?.docs?.source}}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
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
}`,...c.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
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
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
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
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
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
}`,...d.parameters?.docs?.source}}},f=[`BasicUsage`,`StringInput`,`CustomBase`,`CustomPrecision`,`AllOptions`]})))()}p();export{d as AllOptions,s as BasicUsage,l as CustomBase,u as CustomPrecision,c as StringInput,f as __namedExportsOrder,o as default};