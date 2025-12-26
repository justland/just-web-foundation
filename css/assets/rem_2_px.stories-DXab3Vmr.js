import{j as e}from"./jsx-dev-runtime-DF-ftqEI.js";import{r as o}from"./rem_2_px-Bx8XZIkD.js";const p={title:"convertors/rem2px",tags:["version:0.6"],parameters:{layout:"centered"}},i={render(){const n=[{input:1,expected:"16.0000"},{input:2,expected:"32.0000"},{input:.5,expected:"8.0000"},{input:1.5,expected:"24.0000"}];return e.jsxDEV("div",{className:"space-y-4",children:[e.jsxDEV("h3",{className:"text-lg font-semibold",children:"Basic Usage (default base: 16px)"},void 0,!1,{fileName:"/home/runner/work/just-web-foundation/just-web-foundation/libs/css/src/convertors/rem_2_px.stories.tsx",lineNumber:28,columnNumber:17},this),e.jsxDEV("div",{className:"space-y-2",children:n.map(({input:s,expected:r})=>e.jsxDEV("div",{className:"flex items-center space-x-4 p-2 bg-gray-50 dark:bg-gray-800 rounded",children:[e.jsxDEV("code",{className:"text-sm",children:["rem2px(",s,")"]},void 0,!0,{fileName:"/home/runner/work/just-web-foundation/just-web-foundation/libs/css/src/convertors/rem_2_px.stories.tsx",lineNumber:34,columnNumber:29},this),e.jsxDEV("span",{children:"→"},void 0,!1,{fileName:"/home/runner/work/just-web-foundation/just-web-foundation/libs/css/src/convertors/rem_2_px.stories.tsx",lineNumber:35,columnNumber:29},this),e.jsxDEV("code",{className:"text-sm font-mono",children:[o(s),"px"]},void 0,!0,{fileName:"/home/runner/work/just-web-foundation/just-web-foundation/libs/css/src/convertors/rem_2_px.stories.tsx",lineNumber:36,columnNumber:29},this),e.jsxDEV("span",{className:"text-gray-500 text-sm",children:["(expected: ",r,"px)"]},void 0,!0,{fileName:"/home/runner/work/just-web-foundation/just-web-foundation/libs/css/src/convertors/rem_2_px.stories.tsx",lineNumber:37,columnNumber:29},this)]},s,!0,{fileName:"/home/runner/work/just-web-foundation/just-web-foundation/libs/css/src/convertors/rem_2_px.stories.tsx",lineNumber:33,columnNumber:15},this))},void 0,!1,{fileName:"/home/runner/work/just-web-foundation/just-web-foundation/libs/css/src/convertors/rem_2_px.stories.tsx",lineNumber:29,columnNumber:17},this)]},void 0,!0,{fileName:"/home/runner/work/just-web-foundation/just-web-foundation/libs/css/src/convertors/rem_2_px.stories.tsx",lineNumber:27,columnNumber:12},this)}},a={render(){const n=[{input:"1rem",expected:"16.0000"},{input:"2rem",expected:"32.0000"},{input:"1.5",expected:"24.0000"},{input:"0.5313rem",expected:"8.5008"}];return e.jsxDEV("div",{className:"space-y-4",children:[e.jsxDEV("h3",{className:"text-lg font-semibold",children:"String Input"},void 0,!1,{fileName:"/home/runner/work/just-web-foundation/just-web-foundation/libs/css/src/convertors/rem_2_px.stories.tsx",lineNumber:59,columnNumber:17},this),e.jsxDEV("div",{className:"space-y-2",children:n.map(({input:s,expected:r})=>e.jsxDEV("div",{className:"flex items-center space-x-4 p-2 bg-gray-50 dark:bg-gray-800 rounded",children:[e.jsxDEV("code",{className:"text-sm",children:["rem2px('",s,"')"]},void 0,!0,{fileName:"/home/runner/work/just-web-foundation/just-web-foundation/libs/css/src/convertors/rem_2_px.stories.tsx",lineNumber:65,columnNumber:29},this),e.jsxDEV("span",{children:"→"},void 0,!1,{fileName:"/home/runner/work/just-web-foundation/just-web-foundation/libs/css/src/convertors/rem_2_px.stories.tsx",lineNumber:66,columnNumber:29},this),e.jsxDEV("code",{className:"text-sm font-mono",children:[o(s),"px"]},void 0,!0,{fileName:"/home/runner/work/just-web-foundation/just-web-foundation/libs/css/src/convertors/rem_2_px.stories.tsx",lineNumber:67,columnNumber:29},this),e.jsxDEV("span",{className:"text-gray-500 text-sm",children:["(expected: ",r,"px)"]},void 0,!0,{fileName:"/home/runner/work/just-web-foundation/just-web-foundation/libs/css/src/convertors/rem_2_px.stories.tsx",lineNumber:68,columnNumber:29},this)]},s,!0,{fileName:"/home/runner/work/just-web-foundation/just-web-foundation/libs/css/src/convertors/rem_2_px.stories.tsx",lineNumber:64,columnNumber:15},this))},void 0,!1,{fileName:"/home/runner/work/just-web-foundation/just-web-foundation/libs/css/src/convertors/rem_2_px.stories.tsx",lineNumber:60,columnNumber:17},this)]},void 0,!0,{fileName:"/home/runner/work/just-web-foundation/just-web-foundation/libs/css/src/convertors/rem_2_px.stories.tsx",lineNumber:58,columnNumber:12},this)}},c={render(){const n=[{input:1,base:20,expected:"20.0000"},{input:2,base:20,expected:"40.0000"},{input:.5,base:20,expected:"10.0000"},{input:1.5,base:20,expected:"30.0000"}];return e.jsxDEV("div",{className:"space-y-4",children:[e.jsxDEV("h3",{className:"text-lg font-semibold",children:"Custom Base (20px)"},void 0,!1,{fileName:"/home/runner/work/just-web-foundation/just-web-foundation/libs/css/src/convertors/rem_2_px.stories.tsx",lineNumber:94,columnNumber:17},this),e.jsxDEV("div",{className:"space-y-2",children:n.map(({input:s,base:r,expected:t})=>e.jsxDEV("div",{className:"flex items-center space-x-4 p-2 bg-gray-50 dark:bg-gray-800 rounded",children:[e.jsxDEV("code",{className:"text-sm",children:`rem2px(${s}, { base: ${r} })`},void 0,!1,{fileName:"/home/runner/work/just-web-foundation/just-web-foundation/libs/css/src/convertors/rem_2_px.stories.tsx",lineNumber:101,columnNumber:29},this),e.jsxDEV("span",{children:"→"},void 0,!1,{fileName:"/home/runner/work/just-web-foundation/just-web-foundation/libs/css/src/convertors/rem_2_px.stories.tsx",lineNumber:102,columnNumber:29},this),e.jsxDEV("code",{className:"text-sm font-mono",children:[o(s,{base:r}),"px"]},void 0,!0,{fileName:"/home/runner/work/just-web-foundation/just-web-foundation/libs/css/src/convertors/rem_2_px.stories.tsx",lineNumber:103,columnNumber:29},this),e.jsxDEV("span",{className:"text-gray-500 text-sm",children:["(expected: ",t,"px)"]},void 0,!0,{fileName:"/home/runner/work/just-web-foundation/just-web-foundation/libs/css/src/convertors/rem_2_px.stories.tsx",lineNumber:106,columnNumber:29},this)]},s,!0,{fileName:"/home/runner/work/just-web-foundation/just-web-foundation/libs/css/src/convertors/rem_2_px.stories.tsx",lineNumber:100,columnNumber:15},this))},void 0,!1,{fileName:"/home/runner/work/just-web-foundation/just-web-foundation/libs/css/src/convertors/rem_2_px.stories.tsx",lineNumber:95,columnNumber:17},this)]},void 0,!0,{fileName:"/home/runner/work/just-web-foundation/just-web-foundation/libs/css/src/convertors/rem_2_px.stories.tsx",lineNumber:93,columnNumber:12},this)}},m={render(){const s=[0,1,2,3,4,6];return e.jsxDEV("div",{className:"space-y-4",children:[e.jsxDEV("h3",{className:"text-lg font-semibold",children:"Custom Precision (0.8125rem × 16px)"},void 0,!1,{fileName:"/home/runner/work/just-web-foundation/just-web-foundation/libs/css/src/convertors/rem_2_px.stories.tsx",lineNumber:117,columnNumber:17},this),e.jsxDEV("div",{className:"space-y-2",children:s.map(r=>e.jsxDEV("div",{className:"flex items-center space-x-4 p-2 bg-gray-50 dark:bg-gray-800 rounded",children:[e.jsxDEV("code",{className:"text-sm",children:`rem2px(${.8125}, { precision: ${r} })`},void 0,!1,{fileName:"/home/runner/work/just-web-foundation/just-web-foundation/libs/css/src/convertors/rem_2_px.stories.tsx",lineNumber:120,columnNumber:29},this),e.jsxDEV("span",{children:"→"},void 0,!1,{fileName:"/home/runner/work/just-web-foundation/just-web-foundation/libs/css/src/convertors/rem_2_px.stories.tsx",lineNumber:121,columnNumber:29},this),e.jsxDEV("code",{className:"text-sm font-mono",children:[o(.8125,{precision:r}),"px"]},void 0,!0,{fileName:"/home/runner/work/just-web-foundation/just-web-foundation/libs/css/src/convertors/rem_2_px.stories.tsx",lineNumber:122,columnNumber:29},this)]},r,!0,{fileName:"/home/runner/work/just-web-foundation/just-web-foundation/libs/css/src/convertors/rem_2_px.stories.tsx",lineNumber:119,columnNumber:50},this))},void 0,!1,{fileName:"/home/runner/work/just-web-foundation/just-web-foundation/libs/css/src/convertors/rem_2_px.stories.tsx",lineNumber:118,columnNumber:17},this)]},void 0,!0,{fileName:"/home/runner/work/just-web-foundation/just-web-foundation/libs/css/src/convertors/rem_2_px.stories.tsx",lineNumber:116,columnNumber:12},this)}},u={render(){const n=[{input:1,base:18,precision:2},{input:1.5,base:18,precision:3},{input:"2rem",base:18,precision:1},{input:.5,base:18,precision:0}];return e.jsxDEV("div",{className:"space-y-4",children:[e.jsxDEV("h3",{className:"text-lg font-semibold",children:"Custom Base and Precision"},void 0,!1,{fileName:"/home/runner/work/just-web-foundation/just-web-foundation/libs/css/src/convertors/rem_2_px.stories.tsx",lineNumber:150,columnNumber:17},this),e.jsxDEV("div",{className:"space-y-2",children:n.map(({input:s,base:r,precision:t})=>e.jsxDEV("div",{className:"flex items-center space-x-4 p-2 bg-gray-50 dark:bg-gray-800 rounded",children:[e.jsxDEV("code",{className:"text-sm",children:`rem2px(${typeof s=="string"?`'${s}'`:s}, { base: ${r}, precision: ${t} })`},void 0,!1,{fileName:"/home/runner/work/just-web-foundation/just-web-foundation/libs/css/src/convertors/rem_2_px.stories.tsx",lineNumber:157,columnNumber:29},this),e.jsxDEV("span",{children:"→"},void 0,!1,{fileName:"/home/runner/work/just-web-foundation/just-web-foundation/libs/css/src/convertors/rem_2_px.stories.tsx",lineNumber:160,columnNumber:29},this),e.jsxDEV("code",{className:"text-sm font-mono",children:[o(s,{base:r,precision:t}),"px"]},void 0,!0,{fileName:"/home/runner/work/just-web-foundation/just-web-foundation/libs/css/src/convertors/rem_2_px.stories.tsx",lineNumber:161,columnNumber:29},this)]},`${s}-${r}-${t}`,!0,{fileName:"/home/runner/work/just-web-foundation/just-web-foundation/libs/css/src/convertors/rem_2_px.stories.tsx",lineNumber:156,columnNumber:15},this))},void 0,!1,{fileName:"/home/runner/work/just-web-foundation/just-web-foundation/libs/css/src/convertors/rem_2_px.stories.tsx",lineNumber:151,columnNumber:17},this)]},void 0,!0,{fileName:"/home/runner/work/just-web-foundation/just-web-foundation/libs/css/src/convertors/rem_2_px.stories.tsx",lineNumber:149,columnNumber:12},this)}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
}`,...i.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
}`,...a.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
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
}`,...c.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
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
}`,...m.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
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
}`,...u.parameters?.docs?.source}}};const x=["BasicUsage","StringInput","CustomBase","CustomPrecision","AllOptions"];export{u as AllOptions,i as BasicUsage,c as CustomBase,m as CustomPrecision,a as StringInput,x as __namedExportsOrder,p as default};
