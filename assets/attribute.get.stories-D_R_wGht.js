import{j as e}from"./jsx-dev-runtime-DF-ftqEI.js";import{d as u}from"./iframe-DMM-er1z.js";import{g as n}from"./attribute-jmTmRs65.js";import"./preload-helper-PPVm8Dsz.js";import"./globals.ctx-DOXvZQDb.js";const N={title:"utils/getAttribute",component:n,tags:["autodocs","version:0.5"],parameters:u({description:{component:"A utility function to get attribute values from DOM element"}})},s={name:"Get Document Root Attribute",args:{attributeName:"data-custom"},parameters:u({description:{story:"Gets the value of an attribute from document root"}}),loaders:[({args:{attributeName:t}})=>{document.documentElement.setAttribute(t,"test-value")}],render(t){const r=n(t.attributeName);return e.jsxDEV("div",{children:[e.jsxDEV("div",{className:"mb-4",children:e.jsxDEV("code",{children:["getAttribute('",t.attributeName,"')"]},void 0,!0,{fileName:"/home/runner/work/just-web-foundation/just-web-foundation/libs/css/src/utils/attribute.get.stories.tsx",lineNumber:41,columnNumber:21},this)},void 0,!1,{fileName:"/home/runner/work/just-web-foundation/just-web-foundation/libs/css/src/utils/attribute.get.stories.tsx",lineNumber:40,columnNumber:17},this),e.jsxDEV("pre",{className:"bg-neutral-100 dark:bg-neutral-900 p-2 rounded",children:JSON.stringify(r,null,2)},void 0,!1,{fileName:"/home/runner/work/just-web-foundation/just-web-foundation/libs/css/src/utils/attribute.get.stories.tsx",lineNumber:43,columnNumber:17},this)]},void 0,!0,{fileName:"/home/runner/work/just-web-foundation/just-web-foundation/libs/css/src/utils/attribute.get.stories.tsx",lineNumber:39,columnNumber:12},this)}},i={name:"Get Specific Element Attribute",args:{attributeName:"data-custom"},parameters:u({description:{story:"Gets an attribute value from a specific element"}}),render(t){const r=document.createElement("div");r.setAttribute(t.attributeName,"test-value");const o=n(t.attributeName,r);return e.jsxDEV("div",{children:[e.jsxDEV("div",{className:"mb-4",children:e.jsxDEV("code",{children:["getAttribute('",t.attributeName,"', element)"]},void 0,!0,{fileName:"/home/runner/work/just-web-foundation/just-web-foundation/libs/css/src/utils/attribute.get.stories.tsx",lineNumber:65,columnNumber:21},this)},void 0,!1,{fileName:"/home/runner/work/just-web-foundation/just-web-foundation/libs/css/src/utils/attribute.get.stories.tsx",lineNumber:64,columnNumber:17},this),e.jsxDEV("pre",{className:"bg-neutral-100 dark:bg-neutral-900 p-2 rounded",children:JSON.stringify(o,null,2)},void 0,!1,{fileName:"/home/runner/work/just-web-foundation/just-web-foundation/libs/css/src/utils/attribute.get.stories.tsx",lineNumber:67,columnNumber:17},this)]},void 0,!0,{fileName:"/home/runner/work/just-web-foundation/just-web-foundation/libs/css/src/utils/attribute.get.stories.tsx",lineNumber:63,columnNumber:12},this)}},a={name:"Get Non-existent Attribute",args:{attributeName:"data-non-existent"},parameters:u({description:{story:"Returns null when trying to get a non-existent attribute"}}),render(t){const r=n(t.attributeName);return e.jsxDEV("div",{children:[e.jsxDEV("div",{className:"mb-4",children:e.jsxDEV("code",{children:["getAttribute('",t.attributeName,"')"]},void 0,!0,{fileName:"/home/runner/work/just-web-foundation/just-web-foundation/libs/css/src/utils/attribute.get.stories.tsx",lineNumber:87,columnNumber:21},this)},void 0,!1,{fileName:"/home/runner/work/just-web-foundation/just-web-foundation/libs/css/src/utils/attribute.get.stories.tsx",lineNumber:86,columnNumber:17},this),e.jsxDEV("pre",{className:"bg-neutral-100 dark:bg-neutral-900 p-2 rounded",children:JSON.stringify(r,null,2)},void 0,!1,{fileName:"/home/runner/work/just-web-foundation/just-web-foundation/libs/css/src/utils/attribute.get.stories.tsx",lineNumber:89,columnNumber:17},this)]},void 0,!0,{fileName:"/home/runner/work/just-web-foundation/just-web-foundation/libs/css/src/utils/attribute.get.stories.tsx",lineNumber:85,columnNumber:12},this)}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
}`,...s.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
}`,...i.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
}`,...a.parameters?.docs?.source}}};const f=["BasicUsage","SpecificElement","NonExistentAttribute"];export{s as BasicUsage,a as NonExistentAttribute,i as SpecificElement,f as __namedExportsOrder,N as default};
