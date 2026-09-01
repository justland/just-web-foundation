import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./react-B6tGW3fj.js";import{a as n}from"./chunk-W22LQPXL-BSpKiHdn.js";import{a as r,i,l as a,s as o}from"./iframe-DFQ_z_Nq.js";function s(e,t,n){for(let[r,i]of Object.entries(n)){let n=Array.isArray(i)?[...i]:[i];r===t?e.classList.add(...n):e.classList.remove(...n)}}function c(e,t,n){let r=Object.values(n).flatMap(e=>Array.isArray(e)?[...e]:[e]),i=e.className.trim(),a=(i?i.split(/\s+/):[]).filter(e=>!r.includes(e)),o=t in n?Array.isArray(n[t])?[...n[t]]:[n[t]]:[];e.className=[...a,...o].filter(Boolean).join(` `)}var l,u,d,f,p,m,h,g;function _(){return(_=e((()=>{o(),l=t(),u=n(),d={title:`class-name/className vs classList`,tags:[`unit`,`perf`],parameters:r({description:{component:`Performance comparison: toggling element classes via classList (add/remove each) vs rebuilding className from an array.`}}),render:()=>(0,u.jsx)(u.Fragment,{})},f={light:[`light`,`text-black`,`bg-white`],dark:[`dark`,`text-white`,`bg-black`]},p={light:[`light`,`text-black`,`bg-white`,`border-gray-200`,`shadow-sm`,`rounded-lg`,`p-4`,`m-2`,`font-sans`,`antialiased`],dark:[`dark`,`text-white`,`bg-black`,`border-gray-700`,`shadow-lg`,`rounded-xl`,`p-6`,`m-4`,`font-sans`,`antialiased`],accent:[`accent`,`text-cyan-100`,`bg-cyan-900`,`border-cyan-600`,`shadow-md`,`rounded-md`,`p-3`,`m-1`,`font-medium`,`subpixel-antialiased`],neutral:[`neutral`,`text-gray-800`,`bg-gray-100`,`border-gray-300`,`shadow`,`rounded`,`p-2`,`m-0`,`font-normal`,`antialiased`],warm:[`warm`,`text-amber-900`,`bg-amber-50`,`border-amber-200`,`shadow-inner`,`rounded-2xl`,`p-5`,`m-3`,`font-semibold`,`antialiased`]},m=1e4,h={name:`Performance test`,tags:[`unit`,`!test`],parameters:r({description:{story:`Compare classList (add/remove per class) vs className (array rebuild). Runs two benchmarks: 2 themes × 3 classes and 5 themes × 10 classes. Fewer DOM writes with className tend to scale better with more theme classes.`}}),decorators:[a({content:(0,u.jsxs)(u.Fragment,{children:[(0,u.jsxs)(`p`,{children:[`Compare `,(0,u.jsx)(`code`,{children:`classList`}),` (add/remove per class) vs `,(0,u.jsx)(`code`,{children:`className`}),` (array rebuild).`]}),(0,u.jsx)(`p`,{children:`Runs two benchmarks: 2 themes × 3 classes and 5 themes × 10 classes.`}),(0,u.jsxs)(`p`,{children:[`Fewer DOM writes with `,(0,u.jsx)(`code`,{children:`className`}),` tend to scale better with more theme classes.`]})]})})],render:function(){let[e,t]=(0,l.useState)({small:null,long:null});return(0,l.useEffect)(()=>{let e=document.createElement(`div`);e.className=`base existing`,document.body.appendChild(e);let n=Object.keys(f),r=Object.keys(p),i=performance.now();for(let t=0;t<m;t++)s(e,n[t%n.length]??n[0],f);let a=performance.now()-i,o=performance.now();for(let t=0;t<m;t++)c(e,n[t%n.length]??n[0],f);let l=performance.now()-o;t(e=>({...e,small:{classListMs:a,classNameMs:l}}));let u=performance.now();for(let t=0;t<m;t++)s(e,r[t%r.length]??r[0],p);let d=performance.now()-u,h=performance.now();for(let t=0;t<m;t++)c(e,r[t%r.length]??r[0],p);let g=performance.now()-h;document.body.removeChild(e),t(e=>({...e,long:{classListMs:d,classNameMs:g}}))},[]),(0,u.jsxs)(`div`,{className:`flex flex-col gap-4`,children:[(0,u.jsx)(i,{title:`2 themes × 3 classes each`,appearance:`output`,children:(0,u.jsx)(`div`,{className:`text-sm`,children:e.small?(0,u.jsx)(`pre`,{children:`${m.toLocaleString()} theme toggles:\n  classList (add/remove each): ${e.small.classListMs.toFixed(2)} ms\n  className (array rebuild):   ${e.small.classNameMs.toFixed(2)} ms`}):(0,u.jsx)(`span`,{children:`Running benchmark…`})})}),(0,u.jsx)(i,{title:`5 themes × 10 classes each`,appearance:`output`,children:(0,u.jsx)(`div`,{className:`text-sm`,children:e.long?(0,u.jsx)(`pre`,{children:`${m.toLocaleString()} theme toggles:\n  classList (add/remove each): ${e.long.classListMs.toFixed(2)} ms\n  className (array rebuild):   ${e.long.classNameMs.toFixed(2)} ms`}):(0,u.jsx)(`span`,{children:`Running benchmark…`})})})]})}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  name: 'Performance test',
  tags: ['unit', '!test'],
  parameters: defineDocsParam({
    description: {
      story: 'Compare classList (add/remove per class) vs className (array rebuild). Runs two benchmarks: 2 themes × 3 classes and 5 themes × 10 classes. Fewer DOM writes with className tend to scale better with more theme classes.'
    }
  }),
  decorators: [withStoryCard({
    content: <>
                    <p>
                        Compare <code>classList</code> (add/remove per class) vs <code>className</code> (array
                        rebuild).
                    </p>
                    <p>Runs two benchmarks: 2 themes × 3 classes and 5 themes × 10 classes.</p>
                    <p>
                        Fewer DOM writes with <code>className</code> tend to scale better with more theme
                        classes.
                    </p>
                </>
  })],
  render: function PerformanceTestRender() {
    const [result, setResult] = useState<{
      small: BenchmarkResult | null;
      long: BenchmarkResult | null;
    }>({
      small: null,
      long: null
    });
    useEffect(() => {
      const el = document.createElement('div');
      el.className = 'base existing';
      document.body.appendChild(el);
      const themeKeysSmall = Object.keys(themes) as (keyof typeof themes)[];
      const themeKeysLong = Object.keys(themesLong);

      // Small: 2 themes × 3 classes
      const classListStartSmall = performance.now();
      for (let i = 0; i < PERFORMANCE_ITERATIONS; i++) {
        const theme = (themeKeysSmall[i % themeKeysSmall.length] ?? themeKeysSmall[0]) as string;
        applyThemeClassList(el, theme, themes);
      }
      const classListMsSmall = performance.now() - classListStartSmall;
      const classNameStartSmall = performance.now();
      for (let i = 0; i < PERFORMANCE_ITERATIONS; i++) {
        const theme = (themeKeysSmall[i % themeKeysSmall.length] ?? themeKeysSmall[0]) as string;
        applyThemeClassName(el, theme, themes);
      }
      const classNameMsSmall = performance.now() - classNameStartSmall;
      setResult(r => ({
        ...r,
        small: {
          classListMs: classListMsSmall,
          classNameMs: classNameMsSmall
        }
      }));

      // Long: 5 themes × 10 classes
      const classListStartLong = performance.now();
      for (let i = 0; i < PERFORMANCE_ITERATIONS; i++) {
        const theme = (themeKeysLong[i % themeKeysLong.length] ?? themeKeysLong[0]) as string;
        applyThemeClassList(el, theme, themesLong);
      }
      const classListMsLong = performance.now() - classListStartLong;
      const classNameStartLong = performance.now();
      for (let i = 0; i < PERFORMANCE_ITERATIONS; i++) {
        const theme = (themeKeysLong[i % themeKeysLong.length] ?? themeKeysLong[0]) as string;
        applyThemeClassName(el, theme, themesLong);
      }
      const classNameMsLong = performance.now() - classNameStartLong;
      document.body.removeChild(el);
      setResult(r => ({
        ...r,
        long: {
          classListMs: classListMsLong,
          classNameMs: classNameMsLong
        }
      }));
    }, []);
    return <div className="flex flex-col gap-4">
                <StoryCard title="2 themes × 3 classes each" appearance="output">
                    <div className="text-sm">
                        {result.small ? <pre>
                                {\`\${PERFORMANCE_ITERATIONS.toLocaleString()} theme toggles:\\n  classList (add/remove each): \${result.small.classListMs.toFixed(2)} ms\\n  className (array rebuild):   \${result.small.classNameMs.toFixed(2)} ms\`}
                            </pre> : <span>Running benchmark…</span>}
                    </div>
                </StoryCard>
                <StoryCard title="5 themes × 10 classes each" appearance="output">
                    <div className="text-sm">
                        {result.long ? <pre>
                                {\`\${PERFORMANCE_ITERATIONS.toLocaleString()} theme toggles:\\n  classList (add/remove each): \${result.long.classListMs.toFixed(2)} ms\\n  className (array rebuild):   \${result.long.classNameMs.toFixed(2)} ms\`}
                            </pre> : <span>Running benchmark…</span>}
                    </div>
                </StoryCard>
            </div>;
  }
}`,...h.parameters?.docs?.source}}},g=[`PerformanceTest`]})))()}_();export{h as PerformanceTest,g as __namedExportsOrder,d as default};