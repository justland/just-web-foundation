import{n as e,r as t}from"./rolldown-runtime-DkW27tQK.js";import{t as n}from"./react-B6tGW3fj.js";import{a as r}from"./chunk-W22LQPXL-BSpKiHdn.js";import{i,s as a}from"./iframe-lHA9G3CN.js";import{t as o}from"./get-prefers-color-scheme-BYJ-yK6c.js";import{t as s}from"./src-BN_nq8F-.js";import{n as c}from"./theme-entry-Cs_OPpJC.js";import{n as l,t as u}from"./data-attribute-theme-store-Bf6BVhXc.js";import{n as d,t as f}from"./button-AW1k6hjA.js";import{h as p,t as m}from"./react-Dq6RBRG0.js";var h=t({RecipeB:()=>O,Tailwind:()=>k,__namedExportsOrder:()=>A,default:()=>S});function g(e){let[t,n]=(0,_.useState)(null),r=(0,_.useMemo)(()=>t?u(C,{attributeName:`data-theme`,element:t}):void 0,[t]),i=p({element:t});return(0,v.jsxs)(`div`,{className:`flex flex-col gap-3`,children:[e.css&&(0,v.jsx)(`style`,{children:e.css}),(0,v.jsxs)(`div`,{className:`flex gap-2`,children:[(0,v.jsx)(f,{onPress:()=>r?.write(c(C,`light`)),children:`Light`}),(0,v.jsx)(f,{onPress:()=>r?.write(c(C,`dark`)),children:`Dark`}),(0,v.jsx)(f,{onPress:()=>r?.write(void 0),children:`System`})]}),(0,v.jsx)(`div`,{ref:n,"data-testid":`panel`,className:`rounded border border-gray-400 p-3 ${e.className}`,children:(0,v.jsxs)(`div`,{className:`flex flex-wrap items-center gap-2`,children:[(0,v.jsx)(`input`,{type:`checkbox`,"aria-label":`checkbox`,defaultChecked:!0}),(0,v.jsx)(`select`,{"aria-label":`select`,children:(0,v.jsx)(`option`,{children:`Option`})}),(0,v.jsxs)(`span`,{children:[`Renders in: `,(0,v.jsx)(`strong`,{"data-testid":`scheme`,children:i})]})]})})]})}var _,v,y,b,x,S,C,w,T,E,D,O,k,A;function j(){return(j=e((()=>{s(),m(),l(),a(),_=n(),d(),v=r(),{expect:y,userEvent:b,waitFor:x}=__STORYBOOK_MODULE_TEST__,S={title:`color-scheme/Theme switching`},C={light:`light`,dark:`dark`},w=`rgb(18, 18, 18)`,T=`rgb(255, 255, 255)`,E=async({canvas:e})=>{let t=e.getByTestId(`panel`),n=()=>getComputedStyle(t).backgroundColor;await b.click(e.getByRole(`button`,{name:`Dark`})),await x(()=>y(e.getByTestId(`scheme`)).toHaveTextContent(`dark`)),await y(n()).toBe(w),await b.click(e.getByRole(`button`,{name:`Light`})),await x(()=>y(e.getByTestId(`scheme`)).toHaveTextContent(`light`)),await y(n()).toBe(T),await b.click(e.getByRole(`button`,{name:`System`}));let r=o();await x(()=>y(e.getByTestId(`scheme`)).toHaveTextContent(r)),await y(n()).toBe(r===`dark`?w:T)},D=`
.recipe-b { color-scheme: light dark; }
.recipe-b[data-theme='light'] { color-scheme: light; }
.recipe-b[data-theme='dark'] { color-scheme: dark; }
.recipe-b {
    background: light-dark(#ffffff, #121212);
    color: light-dark(#1a1a1a, #e8e8e8);
}
`,O={name:`data-theme with CSS`,tags:[`use-case`],render:()=>(0,v.jsx)(i,{appearance:`output`,children:(0,v.jsx)(g,{className:`recipe-b`,css:D})}),play:E},k={name:`data-theme with Tailwind`,tags:[`use-case`],render:()=>(0,v.jsx)(i,{appearance:`output`,children:(0,v.jsx)(g,{className:`scheme-light-dark data-[theme=light]:scheme-light data-[theme=dark]:scheme-dark bg-[color:light-dark(#ffffff,#121212)] text-[color:light-dark(#1a1a1a,#e8e8e8)]`})}),play:E},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  name: 'data-theme with CSS',
  tags: ['use-case'],
  render: () => <StoryCard appearance="output">
            <ThemePanel className="recipe-b" css={RECIPE_B_CSS} />
        </StoryCard>,
  play
}`,...O.parameters?.docs?.source}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  name: 'data-theme with Tailwind',
  tags: ['use-case'],
  render: () => <StoryCard appearance="output">
            <ThemePanel className="scheme-light-dark data-[theme=light]:scheme-light data-[theme=dark]:scheme-dark bg-[color:light-dark(#ffffff,#121212)] text-[color:light-dark(#1a1a1a,#e8e8e8)]" />
        </StoryCard>,
  play
}`,...k.parameters?.docs?.source}}},A=[`RecipeB`,`Tailwind`]})))()}export{h as i,k as n,j as r,O as t};