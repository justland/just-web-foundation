import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{a as t}from"./chunk-W22LQPXL-BSpKiHdn.js";import{a as n,s as r}from"./iframe-Bl0V_0SD.js";var i,a,o,s;function c(){return(c=e((()=>{r(),i=t(),a={title:`animation/WaitForAnimationsOptions`,tags:[`type`,`rc`,`version:3.6`],parameters:n({description:{component:"Options for `waitForAnimations` and `getPendingAnimations`. Controls which animations are matched, how long to settle before querying, and when to time out."}})},o={tags:[`spec`],parameters:n({source:{code:`interface WaitForAnimationsOptions {
  subtree?: boolean             // Include descendants. Default: true
  settleFrames?: number         // Frames to wait before first query. Default: 1
  filter?: (a: Animation) => boolean  // Skip animations you don't care about
  timeout?: number              // Reject after this many ms
  signal?: AbortSignal          // Cancel externally
}`}}),render:()=>(0,i.jsxs)(`table`,{style:{borderCollapse:`collapse`,width:`100%`,fontSize:`0.875rem`},children:[(0,i.jsx)(`thead`,{children:(0,i.jsx)(`tr`,{children:[`Option`,`Type`,`Default`,`Description`].map(e=>(0,i.jsx)(`th`,{style:{textAlign:`left`,padding:`0.5rem`,borderBottom:`2px solid #ccc`},children:e},e))})}),(0,i.jsx)(`tbody`,{children:[[`subtree`,`boolean`,`true`,`Include descendants and pseudo-elements`],[`settleFrames`,`number`,`1`,`Frames to wait before the first query`],[`filter`,`(a: Animation) => boolean`,`—`,`Skip animations the caller does not care about`],[`timeout`,`number`,`—`,`Reject after this many milliseconds`],[`signal`,`AbortSignal`,`—`,`Cancel externally via AbortController`]].map(([e,t,n,r])=>(0,i.jsxs)(`tr`,{children:[(0,i.jsx)(`td`,{style:{padding:`0.5rem`,borderBottom:`1px solid #eee`},children:(0,i.jsx)(`code`,{children:e})}),(0,i.jsx)(`td`,{style:{padding:`0.5rem`,borderBottom:`1px solid #eee`},children:(0,i.jsx)(`code`,{children:t})}),(0,i.jsx)(`td`,{style:{padding:`0.5rem`,borderBottom:`1px solid #eee`},children:(0,i.jsx)(`code`,{children:n})}),(0,i.jsx)(`td`,{style:{padding:`0.5rem`,borderBottom:`1px solid #eee`},children:r})]},e))})]})},o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  tags: ['spec'],
  parameters: defineDocsParam({
    source: {
      code: \`interface WaitForAnimationsOptions {
  subtree?: boolean             // Include descendants. Default: true
  settleFrames?: number         // Frames to wait before first query. Default: 1
  filter?: (a: Animation) => boolean  // Skip animations you don't care about
  timeout?: number              // Reject after this many ms
  signal?: AbortSignal          // Cancel externally
}\`
    }
  }),
  render: () => <table style={{
    borderCollapse: 'collapse',
    width: '100%',
    fontSize: '0.875rem'
  }}>
            <thead>
                <tr>
                    {['Option', 'Type', 'Default', 'Description'].map(h => <th key={h} style={{
          textAlign: 'left',
          padding: '0.5rem',
          borderBottom: '2px solid #ccc'
        }}>
                            {h}
                        </th>)}
                </tr>
            </thead>
            <tbody>
                {[['subtree', 'boolean', 'true', 'Include descendants and pseudo-elements'], ['settleFrames', 'number', '1', 'Frames to wait before the first query'], ['filter', '(a: Animation) => boolean', '—', 'Skip animations the caller does not care about'], ['timeout', 'number', '—', 'Reject after this many milliseconds'], ['signal', 'AbortSignal', '—', 'Cancel externally via AbortController']].map(([name, type, def, desc]) => <tr key={name}>
                        <td style={{
          padding: '0.5rem',
          borderBottom: '1px solid #eee'
        }}>
                            <code>{name}</code>
                        </td>
                        <td style={{
          padding: '0.5rem',
          borderBottom: '1px solid #eee'
        }}>
                            <code>{type}</code>
                        </td>
                        <td style={{
          padding: '0.5rem',
          borderBottom: '1px solid #eee'
        }}>
                            <code>{def}</code>
                        </td>
                        <td style={{
          padding: '0.5rem',
          borderBottom: '1px solid #eee'
        }}>{desc}</td>
                    </tr>)}
            </tbody>
        </table>
}`,...o.parameters?.docs?.source}}},s=[`Overview`]})))()}c();export{o as Overview,s as __namedExportsOrder,a as default};