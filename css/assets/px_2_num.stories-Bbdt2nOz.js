import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t}from"./px_2_num-DBLNEgdF.js";import{r as n}from"./dist-CJMrBJtm.js";import{t as r}from"./jsx-dev-runtime-DpMrmGJR.js";function i({title:e,testcases:n}){return(0,a.jsxDEV)(`div`,{className:`space-y-4`,children:[(0,a.jsxDEV)(`h3`,{className:`text-lg font-semibold`,children:e},void 0,!1,{fileName:s,lineNumber:24,columnNumber:13},this),(0,a.jsxDEV)(`div`,{className:`space-y-2`,children:n.map(({input:e,expected:n,description:r},i)=>(0,a.jsxDEV)(`div`,{className:`flex items-center space-x-4 p-2 bg-gray-50 dark:bg-gray-800 rounded`,children:[(0,a.jsxDEV)(`code`,{className:`text-sm`,children:[`px2num(`,e,`)`]},void 0,!0,{fileName:s,lineNumber:31,columnNumber:25},this),(0,a.jsxDEV)(`span`,{children:`→`},void 0,!1,{fileName:s,lineNumber:32,columnNumber:25},this),(0,a.jsxDEV)(`code`,{className:`text-sm font-mono`,children:t(e)},void 0,!1,{fileName:s,lineNumber:33,columnNumber:25},this),(0,a.jsxDEV)(`span`,{className:`text-gray-500 text-sm`,children:[`(`,r?`${r}, `:``,`expected: `,n,`)`]},void 0,!0,{fileName:s,lineNumber:34,columnNumber:25},this)]},`${i}-${e}`,!0,{fileName:s,lineNumber:30,columnNumber:20},this))},void 0,!1,{fileName:s,lineNumber:25,columnNumber:13},this)]},void 0,!0,{fileName:s,lineNumber:23,columnNumber:10},this)}var a,o,s,c,l,u,d,f,p,m,h,g,_;function v(){return(v=e((()=>{n(),a=r(),{expect:o}=__STORYBOOK_MODULE_TEST__,s=`/home/runner/work/just-web-foundation/just-web-foundation/libs/css/src/convertors/px_2_num.stories.tsx`,c={title:`convertors/px2num`,tags:[`version:0.7`],parameters:{layout:`centered`}},l={args:{title:`Basic Usage (Number Input)`,testcases:[{input:16,expected:16},{input:32,expected:32},{input:8,expected:8},{input:24,expected:24}]},render:i,play:async({args:{testcases:e}})=>{for(let n of e)await o(t(n.input)).toBe(n.expected)}},u={args:{title:`String Input`,testcases:[{input:`16px`,expected:16},{input:`32px`,expected:32},{input:`24`,expected:24},{input:`8.5px`,expected:8.5}]},render:i,play:async({args:{testcases:e}})=>{for(let n of e)await o(t(n.input)).toBe(n.expected)}},d={args:{title:`Decimal Values`,testcases:[{input:`12.5px`,expected:12.5},{input:`0.5px`,expected:.5},{input:`1.75px`,expected:1.75},{input:`100.25px`,expected:100.25}]},render:i,play:async({args:{testcases:e}})=>{for(let n of e)await o(t(n.input)).toBe(n.expected)}},f={args:{title:`Edge Cases`,testcases:[{input:`0px`,expected:0},{input:0,expected:0},{input:`1px`,expected:1},{input:1,expected:1},{input:`1000px`,expected:1e3},{input:1e3,expected:1e3}]},render:i,play:async({args:{testcases:e}})=>{for(let n of e)await o(t(n.input)).toBe(n.expected)}},p={args:{title:`Mixed Input Types`,testcases:[{input:16,description:`Number input`,expected:16},{input:`16px`,description:`String with px suffix`,expected:16},{input:`16`,description:`String without px suffix`,expected:16},{input:32.5,description:`Decimal number`,expected:32.5},{input:`32.5px`,description:`Decimal string with px`,expected:32.5}]},render:i,play:async({args:{testcases:e}})=>{for(let n of e)await o(t(n.input)).toBe(n.expected)}},m={render(){return(0,a.jsxDEV)(`div`,{className:`space-y-4`,children:[(0,a.jsxDEV)(`h3`,{className:`text-lg font-semibold`,children:`Validation & Edge Cases`},void 0,!1,{fileName:s,lineNumber:236,columnNumber:17},this),(0,a.jsxDEV)(`div`,{className:`space-y-2`,children:[{input:``,expected:`NaN`,description:`Empty string`},{input:`px`,expected:`NaN`,description:`Only px suffix`},{input:`abc`,expected:`NaN`,description:`Non-numeric string`},{input:`abcpx`,expected:`NaN`,description:`Non-numeric with px`},{input:`16pxpx`,expected:16,description:`Double px suffix`},{input:`16.5.5px`,expected:16.5,description:`Invalid decimal format`},{input:` 16px `,expected:16,description:`Whitespace around value`},{input:`16PX`,expected:16,description:`Uppercase PX`},{input:`16Px`,expected:16,description:`Mixed case Px`}].map(({input:e,expected:n,description:r})=>{let i=t(e),o=!Number.isNaN(i)&&i===Number(n);return(0,a.jsxDEV)(`div`,{className:`flex items-center space-x-4 p-2 rounded ${o?`bg-green-50 dark:bg-green-900/20`:`bg-red-50 dark:bg-red-900/20`}`,children:[(0,a.jsxDEV)(`code`,{className:`text-sm`,children:[`px2num('`,e,`')`]},void 0,!0,{fileName:s,lineNumber:246,columnNumber:33},this),(0,a.jsxDEV)(`span`,{children:`→`},void 0,!1,{fileName:s,lineNumber:247,columnNumber:33},this),(0,a.jsxDEV)(`code`,{className:`text-sm font-mono`,children:Number.isNaN(i)?`NaN`:i},void 0,!1,{fileName:s,lineNumber:248,columnNumber:33},this),(0,a.jsxDEV)(`span`,{className:`text-sm ${o?`text-green-600 dark:text-green-400`:`text-red-600 dark:text-red-400`}`,children:[`(`,r,`)`]},void 0,!0,{fileName:s,lineNumber:249,columnNumber:33},this),!o&&(void 0)(`span`,{className:`text-xs text-red-500 dark:text-red-400`,children:[`Expected: `,n]},void 0,!0,{fileName:s,lineNumber:252,columnNumber:46},this)]},e,!0,{fileName:s,lineNumber:245,columnNumber:18},this)})},void 0,!1,{fileName:s,lineNumber:237,columnNumber:17},this)]},void 0,!0,{fileName:s,lineNumber:235,columnNumber:12},this)}},h={render(){return(0,a.jsxDEV)(`div`,{className:`space-y-4`,children:[(0,a.jsxDEV)(`h3`,{className:`text-lg font-semibold`,children:`Type Validation`},void 0,!1,{fileName:s,lineNumber:286,columnNumber:17},this),(0,a.jsxDEV)(`div`,{className:`space-y-2`,children:[{input:null,description:`null value`},{input:void 0,description:`undefined value`},{input:!0,description:`boolean true`},{input:!1,description:`boolean false`},{input:[],description:`empty array`},{input:{},description:`empty object`},{input:()=>{},description:`function`}].map(({input:e,description:n})=>{let r,i=null;try{r=t(e)}catch(e){i=e instanceof Error?e.message:String(e),r=NaN}let o=i==null?r===null?`null`:r===void 0?`undefined`:Number.isNaN(r)?`NaN`:String(r):`Error: ${i}`;return(0,a.jsxDEV)(`div`,{className:`flex items-center space-x-4 p-2 bg-yellow-50 dark:bg-yellow-900/20 rounded`,children:[(0,a.jsxDEV)(`code`,{className:`text-sm`,children:[`px2num(`,Array.isArray(e)?`[]`:String(e),`)`]},void 0,!0,{fileName:s,lineNumber:302,columnNumber:33},this),(0,a.jsxDEV)(`span`,{children:`→`},void 0,!1,{fileName:s,lineNumber:305,columnNumber:33},this),i?(0,a.jsxDEV)(`code`,{className:`text-sm font-mono text-red-600 dark:text-red-400`,children:[`Error: `,i]},void 0,!0,{fileName:s,lineNumber:306,columnNumber:42},this):(0,a.jsxDEV)(`code`,{className:`text-sm font-mono`,children:o},void 0,!1,{fileName:s,lineNumber:308,columnNumber:47},this),(0,a.jsxDEV)(`span`,{className:`text-sm text-yellow-600 dark:text-yellow-400`,children:[`(`,n,`)`]},void 0,!0,{fileName:s,lineNumber:309,columnNumber:33},this)]},n,!0,{fileName:s,lineNumber:301,columnNumber:18},this)})},void 0,!1,{fileName:s,lineNumber:287,columnNumber:17},this)]},void 0,!0,{fileName:s,lineNumber:285,columnNumber:12},this)},play:async()=>{await o(t(null)).toBe(null),await o(t(void 0)).toBe(void 0)}},g={render(){return(0,a.jsxDEV)(`div`,{className:`space-y-4`,children:[(0,a.jsxDEV)(`h3`,{className:`text-lg font-semibold`,children:`Performance Test`},void 0,!1,{fileName:s,lineNumber:335,columnNumber:17},this),(0,a.jsxDEV)(`div`,{className:`space-y-2`,children:[{count:1e3,input:`16px`},{count:1e3,input:16},{count:1e3,input:`123.456px`}].map(({count:e,input:n})=>{let r=performance.now();for(let r=0;r<e;r++)t(n);let i=performance.now()-r;return(0,a.jsxDEV)(`div`,{className:`flex items-center space-x-4 p-2 bg-blue-50 dark:bg-blue-900/20 rounded`,children:[(0,a.jsxDEV)(`code`,{className:`text-sm`,children:[e,` × px2num(`,typeof n==`string`?`'${n}'`:n,`)`]},void 0,!0,{fileName:s,lineNumber:348,columnNumber:33},this),(0,a.jsxDEV)(`span`,{children:`→`},void 0,!1,{fileName:s,lineNumber:351,columnNumber:33},this),(0,a.jsxDEV)(`code`,{className:`text-sm font-mono`,children:[i.toFixed(2),`ms`]},void 0,!0,{fileName:s,lineNumber:352,columnNumber:33},this),(0,a.jsxDEV)(`span`,{className:`text-sm text-blue-600 dark:text-blue-400`,children:[`(`,(i/e).toFixed(4),`ms per call)`]},void 0,!0,{fileName:s,lineNumber:353,columnNumber:33},this)]},`${n}-${e}`,!0,{fileName:s,lineNumber:347,columnNumber:18},this)})},void 0,!1,{fileName:s,lineNumber:336,columnNumber:17},this)]},void 0,!0,{fileName:s,lineNumber:334,columnNumber:12},this)}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
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
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
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
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
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
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
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
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
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
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
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
                                {!isValid && <span className="text-xs text-red-500 dark:text-red-400">
                                        Expected: {expected}
                                    </span>}
                            </div>;
        })}
                </div>
            </div>;
  }
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
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
          let result: number | null | undefined;
          let error: string | null = null;
          try {
            result = px2num(input as any);
          } catch (err) {
            error = err instanceof Error ? err.message : String(err);
            result = Number.NaN;
          }
          const display = error != null ? \`Error: \${error}\` : result === null ? 'null' : result === undefined ? 'undefined' : Number.isNaN(result) ? 'NaN' : String(result);
          return <div key={description} className="flex items-center space-x-4 p-2 bg-yellow-50 dark:bg-yellow-900/20 rounded">
                                <code className="text-sm">
                                    px2num({Array.isArray(input) ? '[]' : String(input)})
                                </code>
                                <span>→</span>
                                {error ? <code className="text-sm font-mono text-red-600 dark:text-red-400">
                                        Error: {error}
                                    </code> : <code className="text-sm font-mono">{display}</code>}
                                <span className="text-sm text-yellow-600 dark:text-yellow-400">
                                    ({description})
                                </span>
                            </div>;
        })}
                </div>
            </div>;
  },
  play: async () => {
    await expect(px2num(null)).toBe(null);
    await expect(px2num(undefined)).toBe(undefined);
  }
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
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
}`,...g.parameters?.docs?.source}}},_=[`BasicUsage`,`StringInput`,`DecimalValues`,`EdgeCases`,`MixedInputs`,`Validation`,`TypeValidation`,`PerformanceTest`]})))()}v();export{l as BasicUsage,d as DecimalValues,f as EdgeCases,p as MixedInputs,g as PerformanceTest,u as StringInput,h as TypeValidation,m as Validation,_ as __namedExportsOrder,c as default};