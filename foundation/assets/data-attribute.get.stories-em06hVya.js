import{d as r,j as a}from"./iframe-CAUFuzF-.js";import{g as n}from"./data-attribute-CbOnTKor.js";import"./preload-helper-PPVm8Dsz.js";import"./get-data-attribute--jGldh73.js";import"./get-attribute-CF0SoFc6.js";import"./observe-data-attribute-C-q0IQD-.js";import"./observe-attribute-DyUhIkyT.js";import"./findKey-D_Zca1Sl.js";const{expect:s}=__STORYBOOK_MODULE_TEST__,E={title:"theme/getThemeByDataAttribute",tags:["autodocs","new","version:0.5"]},m={light:"light-theme",dark:"dark-theme",system:"system-theme"};function o({theme:e,value:t}){return a.jsxs("div",{className:"font-sans",children:[a.jsxs("p",{children:["Current theme: ",e===void 0?"(undefined)":e]}),a.jsxs("p",{children:["Data attribute value: ",t===null?"(null)":t]})]})}const u={parameters:r({description:{story:"Gets theme value from a data attribute with fallback to default theme."}}),loaders:[()=>(document.documentElement.setAttribute("data-theme","dark-theme"),{theme:n({themes:m,defaultTheme:"dark",attributeName:"data-theme"})})],render:(e,{loaded:{theme:t}})=>{const d=document.documentElement.getAttribute("data-theme");return a.jsx(o,{theme:t,value:d})},play:async({loaded:{theme:e}})=>{await s(e).toBe("dark")}},i={tags:["unit"],parameters:r({description:{story:"Returns undefined when data attribute is not set."}}),loaders:[()=>(document.documentElement.removeAttribute("data-not-exist"),{theme:n({themes:m,attributeName:"data-not-exist"})})],render:(e,{loaded:{theme:t}})=>{const d=document.documentElement.getAttribute("data-not-exist");return a.jsx(o,{theme:t,value:d})},play:async({loaded:{theme:e}})=>{await s(e).toBeUndefined()}},h={name:"With defaultTheme",parameters:r({description:{story:"Falls back to default theme when data attribute value is not a valid theme."}}),loaders:[()=>(document.documentElement.removeAttribute("data-theme"),{theme:n({themes:m,defaultTheme:"system",attributeName:"data-theme"})})],render:(e,{loaded:{theme:t}})=>{const d=document.documentElement.getAttribute("data-theme");return a.jsx(o,{theme:t,value:d})},play:async({loaded:{theme:e}})=>{await s(e).toBe("system")}},l={name:"Invalid theme with defaultTheme",parameters:r({description:{story:"Falls back to default theme when data attribute value is not a valid theme."}}),render:()=>{document.documentElement.setAttribute("data-theme","invalid-theme");const e=document.documentElement.getAttribute("data-theme"),t=n({themes:m,defaultTheme:"system",attributeName:"data-theme"});return a.jsx(o,{theme:t,value:e})},play:async()=>{const e=n({themes:m,defaultTheme:"system",attributeName:"data-theme"});await s(e).toBe("system")}},c={parameters:r({description:{story:"Returns undefined when data attribute value is not a valid theme."}}),render:()=>{document.documentElement.setAttribute("data-theme","invalid-theme");const e=document.documentElement.getAttribute("data-theme"),t=n({themes:m,attributeName:"data-theme"});return a.jsx(o,{theme:t,value:e})},play:async()=>{const e=n({themes:m,attributeName:"data-theme"});await s(e).toBeUndefined()}},p={name:"allowCustom",parameters:r({description:{story:"Falls back to default theme when data attribute value is not a valid theme."}}),render:()=>{document.documentElement.setAttribute("data-theme","custom");const e=document.documentElement.getAttribute("data-theme"),t=n({themes:m,attributeName:"data-theme",allowCustom:!0});return a.jsx(o,{theme:t,value:e})},play:async()=>{const e=n({themes:m,attributeName:"data-theme",allowCustom:!0});await s(e).toBe("custom")}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
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
}`,...u.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
}`,...i.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
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
}`,...h.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
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
}`,...l.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
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
}`,...c.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
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
}`,...p.parameters?.docs?.source}}};const x=["BasicUsage","UndefinedWhenNotSet","WithDefaultTheme","InvalidThemeWithDefaultTheme","InvalidTheme","AllowCustom"];export{p as AllowCustom,u as BasicUsage,c as InvalidTheme,l as InvalidThemeWithDefaultTheme,i as UndefinedWhenNotSet,h as WithDefaultTheme,x as __namedExportsOrder,E as default};
