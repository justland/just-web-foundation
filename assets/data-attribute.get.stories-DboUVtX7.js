import{j as e}from"./jsx-dev-runtime-DF-ftqEI.js";import{d as u}from"./iframe-BRbKEAca.js";import{g as n}from"./data-attribute-DhOVGBXa.js";import"./preload-helper-PPVm8Dsz.js";import"./globals.ctx-DOXvZQDb.js";import"./attribute-jmTmRs65.js";const f={title:"utils/getDataAttribute",component:n,tags:["autodocs","version:0.1"],parameters:u({description:{component:"A utility function to get `data-*` attribute values from DOM element"}})},a={name:"Get Document Root Attribute",args:{attributeName:"data-theme"},parameters:u({description:{story:"Gets the value of data-theme attribute from document root"}}),render(t){const r=n(t.attributeName);return e.jsxDEV("div",{children:[e.jsxDEV("div",{className:"mb-4",children:e.jsxDEV("code",{children:["getDataAttribute('",t.attributeName,"')"]},void 0,!0,{fileName:"/home/runner/work/just-web-foundation/just-web-foundation/libs/css/src/utils/data-attribute.get.stories.tsx",lineNumber:34,columnNumber:21},this)},void 0,!1,{fileName:"/home/runner/work/just-web-foundation/just-web-foundation/libs/css/src/utils/data-attribute.get.stories.tsx",lineNumber:33,columnNumber:17},this),e.jsxDEV("pre",{className:"bg-neutral-100 dark:bg-neutral-900 p-2 rounded",children:JSON.stringify(r,null,2)},void 0,!1,{fileName:"/home/runner/work/just-web-foundation/just-web-foundation/libs/css/src/utils/data-attribute.get.stories.tsx",lineNumber:36,columnNumber:17},this)]},void 0,!0,{fileName:"/home/runner/work/just-web-foundation/just-web-foundation/libs/css/src/utils/data-attribute.get.stories.tsx",lineNumber:32,columnNumber:12},this)}},s={name:"Get Specific Element Attribute",args:{attributeName:"data-custom"},parameters:u({description:{story:"Gets an attribute value from a specific element"}}),render(t){const r=document.createElement("div");r.setAttribute(t.attributeName,"test-value");const o=n(t.attributeName,r);return e.jsxDEV("div",{children:[e.jsxDEV("div",{className:"mb-4",children:e.jsxDEV("code",{children:["getDataAttribute('",t.attributeName,"', element)"]},void 0,!0,{fileName:"/home/runner/work/just-web-foundation/just-web-foundation/libs/css/src/utils/data-attribute.get.stories.tsx",lineNumber:58,columnNumber:21},this)},void 0,!1,{fileName:"/home/runner/work/just-web-foundation/just-web-foundation/libs/css/src/utils/data-attribute.get.stories.tsx",lineNumber:57,columnNumber:17},this),e.jsxDEV("pre",{className:"bg-neutral-100 dark:bg-neutral-900 p-2 rounded",children:JSON.stringify(o,null,2)},void 0,!1,{fileName:"/home/runner/work/just-web-foundation/just-web-foundation/libs/css/src/utils/data-attribute.get.stories.tsx",lineNumber:60,columnNumber:17},this)]},void 0,!0,{fileName:"/home/runner/work/just-web-foundation/just-web-foundation/libs/css/src/utils/data-attribute.get.stories.tsx",lineNumber:56,columnNumber:12},this)}},i={name:"Get Non-existent Attribute",args:{attributeName:"data-non-existent"},parameters:u({description:{story:"Returns null when trying to get a non-existent attribute"}}),render(t){const r=n(t.attributeName);return e.jsxDEV("div",{children:[e.jsxDEV("div",{className:"mb-4",children:e.jsxDEV("code",{children:["getDataAttribute('",t.attributeName,"')"]},void 0,!0,{fileName:"/home/runner/work/just-web-foundation/just-web-foundation/libs/css/src/utils/data-attribute.get.stories.tsx",lineNumber:80,columnNumber:21},this)},void 0,!1,{fileName:"/home/runner/work/just-web-foundation/just-web-foundation/libs/css/src/utils/data-attribute.get.stories.tsx",lineNumber:79,columnNumber:17},this),e.jsxDEV("pre",{className:"bg-neutral-100 dark:bg-neutral-900 p-2 rounded",children:JSON.stringify(r,null,2)},void 0,!1,{fileName:"/home/runner/work/just-web-foundation/just-web-foundation/libs/css/src/utils/data-attribute.get.stories.tsx",lineNumber:82,columnNumber:17},this)]},void 0,!0,{fileName:"/home/runner/work/just-web-foundation/just-web-foundation/libs/css/src/utils/data-attribute.get.stories.tsx",lineNumber:78,columnNumber:12},this)}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
}`,...a.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
}`,...s.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
}`,...i.parameters?.docs?.source}}};const p=["BasicUsage","SpecificElement","NonExistentAttribute"];export{a as BasicUsage,i as NonExistentAttribute,s as SpecificElement,p as __namedExportsOrder,f as default};
