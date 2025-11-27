import{j as a}from"./iframe-B_KEKWeW.js";import{d as r}from"./define_docs_param-lmgaBKCF.js";import{g as n}from"./data-attribute-Ciz_tloe.js";import"./preload-helper-Dp1pzeXC.js";import"./data-attribute-CxYa4EAQ.js";import"./globals.ctx-DOXvZQDb.js";import"./attribute-BU07dUZA.js";import"./findKey-D_Zca1Sl.js";const{expect:s}=__STORYBOOK_MODULE_TEST__,K={title:"theme/getThemeByDataAttribute",tags:["autodocs","new","version:1.0.0"]},m={light:"light-theme",dark:"dark-theme",system:"system-theme"};function o({theme:e,value:t}){return a.jsxs("div",{className:"font-sans",children:[a.jsxs("p",{children:["Current theme: ",e===void 0?"(undefined)":e]}),a.jsxs("p",{children:["Data attribute value: ",t===null?"(null)":t]})]})}const u={parameters:r({description:{story:"Gets theme value from a data attribute with fallback to default theme."}}),loaders:[()=>(document.documentElement.setAttribute("data-theme","dark-theme"),{theme:n({themes:m,defaultTheme:"dark",attributeName:"data-theme"})})],render:(e,{loaded:{theme:t}})=>{const d=document.documentElement.getAttribute("data-theme");return a.jsx(o,{theme:t,value:d})},play:async({loaded:{theme:e}})=>{await s(e).toBe("dark")}},i={tags:["unit"],parameters:r({description:{story:"Returns undefined when data attribute is not set."}}),loaders:[()=>(document.documentElement.removeAttribute("data-not-exist"),{theme:n({themes:m,attributeName:"data-not-exist"})})],render:(e,{loaded:{theme:t}})=>{const d=document.documentElement.getAttribute("data-not-exist");return a.jsx(o,{theme:t,value:d})},play:async({loaded:{theme:e}})=>{await s(e).toBeUndefined()}},h={name:"With defaultTheme",parameters:r({description:{story:"Falls back to default theme when data attribute value is not a valid theme."}}),loaders:[()=>(document.documentElement.removeAttribute("data-theme"),{theme:n({themes:m,defaultTheme:"system",attributeName:"data-theme"})})],render:(e,{loaded:{theme:t}})=>{const d=document.documentElement.getAttribute("data-theme");return a.jsx(o,{theme:t,value:d})},play:async({loaded:{theme:e}})=>{await s(e).toBe("system")}},l={name:"Invalid theme with defaultTheme",parameters:r({description:{story:"Falls back to default theme when data attribute value is not a valid theme."}}),render:()=>{document.documentElement.setAttribute("data-theme","invalid-theme");const e=document.documentElement.getAttribute("data-theme"),t=n({themes:m,defaultTheme:"system",attributeName:"data-theme"});return a.jsx(o,{theme:t,value:e})},play:async()=>{const e=n({themes:m,defaultTheme:"system",attributeName:"data-theme"});await s(e).toBe("system")}},c={parameters:r({description:{story:"Returns undefined when data attribute value is not a valid theme."}}),render:()=>{document.documentElement.setAttribute("data-theme","invalid-theme");const e=document.documentElement.getAttribute("data-theme"),t=n({themes:m,attributeName:"data-theme"});return a.jsx(o,{theme:t,value:e})},play:async()=>{const e=n({themes:m,attributeName:"data-theme"});await s(e).toBeUndefined()}},p={name:"allowCustom",parameters:r({description:{story:"Falls back to default theme when data attribute value is not a valid theme."}}),render:()=>{document.documentElement.setAttribute("data-theme","custom");const e=document.documentElement.getAttribute("data-theme"),t=n({themes:m,attributeName:"data-theme",allowCustom:!0});return a.jsx(o,{theme:t,value:e})},play:async()=>{const e=n({themes:m,attributeName:"data-theme",allowCustom:!0});await s(e).toBe("custom")}};var b,v,y;u.parameters={...u.parameters,docs:{...(b=u.parameters)==null?void 0:b.docs,source:{originalSource:`{
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
    return <ShowResult theme={theme} value={value} />;
  },
  play: async ({
    loaded: {
      theme
    }
  }) => {
    await expect(theme).toBe('dark');
  }
}`,...(y=(v=u.parameters)==null?void 0:v.docs)==null?void 0:y.source}}};var f,w,g;i.parameters={...i.parameters,docs:{...(f=i.parameters)==null?void 0:f.docs,source:{originalSource:`{
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
    return <ShowResult theme={theme} value={value} />;
  },
  play: async ({
    loaded: {
      theme
    }
  }) => {
    await expect(theme).toBeUndefined();
  }
}`,...(g=(w=i.parameters)==null?void 0:w.docs)==null?void 0:g.source}}};var A,T,E;h.parameters={...h.parameters,docs:{...(A=h.parameters)==null?void 0:A.docs,source:{originalSource:`{
  name: 'With defaultTheme',
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
    return <ShowResult theme={theme} value={value} />;
  },
  play: async ({
    loaded: {
      theme
    }
  }) => {
    await expect(theme).toBe('system');
  }
}`,...(E=(T=h.parameters)==null?void 0:T.docs)==null?void 0:E.source}}};var x,B,D;l.parameters={...l.parameters,docs:{...(x=l.parameters)==null?void 0:x.docs,source:{originalSource:`{
  name: 'Invalid theme with defaultTheme',
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
    return <ShowResult theme={theme} value={value} />;
  },
  play: async () => {
    const theme = getThemeByDataAttribute({
      themes,
      defaultTheme: 'system',
      attributeName: 'data-theme'
    });
    await expect(theme).toBe('system');
  }
}`,...(D=(B=l.parameters)==null?void 0:B.docs)==null?void 0:D.source}}};var N,S,k;c.parameters={...c.parameters,docs:{...(N=c.parameters)==null?void 0:N.docs,source:{originalSource:`{
  parameters: defineDocsParam({
    description: {
      story: 'Returns undefined when data attribute value is not a valid theme.'
    }
  }),
  render: () => {
    document.documentElement.setAttribute('data-theme', 'invalid-theme');
    const value = document.documentElement.getAttribute('data-theme');
    const theme = getThemeByDataAttribute({
      themes,
      attributeName: 'data-theme'
    });
    return <ShowResult theme={theme} value={value} />;
  },
  play: async () => {
    const theme = getThemeByDataAttribute({
      themes,
      attributeName: 'data-theme'
    });
    await expect(theme).toBeUndefined();
  }
}`,...(k=(S=c.parameters)==null?void 0:S.docs)==null?void 0:k.source}}};var _,R,j;p.parameters={...p.parameters,docs:{...(_=p.parameters)==null?void 0:_.docs,source:{originalSource:`{
  name: 'allowCustom',
  parameters: defineDocsParam({
    description: {
      story: 'Falls back to default theme when data attribute value is not a valid theme.'
    }
  }),
  render: () => {
    document.documentElement.setAttribute('data-theme', 'custom');
    const value = document.documentElement.getAttribute('data-theme');
    const theme = getThemeByDataAttribute({
      themes,
      attributeName: 'data-theme',
      allowCustom: true
    });
    return <ShowResult theme={theme} value={value} />;
  },
  play: async () => {
    const theme = getThemeByDataAttribute({
      themes,
      attributeName: 'data-theme',
      allowCustom: true
    });
    await expect(theme).toBe('custom');
  }
}`,...(j=(R=p.parameters)==null?void 0:R.docs)==null?void 0:j.source}}};const L=["BasicUsage","UndefinedWhenNotSet","WithDefaultTheme","InvalidThemeWithDefaultTheme","InvalidTheme","AllowCustom"];export{p as AllowCustom,u as BasicUsage,c as InvalidTheme,l as InvalidThemeWithDefaultTheme,i as UndefinedWhenNotSet,h as WithDefaultTheme,L as __namedExportsOrder,K as default};
