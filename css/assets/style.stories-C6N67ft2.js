import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{i as t,r as n}from"./iframe-8ZVkZNUj.js";import{i as r,n as i,r as a,t as o}from"./dist-CJMrBJtm.js";import{t as s}from"./jsx-dev-runtime-DpMrmGJR.js";import{n as c,t as l}from"./dedent-DQaCLeUO.js";var u,d,f,p,m;function h(){return(h=e((()=>{t(),c(),o(),a(),u=s(),d=`/home/runner/work/just-web-foundation/just-web-foundation/libs/css/src/props/style.stories.tsx`,f={title:`props/StyleProps`,tags:[`autodocs`,`new`,`version:0.1`],render:()=>(0,u.jsxDEV)(u.Fragment,{},void 0,!1,{fileName:d,lineNumber:9,columnNumber:17},void 0)},p={tags:[`!test`,`editor`],parameters:n({description:{story:"`style` prop with extended `CSSProperties` type to support custom properties. This is useful when composing component props"},source:{code:l`
            import type { StyleProps } from '@just-web/css'

            type MyCompProps = PropsWithChildren<StyleProps & OtherProps>

            const MyComponent = ({ style, children }: MyCompProps) => {
                return <div style={style}>{children}</div>
            }

            export default () => <MyComponent style={{ color: 'red' }}>Hello in red</MyComponent>
            `}})},i(p,{availableImports:{"@just-web/css":r},code:p.parameters?.docs?.source?.code}),p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  tags: ['!test', 'editor'],
  parameters: defineDocsParam({
    description: {
      story: '\`style\` prop with extended \`CSSProperties\` type to support custom properties. This is useful when composing component props'
    },
    source: {
      code: dedent\`
            import type { StyleProps } from '@just-web/css'

            type MyCompProps = PropsWithChildren<StyleProps & OtherProps>

            const MyComponent = ({ style, children }: MyCompProps) => {
                return <div style={style}>{children}</div>
            }

            export default () => <MyComponent style={{ color: 'red' }}>Hello in red</MyComponent>
            \`
    }
  })
}`,...p.parameters?.docs?.source}}},m=[`Example`]})))()}h();export{p as Example,m as __namedExportsOrder,f as default};