import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{i as t,r as n}from"./iframe-BDaPsrZE.js";import{t as r}from"./attribute-D1JpzU2R.js";import{r as i}from"./dist--pxey9Hb.js";import{t as a}from"./jsx-dev-runtime-DpMrmGJR.js";var o,s,c,l,u,d,f;function p(){return(p=e((()=>{t(),i(),o=a(),s=`/home/runner/work/just-web-foundation/just-web-foundation/libs/css/src/utils/attribute.get.stories.tsx`,c={title:`utils/getAttribute`,component:r,tags:[`autodocs`,`version:0.5`],parameters:n({description:{component:`A utility function to get attribute values from DOM element`}})},l={name:`Get Document Root Attribute`,args:{attributeName:`data-custom`},parameters:n({description:{story:`Gets the value of an attribute from document root`}}),loaders:[({args:{attributeName:e}})=>{document.documentElement.setAttribute(e,`test-value`)}],render(e){let t=r(e.attributeName);return(0,o.jsxDEV)(`div`,{children:[(0,o.jsxDEV)(`div`,{className:`mb-4`,children:(0,o.jsxDEV)(`code`,{children:[`getAttribute('`,e.attributeName,`')`]},void 0,!0,{fileName:s,lineNumber:41,columnNumber:21},this)},void 0,!1,{fileName:s,lineNumber:40,columnNumber:17},this),(0,o.jsxDEV)(`pre`,{className:`bg-neutral-100 dark:bg-neutral-900 p-2 rounded`,children:JSON.stringify(t,null,2)},void 0,!1,{fileName:s,lineNumber:43,columnNumber:17},this)]},void 0,!0,{fileName:s,lineNumber:39,columnNumber:12},this)}},u={name:`Get Specific Element Attribute`,args:{attributeName:`data-custom`},parameters:n({description:{story:`Gets an attribute value from a specific element`}}),render(e){let t=document.createElement(`div`);t.setAttribute(e.attributeName,`test-value`);let n=r(e.attributeName,t);return(0,o.jsxDEV)(`div`,{children:[(0,o.jsxDEV)(`div`,{className:`mb-4`,children:(0,o.jsxDEV)(`code`,{children:[`getAttribute('`,e.attributeName,`', element)`]},void 0,!0,{fileName:s,lineNumber:65,columnNumber:21},this)},void 0,!1,{fileName:s,lineNumber:64,columnNumber:17},this),(0,o.jsxDEV)(`pre`,{className:`bg-neutral-100 dark:bg-neutral-900 p-2 rounded`,children:JSON.stringify(n,null,2)},void 0,!1,{fileName:s,lineNumber:67,columnNumber:17},this)]},void 0,!0,{fileName:s,lineNumber:63,columnNumber:12},this)}},d={name:`Get Non-existent Attribute`,args:{attributeName:`data-non-existent`},parameters:n({description:{story:`Returns null when trying to get a non-existent attribute`}}),render(e){let t=r(e.attributeName);return(0,o.jsxDEV)(`div`,{children:[(0,o.jsxDEV)(`div`,{className:`mb-4`,children:(0,o.jsxDEV)(`code`,{children:[`getAttribute('`,e.attributeName,`')`]},void 0,!0,{fileName:s,lineNumber:87,columnNumber:21},this)},void 0,!1,{fileName:s,lineNumber:86,columnNumber:17},this),(0,o.jsxDEV)(`pre`,{className:`bg-neutral-100 dark:bg-neutral-900 p-2 rounded`,children:JSON.stringify(t,null,2)},void 0,!1,{fileName:s,lineNumber:89,columnNumber:17},this)]},void 0,!0,{fileName:s,lineNumber:85,columnNumber:12},this)}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
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
}`,...d.parameters?.docs?.source}}},f=[`BasicUsage`,`SpecificElement`,`NonExistentAttribute`]})))()}p();export{l as BasicUsage,d as NonExistentAttribute,u as SpecificElement,f as __namedExportsOrder,c as default};