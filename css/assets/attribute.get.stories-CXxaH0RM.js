import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{i as t,r as n}from"./iframe-kL2xsVFS.js";import{n as r,t as i,y as a}from"./jsx-dev-runtime-BnL7LjSC.js";var o,s,c,l,u,d,f;function p(){return(p=e((()=>{t(),r(),o=i(),s=`/home/runner/work/just-web-foundation/just-web-foundation/libs/css/src/utils/attribute.get.stories.tsx`,c={title:`utils/getAttribute`,component:a,tags:[`autodocs`,`version:0.5`],parameters:n({description:{component:`A utility function to get attribute values from DOM element`}})},l={name:`Get Document Root Attribute`,args:{attributeName:`data-custom`},parameters:n({description:{story:`Gets the value of an attribute from document root`}}),loaders:[({args:{attributeName:e}})=>{document.documentElement.setAttribute(e,`test-value`)}],render(e){let t=a(e.attributeName);return(0,o.jsxDEV)(`div`,{children:[(0,o.jsxDEV)(`div`,{className:`mb-4`,children:(0,o.jsxDEV)(`code`,{children:[`getAttribute('`,e.attributeName,`')`]},void 0,!0,{fileName:s,lineNumber:45,columnNumber:6},this)},void 0,!1,{fileName:s,lineNumber:44,columnNumber:5},this),(0,o.jsxDEV)(`pre`,{className:`bg-neutral-100 dark:bg-neutral-900 p-2 rounded`,children:JSON.stringify(t,null,2)},void 0,!1,{fileName:s,lineNumber:47,columnNumber:5},this)]},void 0,!0,{fileName:s,lineNumber:43,columnNumber:4},this)}},u={name:`Get Specific Element Attribute`,args:{attributeName:`data-custom`},parameters:n({description:{story:`Gets an attribute value from a specific element`}}),render(e){let t=document.createElement(`div`);t.setAttribute(e.attributeName,`test-value`);let n=a(e.attributeName,t);return(0,o.jsxDEV)(`div`,{children:[(0,o.jsxDEV)(`div`,{className:`mb-4`,children:(0,o.jsxDEV)(`code`,{children:[`getAttribute('`,e.attributeName,`', element)`]},void 0,!0,{fileName:s,lineNumber:72,columnNumber:6},this)},void 0,!1,{fileName:s,lineNumber:71,columnNumber:5},this),(0,o.jsxDEV)(`pre`,{className:`bg-neutral-100 dark:bg-neutral-900 p-2 rounded`,children:JSON.stringify(n,null,2)},void 0,!1,{fileName:s,lineNumber:74,columnNumber:5},this)]},void 0,!0,{fileName:s,lineNumber:70,columnNumber:4},this)}},d={name:`Get Non-existent Attribute`,args:{attributeName:`data-non-existent`},parameters:n({description:{story:`Returns null when trying to get a non-existent attribute`}}),render(e){let t=a(e.attributeName);return(0,o.jsxDEV)(`div`,{children:[(0,o.jsxDEV)(`div`,{className:`mb-4`,children:(0,o.jsxDEV)(`code`,{children:[`getAttribute('`,e.attributeName,`')`]},void 0,!0,{fileName:s,lineNumber:97,columnNumber:6},this)},void 0,!1,{fileName:s,lineNumber:96,columnNumber:5},this),(0,o.jsxDEV)(`pre`,{className:`bg-neutral-100 dark:bg-neutral-900 p-2 rounded`,children:JSON.stringify(t,null,2)},void 0,!1,{fileName:s,lineNumber:99,columnNumber:5},this)]},void 0,!0,{fileName:s,lineNumber:95,columnNumber:4},this)}},f=[`BasicUsage`,`SpecificElement`,`NonExistentAttribute`],l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  name: 'Get Document Root Attribute',
  args: {
    attributeName: 'data-custom'
  },
  parameters: defineDocsParam({
    description: {
      story: 'Gets the value of an attribute from document root'
    }
  }),
  loaders: [({
    args: {
      attributeName
    }
  }) => {
    document.documentElement.setAttribute(attributeName, 'test-value');
  }],
  render(props: StoryArgs) {
    const value = getAttribute(props.attributeName);
    return <div>
                <div className="mb-4">
                    <code>getAttribute('{props.attributeName}')</code>
                </div>
                <pre className="bg-neutral-100 dark:bg-neutral-900 p-2 rounded">
                    {JSON.stringify(value, null, 2)}
                </pre>
            </div>;
  }
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  name: 'Get Specific Element Attribute',
  args: {
    attributeName: 'data-custom'
  },
  parameters: defineDocsParam({
    description: {
      story: 'Gets an attribute value from a specific element'
    }
  }),
  render(props: StoryArgs) {
    const element = document.createElement('div');
    element.setAttribute(props.attributeName, 'test-value');
    const value = getAttribute(props.attributeName, element);
    return <div>
                <div className="mb-4">
                    <code>getAttribute('{props.attributeName}', element)</code>
                </div>
                <pre className="bg-neutral-100 dark:bg-neutral-900 p-2 rounded">
                    {JSON.stringify(value, null, 2)}
                </pre>
            </div>;
  }
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  name: 'Get Non-existent Attribute',
  args: {
    attributeName: 'data-non-existent'
  },
  parameters: defineDocsParam({
    description: {
      story: 'Returns null when trying to get a non-existent attribute'
    }
  }),
  render(props: StoryArgs) {
    const value = getAttribute(props.attributeName);
    return <div>
                <div className="mb-4">
                    <code>getAttribute('{props.attributeName}')</code>
                </div>
                <pre className="bg-neutral-100 dark:bg-neutral-900 p-2 rounded">
                    {JSON.stringify(value, null, 2)}
                </pre>
            </div>;
  }
}`,...d.parameters?.docs?.source}}}})))()}p();export{l as BasicUsage,d as NonExistentAttribute,u as SpecificElement,f as __namedExportsOrder,c as default};