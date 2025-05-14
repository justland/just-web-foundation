import{j as t}from"./jsx-runtime-Cf8x2fCZ.js";import{d as i}from"./define_docs_param-lmgaBKCF.js";import{e as l}from"./index-Ba_wKnRg.js";import{g as n}from"./data-attribute-DHS3S8Jq.js";import"./index-yBjzXJbu.js";import"./data-attribute-CxYa4EAQ.js";import"./globals.ctx-DOXvZQDb.js";import"./attribute-BU07dUZA.js";import"./findKey-D_Zca1Sl.js";const U={title:"theme/getThemeByDataAttribute",tags:["autodocs","new","version:1.0.0"]},m={light:"light-theme",dark:"dark-theme",system:"system-theme"},s={parameters:i({description:{story:"Gets theme value from a data attribute with fallback to default theme."}}),loaders:[()=>(document.documentElement.setAttribute("data-theme","dark-theme"),{theme:n({themes:m,defaultTheme:"dark",attributeName:"data-theme"})})],render:(e,{loaded:{theme:a}})=>{const r=document.documentElement.getAttribute("data-theme");return t.jsxs("div",{className:"font-sans",children:[t.jsxs("p",{children:["Current theme: ",a===void 0?"(undefined)":a]}),t.jsxs("p",{children:["Data attribute value: ",r===null?"(null)":r]})]})},play:async({loaded:{theme:e}})=>{await l(e).toBe("dark")}},d={tags:["unit"],parameters:i({description:{story:"Returns undefined when data attribute is not set."}}),loaders:[()=>(document.documentElement.removeAttribute("data-not-exist"),{theme:n({themes:m,attributeName:"data-not-exist"})})],render:(e,{loaded:{theme:a}})=>{const r=document.documentElement.getAttribute("data-not-exist");return t.jsxs("div",{className:"font-sans",children:[t.jsxs("p",{children:["Current theme: ",a===void 0?"(undefined)":a]}),t.jsxs("p",{children:["Data attribute value: ",r===null?"(null)":r]})]})},play:async({loaded:{theme:e}})=>{await l(e).toBeUndefined()}},u={parameters:i({description:{story:"Falls back to default theme when data attribute value is not a valid theme."}}),loaders:[()=>(document.documentElement.removeAttribute("data-theme"),{theme:n({themes:m,defaultTheme:"system",attributeName:"data-theme"})})],render:(e,{loaded:{theme:a}})=>{const r=document.documentElement.getAttribute("data-theme");return t.jsxs("div",{className:"font-sans",children:[t.jsxs("p",{children:["Current theme: ",a===void 0?"(undefined)":a]}),t.jsxs("p",{children:["Data attribute value: ",r===null?"(null)":r]})]})},play:async({loaded:{theme:e}})=>{await l(e).toBe("system")}},o={parameters:i({description:{story:"Falls back to default theme when data attribute value is not a valid theme."}}),render:()=>{document.documentElement.setAttribute("data-theme","invalid-theme");const e=document.documentElement.getAttribute("data-theme"),a=n({themes:m,defaultTheme:"system",attributeName:"data-theme"});return t.jsxs("div",{className:"font-sans",children:[t.jsxs("p",{children:["Current theme: ",a===void 0?"(undefined)":a]}),t.jsxs("p",{children:["Data attribute value: ",e===null?"(null)":e]})]})},play:async()=>{const e=n({themes:m,defaultTheme:"system",attributeName:"data-theme"});await l(e).toBe("system")}};var c,h,p;s.parameters={...s.parameters,docs:{...(c=s.parameters)==null?void 0:c.docs,source:{originalSource:`{
  parameters: defineDocsParam({
    description: {
      story: 'Gets theme value from a data attribute with fallback to default theme.'
    }
  }),
  loaders: [() => {
    document.documentElement.setAttribute('data-theme', 'dark-theme');
    const theme = getThemeByDataAttribute({
      themes,
      defaultTheme: 'dark',
      attributeName: 'data-theme'
    });
    return {
      theme
    };
  }],
  render: (_, {
    loaded: {
      theme
    }
  }) => {
    const value = document.documentElement.getAttribute('data-theme');
    return <div className="font-sans">
                <p>Current theme: {theme === undefined ? '(undefined)' : theme}</p>
                <p>Data attribute value: {value === null ? '(null)' : value}</p>
            </div>;
  },
  play: async ({
    loaded: {
      theme
    }
  }) => {
    await expect(theme).toBe('dark');
  }
}`,...(p=(h=s.parameters)==null?void 0:h.docs)==null?void 0:p.source}}};var v,f,b;d.parameters={...d.parameters,docs:{...(v=d.parameters)==null?void 0:v.docs,source:{originalSource:`{
  tags: ['unit'],
  parameters: defineDocsParam({
    description: {
      story: 'Returns undefined when data attribute is not set.'
    }
  }),
  loaders: [() => {
    document.documentElement.removeAttribute('data-not-exist');
    const theme = getThemeByDataAttribute({
      themes,
      attributeName: 'data-not-exist'
    });
    return {
      theme
    };
  }],
  render: (_, {
    loaded: {
      theme
    }
  }) => {
    const value = document.documentElement.getAttribute('data-not-exist');
    return <div className="font-sans">
                <p>Current theme: {theme === undefined ? '(undefined)' : theme}</p>
                <p>Data attribute value: {value === null ? '(null)' : value}</p>
            </div>;
  },
  play: async ({
    loaded: {
      theme
    }
  }) => {
    await expect(theme).toBeUndefined();
  }
}`,...(b=(f=d.parameters)==null?void 0:f.docs)==null?void 0:b.source}}};var y,g,x;u.parameters={...u.parameters,docs:{...(y=u.parameters)==null?void 0:y.docs,source:{originalSource:`{
  parameters: defineDocsParam({
    description: {
      story: 'Falls back to default theme when data attribute value is not a valid theme.'
    }
  }),
  loaders: [() => {
    document.documentElement.removeAttribute('data-theme');
    const theme = getThemeByDataAttribute({
      themes,
      defaultTheme: 'system',
      attributeName: 'data-theme'
    });
    return {
      theme
    };
  }],
  render: (_, {
    loaded: {
      theme
    }
  }) => {
    const value = document.documentElement.getAttribute('data-theme');
    return <div className="font-sans">
                <p>Current theme: {theme === undefined ? '(undefined)' : theme}</p>
                <p>Data attribute value: {value === null ? '(null)' : value}</p>
            </div>;
  },
  play: async ({
    loaded: {
      theme
    }
  }) => {
    await expect(theme).toBe('system');
  }
}`,...(x=(g=u.parameters)==null?void 0:g.docs)==null?void 0:x.source}}};var A,D,N;o.parameters={...o.parameters,docs:{...(A=o.parameters)==null?void 0:A.docs,source:{originalSource:`{
  parameters: defineDocsParam({
    description: {
      story: 'Falls back to default theme when data attribute value is not a valid theme.'
    }
  }),
  render: () => {
    document.documentElement.setAttribute('data-theme', 'invalid-theme');
    const value = document.documentElement.getAttribute('data-theme');
    const theme = getThemeByDataAttribute({
      themes,
      defaultTheme: 'system',
      attributeName: 'data-theme'
    });
    return <div className="font-sans">
                <p>Current theme: {theme === undefined ? '(undefined)' : theme}</p>
                <p>Data attribute value: {value === null ? '(null)' : value}</p>
            </div>;
  },
  play: async () => {
    const theme = getThemeByDataAttribute({
      themes,
      defaultTheme: 'system',
      attributeName: 'data-theme'
    });
    await expect(theme).toBe('system');
  }
}`,...(N=(D=o.parameters)==null?void 0:D.docs)==null?void 0:N.source}}};const P=["BasicUsage","UndefinedWhenNotSet","DefaultTheme","InvalidTheme"];export{s as BasicUsage,u as DefaultTheme,o as InvalidTheme,d as UndefinedWhenNotSet,P as __namedExportsOrder,U as default};
