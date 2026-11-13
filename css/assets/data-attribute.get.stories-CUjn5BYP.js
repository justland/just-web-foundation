import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{i as t,r as n}from"./iframe-kL2xsVFS.js";import{m as r,n as i,t as a}from"./jsx-dev-runtime-BnL7LjSC.js";var o,s,c,l,u,d,f;function p(){return(p=e((()=>{t(),i(),o=a(),s=`/home/runner/work/just-web-foundation/just-web-foundation/libs/css/src/utils/data-attribute.get.stories.tsx`,c={title:`utils/getDataAttribute`,component:r,tags:[`autodocs`,`version:0.1`],parameters:n({description:{component:"A utility function to get `data-*` attribute values from DOM element"}})},l={name:`Get Document Root Attribute`,args:{attributeName:`data-theme`},parameters:n({description:{story:`Gets the value of data-theme attribute from document root`}}),render(e){let t=r(e.attributeName);return(0,o.jsxDEV)(`div`,{children:[(0,o.jsxDEV)(`div`,{className:`mb-4`,children:(0,o.jsxDEV)(`code`,{children:[`getDataAttribute('`,e.attributeName,`')`]},void 0,!0,{fileName:s,lineNumber:40,columnNumber:6},this)},void 0,!1,{fileName:s,lineNumber:39,columnNumber:5},this),(0,o.jsxDEV)(`pre`,{className:`bg-neutral-100 dark:bg-neutral-900 p-2 rounded`,children:JSON.stringify(t,null,2)},void 0,!1,{fileName:s,lineNumber:42,columnNumber:5},this)]},void 0,!0,{fileName:s,lineNumber:38,columnNumber:4},this)}},u={name:`Get Specific Element Attribute`,args:{attributeName:`data-custom`},parameters:n({description:{story:`Gets an attribute value from a specific element`}}),render(e){let t=document.createElement(`div`);t.setAttribute(e.attributeName,`test-value`);let n=r(e.attributeName,t);return(0,o.jsxDEV)(`div`,{children:[(0,o.jsxDEV)(`div`,{className:`mb-4`,children:(0,o.jsxDEV)(`code`,{children:[`getDataAttribute('`,e.attributeName,`', element)`]},void 0,!0,{fileName:s,lineNumber:67,columnNumber:6},this)},void 0,!1,{fileName:s,lineNumber:66,columnNumber:5},this),(0,o.jsxDEV)(`pre`,{className:`bg-neutral-100 dark:bg-neutral-900 p-2 rounded`,children:JSON.stringify(n,null,2)},void 0,!1,{fileName:s,lineNumber:69,columnNumber:5},this)]},void 0,!0,{fileName:s,lineNumber:65,columnNumber:4},this)}},d={name:`Get Non-existent Attribute`,args:{attributeName:`data-non-existent`},parameters:n({description:{story:`Returns null when trying to get a non-existent attribute`}}),render(e){let t=r(e.attributeName);return(0,o.jsxDEV)(`div`,{children:[(0,o.jsxDEV)(`div`,{className:`mb-4`,children:(0,o.jsxDEV)(`code`,{children:[`getDataAttribute('`,e.attributeName,`')`]},void 0,!0,{fileName:s,lineNumber:92,columnNumber:6},this)},void 0,!1,{fileName:s,lineNumber:91,columnNumber:5},this),(0,o.jsxDEV)(`pre`,{className:`bg-neutral-100 dark:bg-neutral-900 p-2 rounded`,children:JSON.stringify(t,null,2)},void 0,!1,{fileName:s,lineNumber:94,columnNumber:5},this)]},void 0,!0,{fileName:s,lineNumber:90,columnNumber:4},this)}},f=[`BasicUsage`,`SpecificElement`,`NonExistentAttribute`],l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  name: 'Get Document Root Attribute',
  args: {
    attributeName: 'data-theme'
  },
  parameters: defineDocsParam({
    description: {
      story: 'Gets the value of data-theme attribute from document root'
    }
  }),
  render(props: StoryArgs) {
    const value = getDataAttribute(props.attributeName);
    return <div>
                <div className="mb-4">
                    <code>getDataAttribute('{props.attributeName}')</code>
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
    const value = getDataAttribute(props.attributeName, element);
    return <div>
                <div className="mb-4">
                    <code>getDataAttribute('{props.attributeName}', element)</code>
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
    const value = getDataAttribute(props.attributeName);
    return <div>
                <div className="mb-4">
                    <code>getDataAttribute('{props.attributeName}')</code>
                </div>
                <pre className="bg-neutral-100 dark:bg-neutral-900 p-2 rounded">
                    {JSON.stringify(value, null, 2)}
                </pre>
            </div>;
  }
}`,...d.parameters?.docs?.source}}}})))()}p();export{l as BasicUsage,d as NonExistentAttribute,u as SpecificElement,f as __namedExportsOrder,c as default};