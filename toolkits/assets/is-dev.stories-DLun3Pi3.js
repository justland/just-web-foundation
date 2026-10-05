import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{a as t}from"./chunk-W22LQPXL-BSpKiHdn.js";import{a as n,c as r,i,l as a,s as o}from"./iframe-Bl0V_0SD.js";function s(e,t){let n=t?.isProduction??(e=>e.startsWith(`prod`));return!!e&&!n(e)}var c;function l(){return(l=e((()=>{c=s(`production`)})))()}var u;function d(){return(d=e((()=>{u="import { isDevNodeEnv } from './_internal/env/is-dev-node-env.ts'\n\n/**\n * Whether the code runs in development, resolved through export conditions:\n * `true` under `development`, `false` under `production`,\n * otherwise `true` only when `process.env.NODE_ENV` is set and does not start with `prod`.\n *\n * Libraries must keep `@just-web/toolkits/env` external, or the condition is resolved at the library's build time.\n */\nexport const isDev: boolean = isDevNodeEnv(\n	(globalThis as { process?: { env?: { NODE_ENV?: string } } }).process?.env?.NODE_ENV\n)\n"})))()}var f,p,m,h,g;function _(){return(_=e((()=>{o(),l(),d(),f=t(),p={title:`env/isDev`,tags:[`var`,`version:3.7`],parameters:n({description:{component:"Whether the code runs in development, as a constant resolved through export conditions, so bundlers can drop development-only branches from production builds. Import it from `@just-web/toolkits/env`."}}),render:()=>(0,f.jsx)(f.Fragment,{})},m={tags:[`use-case`],parameters:n({source:{code:`import { isDev } from '@just-web/toolkits/env'

if (isDev) {
  console.warn('...')
}`}}),decorators:[a({content:(0,f.jsxs)(`div`,{className:`space-y-2`,children:[(0,f.jsxs)(`p`,{children:[(0,f.jsx)(`code`,{children:`isDev`}),` is resolved when the app is built, not at runtime:`]}),(0,f.jsxs)(`ul`,{className:`list-disc pl-6`,children:[(0,f.jsxs)(`li`,{children:[(0,f.jsx)(`code`,{children:`development`}),` condition: `,(0,f.jsx)(`code`,{children:`true`})]}),(0,f.jsxs)(`li`,{children:[(0,f.jsx)(`code`,{children:`production`}),` condition: `,(0,f.jsx)(`code`,{children:`false`})]}),(0,f.jsxs)(`li`,{children:[`no condition: `,(0,f.jsx)(`code`,{children:`true`}),` only when `,(0,f.jsx)(`code`,{children:`process.env.NODE_ENV`}),` is set and does not start with `,(0,f.jsx)(`code`,{children:`prod`}),`. A browser with no `,(0,f.jsx)(`code`,{children:`process`}),` gets`,` `,(0,f.jsx)(`code`,{children:`false`}),`.`]})]}),(0,f.jsxs)(`p`,{children:[`Vite and webpack 5 set the condition from the build mode, so `,(0,f.jsx)(`code`,{children:`if (isDev)`}),` `,`becomes `,(0,f.jsx)(`code`,{children:`if (false)`}),` in production and the branch is dropped. In Node.js, pass `,(0,f.jsx)(`code`,{children:`--conditions=development`}),` or `,(0,f.jsx)(`code`,{children:`--conditions=production`}),`.`]}),(0,f.jsxs)(`p`,{children:[`Every condition has an `,(0,f.jsx)(`code`,{children:`import`}),` and a `,(0,f.jsx)(`code`,{children:`require`}),` entry. Libraries that use it must keep `,(0,f.jsx)(`code`,{children:`@just-web/toolkits/env`}),` external, or the condition is resolved when the library is built instead of the app.`]})]})}),r()],render:()=>(0,f.jsxs)(i,{title:`In this Storybook`,appearance:`output`,children:[`isDev: `,(0,f.jsx)(`strong`,{children:String(c)})]})},h={tags:[`source`],parameters:n({source:{code:u}}),decorators:[r()]},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  tags: ['use-case'],
  parameters: defineDocsParam({
    source: {
      code: \`import { isDev } from '@just-web/toolkits/env'

if (isDev) {
  console.warn('...')
}\`
    }
  }),
  decorators: [withStoryCard({
    content: <div className="space-y-2">
                    <p>
                        <code>isDev</code> is resolved when the app is built, not at runtime:
                    </p>
                    <ul className="list-disc pl-6">
                        <li>
                            <code>development</code> condition: <code>true</code>
                        </li>
                        <li>
                            <code>production</code> condition: <code>false</code>
                        </li>
                        <li>
                            no condition: <code>true</code> only when <code>process.env.NODE_ENV</code> is set and
                            does not start with <code>prod</code>. A browser with no <code>process</code> gets{' '}
                            <code>false</code>.
                        </li>
                    </ul>
                    <p>
                        Vite and webpack 5 set the condition from the build mode, so <code>if (isDev)</code>{' '}
                        becomes <code>if (false)</code> in production and the branch is dropped. In Node.js,
                        pass <code>--conditions=development</code> or <code>--conditions=production</code>.
                    </p>
                    <p>
                        Every condition has an <code>import</code> and a <code>require</code> entry. Libraries
                        that use it must keep <code>@just-web/toolkits/env</code> external, or the condition is
                        resolved when the library is built instead of the app.
                    </p>
                </div>
  }), showSource()],
  render: () => <StoryCard title="In this Storybook" appearance="output">
            isDev: <strong>{String(isDev)}</strong>
        </StoryCard>
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  tags: ['source'],
  parameters: defineDocsParam({
    source: {
      code
    }
  }),
  decorators: [showSource()]
}`,...h.parameters?.docs?.source}}},g=[`BasicUsage`,`Source`]})))()}_();export{m as BasicUsage,h as Source,g as __namedExportsOrder,p as default};