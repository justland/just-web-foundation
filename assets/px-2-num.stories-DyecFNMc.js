import{j as e}from"./iframe-BqSU7Mhi.js";import{p}from"./px-2-num-BC4tP6kO.js";import"./preload-helper-PPVm8Dsz.js";const{expect:i}=__STORYBOOK_MODULE_TEST__,j={title:"convertors/px2num",tags:["version:0.7"],parameters:{layout:"centered"}};function d({title:s,testcases:t}){return e.jsxs("div",{className:"space-y-4",children:[e.jsx("h3",{className:"text-lg font-semibold",children:s}),e.jsx("div",{className:"space-y-2",children:t.map(({input:n,expected:c,description:a},r)=>e.jsxs("div",{className:"flex items-center space-x-4 p-2 bg-gray-50 dark:bg-gray-800 rounded",children:[e.jsxs("code",{className:"text-sm",children:["px2num(",n,")"]}),e.jsx("span",{children:"→"}),e.jsx("code",{className:"text-sm font-mono",children:p(n)}),e.jsxs("span",{className:"text-gray-500 text-sm",children:["(",a?`${a}, `:"","expected: ",c,")"]})]},`${r}-${n}`))})]})}const o={args:{title:"Basic Usage (Number Input)",testcases:[{input:16,expected:16},{input:32,expected:32},{input:8,expected:8},{input:24,expected:24}]},render:d,play:async({args:{testcases:s}})=>{for(const t of s)await i(p(t.input)).toBe(t.expected)}},x={args:{title:"String Input",testcases:[{input:"16px",expected:16},{input:"32px",expected:32},{input:"24",expected:24},{input:"8.5px",expected:8.5}]},render:d,play:async({args:{testcases:s}})=>{for(const t of s)await i(p(t.input)).toBe(t.expected)}},u={args:{title:"Decimal Values",testcases:[{input:"12.5px",expected:12.5},{input:"0.5px",expected:.5},{input:"1.75px",expected:1.75},{input:"100.25px",expected:100.25}]},render:d,play:async({args:{testcases:s}})=>{for(const t of s)await i(p(t.input)).toBe(t.expected)}},l={args:{title:"Edge Cases",testcases:[{input:"0px",expected:0},{input:0,expected:0},{input:"1px",expected:1},{input:1,expected:1},{input:"1000px",expected:1e3},{input:1e3,expected:1e3}]},render:d,play:async({args:{testcases:s}})=>{for(const t of s)await i(p(t.input)).toBe(t.expected)}},m={args:{title:"Mixed Input Types",testcases:[{input:16,description:"Number input",expected:16},{input:"16px",description:"String with px suffix",expected:16},{input:"16",description:"String without px suffix",expected:16},{input:32.5,description:"Decimal number",expected:32.5},{input:"32.5px",description:"Decimal string with px",expected:32.5}]},render:d,play:async({args:{testcases:s}})=>{for(const t of s)await i(p(t.input)).toBe(t.expected)}},N={render(){const s=[{input:"",expected:"NaN",description:"Empty string"},{input:"px",expected:"NaN",description:"Only px suffix"},{input:"abc",expected:"NaN",description:"Non-numeric string"},{input:"abcpx",expected:"NaN",description:"Non-numeric with px"},{input:"16pxpx",expected:16,description:"Double px suffix"},{input:"16.5.5px",expected:16.5,description:"Invalid decimal format"},{input:" 16px ",expected:16,description:"Whitespace around value"},{input:"16PX",expected:16,description:"Uppercase PX"},{input:"16Px",expected:16,description:"Mixed case Px"}];return e.jsxs("div",{className:"space-y-4",children:[e.jsx("h3",{className:"text-lg font-semibold",children:"Validation & Edge Cases"}),e.jsx("div",{className:"space-y-2",children:s.map(({input:t,expected:n,description:c})=>{const a=p(t),r=!Number.isNaN(a)&&a===Number(n);return e.jsxs("div",{className:`flex items-center space-x-4 p-2 rounded ${r?"bg-green-50 dark:bg-green-900/20":"bg-red-50 dark:bg-red-900/20"}`,children:[e.jsxs("code",{className:"text-sm",children:["px2num('",t,"')"]}),e.jsx("span",{children:"→"}),e.jsx("code",{className:"text-sm font-mono",children:Number.isNaN(a)?"NaN":a}),e.jsxs("span",{className:`text-sm ${r?"text-green-600 dark:text-green-400":"text-red-600 dark:text-red-400"}`,children:["(",c,")"]}),!r&&e.jsxs("span",{className:"text-xs text-red-500 dark:text-red-400",children:["Expected: ",n]})]},t)})})]})}},g={render(){const s=[{input:null,description:"null value"},{input:void 0,description:"undefined value"},{input:!0,description:"boolean true"},{input:!1,description:"boolean false"},{input:[],description:"empty array"},{input:{},description:"empty object"},{input:()=>{},description:"function"}];return e.jsxs("div",{className:"space-y-4",children:[e.jsx("h3",{className:"text-lg font-semibold",children:"Type Validation"}),e.jsx("div",{className:"space-y-2",children:s.map(({input:t,description:n})=>{let c,a=null;try{c=p(t)}catch(r){a=r instanceof Error?r.message:String(r),c=Number.NaN}return e.jsxs("div",{className:"flex items-center space-x-4 p-2 bg-yellow-50 dark:bg-yellow-900/20 rounded",children:[e.jsxs("code",{className:"text-sm",children:["px2num(",Array.isArray(t)?"[]":String(t),")"]}),e.jsx("span",{children:"→"}),a?e.jsxs("code",{className:"text-sm font-mono text-red-600 dark:text-red-400",children:["Error: ",a]}):e.jsx("code",{className:"text-sm font-mono",children:Number.isNaN(c)?"NaN":c}),e.jsxs("span",{className:"text-sm text-yellow-600 dark:text-yellow-400",children:["(",n,")"]})]},n)})})]})}},f={render(){const s=[{count:1e3,input:"16px"},{count:1e3,input:16},{count:1e3,input:"123.456px"}];return e.jsxs("div",{className:"space-y-4",children:[e.jsx("h3",{className:"text-lg font-semibold",children:"Performance Test"}),e.jsx("div",{className:"space-y-2",children:s.map(({count:t,input:n})=>{const c=performance.now();for(let y=0;y<t;y++)p(n);const r=performance.now()-c;return e.jsxs("div",{className:"flex items-center space-x-4 p-2 bg-blue-50 dark:bg-blue-900/20 rounded",children:[e.jsxs("code",{className:"text-sm",children:[t," × px2num(",typeof n=="string"?`'${n}'`:n,")"]}),e.jsx("span",{children:"→"}),e.jsxs("code",{className:"text-sm font-mono",children:[r.toFixed(2),"ms"]}),e.jsxs("span",{className:"text-sm text-blue-600 dark:text-blue-400",children:["(",(r/t).toFixed(4),"ms per call)"]})]},`${n}-${t}`)})})]})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'Basic Usage (Number Input)',
    testcases: [{
      input: 16,
      expected: 16
    }, {
      input: 32,
      expected: 32
    }, {
      input: 8,
      expected: 8
    }, {
      input: 24,
      expected: 24
    }]
  },
  render: RenderTestCases,
  play: async ({
    args: {
      testcases
    }
  }) => {
    for (const testcase of testcases) {
      await expect(px2num(testcase.input)).toBe(testcase.expected);
    }
  }
}`,...o.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'String Input',
    testcases: [{
      input: '16px',
      expected: 16
    }, {
      input: '32px',
      expected: 32
    }, {
      input: '24',
      expected: 24
    }, {
      input: '8.5px',
      expected: 8.5
    }]
  },
  render: RenderTestCases,
  play: async ({
    args: {
      testcases
    }
  }) => {
    for (const testcase of testcases) {
      await expect(px2num(testcase.input)).toBe(testcase.expected);
    }
  }
}`,...x.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'Decimal Values',
    testcases: [{
      input: '12.5px',
      expected: 12.5
    }, {
      input: '0.5px',
      expected: 0.5
    }, {
      input: '1.75px',
      expected: 1.75
    }, {
      input: '100.25px',
      expected: 100.25
    }]
  },
  render: RenderTestCases,
  play: async ({
    args: {
      testcases
    }
  }) => {
    for (const testcase of testcases) {
      await expect(px2num(testcase.input)).toBe(testcase.expected);
    }
  }
}`,...u.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'Edge Cases',
    testcases: [{
      input: '0px',
      expected: 0
    }, {
      input: 0,
      expected: 0
    }, {
      input: '1px',
      expected: 1
    }, {
      input: 1,
      expected: 1
    }, {
      input: '1000px',
      expected: 1000
    }, {
      input: 1000,
      expected: 1000
    }]
  },
  render: RenderTestCases,
  play: async ({
    args: {
      testcases
    }
  }) => {
    for (const testcase of testcases) {
      await expect(px2num(testcase.input)).toBe(testcase.expected);
    }
  }
}`,...l.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'Mixed Input Types',
    testcases: [{
      input: 16,
      description: 'Number input',
      expected: 16
    }, {
      input: '16px',
      description: 'String with px suffix',
      expected: 16
    }, {
      input: '16',
      description: 'String without px suffix',
      expected: 16
    }, {
      input: 32.5,
      description: 'Decimal number',
      expected: 32.5
    }, {
      input: '32.5px',
      description: 'Decimal string with px',
      expected: 32.5
    }]
  },
  render: RenderTestCases,
  play: async ({
    args: {
      testcases
    }
  }) => {
    for (const testcase of testcases) {
      await expect(px2num(testcase.input)).toBe(testcase.expected);
    }
  }
}`,...m.parameters?.docs?.source}}};N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
  render() {
    const invalidInputs = [{
      input: '',
      expected: 'NaN',
      description: 'Empty string'
    }, {
      input: 'px',
      expected: 'NaN',
      description: 'Only px suffix'
    }, {
      input: 'abc',
      expected: 'NaN',
      description: 'Non-numeric string'
    }, {
      input: 'abcpx',
      expected: 'NaN',
      description: 'Non-numeric with px'
    }, {
      input: '16pxpx',
      expected: 16,
      description: 'Double px suffix'
    }, {
      input: '16.5.5px',
      expected: 16.5,
      description: 'Invalid decimal format'
    }, {
      input: ' 16px ',
      expected: 16,
      description: 'Whitespace around value'
    }, {
      input: '16PX',
      expected: 16,
      description: 'Uppercase PX'
    }, {
      input: '16Px',
      expected: 16,
      description: 'Mixed case Px'
    }];
    return <div className="space-y-4">
                <h3 className="text-lg font-semibold">Validation & Edge Cases</h3>
                <div className="space-y-2">
                    {invalidInputs.map(({
          input,
          expected,
          description
        }) => {
          const result = px2num(input);
          const isValid = !Number.isNaN(result) && result === Number(expected);
          return <div key={input} className={\`flex items-center space-x-4 p-2 rounded \${isValid ? 'bg-green-50 dark:bg-green-900/20' : 'bg-red-50 dark:bg-red-900/20'}\`}>
                                <code className="text-sm">px2num('{input}')</code>
                                <span>→</span>
                                <code className="text-sm font-mono">{Number.isNaN(result) ? 'NaN' : result}</code>
                                <span className={\`text-sm \${isValid ? 'text-green-600 dark:text-green-400' : 'text-red-600 dark:text-red-400'}\`}>
                                    ({description})
                                </span>
                                {!isValid && <span className="text-xs text-red-500 dark:text-red-400">Expected: {expected}</span>}
                            </div>;
        })}
                </div>
            </div>;
  }
}`,...N.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render() {
    const typeTests = [{
      input: null,
      description: 'null value'
    }, {
      input: undefined,
      description: 'undefined value'
    }, {
      input: true,
      description: 'boolean true'
    }, {
      input: false,
      description: 'boolean false'
    }, {
      input: [],
      description: 'empty array'
    }, {
      input: {},
      description: 'empty object'
    }, {
      input: () => {},
      description: 'function'
    }];
    return <div className="space-y-4">
                <h3 className="text-lg font-semibold">Type Validation</h3>
                <div className="space-y-2">
                    {typeTests.map(({
          input,
          description
        }) => {
          let result: number;
          let error: string | null = null;
          try {
            result = px2num(input as any);
          } catch (err) {
            error = err instanceof Error ? err.message : String(err);
            result = Number.NaN;
          }
          return <div key={description} className="flex items-center space-x-4 p-2 bg-yellow-50 dark:bg-yellow-900/20 rounded">
                                <code className="text-sm">px2num({Array.isArray(input) ? '[]' : String(input)})</code>
                                <span>→</span>
                                {error ? <code className="text-sm font-mono text-red-600 dark:text-red-400">Error: {error}</code> : <code className="text-sm font-mono">{Number.isNaN(result) ? 'NaN' : result}</code>}
                                <span className="text-sm text-yellow-600 dark:text-yellow-400">({description})</span>
                            </div>;
        })}
                </div>
            </div>;
  }
}`,...g.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  render() {
    const testCases = [{
      count: 1000,
      input: '16px'
    }, {
      count: 1000,
      input: 16
    }, {
      count: 1000,
      input: '123.456px'
    }];
    return <div className="space-y-4">
                <h3 className="text-lg font-semibold">Performance Test</h3>
                <div className="space-y-2">
                    {testCases.map(({
          count,
          input
        }) => {
          const start = performance.now();
          for (let i = 0; i < count; i++) {
            px2num(input);
          }
          const end = performance.now();
          const duration = end - start;
          return <div key={\`\${input}-\${count}\`} className="flex items-center space-x-4 p-2 bg-blue-50 dark:bg-blue-900/20 rounded">
                                <code className="text-sm">
                                    {count} × px2num({typeof input === 'string' ? \`'\${input}'\` : input})
                                </code>
                                <span>→</span>
                                <code className="text-sm font-mono">{duration.toFixed(2)}ms</code>
                                <span className="text-sm text-blue-600 dark:text-blue-400">
                                    ({(duration / count).toFixed(4)}ms per call)
                                </span>
                            </div>;
        })}
                </div>
            </div>;
  }
}`,...f.parameters?.docs?.source}}};const w=["BasicUsage","StringInput","DecimalValues","EdgeCases","MixedInputs","Validation","TypeValidation","PerformanceTest"];export{o as BasicUsage,u as DecimalValues,l as EdgeCases,m as MixedInputs,f as PerformanceTest,x as StringInput,g as TypeValidation,N as Validation,w as __namedExportsOrder,j as default};
