import{j as e,d as l,w as o,s as r}from"./iframe-DpiIn1Pa.js";import{d as n}from"./dedent-BuYMbVyj.js";import{t}from"./test_type-B2D-ob_P.js";import"./preload-helper-PPVm8Dsz.js";const i=`import type { ThemeMap, ThemeStorageOptions } from './theme.types.ts'

export function defineThemeStorageOptions<Themes extends ThemeMap>(
	options: ThemeStorageOptions<Themes>,
): ThemeStorageOptions<Themes> {
	return options
}
`,u={title:"theme/defineThemeStorageOptions",tags:["func","version:next"],parameters:l({description:{component:"Helper to define theme storage options with inferred Themes type. Without it, you must declare the themes map separately and use typeof or a manual type for ThemeStorageOptions."}}),render:()=>e.jsx(e.Fragment,{})},s={tags:["use-case"],parameters:l({description:{story:'defineThemeStorageOptions infers the Themes type from the themes object, so theme is typed as the union of theme keys (e.g. "light" | "dark" | "system"). The result can be passed to setThemeToLocalStorage and getThemeFromLocalStorage.'}}),decorators:[o({content:e.jsxs(e.Fragment,{children:[e.jsxs("p",{children:[e.jsx("code",{children:"defineThemeStorageOptions"})," is a helper to define the theme storage options outside the function call."]}),e.jsxs("p",{children:["It helps to avoid the need to declare the themes map separately and use typeof or a manual type for ",e.jsx("code",{children:"ThemeStorageOptions"}),"."]})]})}),r({source:n`
                const options = defineThemeStorageOptions({
                    themes: { default: 'theme-default', grayscale: 'theme-grayscale' },
                    theme: 'default',
                    storageKey: 'theme'
                })

                // options is typed as ThemeStorageOptions<{ default: string, grayscale: string }>
                // options.theme is typed as "default" | "grayscale" | null | undefined
                // options.themes is typed as { default: string, grayscale: string }
            `}),o({content:e.jsx(e.Fragment,{children:e.jsxs("p",{children:["Alternatively, you can use ",e.jsx("code",{children:"as const"})," to explicitly define the type of the options object."]})})}),r({source:n`
                const asConst = {
                    storageKey: 'theme',
                    themes: { default: 'theme-default', grayscale: 'theme-grayscale' },
                    theme: 'default'
                } as const

                // asConst.theme is typed as 'default'
                // asConst.themes is typed as {
                //   readonly default: 'theme-default'
                //   readonly grayscale: 'theme-grayscale'
                // }
            `}),o({content:e.jsx(e.Fragment,{children:e.jsx("p",{children:"Using type declaration and satisfies keyword are more verbose."})})}),r({source:n`
                const typeDeclaration: ThemeStorageOptions<{ default: string; grayscale: string }> = {
                    storageKey: 'theme',
                    themes: { default: 'theme-default', grayscale: 'theme-grayscale' },
                    theme: 'default'
                }

                // typeDeclaration.theme is typed as 'default' | 'grayscale' | null | undefined
                // typeDeclaration.themes is typed as { default: string; grayscale: string }

                const satisfies = {
                    storageKey: 'theme',
                    themes: { default: 'theme-default', grayscale: 'theme-grayscale' },
                    theme: 'default',
                } satisfies ThemeStorageOptions<{ default: string; grayscale: string }>

                // satisfies.theme is typed as 'default'
                // satisfies.themes is typed as { default: string; grayscale: string }
            `})],play:()=>{t.equal(!0),t.equal(!0),t.equal(!0),t.equal(!0),t.equal(!0),t.equal(!0),t.equal(!0),t.equal(!0)}},a={tags:["source"],parameters:l({source:{code:i}}),decorators:[r()]};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  tags: ['use-case'],
  parameters: defineDocsParam({
    description: {
      story: 'defineThemeStorageOptions infers the Themes type from the themes object, so theme is typed as the union of theme keys (e.g. "light" | "dark" | "system"). The result can be passed to setThemeToLocalStorage and getThemeFromLocalStorage.'
    }
  }),
  decorators: [withStoryCard({
    content: <>
                    <p>
                        <code>defineThemeStorageOptions</code> is a helper to define the theme storage options
                        outside the function call.
                    </p>
                    <p>
                        It helps to avoid the need to declare the themes map separately and use typeof or a
                        manual type for <code>ThemeStorageOptions</code>.
                    </p>
                </>
  }), showSource({
    source: dedent\`
                const options = defineThemeStorageOptions({
                    themes: { default: 'theme-default', grayscale: 'theme-grayscale' },
                    theme: 'default',
                    storageKey: 'theme'
                })

                // options is typed as ThemeStorageOptions<{ default: string, grayscale: string }>
                // options.theme is typed as "default" | "grayscale" | null | undefined
                // options.themes is typed as { default: string, grayscale: string }
            \`
  }), withStoryCard({
    content: <>
                    <p>
                        Alternatively, you can use <code>as const</code> to explicitly define the type of the
                        options object.
                    </p>
                </>
  }), showSource({
    source: dedent\`
                const asConst = {
                    storageKey: 'theme',
                    themes: { default: 'theme-default', grayscale: 'theme-grayscale' },
                    theme: 'default'
                } as const

                // asConst.theme is typed as 'default'
                // asConst.themes is typed as {
                //   readonly default: 'theme-default'
                //   readonly grayscale: 'theme-grayscale'
                // }
            \`
  }), withStoryCard({
    content: <>
                    <p>Using type declaration and satisfies keyword are more verbose.</p>
                </>
  }), showSource({
    source: dedent\`
                const typeDeclaration: ThemeStorageOptions<{ default: string; grayscale: string }> = {
                    storageKey: 'theme',
                    themes: { default: 'theme-default', grayscale: 'theme-grayscale' },
                    theme: 'default'
                }

                // typeDeclaration.theme is typed as 'default' | 'grayscale' | null | undefined
                // typeDeclaration.themes is typed as { default: string; grayscale: string }

                const satisfies = {
                    storageKey: 'theme',
                    themes: { default: 'theme-default', grayscale: 'theme-grayscale' },
                    theme: 'default',
                } satisfies ThemeStorageOptions<{ default: string; grayscale: string }>

                // satisfies.theme is typed as 'default'
                // satisfies.themes is typed as { default: string; grayscale: string }
            \`
  })],
  play: () => {
    const options = defineThemeStorageOptions({
      themes: {
        default: 'theme-default',
        grayscale: 'theme-grayscale'
      },
      theme: 'default',
      storageKey: 'theme'
    });
    testType.equal<typeof options.theme, 'default' | 'grayscale' | null | undefined>(true);
    testType.equal<typeof options.themes, {
      default: string;
      grayscale: string;
    }>(true);
    const asConst = {
      storageKey: 'theme',
      themes: {
        default: 'theme-default',
        grayscale: 'theme-grayscale'
      },
      theme: 'default'
    } as const;
    testType.equal<typeof asConst.theme, 'default'>(true);
    testType.equal<typeof asConst.themes, {
      readonly default: 'theme-default';
      readonly grayscale: 'theme-grayscale';
    }>(true);
    const typeDeclaration: ThemeStorageOptions<{
      default: string;
      grayscale: string;
    }> = {
      storageKey: 'theme',
      themes: {
        default: 'theme-default',
        grayscale: 'theme-grayscale'
      },
      theme: 'default'
    };
    testType.equal<typeof typeDeclaration.theme, 'default' | 'grayscale' | null | undefined>(true);
    testType.equal<typeof typeDeclaration.themes, {
      default: string;
      grayscale: string;
    }>(true);
    const satisfies = {
      storageKey: 'theme',
      themes: {
        default: 'theme-default',
        grayscale: 'theme-grayscale'
      },
      theme: 'default'
    } satisfies ThemeStorageOptions<{
      default: string;
      grayscale: string;
    }>;
    testType.equal<typeof satisfies.theme, 'default'>(true);
    testType.equal<typeof satisfies.themes, {
      default: string;
      grayscale: string;
    }>(true);
  }
}`,...s.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  tags: ['source'],
  parameters: defineDocsParam({
    source: {
      code: source
    }
  }),
  decorators: [showSource()]
}`,...a.parameters?.docs?.source}}};const p=["BasicUsage","Source"];export{s as BasicUsage,a as Source,p as __namedExportsOrder,u as default};
