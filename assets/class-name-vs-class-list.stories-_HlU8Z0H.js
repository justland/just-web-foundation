import{j as s,d as S,w as C,r as y,S as L}from"./iframe-DMM-er1z.js";import"./preload-helper-PPVm8Dsz.js";function f(m,a,r){for(const[l,t]of Object.entries(r)){const n=Array.isArray(t)?[...t]:[t];l===a?m.classList.add(...n):m.classList.remove(...n)}}function N(m,a,r){const l=Object.values(r).flatMap(c=>Array.isArray(c)?[...c]:[c]),t=m.className.trim(),h=(t?t.split(/\s+/):[]).filter(c=>!l.includes(c)),p=a in r?Array.isArray(r[a])?[...r[a]]:[r[a]]:[];m.className=[...h,...p].filter(Boolean).join(" ")}const j={title:"class-name/className vs classList",tags:["unit","perf"],parameters:S({description:{component:"Performance comparison: toggling element classes via classList (add/remove each) vs rebuilding className from an array."}}),render:()=>s.jsx(s.Fragment,{})},g={light:["light","text-black","bg-white"],dark:["dark","text-white","bg-black"]},u={light:["light","text-black","bg-white","border-gray-200","shadow-sm","rounded-lg","p-4","m-2","font-sans","antialiased"],dark:["dark","text-white","bg-black","border-gray-700","shadow-lg","rounded-xl","p-6","m-4","font-sans","antialiased"],accent:["accent","text-cyan-100","bg-cyan-900","border-cyan-600","shadow-md","rounded-md","p-3","m-1","font-medium","subpixel-antialiased"],neutral:["neutral","text-gray-800","bg-gray-100","border-gray-300","shadow","rounded","p-2","m-0","font-normal","antialiased"],warm:["warm","text-amber-900","bg-amber-50","border-amber-200","shadow-inner","rounded-2xl","p-5","m-3","font-semibold","antialiased"]},i=1e4,d={name:"Performance test",tags:["unit","!test"],parameters:S({description:{story:"Compare classList (add/remove per class) vs className (array rebuild). Runs two benchmarks: 2 themes × 3 classes and 5 themes × 10 classes. Fewer DOM writes with className tend to scale better with more theme classes."}}),decorators:[C({content:s.jsxs(s.Fragment,{children:[s.jsxs("p",{children:["Compare ",s.jsx("code",{children:"classList"})," (add/remove per class) vs ",s.jsx("code",{children:"className"})," (array rebuild)."]}),s.jsx("p",{children:"Runs two benchmarks: 2 themes × 3 classes and 5 themes × 10 classes."}),s.jsxs("p",{children:["Fewer DOM writes with ",s.jsx("code",{children:"className"})," tend to scale better with more theme classes."]})]})})],render:function(){const[a,r]=y.useState({small:null,long:null});return y.useEffect(()=>{const l=document.createElement("div");l.className="base existing",document.body.appendChild(l);const t=Object.keys(g),n=Object.keys(u),h=performance.now();for(let e=0;e<i;e++){const o=t[e%t.length]??t[0];f(l,o,g)}const p=performance.now()-h,c=performance.now();for(let e=0;e<i;e++){const o=t[e%t.length]??t[0];N(l,o,g)}const b=performance.now()-c;r(e=>({...e,small:{classListMs:p,classNameMs:b}}));const w=performance.now();for(let e=0;e<i;e++){const o=n[e%n.length]??n[0];f(l,o,u)}const x=performance.now()-w,M=performance.now();for(let e=0;e<i;e++){const o=n[e%n.length]??n[0];N(l,o,u)}const R=performance.now()-M;document.body.removeChild(l),r(e=>({...e,long:{classListMs:x,classNameMs:R}}))},[]),s.jsxs("div",{className:"flex flex-col gap-4",children:[s.jsx(L,{title:"2 themes × 3 classes each",appearance:"output",children:s.jsx("div",{className:"text-sm",children:a.small?s.jsx("pre",{children:`${i.toLocaleString()} theme toggles:
  classList (add/remove each): ${a.small.classListMs.toFixed(2)} ms
  className (array rebuild):   ${a.small.classNameMs.toFixed(2)} ms`}):s.jsx("span",{children:"Running benchmark…"})})}),s.jsx(L,{title:"5 themes × 10 classes each",appearance:"output",children:s.jsx("div",{className:"text-sm",children:a.long?s.jsx("pre",{children:`${i.toLocaleString()} theme toggles:
  classList (add/remove each): ${a.long.classListMs.toFixed(2)} ms
  className (array rebuild):   ${a.long.classNameMs.toFixed(2)} ms`}):s.jsx("span",{children:"Running benchmark…"})})})]})}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
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
}`,...d.parameters?.docs?.source}}};const T=["PerformanceTest"];export{d as PerformanceTest,T as __namedExportsOrder,j as default};
