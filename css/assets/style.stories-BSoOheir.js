import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{i as t,r as n}from"./iframe-kL2xsVFS.js";import{n as r,r as i,t as a}from"./jsx-dev-runtime-BnL7LjSC.js";import{n as o,t as s}from"./dedent-Dmnlqj-U.js";import{n as c,t as l}from"./dist-mNYakrqk.js";var u,d,f,p,m;function h(){return(h=e((()=>{t(),o(),l(),r(),u=a(),d=`/home/runner/work/just-web-foundation/just-web-foundation/libs/css/src/props/style.stories.tsx`,f={title:`props/StyleProps`,tags:[`autodocs`,`new`,`version:0.1`],render:()=>(0,u.jsxDEV)(u.Fragment,{},void 0,!1,{fileName:d,lineNumber:10,columnNumber:16},void 0)},p={tags:[`!test`,`editor`],parameters:n({description:{story:"`style` prop with extended `CSSProperties` type to support custom properties. This is useful when composing component props"},source:{code:s`
            import type { StyleProps } from '@just-web/css'

            type MyCompProps = PropsWithChildren<StyleProps & OtherProps>

            const MyComponent = ({ style, children }: MyCompProps) => {
                return <div style={style}>{children}</div>
            }

            export default () => <MyComponent style={{ color: 'red' }}>Hello in red</MyComponent>
            `}})},c(p,{availableImports:{"@just-web/css":i},code:p.parameters?.docs?.source?.code}),m=[`Example`],p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
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
}`,...p.parameters?.docs?.source}}}})))()}h();export{p as Example,m as __namedExportsOrder,f as default};