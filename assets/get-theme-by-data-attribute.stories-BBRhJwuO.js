import{j as m,d as r,w as y,s as T}from"./iframe-DMM-er1z.js";import{d as g}from"./dedent-BuYMbVyj.js";import{g as a}from"./get-theme-by-data-attribute-DnSc2ywd.js";import{T as s}from"./theme-result-card-PyzNQYAU.js";import"./preload-helper-PPVm8Dsz.js";import"./get-data-attribute-Bl9c_7h4.js";import"./get-attribute-BI4biMNS.js";import"./findKey-BZZwGHNT.js";import"./append-id-Vsg144gU.js";const v=`import { findKey } from 'type-plus'
import { getDataAttribute } from '../attributes/get-data-attribute.ts'

/**
 * Gets the theme based on a data attribute value.
 *
 * @param options - Configuration options
 * @param options.themes - Record mapping theme keys to their data attribute values
 * @param options.defaultTheme - Fallback theme key if attribute value doesn't match any theme
 * @param options.attributeName - Name of the data attribute to check (must start with 'data-')
 * @param options.allowCustom - Whether to allow custom themes value
 * @returns The matching theme key, or defaultTheme if no match found
 *
 * @example
 * \`\`\`ts
 * const themes = {
 *   light: 'light',
 *   dark: 'dark',
 *   system: 'system'
 * }
 *
 * // Get theme from data-theme attribute
 * const theme = getThemeByDataAttribute({
 *   themes,
 *   defaultTheme: 'system',
 *   attributeName: 'data-theme'
 * })
 * \`\`\`
 */
export function getThemeByDataAttribute<Themes extends Record<string, string>>(options: {
	attributeName: \`data-\${string}\`
	defaultTheme?: keyof Themes | undefined
	themes: Themes
	element?: Element | undefined
}): keyof Themes | undefined
export function getThemeByDataAttribute<Themes extends Record<string, string>>(options: {
	attributeName: \`data-\${string}\`
	allowCustom: true | undefined
	defaultTheme?: keyof Themes | undefined
	themes: Themes
	element?: Element | undefined
}): string | undefined
export function getThemeByDataAttribute<Themes extends Record<string, string>>(options: {
	attributeName: \`data-\${string}\`
	allowCustom?: boolean | undefined
	defaultTheme?: keyof Themes | undefined
	themes: Themes
	element?: Element | undefined
}): keyof Themes | undefined {
	const value = getDataAttribute(options.attributeName, options.element) ?? undefined
	const theme = findKey(options.themes, (theme) => options.themes[theme] === value)

	return theme ?? options.defaultTheme ?? (options.allowCustom ? value : undefined)
}
`,{expect:o}=__STORYBOOK_MODULE_TEST__,k={title:"theme/getThemeByDataAttribute",tags:["func","version:next"],parameters:r({description:{component:"Gets the current theme from a data attribute value (e.g. data-theme) with optional default and allowCustom."}}),render:()=>m.jsx(m.Fragment,{})},n={light:"light-theme",dark:"dark-theme",system:"system-theme"},u="Theme from data-theme",i={tags:["use-case"],parameters:r({description:{story:"Gets theme value from a data attribute with fallback to default theme."}}),decorators:[y(),T({source:g`
                getThemeByDataAttribute({
                  themes,
                  defaultTheme: 'dark',
                  attributeName: 'data-theme',
                })
            `})],loaders:[()=>(document.documentElement.setAttribute("data-theme","dark-theme"),{theme:a({themes:n,defaultTheme:"dark",attributeName:"data-theme"})})],render:(e,{loaded:{theme:t}})=>{const d=document.documentElement.getAttribute("data-theme");return m.jsx(s,{title:u,result:{theme:t,value:d}})},play:async({loaded:{theme:e}})=>{await o(e).toBe("dark")}},h={tags:["unit"],parameters:r({description:{story:"Returns undefined when data attribute is not set."}}),loaders:[()=>(document.documentElement.removeAttribute("data-not-exist"),{theme:a({themes:n,attributeName:"data-not-exist"})})],render:(e,{loaded:{theme:t}})=>{const d=document.documentElement.getAttribute("data-not-exist");return m.jsx(s,{title:u,result:{theme:t,value:d}})},play:async({loaded:{theme:e}})=>{await o(e).toBeUndefined()}},l={name:"With defaultTheme",tags:["use-case"],parameters:r({description:{story:"Falls back to default theme when data attribute is missing or invalid."}}),loaders:[()=>(document.documentElement.removeAttribute("data-theme"),{theme:a({themes:n,defaultTheme:"system",attributeName:"data-theme"})})],render:(e,{loaded:{theme:t}})=>{const d=document.documentElement.getAttribute("data-theme");return m.jsx(s,{title:u,result:{theme:t,value:d}})},play:async({loaded:{theme:e}})=>{await o(e).toBe("system")}},c={name:"Invalid theme with defaultTheme",tags:["use-case"],parameters:r({description:{story:"Falls back to default theme when data attribute value is not a valid theme."}}),render:()=>{document.documentElement.setAttribute("data-theme","invalid-theme");const e=document.documentElement.getAttribute("data-theme"),t=a({themes:n,defaultTheme:"system",attributeName:"data-theme"});return m.jsx(s,{title:u,result:{theme:t,value:e}})},play:async()=>{const e=a({themes:n,defaultTheme:"system",attributeName:"data-theme"});await o(e).toBe("system")}},p={tags:["use-case"],parameters:r({description:{story:"Returns undefined when data attribute value is not a valid theme and no default."}}),render:()=>{document.documentElement.setAttribute("data-theme","invalid-theme");const e=document.documentElement.getAttribute("data-theme"),t=a({themes:n,attributeName:"data-theme"});return m.jsx(s,{title:u,result:{theme:t,value:e}})},play:async()=>{const e=a({themes:n,attributeName:"data-theme"});await o(e).toBeUndefined()}},b={name:"allowCustom",tags:["use-case"],parameters:r({description:{story:"When allowCustom is true, returns the raw attribute value if it does not match a theme."}}),decorators:[y(),T({source:g`getThemeByDataAttribute({ themes, attributeName: 'data-theme', allowCustom: true })`})],render:()=>{document.documentElement.setAttribute("data-theme","custom");const e=document.documentElement.getAttribute("data-theme"),t=a({themes:n,attributeName:"data-theme",allowCustom:!0});return m.jsx(s,{title:u,result:{theme:t,value:e}})},play:async()=>{const e=a({themes:n,attributeName:"data-theme",allowCustom:!0});await o(e).toBe("custom")}},f={tags:["source"],parameters:r({source:{code:v}}),decorators:[T()]};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  tags: ['use-case'],
  parameters: defineDocsParam({
    description: {
      story: 'Gets theme value from a data attribute with fallback to default theme.'
    }
  }),
  decorators: [withStoryCard(), showSource({
    source: dedent\`
                getThemeByDataAttribute({
                  themes,
                  defaultTheme: 'dark',
                  attributeName: 'data-theme',
                })
            \`
  })],
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
    return <ThemeResultCard title={RESULT_CARD_TITLE} result={{
      theme,
      value
    }} />;
  },
  play: async ({
    loaded: {
      theme
    }
  }) => {
    await expect(theme).toBe('dark');
  }
}`,...i.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
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
    return <ThemeResultCard title={RESULT_CARD_TITLE} result={{
      theme,
      value
    }} />;
  },
  play: async ({
    loaded: {
      theme
    }
  }) => {
    await expect(theme).toBeUndefined();
  }
}`,...h.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  name: 'With defaultTheme',
  tags: ['use-case'],
  parameters: defineDocsParam({
    description: {
      story: 'Falls back to default theme when data attribute is missing or invalid.'
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
    return <ThemeResultCard title={RESULT_CARD_TITLE} result={{
      theme,
      value
    }} />;
  },
  play: async ({
    loaded: {
      theme
    }
  }) => {
    await expect(theme).toBe('system');
  }
}`,...l.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  name: 'Invalid theme with defaultTheme',
  tags: ['use-case'],
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
    return <ThemeResultCard title={RESULT_CARD_TITLE} result={{
      theme,
      value
    }} />;
  },
  play: async () => {
    const theme = getThemeByDataAttribute({
      themes,
      defaultTheme: 'system',
      attributeName: 'data-theme'
    });
    await expect(theme).toBe('system');
  }
}`,...c.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  tags: ['use-case'],
  parameters: defineDocsParam({
    description: {
      story: 'Returns undefined when data attribute value is not a valid theme and no default.'
    }
  }),
  render: () => {
    document.documentElement.setAttribute('data-theme', 'invalid-theme');
    const value = document.documentElement.getAttribute('data-theme');
    const theme = getThemeByDataAttribute({
      themes,
      attributeName: 'data-theme'
    });
    return <ThemeResultCard title={RESULT_CARD_TITLE} result={{
      theme,
      value
    }} />;
  },
  play: async () => {
    const theme = getThemeByDataAttribute({
      themes,
      attributeName: 'data-theme'
    });
    await expect(theme).toBeUndefined();
  }
}`,...p.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  name: 'allowCustom',
  tags: ['use-case'],
  parameters: defineDocsParam({
    description: {
      story: 'When allowCustom is true, returns the raw attribute value if it does not match a theme.'
    }
  }),
  decorators: [withStoryCard(), showSource({
    source: dedent\`getThemeByDataAttribute({ themes, attributeName: 'data-theme', allowCustom: true })\`
  })],
  render: () => {
    document.documentElement.setAttribute('data-theme', 'custom');
    const value = document.documentElement.getAttribute('data-theme');
    const theme = getThemeByDataAttribute({
      themes,
      attributeName: 'data-theme',
      allowCustom: true
    });
    return <ThemeResultCard title={RESULT_CARD_TITLE} result={{
      theme,
      value
    }} />;
  },
  play: async () => {
    const theme = getThemeByDataAttribute({
      themes,
      attributeName: 'data-theme',
      allowCustom: true
    });
    await expect(theme).toBe('custom');
  }
}`,...b.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  tags: ['source'],
  parameters: defineDocsParam({
    source: {
      code: source
    }
  }),
  decorators: [showSource()]
}`,...f.parameters?.docs?.source}}};const _=["BasicUsage","UndefinedWhenNotSet","WithDefaultTheme","InvalidThemeWithDefaultTheme","InvalidTheme","AllowCustom","Source"];export{b as AllowCustom,i as BasicUsage,p as InvalidTheme,c as InvalidThemeWithDefaultTheme,f as Source,h as UndefinedWhenNotSet,l as WithDefaultTheme,_ as __namedExportsOrder,k as default};
