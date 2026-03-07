import{j as e}from"./jsx-dev-runtime-DF-ftqEI.js";import{p as o}from"./px_2_num-Cg1UUstB.js";const{expect:u}=__STORYBOOK_MODULE_TEST__,j={title:"convertors/px2num",tags:["version:0.7"],parameters:{layout:"centered"}};function p({title:t,testcases:s}){return e.jsxDEV("div",{className:"space-y-4",children:[e.jsxDEV("h3",{className:"text-lg font-semibold",children:t},void 0,!1,{fileName:"/home/runner/work/just-web-foundation/just-web-foundation/libs/css/src/convertors/px_2_num.stories.tsx",lineNumber:24,columnNumber:13},this),e.jsxDEV("div",{className:"space-y-2",children:s.map(({input:n,expected:i,description:r},a)=>e.jsxDEV("div",{className:"flex items-center space-x-4 p-2 bg-gray-50 dark:bg-gray-800 rounded",children:[e.jsxDEV("code",{className:"text-sm",children:["px2num(",n,")"]},void 0,!0,{fileName:"/home/runner/work/just-web-foundation/just-web-foundation/libs/css/src/convertors/px_2_num.stories.tsx",lineNumber:31,columnNumber:25},this),e.jsxDEV("span",{children:"→"},void 0,!1,{fileName:"/home/runner/work/just-web-foundation/just-web-foundation/libs/css/src/convertors/px_2_num.stories.tsx",lineNumber:32,columnNumber:25},this),e.jsxDEV("code",{className:"text-sm font-mono",children:o(n)},void 0,!1,{fileName:"/home/runner/work/just-web-foundation/just-web-foundation/libs/css/src/convertors/px_2_num.stories.tsx",lineNumber:33,columnNumber:25},this),e.jsxDEV("span",{className:"text-gray-500 text-sm",children:["(",r?`${r}, `:"","expected: ",i,")"]},void 0,!0,{fileName:"/home/runner/work/just-web-foundation/just-web-foundation/libs/css/src/convertors/px_2_num.stories.tsx",lineNumber:34,columnNumber:25},this)]},`${a}-${n}`,!0,{fileName:"/home/runner/work/just-web-foundation/just-web-foundation/libs/css/src/convertors/px_2_num.stories.tsx",lineNumber:30,columnNumber:20},this))},void 0,!1,{fileName:"/home/runner/work/just-web-foundation/just-web-foundation/libs/css/src/convertors/px_2_num.stories.tsx",lineNumber:25,columnNumber:13},this)]},void 0,!0,{fileName:"/home/runner/work/just-web-foundation/just-web-foundation/libs/css/src/convertors/px_2_num.stories.tsx",lineNumber:23,columnNumber:10},this)}const d={args:{title:"Basic Usage (Number Input)",testcases:[{input:16,expected:16},{input:32,expected:32},{input:8,expected:8},{input:24,expected:24}]},render:p,play:async({args:{testcases:t}})=>{for(const s of t)await u(o(s.input)).toBe(s.expected)}},l={args:{title:"String Input",testcases:[{input:"16px",expected:16},{input:"32px",expected:32},{input:"24",expected:24},{input:"8.5px",expected:8.5}]},render:p,play:async({args:{testcases:t}})=>{for(const s of t)await u(o(s.input)).toBe(s.expected)}},m={args:{title:"Decimal Values",testcases:[{input:"12.5px",expected:12.5},{input:"0.5px",expected:.5},{input:"1.75px",expected:1.75},{input:"100.25px",expected:100.25}]},render:p,play:async({args:{testcases:t}})=>{for(const s of t)await u(o(s.input)).toBe(s.expected)}},x={args:{title:"Edge Cases",testcases:[{input:"0px",expected:0},{input:0,expected:0},{input:"1px",expected:1},{input:1,expected:1},{input:"1000px",expected:1e3},{input:1e3,expected:1e3}]},render:p,play:async({args:{testcases:t}})=>{for(const s of t)await u(o(s.input)).toBe(s.expected)}},b={args:{title:"Mixed Input Types",testcases:[{input:16,description:"Number input",expected:16},{input:"16px",description:"String with px suffix",expected:16},{input:"16",description:"String without px suffix",expected:16},{input:32.5,description:"Decimal number",expected:32.5},{input:"32.5px",description:"Decimal string with px",expected:32.5}]},render:p,play:async({args:{testcases:t}})=>{for(const s of t)await u(o(s.input)).toBe(s.expected)}},N={render(){const t=[{input:"",expected:"NaN",description:"Empty string"},{input:"px",expected:"NaN",description:"Only px suffix"},{input:"abc",expected:"NaN",description:"Non-numeric string"},{input:"abcpx",expected:"NaN",description:"Non-numeric with px"},{input:"16pxpx",expected:16,description:"Double px suffix"},{input:"16.5.5px",expected:16.5,description:"Invalid decimal format"},{input:" 16px ",expected:16,description:"Whitespace around value"},{input:"16PX",expected:16,description:"Uppercase PX"},{input:"16Px",expected:16,description:"Mixed case Px"}];return e.jsxDEV("div",{className:"space-y-4",children:[e.jsxDEV("h3",{className:"text-lg font-semibold",children:"Validation & Edge Cases"},void 0,!1,{fileName:"/home/runner/work/just-web-foundation/just-web-foundation/libs/css/src/convertors/px_2_num.stories.tsx",lineNumber:236,columnNumber:17},this),e.jsxDEV("div",{className:"space-y-2",children:t.map(({input:s,expected:n,description:i})=>{const r=o(s),a=!Number.isNaN(r)&&r===Number(n);return e.jsxDEV("div",{className:`flex items-center space-x-4 p-2 rounded ${a?"bg-green-50 dark:bg-green-900/20":"bg-red-50 dark:bg-red-900/20"}`,children:[e.jsxDEV("code",{className:"text-sm",children:["px2num('",s,"')"]},void 0,!0,{fileName:"/home/runner/work/just-web-foundation/just-web-foundation/libs/css/src/convertors/px_2_num.stories.tsx",lineNumber:246,columnNumber:33},this),e.jsxDEV("span",{children:"→"},void 0,!1,{fileName:"/home/runner/work/just-web-foundation/just-web-foundation/libs/css/src/convertors/px_2_num.stories.tsx",lineNumber:247,columnNumber:33},this),e.jsxDEV("code",{className:"text-sm font-mono",children:Number.isNaN(r)?"NaN":r},void 0,!1,{fileName:"/home/runner/work/just-web-foundation/just-web-foundation/libs/css/src/convertors/px_2_num.stories.tsx",lineNumber:248,columnNumber:33},this),e.jsxDEV("span",{className:`text-sm ${a?"text-green-600 dark:text-green-400":"text-red-600 dark:text-red-400"}`,children:["(",i,")"]},void 0,!0,{fileName:"/home/runner/work/just-web-foundation/just-web-foundation/libs/css/src/convertors/px_2_num.stories.tsx",lineNumber:249,columnNumber:33},this),!a&&e.jsxDEV("span",{className:"text-xs text-red-500 dark:text-red-400",children:["Expected: ",n]},void 0,!0,{fileName:"/home/runner/work/just-web-foundation/just-web-foundation/libs/css/src/convertors/px_2_num.stories.tsx",lineNumber:252,columnNumber:46},this)]},s,!0,{fileName:"/home/runner/work/just-web-foundation/just-web-foundation/libs/css/src/convertors/px_2_num.stories.tsx",lineNumber:245,columnNumber:18},this)})},void 0,!1,{fileName:"/home/runner/work/just-web-foundation/just-web-foundation/libs/css/src/convertors/px_2_num.stories.tsx",lineNumber:237,columnNumber:17},this)]},void 0,!0,{fileName:"/home/runner/work/just-web-foundation/just-web-foundation/libs/css/src/convertors/px_2_num.stories.tsx",lineNumber:235,columnNumber:12},this)}},f={render(){const t=[{input:null,description:"null value"},{input:void 0,description:"undefined value"},{input:!0,description:"boolean true"},{input:!1,description:"boolean false"},{input:[],description:"empty array"},{input:{},description:"empty object"},{input:()=>{},description:"function"}];return e.jsxDEV("div",{className:"space-y-4",children:[e.jsxDEV("h3",{className:"text-lg font-semibold",children:"Type Validation"},void 0,!1,{fileName:"/home/runner/work/just-web-foundation/just-web-foundation/libs/css/src/convertors/px_2_num.stories.tsx",lineNumber:286,columnNumber:17},this),e.jsxDEV("div",{className:"space-y-2",children:t.map(({input:s,description:n})=>{let i,r=null;try{i=o(s)}catch(c){r=c instanceof Error?c.message:String(c),i=Number.NaN}const a=r!=null?`Error: ${r}`:i===null?"null":i===void 0?"undefined":Number.isNaN(i)?"NaN":String(i);return e.jsxDEV("div",{className:"flex items-center space-x-4 p-2 bg-yellow-50 dark:bg-yellow-900/20 rounded",children:[e.jsxDEV("code",{className:"text-sm",children:["px2num(",Array.isArray(s)?"[]":String(s),")"]},void 0,!0,{fileName:"/home/runner/work/just-web-foundation/just-web-foundation/libs/css/src/convertors/px_2_num.stories.tsx",lineNumber:302,columnNumber:33},this),e.jsxDEV("span",{children:"→"},void 0,!1,{fileName:"/home/runner/work/just-web-foundation/just-web-foundation/libs/css/src/convertors/px_2_num.stories.tsx",lineNumber:305,columnNumber:33},this),r?e.jsxDEV("code",{className:"text-sm font-mono text-red-600 dark:text-red-400",children:["Error: ",r]},void 0,!0,{fileName:"/home/runner/work/just-web-foundation/just-web-foundation/libs/css/src/convertors/px_2_num.stories.tsx",lineNumber:306,columnNumber:42},this):e.jsxDEV("code",{className:"text-sm font-mono",children:a},void 0,!1,{fileName:"/home/runner/work/just-web-foundation/just-web-foundation/libs/css/src/convertors/px_2_num.stories.tsx",lineNumber:308,columnNumber:47},this),e.jsxDEV("span",{className:"text-sm text-yellow-600 dark:text-yellow-400",children:["(",n,")"]},void 0,!0,{fileName:"/home/runner/work/just-web-foundation/just-web-foundation/libs/css/src/convertors/px_2_num.stories.tsx",lineNumber:309,columnNumber:33},this)]},n,!0,{fileName:"/home/runner/work/just-web-foundation/just-web-foundation/libs/css/src/convertors/px_2_num.stories.tsx",lineNumber:301,columnNumber:18},this)})},void 0,!1,{fileName:"/home/runner/work/just-web-foundation/just-web-foundation/libs/css/src/convertors/px_2_num.stories.tsx",lineNumber:287,columnNumber:17},this)]},void 0,!0,{fileName:"/home/runner/work/just-web-foundation/just-web-foundation/libs/css/src/convertors/px_2_num.stories.tsx",lineNumber:285,columnNumber:12},this)},play:async()=>{await u(o(null)).toBe(null),await u(o(void 0)).toBe(void 0)}},w={render(){const t=[{count:1e3,input:"16px"},{count:1e3,input:16},{count:1e3,input:"123.456px"}];return e.jsxDEV("div",{className:"space-y-4",children:[e.jsxDEV("h3",{className:"text-lg font-semibold",children:"Performance Test"},void 0,!1,{fileName:"/home/runner/work/just-web-foundation/just-web-foundation/libs/css/src/convertors/px_2_num.stories.tsx",lineNumber:335,columnNumber:17},this),e.jsxDEV("div",{className:"space-y-2",children:t.map(({count:s,input:n})=>{const i=performance.now();for(let c=0;c<s;c++)o(n);const a=performance.now()-i;return e.jsxDEV("div",{className:"flex items-center space-x-4 p-2 bg-blue-50 dark:bg-blue-900/20 rounded",children:[e.jsxDEV("code",{className:"text-sm",children:[s," × px2num(",typeof n=="string"?`'${n}'`:n,")"]},void 0,!0,{fileName:"/home/runner/work/just-web-foundation/just-web-foundation/libs/css/src/convertors/px_2_num.stories.tsx",lineNumber:348,columnNumber:33},this),e.jsxDEV("span",{children:"→"},void 0,!1,{fileName:"/home/runner/work/just-web-foundation/just-web-foundation/libs/css/src/convertors/px_2_num.stories.tsx",lineNumber:351,columnNumber:33},this),e.jsxDEV("code",{className:"text-sm font-mono",children:[a.toFixed(2),"ms"]},void 0,!0,{fileName:"/home/runner/work/just-web-foundation/just-web-foundation/libs/css/src/convertors/px_2_num.stories.tsx",lineNumber:352,columnNumber:33},this),e.jsxDEV("span",{className:"text-sm text-blue-600 dark:text-blue-400",children:["(",(a/s).toFixed(4),"ms per call)"]},void 0,!0,{fileName:"/home/runner/work/just-web-foundation/just-web-foundation/libs/css/src/convertors/px_2_num.stories.tsx",lineNumber:353,columnNumber:33},this)]},`${n}-${s}`,!0,{fileName:"/home/runner/work/just-web-foundation/just-web-foundation/libs/css/src/convertors/px_2_num.stories.tsx",lineNumber:347,columnNumber:18},this)})},void 0,!1,{fileName:"/home/runner/work/just-web-foundation/just-web-foundation/libs/css/src/convertors/px_2_num.stories.tsx",lineNumber:336,columnNumber:17},this)]},void 0,!0,{fileName:"/home/runner/work/just-web-foundation/just-web-foundation/libs/css/src/convertors/px_2_num.stories.tsx",lineNumber:334,columnNumber:12},this)}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
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
}`,...d.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
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
}`,...l.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
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
}`,...m.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
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
}`,...x.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
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
}`,...b.parameters?.docs?.source}}};N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
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
}`,...N.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
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
}`,...f.parameters?.docs?.source}}};w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
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
}`,...w.parameters?.docs?.source}}};const g=["BasicUsage","StringInput","DecimalValues","EdgeCases","MixedInputs","Validation","TypeValidation","PerformanceTest"];export{d as BasicUsage,m as DecimalValues,x as EdgeCases,b as MixedInputs,w as PerformanceTest,l as StringInput,f as TypeValidation,N as Validation,g as __namedExportsOrder,j as default};
