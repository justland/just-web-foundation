import{n as e,r as t}from"./rolldown-runtime-DkW27tQK.js";import{t as n}from"./react-B6tGW3fj.js";import{a as r}from"./chunk-W22LQPXL-BSpKiHdn.js";import{i,s as a}from"./iframe-lHA9G3CN.js";import{n as o}from"./theme-entry-Cs_OPpJC.js";import{n as s,t as c}from"./class-name-theme-store-BYgnciYC.js";import{n as l,t as u}from"./button-AW1k6hjA.js";var d=t({ClassVersusColorScheme:()=>C,WithThemeStore:()=>T,__namedExportsOrder:()=>E,default:()=>b});function f(e){let t=t=>{let n=e.querySelector(`[data-swatch="${t}"]`);return n?getComputedStyle(n).backgroundColor:``};return{colorScheme:getComputedStyle(e).colorScheme,canvas:t(`canvas`),lightDark:t(`light-dark`),tailwind:t(`tailwind`)}}function p(e){let[t,n]=(0,h.useState)();return(0,h.useEffect)(()=>{let t=()=>e.current&&n(f(e.current));t();let r=new MutationObserver(t);return r.observe(document.documentElement,{attributes:!0,attributeFilter:[`class`]}),()=>r.disconnect()},[e]),t}function m(e){let t=(0,h.useRef)(null),n=p(t);return(0,g.jsxs)(`section`,{ref:t,"data-testid":e.id,className:`flex min-w-56 flex-1 flex-col gap-2 rounded border border-gray-400 bg-[color:Canvas] p-3 text-[color:CanvasText] ${e.className??``}`,children:[(0,g.jsx)(`h3`,{className:`font-semibold`,children:e.title}),(0,g.jsxs)(`div`,{className:`flex flex-wrap items-center gap-2`,children:[(0,g.jsx)(`input`,{type:`date`,"aria-label":`date`,defaultValue:`2026-10-19`}),(0,g.jsxs)(`select`,{"aria-label":`select`,children:[(0,g.jsx)(`option`,{children:`Option one`}),(0,g.jsx)(`option`,{children:`Option two`})]}),(0,g.jsx)(`input`,{type:`checkbox`,"aria-label":`checkbox`,defaultChecked:!0}),(0,g.jsx)(`input`,{type:`range`,"aria-label":`range`})]}),(0,g.jsx)(`div`,{className:`h-16 overflow-y-scroll border border-gray-400 p-1`,children:(0,g.jsx)(`div`,{className:`h-40`,children:`Native scrollbar`})}),(0,g.jsxs)(`div`,{"data-swatch":`canvas`,className:`p-1`,style:{background:`Canvas`,color:`CanvasText`},children:[`System colors: `,(0,g.jsx)(`code`,{children:`Canvas`}),` / `,(0,g.jsx)(`code`,{children:`CanvasText`})]}),(0,g.jsx)(`div`,{"data-swatch":`light-dark`,className:`p-1`,style:{background:`light-dark(rgb(255 255 255), rgb(0 0 0))`,color:`light-dark(rgb(0 0 0), rgb(255 255 255))`},children:(0,g.jsx)(`code`,{children:`light-dark()`})}),(0,g.jsxs)(`div`,{"data-swatch":`tailwind`,className:`bg-white p-1 text-black dark:bg-black dark:text-white`,children:[`Tailwind `,(0,g.jsx)(`code`,{children:`dark:`}),` variant`]}),n&&(0,g.jsxs)(`dl`,{className:`grid grid-cols-[auto_1fr] gap-x-2 text-xs`,children:[(0,g.jsx)(`dt`,{children:`color-scheme`}),(0,g.jsx)(`dd`,{"data-testid":`${e.id}-color-scheme`,children:n.colorScheme}),(0,g.jsx)(`dt`,{children:`Canvas`}),(0,g.jsx)(`dd`,{children:n.canvas}),(0,g.jsx)(`dt`,{children:`light-dark()`}),(0,g.jsx)(`dd`,{children:n.lightDark}),(0,g.jsx)(`dt`,{children:`dark: utility`}),(0,g.jsx)(`dd`,{children:n.tailwind})]})]})}var h,g,_,v,y,b,x,S,C,w,T,E;function D(){return(D=e((()=>{s(),a(),h=n(),l(),g=r(),{expect:_,userEvent:v,waitFor:y}=__STORYBOOK_MODULE_TEST__,b={title:`color-scheme/Dark mode`},x=`rgb(255, 255, 255)`,S=`rgb(0, 0, 0)`,C={name:`dark class vs color-scheme`,tags:[`use-case`],render:()=>(0,g.jsxs)(`div`,{className:`flex flex-wrap gap-3`,children:[(0,g.jsx)(m,{id:`light`,title:`A: light`,className:`scheme-light`}),(0,g.jsx)(m,{id:`class-only`,title:(0,g.jsxs)(g.Fragment,{children:[`B: `,(0,g.jsx)(`code`,{children:`dark`}),` class, `,(0,g.jsx)(`code`,{children:`color-scheme: light`})]}),className:`dark scheme-light`}),(0,g.jsx)(m,{id:`class-and-scheme`,title:(0,g.jsxs)(g.Fragment,{children:[`C: `,(0,g.jsx)(`code`,{children:`dark`}),` class (sets `,(0,g.jsx)(`code`,{children:`color-scheme: dark`}),`)`]}),className:`dark`})]}),play:async({canvas:e})=>{let t=f(e.getByTestId(`class-only`)),n=f(e.getByTestId(`class-and-scheme`));await _(t.tailwind).toBe(S),await _(n.tailwind).toBe(S),await _(t.colorScheme).toBe(`light`),await _(t.lightDark).toBe(x),await _(n.colorScheme).toBe(`dark`),await _(n.lightDark).toBe(S),await _(n.canvas).not.toBe(t.canvas)}},w={light:`light`,dark:`dark`},T={name:`with classNameThemeStore`,tags:[`use-case`],render:()=>{let e=c(w);return(0,g.jsx)(i,{appearance:`output`,children:(0,g.jsxs)(`div`,{className:`flex flex-col gap-3`,children:[(0,g.jsxs)(`div`,{className:`flex gap-2`,children:[(0,g.jsx)(u,{onPress:()=>e.write(o(w,`light`)),children:`Light`}),(0,g.jsx)(u,{onPress:()=>e.write(o(w,`dark`)),children:`Dark`})]}),(0,g.jsx)(m,{id:`follows-html`,title:`Follows <html>`})]})})},play:async({canvas:e})=>{let t=document.documentElement,n=t.className;try{await v.click(e.getByRole(`button`,{name:`Light`}));let n=f(e.getByTestId(`follows-html`));await _(n.colorScheme).toBe(`normal`),await _(n.lightDark).toBe(x),await v.click(e.getByRole(`button`,{name:`Dark`}));let r=f(e.getByTestId(`follows-html`));await _(t.classList.contains(`dark`)).toBe(!0),await _(r.colorScheme).toBe(`dark`),await _(r.lightDark).toBe(S),await _(r.canvas).not.toBe(n.canvas),await y(()=>_(e.getByTestId(`follows-html-color-scheme`)).toHaveTextContent(`dark`))}finally{t.className=n}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  name: 'dark class vs color-scheme',
  tags: ['use-case'],
  render: () => <div className="flex flex-wrap gap-3">
            <SchemePanel id="light" title="A: light" className="scheme-light" />
            <SchemePanel id="class-only" title={<>
                        B: <code>dark</code> class, <code>color-scheme: light</code>
                    </>} className="dark scheme-light" />
            <SchemePanel id="class-and-scheme" title={<>
                        C: <code>dark</code> class (sets <code>color-scheme: dark</code>)
                    </>} className="dark" />
        </div>,
  play: async ({
    canvas
  }) => {
    const classOnly = readPanel(canvas.getByTestId('class-only'));
    const withScheme = readPanel(canvas.getByTestId('class-and-scheme'));

    // The class drives Tailwind in both panels.
    await expect(classOnly.tailwind).toBe(BLACK);
    await expect(withScheme.tailwind).toBe(BLACK);

    // Only \`color-scheme\` switches what the browser draws.
    await expect(classOnly.colorScheme).toBe('light');
    await expect(classOnly.lightDark).toBe(WHITE);
    await expect(withScheme.colorScheme).toBe('dark');
    await expect(withScheme.lightDark).toBe(BLACK);
    await expect(withScheme.canvas).not.toBe(classOnly.canvas);
  }
}`,...C.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  name: 'with classNameThemeStore',
  tags: ['use-case'],
  render: () => {
    const store = classNameThemeStore(themes);
    return <StoryCard appearance="output">
                <div className="flex flex-col gap-3">
                    <div className="flex gap-2">
                        <Button onPress={() => store.write(themeEntry(themes, 'light'))}>Light</Button>
                        <Button onPress={() => store.write(themeEntry(themes, 'dark'))}>Dark</Button>
                    </div>
                    <SchemePanel id="follows-html" title="Follows <html>" />
                </div>
            </StoryCard>;
  },
  play: async ({
    canvas
  }) => {
    const html = document.documentElement;
    const original = html.className;
    try {
      await userEvent.click(canvas.getByRole('button', {
        name: 'Light'
      }));
      const light = readPanel(canvas.getByTestId('follows-html'));
      await expect(light.colorScheme).toBe('normal');
      await expect(light.lightDark).toBe(WHITE);
      await userEvent.click(canvas.getByRole('button', {
        name: 'Dark'
      }));
      const dark = readPanel(canvas.getByTestId('follows-html'));
      await expect(html.classList.contains('dark')).toBe(true);
      // \`color-scheme\` is inherited, so the panel takes the value set on <html>.
      await expect(dark.colorScheme).toBe('dark');
      await expect(dark.lightDark).toBe(BLACK);
      await expect(dark.canvas).not.toBe(light.canvas);
      await waitFor(() => expect(canvas.getByTestId('follows-html-color-scheme')).toHaveTextContent('dark'));
    } finally {
      html.className = original;
    }
  }
}`,...T.parameters?.docs?.source}}},E=[`ClassVersusColorScheme`,`WithThemeStore`]})))()}export{D as i,T as n,d as r,C as t};