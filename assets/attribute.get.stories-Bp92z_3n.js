import{d as i,j as e}from"./iframe-BBwWFqlk.js";import{g as o}from"./attribute-jmTmRs65.js";import"./preload-helper-PPVm8Dsz.js";import"./globals.ctx-DOXvZQDb.js";const b={title:"utils/getAttribute",component:o,tags:["autodocs","new","version:1.0.0"],parameters:i({description:{component:"A utility function to get attribute values from DOM element"}})},a={name:"Get Document Root Attribute",args:{attributeName:"data-custom"},parameters:i({description:{story:"Gets the value of an attribute from document root"}}),loaders:[({args:{attributeName:t}})=>{document.documentElement.setAttribute(t,"test-value")}],render(t){const r=o(t.attributeName);return e.jsxs("div",{children:[e.jsx("div",{className:"mb-4",children:e.jsxs("code",{children:["getAttribute('",t.attributeName,"')"]})}),e.jsx("pre",{className:"bg-neutral-100 dark:bg-neutral-900 p-2 rounded",children:JSON.stringify(r,null,2)})]})}},s={name:"Get Specific Element Attribute",args:{attributeName:"data-custom"},parameters:i({description:{story:"Gets an attribute value from a specific element"}}),render(t){const r=document.createElement("div");r.setAttribute(t.attributeName,"test-value");const u=o(t.attributeName,r);return e.jsxs("div",{children:[e.jsx("div",{className:"mb-4",children:e.jsxs("code",{children:["getAttribute('",t.attributeName,"', element)"]})}),e.jsx("pre",{className:"bg-neutral-100 dark:bg-neutral-900 p-2 rounded",children:JSON.stringify(u,null,2)})]})}},n={name:"Get Non-existent Attribute",args:{attributeName:"data-non-existent"},parameters:i({description:{story:"Returns null when trying to get a non-existent attribute"}}),render(t){const r=o(t.attributeName);return e.jsxs("div",{children:[e.jsx("div",{className:"mb-4",children:e.jsxs("code",{children:["getAttribute('",t.attributeName,"')"]})}),e.jsx("pre",{className:"bg-neutral-100 dark:bg-neutral-900 p-2 rounded",children:JSON.stringify(r,null,2)})]})}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
                <pre className="bg-neutral-100 dark:bg-neutral-900 p-2 rounded">{JSON.stringify(value, null, 2)}</pre>
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
    const value = getAttribute(props.attributeName, element);
    return <div>
                <div className="mb-4">
                    <code>getAttribute('{props.attributeName}', element)</code>
                </div>
                <pre className="bg-neutral-100 dark:bg-neutral-900 p-2 rounded">{JSON.stringify(value, null, 2)}</pre>
            </div>;
  }
}`,...s.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
                <pre className="bg-neutral-100 dark:bg-neutral-900 p-2 rounded">{JSON.stringify(value, null, 2)}</pre>
            </div>;
  }
}`,...n.parameters?.docs?.source}}};const p=["BasicUsage","SpecificElement","NonExistentAttribute"];export{a as BasicUsage,n as NonExistentAttribute,s as SpecificElement,p as __namedExportsOrder,b as default};
