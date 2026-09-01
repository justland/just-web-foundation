import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{i as t,r as n}from"./iframe-8ZVkZNUj.js";import{t as r}from"./data-attribute-BLgRqhwe.js";import{r as i}from"./dist-CJMrBJtm.js";import{t as a}from"./jsx-dev-runtime-DpMrmGJR.js";function o({theme:e,value:t}){return(0,s.jsxDEV)(`div`,{className:`font-sans`,children:[(0,s.jsxDEV)(`p`,{children:[`Current theme: `,e===void 0?`(undefined)`:e]},void 0,!0,{fileName:l,lineNumber:24,columnNumber:13},this),(0,s.jsxDEV)(`p`,{children:[`Data attribute value: `,t===null?`(null)`:t]},void 0,!0,{fileName:l,lineNumber:25,columnNumber:13},this)]},void 0,!0,{fileName:l,lineNumber:23,columnNumber:10},this)}var s,c,l,u,d,f,p,m,h,g,_,v;function y(){return(y=e((()=>{t(),i(),s=a(),{expect:c}=__STORYBOOK_MODULE_TEST__,l=`/home/runner/work/just-web-foundation/just-web-foundation/libs/css/src/theme/data-attribute.get.stories.tsx`,u={title:`theme/getThemeByDataAttribute`,tags:[`autodocs`,`new`,`version:0.5`]},d={light:`light-theme`,dark:`dark-theme`,system:`system-theme`},f={parameters:n({description:{story:`Gets theme value from a data attribute with fallback to default theme.`}}),loaders:[()=>(document.documentElement.setAttribute(`data-theme`,`dark-theme`),{theme:r({themes:d,defaultTheme:`dark`,attributeName:`data-theme`})})],render:(e,{loaded:{theme:t}})=>{let n=document.documentElement.getAttribute(`data-theme`);return(0,s.jsxDEV)(o,{theme:t,value:n},void 0,!1,{fileName:l,lineNumber:51,columnNumber:12},void 0)},play:async({loaded:{theme:e}})=>{await c(e).toBe(`dark`)}},p={tags:[`unit`],parameters:n({description:{story:`Returns undefined when data attribute is not set.`}}),loaders:[()=>(document.documentElement.removeAttribute(`data-not-exist`),{theme:r({themes:d,attributeName:`data-not-exist`})})],render:(e,{loaded:{theme:t}})=>{let n=document.documentElement.getAttribute(`data-not-exist`);return(0,s.jsxDEV)(o,{theme:t,value:n},void 0,!1,{fileName:l,lineNumber:84,columnNumber:12},void 0)},play:async({loaded:{theme:e}})=>{await c(e).toBeUndefined()}},m={name:`With defaultTheme`,parameters:n({description:{story:`Falls back to default theme when data attribute value is not a valid theme.`}}),loaders:[()=>(document.documentElement.removeAttribute(`data-theme`),{theme:r({themes:d,defaultTheme:`system`,attributeName:`data-theme`})})],render:(e,{loaded:{theme:t}})=>{let n=document.documentElement.getAttribute(`data-theme`);return(0,s.jsxDEV)(o,{theme:t,value:n},void 0,!1,{fileName:l,lineNumber:118,columnNumber:12},void 0)},play:async({loaded:{theme:e}})=>{await c(e).toBe(`system`)}},h={name:`Invalid theme with defaultTheme`,parameters:n({description:{story:`Falls back to default theme when data attribute value is not a valid theme.`}}),render:()=>{document.documentElement.setAttribute(`data-theme`,`invalid-theme`);let e=document.documentElement.getAttribute(`data-theme`),t=r({themes:d,defaultTheme:`system`,attributeName:`data-theme`});return(0,s.jsxDEV)(o,{theme:t,value:e},void 0,!1,{fileName:l,lineNumber:143,columnNumber:12},void 0)},play:async()=>{let e=r({themes:d,defaultTheme:`system`,attributeName:`data-theme`});await c(e).toBe(`system`)}},g={parameters:n({description:{story:`Returns undefined when data attribute value is not a valid theme.`}}),render:()=>{document.documentElement.setAttribute(`data-theme`,`invalid-theme`);let e=document.documentElement.getAttribute(`data-theme`),t=r({themes:d,attributeName:`data-theme`});return(0,s.jsxDEV)(o,{theme:t,value:e},void 0,!1,{fileName:l,lineNumber:167,columnNumber:12},void 0)},play:async()=>{let e=r({themes:d,attributeName:`data-theme`});await c(e).toBeUndefined()}},_={name:`allowCustom`,parameters:n({description:{story:`Falls back to default theme when data attribute value is not a valid theme.`}}),render:()=>{document.documentElement.setAttribute(`data-theme`,`custom`);let e=document.documentElement.getAttribute(`data-theme`),t=r({themes:d,attributeName:`data-theme`,allowCustom:!0});return(0,s.jsxDEV)(o,{theme:t,value:e},void 0,!1,{fileName:l,lineNumber:192,columnNumber:12},void 0)},play:async()=>{let e=r({themes:d,attributeName:`data-theme`,allowCustom:!0});await c(e).toBe(`custom`)}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
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
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
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
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
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
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
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
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
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
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
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
}`,..._.parameters?.docs?.source}}},v=[`BasicUsage`,`UndefinedWhenNotSet`,`WithDefaultTheme`,`InvalidThemeWithDefaultTheme`,`InvalidTheme`,`AllowCustom`]})))()}y();export{_ as AllowCustom,f as BasicUsage,g as InvalidTheme,h as InvalidThemeWithDefaultTheme,p as UndefinedWhenNotSet,m as WithDefaultTheme,v as __namedExportsOrder,u as default};